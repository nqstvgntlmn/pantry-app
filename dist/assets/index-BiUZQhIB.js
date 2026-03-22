(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const ua={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:"",favouriteStore:""},d={hid:null,inv:[],recs:[],shop:[],mp:{},mpCooked:{},cfg:{...ua},cookLog:[],wasteLog:[],activity:[],productPrefs:{},homeDataReady:!1,chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function pe(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function et(t,e){localStorage.setItem(t,JSON.stringify(e))}const Ts=[{value:0,label:"·/·"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function as(t){const e=Number(t)||0,n=Math.floor(e),i=e-n,s=Ts.reduce((o,r)=>Math.abs(r.value-i)<Math.abs(o-i)?r.value:o,0);return{whole:n,frac:s}}function ot(t,e){const n=Math.max(0,Math.min(99,Math.floor(Number(t)||0))),i=Number(e)||0,s=n+i;return s<=0?.25:s}function tn(t){const{whole:e,frac:n}=as(t),i=n>0?(Ts.find(s=>Math.abs(s.value-n)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}const Bw={bag:"Bags",bar:"Bars",bottle:"Bottles",box:"Boxes",bucket:"Buckets",bunch:"Bunches",can:"Cans",carton:"Cartons",clove:"Cloves",container:"Containers",gallon:"Gallons","half gallon":"Half Gallons",head:"Heads",jar:"Jars",liter:"Liters",loaf:"Loaves",pack:"Packs",piece:"Pieces",pound:"Pounds",roll:"Rolls",tube:"Tubes",unit:"Units"};function pd(t,e){if(!t)return"Unit";const n=Number(e)||0;return Math.floor(n)<=1?t:Bw[t.toLowerCase()]||t}function cs(t,e){return`${tn(t)} ${pd(e||"Unit",t)}`}function bl(t,e){const n=e>.01,i=Ts.map(o=>{const r=Math.abs(o.value-e)<.01?" selected":"";return`<option value="${o.value}"${r}>${o.label}</option>`}).join("");return`<select class="frac-select${n?" frac-active":""}" id="${t}">${i}</select>`}function Z(t){return t?t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Ga(t){if(!t)return;const e=t.value;if(!e)return;const n=t.selectionStart,i=e.replace(/(^|\s)(\w)/g,(s,o,r)=>o+r.toUpperCase());i!==e&&(t.value=i,t.setSelectionRange(n,n))}function u(t){return document.getElementById(t)}function At(){return new Date().toISOString().split("T")[0]}function Ka(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Hw(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function rt(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),i=Math.round((n-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function rm(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[t]||t}const zw=[{keywords:["mac & cheese","mac and cheese","mac n cheese","macaroni and cheese"],emoji:"🧀"},{keywords:["energy drink","red bull","monster energy","celsius","bang"],emoji:"🥤"},{keywords:["ice cream","gelato","sorbet","frozen yogurt"],emoji:"🍦"},{keywords:["olive oil","cooking oil","vegetable oil","coconut oil","canola oil","sesame oil","avocado oil"],emoji:"🫒"},{keywords:["soy sauce","fish sauce","hot sauce","sriracha","tabasco","worcestershire"],emoji:"🫙"},{keywords:["baby food","baby formula","diaper"],emoji:"👶"},{keywords:["pet food","dog food","cat food","dog treat","cat treat"],emoji:"🐾"},{keywords:["dish soap","hand soap","body wash"],emoji:"🧴"},{keywords:["sparkling water","seltzer","club soda"],emoji:"💧"},{keywords:["oat milk","almond milk","soy milk","coconut milk"],emoji:"🥛"},{keywords:["chocolate bar"],emoji:"🍫"},{keywords:["peanut butter","almond butter","sunflower butter"],emoji:"🥜"},{keywords:["tomato sauce","marinara","pizza sauce","pasta sauce"],emoji:"🥫"},{keywords:["caper","pickle","relish","artichoke heart","sun-dried","sundried","anchov"],emoji:"🫙"},{keywords:["olive","black olive","green olive","kalamata"],emoji:"🫒"},{keywords:["canned","can of"],emoji:"🥫"},{keywords:["bread","pita","bagel","tortilla","naan","flatbread","bun","roll","croissant","muffin","biscuit","english muffin","wrap"],emoji:"🫓"},{keywords:["loaf"],emoji:"🫓"},{keywords:["peppercorn","spice","herb","cumin","turmeric","paprika","cinnamon","oregano","basil","thyme","rosemary","cayenne","chili flake","seasoning","bay leaf","nutmeg","cardamom","clove","saffron","dill","parsley","sage","fennel seed","coriander","allspice","ginger powder"],emoji:"🌶️"},{keywords:["chocolate","cocoa","cacao"],emoji:"🍫"},{keywords:["candy","gummy","gum","licorice","taffy"],emoji:"🍬"},{keywords:["soda","cola","pepsi","coke","sprite","fanta","ginger ale","tonic","drink"],emoji:"🥤"},{keywords:["water"],emoji:"💧"},{keywords:["coffee","espresso","cold brew"],emoji:"☕"},{keywords:["tea","matcha","chai","herbal tea"],emoji:"🍵"},{keywords:["juice","lemonade","smoothie"],emoji:"🧃"},{keywords:["milk","cream","half and half","half & half","creamer"],emoji:"🥛"},{keywords:["cheese","cheddar","mozzarella","parmesan","brie","gouda","feta","ricotta","provolone","swiss","gruyere","colby","pepper jack","cream cheese"],emoji:"🧀"},{keywords:["butter","margarine","ghee"],emoji:"🧈"},{keywords:["egg"],emoji:"🥚"},{keywords:["yogurt","yoghurt","kefir"],emoji:"🥛"},{keywords:["chicken","poultry","turkey","rotisserie"],emoji:"🍗"},{keywords:["beef","steak","meat","lamb","pork","bacon","sausage","ground","brisket","ham","prosciutto","salami","deli"],emoji:"🥩"},{keywords:["fish","salmon","tuna","cod","shrimp","seafood","crab","lobster","tilapia","sardine","clam","mussel","scallop"],emoji:"🐟"},{keywords:["tofu","tempeh","seitan"],emoji:"🥦"},{keywords:["apple","banana","orange","grape","berry","berries","strawberry","blueberry","mango","peach","pear","plum","kiwi","melon","watermelon","pineapple","cherry","lemon","lime","avocado","fruit","raspberry","blackberry","clementine","tangerine","grapefruit","papaya","pomegranate","fig","date","coconut"],emoji:"🍎"},{keywords:["broccoli","carrot","celery","cabbage","tomato","onion","garlic","spinach","mushroom","squash","lettuce","cucumber","pepper","potato","corn","zucchini","eggplant","vegetable","produce","jalap","kale","asparagus","cauliflower","radish","beet","turnip","sweet potato","yam","green bean","snap pea","arugula","chard","bok choy","scallion","leek","ginger"],emoji:"🥦"},{keywords:["chip","crisp","pringles","pretzel","popcorn","cracker","granola bar","protein bar","trail mix","jerky"],emoji:"🍿"},{keywords:["cookie","biscotti","wafer"],emoji:"🍪"},{keywords:["frozen"],emoji:"🧊"},{keywords:["condiment"],emoji:"🧴"},{keywords:["sauce","ketchup","mustard","mayo","mayonnaise","salsa","dressing","jam","jelly","honey","syrup","marinade","glaze","chutney","hummus","tahini","pesto"],emoji:"🫙"},{keywords:["vinegar","rice vinegar","balsamic","apple cider vinegar","white vinegar","red wine vinegar"],emoji:"🍶"},{keywords:["oil"],emoji:"🫒"},{keywords:["cleaning","cleaner","detergent","bleach","windex","sponge","mop","broom","disinfectant","lysol","scrub"],emoji:"🧹"},{keywords:["lotion","shampoo","conditioner","deodorant","sunscreen","face wash","moisturizer","soap","toothpaste","mouthwash","floss","razor","tissue","toilet paper","paper towel"],emoji:"🧴"},{keywords:["vitamin","medicine","supplement","capsule","tablet","pain relief","tylenol","advil","ibuprofen","probiotic","antacid","allergy"],emoji:"💊"},{keywords:["baby","infant","formula"],emoji:"👶"},{keywords:["pet","dog","cat","kibble","litter"],emoji:"🐾"},{keywords:["nut","almond","cashew","peanut","walnut","pecan","pistachio","seed","sunflower","pumpkin seed","chia","flax"],emoji:"🥜"},{keywords:["rice","pasta","noodle","grain","oat","cereal","flour","quinoa","couscous","barley","farro","bulgur","polenta","cornmeal","panko","breadcrumb"],emoji:"🌾"},{keywords:["baking soda","baking powder","yeast","vanilla extract","extract","food coloring","sprinkle","frosting"],emoji:"🧁"},{keywords:["sugar","sweetener","stevia","splenda"],emoji:"🍯"},{keywords:["aluminum foil","plastic wrap","parchment","wax paper","ziploc","storage bag","trash bag","garbage bag"],emoji:"🧻"}];function fd(t){if(!t)return"🛒";if(t.customEmoji)return t.customEmoji;const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of zw)if(n.keywords.some(i=>e.includes(i)))return n.emoji;return"🛒"}function Uo(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return e.match(/olive oil|vegetable oil|canola oil|coconut oil|sesame oil|avocado oil|cooking spray|oil(?:\s|$)/)?"Oils & Cooking":e.match(/vinegar|rice vinegar|balsamic|soy sauce|fish sauce|worcestershire|hot sauce|sriracha|teriyaki|hoisin|oyster sauce|tahini|pesto|salsa|marinara|tomato sauce|bbq sauce|wing sauce/)?"Sauces & Vinegars":n.includes("pasta")||n.includes("grain")||e.match(/pasta|macaroni|spaghetti|penne|fusilli|linguine|rigatoni|orzo|ramen|noodle|rice(?!.*vinegar)|couscous|quinoa|barley|farro|lentil|chickpea|bean(?!.*green)|oat|cereal|granola|flour|cornmeal|polenta|bulgur|millet/)?"Dry Goods & Pasta":n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato(?!.*sauce|.*paste|.*puree)|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper(?!corn)|avocado|potato|sweet potato|zucchini|corn(?!starch|meal)|pea(?:s|$)|green bean|asparagus|beet|kale|arugula|cilantro|parsley|dill|mint|basil|lemon|lime|orange|grape(?!.*seed)|berr|strawberr|blueberr|raspberr|mango|peach|pear|plum|melon|pineapple|ginger|scallion|leek|radish|eggplant|artichoke/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod(?:\s|$)|tuna|fish|steak|pork|shrimp|sausage|bacon|ham(?:\s|$)|ground meat|meatball|crab|lobster|clam|mussel|anchov|tofu|tempeh|seitan/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter(?!.*nut)|cheese|milk(?!.*coconut)|cream(?!.*of)|yogurt|ghee|sour cream|whipping|half.and.half|cottage|ricotta|mozzarella|parmesan|cheddar|feta|brie|gouda|cream cheese/)?"Dairy":n.includes("baking")||n.includes("spice")||e.match(/baking soda|baking powder|yeast|vanilla|cocoa powder|cornstarch|sugar|powdered sugar|brown sugar|maple syrup|honey|molasses|cinnamon|cumin|turmeric|paprika|oregano|thyme|rosemary|cayenne|chili powder|nutmeg|clove|allspice|cardamom|saffron|curry powder|garam masala|bay lea|peppercorn|seasoning|spice/)?"Baking & Spices":n.includes("condiment")||n.includes("pickle")||e.match(/ketchup|mustard|mayo|mayonnaise|relish|pickle|olive|caper|jam|jelly|preserves|hummus|guacamole|chutney|horseradish|ranch|dressing/)?"Condiments & Pickled":n.includes("canned")||e.match(/canned|tomato paste|tomato puree|diced tomato|crushed tomato|coconut milk|broth|stock|soup(?:\s|$)|condensed/)?"Canned Goods":n.includes("snack")||e.match(/chip|cracker|cookie|pretzel|popcorn|chocolate|candy|gumm|trail mix|granola bar|protein bar|nut(?:s|$)|almond(?:s|$)|cashew|walnut|pistachio|peanut(?!.*butter)|dried fruit|fruit snack|brownie/)?"Snacks":n.includes("beverage")||n.includes("drink")||e.match(/juice|coffee|tea(?:\s|$)|water(?:\s|$)|soda|seltzer|sparkling|kombucha|lemonade|smoothie|wine(?:\s|$)|beer(?:\s|$)/)?"Beverages":n.includes("bread")||n.includes("bakery")||e.match(/bread|tortilla|pita|bagel|naan|flatbread|bun(?:\s|$)|roll(?:\s|$)|croissant|muffin|wrap(?:\s|$)/)?"Grains":n.includes("frozen")||t.location==="freezer"?"Frozen":"General"}function qw(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Jc=null;function _(t,e=2500){const n=u("notif");n&&(n.textContent=t,n.style.display="block",n.style.animation="none",n.offsetWidth,n.style.animation=`toastSpring ${e/1e3}s ease forwards`,Jc&&clearTimeout(Jc),Jc=setTimeout(()=>n.style.display="none",e))}function qe(t){var e;(e=u("ov-"+t))==null||e.classList.add("active")}function ue(t){var e;(e=u("ov-"+t))==null||e.classList.remove("active")}function To(t,e){const n=u(t);n&&n.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}const Yc=["chopped","finely chopped","diced","sliced","minced","grated","shredded","crushed","mashed","julienned","cubed","halved","quartered","torn","peeled","deveined","deboned","trimmed","drained","rinsed","sifted","seared","blanched","toasted","roasted","grilled","fried","baked","steamed","boiled","melted","softened","dissolved","beaten","whipped","whisked","divided","separated","combined","mixed","tossed","coated","marinated","soaked","chilled","frozen","thawed","warmed","room temperature","at room temperature","for serving","for garnish","for garnishing","for topping","for drizzling","for decoration","for dusting","for dipping","to taste","to serve","as needed","as required","as desired","optional","if desired","if needed","if using","fresh","dried","ground","whole","packed","loosely packed","tightly packed","lightly","roughly","coarsely","finely","thinly","thickly","into pieces","into strips","into cubes","plus more","plus extra","or more","or less","about","approximately","heaping","scant","level","generous","garnish","topping","finishing","reserved"];function am(t){if(!t||typeof t!="string")return!1;const e=t.trim();if(e.length<3||/^[\d\s.\/½¼¾⅓⅔]+$/.test(e)||e.length>100)return!1;const n=e.toLowerCase();if(Yc.includes(n))return!1;const i=new Set(["and","or","the","a","an","of","with","in","on","for","to","into","per"]),s=n.split(/\s+/);return!(s.every(r=>i.has(r)||Yc.includes(r)||Yc.some(a=>a===r))&&s.length>0)}function ha(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Ww={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger","kale","zucchini","corn","berry","grape","orange","melon","pear","mango","peach"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","sausage","ground","tilapia","crab","lobster","scallop"],Bakery:["bread","bagel","muffin","croissant","tortilla","pita","naan","roll","bun","baguette","flatbread","english muffin","biscuit"],Deli:["deli","ham","salami","prosciutto","roast beef","sliced turkey","cold cut","hummus","prepared"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir","sour cream","cottage cheese","half and half","whipping cream"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret","pot pie","burrito"],"Canned Goods":["canned","can of","diced tomato","tomato paste","tomato sauce","bean","lentil","chickpea","stock","broth","soup","tuna can","sardine"],"Condiments & Sauces":["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","worcestershire","bbq sauce","salsa","ranch","dressing","vinegar","relish","sriracha","teriyaki","pesto"],Baking:["flour","sugar","baking soda","baking powder","vanilla","yeast","cocoa","chocolate chip","corn starch","powdered sugar","brown sugar","molasses","food coloring"],Pantry:["rice","pasta","oil","spice","salt","honey","oat","cereal","granola","peanut butter","jam","jelly","syrup","olive oil"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed","popcorn","pretzel","energy drink","sparkling"],"Paper & Cleaning":["paper towel","toilet paper","napkin","dish soap","detergent","sponge","trash bag","foil","plastic wrap","wipe","bleach","cleaner"],Baby:["diaper","formula","baby food","baby wipe","pacifier","bottle nipple"],Pet:["dog food","cat food","pet treat","litter","pet food"],"Health & Beauty":["shampoo","conditioner","body wash","lotion","toothpaste","toothbrush","deodorant","razor","vitamin","medicine","band-aid","sunscreen"]},Gw={Produce:"🥬","Meat & Fish":"🥩",Bakery:"🍞",Deli:"🥪","Dairy & Eggs":"🥛",Frozen:"🧊","Canned Goods":"🥫","Condiments & Sauces":"🫙",Baking:"🧁",Pantry:"🫘","Snacks & Drinks":"🥤","Paper & Cleaning":"🧻",Baby:"👶",Pet:"🐾","Health & Beauty":"💊",Other:"📦"};function Kw(t){if(!t)return null;const e=t.toLowerCase();return/cleaning|household|laundry|detergent|disinfectant/.test(e)?"cleaning":/personal care|hygiene|cosmetic|vitamin|supplement|medicine|pharmaceutical|beauty|shampoo|conditioner|lotion|body wash|soap|deodorant|toothpaste|toothbrush|moisturizer|sunscreen|face wash|cleanser|hair|skin care/.test(e)?"personal":/frozen/.test(e)?"frozen":/\bmeat|poultry|chicken|beef|pork|fish|seafood|deli|sausage|bacon|ham\b/.test(e)?"meat":/dairy|milk|cheese|yogurt|yoghurt|butter|cream|egg|curd|paneer/.test(e)?"dairy":/vegetable|produce|fresh fruit|salad|fresh herb/.test(e)?"produce":/olive|pickle|caper|condiment|sauce|dressing|vinegar|oil|ketchup|mustard|mayo|relish|spice|seasoning|herb|pepper|salt|cumin|oregano|thyme|jam|jelly|preserve|marmalade|honey|syrup|hummus|tahini|pesto|salsa/.test(e)?"condiments":/bread|bakery|pastry|baguette|croissant|muffin|bagel|tortilla|naan|pita|flatbread/.test(e)?"bakery":/cereal|grain|pasta|rice|flour|oat|noodle|couscous|quinoa|barley|bulgur/.test(e)?"grains":/canned|preserved|tinned|bean|legume|lentil|chickpea|broth|stock/.test(e)?"canned":/snack|chip|crisp|popcorn|nut|beverage|drink|soda|juice|water|coffee|tea|chocolate|candy|sweet|confection|dessert|ice cream|cookie|biscuit|cake|energy drink/.test(e)?"snacks":null}const Qw=[{category:null,keywords:["chewing gum","gum"],title:"Gum"},{category:null,keywords:["eye drop","eye relief","visine","contact"],title:"Eye Drops"},{category:null,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:null,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["chip","crisp","pringles"],title:"Chips"},{category:/snack/i,keywords:["cookie","biscuit"],title:"Cookies"},{category:/snack/i,keywords:["cracker"],title:"Crackers"},{category:/snack/i,keywords:["popcorn"],title:"Popcorn"},{category:/snack/i,keywords:["pretzel"],title:"Pretzels"},{category:/snack/i,keywords:["granola bar","energy bar","protein bar"],title:"Energy Bar"},{category:/snack/i,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:/snack/i,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["candy","gummy"],title:"Candy"},{category:/snack/i,keywords:["nut","almond","cashew","peanut"],title:"Nuts"},{category:/beverage/i,keywords:["water"],title:"Water"},{category:/beverage/i,keywords:["juice"],title:"Juice"},{category:/beverage/i,keywords:["soda","cola","pepsi","coke"],title:"Soda"},{category:/beverage/i,keywords:["coffee"],title:"Coffee"},{category:/beverage/i,keywords:["tea"],title:"Tea"},{category:/beverage/i,keywords:["energy drink","red bull","monster"],title:"Energy Drink"},{category:/dairy/i,keywords:["cream cheese"],title:"Cream Cheese"},{category:/dairy/i,keywords:["milk"],title:"Milk"},{category:/dairy/i,keywords:["yogurt","yoghurt"],title:"Yogurt"},{category:/dairy/i,keywords:["cheese"],title:"Cheese"},{category:/dairy/i,keywords:["butter"],title:"Butter"},{category:/personal care/i,keywords:["shampoo and conditioner","shampoo & conditioner","2-in-1","2 in 1"],title:"Shampoo & Conditioner"},{category:/personal care/i,keywords:["conditioner"],title:"Conditioner"},{category:/personal care/i,keywords:["shampoo"],title:"Shampoo"},{category:/personal care/i,keywords:["body lotion","lotion","moisturizer"],title:"Body Lotion"},{category:/personal care/i,keywords:["body wash","shower gel"],title:"Body Wash"},{category:/personal care/i,keywords:["deodorant","antiperspirant"],title:"Deodorant"},{category:/personal care/i,keywords:["toothpaste"],title:"Toothpaste"},{category:/personal care/i,keywords:["toothbrush"],title:"Toothbrush"},{category:/personal care/i,keywords:["sunscreen","spf"],title:"Sunscreen"},{category:/personal care/i,keywords:["face wash","cleanser"],title:"Face Wash"},{category:/personal care/i,keywords:["vitamin","supplement","capsule","tablet"],title:"Vitamins"},{category:/personal care/i,keywords:["pain relief","tylenol","advil","ibuprofen"],title:"Pain Relief"},{category:/personal care/i,keywords:["band-aid","bandage"],title:"Bandages"},{category:/clean/i,keywords:["detergent","laundry"],title:"Laundry Detergent"},{category:/clean/i,keywords:["dish soap","dishwasher"],title:"Dish Soap"},{category:/clean/i,keywords:["bleach"],title:"Bleach"},{category:/clean/i,keywords:["spray","cleaner","windex"],title:"Cleaning Spray"},{category:/frozen/i,keywords:["pizza"],title:"Frozen Pizza"},{category:/frozen/i,keywords:["ice cream","gelato"],title:"Ice Cream"},{category:/frozen/i,keywords:["fries","potato"],title:"Frozen Fries"},{category:/condiment/i,keywords:["ketchup"],title:"Ketchup"},{category:/condiment/i,keywords:["mustard"],title:"Mustard"},{category:/condiment/i,keywords:["mayo","mayonnaise"],title:"Mayonnaise"},{category:/condiment/i,keywords:["hot sauce","sriracha","tabasco"],title:"Hot Sauce"},{category:/condiment/i,keywords:["soy sauce"],title:"Soy Sauce"},{category:/condiment/i,keywords:["olive oil","vegetable oil","cooking oil"],title:"Cooking Oil"},{category:/condiment/i,keywords:["vinegar"],title:"Vinegar"},{category:/bread/i,keywords:["bread"],title:"Bread"},{category:/bread/i,keywords:["bagel"],title:"Bagels"},{category:/bread/i,keywords:["tortilla","wrap"],title:"Tortillas"},{category:/meat/i,keywords:["chicken"],title:"Chicken"},{category:/meat/i,keywords:["beef","ground beef"],title:"Beef"},{category:/meat/i,keywords:["pork","bacon"],title:"Pork"},{category:/meat/i,keywords:["turkey"],title:"Turkey"},{category:/meat/i,keywords:["salmon","tuna","fish"],title:"Fish"},{category:/pet/i,keywords:["dog food","dog treat"],title:"Dog Food"},{category:/pet/i,keywords:["cat food","cat treat"],title:"Cat Food"}];function Jw(t,e){const n=(t||"").toLowerCase(),i=(e||"").toLowerCase();for(const s of Qw)if(!(s.category!==null&&!s.category.test(i))&&s.keywords.some(o=>n.includes(o)))return s.title;return null}const ip=new Set(["general","food","grocery","personal care","pet food","household","other","generic foods","beverages",""]),Yw=/\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi,Xw=new Set(["for","with","and","the","a","an","in","of","by","from"]),Zw=["zero sugar","diet","zero","light","lite","decaf","caffeine free","organic","original","classic","extra","plus","pro","max","mini"];function eb(t){if(!t)return{title:"",subtitle:"",brand:""};const e=(t.name||"").trim(),n=(t.brand||"").trim(),i=(t.description||"").trim(),s=(t.category||"").trim(),o=nb(e,n,i,s),r=tb(e,n);return{title:o||e,subtitle:r,brand:n}}function tb(t,e){if(!t)return"";let n=t;if(e){const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+i+"\\s*","i"),"").trim();const s={mountain:"mtn",mount:"mt",doctor:"dr",mister:"mr",saint:"st",international:"intl",company:"co"},a=e.toLowerCase().split(/\s+/).map(l=>s[l]||l).join(" ");if(a!==e.toLowerCase()){const l=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(l+"\\s*","i"),"").trim()}}return n=n.replace(/\b(\w+)\s+\1\b/gi,"$1"),n=n.replace(/\s{2,}/g," ").trim(),n||t}function nb(t,e,n,i){const s=Jw(t,i);if(s)return s;if(n&&n.length>=3&&n.length<=40&&!ip.has(n.toLowerCase()))return Z(n);if(i&&!ip.has(i.toLowerCase())){const o=i.replace(/-/g," ");if(o.length<=30)return Z(o)}return ib(t,e)}function ib(t,e){if(!t)return"";let n=t;if(e){const f=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+f+"\\s*","i"),"")}n=n.split(/\s*[—–-]\s*/)[0].trim(),n=n.replace(Yw,"").trim(),n=n.replace(/\s*\([^)]*\)\s*/g," ").replace(/[,|]+\s*$/,"").trim();const i=n.toLowerCase(),s=Zw.filter(f=>i.includes(f)),o=n.split(/\s+/).filter(f=>f.length>=2&&!Xw.has(f.toLowerCase())&&!/^\d+$/.test(f));if(o.length===0)return Z(t.split(/\s+/).slice(0,2).join(" "));if(o.length<=3)return Z(o.join(" "));const r=o.slice(-2),a=o.slice(-3);let h=(r.join("").length<8?a:r).join(" ");for(const f of s)h.toLowerCase().includes(f)||(h+=" "+f);return Z(h)}function sb(t){const e=t.toLowerCase();for(const[n,i]of Object.entries(Ww))if(i.some(s=>e.includes(s)))return n;return"Other"}const ob={ShopRite:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],"Whole Foods":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Condiments & Sauces","Baking","Frozen","Snacks & Drinks","Health & Beauty","Paper & Cleaning","Other"],"Trader Joe's":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Canned Goods","Condiments & Sauces","Baking","Snacks & Drinks","Other"],Walmart:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Condiments & Sauces","Baking","Frozen","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Target:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Canned Goods","Condiments & Sauces","Baking","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Costco:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Baking","Frozen","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],Kroger:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Safeway:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],Publix:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Aldi:["Produce","Bakery","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Pantry","Baking","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],"Stop & Shop":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Wegmans:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],"Amazon Fresh":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Health & Beauty","Other"]};function rb(t){return t&&ob[t]||null}const ab=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),cb=new Set(["Piece","Unit","Pack","Box","Bag","Bar","Pound","Oz","Clove"]);function lb(t){return t?ab.has(t)?1:(cb.has(t),2):2}function cm(t){return t.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i,"").trim().split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i).map(i=>i.trim()).filter(i=>i.length>0).map(i=>{let s=i,o=1;const r=i.match(/^(\d+)\s+(.+)/),a=i.match(/^(.+?)\s*[x×]\s*(\d+)$/i);return a?(s=a[1].trim(),o=parseInt(a[2],10)||1):r&&(s=r[2].trim(),o=parseInt(r[1],10)||1),{name:s,qty:o}})}const db=()=>{};var sp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ub=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],r=t[n++],a=t[n++],l=((s&7)<<18|(o&63)<<12|(r&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|r&63)}}return e.join("")},dm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],r=s+1<t.length,a=r?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=o>>2,g=(o&3)<<4|a>>4;let w=(a&15)<<2|h>>6,k=h&63;l||(k=64,r||(w=64)),i.push(n[f],n[g],n[w],n[k])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ub(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||h==null||g==null)throw new hb;const w=o<<2|a>>4;if(i.push(w),h!==64){const k=a<<4&240|h>>2;if(i.push(k),g!==64){const E=h<<6&192|g;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pb=function(t){const e=lm(t);return dm.encodeByteArray(e,!0)},pa=function(t){return pb(t).replace(/\./g,"")},um=function(t){try{return dm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mb=()=>fb().__FIREBASE_DEFAULTS__,gb=()=>{if(typeof process>"u"||typeof sp>"u")return;const t=sp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&um(t[1]);return e&&JSON.parse(e)},Qa=()=>{try{return db()||mb()||gb()||yb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hm=t=>{var e,n;return(n=(e=Qa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},pm=t=>{const e=hm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},fm=()=>{var t;return(t=Qa())==null?void 0:t.config},mm=t=>{var e;return(e=Qa())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Jn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function md(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function gm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[pa(JSON.stringify(n)),pa(JSON.stringify(r)),""].join(".")}const co={};function wb(){const t={prod:[],emulator:[]};for(const e of Object.keys(co))co[e]?t.emulator.push(e):t.prod.push(e);return t}function bb(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let op=!1;function gd(t,e){if(typeof window>"u"||typeof document>"u"||!Jn(window.location.host)||co[t]===e||co[t]||op)return;co[t]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",o=wb().prod.length>0;function r(){const w=document.getElementById(i);w&&w.remove()}function a(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{op=!0,r()},w}function f(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=bb(i),k=n("text"),E=document.getElementById(k)||document.createElement("span"),$=n("learnmore"),P=document.getElementById($)||document.createElement("a"),O=n("preprendIcon"),M=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const N=w.element;a(N),f(P,$);const D=h();l(M,O),N.append(M,E,P,D),document.body.appendChild(N)}o?(E.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _b(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function kb(){var e;const t=(e=Qa())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ib(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sb(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Eb(){return!kb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ab(){try{return typeof indexedDB=="object"}catch{return!1}}function xb(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="FirebaseError";class zt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Rb,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],r=o?Pb(o,i):"Error",a=`${this.serviceName}: ${r} (${s}).`;return new zt(s,a,i)}}function Pb(t,e){return t.replace($b,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const $b=/\{\$([^}]+)}/g;function Lb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _i(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],r=e[s];if(rp(o)&&rp(r)){if(!_i(o,r))return!1}else if(o!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function rp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function to(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function no(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Db(t,e){const n=new Nb(t,e);return n.subscribe.bind(n)}class Nb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Mb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Xc),s.error===void 0&&(s.error=Xc),s.complete===void 0&&(s.complete=Xc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xc(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ob{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new vb;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ub(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&r.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vb(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vb(t){return t===ci?void 0:t}function Ub(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ob(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const jb={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Bb=ne.INFO,Hb={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},zb=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Hb[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=Bb,this._logHandler=zb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const qb=(t,e)=>e.some(n=>t instanceof n);let ap,cp;function Wb(){return ap||(ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gb(){return cp||(cp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ym=new WeakMap,_l=new WeakMap,vm=new WeakMap,Zc=new WeakMap,vd=new WeakMap;function Kb(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n($n(t.result)),s()},r=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&ym.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function Qb(t){if(_l.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),s()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});_l.set(t,e)}let kl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _l.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jb(t){kl=t(kl)}function Yb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(el(this),e,...n);return vm.set(i,e.sort?e.sort():[e]),$n(i)}:Gb().includes(t)?function(...e){return t.apply(el(this),e),$n(ym.get(this))}:function(...e){return $n(t.apply(el(this),e))}}function Xb(t){return typeof t=="function"?Yb(t):(t instanceof IDBTransaction&&Qb(t),qb(t,Wb())?new Proxy(t,kl):t)}function $n(t){if(t instanceof IDBRequest)return Kb(t);if(Zc.has(t))return Zc.get(t);const e=Xb(t);return e!==t&&(Zc.set(t,e),vd.set(e,t)),e}const el=t=>vd.get(t);function Zb(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const r=indexedDB.open(t,e),a=$n(r);return i&&r.addEventListener("upgradeneeded",l=>{i($n(r.result),l.oldVersion,l.newVersion,$n(r.transaction),l)}),n&&r.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const e_=["get","getKey","getAll","getAllKeys","count"],t_=["put","add","delete","clear"],tl=new Map;function lp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tl.get(e))return tl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=t_.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||e_.includes(n)))return;const o=async function(r,...a){const l=this.transaction(r,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&l.done]))[0]};return tl.set(e,o),o}Jb(t=>({...t,get:(e,n,i)=>lp(e,n)||t.get(e,n,i),has:(e,n)=>!!lp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function i_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tl="@firebase/app",dp="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new yd("@firebase/app"),s_="@firebase/app-compat",o_="@firebase/analytics-compat",r_="@firebase/analytics",a_="@firebase/app-check-compat",c_="@firebase/app-check",l_="@firebase/auth",d_="@firebase/auth-compat",u_="@firebase/database",h_="@firebase/data-connect",p_="@firebase/database-compat",f_="@firebase/functions",m_="@firebase/functions-compat",g_="@firebase/installations",y_="@firebase/installations-compat",v_="@firebase/messaging",w_="@firebase/messaging-compat",b_="@firebase/performance",__="@firebase/performance-compat",k_="@firebase/remote-config",T_="@firebase/remote-config-compat",C_="@firebase/storage",I_="@firebase/storage-compat",S_="@firebase/firestore",E_="@firebase/ai",A_="@firebase/firestore-compat",x_="firebase",R_="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="[DEFAULT]",P_={[Tl]:"fire-core",[s_]:"fire-core-compat",[r_]:"fire-analytics",[o_]:"fire-analytics-compat",[c_]:"fire-app-check",[a_]:"fire-app-check-compat",[l_]:"fire-auth",[d_]:"fire-auth-compat",[u_]:"fire-rtdb",[h_]:"fire-data-connect",[p_]:"fire-rtdb-compat",[f_]:"fire-fn",[m_]:"fire-fn-compat",[g_]:"fire-iid",[y_]:"fire-iid-compat",[v_]:"fire-fcm",[w_]:"fire-fcm-compat",[b_]:"fire-perf",[__]:"fire-perf-compat",[k_]:"fire-rc",[T_]:"fire-rc-compat",[C_]:"fire-gcs",[I_]:"fire-gcs-compat",[S_]:"fire-fst",[A_]:"fire-fst-compat",[E_]:"fire-vertex","fire-js":"fire-js",[x_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Map,$_=new Map,Il=new Map;function up(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(Il.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;Il.set(e,t);for(const n of fa.values())up(n,t);for(const n of $_.values())up(n,t);return!0}function Ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new Fo("app","Firebase",L_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=R_;function wm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Cl,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Ln.create("bad-app-name",{appName:String(s)});if(n||(n=fm()),!n)throw Ln.create("no-options");const o=fa.get(s);if(o){if(_i(n,o.options)&&_i(i,o.config))return o;throw Ln.create("duplicate-app",{appName:s})}const r=new Fb(s);for(const l of Il.values())r.addComponent(l);const a=new D_(n,i,r);return fa.set(s,a),a}function wd(t=Cl){const e=fa.get(t);if(!e&&t===Cl&&fm())return wm();if(!e)throw Ln.create("no-app",{appName:t});return e}function Nt(t,e,n){let i=P_[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const r=[`Unable to register library "${i}" with version "${e}":`];s&&r.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&r.push("and"),o&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(r.join(" "));return}ki(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const N_="firebase-heartbeat-database",M_=1,Co="firebase-heartbeat-store";let nl=null;function bm(){return nl||(nl=Zb(N_,M_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Co)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),nl}async function O_(t){try{const n=(await bm()).transaction(Co),i=await n.objectStore(Co).get(_m(t));return await n.done,i}catch(e){if(e instanceof zt)nn.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(n.message)}}}async function hp(t,e){try{const i=(await bm()).transaction(Co,"readwrite");await i.objectStore(Co).put(e,_m(t)),await i.done}catch(n){if(n instanceof zt)nn.warn(n.message);else{const i=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nn.warn(i.message)}}}function _m(t){return`${t.name}!${t.options.appId}`}/**
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
 */const V_=1024,U_=30;class F_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new B_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=pp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(r=>r.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>U_){const r=H_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){nn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pp(),{heartbeatsToSend:i,unsentEntries:s}=j_(this._heartbeatsCache.heartbeats),o=pa(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return nn.warn(n),""}}}function pp(){return new Date().toISOString().substring(0,10)}function j_(t,e=V_){const n=[];let i=t.slice();for(const s of t){const o=n.find(r=>r.agent===s.agent);if(o){if(o.dates.push(s.date),fp(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class B_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ab()?xb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await O_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return hp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return hp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fp(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function H_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){ki(new Un("platform-logger",e=>new n_(e),"PRIVATE")),ki(new Un("heartbeat",e=>new F_(e),"PRIVATE")),Nt(Tl,dp,t),Nt(Tl,dp,"esm2020"),Nt("fire-js","")}z_("");var q_="firebase",W_="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(q_,W_,"app");function km(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G_=km,Tm=new Fo("auth","Firebase",km());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new yd("@firebase/auth");function K_(t,...e){ma.logLevel<=ne.WARN&&ma.warn(`Auth (${Pi}): ${t}`,...e)}function jr(t,...e){ma.logLevel<=ne.ERROR&&ma.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,...e){throw _d(t,...e)}function yt(t,...e){return _d(t,...e)}function bd(t,e,n){const i={...G_(),[e]:n};return new Fo("auth","Firebase",i).create(e,{appName:t.name})}function Mt(t){return bd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cm(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ut(t,"argument-error"),bd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _d(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Tm.create(t,...e)}function G(t,e,...n){if(!t)throw _d(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jr(e),new Error(e)}function sn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Q_(){return mp()==="http:"||mp()==="https:"}function mp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q_()||Cb()||"connection"in navigator)?navigator.onLine:!0}function Y_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=_b()||Ib()}get(){return J_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ek=new Bo(3e4,6e4);function Yn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ln(t,e,n,i,s={}){return Sm(t,s,async()=>{let o={},r={};i&&(e==="GET"?r=i:o={body:JSON.stringify(i)});const a=jo({key:t.config.apiKey,...r}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...o};return Tb()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Jn(t.emulatorConfig.host)&&(h.credentials="include"),Im.fetch()(await Em(t,t.config.apiHost,n,a),h)})}async function Sm(t,e,n){t._canInitEmulator=!1;const i={...X_,...e};try{const s=new nk(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw Ir(t,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const a=o.ok?r.errorMessage:r.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ir(t,"credential-already-in-use",r);if(l==="EMAIL_EXISTS")throw Ir(t,"email-already-in-use",r);if(l==="USER_DISABLED")throw Ir(t,"user-disabled",r);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bd(t,f,h);ut(t,f)}}catch(s){if(s instanceof zt)throw s;ut(t,"network-request-failed",{message:String(s)})}}async function Ho(t,e,n,i,s={}){const o=await ln(t,e,n,i,s);return"mfaPendingCredential"in o&&ut(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Em(t,e,n,i){const s=`${e}${n}?${i}`,o=t,r=o.config.emulator?kd(t.config,s):`${t.config.apiScheme}://${s}`;return Z_.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(r).toString():r}function tk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(yt(this.auth,"network-request-failed")),ek.get())})}}function Ir(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=yt(t,e,i);return s.customData._tokenResponse=n,s}function gp(t){return t!==void 0&&t.enterprise!==void 0}class ik{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sk(t,e){return ln(t,"GET","/v2/recaptchaConfig",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e){return ln(t,"POST","/v1/accounts:delete",e)}async function ga(t,e){return ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rk(t,e=!1){const n=Me(t),i=await n.getIdToken(e),s=Td(i);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,r=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:lo(il(s.auth_time)),issuedAtTime:lo(il(s.iat)),expirationTime:lo(il(s.exp)),signInProvider:r||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function il(t){return Number(t)*1e3}function Td(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return jr("JWT malformed, contained fewer than 3 sections"),null;try{const s=um(n);return s?JSON.parse(s):(jr("Failed to decode base64 JWT payload"),null)}catch(s){return jr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yp(t){const e=Td(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof zt&&ak(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ak({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t){var g;const e=t.auth,n=await t.getIdToken(),i=await ls(t,ga(e,{idToken:n}));G(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(g=s.providerUserInfo)!=null&&g.length?Am(s.providerUserInfo):[],r=dk(t.providerData,o),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(r!=null&&r.length),h=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new El(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function lk(t){const e=Me(t);await ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dk(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Am(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){const n=await Sm(t,{},async()=>{const i=jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,r=await Em(t,s,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Jn(t.emulatorConfig.host)&&(l.credentials="include"),Im.fetch()(r,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hk(t,e){return ln(t,"POST","/v2/accounts:revokeToken",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=yp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await uk(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,r=new qi;return i&&(G(typeof i=="string","internal-error",{appName:e}),r.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),r.accessToken=s),o&&(G(typeof o=="number","internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qi,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mt{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new ck(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new El(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ls(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rk(this,e)}reload(){return lk(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ya(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await ls(this,ok(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,o=n.phoneNumber??void 0,r=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:E,stsTokenManager:$}=n;G(g&&$,e,"internal-error");const P=qi.fromJSON(this.name,$);G(typeof g=="string",e,"internal-error"),yn(i,e.name),yn(s,e.name),G(typeof w=="boolean",e,"internal-error"),G(typeof k=="boolean",e,"internal-error"),yn(o,e.name),yn(r,e.name),yn(a,e.name),yn(l,e.name),yn(h,e.name),yn(f,e.name);const O=new mt({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:k,photoURL:r,phoneNumber:o,tenantId:a,stsTokenManager:P,createdAt:h,lastLoginAt:f});return E&&Array.isArray(E)&&(O.providerData=E.map(M=>({...M}))),l&&(O._redirectEventId=l),O}static async _fromIdTokenResponse(e,n,i=!1){const s=new qi;s.updateFromServerResponse(n);const o=new mt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ya(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];G(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Am(s.providerUserInfo):[],r=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),a=new qi;a.updateFromIdToken(i);const l=new mt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:r}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new El(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp=new Map;function Zt(t){sn(t instanceof Function,"Expected a class definition");let e=vp.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xm.type="NONE";const wp=xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(t,e,n){return`firebase:${t}:${e}:${n}`}class Wi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Br(this.userKey,s.apiKey,o),this.fullPersistenceKey=Br("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ga(this.auth,{idToken:e}).catch(()=>{});return n?mt._fromGetAccountInfoResponse(this.auth,n,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Wi(Zt(wp),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=s[0]||Zt(wp);const r=Br(i,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(r);if(f){let g;if(typeof f=="string"){const w=await ga(e,{idToken:f}).catch(()=>{});if(!w)break;g=await mt._fromGetAccountInfoResponse(e,w,f)}else g=mt._fromJSON(e,f);h!==o&&(a=g),o=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Wi(o,e,i):(o=l[0],a&&await o._set(r,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(r)}catch{}})),new Wi(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nm(e))return"Blackberry";if(Mm(e))return"Webos";if(Pm(e))return"Safari";if((e.includes("chrome/")||$m(e))&&!e.includes("edge/"))return"Chrome";if(Dm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Rm(t=We()){return/firefox\//i.test(t)}function Pm(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $m(t=We()){return/crios\//i.test(t)}function Lm(t=We()){return/iemobile/i.test(t)}function Dm(t=We()){return/android/i.test(t)}function Nm(t=We()){return/blackberry/i.test(t)}function Mm(t=We()){return/webos/i.test(t)}function Cd(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function pk(t=We()){var e;return Cd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function fk(){return Sb()&&document.documentMode===10}function Om(t=We()){return Cd(t)||Dm(t)||Mm(t)||Nm(t)||/windows phone/i.test(t)||Lm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e=[]){let n;switch(t){case"Browser":n=bp(We());break;case"Worker":n=`${bp(We())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${i}`}/**
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
 */class mk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((r,a)=>{try{const l=e(o);r(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function gk(t,e={}){return ln(t,"GET","/v2/passwordPolicy",Yn(t,e))}/**
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
 */const yk=6;class vk{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _p(this),this.idTokenSubscription=new _p(this),this.beforeStateQueue=new mk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ga(this,{idToken:e}),i=await mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Xe(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(o=this.redirectUser)==null?void 0:o._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Y_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Mt(this));const n=e?Me(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gk(this),n=new vk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await hk(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let r=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{r||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{r=!0,l()}}else{const l=e.addObserver(n);return()=>{r=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&K_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qt(t){return Me(t)}class _p{constructor(e){this.auth=e,this.observer=null,this.addObserver=Db(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bk(t){Ya=t}function Um(t){return Ya.loadJS(t)}function _k(){return Ya.recaptchaEnterpriseScript}function kk(){return Ya.gapiScript}function Tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ck{constructor(){this.enterprise=new Ik}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ik{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Sk="recaptcha-enterprise",Fm="NO_RECAPTCHA";class Ek{constructor(e){this.type=Sk,this.auth=qt(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(r,a)=>{sk(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new ik(l);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,r(h.siteKey)}}).catch(l=>{a(l)})})}function s(o,r,a){const l=window.grecaptcha;gp(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(h=>{r(h)}).catch(()=>{r(Fm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ck().execute("siteKey",{action:"verify"}):new Promise((o,r)=>{i(this.auth).then(a=>{if(!n&&gp(window.grecaptcha))s(a,o,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_k();l.length!==0&&(l+=a),Um(l).then(()=>{s(a,o,r)}).catch(h=>{r(h)})}}).catch(a=>{r(a)})})}}async function kp(t,e,n,i=!1,s=!1){const o=new Ek(t);let r;if(s)r=Fm;else try{r=await o.verify(n)}catch{r=await o.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Al(t,e,n,i,s){var o;if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await kp(t,e,n,n==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await kp(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t,e){const n=Ja(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(_i(o,e??{}))return s;ut(s,"already-initialized")}return n.initialize({options:e})}function xk(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Rk(t,e,n){const i=qt(t);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=jm(e),{host:r,port:a}=Pk(e),l=a===null?"":`:${a}`,h={url:`${o}//${r}${l}/`},f=Object.freeze({host:r,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(_i(h,i.config.emulator)&&_i(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,Jn(r)?(md(`${o}//${r}${l}`),gd("Auth",!0)):$k()}function jm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Pk(t){const e=jm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:Tp(i.substr(o.length+1))}}else{const[o,r]=i.split(":");return{host:o,port:Tp(r)}}}function Tp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $k(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function Lk(t,e){return ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}async function Mk(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends Id{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Io(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Io(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Al(e,n,"signInWithPassword",Dk);case"emailLink":return Nk(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Al(e,i,"signUpPassword",Lk);case"emailLink":return Mk(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok="http://localhost";class on extends Id{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new on(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=n;if(!i||!s)return null;const r=new on(i,s);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Gi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:Ok,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Uk(t){const e=to(no(t)).link,n=e?to(no(e)).deep_link_id:null,i=to(no(t)).deep_link_id;return(i?to(no(i)).link:null)||i||n||e||t}class Sd{constructor(e){const n=to(no(e)),i=n.apiKey??null,s=n.oobCode??null,o=Vk(n.mode??null);G(i&&s&&o,"argument-error"),this.apiKey=i,this.operation=o,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Uk(e);try{return new Sd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Sd.parseLink(n);return G(i,"argument-error"),Io._fromEmailAndCode(e,i.code,i.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class uo extends Is{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return G("providerId"in n&&"signInMethod"in n,"argument-error"),on._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),on._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return uo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return uo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:r,providerId:a}=e;if(!i&&!s&&!n&&!o||!a)return null;try{return new uo(a)._credential({idToken:n,accessToken:i,nonce:r,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Is{constructor(){super("facebook.com")}static credential(e){return on._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return on._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Yt.credential(n,i)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Is{constructor(){super("github.com")}static credential(e){return on._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Is{constructor(){super("twitter.com")}static credential(e,n){return on._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Sn.credential(n,i)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t,e){return Ho(t,"POST","/v1/accounts:signUp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await mt._fromIdTokenResponse(e,i,s),r=Cp(i);return new Ti({user:o,providerId:r,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Cp(i);return new Ti({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Cp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends zt{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,va.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new va(e,n,i,s)}}function Bm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?va._fromErrorAndOperation(t,o,e,i):o})}async function jk(t,e,n=!1){const i=await ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e,n=!1){const{auth:i}=t;if(Xe(i.app))return Promise.reject(Mt(i));const s="reauthenticate";try{const o=await ls(t,Bm(i,s,e,t),n);G(o.idToken,i,"internal-error");const r=Td(o.idToken);G(r,i,"internal-error");const{sub:a}=r;return G(t.uid===a,i,"user-mismatch"),Ti._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ut(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(t,e,n=!1){if(Xe(t.app))return Promise.reject(Mt(t));const i="signIn",s=await Bm(t,i,e),o=await Ti._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}async function Hk(t,e){return Hm(qt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(t){const e=qt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zk(t,e,n){if(Xe(t.app))return Promise.reject(Mt(t));const i=qt(t),r=await Al(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fk).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zm(t),l}),a=await Ti._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(a.user),a}function qk(t,e,n){return Xe(t.app)?Promise.reject(Mt(t)):Hk(Me(t),Cs.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&zm(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Me(t),o={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},r=await ls(i,Wk(i.auth,o));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function Kk(t,e,n,i){return Me(t).onIdTokenChanged(e,n,i)}function Qk(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function Jk(t,e,n,i){return Me(t).onAuthStateChanged(e,n,i)}function Yk(t){return Me(t).signOut()}const wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wa,"1"),this.storage.removeItem(wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=1e3,Zk=10;class Wm extends qm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Om(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((r,a,l)=>{this.notifyListeners(r,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const r=this.storage.getItem(i);!n&&this.localCache[i]===r||this.notifyListeners(i,r)},o=this.storage.getItem(i);fk()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zk):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wm.type="LOCAL";const eT=Wm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends qm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gm.type="SESSION";const Km=Gm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Za(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,r=this.handlersMap[s];if(!(r!=null&&r.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(r).map(async h=>h(n.origin,o)),l=await tT(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,r;return new Promise((a,l)=>{const h=Ed("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);r={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(w.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function iT(t){Ot().location.href=t}/**
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
 */function Qm(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function sT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function rT(){return Qm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="firebaseLocalStorageDb",aT=1,ba="firebaseLocalStorage",Ym="fbase_key";class zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ec(t,e){return t.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function cT(){const t=indexedDB.deleteDatabase(Jm);return new zo(t).toPromise()}function xl(){const t=indexedDB.open(Jm,aT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ba,{keyPath:Ym})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ba)?e(i):(i.close(),await cT(),e(await xl()))})})}async function Ip(t,e,n){const i=ec(t,!0).put({[Ym]:e,value:n});return new zo(i).toPromise()}async function lT(t,e){const n=ec(t,!1).get(e),i=await new zo(n).toPromise();return i===void 0?null:i.value}function Sp(t,e){const n=ec(t,!0).delete(e);return new zo(n).toPromise()}const dT=800,uT=3;class Xm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>uT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Za._getInstance(rT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await sT(),!this.activeServiceWorker)return;this.sender=new nT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xl();return await Ip(e,wa,"1"),await Sp(e,wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ip(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>lT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=ec(s,!1).getAll();return new zo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xm.type="LOCAL";const hT=Xm;new Bo(3e4,6e4);/**
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
 */function Ad(t,e){return e?Zt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends Id{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pT(t){return Hm(t.auth,new xd(t),t.bypassAuthState)}function fT(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Bk(n,new xd(t),t.bypassAuthState)}async function mT(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),jk(n,new xd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:r,type:a}=e;if(r){this.reject(r);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pT;case"linkViaPopup":case"linkViaRedirect":return mT;case"reauthViaPopup":case"reauthViaRedirect":return fT;default:ut(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new Bo(2e3,1e4);async function eg(t,e,n){if(Xe(t.app))return Promise.reject(yt(t,"operation-not-supported-in-this-environment"));const i=qt(t);Cm(t,e,Xa);const s=Ad(i,n);return new ui(i,"signInViaPopup",e,s).executeNotNull()}class ui extends Zm{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Ed();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gT.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="pendingRedirect",Hr=new Map;class vT extends Zm{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const i=await wT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wT(t,e){const n=ng(e),i=tg(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}async function bT(t,e){return tg(t)._set(ng(e),"true")}function _T(t,e){Hr.set(t._key(),e)}function tg(t){return Zt(t._redirectPersistence)}function ng(t){return Br(yT,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e,n){return kT(t,e,n)}async function kT(t,e,n){if(Xe(t.app))return Promise.reject(Mt(t));const i=qt(t);Cm(t,e,Xa),await i._initializationPromise;const s=Ad(i,n);return await bT(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function TT(t,e){return await qt(t)._initializationPromise,sg(t,e,!1)}async function sg(t,e,n=!1){if(Xe(t.app))return Promise.reject(Mt(t));const i=qt(t),s=Ad(i,e),r=await new vT(i,s,n).execute();return r&&!n&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=600*1e3;class IT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ST(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!og(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ep(e))}saveEventToCache(e){this.cachedEventUids.add(Ep(e)),this.lastProcessedEventTime=Date.now()}}function Ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function og({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ST(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return og(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ET(t,e={}){return ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xT=/^https?/;async function RT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ET(t);for(const n of e)try{if(PT(n))return}catch{}ut(t,"unauthorized-domain")}function PT(t){const e=Sl(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return r.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&r.hostname===i}if(!xT.test(n))return!1;if(AT.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const $T=new Bo(3e4,6e4);function Ap(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LT(t){return new Promise((e,n)=>{var s,o,r;function i(){Ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ap(),n(yt(t,"network-request-failed"))},timeout:$T.get()})}if((o=(s=Ot().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((r=Ot().gapi)!=null&&r.load)i();else{const a=Tk("iframefcb");return Ot()[a]=()=>{gapi.load?i():n(yt(t,"network-request-failed"))},Um(`${kk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zr=null,e})}let zr=null;function DT(t){return zr=zr||LT(t),zr}/**
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
 */const NT=new Bo(5e3,15e3),MT="__/auth/iframe",OT="emulator/auth/iframe",VT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FT(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kd(e,OT):`https://${t.config.authDomain}/${MT}`,i={apiKey:e.apiKey,appName:t.name,v:Pi},s=UT.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${jo(i).slice(1)}`}async function jT(t){const e=await DT(t),n=Ot().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:FT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VT,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const r=yt(t,"network-request-failed"),a=Ot().setTimeout(()=>{o(r)},NT.get());function l(){Ot().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{o(r)})}))}/**
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
 */const BT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HT=500,zT=600,qT="_blank",WT="http://localhost";class xp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GT(t,e,n,i=HT,s=zT){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...BT,width:i.toString(),height:s.toString(),top:o,left:r},h=We().toLowerCase();n&&(a=$m(h)?qT:n),Rm(h)&&(e=e||WT,l.scrollbars="yes");const f=Object.entries(l).reduce((w,[k,E])=>`${w}${k}=${E},`,"");if(pk(h)&&a!=="_self")return KT(e||"",a),new xp(null);const g=window.open(e||"",a,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new xp(g)}function KT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const QT="__/auth/handler",JT="emulator/auth/handler",YT=encodeURIComponent("fac");async function Rp(t,e,n,i,s,o){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const r={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Pi,eventId:s};if(e instanceof Xa){e.setDefaultLanguage(t.languageCode),r.providerId=e.providerId||"",Lb(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))r[f]=g}if(e instanceof Is){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(r.scopes=f.join(","))}t.tenantId&&(r.tid=t.tenantId);const a=r;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),h=l?`#${YT}=${encodeURIComponent(l)}`:"";return`${XT(t)}?${jo(a).slice(1)}${h}`}function XT({config:t}){return t.emulator?kd(t,JT):`https://${t.authDomain}/${QT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="webStorageSupport";class ZT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Km,this._completeRedirectFn=sg,this._overrideRedirectResult=_T}async _openPopup(e,n,i,s){var r;sn((r=this.eventManagers[e._key()])==null?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Rp(e,n,i,Sl(),s);return GT(e,o,Ed())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await Rp(e,n,i,Sl(),s);return iT(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(sn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await jT(e),i=new IT(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sl,{type:sl},s=>{var r;const o=(r=s==null?void 0:s[0])==null?void 0:r[sl];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Om()||Pm()||Cd()}}const e0=ZT;var Pp="@firebase/auth",$p="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i0(t){ki(new Un("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:r,authDomain:a}=i.options;G(r&&!r.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:r,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vm(t)},h=new wk(i,s,o,l);return xk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ki(new Un("auth-internal",e=>{const n=qt(e.getProvider("auth").getImmediate());return(i=>new t0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nt(Pp,$p,n0(t)),Nt(Pp,$p,"esm2020")}/**
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
 */const s0=300,o0=mm("authIdTokenMaxAge")||s0;let Lp=null;const r0=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>o0)return;const s=n==null?void 0:n.token;Lp!==s&&(Lp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function a0(t=wd()){const e=Ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ak(t,{popupRedirectResolver:e0,persistence:[hT,eT,Km]}),i=mm("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const r=r0(o.toString());Qk(n,r,()=>r(n.currentUser)),Kk(n,a=>r(a))}}const s=hm("auth");return s&&Rk(n,`http://${s}`),n}function c0(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}bk({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=yt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",c0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i0("Browser");const l0={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Rd=wm(l0),ht=a0(Rd);window._firebaseAuth=ht;const Dp=new Yt,_a=new uo("apple.com");_a.addScope("email");_a.addScope("name");let Pd=null;const qr=[];function d0(t){return qr.push(t),t(Pd),()=>{const e=qr.indexOf(t);e!==-1&&qr.splice(e,1)}}function u0(t){Pd=t,qr.forEach(e=>e(t))}Jk(ht,t=>{u0(t||null)});TT(ht).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function h0(){try{return(await eg(ht,Dp)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await ig(ht,Dp),null;throw t}}async function p0(){try{return(await eg(ht,_a)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await ig(ht,_a),null;throw t}}async function f0(t,e){return(await qk(ht,t,e)).user}async function m0(t,e,n){const i=await zk(ht,t,e);return n&&await Gk(i.user,{displayName:n}),i.user}async function g0(){await Yk(ht)}async function rg(){return ht.currentUser?ht.currentUser.getIdToken():null}function Q(){return Pd}async function qo(t,e,n){const i={"Content-Type":"application/json"},s=await rg();s&&(i.Authorization=`Bearer ${s}`);const o=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:t,path:e,data:n})});if(!(o.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${o.status}) for ${t} ${e}`);return o.json()}async function ae(t){try{return(await qo("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function j(t,e){return qo("set",t,e)}async function fe(t){return qo("delete",t)}async function y0(t){return qo("admin-delete",t)}async function W(t){try{return(await qo("get",t)).doc||null}catch{return null}}function ag(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Rl(t){var n;const e={name:t.displayName||((n=t.email)==null?void 0:n.split("@")[0])||"User",email:t.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await j(`users/${t.uid}`,e),e}async function cg(t,e){var r;const n=Q(),i=t,s=ag(),o={name:e||"My Kitchen",ownerUid:t,members:[{uid:t,name:(n==null?void 0:n.displayName)||((r=n==null?void 0:n.email)==null?void 0:r.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[t],inviteCode:s,createdAt:new Date().toISOString()};try{await j(`households/${i}`,o),await j(`household_codes/${s}`,{householdId:i})}catch(a){console.error(`[createHousehold] FAILED to write households/${i}:`,a)}return{hid:i,...o}}async function v0(t){const e=await W(`household_codes/${t.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function w0(t,e){if(!Wo(e||{}).includes(t))return;const i=await W(`households/${t}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${t} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${t} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${t}`);try{await fe(`households/${t}`),i.inviteCode&&await fe(`household_codes/${i.inviteCode}`)}catch(o){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",o)}}async function lg(t,e){var a;const n=await v0(t);if(!n)return null;const i=await W(`households/${n}`);if(!i)return null;const s=i.members||[],o=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((a=e.email)==null?void 0:a.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),o.includes(e.uid)||o.push(e.uid),await j(`households/${n}`,{...i,members:s,memberUids:o,id:void 0}));const r=await W(`users/${e.uid}`);if(r){await w0(e.uid,r);const l={...r,householdIds:[n],needsHousehold:!1,onboardingDone:!0,id:void 0};r.householdId&&delete l.householdId,await j(`users/${e.uid}`,l)}return n}async function b0(t){const e=await W(`households/${t}`);if(!e)return null;if(e.inviteCode)try{await fe(`household_codes/${e.inviteCode}`)}catch{}const n=ag();return await j(`household_codes/${n}`,{householdId:t}),await j(`households/${t}`,{...e,inviteCode:n,id:void 0}),n}async function dg(t,e){const n=await W(`households/${t}`);if(!n)return;const i=(n.members||[]).filter(o=>o.uid!==e),s=(n.memberUids||[]).filter(o=>o!==e);await j(`households/${t}`,{...n,members:i,memberUids:s,id:void 0});try{const o=await W(`users/${e}`);if(o){const r={...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};o.householdId&&delete r.householdId,await j(`users/${e}`,r)}}catch{}}async function _0(t,e){const n=await W(`households/${t}`);if(!n)throw new Error("Household not found");const i=(n.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===n.ownerUid?"member":s.role}));await j(`households/${t}`,{...n,ownerUid:e,members:i,id:void 0})}async function ug(t,e){const n=await W(`households/${t}`);if(!n)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const o=await ae(`households/${t}/${s}`);for(const r of o)await fe(`households/${t}/${s}/${r.id}`)}catch{}if(n.inviteCode)try{await fe(`household_codes/${n.inviteCode}`)}catch{}await fe(`households/${t}`);try{const s=await W(`users/${e}`);if(s){const r=Wo(s).filter(l=>l!==t),a={...s,householdIds:r,id:void 0};s.householdId&&delete a.householdId,await j(`users/${e}`,a)}}catch{}}async function hg(t,e){try{const n=await W(`households/${t}`);return n?(n.memberUids||[]).includes(e):!1}catch{return!1}}async function Np(t,e){const n=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of n){const s=await ae(`households/${t}/${i}`);for(const o of s){const r=o.id,a={...o};delete a.id,await j(`households/${e}/${i}/${r}`,a)}}}function Wo(t){return t.householdId&&typeof t.householdId=="string"?[t.householdId]:t.householdIds||[]}async function k0(t,e){const n=Wo(e);if(!n.length)return null;console.log(`[_validateHouseholdIds] Checking ${n.length} household IDs:`,n);const i=await Promise.all(n.map(async a=>{const l=await W(`households/${a}`);if(!l)return console.log(`[_validateHouseholdIds] household ${a} does NOT exist — will remove`),{hid:a,exists:!1,isMember:!1};const h=(l.memberUids||[]).includes(t)||(l.members||[]).some(f=>f.uid===t);return console.log(`[_validateHouseholdIds] household ${a} exists, isMember=${h}`),{hid:a,exists:!0,isMember:h}})),s=i.filter(a=>a.exists).map(a=>a.hid),o=i.filter(a=>a.exists&&a.isMember).map(a=>a.hid),r=i.filter(a=>!a.exists).map(a=>a.hid);if(r.length>0){console.log(`[_validateHouseholdIds] Removing ${r.length} stale IDs:`,r);const a=n.filter(l=>!r.includes(l));await j(`users/${t}`,{...e,householdIds:a,id:void 0})}if(o.length>0){const l=o.find(h=>h!==t)||o[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function T0(t){var h;const e=t.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const n=localStorage.getItem("ks-h");n&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${n}"`),localStorage.removeItem("ks-h"));const i=await W(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const f=await k0(e,i),g=Wo(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${f}, ids=`,g),f?(n&&n!==f&&n!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${n} → ${f}`),await Np(n,f)),f):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),o=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${o}`);const r=((h=d.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await cg(e,o?r:"My Kitchen"),o&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Np(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const a=await Rl(t);a.householdIds=[e],await j(`users/${e}`,a),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=pe("ks-hhs");if(l){const f=l.filter(g=>g!==s);f.includes(e)||f.push(e),localStorage.setItem("ks-hhs",JSON.stringify(f))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Fn(t,e){if(e){d.mp[t]=e;const n=d.mpCooked[t]||!1;await j(`households/${d.hid}/mealplan/${t}`,{date:t,meal:e,cooked:n})}else delete d.mp[t],delete d.mpCooked[t],await fe(`households/${d.hid}/mealplan/${t}`)}async function C0(t){d.mpCooked[t]=!0;const e=d.mp[t];e&&await j(`households/${d.hid}/mealplan/${t}`,{date:t,meal:e,cooked:!0})}async function tc(){await j(`households/${d.hid}/settings/config`,d.cfg)}async function $d(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||Pl(),loggedAt:new Date().toISOString()};d.cookLog.unshift(n),d.cookLog.length>200&&(d.cookLog=d.cookLog.slice(0,200)),await j(`households/${d.hid}/cooklog/${n.id}`,n)}async function I0(t){if(d.wasteLog.find(n=>n.name===t&&n.date===Pl()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:Pl(),loggedAt:new Date().toISOString()};d.wasteLog.unshift(e),d.wasteLog.length>100&&(d.wasteLog=d.wasteLog.slice(0,100)),await j(`households/${d.hid}/wastelog/${e.id}`,e)}async function S0(){try{try{const o=await W(`households/${d.hid}`);o&&o.inviteCode&&(await W(`household_codes/${o.inviteCode}`)||(await j(`household_codes/${o.inviteCode}`,{householdId:d.hid}),console.log(`[backfill] Created household_codes/${o.inviteCode} for household ${d.hid}`)))}catch(o){console.warn("[backfill] household_codes backfill skipped:",o.message)}const e=(await ae(`households/${d.hid}/settings`)).find(o=>o.id==="config");if(e)d.cfg={...ua,...e};else{const o=pe("ks-c");d.cfg={...ua,...o||{}},await tc(),o&&localStorage.removeItem("ks-c")}const n=await ae(`households/${d.hid}/mealplan`);if(d.mp={},d.mpCooked={},n.forEach(o=>{o.date&&o.meal&&(d.mp[o.date]=o.meal,o.cooked&&(d.mpCooked[o.date]=!0))}),!n.length){const o=pe("ks-m");if(o&&Object.keys(o).length){d.mp=o;for(const[r,a]of Object.entries(o))await Fn(r,a);localStorage.removeItem("ks-m")}}const i=await ae(`households/${d.hid}/cooklog`);if(i.length)d.cookLog=i.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=pe("ks-cooklog");if(o&&o.length){d.cookLog=o.map((r,a)=>({id:r.id||(Date.now()-a).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of d.cookLog)await j(`households/${d.hid}/cooklog/${r.id}`,r);localStorage.removeItem("ks-cooklog")}}try{const o=await ae(`households/${d.hid}/productPreferences`);d.productPrefs={};for(const r of o)r.id&&(d.productPrefs[r.id]=r)}catch(o){console.warn("[loadFirestoreData] productPreferences load skipped:",o.message)}const s=await ae(`households/${d.hid}/wastelog`);if(s.length)d.wasteLog=s.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=pe("ks-waste");if(o&&o.length){d.wasteLog=o.map((r,a)=>({id:r.id||(Date.now()-a).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of d.wasteLog)await j(`households/${d.hid}/wastelog/${r.id}`,r);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}let Ki=0;function Ss(){Ki++,Ki===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Es(){Ki--,Ki<=0&&(Ki=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}function E0(){window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null),window._pollFn=null,Ki=0}const F={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ce(t){var i;const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+(((i=d.cfg)==null?void 0:i.name)||d.hid):t==="syncing"?"Syncing…":"Sync error")}async function ee(t){var e,n;ce("syncing"),Ss();try{const i=!d.inv.find(s=>s.id===t.id);d.inv=[...d.inv.filter(s=>s.id!==t.id),t],(e=F.renderAll)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await j(`households/${d.hid}/inventory/${t.id}`,t),i&&Se("added",Z(t.name)+" to Supplies"),ce("synced")}catch(i){console.error(i),ce("error")}finally{Es()}}async function Go(t){var e,n;ce("syncing"),Ss();try{const i=d.inv.find(s=>s.id===t);d.inv=d.inv.filter(s=>s.id!==t),(e=F.renderAll)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await fe(`households/${d.hid}/inventory/${t}`),i&&Se("removed",Z(i.name)+" from Supplies"),ce("synced")}catch(i){console.error(i),ce("error")}finally{Es()}}async function nt(t){var e,n;Ss();try{const i=!d.recs.find(o=>o.id===t.id);d.recs=[...d.recs.filter(o=>o.id!==t.id),t],(e=F.renderRecs)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await j(`households/${d.hid}/recipes/${t.id}`,t);const s=Z(t.name||t.title||"a recipe");i?Se("added",s+" to Recipes"):Se("updated",s)}catch(i){console.error(i)}finally{Es()}}async function ol(t){var e,n;Ss();try{const i=d.recs.find(s=>s.id===t);d.recs=d.recs.filter(s=>s.id!==t),(e=F.renderRecs)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await fe(`households/${d.hid}/recipes/${t}`),i&&Se("deleted",Z(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{Es()}}async function Ne(t){var e,n;Ss();try{const i=!d.shop.find(s=>s.id===t.id);d.shop=[...d.shop.filter(s=>s.id!==t.id),t],(e=F.renderShop)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await j(`households/${d.hid}/shopping/${t.id}`,t),i&&Se("added",Z(t.name)+" to Shopping List")}catch(i){console.error(i)}finally{Es()}}async function Ko(t){var e,n;Ss();try{const i=d.shop.find(s=>s.id===t);d.shop=d.shop.filter(s=>s.id!==t),(e=F.renderShop)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await fe(`households/${d.hid}/shopping/${t}`),i&&Se("removed",Z(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{Es()}}async function Ld(t,e){var s;const n="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:t.name,ingredients:t.description||"",steps:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",sourceRecipeId:t.id||null,imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",difficulty:t.difficulty||"",summary:t.summary||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],authorName:e||"Anonymous",authorUsername:d.username||"",authorUid:((s=Q())==null?void 0:s.uid)||"",householdId:d.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await j(`public_recipes/${n}`,i),{id:n,...i}}async function pg(t){var i;if(!((i=Q())==null?void 0:i.uid))return null;const n=d.hid||"";if(t.publicId)try{const s=await fg(t.publicId);if(s)return s}catch{}try{d.comRecs=await Ft()}catch{}if(d.comRecs&&d.comRecs.length>0){const s=await Nd(),o=l=>l.householdId?l.householdId===n:l.authorUid&&s.includes(l.authorUid);if(t.id){const l=d.comRecs.find(h=>o(h)&&h.sourceRecipeId===t.id);if(l)return l}const r=(t.name||"").trim().toLowerCase(),a=d.comRecs.find(l=>o(l)&&(l.title||"").trim().toLowerCase()===r);if(a)return a}return null}async function Dd(t){await fe(`public_recipes/${t}`)}async function Ft(){return ae("public_recipes")}async function fg(t){return W(`public_recipes/${t}`)}async function A0(t,e){var r;const n=(r=Q())==null?void 0:r.uid;if(!n)return;const i=`public_recipes/${t}/likes/${n}`;e?await fe(i):await j(i,{likedAt:new Date().toISOString()});const s=await ae(`public_recipes/${t}/likes`),o=await W(`public_recipes/${t}`);o&&await j(`public_recipes/${t}`,{...o,likes:s.length,id:void 0})}async function x0(t,e,n){var a;const i=(a=Q())==null?void 0:a.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),o="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:s,authorName:n,authorUsername:d.username||"",authorUid:i,createdAt:new Date().toISOString()};await j(`public_recipes/${t}/comments/${o}`,r);try{const l=await W(`public_recipes/${t}`);if(l){const h=await ae(`public_recipes/${t}/comments`);await j(`public_recipes/${t}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await B0(l.authorUid,{type:"comment",recipeId:t,recipeName:l.title||"a recipe",commenterUsername:d.username||n||"Someone"})}}catch{}return{id:o,...r}}async function R0(t){return ae(`public_recipes/${t}/comments`)}async function P0(t){var i;const e=(i=Q())==null?void 0:i.uid;return e?!!await W(`public_recipes/${t}/likes/${e}`):!1}async function $0(t){const n={id:"rec-"+Date.now(),name:t.title,description:t.ingredients||"",notes:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],difficulty:t.difficulty||"",summary:t.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await nt(n),n}async function mg(t){return t?!await W(`usernames/${t.toLowerCase()}`):!1}async function gg(t,e){const n=await W(`users/${t}`),i=n==null?void 0:n.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await fe(`usernames/${i.toLowerCase()}`)}catch{}await j(`usernames/${e.toLowerCase()}`,{uid:t}),n&&await j(`users/${t}`,{...n,username:e,id:void 0}),d.username=e}async function L0(t){try{const e=await W(`users/${t}`);return(e==null?void 0:e.username)||null}catch{return null}}async function D0(t){const e=await W(`users/${t}`);if(!e)return;try{const s=(await Ft()||[]).filter(o=>o.authorUid===t);for(const o of s)await j(`public_recipes/${o.id}`,{...o,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${t}:`,i)}const n=Wo(e);for(const i of n)try{const s=await W(`households/${i}`);if(!s)continue;const o=s.ownerUid===t,r=(s.members||[]).length;if(o&&r<=1)await ug(i,t);else if(!o){const a=(s.members||[]).filter(h=>h.uid!==t),l=(s.memberUids||[]).filter(h=>h!==t);await j(`households/${i}`,{...s,members:a,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await fe(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await ae(`users/${t}/notifications`);for(const s of i)await fe(`users/${t}/notifications/${s.id}`)}catch{}try{await fe(`users/${t}`)}catch{}}async function N0(t){var n;const e=(n=Q())==null?void 0:n.uid;return e?W(`public_recipes/${t}/reviews/${e}`):null}async function Nd(){if(!d.hid)return[];try{const t=await W(`households/${d.hid}`);return(t==null?void 0:t.memberUids)||[]}catch{return[]}}async function Se(t,e){if(!d.hid||!e)return;const n=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:n,action:t,itemName:e,timestamp:new Date().toISOString()};try{await j(`households/${d.hid}/activity/${i}`,s),M0()}catch{}}async function M0(){try{const t=await ae(`households/${d.hid}/activity`),e=Date.now()-10080*60*1e3;for(const n of t)n.timestamp&&new Date(n.timestamp).getTime()<e&&await fe(`households/${d.hid}/activity/${n.id}`)}catch{}}function Pl(){return new Date().toISOString().split("T")[0]}async function O0(t,e){var g;const n=(g=Q())==null?void 0:g.uid;if(!n||!e||e<1||e>5)return null;const i=await W(`public_recipes/${t}`);if(i&&i.authorUid===n)return null;const s=new Date().toISOString(),o=await W(`public_recipes/${t}/ratings/${n}`),r={rating:e,createdAt:(o==null?void 0:o.createdAt)||s,updatedAt:s};await j(`public_recipes/${t}/ratings/${n}`,r);const a=await ae(`public_recipes/${t}/ratings`),l=a.reduce((w,k)=>w+(k.rating||0),0),h=a.length,f=h>0?Math.round(l/h*10)/10:0;return i&&await j(`public_recipes/${t}`,{...i,ratingSum:l,ratingCount:h,avgRating:f,id:void 0}),{...r,ratingSum:l,ratingCount:h,avgRating:f}}async function V0(t){var n;const e=(n=Q())==null?void 0:n.uid;return e?W(`public_recipes/${t}/ratings/${e}`):null}async function U0(t){var a;const e=(a=Q())==null?void 0:a.uid;if(!e)return null;await fe(`public_recipes/${t}/ratings/${e}`);const n=await ae(`public_recipes/${t}/ratings`),i=n.reduce((l,h)=>l+(h.rating||0),0),s=n.length,o=s>0?Math.round(i/s*10)/10:0,r=await W(`public_recipes/${t}`);return r&&await j(`public_recipes/${t}`,{...r,ratingSum:i,ratingCount:s,avgRating:o,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:o}}async function F0(t,e){await fe(`public_recipes/${t}/comments/${e}`);try{const n=await W(`public_recipes/${t}`);if(n){const i=await ae(`public_recipes/${t}/comments`);await j(`public_recipes/${t}`,{...n,commentCount:i.length,id:void 0})}}catch{}}async function j0(t,e,n,i){var h;const s=(h=Q())==null?void 0:h.uid;if(!s)return null;if((await ae("reports")).find(f=>f.reportedBy===s&&f.targetId===e&&f.type===t))return"duplicate";const a="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:t,targetId:e,recipeId:i||e,reportedBy:s,reason:n,createdAt:new Date().toISOString(),status:"pending"};return await j(`reports/${a}`,l),{id:a,...l}}async function B0(t,e){if(!t)return;const n="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await j(`users/${t}/notifications/${n}`,i)}async function H0(){var n;const t=(n=Q())==null?void 0:n.uid;return t?(await ae(`users/${t}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function z0(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=await ae(`users/${t}/notifications`);for(const i of e)i.read||await j(`users/${t}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function q0(){var n;const t=(n=Q())==null?void 0:n.uid;return t?(await ae(`users/${t}/notifications`)).filter(i=>!i.read).length:0}var Mp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dn,yg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,v){function b(){}b.prototype=v.prototype,C.F=v.prototype,C.prototype=new b,C.prototype.constructor=C,C.D=function(S,I,A){for(var T=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)T[Ee-2]=arguments[Ee];return v.prototype[I].apply(S,T)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,v,b){b||(b=0);const S=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)S[I]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(I=0;I<16;++I)S[I]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=C.g[0],b=C.g[1],I=C.g[2];let A=C.g[3],T;T=v+(A^b&(I^A))+S[0]+3614090360&4294967295,v=b+(T<<7&4294967295|T>>>25),T=A+(I^v&(b^I))+S[1]+3905402710&4294967295,A=v+(T<<12&4294967295|T>>>20),T=I+(b^A&(v^b))+S[2]+606105819&4294967295,I=A+(T<<17&4294967295|T>>>15),T=b+(v^I&(A^v))+S[3]+3250441966&4294967295,b=I+(T<<22&4294967295|T>>>10),T=v+(A^b&(I^A))+S[4]+4118548399&4294967295,v=b+(T<<7&4294967295|T>>>25),T=A+(I^v&(b^I))+S[5]+1200080426&4294967295,A=v+(T<<12&4294967295|T>>>20),T=I+(b^A&(v^b))+S[6]+2821735955&4294967295,I=A+(T<<17&4294967295|T>>>15),T=b+(v^I&(A^v))+S[7]+4249261313&4294967295,b=I+(T<<22&4294967295|T>>>10),T=v+(A^b&(I^A))+S[8]+1770035416&4294967295,v=b+(T<<7&4294967295|T>>>25),T=A+(I^v&(b^I))+S[9]+2336552879&4294967295,A=v+(T<<12&4294967295|T>>>20),T=I+(b^A&(v^b))+S[10]+4294925233&4294967295,I=A+(T<<17&4294967295|T>>>15),T=b+(v^I&(A^v))+S[11]+2304563134&4294967295,b=I+(T<<22&4294967295|T>>>10),T=v+(A^b&(I^A))+S[12]+1804603682&4294967295,v=b+(T<<7&4294967295|T>>>25),T=A+(I^v&(b^I))+S[13]+4254626195&4294967295,A=v+(T<<12&4294967295|T>>>20),T=I+(b^A&(v^b))+S[14]+2792965006&4294967295,I=A+(T<<17&4294967295|T>>>15),T=b+(v^I&(A^v))+S[15]+1236535329&4294967295,b=I+(T<<22&4294967295|T>>>10),T=v+(I^A&(b^I))+S[1]+4129170786&4294967295,v=b+(T<<5&4294967295|T>>>27),T=A+(b^I&(v^b))+S[6]+3225465664&4294967295,A=v+(T<<9&4294967295|T>>>23),T=I+(v^b&(A^v))+S[11]+643717713&4294967295,I=A+(T<<14&4294967295|T>>>18),T=b+(A^v&(I^A))+S[0]+3921069994&4294967295,b=I+(T<<20&4294967295|T>>>12),T=v+(I^A&(b^I))+S[5]+3593408605&4294967295,v=b+(T<<5&4294967295|T>>>27),T=A+(b^I&(v^b))+S[10]+38016083&4294967295,A=v+(T<<9&4294967295|T>>>23),T=I+(v^b&(A^v))+S[15]+3634488961&4294967295,I=A+(T<<14&4294967295|T>>>18),T=b+(A^v&(I^A))+S[4]+3889429448&4294967295,b=I+(T<<20&4294967295|T>>>12),T=v+(I^A&(b^I))+S[9]+568446438&4294967295,v=b+(T<<5&4294967295|T>>>27),T=A+(b^I&(v^b))+S[14]+3275163606&4294967295,A=v+(T<<9&4294967295|T>>>23),T=I+(v^b&(A^v))+S[3]+4107603335&4294967295,I=A+(T<<14&4294967295|T>>>18),T=b+(A^v&(I^A))+S[8]+1163531501&4294967295,b=I+(T<<20&4294967295|T>>>12),T=v+(I^A&(b^I))+S[13]+2850285829&4294967295,v=b+(T<<5&4294967295|T>>>27),T=A+(b^I&(v^b))+S[2]+4243563512&4294967295,A=v+(T<<9&4294967295|T>>>23),T=I+(v^b&(A^v))+S[7]+1735328473&4294967295,I=A+(T<<14&4294967295|T>>>18),T=b+(A^v&(I^A))+S[12]+2368359562&4294967295,b=I+(T<<20&4294967295|T>>>12),T=v+(b^I^A)+S[5]+4294588738&4294967295,v=b+(T<<4&4294967295|T>>>28),T=A+(v^b^I)+S[8]+2272392833&4294967295,A=v+(T<<11&4294967295|T>>>21),T=I+(A^v^b)+S[11]+1839030562&4294967295,I=A+(T<<16&4294967295|T>>>16),T=b+(I^A^v)+S[14]+4259657740&4294967295,b=I+(T<<23&4294967295|T>>>9),T=v+(b^I^A)+S[1]+2763975236&4294967295,v=b+(T<<4&4294967295|T>>>28),T=A+(v^b^I)+S[4]+1272893353&4294967295,A=v+(T<<11&4294967295|T>>>21),T=I+(A^v^b)+S[7]+4139469664&4294967295,I=A+(T<<16&4294967295|T>>>16),T=b+(I^A^v)+S[10]+3200236656&4294967295,b=I+(T<<23&4294967295|T>>>9),T=v+(b^I^A)+S[13]+681279174&4294967295,v=b+(T<<4&4294967295|T>>>28),T=A+(v^b^I)+S[0]+3936430074&4294967295,A=v+(T<<11&4294967295|T>>>21),T=I+(A^v^b)+S[3]+3572445317&4294967295,I=A+(T<<16&4294967295|T>>>16),T=b+(I^A^v)+S[6]+76029189&4294967295,b=I+(T<<23&4294967295|T>>>9),T=v+(b^I^A)+S[9]+3654602809&4294967295,v=b+(T<<4&4294967295|T>>>28),T=A+(v^b^I)+S[12]+3873151461&4294967295,A=v+(T<<11&4294967295|T>>>21),T=I+(A^v^b)+S[15]+530742520&4294967295,I=A+(T<<16&4294967295|T>>>16),T=b+(I^A^v)+S[2]+3299628645&4294967295,b=I+(T<<23&4294967295|T>>>9),T=v+(I^(b|~A))+S[0]+4096336452&4294967295,v=b+(T<<6&4294967295|T>>>26),T=A+(b^(v|~I))+S[7]+1126891415&4294967295,A=v+(T<<10&4294967295|T>>>22),T=I+(v^(A|~b))+S[14]+2878612391&4294967295,I=A+(T<<15&4294967295|T>>>17),T=b+(A^(I|~v))+S[5]+4237533241&4294967295,b=I+(T<<21&4294967295|T>>>11),T=v+(I^(b|~A))+S[12]+1700485571&4294967295,v=b+(T<<6&4294967295|T>>>26),T=A+(b^(v|~I))+S[3]+2399980690&4294967295,A=v+(T<<10&4294967295|T>>>22),T=I+(v^(A|~b))+S[10]+4293915773&4294967295,I=A+(T<<15&4294967295|T>>>17),T=b+(A^(I|~v))+S[1]+2240044497&4294967295,b=I+(T<<21&4294967295|T>>>11),T=v+(I^(b|~A))+S[8]+1873313359&4294967295,v=b+(T<<6&4294967295|T>>>26),T=A+(b^(v|~I))+S[15]+4264355552&4294967295,A=v+(T<<10&4294967295|T>>>22),T=I+(v^(A|~b))+S[6]+2734768916&4294967295,I=A+(T<<15&4294967295|T>>>17),T=b+(A^(I|~v))+S[13]+1309151649&4294967295,b=I+(T<<21&4294967295|T>>>11),T=v+(I^(b|~A))+S[4]+4149444226&4294967295,v=b+(T<<6&4294967295|T>>>26),T=A+(b^(v|~I))+S[11]+3174756917&4294967295,A=v+(T<<10&4294967295|T>>>22),T=I+(v^(A|~b))+S[2]+718787259&4294967295,I=A+(T<<15&4294967295|T>>>17),T=b+(A^(I|~v))+S[9]+3951481745&4294967295,C.g[0]=C.g[0]+v&4294967295,C.g[1]=C.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+A&4294967295}i.prototype.v=function(C,v){v===void 0&&(v=C.length);const b=v-this.blockSize,S=this.C;let I=this.h,A=0;for(;A<v;){if(I==0)for(;A<=b;)s(this,C,A),A+=this.blockSize;if(typeof C=="string"){for(;A<v;)if(S[I++]=C.charCodeAt(A++),I==this.blockSize){s(this,S),I=0;break}}else for(;A<v;)if(S[I++]=C[A++],I==this.blockSize){s(this,S),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var v=1;v<C.length-8;++v)C[v]=0;v=this.o*8;for(var b=C.length-8;b<C.length;++b)C[b]=v&255,v/=256;for(this.v(C),C=Array(16),v=0,b=0;b<4;++b)for(let S=0;S<32;S+=8)C[v++]=this.g[b]>>>S&255;return C};function o(C,v){var b=a;return Object.prototype.hasOwnProperty.call(b,C)?b[C]:b[C]=v(C)}function r(C,v){this.h=v;const b=[];let S=!0;for(let I=C.length-1;I>=0;I--){const A=C[I]|0;S&&A==v||(b[I]=A,S=!1)}this.g=b}var a={};function l(C){return-128<=C&&C<128?o(C,function(v){return new r([v|0],v<0?-1:0)}):new r([C|0],C<0?-1:0)}function h(C){if(isNaN(C)||!isFinite(C))return g;if(C<0)return P(h(-C));const v=[];let b=1;for(let S=0;C>=b;S++)v[S]=C/b|0,b*=4294967296;return new r(v,0)}function f(C,v){if(C.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(C.charAt(0)=="-")return P(f(C.substring(1),v));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=h(Math.pow(v,8));let S=g;for(let A=0;A<C.length;A+=8){var I=Math.min(8,C.length-A);const T=parseInt(C.substring(A,A+I),v);I<8?(I=h(Math.pow(v,I)),S=S.j(I).add(h(T))):(S=S.j(b),S=S.add(h(T)))}return S}var g=l(0),w=l(1),k=l(16777216);t=r.prototype,t.m=function(){if($(this))return-P(this).m();let C=0,v=1;for(let b=0;b<this.g.length;b++){const S=this.i(b);C+=(S>=0?S:4294967296+S)*v,v*=4294967296}return C},t.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(E(this))return"0";if($(this))return"-"+P(this).toString(C);const v=h(Math.pow(C,6));var b=this;let S="";for(;;){const I=D(b,v).g;b=O(b,I.j(v));let A=((b.g.length>0?b.g[0]:b.h)>>>0).toString(C);if(b=I,E(b))return A+S;for(;A.length<6;)A="0"+A;S=A+S}},t.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function E(C){if(C.h!=0)return!1;for(let v=0;v<C.g.length;v++)if(C.g[v]!=0)return!1;return!0}function $(C){return C.h==-1}t.l=function(C){return C=O(this,C),$(C)?-1:E(C)?0:1};function P(C){const v=C.g.length,b=[];for(let S=0;S<v;S++)b[S]=~C.g[S];return new r(b,~C.h).add(w)}t.abs=function(){return $(this)?P(this):this},t.add=function(C){const v=Math.max(this.g.length,C.g.length),b=[];let S=0;for(let I=0;I<=v;I++){let A=S+(this.i(I)&65535)+(C.i(I)&65535),T=(A>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);S=T>>>16,A&=65535,T&=65535,b[I]=T<<16|A}return new r(b,b[b.length-1]&-2147483648?-1:0)};function O(C,v){return C.add(P(v))}t.j=function(C){if(E(this)||E(C))return g;if($(this))return $(C)?P(this).j(P(C)):P(P(this).j(C));if($(C))return P(this.j(P(C)));if(this.l(k)<0&&C.l(k)<0)return h(this.m()*C.m());const v=this.g.length+C.g.length,b=[];for(var S=0;S<2*v;S++)b[S]=0;for(S=0;S<this.g.length;S++)for(let I=0;I<C.g.length;I++){const A=this.i(S)>>>16,T=this.i(S)&65535,Ee=C.i(I)>>>16,ft=C.i(I)&65535;b[2*S+2*I]+=T*ft,M(b,2*S+2*I),b[2*S+2*I+1]+=A*ft,M(b,2*S+2*I+1),b[2*S+2*I+1]+=T*Ee,M(b,2*S+2*I+1),b[2*S+2*I+2]+=A*Ee,M(b,2*S+2*I+2)}for(C=0;C<v;C++)b[C]=b[2*C+1]<<16|b[2*C];for(C=v;C<2*v;C++)b[C]=0;return new r(b,0)};function M(C,v){for(;(C[v]&65535)!=C[v];)C[v+1]+=C[v]>>>16,C[v]&=65535,v++}function N(C,v){this.g=C,this.h=v}function D(C,v){if(E(v))throw Error("division by zero");if(E(C))return new N(g,g);if($(C))return v=D(P(C),v),new N(P(v.g),P(v.h));if($(v))return v=D(C,P(v)),new N(P(v.g),v.h);if(C.g.length>30){if($(C)||$(v))throw Error("slowDivide_ only works with positive integers.");for(var b=w,S=v;S.l(C)<=0;)b=B(b),S=B(S);var I=q(b,1),A=q(S,1);for(S=q(S,2),b=q(b,2);!E(S);){var T=A.add(S);T.l(C)<=0&&(I=I.add(b),A=T),S=q(S,1),b=q(b,1)}return v=O(C,I.j(v)),new N(I,v)}for(I=g;C.l(v)>=0;){for(b=Math.max(1,Math.floor(C.m()/v.m())),S=Math.ceil(Math.log(b)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),A=h(b),T=A.j(v);$(T)||T.l(C)>0;)b-=S,A=h(b),T=A.j(v);E(A)&&(A=w),I=I.add(A),C=O(C,T)}return new N(I,C)}t.B=function(C){return D(this,C).h},t.and=function(C){const v=Math.max(this.g.length,C.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)&C.i(S);return new r(b,this.h&C.h)},t.or=function(C){const v=Math.max(this.g.length,C.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)|C.i(S);return new r(b,this.h|C.h)},t.xor=function(C){const v=Math.max(this.g.length,C.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)^C.i(S);return new r(b,this.h^C.h)};function B(C){const v=C.g.length+1,b=[];for(let S=0;S<v;S++)b[S]=C.i(S)<<1|C.i(S-1)>>>31;return new r(b,C.h)}function q(C,v){const b=v>>5;v%=32;const S=C.g.length-b,I=[];for(let A=0;A<S;A++)I[A]=v>0?C.i(A+b)>>>v|C.i(A+b+1)<<32-v:C.i(A+b);return new r(I,C.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,yg=i,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=h,r.fromString=f,Dn=r}).apply(typeof Mp<"u"?Mp:typeof self<"u"?self:typeof window<"u"?window:{});var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vg,io,wg,Wr,$l,bg,_g,kg;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sr=="object"&&Sr];for(var p=0;p<c.length;++p){var m=c[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=n(this);function s(c,p){if(p)e:{var m=i;c=c.split(".");for(var y=0;y<c.length-1;y++){var x=c[y];if(!(x in m))break e;m=m[x]}c=c[c.length-1],y=m[c],p=p(y),p!=y&&p!=null&&e(m,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var m=[],y;for(y in p)Object.prototype.hasOwnProperty.call(p,y)&&m.push([y,p[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},r=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,m){return c.call.apply(c.bind,arguments)}function h(c,p,m){return h=l,h.apply(null,arguments)}function f(c,p){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function g(c,p){function m(){}m.prototype=p.prototype,c.Z=p.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(y,x,R){for(var V=Array(arguments.length-2),te=2;te<arguments.length;te++)V[te-2]=arguments[te];return p.prototype[x].apply(y,V)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function k(c){const p=c.length;if(p>0){const m=Array(p);for(let y=0;y<p;y++)m[y]=c[y];return m}return[]}function E(c,p){for(let y=1;y<arguments.length;y++){const x=arguments[y];var m=typeof x;if(m=m!="object"?m:x?Array.isArray(x)?"array":m:"null",m=="array"||m=="object"&&typeof x.length=="number"){m=c.length||0;const R=x.length||0;c.length=m+R;for(let V=0;V<R;V++)c[m+V]=x[V]}else c.push(x)}}class ${constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function P(c){r.setTimeout(()=>{throw c},0)}function O(){var c=C;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class M{constructor(){this.h=this.g=null}add(p,m){const y=N.get();y.set(p,m),this.h?this.h.next=y:this.g=y,this.h=y}}var N=new $(()=>new D,c=>c.reset());class D{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let B,q=!1,C=new M,v=()=>{const c=Promise.resolve(void 0);B=()=>{c.then(b)}};function b(){for(var c;c=O();){try{c.h.call(c.g)}catch(m){P(m)}var p=N;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}q=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!r.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};r.addEventListener("test",m,p),r.removeEventListener("test",m,p)}catch{}return c})();function T(c){return/^[\s\xa0]*$/.test(c)}function Ee(c,p){I.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}g(Ee,I),Ee.prototype.init=function(c,p){const m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(m=="mouseover"?p=c.fromElement:m=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ee.Z.h.call(this)},Ee.prototype.h=function(){Ee.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),dr=0;function me(c,p,m,y,x){this.listener=c,this.proxy=null,this.src=p,this.type=m,this.capture=!!y,this.ha=x,this.key=++dr,this.da=this.fa=!1}function bt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ur(c,p,m){for(const y in c)p.call(m,c[y],y,c)}function hw(c,p){for(const m in c)p.call(void 0,c[m],m,c)}function nh(c){const p={};for(const m in c)p[m]=c[m];return p}const ih="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sh(c,p){let m,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(m in y)c[m]=y[m];for(let R=0;R<ih.length;R++)m=ih[R],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function hr(c){this.src=c,this.g={},this.h=0}hr.prototype.add=function(c,p,m,y,x){const R=c.toString();c=this.g[R],c||(c=this.g[R]=[],this.h++);const V=Ec(c,p,y,x);return V>-1?(p=c[V],m||(p.fa=!1)):(p=new me(p,this.src,R,!!y,x),p.fa=m,c.push(p)),p};function Sc(c,p){const m=p.type;if(m in c.g){var y=c.g[m],x=Array.prototype.indexOf.call(y,p,void 0),R;(R=x>=0)&&Array.prototype.splice.call(y,x,1),R&&(bt(p),c.g[m].length==0&&(delete c.g[m],c.h--))}}function Ec(c,p,m,y){for(let x=0;x<c.length;++x){const R=c[x];if(!R.da&&R.listener==p&&R.capture==!!m&&R.ha==y)return x}return-1}var Ac="closure_lm_"+(Math.random()*1e6|0),xc={};function oh(c,p,m,y,x){if(Array.isArray(p)){for(let R=0;R<p.length;R++)oh(c,p[R],m,y,x);return null}return m=ch(m),c&&c[ft]?c.J(p,m,a(y)?!!y.capture:!1,x):pw(c,p,m,!1,y,x)}function pw(c,p,m,y,x,R){if(!p)throw Error("Invalid event type");const V=a(x)?!!x.capture:!!x;let te=Pc(c);if(te||(c[Ac]=te=new hr(c)),m=te.add(p,m,y,V,R),m.proxy)return m;if(y=fw(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)A||(x=V),x===void 0&&(x=!1),c.addEventListener(p.toString(),y,x);else if(c.attachEvent)c.attachEvent(ah(p.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function fw(){function c(m){return p.call(c.src,c.listener,m)}const p=mw;return c}function rh(c,p,m,y,x){if(Array.isArray(p))for(var R=0;R<p.length;R++)rh(c,p[R],m,y,x);else y=a(y)?!!y.capture:!!y,m=ch(m),c&&c[ft]?(c=c.i,R=String(p).toString(),R in c.g&&(p=c.g[R],m=Ec(p,m,y,x),m>-1&&(bt(p[m]),Array.prototype.splice.call(p,m,1),p.length==0&&(delete c.g[R],c.h--)))):c&&(c=Pc(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Ec(p,m,y,x)),(m=c>-1?p[c]:null)&&Rc(m))}function Rc(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[ft])Sc(p.i,c);else{var m=c.type,y=c.proxy;p.removeEventListener?p.removeEventListener(m,y,c.capture):p.detachEvent?p.detachEvent(ah(m),y):p.addListener&&p.removeListener&&p.removeListener(y),(m=Pc(p))?(Sc(m,c),m.h==0&&(m.src=null,p[Ac]=null)):bt(c)}}}function ah(c){return c in xc?xc[c]:xc[c]="on"+c}function mw(c,p){if(c.da)c=!0;else{p=new Ee(p,this);const m=c.listener,y=c.ha||c.src;c.fa&&Rc(c),c=m.call(y,p)}return c}function Pc(c){return c=c[Ac],c instanceof hr?c:null}var $c="__closure_events_fn_"+(Math.random()*1e9>>>0);function ch(c){return typeof c=="function"?c:(c[$c]||(c[$c]=function(p){return c.handleEvent(p)}),c[$c])}function Fe(){S.call(this),this.i=new hr(this),this.M=this,this.G=null}g(Fe,S),Fe.prototype[ft]=!0,Fe.prototype.removeEventListener=function(c,p,m,y){rh(this,c,p,m,y)};function Ge(c,p){var m,y=c.G;if(y)for(m=[];y;y=y.G)m.push(y);if(c=c.M,y=p.type||p,typeof p=="string")p=new I(p,c);else if(p instanceof I)p.target=p.target||c;else{var x=p;p=new I(y,c),sh(p,x)}x=!0;let R,V;if(m)for(V=m.length-1;V>=0;V--)R=p.g=m[V],x=pr(R,y,!0,p)&&x;if(R=p.g=c,x=pr(R,y,!0,p)&&x,x=pr(R,y,!1,p)&&x,m)for(V=0;V<m.length;V++)R=p.g=m[V],x=pr(R,y,!1,p)&&x}Fe.prototype.N=function(){if(Fe.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const m=c.g[p];for(let y=0;y<m.length;y++)bt(m[y]);delete c.g[p],c.h--}}this.G=null},Fe.prototype.J=function(c,p,m,y){return this.i.add(String(c),p,!1,m,y)},Fe.prototype.K=function(c,p,m,y){return this.i.add(String(c),p,!0,m,y)};function pr(c,p,m,y){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let x=!0;for(let R=0;R<p.length;++R){const V=p[R];if(V&&!V.da&&V.capture==m){const te=V.listener,Ae=V.ha||V.src;V.fa&&Sc(c.i,V),x=te.call(Ae,y)!==!1&&x}}return x&&!y.defaultPrevented}function gw(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=h(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:r.setTimeout(c,p||0)}function lh(c){c.g=gw(()=>{c.g=null,c.i&&(c.i=!1,lh(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class yw extends S{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:lh(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Os(c){S.call(this),this.h=c,this.g={}}g(Os,S);var dh=[];function uh(c){ur(c.g,function(p,m){this.g.hasOwnProperty(m)&&Rc(p)},c),c.g={}}Os.prototype.N=function(){Os.Z.N.call(this),uh(this)},Os.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lc=r.JSON.stringify,vw=r.JSON.parse,ww=class{stringify(c){return r.JSON.stringify(c,void 0)}parse(c){return r.JSON.parse(c,void 0)}};function hh(){}function ph(){}var Vs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Dc(){I.call(this,"d")}g(Dc,I);function Nc(){I.call(this,"c")}g(Nc,I);var ii={},fh=null;function fr(){return fh=fh||new Fe}ii.Ia="serverreachability";function mh(c){I.call(this,ii.Ia,c)}g(mh,I);function Us(c){const p=fr();Ge(p,new mh(p))}ii.STAT_EVENT="statevent";function gh(c,p){I.call(this,ii.STAT_EVENT,c),this.stat=p}g(gh,I);function Ke(c){const p=fr();Ge(p,new gh(p,c))}ii.Ja="timingevent";function yh(c,p){I.call(this,ii.Ja,c),this.size=p}g(yh,I);function Fs(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){c()},p)}function js(){this.g=!0}js.prototype.ua=function(){this.g=!1};function bw(c,p,m,y,x,R){c.info(function(){if(c.g)if(R){var V="",te=R.split("&");for(let le=0;le<te.length;le++){var Ae=te[le].split("=");if(Ae.length>1){const Pe=Ae[0];Ae=Ae[1];const kt=Pe.split("_");V=kt.length>=2&&kt[1]=="type"?V+(Pe+"="+Ae+"&"):V+(Pe+"=redacted&")}}}else V=null;else V=R;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+p+`
`+m+`
`+V})}function _w(c,p,m,y,x,R,V){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+p+`
`+m+`
`+R+" "+V})}function Di(c,p,m,y){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Tw(c,m)+(y?" "+y:"")})}function kw(c,p){c.info(function(){return"TIMEOUT: "+p})}js.prototype.info=function(){};function Tw(c,p){if(!c.g)return p;if(!p)return null;try{const R=JSON.parse(p);if(R){for(c=0;c<R.length;c++)if(Array.isArray(R[c])){var m=R[c];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var x=y[0];if(x!="noop"&&x!="stop"&&x!="close")for(let V=1;V<y.length;V++)y[V]=""}}}}return Lc(R)}catch{return p}}var mr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},vh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wh;function Mc(){}g(Mc,hh),Mc.prototype.g=function(){return new XMLHttpRequest},wh=new Mc;function Bs(c){return encodeURIComponent(String(c))}function Cw(c){var p=1;c=c.split(":");const m=[];for(;p>0&&c.length;)m.push(c.shift()),p--;return c.length&&m.push(c.join(":")),m}function un(c,p,m,y){this.j=c,this.i=p,this.l=m,this.S=y||1,this.V=new Os(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bh}function bh(){this.i=null,this.g="",this.h=!1}var _h={},Oc={};function Vc(c,p,m){c.M=1,c.A=yr(_t(p)),c.u=m,c.R=!0,kh(c,null)}function kh(c,p){c.F=Date.now(),gr(c),c.B=_t(c.A);var m=c.B,y=c.S;Array.isArray(y)||(y=[String(y)]),Nh(m.i,"t",y),c.C=0,m=c.j.L,c.h=new bh,c.g=Zh(c.j,m?p:null,!c.u),c.P>0&&(c.O=new yw(h(c.Y,c,c.g),c.P)),p=c.V,m=c.g,y=c.ba;var x="readystatechange";Array.isArray(x)||(x&&(dh[0]=x.toString()),x=dh);for(let R=0;R<x.length;R++){const V=oh(m,x[R],y||p.handleEvent,!1,p.h||p);if(!V)break;p.g[V.key]=V}p=c.J?nh(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),Us(),bw(c.i,c.v,c.B,c.l,c.S,c.u)}un.prototype.ba=function(c){c=c.target;const p=this.O;p&&fn(c)==3?p.j():this.Y(c)},un.prototype.Y=function(c){try{if(c==this.g)e:{const te=fn(this.g),Ae=this.g.ya(),le=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Bh(this.g)))){this.K||te!=4||Ae==7||(Ae==8||le<=0?Us(3):Us(2)),Uc(this);var p=this.g.ca();this.X=p;var m=Iw(this);if(this.o=p==200,_w(this.i,this.v,this.B,this.l,this.S,te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var y,x=this.g;if((y=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var R=y;break t}}R=null}if(c=R)Di(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Fc(this,c);else{this.o=!1,this.m=3,Ke(12),si(this),Hs(this);break e}}if(this.R){c=!0;let Pe;for(;!this.K&&this.C<m.length;)if(Pe=Sw(this,m),Pe==Oc){te==4&&(this.m=4,Ke(14),c=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==_h){this.m=4,Ke(15),Di(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Di(this.i,this.l,Pe,null),Fc(this,Pe);if(Th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||m.length!=0||this.h.h||(this.m=1,Ke(16),c=!1),this.o=this.o&&c,!c)Di(this.i,this.l,m,"[Invalid Chunked Response]"),si(this),Hs(this);else if(m.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Kc(V),V.P=!0,Ke(11))}}else Di(this.i,this.l,m,null),Fc(this,m);te==4&&si(this),this.o&&!this.K&&(te==4?Qh(this.j,this):(this.o=!1,gr(this)))}else Fw(this.g),p==400&&m.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),si(this),Hs(this)}}}catch{}finally{}};function Iw(c){if(!Th(c))return c.g.la();const p=Bh(c.g);if(p==="")return"";let m="";const y=p.length,x=fn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return si(c),Hs(c),"";c.h.i=new r.TextDecoder}for(let R=0;R<y;R++)c.h.h=!0,m+=c.h.i.decode(p[R],{stream:!(x&&R==y-1)});return p.length=0,c.h.g+=m,c.C=0,c.h.g}function Th(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Sw(c,p){var m=c.C,y=p.indexOf(`
`,m);return y==-1?Oc:(m=Number(p.substring(m,y)),isNaN(m)?_h:(y+=1,y+m>p.length?Oc:(p=p.slice(y,y+m),c.C=y+m,p)))}un.prototype.cancel=function(){this.K=!0,si(this)};function gr(c){c.T=Date.now()+c.H,Ch(c,c.H)}function Ch(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Fs(h(c.aa,c),p)}function Uc(c){c.D&&(r.clearTimeout(c.D),c.D=null)}un.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(kw(this.i,this.B),this.M!=2&&(Us(),Ke(17)),si(this),this.m=2,Hs(this)):Ch(this,this.T-c)};function Hs(c){c.j.I==0||c.K||Qh(c.j,c)}function si(c){Uc(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,uh(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function Fc(c,p){try{var m=c.j;if(m.I!=0&&(m.g==c||jc(m.h,c))){if(!c.L&&jc(m.h,c)&&m.I==3){try{var y=m.Ba.g.parse(p)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)kr(m),br(m);else break e;Gc(m),Ke(18)}}else m.xa=x[1],0<m.xa-m.K&&x[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Fs(h(m.Va,m),6e3));Eh(m.h)<=1&&m.ta&&(m.ta=void 0)}else ri(m,11)}else if((c.L||m.g==c)&&kr(m),!T(p))for(x=m.Ba.g.parse(p),p=0;p<x.length;p++){let le=x[p];const Pe=le[0];if(!(Pe<=m.K))if(m.K=Pe,le=le[1],m.I==2)if(le[0]=="c"){m.M=le[1],m.ba=le[2];const kt=le[3];kt!=null&&(m.ka=kt,m.j.info("VER="+m.ka));const ai=le[4];ai!=null&&(m.za=ai,m.j.info("SVER="+m.za));const mn=le[5];mn!=null&&typeof mn=="number"&&mn>0&&(y=1.5*mn,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const gn=c.g;if(gn){const Cr=gn.g?gn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cr){var R=y.h;R.g||Cr.indexOf("spdy")==-1&&Cr.indexOf("quic")==-1&&Cr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Bc(R,R.h),R.h=null))}if(y.G){const Qc=gn.g?gn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qc&&(y.wa=Qc,he(y.J,y.G,Qc))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var V=c;if(y.na=Xh(y,y.L?y.ba:null,y.W),V.L){Ah(y.h,V);var te=V,Ae=y.O;Ae&&(te.H=Ae),te.D&&(Uc(te),gr(te)),y.g=V}else Gh(y);m.i.length>0&&_r(m)}else le[0]!="stop"&&le[0]!="close"||ri(m,7);else m.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?ri(m,7):Wc(m):le[0]!="noop"&&m.l&&m.l.qa(le),m.A=0)}}Us(4)}catch{}}var Ew=class{constructor(c,p){this.g=c,this.map=p}};function Ih(c){this.l=c||10,r.PerformanceNavigationTiming?(c=r.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Sh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Eh(c){return c.h?1:c.g?c.g.size:0}function jc(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Bc(c,p){c.g?c.g.add(p):c.h=p}function Ah(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Ih.prototype.cancel=function(){if(this.i=xh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function xh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const m of c.g.values())p=p.concat(m.G);return p}return k(c.i)}var Rh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Aw(c,p){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const y=c[m].indexOf("=");let x,R=null;y>=0?(x=c[m].substring(0,y),R=c[m].substring(y+1)):x=c[m],p(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function hn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof hn?(this.l=c.l,zs(this,c.j),this.o=c.o,this.g=c.g,qs(this,c.u),this.h=c.h,Hc(this,Mh(c.i)),this.m=c.m):c&&(p=String(c).match(Rh))?(this.l=!1,zs(this,p[1]||"",!0),this.o=Ws(p[2]||""),this.g=Ws(p[3]||"",!0),qs(this,p[4]),this.h=Ws(p[5]||"",!0),Hc(this,p[6]||"",!0),this.m=Ws(p[7]||"")):(this.l=!1,this.i=new Ks(null,this.l))}hn.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(Gs(p,Ph,!0),":");var m=this.g;return(m||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Gs(p,Ph,!0),"@"),c.push(Bs(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Gs(m,m.charAt(0)=="/"?Pw:Rw,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Gs(m,Lw)),c.join("")},hn.prototype.resolve=function(c){const p=_t(this);let m=!!c.j;m?zs(p,c.j):m=!!c.o,m?p.o=c.o:m=!!c.g,m?p.g=c.g:m=c.u!=null;var y=c.h;if(m)qs(p,c.u);else if(m=!!c.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var x=p.h.lastIndexOf("/");x!=-1&&(y=p.h.slice(0,x+1)+y)}if(x=y,x==".."||x==".")y="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){y=x.lastIndexOf("/",0)==0,x=x.split("/");const R=[];for(let V=0;V<x.length;){const te=x[V++];te=="."?y&&V==x.length&&R.push(""):te==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),y&&V==x.length&&R.push("")):(R.push(te),y=!0)}y=R.join("/")}else y=x}return m?p.h=y:m=c.i.toString()!=="",m?Hc(p,Mh(c.i)):m=!!c.m,m&&(p.m=c.m),p};function _t(c){return new hn(c)}function zs(c,p,m){c.j=m?Ws(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function qs(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function Hc(c,p,m){p instanceof Ks?(c.i=p,Dw(c.i,c.l)):(m||(p=Gs(p,$w)),c.i=new Ks(p,c.l))}function he(c,p,m){c.i.set(p,m)}function yr(c){return he(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ws(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Gs(c,p,m){return typeof c=="string"?(c=encodeURI(c).replace(p,xw),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function xw(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ph=/[#\/\?@]/g,Rw=/[#\?:]/g,Pw=/[#\?]/g,$w=/[#\?@]/g,Lw=/#/g;function Ks(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function oi(c){c.g||(c.g=new Map,c.h=0,c.i&&Aw(c.i,function(p,m){c.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}t=Ks.prototype,t.add=function(c,p){oi(this),this.i=null,c=Ni(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(p),this.h+=1,this};function $h(c,p){oi(c),p=Ni(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Lh(c,p){return oi(c),p=Ni(c,p),c.g.has(p)}t.forEach=function(c,p){oi(this),this.g.forEach(function(m,y){m.forEach(function(x){c.call(p,x,y,this)},this)},this)};function Dh(c,p){oi(c);let m=[];if(typeof p=="string")Lh(c,p)&&(m=m.concat(c.g.get(Ni(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)m=m.concat(c[p]);return m}t.set=function(c,p){return oi(this),this.i=null,c=Ni(this,c),Lh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=Dh(this,c),c.length>0?String(c[0]):p):p};function Nh(c,p,m){$h(c,p),m.length>0&&(c.i=null,c.g.set(Ni(c,p),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let y=0;y<p.length;y++){var m=p[y];const x=Bs(m);m=Dh(this,m);for(let R=0;R<m.length;R++){let V=x;m[R]!==""&&(V+="="+Bs(m[R])),c.push(V)}}return this.i=c.join("&")};function Mh(c){const p=new Ks;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function Ni(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function Dw(c,p){p&&!c.j&&(oi(c),c.i=null,c.g.forEach(function(m,y){const x=y.toLowerCase();y!=x&&($h(this,y),Nh(this,x,m))},c)),c.j=p}function Nw(c,p){const m=new js;if(r.Image){const y=new Image;y.onload=f(pn,m,"TestLoadImage: loaded",!0,p,y),y.onerror=f(pn,m,"TestLoadImage: error",!1,p,y),y.onabort=f(pn,m,"TestLoadImage: abort",!1,p,y),y.ontimeout=f(pn,m,"TestLoadImage: timeout",!1,p,y),r.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else p(!1)}function Mw(c,p){const m=new js,y=new AbortController,x=setTimeout(()=>{y.abort(),pn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:y.signal}).then(R=>{clearTimeout(x),R.ok?pn(m,"TestPingServer: ok",!0,p):pn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(x),pn(m,"TestPingServer: error",!1,p)})}function pn(c,p,m,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(m)}catch{}}function Ow(){this.g=new ww}function zc(c){this.i=c.Sb||null,this.h=c.ab||!1}g(zc,hh),zc.prototype.g=function(){return new vr(this.i,this.h)};function vr(c,p){Fe.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(vr,Fe),t=vr.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,Js(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||r).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Js(this)),this.g&&(this.readyState=3,Js(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof r.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Oh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Oh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Qs(this):Js(this),this.readyState==3&&Oh(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Qs(this))},t.Na=function(c){this.g&&(this.response=c,Qs(this))},t.ga=function(){this.g&&Qs(this)};function Qs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Js(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=p.next();return c.join(`\r
`)};function Js(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(vr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Vh(c){let p="";return ur(c,function(m,y){p+=y,p+=":",p+=m,p+=`\r
`}),p}function qc(c,p,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Vh(m),typeof c=="string"?m!=null&&Bs(m):he(c,p,m))}function ve(c){Fe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ve,Fe);var Vw=/^https?$/i,Uw=["POST","PUT"];t=ve.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wh.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(R){Uh(this,R);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)m.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const R of y.keys())m.set(R,y.get(R));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(R=>R.toLowerCase()=="content-type"),x=r.FormData&&c instanceof r.FormData,!(Array.prototype.indexOf.call(Uw,p,void 0)>=0)||y||x||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of m)this.g.setRequestHeader(R,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(R){Uh(this,R)}};function Uh(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,Fh(c),wr(c)}function Fh(c){c.A||(c.A=!0,Ge(c,"complete"),Ge(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ge(this,"complete"),Ge(this,"abort"),wr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wr(this,!0)),ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?jh(this):this.Xa())},t.Xa=function(){jh(this)};function jh(c){if(c.h&&typeof o<"u"){if(c.v&&fn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ge(c,"readystatechange"),fn(c)==4){c.h=!1;try{const R=c.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var m;if(!(m=p)){var y;if(y=R===0){let V=String(c.D).match(Rh)[1]||null;!V&&r.self&&r.self.location&&(V=r.self.location.protocol.slice(0,-1)),y=!Vw.test(V?V.toLowerCase():"")}m=y}if(m)Ge(c,"complete"),Ge(c,"success");else{c.o=6;try{var x=fn(c)>2?c.g.statusText:""}catch{x=""}c.l=x+" ["+c.ca()+"]",Fh(c)}}finally{wr(c)}}}}function wr(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,p||Ge(c,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function fn(c){return c.g?c.g.readyState:0}t.ca=function(){try{return fn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),vw(p)}};function Bh(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Fw(c){const p={};c=(c.g&&fn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(T(c[y]))continue;var m=Cw(c[y]);const x=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const R=p[x]||[];p[x]=R,R.push(m)}hw(p,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ys(c,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||p}function Hh(c){this.za=0,this.i=[],this.j=new js,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ys("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ys("baseRetryDelayMs",5e3,c),this.Za=Ys("retryDelaySeedMs",1e4,c),this.Ta=Ys("forwardChannelMaxRetries",2,c),this.va=Ys("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Ih(c&&c.concurrentRequestLimit),this.Ba=new Ow,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Hh.prototype,t.ka=8,t.I=1,t.connect=function(c,p,m,y){Ke(0),this.W=c,this.H=p||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=Xh(this,null,this.W),_r(this)};function Wc(c){if(zh(c),c.I==3){var p=c.V++,m=_t(c.J);if(he(m,"SID",c.M),he(m,"RID",p),he(m,"TYPE","terminate"),Xs(c,m),p=new un(c,c.j,p),p.M=2,p.A=yr(_t(m)),m=!1,r.navigator&&r.navigator.sendBeacon)try{m=r.navigator.sendBeacon(p.A.toString(),"")}catch{}!m&&r.Image&&(new Image().src=p.A,m=!0),m||(p.g=Zh(p.j,null),p.g.ea(p.A)),p.F=Date.now(),gr(p)}Yh(c)}function br(c){c.g&&(Kc(c),c.g.cancel(),c.g=null)}function zh(c){br(c),c.v&&(r.clearTimeout(c.v),c.v=null),kr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&r.clearTimeout(c.m),c.m=null)}function _r(c){if(!Sh(c.h)&&!c.m){c.m=!0;var p=c.Ea;B||v(),q||(B(),q=!0),C.add(p,c),c.D=0}}function jw(c,p){return Eh(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Fs(h(c.Ea,c,p),Jh(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const x=new un(this,this.j,c);let R=this.o;if(this.U&&(R?(R=nh(R),sh(R,this.U)):R=this.U),this.u!==null||this.R||(x.J=R,R=null),this.S)e:{for(var p=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(p+=y,p>4096){p=m;break e}if(p===4096||m===this.i.length-1){p=m+1;break e}}p=1e3}else p=1e3;p=Wh(this,x,p),m=_t(this.J),he(m,"RID",c),he(m,"CVER",22),this.G&&he(m,"X-HTTP-Session-Id",this.G),Xs(this,m),R&&(this.R?p="headers="+Bs(Vh(R))+"&"+p:this.u&&qc(m,this.u,R)),Bc(this.h,x),this.Ra&&he(m,"TYPE","init"),this.S?(he(m,"$req",p),he(m,"SID","null"),x.U=!0,Vc(x,m,null)):Vc(x,m,p),this.I=2}}else this.I==3&&(c?qh(this,c):this.i.length==0||Sh(this.h)||qh(this))};function qh(c,p){var m;p?m=p.l:m=c.V++;const y=_t(c.J);he(y,"SID",c.M),he(y,"RID",m),he(y,"AID",c.K),Xs(c,y),c.u&&c.o&&qc(y,c.u,c.o),m=new un(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),p&&(c.i=p.G.concat(c.i)),p=Wh(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Bc(c.h,m),Vc(m,y,p)}function Xs(c,p){c.H&&ur(c.H,function(m,y){he(p,y,m)}),c.l&&ur({},function(m,y){he(p,y,m)})}function Wh(c,p,m){m=Math.min(c.i.length,m);const y=c.l?h(c.l.Ka,c.l,c):null;e:{var x=c.i;let te=-1;for(;;){const Ae=["count="+m];te==-1?m>0?(te=x[0].g,Ae.push("ofs="+te)):te=0:Ae.push("ofs="+te);let le=!0;for(let Pe=0;Pe<m;Pe++){var R=x[Pe].g;const kt=x[Pe].map;if(R-=te,R<0)te=Math.max(0,x[Pe].g-100),le=!1;else try{R="req"+R+"_"||"";try{var V=kt instanceof Map?kt:Object.entries(kt);for(const[ai,mn]of V){let gn=mn;a(mn)&&(gn=Lc(mn)),Ae.push(R+ai+"="+encodeURIComponent(gn))}}catch(ai){throw Ae.push(R+"type="+encodeURIComponent("_badmap")),ai}}catch{y&&y(kt)}}if(le){V=Ae.join("&");break e}}V=void 0}return c=c.i.splice(0,m),p.G=c,V}function Gh(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;B||v(),q||(B(),q=!0),C.add(p,c),c.A=0}}function Gc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Fs(h(c.Da,c),Jh(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,Kh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Fs(h(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),br(this),Kh(this))};function Kc(c){c.B!=null&&(r.clearTimeout(c.B),c.B=null)}function Kh(c){c.g=new un(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=_t(c.na);he(p,"RID","rpc"),he(p,"SID",c.M),he(p,"AID",c.K),he(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&he(p,"TO",c.ia),he(p,"TYPE","xmlhttp"),Xs(c,p),c.u&&c.o&&qc(p,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=yr(_t(p)),m.u=null,m.R=!0,kh(m,c)}t.Va=function(){this.C!=null&&(this.C=null,br(this),Gc(this),Ke(19))};function kr(c){c.C!=null&&(r.clearTimeout(c.C),c.C=null)}function Qh(c,p){var m=null;if(c.g==p){kr(c),Kc(c),c.g=null;var y=2}else if(jc(c.h,p))m=p.G,Ah(c.h,p),y=1;else return;if(c.I!=0){if(p.o)if(y==1){m=p.u?p.u.length:0,p=Date.now()-p.F;var x=c.D;y=fr(),Ge(y,new yh(y,m)),_r(c)}else Gh(c);else if(x=p.m,x==3||x==0&&p.X>0||!(y==1&&jw(c,p)||y==2&&Gc(c)))switch(m&&m.length>0&&(p=c.h,p.i=p.i.concat(m)),x){case 1:ri(c,5);break;case 4:ri(c,10);break;case 3:ri(c,6);break;default:ri(c,2)}}}function Jh(c,p){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*p}function ri(c,p){if(c.j.info("Error code "+p),p==2){var m=h(c.bb,c),y=c.Ua;const x=!y;y=new hn(y||"//www.google.com/images/cleardot.gif"),r.location&&r.location.protocol=="http"||zs(y,"https"),yr(y),x?Nw(y.toString(),m):Mw(y.toString(),m)}else Ke(2);c.I=0,c.l&&c.l.pa(p),Yh(c),zh(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function Yh(c){if(c.I=0,c.ja=[],c.l){const p=xh(c.h);(p.length!=0||c.i.length!=0)&&(E(c.ja,p),E(c.ja,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.oa()}}function Xh(c,p,m){var y=m instanceof hn?_t(m):new hn(m);if(y.g!="")p&&(y.g=p+"."+y.g),qs(y,y.u);else{var x=r.location;y=x.protocol,p=p?p+"."+x.hostname:x.hostname,x=+x.port;const R=new hn(null);y&&zs(R,y),p&&(R.g=p),x&&qs(R,x),m&&(R.h=m),y=R}return m=c.G,p=c.wa,m&&p&&he(y,m,p),he(y,"VER",c.ka),Xs(c,y),y}function Zh(c,p,m){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new ve(new zc({ab:m})):new ve(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ep(){}t=ep.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Tr(){}Tr.prototype.g=function(c,p){return new at(c,p)};function at(c,p){Fe.call(this),this.g=new Hh(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!T(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!T(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new Mi(this)}g(at,Fe),at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){Wc(this.g)},at.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=Lc(c),c=m);p.i.push(new Ew(p.Ya++,c)),p.I==3&&_r(p)},at.prototype.N=function(){this.g.l=null,delete this.j,Wc(this.g),delete this.g,at.Z.N.call(this)};function tp(c){Dc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const m in p){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}g(tp,Dc);function np(){Nc.call(this),this.status=1}g(np,Nc);function Mi(c){this.g=c}g(Mi,ep),Mi.prototype.ra=function(){Ge(this.g,"a")},Mi.prototype.qa=function(c){Ge(this.g,new tp(c))},Mi.prototype.pa=function(c){Ge(this.g,new np)},Mi.prototype.oa=function(){Ge(this.g,"b")},Tr.prototype.createWebChannel=Tr.prototype.g,at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,kg=function(){return new Tr},_g=function(){return fr()},bg=ii,$l={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,Wr=mr,vh.COMPLETE="complete",wg=vh,ph.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",Fe.prototype.listen=Fe.prototype.J,io=ph,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,vg=ve}).apply(typeof Sr<"u"?Sr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let As="12.10.0";function W0(t){As=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ci=new yd("@firebase/firestore");function Vi(){return Ci.logLevel}function H(t,...e){if(Ci.logLevel<=ne.DEBUG){const n=e.map(Md);Ci.debug(`Firestore (${As}): ${t}`,...n)}}function rn(t,...e){if(Ci.logLevel<=ne.ERROR){const n=e.map(Md);Ci.error(`Firestore (${As}): ${t}`,...n)}}function Ii(t,...e){if(Ci.logLevel<=ne.WARN){const n=e.map(Md);Ci.warn(`Firestore (${As}): ${t}`,...n)}}function Md(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Tg(t,i,n)}function Tg(t,e,n){let i=`FIRESTORE (${As}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw rn(i),new Error(i)}function ye(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||Tg(e,s,i)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class G0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Be.UNAUTHENTICATED)))}shutdown(){}}class K0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Q0{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let o=new Qi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Qi,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const l=o;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Qi)}}),0),r()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ye(typeof i.accessToken=="string",31837,{l:i}),new Cg(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new Be(e)}}class J0{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Y0{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new J0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Be.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Op{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class X0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const i=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const r=o.token!==this.m;return this.m=o.token,H("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>i(o)))};const s=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Op(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Op(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Z0(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%62))}return i}}function ie(t,e){return t<e?-1:t>e?1:0}function Ll(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.charAt(i),o=e.charAt(i);if(s!==o)return rl(s)===rl(o)?ie(s,o):rl(s)?1:-1}return ie(t.length,e.length)}const eC=55296,tC=57343;function rl(t){const e=t.charCodeAt(0);return e>=eC&&e<=tC}function ds(t,e,n){return t.length===e.length&&t.every(((i,s)=>n(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="__name__";class It{constructor(e,n,i){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&X(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return It.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof It?e.forEach((i=>{n.push(i)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=It.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return ie(e.length,n.length)}static compareSegments(e,n){const i=It.isNumericId(e),s=It.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?It.extractNumericId(e).compare(It.extractNumericId(n)):Ll(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dn.fromString(e.substring(4,e.length-2))}}class ge extends It{construct(e,n,i){return new ge(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((s=>s.length>0)))}return new ge(n)}static emptyPath(){return new ge([])}}const nC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends It{construct(e,n,i){return new Ze(e,n,i)}static isValidIdentifier(e){return nC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vp}static keyField(){return new Ze([Vp])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let r=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(r=!r,s++):a!=="."||r?(i+=a,s++):(o(),s++)}if(o(),r)throw new z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function iC(t,e,n){if(!n)throw new z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sC(t,e,n,i){if(e===!0&&i===!0)throw new z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Up(t){if(K.isDocumentKey(t))throw new z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oC(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function rC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function Gr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rC(t);throw new z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ie(t,e){const n={typeString:t};return e&&(n.value=e),n}function Qo(t,e){if(!oC(t))throw new z(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const r=t[i];if(s&&typeof r!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&r!==o.value){n=`Expected '${i}' field to equal '${o.value}'`;break}}if(n)throw new z(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=-62135596800,jp=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*jp);return new Ce(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fp)throw new z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jp}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Qo(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Ie("string",Ce._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const So=-1;function aC(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new Ce(n+1,0):new Ce(n,i));return new jn(s,K.empty(),e)}function cC(t){return new jn(t.readTime,t.key,So)}class jn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new jn(Y.min(),K.empty(),So)}static max(){return new jn(Y.max(),K.empty(),So)}}function lC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==dC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,i)=>{n(e)}))}static reject(e){return new L(((n,i)=>{i(e)}))}static waitFor(e){return new L(((n,i)=>{let s=0,o=0,r=!1;e.forEach((a=>{++s,a.next((()=>{++o,r&&o===s&&n()}),(l=>i(l)))})),r=!0,o===s&&n()}))}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next((s=>s?L.resolve(s):i()));return n}static forEach(e,n){const i=[];return e.forEach(((s,o)=>{i.push(n.call(this,s,o))})),this.waitFor(i)}static mapArray(e,n){return new L(((i,s)=>{const o=e.length,r=new Array(o);let a=0;for(let l=0;l<o;l++){const h=l;n(e[h]).next((f=>{r[h]=f,++a,a===o&&i(r)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((i,s)=>{const o=()=>{e()===!0?n().next((()=>{o()}),s):i()};o()}))}}function hC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ic{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ic.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=-1;function sc(t){return t==null}function Dl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="";function fC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Bp(e)),e=mC(t.get(n),e);return Bp(e)}function mC(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const o=t.charAt(s);switch(o){case"\0":n+="";break;case Sg:n+="";break;default:n+=o}}return n}function Bp(t){return t+Sg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,i)=>(e(n,i),!1)))}toString(){const e=[];return this.inorderTraversal(((n,i)=>(e.push(`${n}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Er(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Er(this.root,e,this.comparator,!1)}getReverseIterator(){return new Er(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Er(this.root,e,this.comparator,!0)}}class Er{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,i,s,o){this.key=e,this.value=n,this.color=i??Ve.RED,this.left=s??Ve.EMPTY,this.right=o??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,o){return new Ve(e??this.key,n??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,i),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,i,s,o){return this}insert(e,n,i){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,i)=>(e(n),!1)))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zp(this.data.getIterator())}getIteratorFrom(e){return new zp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((i=>{n=n.add(i)})),n}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Re(this.comparator);return n.data=e,n}}class zp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Rn([])}unionWith(e){let n=new Re(Ze.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,((n,i)=>n.isEqual(i)))}}/**
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
 */class Eg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Eg("Invalid base64 string: "+o):o}})(e);return new Ue(n)}static fromUint8Array(e){const n=(function(s){let o="";for(let r=0;r<s.length;++r)o+=String.fromCharCode(s[r]);return o})(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const yC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=yC.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Hn(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="server_timestamp",xg="__type__",Rg="__previous_value__",Pg="__local_write_time__";function Od(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[xg])==null?void 0:i.stringValue)===Ag}function oc(t){const e=t.mapValue.fields[Rg];return Od(e)?oc(e):e}function Eo(t){const e=Bn(t.mapValue.fields[Pg].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,n,i,s,o,r,a,l,h,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=g}}const ka="(default)";class Ao{constructor(e,n){this.projectId=e,this.database=n||ka}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database===ka}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}function wC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="__type__",_C="__max__",Ar={mapValue:{}},kC="__vector__",Nl="value";function zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Od(t)?4:CC(t)?9007199254740991:TC(t)?10:11:X(28295,{value:t})}function jt(t,e){if(t===e)return!0;const n=zn(t);if(n!==zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const r=Bn(s.timestampValue),a=Bn(o.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,o){return Hn(s.bytesValue).isEqual(Hn(o.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,o){return _e(s.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(o.geoPointValue.longitude)})(t,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return _e(s.integerValue)===_e(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const r=_e(s.doubleValue),a=_e(o.doubleValue);return r===a?Dl(r)===Dl(a):isNaN(r)&&isNaN(a)}return!1})(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:case 11:return(function(s,o){const r=s.mapValue.fields||{},a=o.mapValue.fields||{};if(Hp(r)!==Hp(a))return!1;for(const l in r)if(r.hasOwnProperty(l)&&(a[l]===void 0||!jt(r[l],a[l])))return!1;return!0})(t,e);default:return X(52216,{left:t})}}function xo(t,e){return(t.values||[]).find((n=>jt(n,e)))!==void 0}function us(t,e){if(t===e)return 0;const n=zn(t),i=zn(e);if(n!==i)return ie(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return(function(o,r){const a=_e(o.integerValue||o.doubleValue),l=_e(r.integerValue||r.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(t,e);case 3:return qp(t.timestampValue,e.timestampValue);case 4:return qp(Eo(t),Eo(e));case 5:return Ll(t.stringValue,e.stringValue);case 6:return(function(o,r){const a=Hn(o),l=Hn(r);return a.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(o,r){const a=o.split("/"),l=r.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=ie(a[h],l[h]);if(f!==0)return f}return ie(a.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(o,r){const a=ie(_e(o.latitude),_e(r.latitude));return a!==0?a:ie(_e(o.longitude),_e(r.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Wp(t.arrayValue,e.arrayValue);case 10:return(function(o,r){var w,k,E,$;const a=o.fields||{},l=r.fields||{},h=(w=a[Nl])==null?void 0:w.arrayValue,f=(k=l[Nl])==null?void 0:k.arrayValue,g=ie(((E=h==null?void 0:h.values)==null?void 0:E.length)||0,(($=f==null?void 0:f.values)==null?void 0:$.length)||0);return g!==0?g:Wp(h,f)})(t.mapValue,e.mapValue);case 11:return(function(o,r){if(o===Ar.mapValue&&r===Ar.mapValue)return 0;if(o===Ar.mapValue)return 1;if(r===Ar.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),h=r.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const w=Ll(l[g],f[g]);if(w!==0)return w;const k=us(a[l[g]],h[f[g]]);if(k!==0)return k}return ie(l.length,f.length)})(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function qp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Bn(t),i=Bn(e),s=ie(n.seconds,i.seconds);return s!==0?s:ie(n.nanos,i.nanos)}function Wp(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const o=us(n[s],i[s]);if(o)return o}return ie(n.length,i.length)}function hs(t){return Ml(t)}function Ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const i=Bn(n);return`time(${i.seconds},${i.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Hn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return K.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let i="[",s=!0;for(const o of n.values||[])s?s=!1:i+=",",i+=Ml(o);return i+"]"})(t.arrayValue):"mapValue"in t?(function(n){const i=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const r of i)o?o=!1:s+=",",s+=`${r}:${Ml(n.fields[r])}`;return s+"}"})(t.mapValue):X(61005,{value:t})}function Kr(t){switch(zn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(t);return e?16+Kr(e):16;case 5:return 2*t.stringValue.length;case 6:return Hn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,o)=>s+Kr(o)),0)})(t.arrayValue);case 10:case 11:return(function(i){let s=0;return Jo(i.fields,((o,r)=>{s+=o.length+Kr(r)})),s})(t.mapValue);default:throw X(13486,{value:t})}}function Ol(t){return!!t&&"integerValue"in t}function Vd(t){return!!t&&"arrayValue"in t}function Gp(t){return!!t&&"nullValue"in t}function Kp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function al(t){return!!t&&"mapValue"in t}function TC(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bC])==null?void 0:i.stringValue)===kC}function ho(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Jo(t.mapValue.fields,((n,i)=>e.mapValue.fields[n]=ho(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return{...t}}function CC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===_C}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!al(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ho(n)}setAll(e){let n=Ze.emptyPath(),i={},s=[];e.forEach(((r,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}r?i[a.lastSegment()]=ho(r):s.push(a.lastSegment())}));const o=this.getFieldsMap(n);this.applyChanges(o,i,s)}delete(e){const n=this.field(e.popLast());al(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];al(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Jo(n,((s,o)=>e[s]=o));for(const s of i)delete e[s]}clone(){return new xt(ho(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,i,s,o,r,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=o,this.data=r,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,Y.min(),Y.min(),Y.min(),xt.empty(),0)}static newFoundDocument(e,n,i,s){return new ze(e,1,n,Y.min(),i,s,0)}static newNoDocument(e,n){return new ze(e,2,n,Y.min(),Y.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,Y.min(),Y.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ta{constructor(e,n){this.position=e,this.inclusive=n}}function Qp(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const o=e[s],r=t.position[s];if(o.field.isKeyField()?i=K.comparator(K.fromName(r.referenceValue),n.key):i=us(r,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Jp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function IC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $g{}class xe extends $g{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new EC(e,n,i):n==="array-contains"?new RC(e,i):n==="in"?new PC(e,i):n==="not-in"?new $C(e,i):n==="array-contains-any"?new LC(e,i):new xe(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new AC(e,i):new xC(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(us(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends $g{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Bt(e,n)}matches(e){return Lg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lg(t){return t.op==="and"}function Dg(t){return SC(t)&&Lg(t)}function SC(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function Vl(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(Dg(t))return t.filters.map((e=>Vl(e))).join(",");{const e=t.filters.map((n=>Vl(n))).join(",");return`${t.op}(${e})`}}function Ng(t,e){return t instanceof xe?(function(i,s){return s instanceof xe&&i.op===s.op&&i.field.isEqual(s.field)&&jt(i.value,s.value)})(t,e):t instanceof Bt?(function(i,s){return s instanceof Bt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((o,r,a)=>o&&Ng(r,s.filters[a])),!0):!1})(t,e):void X(19439)}function Mg(t){return t instanceof xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`})(t):t instanceof Bt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Mg).join(" ,")+"}"})(t):"Filter"}class EC extends xe{constructor(e,n,i){super(e,n,i),this.key=K.fromName(i.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class AC extends xe{constructor(e,n){super(e,"in",n),this.keys=Og("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class xC extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Og("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Og(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((i=>K.fromName(i.referenceValue)))}class RC extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vd(n)&&xo(n.arrayValue,this.value)}}class PC extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xo(this.value.arrayValue,n)}}class $C extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!xo(this.value.arrayValue,n)}}class LC extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vd(n)||!n.arrayValue.values)&&n.arrayValue.values.some((i=>xo(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n=null,i=[],s=[],o=null,r=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=r,this.endAt=a,this.Te=null}}function Yp(t,e=null,n=[],i=[],s=null,o=null,r=null){return new DC(t,e,n,i,s,o,r)}function Ud(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((i=>Vl(i))).join(","),n+="|ob:",n+=e.orderBy.map((i=>(function(o){return o.field.canonicalString()+o.dir})(i))).join(","),sc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>hs(i))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>hs(i))).join(",")),e.Te=n}return e.Te}function Fd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ng(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jp(t.startAt,e.startAt)&&Jp(t.endAt,e.endAt)}function Ul(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n=null,i=[],s=[],o=null,r="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=r,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function NC(t,e,n,i,s,o,r,a){return new rc(t,e,n,i,s,o,r,a)}function jd(t){return new rc(t)}function Xp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MC(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function OC(t){return t.collectionGroup!==null}function po(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),n.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let a=new Re(Ze.comparator);return r.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(a=a.add(h.field))}))})),a})(e).forEach((o=>{n.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Ca(o,i))})),n.has(Ze.keyField().canonicalString())||e.Ie.push(new Ca(Ze.keyField(),i))}return e.Ie}function Vt(t){const e=oe(t);return e.Ee||(e.Ee=VC(e,po(t))),e.Ee}function VC(t,e){if(t.limitType==="F")return Yp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Ca(s.field,o)}));const n=t.endAt?new Ta(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Ta(t.startAt.position,t.startAt.inclusive):null;return Yp(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Fl(t,e,n){return new rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ac(t,e){return Fd(Vt(t),Vt(e))&&t.limitType===e.limitType}function Vg(t){return`${Ud(Vt(t))}|lt:${t.limitType}`}function Ui(t){return`Query(target=${(function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map((s=>Mg(s))).join(", ")}]`),sc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map((s=>(function(r){return`${r.field.canonicalString()} (${r.dir})`})(s))).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map((s=>hs(s))).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map((s=>hs(s))).join(",")),`Target(${i})`})(Vt(t))}; limitType=${t.limitType})`}function cc(t,e){return e.isFoundDocument()&&(function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):K.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)})(t,e)&&(function(i,s){for(const o of po(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(t,e)&&(function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0})(t,e)&&(function(i,s){return!(i.startAt&&!(function(r,a,l){const h=Qp(r,a,l);return r.inclusive?h<=0:h<0})(i.startAt,po(i),s)||i.endAt&&!(function(r,a,l){const h=Qp(r,a,l);return r.inclusive?h>=0:h>0})(i.endAt,po(i),s))})(t,e)}function UC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ug(t){return(e,n)=>{let i=!1;for(const s of po(t)){const o=FC(s,e,n);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function FC(t,e,n){const i=t.field.isKeyField()?K.comparator(e.key,n.key):(function(o,r,a){const l=r.data.field(o),h=a.data.field(o);return l!==null&&h!==null?us(l,h):X(42886)})(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jo(this.inner,((n,i)=>{for(const[s,o]of i)e(s,o)}))}isEmpty(){return gC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=new ke(K.comparator);function qn(){return jC}const Fg=new ke(K.comparator);function so(...t){let e=Fg;for(const n of t)e=e.insert(n.key,n);return e}function BC(t){let e=Fg;return t.forEach(((n,i)=>e=e.insert(n,i.overlayedDocument))),e}function hi(){return fo()}function jg(){return fo()}function fo(){return new $i((t=>t.toString()),((t,e)=>t.isEqual(e)))}const HC=new Re(K.comparator);function re(...t){let e=HC;for(const n of t)e=e.add(n);return e}const zC=new Re(ie);function qC(){return zC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dl(e)?"-0":e}}function GC(t){return{integerValue:""+t}}/**
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
 */class lc{constructor(){this._=void 0}}function KC(t,e,n){return t instanceof jl?(function(s,o){const r={fields:{[xg]:{stringValue:Ag},[Pg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Od(o)&&(o=oc(o)),o&&(r.fields[Rg]=o),{mapValue:r}})(n,e):t instanceof Ia?Bg(t,e):t instanceof Sa?Hg(t,e):(function(s,o){const r=JC(s,o),a=Zp(r)+Zp(s.Ae);return Ol(r)&&Ol(s.Ae)?GC(a):WC(s.serializer,a)})(t,e)}function QC(t,e,n){return t instanceof Ia?Bg(t,e):t instanceof Sa?Hg(t,e):n}function JC(t,e){return t instanceof Bl?(function(i){return Ol(i)||(function(o){return!!o&&"doubleValue"in o})(i)})(e)?e:{integerValue:0}:null}class jl extends lc{}class Ia extends lc{constructor(e){super(),this.elements=e}}function Bg(t,e){const n=zg(e);for(const i of t.elements)n.some((s=>jt(s,i)))||n.push(i);return{arrayValue:{values:n}}}class Sa extends lc{constructor(e){super(),this.elements=e}}function Hg(t,e){let n=zg(e);for(const i of t.elements)n=n.filter((s=>!jt(s,i)));return{arrayValue:{values:n}}}class Bl extends lc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Zp(t){return _e(t.integerValue||t.doubleValue)}function zg(t){return Vd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YC(t,e){return t.field.isEqual(e.field)&&(function(i,s){return i instanceof Ia&&s instanceof Ia||i instanceof Sa&&s instanceof Sa?ds(i.elements,s.elements,jt):i instanceof Bl&&s instanceof Bl?jt(i.Ae,s.Ae):i instanceof jl&&s instanceof jl})(t.transform,e.transform)}class gi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gi}static exists(e){return new gi(void 0,e)}static updateTime(e){return new gi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bd{}function qg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ZC(t.key,gi.none()):new Hd(t.key,t.data,gi.none());{const n=t.data,i=xt.empty();let s=new Re(Ze.comparator);for(let o of e.fields)if(!s.has(o)){let r=n.field(o);r===null&&o.length>1&&(o=o.popLast(),r=n.field(o)),r===null?i.delete(o):i.set(o,r),s=s.add(o)}return new dc(t.key,i,new Rn(s.toArray()),gi.none())}}function XC(t,e,n){t instanceof Hd?(function(s,o,r){const a=s.value.clone(),l=tf(s.fieldTransforms,o,r.transformResults);a.setAll(l),o.convertToFoundDocument(r.version,a).setHasCommittedMutations()})(t,e,n):t instanceof dc?(function(s,o,r){if(!Qr(s.precondition,o))return void o.convertToUnknownDocument(r.version);const a=tf(s.fieldTransforms,o,r.transformResults),l=o.data;l.setAll(Wg(s)),l.setAll(a),o.convertToFoundDocument(r.version,l).setHasCommittedMutations()})(t,e,n):(function(s,o,r){o.convertToNoDocument(r.version).setHasCommittedMutations()})(0,e,n)}function mo(t,e,n,i){return t instanceof Hd?(function(o,r,a,l){if(!Qr(o.precondition,r))return a;const h=o.value.clone(),f=nf(o.fieldTransforms,l,r);return h.setAll(f),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),null})(t,e,n,i):t instanceof dc?(function(o,r,a,l){if(!Qr(o.precondition,r))return a;const h=nf(o.fieldTransforms,l,r),f=r.data;return f.setAll(Wg(o)),f.setAll(h),r.convertToFoundDocument(r.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(t,e,n,i):(function(o,r,a){return Qr(o.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):a})(t,e,n)}function ef(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ds(i,s,((o,r)=>YC(o,r)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hd extends Bd{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dc extends Bd{constructor(e,n,i,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function tf(t,e,n){const i=new Map;ye(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const o=t[s],r=o.transform,a=e.data.field(o.field);i.set(o.field,QC(r,a,n[s]))}return i}function nf(t,e,n){const i=new Map;for(const s of t){const o=s.transform,r=n.data.field(s.field);i.set(s.field,KC(o,r,e))}return i}class ZC extends Bd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&XC(o,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=mo(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=mo(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=jg();return this.mutations.forEach((s=>{const o=e.get(s.key),r=o.overlayedDocument;let a=this.applyToLocalView(r,o.mutatedFields);a=n.has(s.key)?null:a;const l=qg(r,a);l!==null&&i.set(s.key,l),r.isValidDocument()||r.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),re())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,((n,i)=>ef(n,i)))&&ds(this.baseMutations,e.baseMutations,((n,i)=>ef(n,i)))}}/**
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
 */class tI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,se;function Gg(t){if(t===void 0)return rn("GRPC error has no .code"),U.UNKNOWN;switch(t){case Te.OK:return U.OK;case Te.CANCELLED:return U.CANCELLED;case Te.UNKNOWN:return U.UNKNOWN;case Te.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Te.INTERNAL:return U.INTERNAL;case Te.UNAVAILABLE:return U.UNAVAILABLE;case Te.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Te.NOT_FOUND:return U.NOT_FOUND;case Te.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Te.ABORTED:return U.ABORTED;case Te.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Te.DATA_LOSS:return U.DATA_LOSS;default:return X(39323,{code:t})}}(se=Te||(Te={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iI(){return new TextEncoder}/**
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
 */const sI=new Dn([4294967295,4294967295],0);function sf(t){const e=iI().encode(t),n=new yg;return n.update(e),new Uint8Array(n.digest())}function of(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Dn([n,i],0),new Dn([s,o],0)]}class zd{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new oo(`Invalid padding: ${n}`);if(i<0)throw new oo(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new oo(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new oo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dn.fromNumber(this.ge)}ye(e,n,i){let s=e.add(n.multiply(Dn.fromNumber(i)));return s.compare(sI)===1&&(s=new Dn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=sf(e),[i,s]=of(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);if(!this.we(r))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),r=new zd(o,s,n);return i.forEach((a=>r.insert(a))),r}insert(e){if(this.ge===0)return;const n=sf(e),[i,s]=of(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);this.be(r)}}be(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,i,s,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Yo.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new uc(Y.min(),s,new ke(ie),qn(),re())}}class Yo{constructor(e,n,i,s,o){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Yo(i,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,i,s){this.Se=e,this.removedTargetIds=n,this.key=i,this.De=s}}class Kg{constructor(e,n){this.targetId=e,this.Ce=n}}class Qg{constructor(e,n,i=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class rf{constructor(){this.ve=0,this.Fe=af(),this.Me=Ue.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),i=re();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:X(38017,{changeType:o})}})),new Yo(this.Me,this.xe,e,n,i)}Ke(){this.Oe=!1,this.Fe=af()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class oI{constructor(e){this.Ge=e,this.ze=new Map,this.je=qn(),this.He=xr(),this.Je=xr(),this.Ze=new ke(ie)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:X(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((i,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,i=e.Ce.count,s=this.ot(n);if(s){const o=s.target;if(Ul(o))if(i===0){const r=new K(o.path);this.et(n,r,ze.newNoDocument(r,Y.min()))}else ye(i===1,20013,{expectedCount:i});else{const r=this._t(n);if(r!==i){const a=this.ut(e),l=a?this.ct(a,e,r):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let r,a;try{r=Hn(i).toUint8Array()}catch(l){if(l instanceof Eg)return Ii("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new zd(r,s,o)}catch(l){return Ii(l instanceof oo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach((o=>{const r=this.Ge.ht(),a=`projects/${r.projectId}/databases/${r.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.et(n,o,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((o,r)=>{const a=this.ot(r);if(a){if(o.current&&Ul(a.target)){const l=new K(a.target.path);this.It(l).has(r)||this.Et(r,l)||this.et(r,l,ze.newNoDocument(l,e))}o.Be&&(n.set(r,o.ke()),o.Ke())}}));let i=re();this.Je.forEach(((o,r)=>{let a=!0;r.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(o))})),this.je.forEach(((o,r)=>r.setReadTime(e)));const s=new uc(e,n,this.Ze,this.je,i);return this.je=qn(),this.He=xr(),this.Je=xr(),this.Ze=new ke(ie),s}Ye(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,i),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new rf,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Re(ie),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Re(ie),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new rf),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function xr(){return new ke(K.comparator)}function af(){return new ke(K.comparator)}const rI={asc:"ASCENDING",desc:"DESCENDING"},aI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cI={and:"AND",or:"OR"};class lI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hl(t,e){return t.useProto3Json||sc(e)?e:{value:e}}function dI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ji(t){return ye(!!t,49232),Y.fromTimestamp((function(n){const i=Bn(n);return new Ce(i.seconds,i.nanos)})(t))}function hI(t,e){return zl(t,e).canonicalString()}function zl(t,e){const n=(function(s){return new ge(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Jg(t){const e=ge.fromString(t);return ye(ty(e),10190,{key:e.toString()}),e}function cl(t,e){const n=Jg(e);if(n.get(1)!==t.databaseId.projectId)throw new z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Xg(n))}function Yg(t,e){return hI(t.databaseId,e)}function pI(t){const e=Jg(t);return e.length===4?ge.emptyPath():Xg(e)}function cf(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xg(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function fI(t,e){let n;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(h,f){return h.useProto3Json?(ye(f===void 0||typeof f=="string",58123),Ue.fromBase64String(f||"")):(ye(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ue.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),r=e.targetChange.cause,a=r&&(function(h){const f=h.code===void 0?U.UNKNOWN:Gg(h.code);return new z(f,h.message||"")})(r);n=new Qg(i,s,o,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=cl(t,i.document.name),o=Ji(i.document.updateTime),r=i.document.createTime?Ji(i.document.createTime):Y.min(),a=new xt({mapValue:{fields:i.document.fields}}),l=ze.newFoundDocument(s,o,r,a),h=i.targetIds||[],f=i.removedTargetIds||[];n=new Jr(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=cl(t,i.document),o=i.readTime?Ji(i.readTime):Y.min(),r=ze.newNoDocument(s,o),a=i.removedTargetIds||[];n=new Jr([],a,r.key,r)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=cl(t,i.document),o=i.removedTargetIds||[];n=new Jr([],o,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,r=new nI(s,o),a=i.targetId;n=new Kg(a,r)}}return n}function mI(t,e){return{documents:[Yg(t,e.path)]}}function gI(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Yg(t,s);const o=(function(h){if(h.length!==0)return ey(Bt.create(h,"and"))})(e.filters);o&&(n.structuredQuery.where=o);const r=(function(h){if(h.length!==0)return h.map((f=>(function(w){return{field:Fi(w.field),direction:wI(w.dir)}})(f)))})(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=Hl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function yI(t){let e=pI(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ye(i===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=(function(g){const w=Zg(g);return w instanceof Bt&&Dg(w)?w.getFilters():[w]})(n.where));let r=[];n.orderBy&&(r=(function(g){return g.map((w=>(function(E){return new Ca(ji(E.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(w)))})(n.orderBy));let a=null;n.limit&&(a=(function(g){let w;return w=typeof g=="object"?g.value:g,sc(w)?null:w})(n.limit));let l=null;n.startAt&&(l=(function(g){const w=!!g.before,k=g.values||[];return new Ta(k,w)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const w=!g.before,k=g.values||[];return new Ta(k,w)})(n.endAt)),NC(e,s,r,o,a,"F",l,h)}function vI(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ji(n.unaryFilter.field);return xe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ji(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ji(n.unaryFilter.field);return xe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ji(n.unaryFilter.field);return xe.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(t):t.fieldFilter!==void 0?(function(n){return xe.create(ji(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Bt.create(n.compositeFilter.filters.map((i=>Zg(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(n.compositeFilter.op))})(t):X(30097,{filter:t})}function wI(t){return rI[t]}function bI(t){return aI[t]}function _I(t){return cI[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function ji(t){return Ze.fromServerFormat(t.fieldPath)}function ey(t){return t instanceof xe?(function(n){if(n.op==="=="){if(Kp(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(Gp(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kp(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(Gp(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:bI(n.op),value:n.value}}})(t):t instanceof Bt?(function(n){const i=n.getFilters().map((s=>ey(s)));return i.length===1?i[0]:{compositeFilter:{op:_I(n.op),filters:i}}})(t):X(54877,{filter:t})}function ty(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,i,s,o=Y.min(),r=Y.min(),a=Ue.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.yt=e}}function TI(t){const e=yI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.Sn=new II}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(jn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(jn.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class II{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Re(ge.comparator),o=!s.has(i);return this.index[n]=s.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Re(ge.comparator)).toArray()}}/**
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
 */const lf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ny=41943040;class st{static withCacheSize(e){return new st(e,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st.DEFAULT_COLLECTION_PERCENTILE=10,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,st.DEFAULT=new st(ny,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),st.DISABLED=new st(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ps(0)}static ar(){return new ps(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="LruGarbageCollector",SI=1048576;function uf([t,e],[n,i]){const s=ie(t,n);return s===0?ie(e,i):s}class EI{constructor(e){this.Pr=e,this.buffer=new Re(uf),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();uf(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class AI{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(df,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xs(n)?H(df,"Ignoring IndexedDB error during garbage collection: ",n):await nc(n)}await this.Ar(3e5)}))}}class xI{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((i=>Math.floor(n/100*i)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ic.ce);const i=new EI(n);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,n,i){return this.Vr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(lf)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lf):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let i,s,o,r,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,r=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,a=Date.now(),this.removeTargets(e,i,n)))).next((g=>(o=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(h=Date.now(),Vi()<=ne.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${r-f}ms
	Determined least recently used ${s} in `+(a-r)+`ms
	Removed ${o} targets in `+(l-a)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g}))))}}function RI(t,e){return new xI(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(){this.changes=new $i((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $I{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(i!==null&&mo(i.mutation,s,Rn.empty(),Ce.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.getLocalViewOfDocuments(e,i,re()).next((()=>i))))}getLocalViewOfDocuments(e,n,i=re()){const s=hi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,i).next((o=>{let r=so();return o.forEach(((a,l)=>{r=r.insert(a,l.overlayedDocument)})),r}))))}getOverlayedDocuments(e,n){const i=hi();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,re())))}populateOverlays(e,n,i){const s=[];return i.forEach((o=>{n.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((r,a)=>{n.set(r,a)}))}))}computeViews(e,n,i,s){let o=qn();const r=fo(),a=(function(){return fo()})();return n.forEach(((l,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof dc)?o=o.insert(h.key,h):f!==void 0?(r.set(h.key,f.mutation.getFieldMask()),mo(f.mutation,h,f.mutation.getFieldMask(),Ce.now())):r.set(h.key,Rn.empty())})),this.recalculateAndSaveOverlays(e,o).next((l=>(l.forEach(((h,f)=>r.set(h,f))),n.forEach(((h,f)=>a.set(h,new $I(f,r.get(h)??null)))),a)))}recalculateAndSaveOverlays(e,n){const i=fo();let s=new ke(((r,a)=>r-a)),o=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((r=>{for(const a of r)a.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=i.get(l)||Rn.empty();f=a.applyToLocalView(h,f),i.set(l,f);const g=(s.get(a.batchId)||re()).add(l);s=s.insert(a.batchId,g)}))})).next((()=>{const r=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,g=jg();f.forEach((w=>{if(!o.has(w)){const k=qg(n.get(w),i.get(w));k!==null&&g.set(w,k),o=o.add(w)}})),r.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(r)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,n,i,s){return MC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):OC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next((o=>{const r=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-o.size):L.resolve(hi());let a=So,l=o;return r.next((h=>L.forEach(h,((f,g)=>(a<g.largestBatchId&&(a=g.largestBatchId),o.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((w=>{l=l.insert(f,w)}))))).next((()=>this.populateOverlays(e,h,o))).next((()=>this.computeViews(e,l,h,re()))).next((f=>({batchId:a,changes:BC(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next((i=>{let s=so();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const o=n.collectionGroup;let r=so();return this.indexManager.getCollectionParents(e,o).next((a=>L.forEach(a,(l=>{const h=(function(g,w){return new rc(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((f=>{f.forEach(((g,w)=>{r=r.insert(g,w)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,n,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next((r=>(o=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,o,s)))).next((r=>{o.forEach(((l,h)=>{const f=h.getKey();r.get(f)===null&&(r=r.insert(f,ze.newInvalidDocument(f)))}));let a=so();return r.forEach(((l,h)=>{const f=o.get(l);f!==void 0&&mo(f.mutation,h,Rn.empty(),Ce.now()),cc(n,h)&&(a=a.insert(l,h))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Ji(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:TI(s.bundledQuery),readTime:Ji(s.readTime)}})(n)),L.resolve()}}/**
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
 */class NI{constructor(){this.overlays=new ke(K.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=hi();return L.forEach(n,(s=>this.getOverlay(e,s).next((o=>{o!==null&&i.set(s,o)})))).next((()=>i))}saveOverlays(e,n,i){return i.forEach(((s,o)=>{this.bt(e,n,o)})),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=hi(),o=n.length+1,r=new K(n.child("")),a=this.overlays.getIteratorFrom(r);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let o=new ke(((h,f)=>h-f));const r=this.overlays.getIterator();for(;r.hasNext();){const h=r.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let f=o.get(h.largestBatchId);f===null&&(f=hi(),o=o.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=hi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>a.set(h,f))),!(a.size()>=s)););return L.resolve(a)}bt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const r=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,r)}this.overlays=this.overlays.insert(i.key,new tI(n,i));let o=this.Lr.get(n);o===void 0&&(o=re(),this.Lr.set(n,o)),this.Lr.set(n,o.add(i.key))}}/**
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
 */class MI{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.kr=new Re(Le.Kr),this.qr=new Re(Le.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const i=new Le(e,n);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,n){e.forEach((i=>this.addReference(i,n)))}removeReference(e,n){this.Wr(new Le(e,n))}Qr(e,n){e.forEach((i=>this.removeReference(i,n)))}Gr(e){const n=new K(new ge([])),i=new Le(n,e),s=new Le(n,e+1),o=[];return this.qr.forEachInRange([i,s],(r=>{this.Wr(r),o.push(r.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new ge([])),i=new Le(n,e),s=new Le(n,e+1);let o=re();return this.qr.forEachInRange([i,s],(r=>{o=o.add(r.key)})),o}containsKey(e){const n=new Le(e,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Le{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||ie(e.Hr,n.Hr)}static Ur(e,n){return ie(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Re(Le.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new eI(o,n,i,s);this.mutationQueue.push(r);for(const a of s)this.Jr=this.Jr.add(new Le(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(r)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Xr(i),o=s<0?0:s;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?pC:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([i,s],(r=>{const a=this.Zr(r.Hr);o.push(a)})),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Re(ie);return n.forEach((s=>{const o=new Le(s,0),r=new Le(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,r],(a=>{i=i.add(a.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let o=i;K.isDocumentKey(o)||(o=o.child(""));const r=new Le(new K(o),0);let a=new Re(ie);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(a=a.add(l.Hr)),!0)}),r),L.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ye(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(n.mutations,(s=>{const o=new Le(s.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,n){const i=new Le(n,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.ti=e,this.docs=(function(){return new ke(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),o=s?s.size:0,r=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:r}),this.size+=r-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let i=qn();return n.forEach((s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():ze.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let o=qn();const r=n.path,a=new K(r.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!r.isPrefixOf(h.path))break;h.path.length>r.length+1||lC(cC(f),i)<=0||(s.has(f.key)||cc(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,n,i,s){X(9500)}ni(e,n){return L.forEach(this.docs,(i=>n(i)))}newChangeBuffer(e){return new UI(this)}getSize(e){return L.resolve(this.size)}}class UI extends PI{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.persistence=e,this.ri=new $i((n=>Ud(n)),Fd),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new qd,this.targetCount=0,this.oi=ps._r()}forEachTarget(e,n){return this.ri.forEach(((i,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const o=[];return this.ri.forEach(((r,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.ri.delete(r),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),L.waitFor(o).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.ri.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.si.$r(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach((r=>{o.push(s.markPotentiallyOrphaned(e,r))})),L.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.si.jr(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n){this._i={},this.overlays={},this.ai=new ic(0),this.ui=!1,this.ui=!0,this.ci=new MI,this.referenceDelegate=e(this),this.li=new FI(this),this.indexManager=new CI,this.remoteDocumentCache=(function(s){return new VI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new kI(n),this.Pi=new DI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this._i[e.toKey()];return i||(i=new OI(n,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,i){H("MemoryPersistence","Starting transaction:",e);const s=new jI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(e,n){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,n))))}}class jI extends uC{constructor(e){super(),this.currentSequenceNumber=e}}class Wd{constructor(e){this.persistence=e,this.Ri=new qd,this.Ai=null}static Vi(e){return new Wd(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>i.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((o=>{o||n.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ea{constructor(e,n){this.persistence=e,this.fi=new $i((i=>fC(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=RI(this,n)}static Vi(e,n){return new Ea(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>n.next((s=>i+s))))}pr(e){let n=0;return this.mr(e,(i=>{n++})).next((()=>n))}mr(e,n){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((o=>o?L.resolve():n(s)))))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,(r=>this.wr(e,r,n).next((a=>{a||(i++,o.removeEntry(r,Y.min()))})))).next((()=>o.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Kr(e.data.value)),n}wr(e,n,i){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Ts=i,this.Is=s}static Es(e,n){let i=re(),s=re();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Gd(e,n.fromCache,i,s)}}/**
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
 */class BI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Eb()?8:hC(We())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,s){const o={result:null};return this.gs(e,n).next((r=>{o.result=r})).next((()=>{if(!o.result)return this.ps(e,n,s,i).next((r=>{o.result=r}))})).next((()=>{if(o.result)return;const r=new BI;return this.ys(e,n,r).next((a=>{if(o.result=a,this.As)return this.ws(e,n,r,a.size)}))})).next((()=>o.result))}ws(e,n,i,s){return i.documentReadCount<this.Vs?(Vi()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Vi()<=ne.DEBUG&&H("QueryEngine","Query:",Ui(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Vi()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(n))):L.resolve())}gs(e,n){if(Xp(n))return L.resolve(null);let i=Vt(n);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Fl(n,null,"F"),i=Vt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next((o=>{const r=re(...o);return this.fs.getDocuments(e,r).next((a=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(n,a);return this.Ss(n,h,r,l.readTime)?this.gs(e,Fl(n,null,"F")):this.Ds(e,h,n,l)}))))})))))}ps(e,n,i,s){return Xp(n)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,i).next((o=>{const r=this.bs(n,o);return this.Ss(n,r,i,s)?L.resolve(null):(Vi()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ui(n)),this.Ds(e,r,n,aC(s,So)).next((a=>a)))}))}bs(e,n){let i=new Re(Ug(e));return n.forEach(((s,o)=>{cc(e,o)&&(i=i.add(o))})),i}Ss(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,n,i){return Vi()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ui(n)),this.fs.getDocumentsMatchingQuery(e,n,jn.min(),i)}Ds(e,n,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((o=>(n.forEach((r=>{o=o.insert(r.key,r)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="LocalStore",zI=3e8;class qI{constructor(e,n,i,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ke(ie),this.Fs=new $i((o=>Ud(o)),Fd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function WI(t,e,n,i){return new qI(t,e,n,i)}async function sy(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next((o=>(s=o,n.Os(e),n.mutationQueue.getAllMutationBatches(i)))).next((o=>{const r=[],a=[];let l=re();for(const h of s){r.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of o){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:r,addedBatchIds:a})))}))}))}function oy(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function GI(t,e){const n=oe(t),i=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const r=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach(((f,g)=>{const w=s.get(g);if(!w)return;a.push(n.li.removeMatchingKeys(o,f.removedDocuments,g).next((()=>n.li.addMatchingKeys(o,f.addedDocuments,g))));let k=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Ue.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,i)),s=s.insert(g,k),(function($,P,O){return $.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=zI?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(w,k,f)&&a.push(n.li.updateTargetData(o,k))}));let l=qn(),h=re();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))})),a.push(KI(o,r,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!i.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(o).next((g=>n.li.setTargetsMetadata(o,o.currentSequenceNumber,i)));a.push(f)}return L.waitFor(a).next((()=>r.apply(o))).next((()=>n.localDocuments.getLocalViewOfDocuments(o,l,h))).next((()=>l))})).then((o=>(n.vs=s,o)))}function KI(t,e,n){let i=re(),s=re();return n.forEach((o=>i=i.add(o))),e.getEntries(t,i).next((o=>{let r=qn();return n.forEach(((a,l)=>{const h=o.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),r=r.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),r=r.insert(a,l)):H(Kd,"Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)})),{Bs:r,Ls:s}}))}function QI(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return n.li.getTargetData(i,e).next((o=>o?(s=o,L.resolve(s)):n.li.allocateTargetId(i).next((r=>(s=new Pn(e,r,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(e,i.targetId)),i}))}async function ql(t,e,n){const i=oe(t),s=i.vs.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,(r=>i.persistence.referenceDelegate.removeTarget(r,s)))}catch(r){if(!xs(r))throw r;H(Kd,`Failed to update sequence numbers for target ${e}: ${r}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function hf(t,e,n){const i=oe(t);let s=Y.min(),o=re();return i.persistence.runTransaction("Execute query","readwrite",(r=>(function(l,h,f){const g=oe(l),w=g.Fs.get(f);return w!==void 0?L.resolve(g.vs.get(w)):g.li.getTargetData(h,f)})(i,r,Vt(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(r,a.targetId).next((l=>{o=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(r,e,n?s:Y.min(),n?o:re()))).next((a=>(JI(i,UC(e),a),{documents:a,ks:o})))))}function JI(t,e,n){let i=t.Ms.get(e)||Y.min();n.forEach(((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)})),t.Ms.set(e,i)}class pf{constructor(){this.activeTargetIds=qC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YI{constructor(){this.vo=new pf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,i){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new pf,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="ConnectivityMonitor";class mf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(ff,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(ff,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rr=null;function Wl(){return Rr===null?Rr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Rr++,"0x"+Rr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="RestConnection",ZI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class eS{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===ka?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,n,i,s,o){const r=Wl(),a=this.Qo(e,n.toUriEncodedString());H(ll,`Sending RPC '${e}' ${r}:`,a,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,o);const{host:h}=new URL(a),f=Jn(h);return this.zo(e,a,l,i,f).then((g=>(H(ll,`Received RPC '${e}' ${r}: `,g),g)),(g=>{throw Ii(ll,`RPC '${e}' ${r} failed with error: `,g,"url: ",a,"request:",i),g}))}jo(e,n,i,s,o,r){return this.Wo(e,n,i,s,o)}Go(e,n,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+As})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,o)=>e[o]=s)),i&&i.headers.forEach(((s,o)=>e[o]=s))}Qo(e,n){const i=ZI[e];let s=`${this.qo}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="WebChannelConnection",Zs=(t,e,n)=>{t.listen(e,(i=>{try{n(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Yi extends eS{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yi.c_){const e=_g();Zs(e,bg.STAT_EVENT,(n=>{n.stat===$l.PROXY?H(je,"STAT_EVENT: detected buffering proxy"):n.stat===$l.NOPROXY&&H(je,"STAT_EVENT: detected no buffering proxy")})),Yi.c_=!0}}zo(e,n,i,s,o){const r=Wl();return new Promise(((a,l)=>{const h=new vg;h.setWithCredentials(!0),h.listenOnce(wg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Wr.NO_ERROR:const g=h.getResponseJson();H(je,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(g)),a(g);break;case Wr.TIMEOUT:H(je,`RPC '${e}' ${r} timed out`),l(new z(U.DEADLINE_EXCEEDED,"Request time out"));break;case Wr.HTTP_ERROR:const w=h.getStatus();if(H(je,`RPC '${e}' ${r} failed with status:`,w,"response text:",h.getResponseText()),w>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const E=k==null?void 0:k.error;if(E&&E.status&&E.message){const $=(function(O){const M=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(M)>=0?M:U.UNKNOWN})(E.status);l(new z($,E.message))}else l(new z(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(U.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:r,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(je,`RPC '${e}' ${r} completed.`)}}));const f=JSON.stringify(s);H(je,`RPC '${e}' ${r} sending request:`,s),h.send(n,"POST",f,i,15)}))}T_(e,n,i){const s=Wl(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const h=o.join("");H(je,`Creating RPC '${e}' stream ${s}: ${h}`,a);const f=r.createWebChannel(h,a);this.I_(f);let g=!1,w=!1;const k=new tS({Ho:E=>{w?H(je,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(g||(H(je,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),H(je,`RPC '${e}' stream ${s} sending:`,E),f.send(E))},Jo:()=>f.close()});return Zs(f,io.EventType.OPEN,(()=>{w||(H(je,`RPC '${e}' stream ${s} transport opened.`),k.i_())})),Zs(f,io.EventType.CLOSE,(()=>{w||(w=!0,H(je,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(f))})),Zs(f,io.EventType.ERROR,(E=>{w||(w=!0,Ii(je,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),k.o_(new z(U.UNAVAILABLE,"The operation could not be completed")))})),Zs(f,io.EventType.MESSAGE,(E=>{var $;if(!w){const P=E.data[0];ye(!!P,16349);const O=P,M=(O==null?void 0:O.error)||(($=O[0])==null?void 0:$.error);if(M){H(je,`RPC '${e}' stream ${s} received error:`,M);const N=M.status;let D=(function(C){const v=Te[C];if(v!==void 0)return Gg(v)})(N),B=M.message;N==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&Ii(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=U.INTERNAL,B="Unknown error status: "+N+" with message "+M.message),w=!0,k.o_(new z(D,B)),f.close()}else H(je,`RPC '${e}' stream ${s} received:`,P),k.__(P)}})),Yi.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,i){super.Go(e,n,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return kg()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){return new Yi(t)}function dl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t){return new lI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yi.c_=!1;class ay{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=n,this.R_=i,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf="PersistentStream";class iS{constructor(e,n,i,s,o,r,a,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=o,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ay(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(rn(n.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===n&&this.G_(i,s)}),(i=>{e((()=>{const s=new z(U.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,n){const i=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(gf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(H(gf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sS extends iS{constructor(e,n,i,s,o,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,r),this.serializer=o}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=fI(this.serializer,e),i=(function(o){if(!("targetChange"in o))return Y.min();const r=o.targetChange;return r.targetIds&&r.targetIds.length?Y.min():r.readTime?Ji(r.readTime):Y.min()})(e);return this.listener.J_(n,i)}Z_(e){const n={};n.database=cf(this.serializer),n.addTarget=(function(o,r){let a;const l=r.target;if(a=Ul(l)?{documents:mI(o,l)}:{query:gI(o,l).ft},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){a.resumeToken=uI(o,r.resumeToken);const h=Hl(o,r.expectedCount);h!==null&&(a.expectedCount=h)}else if(r.snapshotVersion.compareTo(Y.min())>0){a.readTime=dI(o,r.snapshotVersion.toTimestamp());const h=Hl(o,r.expectedCount);h!==null&&(a.expectedCount=h)}return a})(this.serializer,e);const i=vI(this.serializer,e);i&&(n.labels=i),this.K_(n)}X_(e){const n={};n.database=cf(this.serializer),n.removeTarget=e,this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{}class rS extends oS{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,r])=>this.connection.Wo(e,zl(n,i),s,o,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(U.UNKNOWN,o.toString())}))}jo(e,n,i,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.jo(e,zl(n,i),s,r,a,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(U.UNKNOWN,r.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function aS(t,e,n,i){return new rS(t,e,n,i)}class cS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(rn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="RemoteStore";class lS{constructor(e,n,i,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((r=>{i.enqueueAndForget((async()=>{Zo(this)&&(H(fs,"Restarting streams for network reachability change."),await(async function(l){const h=oe(l);h.Ea.add(4),await Xo(h),h.Va.set("Unknown"),h.Ea.delete(4),await hc(h)})(this))}))})),this.Va=new cS(i,s)}}async function hc(t){if(Zo(t))for(const e of t.Ra)await e(!0)}async function Xo(t){for(const e of t.Ra)await e(!1)}function cy(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Xd(n)?Yd(n):Rs(n).O_()&&Jd(n,e))}function Qd(t,e){const n=oe(t),i=Rs(n);n.Ia.delete(e),i.O_()&&ly(n,e),n.Ia.size===0&&(i.O_()?i.L_():Zo(n)&&n.Va.set("Unknown"))}function Jd(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Rs(t).Z_(e)}function ly(t,e){t.da.$e(e),Rs(t).X_(e)}function Yd(t){t.da=new oI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Rs(t).start(),t.Va.ua()}function Xd(t){return Zo(t)&&!Rs(t).x_()&&t.Ia.size>0}function Zo(t){return oe(t).Ea.size===0}function dy(t){t.da=void 0}async function dS(t){t.Va.set("Online")}async function uS(t){t.Ia.forEach(((e,n)=>{Jd(t,e)}))}async function hS(t,e){dy(t),Xd(t)?(t.Va.ha(e),Yd(t)):t.Va.set("Unknown")}async function pS(t,e,n){if(t.Va.set("Online"),e instanceof Qg&&e.state===2&&e.cause)try{await(async function(s,o){const r=o.cause;for(const a of o.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,r),s.Ia.delete(a),s.da.removeTarget(a))})(t,e)}catch(i){H(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await yf(t,i)}else if(e instanceof Jr?t.da.Xe(e):e instanceof Kg?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const i=await oy(t.localStore);n.compareTo(i)>=0&&await(function(o,r){const a=o.da.Tt(r);return a.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.Ia.get(h);f&&o.Ia.set(h,f.withResumeToken(l.resumeToken,r))}})),a.targetMismatches.forEach(((l,h)=>{const f=o.Ia.get(l);if(!f)return;o.Ia.set(l,f.withResumeToken(Ue.EMPTY_BYTE_STRING,f.snapshotVersion)),ly(o,l);const g=new Pn(f.target,l,h,f.sequenceNumber);Jd(o,g)})),o.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(i){H(fs,"Failed to raise snapshot:",i),await yf(t,i)}}async function yf(t,e,n){if(!xs(e))throw e;t.Ea.add(1),await Xo(t),t.Va.set("Offline"),n||(n=()=>oy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{H(fs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await hc(t)}))}async function vf(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),H(fs,"RemoteStore received new credentials");const i=Zo(n);n.Ea.add(3),await Xo(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await hc(n)}async function fS(t,e){const n=oe(t);e?(n.Ea.delete(2),await hc(n)):e||(n.Ea.add(2),await Xo(n),n.Va.set("Unknown"))}function Rs(t){return t.ma||(t.ma=(function(n,i,s){const o=oe(n);return o.sa(),new sS(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(t.datastore,t.asyncQueue,{Zo:dS.bind(null,t),Yo:uS.bind(null,t),t_:hS.bind(null,t),J_:pS.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),Xd(t)?Yd(t):t.Va.set("Unknown")):(await t.ma.stop(),dy(t))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((r=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const r=Date.now()+i,a=new Zd(e,n,r,s,o);return a.start(i),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uy(t,e){if(rn("AsyncQueue",`${e}: ${t}`),xs(t))return new z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{static emptySet(e){return new Xi(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||K.comparator(n.key,i.key):(n,i)=>K.comparator(n.key,i.key),this.keyedMap=so(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,i)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Xi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.ga=new ke(K.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,i)=>{e.push(i)})),e}}class ms{constructor(e,n,i,s,o,r,a,l,h){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=r,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,i,s,o){const r=[];return n.forEach((a=>{r.push({type:0,doc:a})})),new ms(e,n,Xi.emptySet(n),r,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ac(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class gS{constructor(){this.queries=bf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=oe(n),o=s.queries;s.queries=bf(),o.forEach(((r,a)=>{for(const l of a.ba)l.onError(i)}))})(this,new z(U.ABORTED,"Firestore shutting down"))}}function bf(){return new $i((t=>Vg(t)),ac)}async function yS(t,e){const n=oe(t);let i=3;const s=e.query;let o=n.queries.get(s);o?!o.Sa()&&e.Da()&&(i=2):(o=new mS,i=e.Da()?0:1);try{switch(i){case 0:o.wa=await n.onListen(s,!0);break;case 1:o.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(r){const a=uy(r,`Initialization of query '${Ui(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,o),o.ba.push(e),e.va(n.onlineState),o.wa&&e.Fa(o.wa)&&eu(n)}async function vS(t,e){const n=oe(t),i=e.query;let s=3;const o=n.queries.get(i);if(o){const r=o.ba.indexOf(e);r>=0&&(o.ba.splice(r,1),o.ba.length===0?s=e.Da()?0:1:!o.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function wS(t,e){const n=oe(t);let i=!1;for(const s of e){const o=s.query,r=n.queries.get(o);if(r){for(const a of r.ba)a.Fa(s)&&(i=!0);r.wa=s}}i&&eu(n)}function bS(t,e,n){const i=oe(t),s=i.queries.get(e);if(s)for(const o of s.ba)o.onError(n);i.queries.delete(e)}function eu(t){t.Ca.forEach((e=>{e.next()}))}var Gl,_f;(_f=Gl||(Gl={})).Ma="default",_f.Cache="cache";class _S{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ms(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Gl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.key=e}}class py{constructor(e){this.key=e}}class kS{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=Ug(e),this.tu=new Xi(this.eu)}get nu(){return this.Za}ru(e,n){const i=n?n.iu:new wf,s=n?n.tu:this.tu;let o=n?n.mutatedKeys:this.mutatedKeys,r=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,g)=>{const w=s.get(f),k=cc(this.query,g)?g:null,E=!!w&&this.mutatedKeys.has(w.key),$=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let P=!1;w&&k?w.data.isEqual(k.data)?E!==$&&(i.track({type:3,doc:k}),P=!0):this.su(w,k)||(i.track({type:2,doc:k}),P=!0,(l&&this.eu(k,l)>0||h&&this.eu(k,h)<0)&&(a=!0)):!w&&k?(i.track({type:0,doc:k}),P=!0):w&&!k&&(i.track({type:1,doc:w}),P=!0,(l||h)&&(a=!0)),P&&(k?(r=r.add(k),o=$?o.add(f):o.delete(f)):(r=r.delete(f),o=o.delete(f)))})),this.query.limit!==null)for(;r.size>this.query.limit;){const f=this.query.limitType==="F"?r.last():r.first();r=r.delete(f.key),o=o.delete(f.key),i.track({type:1,doc:f})}return{tu:r,iu:i,Ss:a,mutatedKeys:o}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const r=e.iu.ya();r.sort(((f,g)=>(function(k,E){const $=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:P})}};return $(k)-$(E)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(i),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,r.length!==0||h?{snapshot:new ms(this.query,e.tu,o,r,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wf,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const n=[];return e.forEach((i=>{this.Ya.has(i)||n.push(new py(i))})),this.Ya.forEach((i=>{e.has(i)||n.push(new hy(i))})),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ms.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const tu="SyncEngine";class TS{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class CS{constructor(e){this.key=e,this.hu=!1}}class IS{constructor(e,n,i,s,o,r){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=r,this.Pu={},this.Tu=new $i((a=>Vg(a)),ac),this.Iu=new Map,this.Eu=new Set,this.Ru=new ke(K.comparator),this.Au=new Map,this.Vu=new qd,this.du={},this.mu=new Map,this.fu=ps.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function SS(t,e,n=!0){const i=vy(t);let s;const o=i.Tu.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await fy(i,e,n,!0),s}async function ES(t,e){const n=vy(t);await fy(n,e,!0,!1)}async function fy(t,e,n,i){const s=await QI(t.localStore,Vt(e)),o=s.targetId,r=t.sharedClientState.addLocalQueryTarget(o,n);let a;return i&&(a=await AS(t,e,o,r==="current",s.resumeToken)),t.isPrimaryClient&&n&&cy(t.remoteStore,s),a}async function AS(t,e,n,i,s){t.pu=(g,w,k)=>(async function($,P,O,M){let N=P.view.ru(O);N.Ss&&(N=await hf($.localStore,P.query,!1).then((({documents:C})=>P.view.ru(C,N))));const D=M&&M.targetChanges.get(P.targetId),B=M&&M.targetMismatches.get(P.targetId)!=null,q=P.view.applyChanges(N,$.isPrimaryClient,D,B);return Tf($,P.targetId,q.au),q.snapshot})(t,g,w,k);const o=await hf(t.localStore,e,!0),r=new kS(e,o.ks),a=r.ru(o.documents),l=Yo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),h=r.applyChanges(a,t.isPrimaryClient,l);Tf(t,n,h.au);const f=new TS(e,n,r);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function xS(t,e,n){const i=oe(t),s=i.Tu.get(e),o=i.Iu.get(s.targetId);if(o.length>1)return i.Iu.set(s.targetId,o.filter((r=>!ac(r,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await ql(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Qd(i.remoteStore,s.targetId),Kl(i,s.targetId)})).catch(nc)):(Kl(i,s.targetId),await ql(i.localStore,s.targetId,!0))}async function RS(t,e){const n=oe(t),i=n.Tu.get(e),s=n.Iu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Qd(n.remoteStore,i.targetId))}async function my(t,e){const n=oe(t);try{const i=await GI(n.localStore,e);e.targetChanges.forEach(((s,o)=>{const r=n.Au.get(o);r&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?r.hu=!0:s.modifiedDocuments.size>0?ye(r.hu,14607):s.removedDocuments.size>0&&(ye(r.hu,42227),r.hu=!1))})),await yy(n,i,e)}catch(i){await nc(i)}}function kf(t,e,n){const i=oe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach(((o,r)=>{const a=r.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(r,a){const l=oe(r);l.onlineState=a;let h=!1;l.queries.forEach(((f,g)=>{for(const w of g.ba)w.va(a)&&(h=!0)})),h&&eu(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function PS(t,e,n){const i=oe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Au.get(e),o=s&&s.key;if(o){let r=new ke(K.comparator);r=r.insert(o,ze.newNoDocument(o,Y.min()));const a=re().add(o),l=new uc(Y.min(),new Map,new ke(ie),r,a);await my(i,l),i.Ru=i.Ru.remove(o),i.Au.delete(e),nu(i)}else await ql(i.localStore,e,!1).then((()=>Kl(i,e,n))).catch(nc)}function Kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((i=>{t.Vu.containsKey(i)||gy(t,i)}))}function gy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Qd(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),nu(t))}function Tf(t,e,n){for(const i of n)i instanceof hy?(t.Vu.addReference(i.key,e),$S(t,i)):i instanceof py?(H(tu,"Document no longer in limbo: "+i.key),t.Vu.removeReference(i.key,e),t.Vu.containsKey(i.key)||gy(t,i.key)):X(19791,{wu:i})}function $S(t,e){const n=e.key,i=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(i)||(H(tu,"New document in limbo: "+n),t.Eu.add(i),nu(t))}function nu(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(ge.fromString(e)),i=t.fu.next();t.Au.set(i,new CS(n)),t.Ru=t.Ru.insert(n,i),cy(t.remoteStore,new Pn(Vt(jd(n.path)),i,"TargetPurposeLimboResolution",ic.ce))}}async function yy(t,e,n){const i=oe(t),s=[],o=[],r=[];i.Tu.isEmpty()||(i.Tu.forEach(((a,l)=>{r.push(i.pu(l,e,n).then((h=>{var f;if((h||n)&&i.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Gd.Es(l.targetId,h);o.push(g)}})))})),await Promise.all(r),i.Pu.J_(s),await(async function(l,h){const f=oe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(h,(w=>L.forEach(w.Ts,(k=>f.persistence.referenceDelegate.addReference(g,w.targetId,k))).next((()=>L.forEach(w.Is,(k=>f.persistence.referenceDelegate.removeReference(g,w.targetId,k)))))))))}catch(g){if(!xs(g))throw g;H(Kd,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const k=f.vs.get(w),E=k.snapshotVersion,$=k.withLastLimboFreeSnapshotVersion(E);f.vs=f.vs.insert(w,$)}}})(i.localStore,o))}async function LS(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){H(tu,"User change. New user:",e.toKey());const i=await sy(n.localStore,e);n.currentUser=e,(function(o,r){o.mu.forEach((a=>{a.forEach((l=>{l.reject(new z(U.CANCELLED,r))}))})),o.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await yy(n,i.Ns)}}function DS(t,e){const n=oe(t),i=n.Au.get(e);if(i&&i.hu)return re().add(i.key);{let s=re();const o=n.Iu.get(e);if(!o)return s;for(const r of o){const a=n.Tu.get(r);s=s.unionWith(a.view.nu)}return s}}function vy(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=my.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PS.bind(null,e),e.Pu.J_=wS.bind(null,e.eventManager),e.Pu.yu=bS.bind(null,e.eventManager),e}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ry(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return WI(this.persistence,new HI,e.initialUser,this.serializer)}Cu(e){return new iy(Wd.Vi,this.serializer)}Du(e){return new YI}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class NS extends Aa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ye(this.persistence.referenceDelegate instanceof Ea,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new AI(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?st.withCacheSize(this.cacheSizeBytes):st.DEFAULT;return new iy((i=>Ea.Vi(i,n)),this.serializer)}}class Ql{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>kf(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=LS.bind(null,this.syncEngine),await fS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gS})()}createDatastore(e){const n=ry(e.databaseInfo.databaseId),i=nS(e.databaseInfo);return aS(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return(function(i,s,o,r,a){return new lS(i,s,o,r,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>kf(this.syncEngine,n,0)),(function(){return mf.v()?new mf:new XI})())}createSyncEngine(e,n){return(function(s,o,r,a,l,h,f){const g=new IS(s,o,r,a,l,h);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const o=oe(s);H(fs,"RemoteStore shutting down."),o.Ea.add(5),await Xo(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ql.provider={build:()=>new Ql};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="FirestoreClient";class OS{constructor(e,n,i,s,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=Be.UNAUTHENTICATED,this.clientId=Ig.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,(async r=>{H(Wn,"Received user=",r.uid),await this.authCredentialListener(r),this.user=r})),this.appCheckCredentials.start(i,(r=>(H(Wn,"Received new app check token=",r),this.appCheckCredentialListener(r,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=uy(n,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function ul(t,e){t.asyncQueue.verifyOperationInProgress(),H(Wn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async s=>{i.isEqual(s)||(await sy(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Cf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VS(t);H(Wn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((i=>vf(e.remoteStore,i))),t.setAppCheckTokenChangeListener(((i,s)=>vf(e.remoteStore,s))),t._onlineComponents=e}async function VS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Wn,"Using user provided OfflineComponentProvider");try{await ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ii("Error using user provided cache. Falling back to memory cache: "+n),await ul(t,new Aa)}}else H(Wn,"Using default OfflineComponentProvider"),await ul(t,new NS(void 0));return t._offlineComponents}async function US(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Wn,"Using user provided OnlineComponentProvider"),await Cf(t,t._uninitializedComponentsProvider._online)):(H(Wn,"Using default OnlineComponentProvider"),await Cf(t,new Ql))),t._onlineComponents}async function If(t){const e=await US(t),n=e.eventManager;return n.onListen=SS.bind(null,e.syncEngine),n.onUnlisten=xS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ES.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RS.bind(null,e.syncEngine),n}function FS(t,e,n,i){const s=new MS(i),o=new _S(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>yS(await If(t),o))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>vS(await If(t),o)))}}/**
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
 */function wy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="ComponentProvider",Sf=new Map;function BS(t,e,n,i,s){return new vC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,wy(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="firestore.googleapis.com",Ef=!0;class Af{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=by,this.ssl=Ef}else this.host=e.host,this.ssl=e.ssl??Ef;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ny;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SI)throw new z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wy(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new G0;switch(i.type){case"firstParty":return new Y0(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const i=Sf.get(n);i&&(H(jS,"Removing Datastore"),Sf.delete(n),i.terminate())})(this),Promise.resolve()}}function HS(t,e,n,i={}){var h;t=Gr(t,iu);const s=Jn(e),o=t._getSettings(),r={...o,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(md(`https://${a}`),gd("Firestore",!0)),o.host!==by&&o.host!==a&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...o,host:a,ssl:s,emulatorOptions:i};if(!_i(l,r)&&(t._setSettings(l),i.mockUserToken)){let f,g;if(typeof i.mockUserToken=="string")f=i.mockUserToken,g=Be.MOCK_USER;else{f=gm(i.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Be(w)}t._authCredentials=new K0(new Cg(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new pc(this.firestore,e,this._query)}}class lt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Qo(n,lt._jsonSchema))return new lt(e,i||null,new K(ge.fromString(n.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:Ie("string",lt._jsonSchemaVersion),referencePath:Ie("string")};class Zi extends pc{constructor(e,n,i){super(e,n,jd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new K(e))}withConverter(e){return new Zi(this.firestore,e,this._path)}}function vn(t,e,...n){if(t=Me(t),iC("collection","path",e),t instanceof iu){const i=ge.fromString(e,...n);return Up(i),new Zi(t,null,i)}{if(!(t instanceof lt||t instanceof Zi))throw new z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ge.fromString(e,...n));return Up(i),new Zi(t.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="AsyncQueue";class Rf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ay(this,"async_queue_retry"),this._c=()=>{const i=dl();i&&H(xf,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=dl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Qi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!xs(e))throw e;H(xf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,rn("INTERNAL UNHANDLED ERROR: ",Pf(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Zd.createAndSchedule(this,e,n,i,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&X(47125,{Pc:Pf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,i)=>n.targetTimeMs-i.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Pf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Jl extends iu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Rf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rf(e),this._firestoreClient=void 0,await e}}}function zS(t,e){const n=typeof t=="object"?t:wd(),i=typeof t=="string"?t:ka,s=Ja(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=pm("firestore");o&&HS(s,...o)}return s}function qS(t){if(t._terminated)throw new z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||WS(t),t._firestoreClient}function WS(t){var i,s,o,r;const e=t._freezeSettings(),n=BS(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new OS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Ue.fromBase64String(e))}catch(n){throw new z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Qo(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Ie("string",Rt._jsonSchemaVersion),bytes:Ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nn._jsonSchemaVersion}}static fromJSON(e){if(Qo(e,Nn._jsonSchema))return new Nn(e.latitude,e.longitude)}}Nn._jsonSchemaVersion="firestore/geoPoint/1.0",Nn._jsonSchema={type:Ie("string",Nn._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class Mn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Qo(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Mn(e.vectorValues);throw new z(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:Ie("string",Mn._jsonSchemaVersion),vectorValues:Ie("object")};function ky(t,e,n){if((e=Me(e))instanceof _y)return e._internalPath;if(typeof e=="string")return KS(t,e);throw Yl("Field path arguments must be of type string or ",t)}const GS=new RegExp("[~\\*/\\[\\]]");function KS(t,e,n){if(e.search(GS)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new _y(...e.split("."))._internalPath}catch{throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Yl(t,e,n,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let r="";return new z(U.INVALID_ARGUMENT,o+t+r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{convertValue(e,n="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Jo(e,((s,o)=>{i[s]=this.convertValue(o,n)})),i}convertVectorValue(e){var i,s,o;const n=(o=(s=(i=e.fields)==null?void 0:i[Nl].arrayValue)==null?void 0:s.values)==null?void 0:o.map((r=>_e(r.doubleValue)));return new Mn(n)}convertGeoPoint(e){return new Nn(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map((i=>this.convertValue(i,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const i=oc(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=ge.fromString(e);ye(ty(i),9688,{name:e});const s=new Ao(i.get(1),i.get(3)),o=new K(i.popFirst(5));return s.isEqual(n)||rn(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */class Ty extends QS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}const $f="@firebase/firestore",Lf="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){return(function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const o of i)if(o in s&&typeof s[o]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ky("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JS extends Cy{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yi extends Cy{constructor(e,n,i,s,o,r){super(e,n,i,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(ky("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=yi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}yi._jsonSchemaVersion="firestore/documentSnapshot/1.0",yi._jsonSchema={type:Ie("string",yi._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Yr extends yi{data(e={}){return super.data(e)}}class es{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ro(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((i=>{e.call(n,new Yr(this._firestore,this._userDataWriter,i.key,i,new ro(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map((a=>{const l=new Yr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ro(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:r++}}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>o||a.type!==3)).map((a=>{const l=new Yr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ro(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return a.type!==0&&(h=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),f=r.indexOf(a.doc.key)),{type:XS(a.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ig.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
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
 */es._jsonSchemaVersion="firestore/querySnapshot/1.0",es._jsonSchema={type:Ie("string",es._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};function wn(t,...e){var h,f,g;t=Me(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Df(e[i])||(n=e[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Df(e[i])){const w=e[i];e[i]=(h=w.next)==null?void 0:h.bind(w),e[i+1]=(f=w.error)==null?void 0:f.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let o,r,a;if(t instanceof lt)r=Gr(t.firestore,Jl),a=jd(t._key.path),o={next:w=>{e[i]&&e[i](ZS(r,t,w))},error:e[i+1],complete:e[i+2]};else{const w=Gr(t,pc);r=Gr(w.firestore,Jl),a=w._query;const k=new Ty(r);o={next:E=>{e[i]&&e[i](new es(r,k,w,E))},error:e[i+1],complete:e[i+2]},YS(t._query)}const l=qS(r);return FS(l,a,s,o)}function ZS(t,e,n){const i=n.docs.get(e._key),s=new Ty(t);return new yi(t,s,e._key,i,new ro(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){W0(Pi),ki(new Un("firestore",((i,{instanceIdentifier:s,options:o})=>{const r=i.getProvider("app").getImmediate(),a=new Jl(new Q0(i.getProvider("auth-internal")),new X0(r,i.getProvider("app-check-internal")),wC(r,s),r);return o={useFetchStreams:n,...o},a._setSettings(o),a}),"PUBLIC").setMultipleInstances(!0)),Nt($f,Lf,e),Nt($f,Lf,"esm2020")})();const bn=zS(Rd);let Ct=[],pi=null;function Pr(){pi&&clearTimeout(pi),pi=setTimeout(()=>{var t;pi=null,(t=F.renderAll)==null||t.call(F)},80)}function eE(t){if(Iy(),!t)return;const e=n=>n.docs.map(i=>({id:i.id,...i.data()}));Ct.push(wn(vn(bn,`households/${t}/inventory`),n=>{d.inv=e(n),ce("synced"),Pr()},n=>{console.warn("realtime inv error:",n),ce("error")})),Ct.push(wn(vn(bn,`households/${t}/shopping`),n=>{var i;d.shop=e(n),ce("synced"),(i=F.renderShop)==null||i.call(F),Pr()},n=>{console.warn("realtime shop error:",n),ce("error")})),Ct.push(wn(vn(bn,`households/${t}/recipes`),n=>{var i;d.recs=e(n),ce("synced"),(i=F.renderRecs)==null||i.call(F),Pr()},n=>{console.warn("realtime recs error:",n),ce("error")})),Ct.push(wn(vn(bn,`households/${t}/mealplan`),n=>{const i={};e(n).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),d.mp=i,ce("synced")},n=>{console.warn("realtime mp error:",n)})),Ct.push(wn(vn(bn,`households/${t}/settings`),n=>{const i=e(n).find(s=>s.id==="config");i&&(d.cfg={...ua,...i})},n=>{console.warn("realtime settings error:",n)})),Ct.push(wn(vn(bn,`households/${t}/cooklog`),n=>{d.cookLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime cooklog error:",n)})),Ct.push(wn(vn(bn,`households/${t}/wastelog`),n=>{d.wasteLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime wastelog error:",n)})),Ct.push(wn(vn(bn,`households/${t}/activity`),n=>{d.activity=e(n).sort((i,s)=>new Date(s.timestamp||0)-new Date(i.timestamp||0)).slice(0,10),Pr()},n=>{console.warn("realtime activity error:",n)})),ce("synced"),console.log("[realtime] Listeners started for household:",t)}function Iy(){pi&&(clearTimeout(pi),pi=null),Ct.forEach(t=>{try{t()}catch{}}),Ct=[],console.log("[realtime] All listeners stopped")}const ts=[{key:"produce",name:"Produce",emoji:"🥦",keywords:["vegetable","fruit","fresh herb","cucumber","tomato","lettuce","onion","garlic","pepper","carrot","potato","banana","apple","avocado","broccoli","spinach","kale","celery","mushroom","corn","zucchini","squash","cabbage","cauliflower","sweet potato","green bean","asparagus","berry","blueberry","strawberry","raspberry","grape","orange","lemon","lime","mango","pineapple","watermelon","peach","pear","plum","cilantro","parsley","basil","mint","dill","ginger","jalap","scallion","radish","beet","turnip","eggplant","artichoke"]},{key:"personal",name:"Personal Care",emoji:"🧴",keywords:["shampoo","conditioner","lotion","soap","toothpaste","deodorant","vitamins","vitamin","supplement","sunscreen","razor","body wash","face wash","moisturizer","floss","mouthwash","band-aid","bandage","medicine","aspirin","ibuprofen","cotton","tissue","q-tip","cleanser","hair","skin care","personal care"]},{key:"dairy",name:"Dairy, Eggs & Milk",emoji:"🥛",keywords:["milk","cheese","butter","yogurt","cream","egg","dairy","sour cream","cottage cheese","cream cheese","half and half","whipped cream","ghee","curd","paneer","mozzarella","cheddar","parmesan","feta","ricotta","gouda","brie","provolone"]},{key:"meat",name:"Meat & Seafood",emoji:"🥩",keywords:["chicken","beef","pork","fish","salmon","tuna","shrimp","turkey","lamb","meat","steak","bacon","sausage","ground","tilapia","cod","crab","lobster","scallop","clam","mussel","prawn","veal","brisket","ribs","wing","thigh","breast","drumstick","ham","pepperoni","salami","deli"]},{key:"bakery",name:"Bakery & Bread",emoji:"🧁",keywords:["bread","pita","bagel","tortilla","muffin","croissant","roll","loaf","bun","cake","cookie","donut","pastry","naan","flatbread","ciabatta","sourdough","brioche","biscuit","waffle","pancake","english muffin","wrap"]},{key:"frozen",name:"Frozen",emoji:"🧊",keywords:["frozen","ice cream","popsicle","freezer"]},{key:"canned",name:"Canned & Dry Goods",emoji:"🥫",keywords:["can","canned","beans","lentils","chickpeas","soup","broth","stock","tomato paste","tomato sauce","diced tomato","tuna can","sardine","coconut milk","evaporated milk","condensed milk","corn can","peas can","dried"]},{key:"snacks",name:"Snacks & Beverages",emoji:"🍿",keywords:["chips","crackers","popcorn","soda","juice","water","energy drink","gum","candy","snack","pretzel","granola bar","protein bar","trail mix","nuts","dried fruit","chocolate","cookie","tea","coffee","sparkling","kombucha","sports drink","seltzer","lemonade"]},{key:"cleaning",name:"Cleaning & Household",emoji:"🧹",keywords:["detergent","bleach","cleaner","dish soap","sponge","trash bag","paper towel","toilet paper","aluminum foil","plastic wrap","ziplock","ziploc","battery","light bulb","air freshener","laundry","fabric softener","dryer sheet","disinfectant","wipes","broom","mop"]},{key:"grains",name:"Grains, Pasta & Rice",emoji:"🌾",keywords:["rice","pasta","flour","oats","quinoa","cereal","grain","noodle","spaghetti","penne","macaroni","couscous","barley","bulgur","farro","polenta","cornmeal","breadcrumb","pancake mix","oatmeal","granola"]},{key:"pantry",name:"Pantry Staples",emoji:"🏺",keywords:["pantry","shelf stable","canned good","dry good","staple","baking mix","cooking oil","shortening","cornstarch","gelatin","yeast","cocoa","chocolate chip","powdered milk","evaporated","instant","bouillon","broth cube","stock cube"]},{key:"condiments",name:"Condiments & Sauces",emoji:"🫙",keywords:["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","olive oil","vinegar","sauce","condiment","dressing","salsa","bbq sauce","barbecue","teriyaki","sriracha","pesto","hummus","tahini","honey","jam","jelly","peanut butter","almond butter","nutella","syrup","marinade","relish","worcestershire","fish sauce","oyster sauce","chili paste","seasoning","spice","salt","pepper","cumin","paprika","cinnamon","oregano","thyme","turmeric","curry","chili powder","garlic powder","onion powder","baking soda","baking powder","vanilla","sugar","brown sugar","powdered sugar","olive","olives","black olive","green olive","caper","capers","pickle","pickles","gherkin","preserve","marmalade","herb","rosemary","sage","bay leaf","tarragon","chive"]},{key:"other",name:"Other",emoji:"🍳",keywords:[]}],Sy=[{label:"Produce",emojis:["🥦","🥕","🧅","🧄","🥔","🍅","🥑","🌽","🥒","🫑","🥬","🥗","🍎","🍊","🍋","🍇","🍓","🫐","🍌","🍑","🥭","🍍"]},{label:"Dairy & Eggs",emojis:["🥛","🧀","🥚","🧈","🍦","🫙"]},{label:"Meat & Seafood",emojis:["🥩","🍗","🥓","🌭","🍖","🐟","🦐","🦞","🦀","🦑"]},{label:"Bakery & Grains",emojis:["🍞","🥐","🥖","🫓","🥨","🧁","🎂","🍰","🌾","🍝","🍜","🍚","🍛"]},{label:"Beverages",emojis:["🥤","🧃","☕","🍵","🧋","🍺","🍷","🥂","💧","🫖"]},{label:"Condiments & Sauces",emojis:["🫙","🧂","🫒","🌶️","🍯","🥫"]},{label:"Snacks",emojis:["🍿","🍪","🍩","🍫","🍬","🍭","🥜","🌰","🥨","🍡"]},{label:"Frozen",emojis:["🧊","🍦","🧇","🥞"]},{label:"Personal Care",emojis:["🧴","🧼","🪥","💊","💉","🩹","🧻","🪒"]},{label:"Cleaning & Household",emojis:["🧹","🧺","🧽","🪣","🗑️","🧯","🔧","🏠"]},{label:"Cultural & Custom",emojis:["🌍","🕌","✡️","🍱","🥘","🫕","🌿","🎋","🏮","📁"]}];Sy.flatMap(t=>t.emojis);const wt="📁";let gs=null,xa=null;function Li(t){if(t.offCategory){const n=Kw(t.offCategory);if(n)return n}if(t.location==="freezer")return"frozen";const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of ts)if(n.key!=="other"){for(const i of n.keywords)if(e.includes(i))return n.key}return"other"}function dn(t){return t?Li({name:t,scanTitle:"",category:"",offCategory:""}):"other"}function Ps(){return d.cfg.customPrepCategories||[]}function er(){const t=Ps();if(!t.length)return ts;const e=ts.filter(n=>n.key!=="other");for(const n of t)if(e.push({key:n.key,name:n.name,emoji:n.emoji,keywords:[],isCustom:!0}),n.children&&n.children.length>0)for(const i of n.children)e.push({key:i.key,name:i.name,emoji:i.emoji,keywords:[],isCustom:!0,isSubCategory:!0,parentKey:n.key});return e.push(ts.find(n=>n.key==="other")),e}function an(t){if(!t)return{name:"Other",emoji:"🍳"};const e=ts.find(i=>i.key===t);if(e)return{name:e.name,emoji:e.emoji};const n=Ps().find(i=>i.key===t);return n?{name:n.name,emoji:n.emoji}:{name:"Other",emoji:"🍳"}}function Wt(t,e){const{name:n,emoji:i}=an(t);return`<div class="cat-badge" onclick="${e}">${i} ${n} ▼</div>`}function Xn(t,e){gs=e,xa=t;const n=u("catPickerBackdrop"),i=u("catPickerSheet");!n||!i||(tE(),n.classList.add("active"),i.classList.add("active"))}function su(){const t=u("catPickerBackdrop"),e=u("catPickerSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),gs=null,xa=null}function tE(){const t=u("catPickerBody");if(!t)return;const e=Ps();let n="";for(const i of ts){const s=i.key===xa;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
      <span class="cat-picker-emoji">${i.emoji}</span>
      <span class="cat-picker-name">${i.name}</span>
      ${s?'<span class="cat-picker-check">✓</span>':""}
    </div>`}if(e.length>0){n+='<div class="cat-picker-divider">Custom</div>';for(const i of e){const s=i.key===xa;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
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
  </div>`,t.innerHTML=n}function nE(t){gs&&gs(t),su()}let Ra=null,Xl=null;function tr(t,e,n){Pa(),Ra=n,Xl=e||wt;const i=document.createElement("div");i.id="emojiPickerPopup",i.className="emoji-picker-popup";let s="";for(const r of Sy){s+=`<div class="emoji-picker-group-label">${r.label}</div>`,s+='<div class="emoji-picker-grid">';for(const a of r.emojis)s+=`<button class="emoji-picker-cell${a===Xl?" emoji-picker-selected":""}" onclick="selectEmojiFromPicker('${a}')">${a}</button>`;s+="</div>"}i.innerHTML=s;const o=document.createElement("div");o.id="emojiPickerBackdrop",o.className="emoji-picker-backdrop",o.onclick=()=>Pa(),document.body.appendChild(o),document.body.appendChild(i),iE(i,t),requestAnimationFrame(()=>{o.classList.add("active"),i.classList.add("active")})}function iE(t,e){if(!e)return;const n=e.getBoundingClientRect(),i=window.innerWidth,s=Math.min(i-24,360);t.style.width=s+"px",t.style.left=Math.max(12,(i-s)/2)+"px",n.top>340+16?(t.style.bottom=window.innerHeight-n.top+8+"px",t.style.top="auto"):(t.style.top=n.bottom+8+"px",t.style.bottom="auto")}function sE(t){Ra&&Ra(t),Pa()}function Pa(){const t=document.getElementById("emojiPickerPopup"),e=document.getElementById("emojiPickerBackdrop");t&&t.remove(),e&&e.remove(),Ra=null,Xl=null}let ys=wt;function oE(){const t=u("catPickerCreateSection"),e=u("catPickerCreateForm");t&&(t.style.display="none"),e&&(e.style.display="block"),setTimeout(()=>{const n=u("catCreateName");n&&n.focus()},100),ys=wt}function rE(t){tr(t,ys,e=>{ys=e;const n=u("catCreateEmojiBtn");n&&(n.textContent=e)})}function aE(t,e){ys=e,document.querySelectorAll(".cat-emoji-btn").forEach(n=>n.classList.remove("cat-emoji-selected")),t&&t.classList.add("cat-emoji-selected")}async function cE(){const t=u("catCreateName"),e=t?t.value.trim():"";if(!e){_("Please enter a category name");return}const n="custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),i={key:n,name:e,emoji:ys},s=d.cfg.customPrepCategories||[];d.cfg.customPrepCategories=[...s,i];try{await j(`households/${d.hid}/settings/config`,d.cfg),_(`${ys} ${e} category created!`)}catch(o){console.error("Failed to save custom category:",o),_("Failed to save category");return}gs&&(gs(n),su())}async function Ey(t){const e=d.cfg.customPrepCategories||[],n=e.find(i=>i.key===t);if(n&&confirm(`Delete "${n.name}" category? Items will move to Other.`)){d.cfg.customPrepCategories=e.filter(i=>i.key!==t);for(const i of d.inv)i.prepCategory===t&&(i.prepCategory="other",ee(i));for(const i of d.shop)i.prepCategory===t&&(i.prepCategory="other",Ne(i));try{await j(`households/${d.hid}/settings/config`,d.cfg),_(`"${n.name}" category deleted`)}catch(i){console.error("Failed to delete custom category:",i),_("Failed to delete category")}}}async function Ay(t,e,n){const s=(d.cfg.customPrepCategories||[]).find(o=>o.key===t);if(s){e&&(s.name=e),n&&(s.emoji=n);try{await j(`households/${d.hid}/settings/config`,d.cfg),_("Category updated")}catch(o){console.error("Failed to rename custom category:",o)}}}async function lE(t,e){const n=d.shop.find(i=>i.id===t);n&&await Ne({...n,prepCategory:e})}async function xy(t,e){const n=d.inv.find(i=>i.id===t);n&&await ee({...n,prepCategory:e})}async function dE(t,e,n){const s=(d.cfg.customPrepCategories||[]).find(a=>a.key===t);if(!s){_("Parent category not found");return}const r={key:t+"-sub-"+Date.now(),name:e,emoji:n};s.children||(s.children=[]),s.children.push(r);try{await j(`households/${d.hid}/settings/config`,d.cfg),_(`Sub-category "${e}" added`)}catch(a){console.error("Failed to add sub-category:",a),_("Failed to add sub-category")}}async function uE(t,e){const n=d.cfg.customPrepCategories||[],i=n.findIndex(o=>o.key===t);if(i<0)return;const s=i+e;if(!(s<0||s>=n.length)){[n[i],n[s]]=[n[s],n[i]];try{await j(`households/${d.hid}/settings/config`,d.cfg),_("Category reordered")}catch(o){console.error("Failed to reorder category:",o)}}}async function hE(t,e){if(!t||!e||!d.hid)return;const n=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");if(n)try{await j(`households/${d.hid}/productPreferences/${n}`,{prepCategory:e,updatedAt:new Date().toISOString()})}catch(i){console.error("Failed to save product category preference:",i)}}function pE(t){if(!t)return null;const e=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");return d.productPrefs&&d.productPrefs[e]&&d.productPrefs[e].prepCategory||null}function fc(){return d.inv.filter(t=>!(t.prepCategory||pE(t.name)))}async function Ry(t,e){const n=d.inv.find(i=>i.id===t);n&&(await ee({...n,prepCategory:e}),await hE(n.name,e))}const nr=["Bag","Bar","Bottle","Box","Bucket","Bunch","Can","Carton","Clove","Container","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf","Oz","Pack","Piece","Pound","Roll","Tube","Unit"];let Zl=!1;function fE(t){if(Zl)return;Zl=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function mE(){Zl=!1}function gE(t){if(!t.brand)return!1;if(t.source==="scan"||t.source==="Barcode")return!0;if(t.source==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}function yE(t){fd(t);const e=rt(t.expiry),n=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=t.restockThreshold!=null?t.restockThreshold:ar(t.unit),o=!t.doNotRestock&&typeof t.qty=="number"&&t.qty<=s&&t.qty>0,r=o?" low-stock":"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
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
          <div class="iqt">${tn(t.qty)}${o?'<span class="low-stock-dot" title="Running low"></span>':""}</div>
          <div class="iun">${pd(t.unit||"Unit",t.qty)}</div>
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
  </div>`}function vE(){}let li="";function wE(){const t=u("inv-search");li=t?t.value.trim().toLowerCase():"",Gn()}function bE(t,e){return e?[t.scanTitle||"",t.name||"",t.brand||"",t.note||"",t.location||"",t.unit||""].join(" ").toLowerCase().includes(e):!0}function _E(){const t=u("expiryTimeline");if(!t)return;const e=d.inv.filter(n=>n.expiry).sort((n,i)=>new Date(n.expiry)-new Date(i.expiry));if(!e.length){t.style.display="none",t.innerHTML="";return}t.style.display="flex",t.innerHTML=e.map(n=>{const i=rt(n.expiry),s=i?i.c==="expired"?"exp-tl-red":i.c==="expiring"?"exp-tl-amber":"exp-tl-green":"exp-tl-green",o=i?i.l:"";return`<div class="exp-tl-item" onclick="openInvItemDetail('${n.id}')">
      <div class="exp-tl-dot ${s}"></div>
      <div class="exp-tl-name">${Z(n.scanTitle||n.name)}</div>
      <div class="exp-tl-date">${o}</div>
    </div>`}).join("")}function Gn(){var o;const t=(r,a)=>(r.scanTitle||r.name).localeCompare(a.scanTitle||a.name,void 0,{sensitivity:"base"});let e;li?e=d.inv.filter(r=>bE(r,li)).sort(t):e=d.it==="all"?d.inv.slice().sort(t):d.inv.filter(r=>r.location===d.it).sort(t);const n=u("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};li?n&&(n.textContent=e.length+" result"+(e.length!==1?"s":"")):n&&(n.textContent=e.length+" "+(i[d.it]||"items")),ov();const s=u("ibody");if(s){if(!e.length){const r=d.it!=="all"||li,a=li?`No items matching "${li}"`:r?`Nothing in your ${((o=i[d.it])==null?void 0:o.replace(" items",""))||"filter"} yet.`:"Your pantry is waiting to be filled.";s.innerHTML=`<div class="es"><div class="ei">🍳</div><p>${a}<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item above to get started</span></p></div>`;return}s.innerHTML=`<div class="ilst">${e.map(yE).join("")}</div>`,d.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),d.selectedIds.has(r.dataset.id)&&r.classList.add("selected")}),fE(s),_E(),lu()}}function kE(t){Zn(t)}async function Zn(t){if(d.selectMode)return;const e=d.inv.find(B=>B.id===t);if(!e)return;const n=u("invItemDetailContent");if(!n)return;const i=fd(e),s=`<div class="item-detail-img-ph" onclick="changeInvEmoji('${e.id}', this)" title="Tap to change emoji">
    <div style="font-size:1.6rem">${i}</div>
  </div>`,o="",r=gE(e),a=e.unit||"Unit",l=nr.map(B=>`<option value="${B}"${B===a?" selected":""}>${B}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:ar(a),f=rt(e.expiry),g=e.scanTitle||e.name,w=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let k=`<div class="item-detail-header">
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
  </div>`;const E=e.prepCategory||Li(e);k+=Wt(E,`changeInvCategory('${e.id}')`),k+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:$,frac:P}=as(e.qty);k+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${$}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${bl(`inv-frac-${e.id}`,P).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
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
  </div>`;const{whole:O,frac:M}=as(h);k+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-thresh-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${O}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${bl(`inv-threshfrac-${e.id}`,M).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,k+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,k+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,n.innerHTML=k;const N=u("invItemDetailBackdrop"),D=u("invItemDetailSheet");N&&N.classList.add("active"),D&&D.classList.add("active")}function ou(){const t=u("invItemDetailBackdrop"),e=u("invItemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function TE(t){}function CE(t){}async function IE(t){}async function SE(t){d.inv.find(e=>e.id===t),ou(),ue("adj"),window.deleteWithUndo?window.deleteWithUndo(t,"inv",{onCommit:e=>{const n=rt(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&I0(e.name)}}):(await Go(t),_("Item removed"))}async function EE(t,e){const n=d.inv.find(i=>i.id===d.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await ee({...n,location:t}),uu(n.name,t))}async function AE(t){const e=d.inv.find(i=>i.id===d.adjId);if(!e)return;const n=Math.max(0,(e.qty||1)+t);n<=0||(u("adjqty").value=n,await ee({...e,qty:n}))}async function xE(){const t=d.inv.find(n=>n.id===d.adjId);if(!t)return;const e=parseInt(u("adjqty").value);!isNaN(e)&&e>=0&&await ee({...t,qty:e})}async function RE(){const t=d.inv.find(e=>e.id===d.adjId);t&&await ee({...t,expiry:u("adjexp").value||null})}async function PE(){const t=d.inv.find(n=>n.id===d.adjId);if(!t)return;const e=(u("adjnote").value||"").trim();await ee({...t,note:e||null})}async function $E(){const t=d.inv.find(i=>i.id===d.adjId);if(!t)return;const e=u("adjunit").value;await ee({...t,unit:e}),hu(t.name,e);const n=d.shop.find(i=>i.name.toLowerCase().trim()===t.name.toLowerCase().trim());n&&await Ne({...n,unit:e}),_("Unit updated everywhere",2e3)}async function LE(t){const e=d.inv.find(s=>s.id===d.adjId);if(!e)return;const n=e.restockThreshold!=null?e.restockThreshold:ar(e.unit),i=Math.max(0,n+t);u("adjlowthresh").value=i,await ee({...e,restockThreshold:i})}async function DE(){const t=d.inv.find(n=>n.id===d.adjId);if(!t)return;const e=parseInt(u("adjlowthresh").value);!isNaN(e)&&e>=0&&await ee({...t,restockThreshold:e})}async function NE(){var n;const t=d.inv.find(i=>i.id===d.adjId);if(!t)return;const e=((n=u("adjdonotrestock"))==null?void 0:n.checked)||!1;await ee({...t,doNotRestock:e})}async function ME(t,e){const n=d.inv.find(o=>o.id===t);if(!n)return;const i={...n,unit:e};n.restockThreshold==null,await ee(i),hu(n.name,e);const s=d.shop.find(o=>o.name.toLowerCase().trim()===n.name.toLowerCase().trim());s&&await Ne({...s,unit:e}),_("Unit updated everywhere",2e3),Zn(t)}async function OE(t,e){const n=d.inv.find(h=>h.id===t);if(!n)return;const i=u(`inv-thresh-${t}`),s=u(`inv-threshfrac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,a=Math.max(0,o+e),l=a+r;i&&(i.value=a),await ee({...n,restockThreshold:Math.max(0,l)})}async function VE(t){const e=d.inv.find(r=>r.id===t);if(!e)return;const n=u(`inv-thresh-${t}`),i=u(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await ee({...e,restockThreshold:Math.max(0,s+o)})}async function UE(t){const e=d.inv.find(r=>r.id===t);if(!e)return;const n=u(`inv-thresh-${t}`),i=u(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0;await ee({...e,restockThreshold:Math.max(0,s+o)})}async function FE(t,e){const n=d.inv.find(i=>i.id===t);n&&await ee({...n,doNotRestock:e})}async function jE(t,e,n){const i=d.inv.find(o=>o.id===t);if(!i)return;const s=u("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(o=>o.classList.remove("sel")),n&&n.classList.add("sel"),await ee({...i,location:e}),uu(i.name,e)}async function BE(t,e){const n=d.inv.find(h=>h.id===t);if(!n)return;const i=u(`inv-qty-${t}`),s=u(`inv-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,a=Math.max(0,Math.min(99,o+e)),l=ot(a,r);e<0&&ot(o,r)<=.25||(i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),a===0&&r===0&&s&&(s.value="0.25"),await ee({...n,qty:l}))}async function HE(t){const e=d.inv.find(a=>a.id===t);if(!e)return;const n=u(`inv-qty-${t}`),i=u(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=ot(s,o);await ee({...e,qty:r})}async function zE(t){const e=d.inv.find(a=>a.id===t);if(!e)return;const n=u(`inv-qty-${t}`),i=u(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=ot(s,o);o===0&&s===0&&n&&(n.value=1),await ee({...e,qty:r})}async function qE(t){const e=d.inv.find(i=>i.id===t);if(!e)return;const n=u(`inv-expiry-${t}`);await ee({...e,expiry:(n==null?void 0:n.value)||null})}async function WE(t){const e=d.inv.find(n=>n.id===t);e&&(await ee({...e,expiry:null}),Zn(t))}async function GE(t){const e=d.inv.find(i=>i.id===t);if(!e)return;const n=new Date().toISOString().split("T")[0];await ee({...e,expiry:n}),Zn(t)}async function KE(t){const e=d.inv.find(s=>s.id===t);if(!e)return;const n=u(`inv-note-${t}`),i=((n==null?void 0:n.value)||"").trim();await ee({...e,note:i||null})}function ru(t){const e=u(`inv-detail-display-${t}`),n=u(`inv-detail-edit-${t}`),i=u(`inv-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function au(t){const e=d.inv.find(a=>a.id===t);if(!e)return;const n=u(`inv-detail-name-input-${t}`),i=u(`inv-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await ee(r),e.barcode&&d.hid&&await ZE(e.barcode,s),_("✓ Name updated"),Zn(t)}function QE(t){ru(t)}async function JE(t){await au(t)}function YE(t){ru(t)}async function XE(t){await au(t)}async function ZE(t,e){if(!d.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${d.hid}/customProducts/barcode_${n}`;await j(i,{correctedName:e,updatedAt:new Date().toISOString()})}function eA(t){d.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=u("itab-"+t);e&&e.classList.add("active"),Gn()}async function tA(){const t=u("man").value.trim();if(!t)return;const e=u("mac").value,n=u("mau").value.trim()||"unit",i=Math.max(1,parseInt(u("maq").value)||1),s=u("mae").value||null,o="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await ee({id:o,barcode:o,name:t,brand:"",unit:n,qty:i,location:d.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),u("man").value="",u("maq").value=1,u("mae").value="",u("mabtn").disabled=!0,_(`${t} added!`),ue("madd"),mu()}function nA(){u("mabtn").disabled=!u("man").value.trim()}function iA(t){const e=u("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function sA(t,e){d.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function oA(){const t=u("imptxt").value.trim();if(!t)return;let e=0,n=0,i="pantry";for(const s of t.split(`
`)){const o=s.toLowerCase();o.includes("fridge")?i="fridge":o.includes("freezer")?i="freezer":o.includes("pantry")&&(i="pantry");const r=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),a=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,f;if(r?(l=r[1].trim(),h=parseFloat(r[2]),f=r[3].trim()):a&&(l=a[1].trim(),h=parseFloat(a[2]),f=(a[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=d.inv.find(k=>k.id===g);await ee({id:g,barcode:g,name:l,brand:"",unit:f||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?n++:e++}}u("imptxt").value="",_(`Imported ${e} new, updated ${n}`),ue("import")}let Xr=null,mc="fridge",Je=null,Zr=!1,ao="",ea=!1;function Py(){const t=u("invAddBackdrop"),e=u("invAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),mc="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(o=>o.classList.remove("sel"));const n=u("invAddLoc-fridge");n&&n.classList.add("sel"),aA();const i=u("invAddCatBadge");i&&(i.style.display="none",i.innerHTML="");const s=u("invAddCatKey");s&&(s.value="",s.dataset.manual=""),setTimeout(()=>{const o=u("invi");o&&(o.value="",o.focus())},150)}function ir(){const t=u("invAddBackdrop"),e=u("invAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),cu()}let go=1;function rA(){const t=u("invQtyFrac");t&&(t.innerHTML=Ts.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=u("invQtyUnit");e&&(e.innerHTML=nr.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function aA(){go=1;const t=u("invQtyVal");t&&(t.textContent="1");const e=u("invQtyFrac");e&&(e.value="0");const n=u("invQtyUnit");n&&(n.value="Unit")}function cA(t){go=Math.max(1,Math.min(99,go+t));const e=u("invQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=go)}function lA(){const t=u("invQtyFrac");t&&parseFloat(t.value)}function $y(){const t=u("invQtyFrac"),e=u("invQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:ot(go,n),unit:i}}function dA(){ir(),window.openScanForInventory&&window.openScanForInventory()}function uA(){ir(),Dy()}function hA(t,e){mc=t,document.querySelectorAll("#invAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function pA(){const t=u("invAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=u("invAddNoteInp");n&&n.focus()}}async function fA(){const t=u("invi"),e=t?t.value.trim():"";if(!e)return;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=$y(),a=i||r.qty,l=u("invAddNoteInp"),h=l?l.value.trim():"",f=await sr(n),g=(f==null?void 0:f.preferredLocation)||mc,w=r.unit!=="Unit"?r.unit:(f==null?void 0:f.preferredUnit)||"unit",k="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),E=u("invAddCatKey"),$=E&&E.value||dn(n),P={id:k,barcode:k,name:n,brand:"",unit:w,qty:a,location:g,category:Uo({name:n}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:$};h&&(P.note=h),ee(P),_(`${n} added!`),t&&(t.value=""),l&&(l.value="");const O=u("invAddNoteWrap");O&&(O.style.display="none"),cu(),ir(),mu()}function mA(){const t=u("invi");t&&Ga(t),gA(t?t.value.trim():"")}function gA(t){const e=u("invAddCatBadge"),n=u("invAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=dn(t);e.innerHTML=Wt(i,"openInvAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function yA(){const t=u("invAddCatKey"),e=t?t.value:"other";Xn(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=u("invAddCatBadge");i&&(i.innerHTML=Wt(n,"openInvAddCatPicker()"))})}function vA(t){const e=d.inv.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||Li(e);Xn(n,async i=>{await xy(t,i),Zn(t);const{name:s}=an(i);_(`Category: ${s}`)})}function wA(t,e){const n=d.inv.find(s=>s.id===t);if(!n)return;const i=fd(n);tr(e,i,async s=>{n.customEmoji=s,await ee(n),Zn(t),_(`Emoji: ${s}`)})}async function bA(t){if(!Xr||!Xr[t])return;const e=Xr[t],n=u("invAddNoteInp"),i=n?n.value.trim():"",s=$y(),o=await sr(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),a=s.unit!=="Unit"?s.unit:(o==null?void 0:o.preferredUnit)||"unit",l={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:a,qty:s.qty,location:(o==null?void 0:o.preferredLocation)||mc,category:e.category||Uo({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(l.note=i),ee(l),_(`Added "${e.name}" ✓`);const h=u("invi");h&&(h.value=""),n&&(n.value="");const f=u("invAddNoteWrap");f&&(f.style.display="none"),cu(),ir()}function cu(){Xr=null;const t=u("invSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}function _A(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=u("invAddMicOpt");e&&(e.style.display="")}function ed(t){const e=u("inv-micstatus");e&&e.classList.toggle("visible",t)}function Ly(){if(Je){try{Je.abort()}catch{}Je=null}Zr=!1,ao="",ea=!1,ed(!1)}function Dy(){if(Zr&&Je){ea=!0,Je.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){_("Voice input not supported");return}Je=new t,Je.lang="en-US",Je.interimResults=!0,Je.maxAlternatives=1,Je.continuous=!1,ao="",Zr=!0,ed(!0),Je.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?ao+=o:n+=o}const i=u("invi");i&&(i.value=(ao+n).trim())},Je.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&_("Couldn't hear that — try again")},Je.onend=async()=>{Zr=!1,ed(!1),Je=null;let e=ao.trim();if(!e&&ea){const s=u("invi");e=s?s.value.trim():""}if(ea=!1,!e)return;const n=cm(e);for(const{name:s}of n){const o=await sr(s),r="itm-"+s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),a=(o==null?void 0:o.preferredLocation)||ha(s);ee({id:r,barcode:r,name:s,brand:"",unit:(o==null?void 0:o.preferredUnit)||"unit",qty:1,location:a,category:Uo({name:s}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),mu()}if(n.length>1)_(`Added ${n.length} items 🎤`);else{const s=ha(n[0].name);_(`Added "${n[0].name}" to ${s}`)}const i=u("invi");i&&(i.value="")},Je.start()}async function kA(t){const e=d.inv.find(i=>i.id===t);if(!e)return;(await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`),ou()}function lu(){const t=fc(),e=u("inv-cat-review-btn"),n=u("inv-cat-review-count");e&&(e.style.display=t.length>0?"inline-flex":"none"),n&&(n.textContent=t.length)}function TA(){const t=u("cat-review-body");if(!t)return;const e=fc();if(!e.length){t.innerHTML=`<div class="es" style="padding:40px 20px"><div class="ei">✅</div>
      <p>All items have confirmed categories!</p></div>`,qe("catreview");return}let n=`<div style="padding:0 0 8px;font-size:.82rem;color:var(--mt)">
    Confirm or change the auto-suggested category for each item.
    Once confirmed, future additions of the same product will auto-categorize.
  </div>`;for(const i of e){const s=Li(i),{name:o,emoji:r}=an(s),a=Z(i.scanTitle||i.name);n+=`<div class="cat-review-row" id="cat-review-${i.id}">
      <div class="cat-review-info">
        <div class="cat-review-name">${a}</div>
        <div class="cat-review-suggestion">${r} ${o}</div>
      </div>
      <div class="cat-review-actions">
        <button class="btn bp bsm" onclick="confirmCatReview('${i.id}','${s}')">Confirm</button>
        <button class="btn bs bsm" onclick="changeCatReview('${i.id}')">Change</button>
      </div>
    </div>`}t.innerHTML=n,qe("catreview")}function du(){ue("catreview"),Gn()}async function CA(t,e){await Ry(t,e);const n=u(`cat-review-${t}`);n&&(n.style.transition="opacity .3s, max-height .3s",n.style.opacity="0",n.style.maxHeight="0",n.style.overflow="hidden",setTimeout(()=>n.remove(),300)),lu(),fc().length===0&&(_("All categories confirmed!"),setTimeout(()=>du(),600))}function IA(t){const e=d.inv.find(i=>i.id===t);if(!e)return;const n=Li(e);Xn(n,async i=>{await Ry(t,i);const s=u(`cat-review-${t}`);s&&(s.style.transition="opacity .3s, max-height .3s",s.style.opacity="0",s.style.maxHeight="0",s.style.overflow="hidden",setTimeout(()=>s.remove(),300)),lu(),fc().length===0&&(_("All categories confirmed!"),setTimeout(()=>du(),600))})}function Ny(t){return t?t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function sr(t){if(!d.hid||!t)return null;const e=Ny(t);if(!e)return null;try{return await W(`households/${d.hid}/productPreferences/${e}`)||null}catch{return null}}async function My(t,e){if(!d.hid||!t)return;const n=Ny(t);if(n)try{const i=await W(`households/${d.hid}/productPreferences/${n}`)||{};j(`households/${d.hid}/productPreferences/${n}`,{...i,...e,productName:t.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function uu(t,e){e&&My(t,{preferredLocation:e})}function hu(t,e){e&&My(t,{preferredUnit:e})}function hl(t){return t?t.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function Oe(t){const e=hl(t.name),n=d.shop.find(o=>!o.checked&&hl(o.name)===e);if(!n){const o=d.inv.find(r=>hl(r.name)===e);if(o){const r=o.restockThreshold!=null?o.restockThreshold:lb(o.unit);if(o.qty>r){const a=o.qty+(o.unit?" "+o.unit:"");if(!confirm(`You already have ${o.name} in Supplies (${a}). Add to shopping list anyway?`))return{action:"skipped",item:t}}}return await Ne(t),{action:"new",item:t}}const i=(n.unit||"").trim().toLowerCase(),s=(t.unit||"").trim().toLowerCase();if(i===s){const o=(n.qty||1)+(t.qty||1),r=n.note||t.note||"",a={...n,qty:o};return r&&(a.note=r),await Ne(a),{action:"consolidated",item:a,addedQty:t.qty||1}}else{const o=`${tn(n.qty||1)} ${n.unit||"unit"}`,r=`${tn(t.qty||1)} ${t.unit||"unit"}`,a=n.consolidatedAmounts?`${n.consolidatedAmounts} + ${r}`:`${o} + ${r}`;return await Ne({...n,consolidatedAmounts:a}),{action:"consolidated-mixed",item:n}}}let Ye=null,ta=!1,Bi="",na=!1;function SA(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=u("shopAddMicOpt");e&&(e.style.display="")}function td(t){const e=u("micstatus");e&&e.classList.toggle("visible",t)}function Oy(){if(Ye){try{Ye.abort()}catch{}Ye=null}ta=!1,Bi="",na=!1,td(!1)}function Vy(){if(ta&&Ye){na=!0,Ye.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){_("Voice input not supported");return}Ye=new t,Ye.lang="en-US",Ye.interimResults=!0,Ye.maxAlternatives=1,Ye.continuous=!1,Bi="",ta=!0,td(!0),Ye.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?Bi+=o:n+=o}const i=u("shi");i&&(i.value=(Bi+n).trim())},Ye.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&_("Couldn't hear that — try again")},Ye.onend=()=>{let e=(Bi||"").trim();if(!e&&na){const n=u("shi");e=n?n.value.trim():""}if(ta=!1,Ye=null,Bi="",na=!1,td(!1),e){const n=cm(e);if(n.length>1)EA(n);else{const{name:s,qty:o}=n[0],r={id:Date.now().toString(),name:s,qty:o,checked:!1,src:"manual"};Oe(r),_(`Added "${s}" 🎤`)}const i=u("shi");i&&(i.value="")}},Ye.start()}function EA(t){pu=t;const e=u("voiceConfirmBackdrop"),n=u("voiceConfirmSheet");if(!e||!n){t.forEach(({name:o,qty:r})=>{Oe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:o,qty:r,checked:!1,src:"manual"})}),_(`Added ${t.length} items 🎤`);return}const i=u("voiceConfirmList");i&&(i.innerHTML=t.map((o,r)=>`
      <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--b1);cursor:pointer">
        <input type="checkbox" checked data-vi="${r}" style="width:20px;height:20px;accent-color:var(--ac)"/>
        <span style="flex:1;font-size:.92rem;color:var(--tx)">${Z(o.name)}</span>
        ${o.qty>1?`<span style="font-size:.78rem;color:var(--mt)">×${o.qty}</span>`:""}
      </label>
    `).join(""));const s=u("voiceConfirmCount");s&&(s.textContent=`Adding ${t.length} items:`),e.classList.add("active"),n.classList.add("active")}let pu=[];async function AA(){const n=[...document.querySelectorAll("#voiceConfirmList input[type=checkbox]:checked")].map(i=>parseInt(i.dataset.vi,10)).map(i=>pu[i]).filter(Boolean);for(const{name:i,qty:s}of n)await Oe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:i,qty:s,checked:!1,src:"manual"});_(`Added ${n.length} item${n.length>1?"s":""} 🎤`),Uy()}function Uy(){pu=[];const t=u("voiceConfirmBackdrop"),e=u("voiceConfirmSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function xA(t){if(!t.brand)return!1;if(t.src==="scan")return!0;if(t.src==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}let ia=new Set;function RA(){if(ia=new Set,!tt.length&&!Ht.length)return;const t=(d.shop||[]).filter(e=>!e.checked);if(t.length)for(const e of t){const n=rr(e.name);if(!n.length)continue;if(tt.some(o=>Xy(o,n))){ia.add(e.id);continue}Ht.some(o=>Jy(o,n))&&ia.add(e.id)}}function pl(t){const e=t.qty||1,n=t.unit||"Unit";let i,s;return t.consolidatedAmounts?(i=t.consolidatedAmounts,s=""):(i=tn(e),s=pd(n,e)),`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
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
        ${ia.has(t.id)?`<div class="deal-badge" onclick="event.stopPropagation();setSHT('deals')">💰 Deal</div>`:""}
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
  </div>`}function Si(){RA();const t=(l,h)=>(l.scanTitle||l.name).localeCompare(h.scanTitle||h.name,void 0,{sensitivity:"base"}),e=u("shlist"),n=d.shop.filter(l=>!l.checked).sort(t),i=d.shop.filter(l=>l.checked).sort(t),s=u("clrchk");s&&(s.style.display=i.length?"block":"none");const o=u("shsub");if(o&&(o.textContent=n.length+" items to buy"),!e)return;if(!d.shop.length){e.innerHTML='<div class="es"><div class="ei">🥑</div><p>Your list is clear — enjoy the peace.<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item or ask Claude to build one</span></p></div>';return}const r=localStorage.getItem("ks-shop-done-collapsed")==="1",a=i.length?`<div class="done-section-hdr" onclick="toggleShopDone()">
    Done <span class="done-count">${i.length}</span>
    <button class="clear-done-btn" onclick="event.stopPropagation();clrChk()">Clear all</button>
  </div>
  <div class="done-section-body${r?" collapsed":""}" id="shopDoneBody">${i.map(pl).join("")}</div>`:"";if(d.aisleMode&&n.length){const l={};n.forEach(g=>{const w=sb(g.name);l[w]||(l[w]=[]),l[w].push(g)});const h=rb(d.cfg.favouriteStore);let f;h?f=Object.entries(l).sort(([g],[w])=>{const k=h.indexOf(g),E=h.indexOf(w);return(k===-1?999:k)-(E===-1?999:E)}):f=Object.entries(l).sort(),e.innerHTML=f.map(([g,w])=>`<div class="aisle-divider">
        <span class="aisle-icon">${Gw[g]||"📦"}</span>
        <span class="aisle-name">${g}</span>
        <span class="aisle-count">${w.length}</span>
      </div>${w.map(pl).join("")}`).join("")+a}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(pl).join("")}`:"")+a;if(d.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(h=>{h.classList.add("selecting"),d.selectedIds.has(h.dataset.id)&&h.classList.add("selected")});const l=document.querySelector(".shbody");l&&(l.style.paddingLeft="52px")}$A(e)}function PA(){const t=u("shopDoneBody");if(!t)return;const e=t.classList.toggle("collapsed");localStorage.setItem("ks-shop-done-collapsed",e?"1":"0")}let nd=!1;function $A(t){if(nd)return;nd=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function LA(){nd=!1}function DA(){const t=u("shi"),e=t.value.trim();if(!e)return;if(ns&&ns.length===1){By(0);return}let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=jy(),a=i||r.qty,l=r.unit,h=u("addNoteInp"),f=h?h.value.trim():"",g={id:Date.now().toString(),name:n,qty:a,unit:l,checked:!1,src:"manual"};f&&(g.note=f);const w=u("shopAddCatKey");g.prepCategory=w&&w.value||dn(n),Oe(g),t.value="",h&&(h.value="");const k=u("addNoteWrap");k&&(k.style.display="none"),fu(),or()}function NA(){const t=u("addNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=u("addNoteInp");n&&n.focus()}}function Fy(){const t=u("shopAddBackdrop"),e=u("shopAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),OA();const n=u("shopAddCatBadge");n&&(n.style.display="none",n.innerHTML="");const i=u("shopAddCatKey");i&&(i.value="",i.dataset.manual=""),setTimeout(()=>{const s=u("shi");s&&(s.value="",s.focus())},150)}function or(){const t=u("shopAddBackdrop"),e=u("shopAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),fu()}let yo=1;function MA(){const t=u("shopQtyFrac");t&&(t.innerHTML=Ts.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=u("shopQtyUnit");e&&(e.innerHTML=nr.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function OA(){yo=1;const t=u("shopQtyVal");t&&(t.textContent="1");const e=u("shopQtyFrac");e&&(e.value="0");const n=u("shopQtyUnit");n&&(n.value="Unit")}function VA(t){yo=Math.max(1,Math.min(99,yo+t));const e=u("shopQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=yo)}function UA(){const t=u("shopQtyFrac");t&&parseFloat(t.value)}function jy(){const t=u("shopQtyFrac"),e=u("shopQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:ot(yo,n),unit:i}}function FA(){or(),window.openScanForList&&window.openScanForList()}function jA(){or(),Vy()}let ns=null;function BA(){const t=u("shi");t&&Ga(t),HA(t?t.value.trim():"")}function HA(t){const e=u("shopAddCatBadge"),n=u("shopAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=dn(t),{emoji:s,name:o}=an(i);e.innerHTML=Wt(i,"openShopAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function zA(){const t=u("shopAddCatKey"),e=t?t.value:"other";Xn(e,n=>{t&&(t.value=n,t.dataset.manual="true");const{emoji:i,name:s}=an(n),o=u("shopAddCatBadge");o&&(o.innerHTML=Wt(n,"openShopAddCatPicker()"))})}function qA(t){const e=d.shop.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||dn(e.name);Xn(n,async i=>{await lE(t,i),gc(t);const{name:s}=an(i);_(`Category: ${s}`)})}function By(t){if(!ns||!ns[t])return;const e=ns[t],n=u("addNoteInp"),i=n?n.value.trim():"",s=u("shi")?u("shi").value.trim():"",o=jy(),r={id:Date.now().toString(),name:e.name,qty:o.qty,unit:o.unit,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),Oe(r),_(`Added "${e.name}" ✓`);const a=u("shi");a&&(a.value=""),n&&(n.value="");const l=u("addNoteWrap");l&&(l.style.display="none"),fu(),or()}function fu(){ns=null;const t=u("shopSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}async function mu(t,e,n){}function Hy(){const t=u("enrichBackdrop"),e=u("enrichSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function gc(t){if(d.selectMode)return;event&&event.stopPropagation();const e=d.shop.find(E=>E.id===t);if(!e)return;const n=u("itemDetailContent");if(!n)return;const i=xA(e),s=e.scanTitle||e.name,o=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let r=`<div class="item-detail-header">
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
  </div>`;const a=e.prepCategory||dn(e.name);r+=Wt(a,`changeShopCategory('${e.id}')`);const l=e.qty||1,h=e.unit||"Unit",{whole:f,frac:g}=as(l);r+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="shop-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${f}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${bl(`shop-frac-${e.id}`,g).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeShopUnit('${e.id}',this.value)">
        ${nr.map(E=>`<option value="${E}"${E===h?" selected":""}>${E}</option>`).join("")}
      </select>
    </div>
  </div>`,e.note&&(r+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),r+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',n.innerHTML=r;const w=u("itemDetailBackdrop"),k=u("itemDetailSheet");w&&w.classList.add("active"),k&&k.classList.add("active")}function WA(){const t=u("itemDetailBackdrop"),e=u("itemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function GA(t,e){const n=d.shop.find(s=>s.id===t);if(!n)return;await Ne({...n,unit:e}),hu(n.name,e);const i=d.inv.find(s=>s.name.toLowerCase().trim()===n.name.toLowerCase().trim());i&&await ee({...i,unit:e}),_("Unit updated everywhere",2e3),gc(t)}async function KA(t,e){const n=d.shop.find(h=>h.id===t);if(!n)return;const i=u(`shop-qty-${t}`),s=u(`shop-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0;if(e<0&&ot(o,r)<=.25)return;const a=Math.max(0,Math.min(99,o+e)),l=ot(a,r);i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),a===0&&r===0&&s&&(s.value="0.25"),await Ne({...n,qty:l})}async function QA(t){const e=d.shop.find(a=>a.id===t);if(!e)return;const n=u(`shop-qty-${t}`),i=u(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=ot(s,o);r!==(e.qty||1)&&await Ne({...e,qty:r})}async function JA(t){const e=d.shop.find(a=>a.id===t);if(!e)return;const n=u(`shop-qty-${t}`),i=u(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=ot(s,o);o===0&&s===0&&n&&(n.value=1),await Ne({...e,qty:r})}function gu(t){const e=u(`shop-detail-display-${t}`),n=u(`shop-detail-edit-${t}`),i=u(`shop-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function yu(t){const e=d.shop.find(a=>a.id===t);if(!e)return;const n=u(`shop-detail-name-input-${t}`),i=u(`shop-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await Ne(r),e.barcode&&d.hid&&await tx(e.barcode,s),_("✓ Name updated"),gc(t)}function YA(t){gu(t)}async function XA(t){await yu(t)}function ZA(t){gu(t)}async function ex(t){await yu(t)}async function tx(t,e){if(!d.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${d.hid}/customProducts/barcode_${n}`;await j(i,{correctedName:e,updatedAt:new Date().toISOString()})}async function nx(t){}function ix(t){}async function sx(t){}function ox(t){const e=window._enrichCtx;if(!e)return;const n=e.results[t];if(n){if(e.list==="shop"){const i=d.shop.find(s=>s.id===e.itemId);i&&Ne({...i,name:n.name,brand:n.brand||"",category:n.category||"",source:n.source||"search"})}else if(e.list==="inv"){const i=d.inv.find(s=>s.id===e.itemId);i&&ee({...i,name:n.name,brand:n.brand||"",category:n.category||i.category,source:n.source||"search"})}Hy(),_(`Updated with "${n.name}" ✓`)}}function zy(t){if(!d.hid||!t)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);j(`households/${d.hid}/completed_items/${e}`,{name:t,completedAt:new Date().toISOString()}).catch(n=>console.warn("recordCompleted error:",n))}function rx(t){const e=d.shop.find(i=>i.id===t);if(!e)return;const n=!e.checked;Ne({...e,checked:n}),n&&zy(e.name),Se(n?"checked off":"unchecked",Z(e.name)+" on Shopping List")}function ax(t,e){t.stopPropagation();const n=u("sne-"+e),i=u("sni-"+e);if(!n)return;n.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function cx(t){const e=u("sni-"+t);if(!e)return;const n=d.shop.find(s=>s.id===t);if(!n)return;const i=e.value.trim();i!==(n.note||"")&&Ne({...n,note:i})}function lx(t){const e=u("sqe-"+t),n=u("sqi-"+t);if(!e)return;e.classList.toggle("open")&&n&&(n.focus(),n.select())}function dx(t,e){const n=u("sqi-"+t);if(!n)return;const i=Math.max(1,(parseInt(n.value,10)||1)+e);n.value=i,qy(t)}function qy(t){const e=u("sqi-"+t);if(!e)return;const n=d.shop.find(s=>s.id===t);if(!n)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(n.qty||1)&&Ne({...n,qty:i})}function ux(){d.aisleMode=!d.aisleMode;const t=u("aislebtn");t&&(t.style.background=d.aisleMode?"var(--ac)":"",t.style.color=d.aisleMode?"var(--bg)":""),Si()}const hx=["byisguder@gmail.com","bushra.hoss1989@gmail.com"];function px(){const t=Q();return!t||!t.email?!1:hx.includes(t.email.toLowerCase())}const fx=new Date("2026-04-23T00:00:00Z"),mx=7;function gx(){const t=u("jwt-expiry-banner");if(!t)return;const n=fx-new Date,i=Math.ceil(n/(1e3*60*60*24));i<=0?(t.style.display="block",t.style.borderColor="var(--rd)",t.style.color="var(--rd)",t.textContent="⚠️ ShopRite service JWT has expired — coupons will not load. Contact Bora to refresh the token."):i<=mx?(t.style.display="block",t.style.borderColor="#D4A853",t.style.color="#D4A853",t.textContent="⚠️ ShopRite deals expire soon — refresh needed by April 23"):t.style.display="none"}function yx(t){["list","deals"].forEach(i=>{const s=u("shtab-"+i);s&&s.classList.remove("active");const o=u("sh-"+i+"-body");o&&(o.style.display="none")});const e=u("shtab-"+t);e&&e.classList.add("active");const n=u("sh-"+t+"-body");if(n&&(n.style.display="block"),t==="deals"){const i=u("deals-gate"),s=u("deals-content");px()?(i&&(i.style.display="none"),s&&(s.style.display="block"),Qy(),gx(),Po||wu(),vs||yc()):(i&&(i.style.display="block"),s&&(s.style.display="none"))}}function vx(){const t=d.shop.filter(i=>!i.checked);if(!t.length){_("List is empty!");return}const n=`🛒 Shopping List

`+t.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+tn(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>_("List copied!"))}let fl={},id={};async function wx(){const t=d.shop.filter(n=>n.checked);if(!t.length){_("No completed items!");return}fl={},id={};for(const n of t){const i=await sr(n.name),s=n.name.toLowerCase();i!=null&&i.preferredLocation&&(fl[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(id[s]=i.preferredUnit)}const e=u("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const i=fl[n.name.toLowerCase()]||ha(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${i}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${n.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,qe("atk")}function bx(t,e,n){const i=u("atk-"+t);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),n.classList.add("sel")}async function _x(){const t=d.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let n=0;for(const i of t){const s=u("atk-"+i.id);if(!s)continue;const o=s.dataset.loc||ha(i.name),r=d.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),a=i.qty||1;await ee({id:r?r.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:r?r.name:i.name,qty:r?r.qty+a:a,unit:r?r.unit:i.unit&&i.unit!=="unit"?i.unit:id[i.name.toLowerCase()]||"unit",location:o,category:r?r.category:Uo({name:i.name}),addedAt:r?r.addedAt:e,brand:r?r.brand:i.brand||"",expiry:r?r.expiry:null,image:r?r.image:i.image||null,source:"shopping"}),uu(i.name,o),await Ko(i.id),n++}ue("atk"),_(`${n} item${n!==1?"s":""} added to your supplies! 🧺`)}async function kx(){const t=Ka().map(s=>{const o=s.toISOString().split("T")[0];return d.mp[o]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[o]}`:""}).filter(Boolean).join(", ");if(!t){_("No meals planned yet!");return}const e=d.inv.map(s=>`${s.name} (${cs(s.qty,s.unit)})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),i=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",a=[],l=[];r.split(`
`).forEach($=>{const P=$.match(/^[-•*]\s+(.+)/);if(P){const O=P[1].replace(/\*\*/g,"").trim();O&&!d.shop.find(M=>M.name.toLowerCase()===O.toLowerCase())&&a.push({name:O,sel:!0})}});const h=r.split(`
`).filter($=>$.match(/^[-•*]\s+/)).length,f=d.inv.map($=>$.name.toLowerCase());if(a.forEach($=>{const P=d.inv.find(O=>O.name.toLowerCase()===$.name.toLowerCase());P&&P.qty>0&&($.note=`Have ${cs(P.qty,P.unit)} — need more`)}),!a.length){_("Nothing new needed — you're all stocked! ✓");return}window._bpItems=a;const g=d.inv.length>0?Math.max(0,h-a.length):0,w=a.filter($=>$.note).length,k=[];g>0&&k.push(`✅ ${g} already in stock`),w>0&&k.push(`⚠️ ${w} partially stocked`),k.push(`🛒 ${a.length} to add`);const E=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${k.join("<br>")}</div>`;u("bpList").innerHTML=E+a.map(($,P)=>`<div id="bpitem-${P}" onclick="bpTog(${P})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${P}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${$.name}</div>${$.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${$.note}</div>`:""}</div></div>`).join(""),vu(),u("buildPreviewM").classList.add("active")}catch{_("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=i)}}function Tx(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=u("bpck-"+t),n=u("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),vu()}function Cx(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const i=u("bpck-"+n),s=u("bpitem-"+n);t?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),vu()}function vu(){const t=window._bpItems.filter(n=>n.sel).length,e=u("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function Ix(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){u("buildPreviewM").classList.remove("active");return}for(const e of t)await Oe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});u("buildPreviewM").classList.remove("active"),_(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function Wy(t,e,n){const i=document.getElementById(n);if(i&&i.remove(),e){const s=document.createElement("div");s.id=n,s.style.cssText="font-size:.64rem;color:var(--mt);text-align:center;margin-top:6px",s.textContent="Cached results — tap ↻ Refresh for latest",t.parentNode.insertBefore(s,t)}}let vs=!1,Ht=[],Gy=[],Ei=0,Kn="all",$a=10,$r=!1,Lr=!1;function Sx(){$r=!$r;const t=u("coupons-section-body"),e=u("coupons-chevron");t&&(t.style.display=$r?"none":""),e&&(e.textContent=$r?"▶":"▼")}function Ex(){Lr=!Lr;const t=u("deals-section-body"),e=u("deals-chevron");t&&(t.style.display=Lr?"none":""),e&&(e.textContent=Lr?"▶":"▼")}function Ky(t,e){const n=e===1/0?"all":String(e);document.querySelectorAll(`.page-size-btn[data-section="${t}"]`).forEach(s=>{s.classList.toggle("active",s.dataset.size===n)})}function Qy(){const t=u("deals-zip-banner");if(!t)return;const e=d.cfg.zipcode;e?(t.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,t.style.borderColor="var(--b2)"):(t.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,t.style.borderColor="var(--am)")}async function yc(){const t=u("dealsstatus"),e=u("dealslist");if(!t||!e)return;if(vs&&Ht.length>0){Ro(),cn();return}const n=d.cfg.zipcode;if(!n){t.style.display="block",t.style.color="var(--am)",t.textContent="Set your zipcode in Settings to see weekly deals.";return}t.style.display="block",t.style.color="var(--mt)",t.innerHTML='<div style="display:flex;align-items:center;gap:8px"><span class="shimmer" style="display:inline-block;width:16px;height:16px;border-radius:50%"></span> Loading weekly circulars from Walmart, ALDI, Stop & Shop, Wegmans…</div>',e.innerHTML="";try{const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"browse",zipcode:n,householdId:d.hid})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Failed to load weekly deals");Ht=s.deals||[],Gy=s.stores||[],vs=!0,Ei=0,Kn="all",t.style.display="none",Ro(),cn(),Wy(e,s.fromCache,"deals-cache-note")}catch(i){t.style.display="block",t.style.color="var(--rd)",t.textContent=i.message||"Could not load weekly deals",console.error("loadFlippDeals error:",i)}}async function Ax(){vs=!1,Ht=[],Gy=[],Ei=0;const t=u("deals-refresh-btn");t&&(t.textContent="↻ …",t.disabled=!0),await yc(),t&&(t.textContent="↻ Refresh",t.disabled=!1)}const xx=["Walmart","ALDI","Stop & Shop","Wegmans"];function Ro(){const t=u("deals-store-chips");if(!t)return;const e={};Ht.forEach(i=>{const s=i.store||"";e[s]=(e[s]||0)+1});let n=`<button class="coupon-chip${Kn==="all"?" active":""}" onclick="filterDealStore('all')">All (${Ht.length})</button>`;xx.forEach(i=>{const s=e[i]||0,o=Kn===i?" active":"",r=i.replace(/'/g,"\\'");n+=`<button class="coupon-chip${o}" onclick="filterDealStore('${r}')">${i} (${s})</button>`}),t.innerHTML=n}function Rx(t){Kn=t,Ei=0,Ro(),cn()}function Px(){Ei=0,cn()}function $x(){let t=Ht;Kn!=="all"&&(t=t.filter(i=>i.store===Kn));const e=u("dealsearch"),n=((e==null?void 0:e.value)||"").trim().toLowerCase();return n&&(t=t.filter(i=>(i.name||"").toLowerCase().includes(n)||(i.brand||"").toLowerCase().includes(n)||(i.store||"").toLowerCase().includes(n))),t}function Jy(t,e){const n=new Set(rr([t.name,t.brand].filter(Boolean).join(" ")));return e.some(i=>n.has(i))}function Lx(t){const e=(d.shop||[]).filter(o=>!o.checked);if(!e.length)return{onList:[],rest:t};const n=e.map(o=>rr(o.name)).filter(o=>o.length>0);if(!n.length)return{onList:[],rest:t};const i=[],s=[];for(const o of t)n.some(a=>Jy(o,a))?i.push(o):s.push(o);return{onList:i,rest:s}}function cn(){const t=u("dealslist"),e=u("deals-more");if(!t)return;const n=$x();if(!n.length){const a=u("dealsearch"),l=((a==null?void 0:a.value)||"").trim();l?t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for "<strong>${l}</strong>".<br>Try a different search term.</p></div>`:t.innerHTML='<div class="es"><div class="ei">📰</div><p>No weekly deals available.<br>Try refreshing or check back later for new circulars.</p></div>',e&&(e.style.display="none");return}const{onList:i,rest:s}=Lx(n);t.innerHTML="";const o=document.createElement("div");if(o.className="coupon-section-header",o.innerHTML='<span class="coupon-section-icon">🛒</span> On My List',t.appendChild(o),i.length)i.forEach(a=>{t.appendChild(sd(a))});else{const a=document.createElement("div");a.className="coupon-list-empty",a.textContent="No deals found for your current list",t.appendChild(a)}const r=document.createElement("div");if(r.className="coupon-section-header",r.innerHTML='<span class="coupon-section-icon">📰</span> All Deals',t.appendChild(r),s.length){const a=$a,l=s.slice(0,a);s.length>a,l.forEach(h=>{t.appendChild(sd(h))}),e&&(e.style.display=s.length>10?"block":"none",Ky("deals",$a))}else{const a=document.createElement("div");a.className="coupon-list-empty",a.textContent="All matching deals are shown above",t.appendChild(a),e&&(e.style.display="none")}}function sd(t){const e=document.createElement("div");if(e.className="deal-card"+(t.discount?" deal-match":""),t.image){const a=document.createElement("img");a.className="coupon-img",a.src=t.image,a.alt=t.name||"Deal",a.loading="lazy",a.onerror=function(){this.style.display="none"},e.appendChild(a)}const n=document.createElement("div");n.style.flex="1";const i=document.createElement("div");i.className="deal-store",i.textContent=t.store||"Store",n.appendChild(i);const s=document.createElement("div");if(s.className="deal-name",s.textContent=t.name||"",n.appendChild(s),t.brand){const a=document.createElement("div");a.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",a.textContent=t.brand,n.appendChild(a)}const o=document.createElement("div");if(o.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",t.price){const a=document.createElement("span");a.className="deal-price",a.textContent=t.price,o.appendChild(a)}if(t.discount){const a=document.createElement("span");a.className="deal-badge",a.textContent=t.discount,o.appendChild(a)}n.appendChild(o),e.appendChild(n);const r=document.createElement("button");return r.className="btn bs bsm",r.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",r.textContent="+ List",(a=>{r.onclick=()=>Yy(a)})(t.name||""),e.appendChild(r),e}async function Yy(t){const e=(t||"").replace(/&#39;/g,"'");(await Oe({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?_(e+" added!"):_(e+" quantity updated!")}async function Dx(){const t=u("dealsearch").value.trim();if(!t){Ei=0,Kn="all",Ro(),cn();return}if(vs&&Ht.length>0){Ei=0,cn();return}const e=u("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+t+" near "+(d.cfg.zipcode||"your area")+"…",u("dealslist").innerHTML="";try{const n=d.cfg.zipcode;if(!n)throw new Error("Set your zipcode in Settings to search for local deals.");const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:n,query:t})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Deals API request failed");e.style.display="none";const o=u("dealslist");if(o.innerHTML="",!s.deals||!s.deals.length){o.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for "<strong>${t}</strong>".<br>Try a different search term.</p></div>`;return}s.deals.forEach(r=>{o.appendChild(sd(r))})}catch(n){e.style.color="var(--rd)",e.textContent=n.message||"Unknown error"}}async function Nx(){if(!d.shop.filter(e=>!e.checked).length){_("Add items to your list first!");return}if(vs&&Ht.length>0){const e=u("dealsearch");e&&(e.value=""),Kn="all",Ei=0,Ro(),cn();const n=u("dealslist");n&&n.scrollIntoView({behavior:"smooth",block:"start"});return}await yc()}function Mx(t){$a=t,cn()}function Ox(){$a+=10,cn()}let Po=!1,tt=[],ws=new Set,vi=0,vt="onlist",La=10;async function wu(){const t=u("coupon-status"),e=u("coupon-list");if(!(!t||!e)){t.style.display="block",t.style.color="var(--mt)",t.innerHTML='<div style="display:flex;align-items:center;gap:8px"><span class="shimmer" style="display:inline-block;width:16px;height:16px;border-radius:50%"></span> Loading ShopRite digital coupons…</div>',e.innerHTML="";try{const n=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"list",householdId:d.hid})}),i=await n.json();if(!n.ok||i.error)throw new Error(i.error||"Failed to load coupons");tt=i.coupons||[],ws=new Set(i.clippedIds||[]),Po=!0,vi=0,vt="onlist",tt.forEach(s=>{s.clipped=ws.has(s.id)}),t.style.display="none",vo(),On(),Wy(e,i.fromCache,"coupon-cache-note")}catch(n){t.style.display="block",t.style.color="var(--rd)",t.textContent=n.message||"Could not load coupons",console.error("loadCoupons error:",n)}}}async function Vx(){Po=!1,tt=[],ws=new Set,vi=0;const t=u("coupon-refresh-btn");t&&(t.textContent="↻ …",t.disabled=!0),await wu(),t&&(t.textContent="↻ Refresh",t.disabled=!1)}function vo(){const t=u("coupon-cats");if(!t)return;const{onList:e}=bu(tt),n=e.length,i=new Map;tt.forEach(r=>{const a=r.category||"Other";i.set(a,(i.get(a)||0)+1)});const s=[...i.entries()].sort((r,a)=>r[0]==="Other"?1:a[0]==="Other"?-1:a[1]-r[1]);let o=`<button class="coupon-chip${vt==="onlist"?" active":""}" onclick="filterCouponCat('onlist')">On My List (${n})</button>`;o+=`<button class="coupon-chip${vt==="all"?" active":""}" onclick="filterCouponCat('all')">All (${tt.length})</button>`,s.forEach(([r,a])=>{o+=`<button class="coupon-chip${vt===r?" active":""}" onclick="filterCouponCat('${r.replace(/'/g,"\\'")}')">${r} (${a})</button>`}),t.innerHTML=o}function Ux(t){vt=t,vi=0,vo(),On()}function Fx(){vi=0,On()}async function jx(){const t=u("coupon-search"),e=((t==null?void 0:t.value)||"").trim();if(!e){vi=0,vt="all",vo(),On();return}if(Po&&tt.length>0){vi=0,vt="all",vo(),On();return}const n=u("coupon-status");n&&(n.style.display="block",n.textContent="Searching coupons for '"+e+"'...");try{const i=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"list",householdId:d.hid,query:e})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Search failed");tt=s.coupons||[],ws=new Set(s.clippedIds||[]),Po=!0,vi=0,tt.forEach(o=>{o.clipped=ws.has(o.id)}),n&&(n.style.display="none"),vo(),On()}catch(i){n&&(n.style.display="block",n.style.color="var(--rd)",n.textContent=i.message)}}function Bx(){let t=tt;if(vt==="onlist"){const{onList:i}=bu(t);t=i}else vt!=="all"&&(t=t.filter(i=>(i.category||"Other")===vt));const e=u("coupon-search"),n=((e==null?void 0:e.value)||"").trim().toLowerCase();return n&&(t=t.filter(i=>(i.name||"").toLowerCase().includes(n)||(i.brand||"").toLowerCase().includes(n)||(i.description||"").toLowerCase().includes(n))),t}const Hx=new Set(["a","an","the","of","and","or","for","to","in","on","with","some","any","more","get","buy","need","bag","box","can","pack","ct","oz","lb","lbs","kg","ml","gal","qt","pt","bunch","head","piece","pieces","slice","slices","large","small","medium","fresh","organic","whole","half","extra","regular","light","low","free"]);function rr(t){return t?t.toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(e=>e.length>=2&&!Hx.has(e)):[]}function Xy(t,e){const n=new Set(rr([t.name,t.brand,t.description].filter(Boolean).join(" ")));return e.some(i=>n.has(i))}function bu(t){const e=(d.shop||[]).filter(o=>!o.checked);if(console.log("[On My List] Active shopping items:",e.map(o=>o.name)),!e.length)return{onList:[],rest:t};const n=e.map(o=>{const r=rr(o.name);return console.log(`[On My List] "${o.name}" → tokens: [${r.join(", ")}]`),r}).filter(o=>o.length>0);if(!n.length)return{onList:[],rest:t};const i=[],s=[];for(const o of t)n.some(a=>Xy(o,a))?i.push(o):s.push(o);return{onList:i,rest:s}}function zx(){if(!tt.length)return 0;const{onList:t}=bu(tt);return t.length}function On(){const t=u("coupon-list"),e=u("coupon-more");if(!t)return;const n=Bx();if(!n.length){const o=vt==="onlist"?"No coupons match your shopping list":"No coupons found.<br>Try a different search or category.";t.innerHTML=`<div class="es"><div class="ei">🎟</div><p>${o}</p></div>`,e&&(e.style.display="none");return}t.innerHTML="";const i=La,s=n.slice(0,i);n.length>i,s.forEach(o=>{t.appendChild(qx(o))}),e&&(e.style.display=n.length>10?"block":"none",Ky("coupons",La))}function qx(t){const e=document.createElement("div"),n=!!t.image;if(e.className="coupon-card"+(t.clipped?" clipped":"")+(n?" coupon-has-image":""),e.id="coupon-"+t.id,t.image){const r=document.createElement("img");r.className="coupon-img",r.src=t.image,r.alt=t.name||"Coupon",r.loading="lazy",r.onerror=function(){var a;this.style.display="none",(a=this.closest(".coupon-card"))==null||a.classList.remove("coupon-has-image")},e.appendChild(r)}const i=document.createElement("div");if(i.className="coupon-body",t.brand){const r=document.createElement("div");r.className="coupon-brand",r.textContent=t.brand,i.appendChild(r)}const s=document.createElement("div");if(s.className="coupon-name",s.textContent=t.name||"Digital Coupon",i.appendChild(s),t.description){const r=document.createElement("div");r.className="coupon-desc",r.textContent=t.description,i.appendChild(r)}if(t.value){const r=document.createElement("div");r.className="coupon-value",r.textContent=t.value,i.appendChild(r)}if(t.expiryDate){const r=document.createElement("div");r.className="coupon-expiry";try{const a=new Date(t.expiryDate),h=Math.ceil((a-new Date)/864e5);h<=3&&h>=0?(r.style.color="var(--am)",r.textContent=h===0?"Expires today":`Expires in ${h} day${h>1?"s":""}`):r.textContent="Expires "+a.toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{r.textContent="Exp: "+t.expiryDate}i.appendChild(r)}e.appendChild(i);const o=document.createElement("button");return o.className="coupon-clip-btn"+(t.clipped?" clipped":""),o.textContent=t.clipped?"✓ Clipped":"Clip",o.setAttribute("data-coupon-id",t.id),t.clipped||(o.onclick=()=>Zy(t.id)),e.appendChild(o),e}async function Zy(t){const e=u("coupon-"+t),n=e==null?void 0:e.querySelector(".coupon-clip-btn");if(!(!n||n.classList.contains("clipped"))){n.classList.add("loading"),n.textContent="…";try{const i=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"clip",householdId:d.hid,couponId:t})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Clip failed");ws.add(t);const o=tt.find(r=>r.id===t);if(o&&(o.clipped=!0),n.classList.remove("loading"),n.classList.add("clipped","clip-animating"),n.textContent="✓ Clipped",n.onclick=null,setTimeout(()=>n.classList.remove("clip-animating"),500),e&&e.classList.add("clipped"),o&&o.value){const r=o.value.match(/\$?([\d.]+)/);if(r){const a=parseFloat(r[1])||0,l=parseFloat(localStorage.getItem("ks-clipped-savings")||"0");localStorage.setItem("ks-clipped-savings",(l+a).toFixed(2))}}_("Coupon clipped to your Price Plus Card!")}catch(i){n.classList.remove("loading"),n.textContent="Clip",_("Clip failed: "+(i.message||"Unknown error")),console.error("clipCoupon error:",i)}}}function Wx(t){La=t,On()}function Gx(){La+=10,On()}function ev(t){return(t||"").split(" ")[0].trim()||t}function tv(t){const e=new Date().getDay(),n=e===0||e===6;return t<5?"Burning the midnight oil":t<12?n?"Lazy morning":"Good morning":t<17?n?"Happy afternoon":"Good afternoon":t<21?"Good evening":"Late night vibes"}const Kx={morning:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=400&fit=crop&crop=center",afternoon:"https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop&crop=center",evening:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop&crop=center",night:"https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&h=400&fit=crop&crop=center"};function Qx(t){return t>=5&&t<12?"morning":t>=12&&t<17?"afternoon":t>=17&&t<21?"evening":"night"}function Jx(t){const e=document.querySelector(".hhdr");if(!e)return;const n=Qx(t),i=Kx[n];e.classList.add("hero-bg"),e.style.backgroundImage=`url('${i}')`}function _u(){const t=new Date().getHours(),e=tv(t),n=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=ev(n),s=u("grt");s&&(s.innerHTML=`${e}, <span>${i}</span>`);const o=u("hdt");o&&(o.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Jx(t),Gt()}function Da(){Na(),sa==null||sa()}let sa=null;function Yx(t){sa=t}function Na(){const t=u("home-skeleton");if(!d.homeDataReady){t&&(t.style.display="");return}t&&!t.classList.contains("hidden")&&(t.classList.add("hidden"),setTimeout(()=>{t&&(t.style.display="none")},320));try{const e=new Date().getHours(),n=tv(e),i=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),s=ev(i),o=u("grt");o&&!o.innerHTML&&(o.innerHTML=`${n}, <span>${s}</span>`),Zx(),Gt(),$s(),aR(),cR(),lR(),hR(),ei(),tR(),gR(),ov(),eR()}catch(e){console.error("[renderHome] section render error:",e)}}const $o={lowstock:!0,activity:!0,cooktonight:!1};function Xx(t){$o[t]=!$o[t],od(t)}function od(t){const e=$o[t]!==!1,n=u(`${t}-arrow`),s=u({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[t]||t);n&&(e?n.classList.add("collapsed"):n.classList.remove("collapsed")),s&&(e?s.classList.add("collapsed"):s.classList.remove("collapsed"))}function Zx(){$o.lowstock=!0,$o.activity=!0}function eR(){od("lowstock"),od("activity")}function ei(){const t=At(),e=d.mp[t],n=u("tnd"),i=u("tna"),s=u("tonight-main"),o=!!d.mpCooked[t];s&&(s.onclick=function(){e?window.openMealDetail(t,"Today"):window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),o?i&&(i.innerHTML=`<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`):i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${t}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">Nothing planned yet — what are you craving? 🍽️</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function tR(){const t=u("lastcooked");if(!t)return;const n=(d.activity||[]).find(a=>a.action==="cooked");if(!n){t.style.display="none";return}const i=(n.itemName||"").replace(/\s*tonight\s*🍳?\s*$/i,"").trim();if(!i){t.style.display="none";return}const s=Date.now()-new Date(n.timestamp).getTime(),o=Math.floor(s/864e5);let r;o===0?r="today":o===1?r="yesterday":r=o+" days ago",t.style.display="block",t.innerHTML=`🍳 Last cooked: <strong style="color:var(--tx)">${i}</strong> — ${r}`}let Ma=0;function nv(t){const e=new Date;e.setHours(0,0,0,0);const n=new Date(e);return n.setDate(e.getDate()-e.getDay()),n.setDate(n.getDate()+t*7),Array.from({length:7},(i,s)=>{const o=new Date(n);return o.setDate(n.getDate()+s),o})}function nR(t){Ma+=t,Gt()}function Gt(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=u("wgrd");if(!n)return;const i=nv(Ma),s=u("weekLbl");if(s){const o=i[0],r=i[6],a=o.toLocaleDateString("en-US",{month:"short"}),l=r.toLocaleDateString("en-US",{month:"short"}),h=a===l?`${a} ${o.getDate()} – ${r.getDate()}`:`${a} ${o.getDate()} – ${l} ${r.getDate()}`;s.textContent=Ma===0?"This Week":h}n.innerHTML=i.map((o,r)=>{const a=o.toISOString().split("T")[0],l=o.getTime()===e.getTime(),h=d.mp[a],f=d.mpCooked[a],g=h?`openMealDetail('${a}','${t[r]} ${o.getDate()}')`:`openMealM('${a}','${t[r]} ${o.getDate()}')`;return`<div class="wd${l?" today":""}${h?" hm":""}${f?" hm-cooked":""}" onclick="${g}"><div class="wdn">${t[r]}</div><div class="wdd">${o.getDate()}</div>${h?`<div class="wdm">${h}</div>`:""}</div>`}).join(""),iR()}function iR(){const t=u("variety-nudge");if(!t)return;const e=nv(Ma).map(s=>d.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n={};e.forEach(s=>{const o=s.toLowerCase();n[o]=(n[o]||0)+1});const i=Object.entries(n).find(([,s])=>s>=3);i?(t.style.display="block",t.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):t.style.display="none"}function sR(){try{const t=localStorage.getItem("ks-clipped-savings");if(t)return parseFloat(t)||0}catch{}return 0}function oR(){const t=d.inv.filter(n=>{const i=rt(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).map(n=>(n.name||"").toLowerCase());if(!t.length||!d.recs.length)return[];const e=d.recs.map(n=>{const i=(n.ingredients||[]).map(o=>(typeof o=="string"?o:o.name||"").toLowerCase()),s=t.filter(o=>i.some(r=>r.includes(o)||o.includes(r)));return{recipe:n,matchCount:s.length,matchNames:s}}).filter(n=>n.matchCount>0);return e.sort((n,i)=>i.matchCount-n.matchCount),e.slice(0,3)}function $s(){const t=d.inv.filter(f=>{const g=rt(f.expiry);return g&&(g.c==="expiring"||g.c==="expired")}).length,e=d.shop.filter(f=>!f.checked).length,n=u("home-exp-val"),i=u("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),i&&(i.textContent=t>0?"expiring soon":"Nothing in next 3 days");const s=u("home-shop-val"),o=u("home-shop-sub");s&&(s.textContent=e),o&&(o.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const r=u("sgrd");if(!r)return;const a=sR();let l=`
    <div class="sc bento-inventory card-enter" onclick="showScreen('inventory')">
      <div class="sci">🧺</div><div class="scv">${d.inv.length}</div><div class="scl">Items in stock</div>
    </div>
    <div class="sc bento-expiring card-enter${t>0?" warn":""}" onclick="showScreen('inventory')" style="animation-delay:.05s">
      <div class="sci">⏱</div><div class="scv">${t}</div><div class="scl">Expiring soon</div>
    </div>
    <div class="sc bento-shopping card-enter" onclick="showScreen('shopping')" style="animation-delay:.1s">
      <div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div>
    </div>
    <div class="sc bento-recipes card-enter" onclick="showScreen('recipes')" style="animation-delay:.15s">
      <div class="sci">📖</div><div class="scv">${d.recs.length}</div><div class="scl">Saved recipes</div>
    </div>`;a>0&&(l+=`
    <div class="sc bento-hero card-enter" style="animation-delay:.2s">
      <div class="savings-icon">💰</div>
      <div>
        <div class="savings-amount">$${a.toFixed(2)}</div>
        <div class="savings-label">Saved this week from coupons</div>
      </div>
    </div>`);const h=oR();h.length&&(l+=`
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
    </div>`),r.innerHTML=l,window._shouldAnimateCounters&&(window._shouldAnimateCounters=!1,r.querySelectorAll(".scv").forEach(f=>{const g=parseInt(f.textContent,10);isNaN(g)||g===0||rR(f,g,600)}))}function rR(t,e,n){const i=performance.now();t.textContent="0";function s(o){const r=o-i,a=Math.min(r/n,1),l=1-Math.pow(1-a,3);t.textContent=Math.round(l*e),a<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}function aR(){const t=u("quick-chips");if(!t)return;const e=d.shop.filter(n=>!n.checked).length;t.innerHTML=`
    <button class="quick-chip" onclick="showScreen('shopping')">🛒 ${e} to buy</button>
    <button class="quick-chip" onclick="showScreen('inventory');setTimeout(()=>{const el=document.getElementById('expiryTimeline');if(el)el.scrollIntoView({behavior:'smooth'})},200)">⚠️ Expiring Soon</button>
    <button class="quick-chip" onclick="showScreen('shopping');setTimeout(()=>setSHT('deals'),100)">✨ Deals</button>
  `}function cR(){const t=u("notif-strip");if(!t)return;const e=[],n=d.inv.filter(o=>{const r=rt(o.expiry);return r&&r.c==="expired"});n.length&&e.push(`<button class="notif-pill notif-danger" onclick="showScreen('inventory')">🚨 ${n.length} expired item${n.length>1?"s":""}</button>`);const i=d.inv.filter(o=>{const r=rt(o.expiry);return r&&r.c==="expiring"});i.length&&e.push(`<button class="notif-pill notif-warn" onclick="showScreen('inventory')">⏱ ${i.length} expiring soon</button>`);const s=zx();s>0&&e.push(`<button class="notif-pill notif-deal" onclick="showScreen('shopping');setTimeout(()=>setSHT('coupons'),100)">💰 ${s} coupon match${s>1?"es":""}</button>`),e.length?(t.style.display="flex",t.innerHTML=e.join("")):(t.style.display="none",t.innerHTML="")}function lR(){const t=d.inv.filter(i=>{const s=rt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=u("exslbl"),n=u("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>{const s=rt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Z(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const dR=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),uR=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function ar(t){return t?dR.has(t)?1:(uR.has(t),2):2}function hR(){const t=d.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:ar(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=u("lowstocklbl"),n=u("lowstocklist");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Z(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${cs(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function pR(t){const e=d.inv.find(i=>i.id===t);if(!e)return;(await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`)}function fR(t){const e=Date.now()-new Date(t).getTime(),n=Math.floor(e/6e4);if(n<1)return"just now";if(n<60)return n+"m ago";const i=Math.floor(n/60);if(i<24)return i+"h ago";const s=Math.floor(i/24);return s===1?"yesterday":s+"d ago"}function mR(t){const e=t.id||"",n=(t.action||"").toLowerCase();return n.includes("removed")&&n.includes("shopping")?`<button class="act-btn" onclick="activityUndo('${e}')">Undo</button>`:n.includes("removed")&&n.includes("supplies")?`<button class="act-btn" onclick="activityUndo('${e}')">Undo</button>`:""}function gR(){const t=u("activityfeed"),e=u("activitylbl");if(!t)return;const n=d.activity||[];if(!n.length){e&&(e.style.display="none"),t.innerHTML="";return}e&&(e.style.display="flex"),t.innerHTML=n.slice(0,10).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${Z(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
        ${mR(i)}
        <div style="font-size:.68rem;color:var(--mt)">${fR(i.timestamp)}</div>
      </div>
    </div>`).join("")}function Ls(t){return(d.activity||[]).find(e=>e.id===t)}function Ds(t){return!t||!t.itemName?"":t.itemName.replace(/\s+(to|from|on)\s+(Shopping List|Supplies|Recipes)$/i,"").replace(/\s+tonight\s*🍳$/i,"").trim()}async function yR(t){const e=Ls(t);if(!e)return _("Activity entry not found");const n=Ds(e);if(!n)return;const i=(e.action||"").toLowerCase();try{i.includes("shopping")?(await Oe({name:n,qty:1}),_(`${n} added back to shopping list`)):i.includes("supplies")&&(await ee({name:n,qty:1,location:"pantry"}),_(`${n} added back to supplies`)),await Se("undid removal of",n)}catch(s){console.error("[activityUndo]",s),_("Couldn't undo — please try manually")}}async function vR(t){const e=Ls(t);if(!e)return _("Activity entry not found");const n=Ds(e),i=d.shop.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found on shopping list");try{i.done=!1,await Ne(i),_(`${n} unchecked`),await Se("unchecked",Z(n)+" on Shopping List")}catch(s){console.error("[activityUncheck]",s),_("Couldn't uncheck — please try manually")}}async function wR(t){const e=Ls(t);if(!e)return _("Activity entry not found");const n=Ds(e),i=d.shop.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found on shopping list");try{await Ko(i.id),_(`${n} removed from shopping list`)}catch(s){console.error("[activityRemoveShop]",s),_("Couldn't remove — please try manually")}}async function bR(t){const e=Ls(t);if(!e)return _("Activity entry not found");const n=Ds(e),i=d.inv.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found in supplies");try{await Go(i.id),_(`${n} removed from supplies`)}catch(s){console.error("[activityRemoveInv]",s),_("Couldn't remove — please try manually")}}async function _R(t){const e=Ls(t);if(!e)return _("Activity entry not found");const n=Ds(e),i=d.recs.find(s=>(s.name||s.title||"").toLowerCase()===n.toLowerCase());if(!i)return _("Recipe not found");try{d.recs=d.recs.filter(s=>s.id!==i.id),await fe(`households/${d.hid}/recipes/${i.id}`),_(`${n} removed from recipes`),await Se("removed",Z(n)+" from Recipes")}catch(s){console.error("[activityRemoveRec]",s),_("Couldn't remove — please try manually")}}async function kR(t){_("Open the item to adjust quantity manually")}async function TR(t){const e=Ls(t);if(!e)return _("Activity entry not found");const n=Ds(e);_("Open meal plan to unmark "+n)}async function CR(t){_("Open meal plan to change this day's plan")}async function IR(t){_("Coupons can't be unclipped once loaded to card")}async function SR(t){_("Open Supplies to manually adjust quantities")}const Nf=5;let Hi=[],Kt=0;function iv(t){return typeof t!="string"||!t.trim()?"":t.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function ER(t,e){let n=[];t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)?n=t.ingredientsRaw:t.ingredients&&typeof t.ingredients=="string"?n=t.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(t.ingredients)&&(n=t.ingredients);const i=n.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let o=0;const r=i.length;for(const l of i){const h=iv(l);if(!h){o++;continue}e.some(g=>g.includes(h)||h.includes(g))?o++:s.push(l)}return{matchPct:Math.round(o/r*100),matchCount:o,totalCount:r,missing:s}}async function AR(){const t=u("recipeMatchResults");if(t){qe("recipematch"),t.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=d.inv.map(i=>iv(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",d.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const n=await ae("public_recipes");if(console.log("[RecipeMatch] Fetched",n.length,"community recipes"),!n.length){console.log("[RecipeMatch] No community recipes found"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),Hi=n.map(i=>{const s=ER(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",Hi.length),Kt=0,sv(t)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function sv(t){if(!Hi.length){t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=Hi.slice(Kt,Kt+Nf);Kt+=e.length;const n=e.map(i=>{let s,o,r;i.matchPct>=80?(s="var(--gn)",o="Ready to cook",r="🟢"):i.matchPct>=60?(s="var(--am)",o="Almost there",r="🟡"):(s="#e67e22",o="Just a few things needed",r="🟠");const a=i.imageUrl?`<img src="${i.imageUrl}" loading="lazy" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',h=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const w=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${w}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",f=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(Kt<=Nf)t.innerHTML=n;else{const i=t.querySelector(".match-more-btn");i&&i.remove(),t.insertAdjacentHTML("beforeend",n)}Kt<Hi.length?t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${Hi.length-Kt} remaining)</button></div>`):Kt>0&&t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Kt} matching recipes</div>`)}function xR(){const t=u("recipeMatchResults");t&&sv(t)}async function RR(t){if(!t)return;(await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?_(`${t} added to shopping list 🛒`):_(`${t} already on shopping list`)}function ov(){const t=["fridge","freezer","pantry","household"].map(n=>{const i=d.inv.filter(s=>s.location===n);return i.length?rm(n).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${cs(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=u("expbox");e&&(e.textContent=t||"No items yet.")}let ku="fridge",wo=1;function PR(){const t=u("uniQtyFrac");t&&(t.innerHTML=Ts.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=u("uniQtyUnit");e&&(e.innerHTML=nr.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function rv(){wo=1;const t=u("uniQtyVal");t&&(t.textContent="1");const e=u("uniQtyFrac");e&&(e.value="0");const n=u("uniQtyUnit");n&&(n.value="Unit")}function $R(){const t=u("uniAddBackdrop"),e=u("uniAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),ku="fridge",document.querySelectorAll("#uniAddSheet .lbtn").forEach(l=>l.classList.remove("sel"));const n=u("uniAddLoc-fridge");n&&n.classList.add("sel"),rv();const i=u("uniAddNoteWrap");i&&(i.style.display="none");const s=u("uniAddNoteInp");s&&(s.value="");const o=u("uniSearchDropdown");o&&(o.innerHTML="",o.classList.remove("active"));const r=u("uniAddCatBadge");r&&(r.style.display="none",r.innerHTML="");const a=u("uniAddCatKey");a&&(a.value="",a.dataset.manual=""),setTimeout(()=>{const l=u("uniAddInput");l&&(l.value="",l.focus())},150)}function Tu(){const t=u("uniAddBackdrop"),e=u("uniAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active");const n=u("uniSearchDropdown");n&&(n.innerHTML="",n.classList.remove("active"))}function LR(t){wo=Math.max(1,Math.min(99,wo+t));const e=u("uniQtyVal");e&&(e.textContent=wo)}function DR(){const t=u("uniQtyFrac");t&&parseFloat(t.value)}function NR(){const t=u("uniQtyFrac"),e=u("uniQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:ot(wo,n),unit:i}}function MR(t,e){ku=t,document.querySelectorAll("#uniAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function OR(){const t=u("uniAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=u("uniAddNoteInp");n&&n.focus()}}function VR(){const t=u("uniAddInput");t&&Ga(t),UR(t?t.value.trim():"")}function UR(t){const e=u("uniAddCatBadge"),n=u("uniAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=dn(t);e.innerHTML=Wt(i,"openUniAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function FR(){const t=u("uniAddCatKey"),e=t?t.value:"other";Xn(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=u("uniAddCatBadge");i&&(i.innerHTML=Wt(n,"openUniAddCatPicker()"))})}function av(){const t=u("uniAddInput"),e=t?t.value.trim():"";if(!e)return null;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=NR(),a=i||r.qty,l=r.unit,h=u("uniAddNoteInp"),f=h?h.value.trim():"";return{name:n,qty:a,unit:l,note:f}}function cv(){const t=u("uniAddInput");t&&(t.value="",t.focus());const e=u("uniAddNoteInp");e&&(e.value="");const n=u("uniAddNoteWrap");n&&(n.style.display="none");const i=u("uniSearchDropdown");i&&(i.innerHTML="",i.classList.remove("active"));const s=u("uniAddCatBadge");s&&(s.style.display="none",s.innerHTML="");const o=u("uniAddCatKey");o&&(o.value="",o.dataset.manual=""),rv()}async function jR(){const t=av();if(!t)return;const{name:e,qty:n,note:i}=t,s=await sr(e),o=(s==null?void 0:s.preferredLocation)||ku,r=t.unit!=="Unit"?t.unit:(s==null?void 0:s.preferredUnit)||"unit",a="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),l=u("uniAddCatKey"),h=l&&l.value||dn(e),f={id:a,barcode:a,name:e,brand:"",unit:r,qty:n,location:o,category:Uo({name:e}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:h};i&&(f.note=i),ee(f),_(`${e} added to Supplies 🧺`),cv()}async function BR(){const t=av();if(!t)return;const{name:e,qty:n,unit:i,note:s}=t,o=u("uniAddCatKey"),r=o&&o.value||dn(e),a={id:Date.now().toString(),name:e,qty:n,unit:i,checked:!1,src:"manual",prepCategory:r};s&&(a.note=s);const l=await Oe(a);if(l.action==="new")_(`${e} added to Shopping 🛒`);else if(l.action==="consolidated")_(`${e} quantity updated on Shopping 🛒`);else if(l.action==="skipped")return;cv()}function HR(){Tu(),window.openScanForInventory&&window.openScanForInventory()}function zR(){Tu(),window.toggleInvVoice&&window.toggleInvVoice()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="firebasestorage.googleapis.com",dv="storageBucket",qR=120*1e3,WR=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends zt{constructor(e,n,i=0){super(ml(e),`Firebase Storage: ${n} (${ml(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ml(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function ml(t){return"storage/"+t}function Cu(){const t="An unknown error occurred, please check the error payload for server response.";return new be(we.UNKNOWN,t)}function GR(t){return new be(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function KR(t){return new be(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(we.UNAUTHENTICATED,t)}function JR(){return new be(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YR(t){return new be(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function XR(){return new be(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ZR(){return new be(we.CANCELED,"User canceled the upload/download.")}function eP(t){return new be(we.INVALID_URL,"Invalid URL '"+t+"'.")}function tP(t){return new be(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function nP(){return new be(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dv+"' property when initializing the app?")}function iP(){return new be(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function sP(){return new be(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function oP(t){return new be(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function rd(t){return new be(we.INVALID_ARGUMENT,t)}function uv(){return new be(we.APP_DELETED,"The Firebase app was deleted.")}function rP(t){return new be(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bo(t,e){return new be(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function eo(t){throw new be(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=dt.makeFromUrl(e,n)}catch{return new dt(e,"")}if(i.path==="")return i;throw tP(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const r="(/(.*))?$",a=new RegExp("^gs://"+s+r,"i"),l={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",k=new RegExp(`^https?://${g}/${f}/b/${s}/o${w}`,"i"),E={bucket:1,path:3},$=n===lv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",O=new RegExp(`^https?://${$}/${s}/${P}`,"i"),N=[{regex:a,indices:l,postModify:o},{regex:k,indices:E,postModify:h},{regex:O,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<N.length;D++){const B=N[D],q=B.regex.exec(e);if(q){const C=q[B.indices.bucket];let v=q[B.indices.path];v||(v=""),i=new dt(C,v),B.postModify(i);break}}if(i==null)throw eP(e);return i}}class aP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t,e,n){let i=1,s=null,o=null,r=!1,a=0;function l(){return a===2}let h=!1;function f(...P){h||(h=!0,e.apply(null,P))}function g(P){s=setTimeout(()=>{s=null,t(k,l())},P)}function w(){o&&clearTimeout(o)}function k(P,...O){if(h){w();return}if(P){w(),f.call(null,P,...O);return}if(l()||r){w(),f.call(null,P,...O);return}i<64&&(i*=2);let N;a===1?(a=2,N=0):N=(i+Math.random())*1e3,g(N)}let E=!1;function $(P){E||(E=!0,w(),!h&&(s!==null?(P||(a=2),clearTimeout(s),g(0)):P||(a=1)))}return g(0),o=setTimeout(()=>{r=!0,$(!0)},n),$}function lP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t){return t!==void 0}function uP(t){return typeof t=="object"&&!Array.isArray(t)}function Iu(t){return typeof t=="string"||t instanceof String}function Mf(t){return Su()&&t instanceof Blob}function Su(){return typeof Blob<"u"}function Of(t,e,n,i){if(i<e)throw rd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw rd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function hv(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var wi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wi||(wi={}));/**
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
 */function hP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,i,s,o,r,a,l,h,f,g,w=!0,k=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=a,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,$)=>{this.resolve_=E,this.reject_=$,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Dr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const r=a=>{const l=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&o.addUploadProgressListener(r),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(r),this.pendingConnection_=null;const a=o.getErrorCode()===wi.NO_ERROR,l=o.getStatus();if(!a||hP(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===wi.ABORT;i(!1,new Dr(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new Dr(h,o))})},n=(i,s)=>{const o=this.resolve_,r=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());dP(l)?o(l):o()}catch(l){r(l)}else if(a!==null){const l=Cu();l.serverResponse=a.getErrorText(),this.errorCallback_?r(this.errorCallback_(a,l)):r(l)}else if(s.canceled){const l=this.appDelete_?uv():ZR();r(l)}else{const l=XR();r(l)}};this.canceled_?n(!1,new Dr(!1,null,!0)):this.backoffId_=cP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Dr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function fP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function gP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vP(t,e,n,i,s,o,r=!0,a=!1){const l=hv(t.urlParams),h=t.url+l,f=Object.assign({},t.headers);return gP(f,e),fP(f,n),mP(f,o),yP(f,i),new pP(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bP(...t){const e=wP();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(Su())return new Blob(t);throw new be(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _P(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function kP(t){if(typeof atob>"u")throw oP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gl{constructor(e,n){this.data=e,this.contentType=n||null}}function TP(t,e){switch(t){case Lt.RAW:return new gl(pv(e));case Lt.BASE64:case Lt.BASE64URL:return new gl(fv(t,e));case Lt.DATA_URL:return new gl(IP(e),SP(e))}throw Cu()}function pv(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=i,r=t.charCodeAt(++n);i=65536|(o&1023)<<10|r&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function CP(t){let e;try{e=decodeURIComponent(t)}catch{throw bo(Lt.DATA_URL,"Malformed data URL.")}return pv(e)}function fv(t,e){switch(t){case Lt.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw bo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Lt.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw bo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=kP(e)}catch(s){throw s.message.includes("polyfill")?s:bo(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class mv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bo(Lt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=EP(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function IP(t){const e=new mv(t);return e.base64?fv(Lt.BASE64,e.rest):CP(e.rest)}function SP(t){return new mv(t).contentType}function EP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,n){let i=0,s="";Mf(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Mf(this.data_)){const i=this.data_,s=_P(i,e,n);return s===null?null:new En(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new En(i,!0)}}static getBlob(...e){if(Su()){const n=e.map(i=>i instanceof En?i.data_:i);return new En(bP.apply(null,n))}else{const n=e.map(r=>Iu(r)?TP(Lt.RAW,r).data:r.data_);let i=0;n.forEach(r=>{i+=r.byteLength});const s=new Uint8Array(i);let o=0;return n.forEach(r=>{for(let a=0;a<r.length;a++)s[o++]=r[a]}),new En(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){let e;try{e=JSON.parse(t)}catch{return null}return uP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function xP(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function yv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t,e){return e}class Qe{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||RP}}let Nr=null;function PP(t){return!Iu(t)||t.length<2?t:yv(t)}function vv(){if(Nr)return Nr;const t=[];t.push(new Qe("bucket")),t.push(new Qe("generation")),t.push(new Qe("metageneration")),t.push(new Qe("name","fullPath",!0));function e(o,r){return PP(r)}const n=new Qe("name");n.xform=e,t.push(n);function i(o,r){return r!==void 0?Number(r):r}const s=new Qe("size");return s.xform=i,t.push(s),t.push(new Qe("timeCreated")),t.push(new Qe("updated")),t.push(new Qe("md5Hash",null,!0)),t.push(new Qe("cacheControl",null,!0)),t.push(new Qe("contentDisposition",null,!0)),t.push(new Qe("contentEncoding",null,!0)),t.push(new Qe("contentLanguage",null,!0)),t.push(new Qe("contentType",null,!0)),t.push(new Qe("metadata","customMetadata",!0)),Nr=t,Nr}function $P(t,e){function n(){const i=t.bucket,s=t.fullPath,o=new dt(i,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function LP(t,e,n){const i={};i.type="file";const s=n.length;for(let o=0;o<s;o++){const r=n[o];i[r.local]=r.xform(i,e[r.server])}return $P(i,t),i}function wv(t,e,n){const i=gv(e);return i===null?null:LP(t,i,n)}function DP(t,e,n,i){const s=gv(e);if(s===null||!Iu(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const r=encodeURIComponent;return o.split(",").map(h=>{const f=t.bucket,g=t.fullPath,w="/b/"+r(f)+"/o/"+r(g),k=vc(w,n,i),E=hv({alt:"media",token:h});return k+E})[0]}function NP(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Eu{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(t){if(!t)throw Cu()}function MP(t,e){function n(i,s){const o=wv(t,s,e);return bv(o!==null),o}return n}function OP(t,e){function n(i,s){const o=wv(t,s,e);return bv(o!==null),DP(o,s,t.host,t._protocol)}return n}function _v(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=JR():s=QR():n.getStatus()===402?s=KR(t.bucket):n.getStatus()===403?s=YR(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function kv(t){const e=_v(t);function n(i,s){let o=e(i,s);return i.getStatus()===404&&(o=GR(t.path)),o.serverResponse=s.serverResponse,o}return n}function VP(t,e,n){const i=e.fullServerUrl(),s=vc(i,t.host,t._protocol),o="GET",r=t.maxOperationRetryTime,a=new Eu(s,o,OP(t,n),r);return a.errorHandler=kv(e),a}function UP(t,e){const n=e.fullServerUrl(),i=vc(n,t.host,t._protocol),s="DELETE",o=t.maxOperationRetryTime;function r(l,h){}const a=new Eu(i,s,r,o);return a.successCodes=[200,204],a.errorHandler=kv(e),a}function FP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jP(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=FP(null,e)),i}function BP(t,e,n,i,s){const o=e.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let D=0;D<2;D++)N=N+Math.random().toString().slice(2);return N}const l=a();r["Content-Type"]="multipart/related; boundary="+l;const h=jP(e,i,s),f=NP(h,n),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+l+"--",k=En.getBlob(g,i,w);if(k===null)throw iP();const E={name:h.fullPath},$=vc(o,t.host,t._protocol),P="POST",O=t.maxUploadRetryTime,M=new Eu($,P,MP(t,n),O);return M.urlParams=E,M.headers=r,M.body=k.uploadData(),M.errorHandler=_v(e),M}class HP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s,o){if(this.sent_)throw eo("cannot .send() more than once");if(Jn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zP extends HP{initXhr(){this.xhr_.responseType="text"}}function Au(){return new zP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this._service=e,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ai(e,n)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yv(this._location.path)}get storage(){return this._service}get parent(){const e=AP(this._location.path);if(e===null)return null;const n=new dt(this._location.bucket,e);return new Ai(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rP(e)}}function qP(t,e,n){t._throwIfRoot("uploadBytes");const i=BP(t.storage,t._location,vv(),new En(e,!0),n);return t.storage.makeRequestWithTokens(i,Au).then(s=>({metadata:s,ref:t}))}function WP(t){t._throwIfRoot("getDownloadURL");const e=VP(t.storage,t._location,vv());return t.storage.makeRequestWithTokens(e,Au).then(n=>{if(n===null)throw sP();return n})}function GP(t){t._throwIfRoot("deleteObject");const e=UP(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Au)}function KP(t,e){const n=xP(t._location.path,e),i=new dt(t._location.bucket,n);return new Ai(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){return/^[A-Za-z]+:\/\//.test(t)}function JP(t,e){return new Ai(t,e)}function Tv(t,e){if(t instanceof xu){const n=t;if(n._bucket==null)throw nP();const i=new Ai(n,n._bucket);return e!=null?Tv(i,e):i}else return e!==void 0?KP(t,e):t}function YP(t,e){if(e&&QP(e)){if(t instanceof xu)return JP(t,e);throw rd("To use ref(service, url), the first argument must be a Storage instance.")}else return Tv(t,e)}function Vf(t,e){const n=e==null?void 0:e[dv];return n==null?null:dt.makeFromBucketSpec(n,t)}function XP(t,e,n,i={}){t.host=`${e}:${n}`;const s=Jn(e);s&&(md(`https://${t.host}/b`),gd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=i;o&&(t._overrideAuthToken=typeof o=="string"?o:gm(o,t.app.options.projectId))}class xu{constructor(e,n,i,s,o,r=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=r,this._bucket=null,this._host=lv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qR,this._maxUploadRetryTime=WR,this._requests=new Set,s!=null?this._bucket=dt.makeFromBucketSpec(s,this._host):this._bucket=Vf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=Vf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Of("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Of("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ai(this,e)}_makeRequest(e,n,i,s,o=!0){if(this._deleted)return new aP(uv());{const r=vP(e,this._appId,i,s,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Uf="@firebase/storage",Ff="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="storage";function ZP(t,e,n){return t=Me(t),qP(t,e,n)}function e1(t){return t=Me(t),WP(t)}function t1(t){return t=Me(t),GP(t)}function Iv(t,e){return t=Me(t),YP(t,e)}function n1(t=wd(),e){t=Me(t);const i=Ja(t,Cv).getImmediate({identifier:e}),s=pm("storage");return s&&i1(i,...s),i}function i1(t,e,n,i={}){XP(t,e,n,i)}function s1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xu(n,i,s,e,Pi)}function o1(){ki(new Un(Cv,s1,"PUBLIC").setMultipleInstances(!0)),Nt(Uf,Ff,""),Nt(Uf,Ff,"esm2020")}o1();const Sv=n1(Rd);function r1(t,e,n,i){return new Promise((s,o)=>{const r=new Image,a=new FileReader;a.onload=l=>{r.onload=()=>{let h=r.width,f=r.height;if(h>e||f>n){const $=Math.min(e/h,n/f);h=Math.round(h*$),f=Math.round(f*$)}const g=document.createElement("canvas");g.width=h,g.height=f,g.getContext("2d").drawImage(r,0,0,h,f);let k=.82;const E=()=>{g.toBlob($=>{if(!$)return o(new Error("Canvas compression failed"));$.size<=i||k<=.3?s($):(k-=.1,E())},"image/jpeg",k)};E()},r.onerror=()=>o(new Error("Failed to load image")),r.src=l.target.result},a.onerror=()=>o(new Error("Failed to read file")),a.readAsDataURL(t)})}async function Ru(t,e,n,i,s){if(!t)throw new Error("No file provided");const o=await r1(t,n,i,s);console.log(`[uploadRecipeImage] Compressed to ${(o.size/1024).toFixed(1)}KB → ${e}`);const r=Iv(Sv,e);await ZP(r,o,{contentType:"image/jpeg"});const a=await e1(r);return console.log("[uploadRecipeImage] Upload complete:",e),a}async function Ev(t,e){return Ru(t,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function a1(t,e,n){return Ru(t,`recipes/${e}/steps/${n}.jpg`,800,600,300*1024)}async function c1(t,e,n,i){return Ru(t,`recipes/${e}/comments/${n}/${i}.jpg`,600,600,200*1024)}async function Av(t){try{const e=Iv(Sv,t);await t1(e),console.log("[deleteRecipeStorageFile] Deleted:",t)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const l1=20,d1=.4,u1="cubic-bezier(0.25, 1.0, 0.5, 1)",h1="cubic-bezier(0.2, 0, 0, 1)";let Pu=null,$u=!1,bi=!1,xv=0,Rv=0,ad=!1,cd=!1,He=null,_o=null,Oa=null,is=null;function ti(t){Ns(),Pu=t,$u=!0,_o=p1,Oa=f1,is=m1,document.addEventListener("touchstart",_o,{passive:!0}),document.addEventListener("touchmove",Oa,{passive:!1}),document.addEventListener("touchend",is,{passive:!0}),document.addEventListener("touchcancel",is,{passive:!0})}function Ns(){_o&&(document.removeEventListener("touchstart",_o),document.removeEventListener("touchmove",Oa),document.removeEventListener("touchend",is),document.removeEventListener("touchcancel",is)),$u=!1,bi=!1,Pu=null,He=null,_o=null,Oa=null,is=null}function p1(t){if(!$u)return;const e=t.touches[0];e.clientX>l1||(He=document.querySelector(".ov.active"),He&&(bi=!0,xv=e.clientX,Rv=e.clientY,ad=!1,cd=!1,He.style.transition="none"))}function f1(t){if(!bi||!He)return;const e=t.touches[0],n=e.clientX-xv,i=e.clientY-Rv;if(!ad){if(Math.abs(n)<8&&Math.abs(i)<8)return;ad=!0,cd=Math.abs(n)>Math.abs(i)}if(!cd){bi=!1,He.style.transform="",He.style.transition="";return}t.preventDefault();const s=Math.max(0,n);He.style.transform=`translateX(${s}px)`}function m1(t){if(!bi||!He){bi=!1;return}bi=!1;const e=He.style.transform,n=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(n/i>=d1){He.style.transition=`transform 0.25s ${h1}`,He.style.transform=`translateX(${i}px)`;const o=He,r=Pu;setTimeout(()=>{o.style.transform="",o.style.transition="",r&&r()},260)}else{He.style.transition=`transform 0.3s ${u1}`,He.style.transform="translateX(0)";const o=He;setTimeout(()=>{o.style.transition=""},310)}}let bs="view",Ut=null,ss={},Pt=[],fi=[],mi=0,ld=!1;function g1(t){if(ld)return;ld=!0,t.querySelectorAll(".rcd").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function y1(){ld=!1}let cr={add:!1,edit:!1};function v1(t){if(t<=0)return"";if(t<60)return String(t);const e=Math.floor(t/60),n=t%60;return n===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${n} min`}function _s(t,e){const n=u(t),i=u(e);if(!n)return"";const s=n.value.trim();if(!s)return"";if(isNaN(s))return s;const o=i?i.value:"min",r=parseFloat(s);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function jf(t,e){const n=u(t),i=u(e);if(!n)return NaN;const s=parseFloat(n.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function w1(t){if(cr[t])return;const e=t==="add"?"rpreptime":"epreptime",n=t==="add"?"rpreptimeunit":"epreptimeunit",i=t==="add"?"rcooktime":"ecooktime",s=t==="add"?"rcooktimeunit":"ecooktimeunit",o=t==="add"?"rtotaltime":"etotaltime",r=t==="add"?"rtotaltimeunit":"etotaltimeunit",a=jf(e,n),l=jf(i,s),h=u(o),f=u(r);if(!h)return;if(isNaN(a)&&isNaN(l)){h.value="";return}const g=(isNaN(a)?0:a)+(isNaN(l)?0:l);if(g<=0){h.value="";return}if(g>=60){const w=v1(g);h.value=w,f&&(f.value="min")}else h.value=String(g),f&&(f.value="min")}function b1(t){cr[t]=!0}function Pv(t,e){const n=u(t);if(!n)return"";const i=n.value.trim();if(!i)return"";if(isNaN(i))return i;const s=u(e),o=s?s.value:"min",r=parseFloat(i);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function en(t){if(!t)return{value:"",unit:"min"};const e=t.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const n=t.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return n?{value:n[1],unit:"min"}:/\d+\s*hour/i.test(t)&&/\d+\s*min/i.test(t)?{value:t,unit:"min"}:isNaN(t)?{value:t,unit:"min"}:{value:t,unit:"min"}}function $v(t,e){const n=u(t);if(!n)return;const i=n.querySelectorAll(".diff-pill"),s=n.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(o=>o.classList.remove("sel")),!s){const o=n.querySelector(`.diff-pill[data-val="${e}"]`);o&&o.classList.add("sel")}}function Lv(t){const e=document.querySelector(`#${t} .diff-pill.sel`);return e?e.dataset.val:""}function Lu(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function Dv(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function _1(t){t.classList.toggle("sel")}const oa=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function dd(t){if(t==="my"){const e=d.recFilters;let n=e.tags.length+e.protein.length;return e.difficulty&&n++,e.cookTime!=="any"&&n++,e.serves!=="any"&&n++,n}else{let e=d.comTags.length;return d.comCuisine!=="all"&&e++,d.comTime!=="any"&&e++,d.comMinRating>0&&e++,e}}function Nv(t){const n=pe(t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=dd(t),s=i>0?` (${i})`:"";let o=`<button class="filter-toggle" id="${t}-filter-toggle" onclick="toggleFilterPanel('${t}')">
    <span>Filters${s}</span><span>${n?"▲":"▼"}</span>
  </button>`;if(o+=`<div class="filter-panel" id="${t}-filter-panel" style="display:${n?"block":"none"}">`,t==="my"){const r=d.recFilters;o+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(a=>{o+=`<button class="filter-pill${r.difficulty===a?" sel":""}" onclick="setRecDifficulty('${a}')">${a}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([a,l])=>{o+=`<button class="filter-pill${r.cookTime===a?" sel":""}" onclick="setRecCookTime('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([a,l])=>{o+=`<button class="filter-pill${r.serves===a?" sel":""}" onclick="setRecServes('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',oa.find(a=>a.cat==="Protein").tags.forEach(a=>{o+=`<button class="filter-pill${r.protein.includes(a)?" sel":""}" onclick="toggleRecProtein('${a}')">${a}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${pe("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,oa.forEach(a=>{a.tags.forEach(l=>{o+=`<button class="filter-pill${r.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${pe("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${r.tags.length?` (${r.tags.length} selected)`:""}</button>`,o+="</div>",i>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else o+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([a,l])=>{o+=`<button class="filter-pill${d.comMinRating===a?" sel":""}" onclick="setComMinRating(${a})">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([a,l])=>{o+=`<button class="filter-pill${d.comTime===a?" sel":""}" onclick="setComTime('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(a=>{o+=`<button class="filter-pill${d.comCuisine===a.toLowerCase()?" sel":""}" onclick="setComCuisine('${a.toLowerCase()}')">${a==="all"?"All":a}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([a,l])=>{o+=`<button class="filter-pill${d.comSort===a?" sel":""}" onclick="setComSort('${a}')">${l}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${pe("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,oa.forEach(a=>{a.tags.forEach(l=>{o+=`<button class="filter-pill${d.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${pe("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${d.comTags.length?` (${d.comTags.length} selected)`:""}</button>`,o+="</div>",dd("com")>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return o+="</div>",o}function k1(t){d.recSearch=t,it()}function T1(t){d.recSort=t,et("ks-recSort",t),it()}function C1(t){const e=t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",n=u(`${t}-filter-panel`),i=u(`${t}-filter-toggle`);if(!n)return;const s=n.style.display!=="none";n.style.display=s?"none":"block",et(e,!s);const o=dd(t),r=o>0?` (${o})`:"";i&&(i.innerHTML=`<span>Filters${r}</span><span>${s?"▼":"▲"}</span>`)}function I1(t){d.recFilters.difficulty=d.recFilters.difficulty===t?"":t,Ms(),it()}function S1(t){d.recFilters.cookTime=t,Ms(),it()}function E1(t){d.recFilters.serves=t,Ms(),it()}function A1(t){const e=d.recFilters.protein.indexOf(t);e>=0?d.recFilters.protein.splice(e,1):d.recFilters.protein.push(t),Ms(),it()}function x1(t){const e=d.recFilters.tags.indexOf(t);e>=0?d.recFilters.tags.splice(e,1):d.recFilters.tags.push(t),Ms(),it()}function R1(){const t=pe("ks-recTagsExpanded");et("ks-recTagsExpanded",!t),it()}function P1(){d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},d.recSearch="",Ms(),it()}function Ms(){et("ks-recFilters",d.recFilters)}function $1(){const t=pe("ks-recFilters");t&&(d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...t}),d.recSort=pe("ks-recSort")||"az"}$1();function L1(){const t=pe("ks-comTagsOpen");et("ks-comTagsOpen",!t),pt()}function D1(){d.comTags=[],d.comCuisine="all",d.comTime="any",d.comMinRating=0,d.comSort="newest",d.comSearch="",d.comPage=0,pt()}function N1(t){if(!t)return 0;const e=t.match(/(\d+)/);return e?parseInt(e[1]):0}function M1(t){const e=Array.from({length:5},(f,g)=>`<span class="star${g<t.rating?" on":""}">${g<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"",i=t.imageUrl?`<div class="rcd-cover"><img src="${t.imageUrl}" loading="lazy" alt="" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[];if(t.difficulty){const f=t.difficulty==="easy"?"recipe-badge-easy":t.difficulty==="hard"?"recipe-badge-hard":"recipe-badge-medium",g=t.difficulty.charAt(0).toUpperCase()+t.difficulty.slice(1);s.push(`<span class="recipe-badge ${f}">${g}</span>`)}(t.totalTime||t.cookTime)&&s.push(`<span class="recipe-badge recipe-badge-time">⏱ ${t.totalTime||t.cookTime}</span>`);const o=[t.servings?`🍽 ${t.servings} servings`:""].filter(Boolean),r=[...s,...o.map(f=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${f}</span>`)],a=r.length?`<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;align-items:center">${r.join("")}</div>`:"",l=t.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${t.summary}</div>`:t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:"",h=`<div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${a}${l}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div>`;return t.imageUrl?`<div class="rcd rcd-has-image${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${i}<div class="rcd-content">${h}</div></div>`:`<div class="rcd${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${h}</div>`}function O1(t){d.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=u("rtab-"+t);e&&e.classList.add("active"),t==="community"?Fa():it()}function it(){if(d.rt==="community")return;let t=[...d.recs];if(d.rt==="fav"?t=t.filter(r=>r.favorited):d.rt==="top"?t=t.filter(r=>r.rating>=4):d.rt==="quick"?t=t.filter(r=>(r.tags||[]).includes("Quick")):d.rt==="kid"&&(t=t.filter(r=>(r.tags||[]).includes("Kid-Friendly"))),d.recSearch){const r=d.recSearch.toLowerCase();t=t.filter(a=>(a.name||"").toLowerCase().includes(r))}const e=d.recFilters;e.tags.length&&(t=t.filter(r=>e.tags.every(a=>(r.tags||[]).includes(a)))),e.difficulty&&(t=t.filter(r=>r.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(t=t.filter(r=>{const a=aa(r.cookTime||r.totalTime);return a?e.cookTime==="under30"?a<=30:e.cookTime==="under60"?a<=60:e.cookTime==="over60"?a>60:!0:!1})),e.serves&&e.serves!=="any"&&(t=t.filter(r=>{const a=N1(r.servings);return a?e.serves==="1-2"?a<=2:e.serves==="3-4"?a>=3&&a<=4:e.serves==="5+"?a>=5:!0:!1})),e.protein.length&&(t=t.filter(r=>e.protein.some(a=>(r.tags||[]).includes(a))));const n=d.recSort||"az";n==="az"?t.sort((r,a)=>(r.name||"").localeCompare(a.name||"")):n==="newest"?t.sort((r,a)=>new Date(a.savedAt||0)-new Date(r.savedAt||0)):n==="rating"&&t.sort((r,a)=>(a.rating||0)-(r.rating||0));const i=u("rsub");i&&(i.textContent=t.length+" recipe"+(t.length!==1?"s":""));const s=u("rbody");if(!s)return;const o=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(d.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${n==="az"?" selected":""}>A → Z</option>
        <option value="newest"${n==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${n==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${Nv("my")}
  </div>`;if(!t.length){const r=d.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length,a=r?"🔍":d.rt==="fav"?"❤️":d.rt==="top"?"⭐":d.rt==="quick"?"⚡":d.rt==="kid"?"🧸":"🍝",l=r?"No recipes match your filters.<br><span style='font-size:.78rem;color:var(--ac)'>Try adjusting or clearing filters</span>":d.rt==="fav"?"No favorites yet!<br><span style='font-size:.78rem;color:var(--ac)'>Tap the heart on any recipe to save it here</span>":d.rt==="top"?"No 4–5 star recipes yet.<br><span style='font-size:.78rem;color:var(--ac)'>Rate your recipes to see them here</span>":d.rt==="quick"?"No quick recipes saved yet.":d.rt==="kid"?"No kid-friendly recipes yet.":"Your recipe book is empty.<br><span style='font-size:.78rem;color:var(--ac)'>Tap + Add or cook a meal to start collecting</span>";s.innerHTML=o+`<div class="es"><div class="ei">${a}</div><p>${l}</p></div>`;return}s.innerHTML=o+`<div class="recipe-grid">${t.map(M1).join("")}</div>`,g1(s)}async function V1(t){const e=d.recs.find(n=>n.id===t);e&&(await nt({...e,favorited:!e.favorited}),_(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function U1(){u("savrecbtn").disabled=!u("rn").value.trim()}async function F1(){const t=u("rurl").value.trim();if(!t)return;const e=u("rurlstatus"),n=u("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",n.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),n.disabled=!1;return}const o=s.recipe,r=Du(o);if(u("rn").value=o.title||"",u("rd").value=r,u("rnotes").value=o.notes||"",u("rsourceurl").value=t,u("rcuisine")&&(u("rcuisine").value=o.cuisine||""),o.tags&&o.tags.length&&Dv("rtags",o.tags),u("savrecbtn").disabled=!o.title,J1(o.imageUrl),d._importedRecipe={ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],imageUrl:o.imageUrl||null,prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",summary:o.summary||""},o.prepTime){const l=en(o.prepTime);u("rpreptime")&&(u("rpreptime").value=l.value),u("rpreptimeunit")&&(u("rpreptimeunit").value=l.unit)}if(o.cookTime){const l=en(o.cookTime);u("rcooktime")&&(u("rcooktime").value=l.value),u("rcooktimeunit")&&(u("rcooktimeunit").value=l.unit)}if(o.totalTime){const l=en(o.totalTime);u("rtotaltime")&&(u("rtotaltime").value=l.value),u("rtotaltimeunit")&&(u("rtotaltimeunit").value=l.unit),cr.add=!0}o.servings&&u("rserves")&&(u("rserves").value=o.servings),o.difficulty&&["Easy","Medium","Hard"].includes(o.difficulty)&&$v("rdiff",o.difficulty),o.recipeYield&&u("ryield")&&(u("ryield").value=o.recipeYield),o.storageInstructions&&u("rstorage")&&(u("rstorage").value=o.storageInstructions);const a=[o.prepTime?`Prep: ${o.prepTime}`:"",o.cookTime?`Cook: ${o.cookTime}`:"",o.servings?`Serves: ${o.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(a.length?a.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}function j1(t){const e=u("importOnePane"),n=u("importManyPane"),i=u("importOneTab"),s=u("importManyTab");e&&(e.style.display=t==="one"?"block":"none"),n&&(n.style.display=t==="many"?"block":"none"),i&&(i.style.background=t==="one"?"var(--ac)":"",i.style.color=t==="one"?"var(--bg)":""),s&&(s.style.background=t==="many"?"var(--ac)":"",s.style.color=t==="many"?"var(--bg)":"")}function B1(t){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(t.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function H1(t){const e=t.toLowerCase(),n=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const o of n)if(o.pattern.test(e))return{status:"video",reason:`${o.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const o of i)if(o.pattern.test(e))return{status:"private",reason:`${o.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const o of s)if(o.pattern.test(e))return{status:"paywall",reason:`${o.name} — may be paywalled`};return{status:"ok",reason:""}}async function z1(){const t=u("bulkUrls"),e=t?t.value.trim():"";if(!e)return;const n=B1(e);if(!n.length){_("No URLs found in the text");return}const i=n.map(E=>({url:E,...H1(E)})),s=i.filter(E=>E.status==="ok"),o=i.filter(E=>E.status==="paywall"),r=i.filter(E=>E.status==="video"),a=i.filter(E=>E.status==="private"),l=u("bulkImportProgress");if(!l)return;l.style.display="block";const h=u("bulkImportBtn");h&&(h.disabled=!0);const f=[...s,...o],g=[],w=f.filter(E=>{const $=d.recs.find(P=>P.sourceUrl&&P.sourceUrl===E.url);return $?(g.push({url:E.url,name:$.name||$.url}),!1):!0}),k={success:[],duplicates:g,failed:[],skipped:[...r,...a]};for(let E=0;E<w.length;E++){const $=w[E],P=$.status==="paywall"?" — may be paywalled":"";E>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${E+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(O=>setTimeout(O,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${E+1} of ${w.length}…${P}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const O=await q1($.url,l,E,w.length);if(O.success&&O.recipe){const M=O.recipe,N=Du(M),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await nt({id:D,name:M.title||"Untitled Recipe",description:N,notes:M.notes||"",rating:0,favorited:!1,sourceUrl:$.url,source:"AI Import",imageUrl:M.imageUrl||null,ingredientsRaw:M.ingredients||[],stepsRaw:M.steps||[],prepTime:M.prepTime||"",cookTime:M.cookTime||"",totalTime:M.totalTime||"",servings:M.servings||"",difficulty:M.difficulty||"",recipeYield:M.recipeYield||"",storageInstructions:M.storageInstructions||"",tags:M.tags||[],savedAt:new Date().toLocaleDateString()}),k.success.push({url:$.url,name:M.title})}else{const M=G1(O.reason,O.error);k.failed.push({url:$.url,error:M})}}catch(O){k.failed.push({url:$.url,error:O.message})}}K1(l,k),h&&(h.disabled=!1)}async function q1(t,e,n,i){const s=[1e4,2e4,4e4],o=3,r=W1(t),a=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});let l=await a.json();if(a.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<o;h++){const f=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${f}s before retrying ${r}… (${n+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function W1(t){try{const e=new URL(t),n=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${n}/${i}`:n}catch{return t.length>40?"…"+t.slice(-40):t}}function G1(t,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[t]||e||"Unknown error"}function K1(t,e){let n="";e.success.length&&(n+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.duplicates.length&&(n+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.skipped.length&&(n+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{n+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),n+="</div>"),e.failed.length&&(n+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,n+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{n+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',n+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,n+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,n+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,n+="</div>"}),n+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(n='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),t.innerHTML=n}async function Q1(t){const e=u("bulkImportProgress");if(!e)return;const n=d.recs.find(s=>s.sourceUrl&&s.sourceUrl===t);if(n){_(`Already imported: ${n.name||t}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const o=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(o.success&&o.recipe){const r=o.recipe,a=Du(r),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await nt({id:l,name:r.title||"Untitled Recipe",description:a,notes:r.notes||"",rating:0,favorited:!1,sourceUrl:t,source:"AI Import",imageUrl:r.imageUrl||null,ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",tags:r.tags||[],savedAt:new Date().toLocaleDateString()}),_(`Imported: ${r.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${r.title||t} — imported</div>`)}else _("Import failed: "+(o.error||"Unknown error")),e.innerHTML=i}catch(s){_("Import failed: "+s.message),e.innerHTML=i}}function Du(t){const e=[];return t.description&&(e.push(t.description),e.push("")),t.ingredients&&t.ingredients.length&&(e.push("Ingredients:"),t.ingredients.forEach(n=>{if(typeof n=="string")e.push(`- ${n}`);else{const i=[n.amount,n.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${n.name}`)}}),e.push("")),t.steps&&t.steps.length&&(e.push("Steps:"),t.steps.forEach((n,i)=>{e.push(`${i+1}. ${n}`)})),e.join(`
`)}function J1(t){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!t)return;const n=u("addRecCoverZone");n&&(n.classList.add("has-preview"),n.innerHTML=`<img src="${t}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function Y1(){var $,P,O,M;const t=u("rn").value.trim();if(!t)return;const e=u("rd").value.trim(),n=u("rsourceurl")?u("rsourceurl").value.trim():"",i=u("rcuisine")?u("rcuisine").value.trim():"",s=Lu("rtags"),o=document.getElementById("rpubtoggle"),r=o?o.classList.contains("on"):!1,a=d._importedRecipe||{},l="rec-"+Date.now();let h=a.imageUrl||null;if(Ut)try{_("Uploading cover photo…"),h=await Ev(Ut,l),Ut=null}catch(N){console.error("Cover upload failed:",N),_("Cover photo upload failed — saving recipe without it")}const f={id:l,name:t,rating:d.nr,favorited:!1,notes:u("rnotes").value.trim(),description:e,source:n?"AI Import":"Manual",sourceUrl:n||null,imageUrl:h,tags:s,cuisine:i,prepTime:_s("rpreptime","rpreptimeunit")||a.prepTime||"",cookTime:_s("rcooktime","rcooktimeunit")||a.cookTime||"",totalTime:Pv("rtotaltime","rtotaltimeunit")||a.totalTime||"",servings:(u("rserves")?u("rserves").value.trim():"")||a.servings||"",difficulty:Lv("rdiff")||a.difficulty||"",recipeYield:(u("ryield")?u("ryield").value.trim():"")||a.recipeYield||"",storageInstructions:(u("rstorage")?u("rstorage").value.trim():"")||a.storageInstructions||"",summary:(u("rsummary")?u("rsummary").value.trim():"")||a.summary||"",ingredientsRaw:a.ingredientsRaw||[],stepsRaw:a.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:r};if(!f.summary&&(f.name||f.description))try{_("Generating summary…");const N=(($=f.ingredientsRaw)==null?void 0:$.join(", "))||f.description||"",q=((M=(O=(P=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${f.name}
Cuisine: ${f.cuisine||""}
Ingredients: ${N.substring(0,500)}`}]})})).json()).content)==null?void 0:P[0])==null?void 0:O.text)==null?void 0:M.trim())||"";q&&(f.summary=q)}catch(N){console.error("Auto-summary generation failed:",N)}if(r){const N=Q(),D=(N==null?void 0:N.displayName)||localStorage.getItem("ks-who")||"Anonymous",B=await Ld(f,D);f.publicId=B.id,Se("published",Z(f.name||"a recipe")+" to community")}await nt(f),u("rn").value="",u("rnotes").value="",u("rd").value="",u("rsourceurl").value="",u("rurl").value="",u("rcuisine")&&(u("rcuisine").value=""),u("rpreptime")&&(u("rpreptime").value=""),u("rcooktime")&&(u("rcooktime").value=""),u("rtotaltime")&&(u("rtotaltime").value=""),u("rserves")&&(u("rserves").value=""),u("rpreptimeunit")&&(u("rpreptimeunit").value="min"),u("rcooktimeunit")&&(u("rcooktimeunit").value="min"),u("rtotaltimeunit")&&(u("rtotaltimeunit").value="min"),u("ryield")&&(u("ryield").value=""),u("rstorage")&&(u("rstorage").value=""),u("rsummary")&&(u("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(N=>N.classList.remove("sel")),cr.add=!1,Dv("rtags",[]),d.nr=0,d._importedRecipe=null,u("savrecbtn").disabled=!0,To("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const k=u("addRecCoverZone");k&&(k.classList.remove("has-preview"),k.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),o&&o.classList.remove("on");const E=u("rurlstatus");E&&(E.style.display="none",E.textContent=""),_("Recipe saved! 📖"),ue("arec")}function Mv(t){const e=d.recs.find(v=>v.id===t);if(!e)return;d.eid=t,bs="view";const n=u("erecTitle");n&&(n.textContent="Recipes"),ti(()=>lr());let i;e.imageUrl?i=`<div class="rv-cover">
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
`),b=v.findIndex(S=>/^steps/i.test(S.trim()));if(b>=0){const S=v.slice(b+1).filter(I=>I.trim());S.length&&(E=`<div class="rv-section">Instructions</div><ol class="rv-steps">${S.map(I=>`<li>${de(I.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let $="";!k&&!E&&e.description&&($=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${de(e.description)}</div>`);const P=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${de(e.storageInstructions)}</div>`:"",O=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${de(e.notes)}</div>`:"";let M="";const N=(e.name||"").toLowerCase();if(N){const v=(d.activity||[]).filter(b=>b.action==="cooked"&&(b.itemName||"").toLowerCase().includes(N)).map(b=>new Date(b.timestamp)).sort((b,S)=>S-b).slice(0,5).map(b=>b.toLocaleDateString("en-US",{month:"short",day:"numeric"}));v.length&&(M=`<div style="margin-top:14px;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">🍳 Made this before</div>
        <div style="font-size:.84rem;color:var(--tx)">${v.join(", ")}</div>
      </div>`)}const D=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",B=e.householdNotes||"",q=`<div style="margin-top:14px" id="rv-hh-notes-section">
    <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">📝 Household Notes</div>
    <div id="rv-hh-notes-display" onclick="editHouseholdNotes('${e.id}')" style="cursor:pointer;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1);font-size:.84rem;color:${B?"var(--tx)":"var(--mt)"};line-height:1.6;min-height:40px;font-style:${B?"normal":"italic"}">${B?de(B):"Tap to add a note…"}</div>
    <textarea id="rv-hh-notes-edit" style="display:none;width:100%;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--ac);font-size:.84rem;color:var(--tx);line-height:1.6;font-family:'DM Sans',sans-serif;resize:vertical;min-height:70px" onblur="saveHouseholdNotes('${e.id}')" placeholder="e.g. Add extra garlic next time, Double the sauce…">${B}</textarea>
  </div>`,C=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;u("erecbody").innerHTML=`
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
  `,qe("erec")}function X1(t){const e=u("rv-hh-notes-display"),n=u("rv-hh-notes-edit");!e||!n||(e.style.display="none",n.style.display="block",n.focus())}async function Z1(t){const e=u("rv-hh-notes-edit"),n=u("rv-hh-notes-display");if(!e)return;const i=e.value.trim(),s=d.recs.find(o=>o.id===t);s&&(s.householdNotes=i,await nt(s)),n&&(n.textContent=i||"Tap to add a note…",n.style.color=i?"var(--tx)":"var(--mt)",n.style.fontStyle=i?"normal":"italic",n.style.display="block"),e.style.display="none"}function lr(){if(Ns(),bs==="edit"&&d._editingComId){const t=d._editingComId;d._editingComId=null,ja(t);return}if(bs==="edit"&&d.eid)Mv(d.eid);else{const t=u("erecTitle");t&&(t.textContent="Recipes"),ue("erec")}}function de(t){return(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Nu(t){const e=d.recs.find(E=>E.id===t);if(!e)return;d.eid=t,bs="edit",Ut=null,ss={};const n=u("erecTitle");n&&(n.textContent="Edit Recipe"),ti(()=>lr());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],o=E=>s.includes(E)?" sel":"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=en(e.prepTime),f=en(e.cookTime),g=en(e.totalTime);cr.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
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
      </div>`}).join("")}</div>`,k+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),u("erecbody").innerHTML=`
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
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,qe("erec")}async function e$(){var B,q,C;const t=d.recs.find(v=>v.id===d.eid);if(!t)return;const e=t.rating||0,n=Lu("etags"),i=u("ecuis")?u("ecuis").value.trim():t.cuisine||"";let s=t.imageUrl;if(Ut)try{_("Uploading cover photo…"),s=await Ev(Ut,t.id),Ut=null}catch(v){console.error("Cover upload failed:",v),_("Cover photo upload failed — saving recipe without it")}else t._removeCover&&(s=null,delete t._removeCover,Av(`recipes/${t.id}/cover.jpg`).catch(()=>{}));const o={...t.stepPhotos||{}},r=Object.keys(ss);if(r.length){_("Uploading step photos…");for(const v of r)try{const b=await a1(ss[v],t.id,parseInt(v));o[v]=b}catch(b){console.error(`Step ${v} photo upload failed:`,b)}ss={}}const a=_s("epreptime","epreptimeunit")||"",l=_s("ecooktime","ecooktimeunit")||"",h=Pv("etotaltime","etotaltimeunit")||"",f=u("eserves")?u("eserves").value.trim():t.servings||"",g=Lv("ediff")||"",w=u("eyield")?u("eyield").value.trim():t.recipeYield||"",k=u("estorage")?u("estorage").value.trim():t.storageInstructions||"";let E=u("esummary")?u("esummary").value.trim():t.summary||"";const $=u("ern").value.trim(),P=u("erd").value.trim(),O=$!==t.name,M=P!==(t.description||"")&&Math.abs(P.length-(t.description||"").length)>20,N=i!==(t.cuisine||"");if(E===(t.summary||"")&&(O||M||N))try{const I=(((C=(q=(B=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${t.name}
New title: ${$}
Old cuisine: ${t.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${P.substring(0,300)}
Old summary: ${E||"(none)"}`}]})})).json()).content)==null?void 0:B[0])==null?void 0:q.text)==null?void 0:C.trim())||"").match(/\{[\s\S]*\}/);if(I){const A=JSON.parse(I[0]);A.shouldUpdate&&A.newSummary&&(E=A.newSummary,_("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...t,name:$,rating:e,description:P,notes:u("erno").value.trim(),favorited:u("etog").classList.contains("on"),tags:n,cuisine:i,imageUrl:s,stepPhotos:o,prepTime:a,cookTime:l,totalTime:h,servings:f,difficulty:g,recipeYield:w,storageInstructions:k,summary:E};await nt(D),_("Recipe updated!"),ue("erec"),t.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const b={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},S=(v=d.comRecs)==null?void 0:v.find(I=>I.id===t.publicId);S?await j(`public_recipes/${t.publicId}`,{...S,...b,id:void 0}):await j(`public_recipes/${t.publicId}`,b),_("Community version updated!")}catch(b){console.error("Community sync failed:",b),_("Couldn't update community version")}},300)}async function t$(){const t=d.recs.find(i=>i.id===d.eid);if(!t)return;const e=t.name||t.title||"this recipe";if(!t.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await ol(d.eid),_("Recipe deleted"),ue("erec");return}const n=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(n)if(n.trim()==="1")await ol(d.eid),_("Local copy deleted — community version kept"),ue("erec");else if(n.trim()==="2"){try{await Dd(t.publicId)}catch(i){console.error("Failed to remove community version:",i)}await ol(d.eid),_("Recipe deleted from everywhere"),ue("erec")}else _("Cancelled — type 1 or 2 to delete")}async function n$(t){const e=u("erd");if(!e)return;const n=e.value.trim();if(!n){_("No ingredients to scale");return}const i=u("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"";r?(e.value=r.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${t}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function i$(){const t=u("rsub");t&&(t.textContent="Thinking…");const e=d.inv.map(s=>`${s.name} (${cs(s.qty,s.unit)})`).join(", "),n=d.recs.map(s=>s.name).join(", "),i=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other||null].filter(Boolean).join(", ");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",a=u("rbody");a&&(a.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${qw(r)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function s$(t){const e=d.recs.find(n=>n.id===t);if(!e||!e.description){_("No ingredients listed");return}_("Parsing ingredients…");try{const n=d.inv.map(h=>h.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),o=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(o).filter(h=>am(h)).filter(h=>!n.some(f=>f.includes(h.toLowerCase())||h.toLowerCase().includes(f)));if(!l.length){_("All ingredients already in pantry ✓");return}for(const h of l)await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:h,qty:1,checked:!1,src:"recipe"});_(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),ue("erec"),window.showScreen("shopping")}catch{_("Couldn't parse ingredients")}}async function o$(t){const e=t||d.eid,n=d.recs.find(s=>s.id===e);if(!n){_("Recipe not found");return}const i=u("parseAIBtn");i&&(i.disabled=!0,i.textContent="✨ Parsing with AI...");try{const s=n.description||"",o=(n.stepsRaw||[]).map((f,g)=>{const w=typeof f=="string"?f:f.text||"";return`${g+1}. ${w}`}).join(`
`)||"",a=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:s,instructions:o,title:n.name||""})})).json();if(!a.success){_(a.error||"AI parsing failed");return}const{ingredients:l,steps:h}=a.result;r$(e,l,h)}catch(s){console.error("Parse with AI failed:",s),_("Couldn't parse recipe — try again")}finally{i&&(i.disabled=!1,i.textContent="✨ Parse with AI")}}function r$(t,e,n){const i=e.map(r=>{const a=[r.amount,r.unit].filter(Boolean).join(" ");return`<div style="padding:6px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
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
  </div>`,o._parsedData={recipeId:t,ingredients:e,steps:n},o.addEventListener("click",r=>{r.target===o&&Va()}),document.body.appendChild(o)}function Va(){const t=u("parsePreviewModal");t&&t.remove()}async function a$(){const t=u("parsePreviewModal");if(!t||!t._parsedData)return;const{recipeId:e,ingredients:n,steps:i}=t._parsedData,s=d.recs.find(a=>a.id===e);if(!s){_("Recipe not found"),Va();return}let o=[];n.length&&(o.push("Ingredients:"),n.forEach(a=>{const l=[a.amount,a.unit].filter(Boolean).join(" ");o.push(`- ${l?l+" ":""}${a.name}`)}),o.push("")),i.length&&(o.push("Steps:"),i.forEach((a,l)=>o.push(`${l+1}. ${a}`)));const r={...s,description:o.join(`
`),ingredientsRaw:n,stepsRaw:i};try{await nt(r),_("Recipe restructured and saved ✓"),Va(),Nu(e)}catch(a){console.error("Failed to save parsed recipe:",a),_("Couldn't save — try again")}}function c$(t,e){d.nr=t,e==="r"?(To("rstars",t),Bf("rstars",e)):e==="c"&&(To("cstars",t),Bf("cstars",e))}function Bf(t,e){const n=u(t);if(!n)return;const i=n.querySelector(".star-clear");if(i&&i.remove(),d.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=o=>{if(o.stopPropagation(),d.nr=0,To(t,0),s.remove(),e==="rv"&&d.eid){const r=d.recs.find(a=>a.id===d.eid);r&&(r.rating=0,nt({...r,rating:0}))}},n.appendChild(s)}}async function l$(t){const e=d.recs.find(i=>i.id===d.eid);if(!e)return;e.rating=t,d.nr=t;const n=u("rvstars");n&&(n.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<t?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<t?"★":"☆"}</span>`).join("")+(t>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await nt({...e,rating:t})}async function d$(t){const e=d.recs.find(o=>o.id===t);if(!e)return;const n=!e.isPublic,i=Q(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(n){const o=await pg(e);if(o){_("This recipe has already been published to the community.");const a=u("epub");a&&!a.classList.contains("on")&&a.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=o.id,await nt({...e}));return}const r=await Ld(e,s);e.publicId=r.id,Se("published",Z(e.name||"a recipe")+" to community"),_("Recipe shared with the community!")}else{const o=e.publicId||e.id;await Dd(o),e.publicId=null,Se("unpublished",Z(e.name||"a recipe")+" from community"),_("Recipe removed from community")}await nt({...e,isPublic:n,publicId:e.publicId||null})}function u$(t){const n=u(t==="add"?"addRecCoverInput":"editCoverInput");n&&n.click()}function h$(t,e){var i,s;const n=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];n&&(Ut=n,Ov(n,e))}function p$(t,e){var i,s;const n=(s=(i=t.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!n||!n.type.startsWith("image/")||(Ut=n,Ov(n,e))}function Ov(t,e){const i=u(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=o=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${o.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(t)}function f$(t){Ut=null;const n=u(t==="add"?"addRecCoverZone":"editCoverZone");if(n&&(n.classList.remove("has-preview"),n.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',t==="edit"&&d.eid)){const i=d.recs.find(s=>s.id===d.eid);i&&(i._removeCover=!0)}}let ra=null;function m$(t){ra=t;const e=u("stepPhotoInput");e&&(e.value="",e.click())}function g$(t){var i,s;const e=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||ra===null)return;ss[ra]=e;const n=new FileReader;n.onload=o=>{_(`Step ${ra+1} photo added`)},n.readAsDataURL(e)}function y$(t){const e=d.recs.find(n=>n.id===d.eid);if(e){if(delete ss[t],e.stepPhotos&&e.stepPhotos[t]){const n=`recipes/${e.id}/steps/${t}.jpg`;Av(n).catch(()=>{}),delete e.stepPhotos[t]}Nu(e.id),_(`Step ${t+1} photo removed`)}}function v$(t,e){fi=t||[],mi=e||0,Uv();const n=u("photoViewer");n&&n.classList.add("active"),b$()}function w$(){const t=u("photoViewer");t&&t.classList.remove("active"),fi=[]}function Vv(t){const e=mi+t;e<0||e>=fi.length||(mi=e,Uv())}function Uv(){const t=u("pvImg"),e=u("pvCounter"),n=u("pvPrev"),i=u("pvNext");t&&(t.src=fi[mi]||""),e&&(e.textContent=fi.length>1?`${mi+1} / ${fi.length}`:""),n&&(n.style.display=mi>0?"flex":"none"),i&&(i.style.display=mi<fi.length-1?"flex":"none")}function b$(){const t=u("pvWrap");if(!t)return;let e=0,n=0;const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,n=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const o=s.changedTouches[0].clientX-e,r=s.changedTouches[0].clientY-n;Math.abs(o)>50&&Math.abs(o)>Math.abs(r)&&Vv(o<0?1:-1)},{passive:!0})}function _$(){const t=u("cmtPhotoInput");t&&(t.value="",t.click())}function k$(t){var n;const e=(n=t.target)==null?void 0:n.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&Pt.push(e[i]);Fv()}}function T$(t){Pt.splice(t,1),Fv()}function Fv(){const t=u("cmtPhotoPreview");if(!t)return;if(!Pt.length){t.innerHTML="";return}let e="";Pt.forEach((n,i)=>{const s=URL.createObjectURL(n);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',t.innerHTML=e}let $t=null;function aa(t){if(!t)return 0;const e=t.toLowerCase();let n=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(n+=parseInt(i[1])*60),s&&(n+=parseInt(s[1])),n}function Ua(t,e){const n=Math.round(t||0),i=Array.from({length:5},(o,r)=>r<n?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Fa(){const t=u("rbody");if(t){t.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',d.comPage=0;try{d.comRecs=await Ft(),pt()}catch(e){console.error("loadCommunity:",e),t.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function C$(t){d.comCuisine=t,d.comPage=0,pt()}function I$(t){d.comSearch=t,d.comPage=0,pt()}function S$(t){d.comSort=t,d.comPage=0,pt()}function E$(t){const e=d.comTags.indexOf(t);e>=0?d.comTags.splice(e,1):d.comTags.push(t),d.comPage=0,pt()}function A$(t){d.comTime=t,d.comPage=0,pt()}function x$(t){d.comMinRating=parseInt(t)||0,d.comPage=0,pt()}function pt(){const t=u("rbody");if(!t)return;$t&&($t.disconnect(),$t=null);let e=[...d.comRecs];if(d.comCuisine&&d.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(d.comCuisine.toLowerCase())||(l.tags||[]).some(h=>h.toLowerCase().includes(d.comCuisine.toLowerCase())))),d.comSearch){const l=d.comSearch.toLowerCase();e=e.filter(h=>(h.title||"").toLowerCase().includes(l)||(h.tags||[]).join(" ").toLowerCase().includes(l)||(h.cuisine||"").toLowerCase().includes(l)||(h.authorUsername||"").toLowerCase().includes(l)||(h.authorName||"").toLowerCase().includes(l))}d.comTags.length&&(e=e.filter(l=>d.comTags.every(h=>(l.tags||[]).includes(h)))),d.comTime&&d.comTime!=="any"&&(e=e.filter(l=>{const h=aa(l.cookTime||l.totalTime);return h?d.comTime==="under30"?h<=30:d.comTime==="30to60"?h>30&&h<=60:d.comTime==="over60"?h>60:!0:!1})),d.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=d.comMinRating)),d.comSort==="popular"?e.sort((l,h)=>(h.likes||0)-(l.likes||0)):d.comSort==="rated"?e.sort((l,h)=>(h.avgRating||0)-(l.avgRating||0)):d.comSort==="az"?e.sort((l,h)=>(l.title||"").localeCompare(h.title||"")):d.comSort==="cooktime"?e.sort((l,h)=>aa(l.cookTime||l.totalTime)-aa(h.cookTime||h.totalTime)):e.sort((l,h)=>new Date(h.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(d.comPage+1)*20),s=i.length<e.length,o=u("rsub");o&&(o.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const r=d.comSort||"newest";let a=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${d.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${r==="newest"?" selected":""}>Newest first</option>
        <option value="az"${r==="az"?" selected":""}>A → Z</option>
        <option value="rated"${r==="rated"?" selected":""}>Highest rated</option>
        <option value="popular"${r==="popular"?" selected":""}>Most popular</option>
        <option value="cooktime"${r==="cooktime"?" selected":""}>Cook time</option>
      </select>
    </div>
    ${Nv("com")}
  </div>`;if(!e.length){const l=d.comSearch||d.comCuisine!=="all"||d.comTags.length||d.comTime!=="any"||d.comMinRating>0;a+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,t.innerHTML=a;return}if(a+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const h=(l.tags||[]).slice(0,3).map(E=>`<span class="com-tag">${E}</span>`).join(""),f=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" loading="lazy" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",k=l.commentCount||0;a+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
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
        ${l.avgRating||l.ratingCount?`<span>${Ua(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${h}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${f}</div>
      </div>
    </div>`}),a+="</div>",s&&(a+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),t.innerHTML=a,s){const l=u("com-scroll-sentinel");l&&($t=new IntersectionObserver(h=>{h[0].isIntersecting&&(d.comPage++,jv(e,t))},{rootMargin:"200px"}),$t.observe(l))}}function jv(t,e){const i=d.comPage*20,s=i+20,o=t.slice(i,s),r=s<t.length;let a="";o.forEach(f=>{const g=(f.tags||[]).slice(0,3).map(P=>`<span class="com-tag">${P}</span>`).join(""),w=f.authorUsername?`@${f.authorUsername}`:f.authorName||"Anonymous",k=f.cookTime||f.totalTime||"",E=f.commentCount||0,$=f.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${f.imageUrl}" loading="lazy" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";a+=`<div class="rcd com-rcd" onclick="openComRecipe('${f.id}')">
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
        ${f.avgRating||f.ratingCount?`<span>${Ua(f.avgRating,f.ratingCount)}</span>`:""}
        ${k?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${k}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=u("com-scroll-sentinel");l&&l.remove(),$t&&($t.disconnect(),$t=null);const h=u("com-recipe-grid");if(h?h.insertAdjacentHTML("beforeend",a):e.insertAdjacentHTML("beforeend",a),r){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const f=u("com-scroll-sentinel");f&&($t=new IntersectionObserver(g=>{g[0].isIntersecting&&(d.comPage++,jv(t,e))},{rootMargin:"200px"}),$t.observe(f))}}async function ja(t){var dr;const e=d.comRecs.find(me=>me.id===t);if(!e)return;d._openComId=t,bs="view",Pt=[];const n=u("erecTitle");n&&(n.textContent="Recipes"),ti(()=>lr());const i=(dr=Q())==null?void 0:dr.uid,[s,o,r,a]=await Promise.all([P0(t),R0(t).catch(()=>[]),V0(t).catch(()=>null),N0(t)]);s?d.myLikes.add(t):d.myLikes.delete(t),o.sort((me,bt)=>new Date(me.createdAt||0)-new Date(bt.createdAt||0)),d._comComments=o;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,h=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" loading="lazy" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",f=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=f.length?`<div class="rv-meta">${f.map(me=>`<div class="rv-meta-pill">${me}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Ua(e.avgRating,e.ratingCount)}</div>`:"",k=(e.tags||[]).map(me=>`<span class="com-tag">${me}</span>`).join(""),E=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",$=d.myLikes.has(t),P=i&&i===e.authorUid;let O=!1;!P&&i&&e.householdId&&e.householdId===d.hid&&(O=!0);const M=P||O,N=P||e.householdId&&e.householdId===d.hid;let D="";e.ingredientsRaw&&e.ingredientsRaw.length?D=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(me=>`<li>${(typeof me=="string"?me:(me.amount||"")+" "+(me.unit||"")+" "+(me.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(D=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let B="";e.stepsRaw&&e.stepsRaw.length?B=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(me=>`<li style="margin-bottom:8px">${(typeof me=="string"?me:me.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(B=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const q=O$(o.slice(0,20),t,i,P),C=o.length>20,v=(r==null?void 0:r.rating)||0,b=v>0?`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",S=P?"":Array.from({length:5},(me,bt)=>`<span class="star${bt<v?" on":""}" onclick="rateComRecipe('${t}',${bt+1})" style="cursor:pointer;font-size:1.3rem">${bt<v?"★":"☆"}</span>`).join("")+b,I=M?`<button class="btn bs bsm" onclick="editComRecipe('${t}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",A=P?`<button class="btn bd bsm" onclick="unpublishComRecipe('${t}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",T=I+A,Ee=!M&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${t}','${t}')" title="Report recipe">🚩 Report</button>`:"";u("erecbody").innerHTML=`
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
    ${B?`<div class="frow"><label class="flbl">Instructions</label>${B}</div>`:""}

    ${P?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${S}</div>
      ${v?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${v}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${Ua(e.avgRating,e.ratingCount)} avg</div>`:""}
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

    ${T}`;const ft=u("com-cmt-input");ft&&ft.addEventListener("input",()=>{const me=u("com-cmt-counter");me&&(me.textContent=`${ft.value.length} / 500`)}),qe("erec")}async function R$(t,e){return Bv(t,e)}async function Bv(t,e){if(!Q()){_("Sign in to rate recipes");return}try{const i=await O0(t,e);if(!i){_("You can't rate your own recipe");return}const s=d.comRecs.find(a=>a.id===t);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const o=u("com-rating-stars");o&&(o.innerHTML=Array.from({length:5},(a,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${t}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const r=u("com-rating-label");r&&(r.textContent=`You rated this ${e}★`),_(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),_("Couldn't submit rating")}}async function P$(t){if(Q())try{const n=await U0(t);if(!n)return;const i=d.comRecs.find(r=>r.id===t);i&&(i.ratingSum=n.ratingSum,i.ratingCount=n.ratingCount,i.avgRating=n.avgRating);const s=u("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(r,a)=>`<span class="star" onclick="rateComRecipe('${t}',${a+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const o=u("com-rating-label");o&&(o.textContent=""),_("Rating cleared")}catch(n){console.error("clearComRating:",n),_("Couldn't clear rating")}}async function $$(t){if(confirm("Remove this recipe from the community?"))try{await Dd(t),d.comRecs=d.comRecs.filter(e=>e.id!==t),_("Recipe unpublished"),ue("erec"),pt()}catch(e){console.error("unpublishComRecipe:",e),_("Couldn't unpublish recipe")}}async function L$(t){if(!Q()){_("Sign in to like recipes");return}const n=d.myLikes.has(t);try{await A0(t,n),n?d.myLikes.delete(t):d.myLikes.add(t);const i=d.comRecs.find(o=>o.id===t);i&&(i.likes=(i.likes||0)+(n?-1:1));const s=u("com-like-btn");if(s){const o=d.myLikes.has(t);s.className=`btn ${o?"bp":"bs"} bsm`,s.innerHTML=`${o?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}_(n?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),_("Couldn't update like")}}async function D$(t){if(!Q()){_("Sign in to save recipes");return}const n=d.comRecs.find(i=>i.id===t);if(n)try{await $0(n),Se("saved",Z(n.title||"a recipe")+" from community"),_("Recipe saved to your kitchen! 📖"),ue("erec")}catch(i){console.error("saveComToKitchen:",i),_("Couldn't save recipe")}}async function N$(t){var o;const e=Q();if(!e){_("Sign in to comment");return}const n=u("com-cmt-input"),i=(o=n==null?void 0:n.value)==null?void 0:o.trim();if(!i&&!Pt.length)return;if(i&&i.length>500){_("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const r=await x0(t,i||"",s);if(!r)return;let a=[];if(Pt.length){_("Uploading photos…");for(let k=0;k<Pt.length;k++)try{const E=await c1(Pt[k],t,r.id,k);a.push(E)}catch(E){console.error(`Comment photo ${k} upload failed:`,E)}a.length&&(r.photoUrls=a,await j(`public_recipes/${t}/comments/${r.id}`,{...r,id:void 0}))}n&&(n.value=""),Pt=[];const l=u("cmtPhotoPreview");l&&(l.innerHTML="");const h=u("com-cmt-counter");h&&(h.textContent="0 / 500");const f=u("com-comments"),g=d.comRecs.find(k=>k.id===t),w=e.uid===(g==null?void 0:g.authorUid);f&&r&&(f.querySelector("div[style*='color:var(--mt)']")&&!f.querySelector("div[style*='border-bottom']")&&(f.innerHTML=""),f.innerHTML+=Mu(r,t,e.uid,w)),d._comComments&&d._comComments.push(r),_(a.length?`Comment posted with ${a.length} photo${a.length!==1?"s":""}!`:"Comment posted!")}catch(r){console.error("addComComment:",r),_("Couldn't post comment")}}async function M$(t){const e=d.comRecs.find(s=>s.id===t),n=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:n});return}catch{}try{await navigator.clipboard.writeText(n),_("Link copied!")}catch{_("Couldn't copy link")}}function Mu(t,e,n,i){const s=(t.authorUsername?"@"+t.authorUsername:t.authorName)||"Anonymous",o=t.createdAt?new Date(t.createdAt).toLocaleDateString():"",r=(t.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a=n&&(t.authorUid===n||i),l=n&&t.authorUid!==n;let h="";a&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${t.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${t.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let f="";const g=t.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");f=`<div class="cmt-photos-grid">${g.map((E,$)=>`<img src="${E}" alt="Photo ${$+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${$})" onerror="this.style.display='none'"/>`).join("")}</div>
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
  </div>`}function O$(t,e,n,i){return t.length?t.map(s=>Mu(s,e,n,i)).join(""):""}function V$(){var h;const t=d._openComId,e=(h=Q())==null?void 0:h.uid,n=d.comRecs.find(f=>f.id===t),i=e&&e===(n==null?void 0:n.authorUid),s=u("com-comments");if(!s||!d._comComments)return;const o=s.querySelectorAll(".com-comment-row").length,r=d._comComments.slice(o,o+20);if(r.length){const f=r.map(g=>Mu(g,t,e,i)).join("");s.insertAdjacentHTML("beforeend",f)}const a=d._comComments.length-o-r.length,l=u("com-load-more");l&&(a>0?l.textContent=`Load more comments (${a} remaining)`:l.remove())}async function U$(t,e){if(confirm("Delete this comment?"))try{await F0(t,e);const n=document.getElementById("cmt-"+e);n&&n.remove(),d._comComments&&(d._comComments=d._comComments.filter(i=>i.id!==e)),_("Comment deleted")}catch(n){console.error("deleteComComment:",n),_("Couldn't delete comment")}}async function F$(t){var w;const e=d.comRecs.find(k=>k.id===t);if(!e)return;const i=((w=Q())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===d.hid;if(!i&&!s){_("Only household members can edit");return}d._editingComId=t,bs="edit";const o=u("erecTitle");o&&(o.textContent="Edit Community Recipe"),ti(()=>lr());const r=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,a=e.tags||[],l=k=>a.includes(k)?" sel":"";let h='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';oa.forEach(k=>{h+=`<div class="tag-cat">${k.cat}</div>`,k.tags.forEach(E=>{h+=`<div class="tag${l(E)}" data-tag="${E}" onclick="togTag(this)">${E}</div>`})}),h+="</div></div>";const f=en(e.prepTime),g=en(e.cookTime);en(e.totalTime),u("erecbody").innerHTML=`
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
    </div>`,qe("erec")}async function j$(){var w,k,E,$,P,O,M,N,D,B,q,C;const t=d._editingComId,e=d.comRecs.find(v=>v.id===t);if(!e)return;const n=((k=(w=u("comEditTitle"))==null?void 0:w.value)==null?void 0:k.trim())||e.title,i=(($=(E=u("comEditSummary"))==null?void 0:E.value)==null?void 0:$.trim())||"",s=((O=(P=u("comEditCuisine"))==null?void 0:P.value)==null?void 0:O.trim())||"",o=((N=(M=u("comEditServes"))==null?void 0:M.value)==null?void 0:N.trim())||"",r=Lu("comEditTags"),a=((B=(D=u("comEditIngredients"))==null?void 0:D.value)==null?void 0:B.trim())||"",l=((C=(q=u("comEditSteps"))==null?void 0:q.value)==null?void 0:C.trim())||"",h=_s("comEditPrepTime","comEditPrepUnit")||"",f=_s("comEditCookTime","comEditCookUnit")||"",g={...e,title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:a,steps:l,prepTime:h,cookTime:f};delete g.id;try{await j(`public_recipes/${t}`,g),Object.assign(e,{title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:a,steps:l,prepTime:h,cookTime:f}),d._editingComId=null;const v=u("erecTitle");v&&(v.textContent="Recipes"),Se("updated",Z(n)+" (community)"),_("Community recipe updated!"),Ns(),ue("erec"),pt()}catch(v){console.error("saveComRecipeEdit:",v),_("Couldn't save changes")}}function B$(t,e,n){if(!Q()){_("Sign in to report content");return}d._reportTarget={type:t,targetId:e,recipeId:n};const s=u("report-sheet"),o=u("reportBackdrop");s&&s.classList.add("active"),o&&o.classList.add("active")}function Hv(){const t=u("report-sheet"),e=u("reportBackdrop");t&&t.classList.remove("active"),e&&e.classList.remove("active"),d._reportTarget=null}async function H$(t){const e=d._reportTarget;if(e){try{const n=await j0(e.type,e.targetId,t,e.recipeId);_(n==="duplicate"?"You've already reported this":"Thanks for your report")}catch(n){console.error("submitComReport:",n),_("Couldn't submit report")}Hv()}}async function zv(){try{const t=await q0(),e=t>9?"9+":String(t),n=t>0,i=u("recipes-notif-badge");i&&(i.textContent=e,i.style.display=n?"flex":"none");const s=u("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=n?"flex":"none")}catch{}}async function z$(){if(!Q()){_("Sign in to view notifications");return}try{const e=await H0();z0().then(()=>zv());const n=u("erecbody");if(!n)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const o=!s.read,r=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${o?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${o?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${r}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,n.innerHTML=i,qe("erec")}catch(e){console.error("openNotifications:",e),_("Couldn't load notifications")}}async function q$(t){if(ue("erec"),!d.comRecs.length)try{d.comRecs=await Ft()}catch{}if(d.comRecs.find(e=>e.id===t)){d.rt="community",document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=u("rtab-community");e&&e.classList.add("active"),setTimeout(()=>ja(t),100)}else try{const e=await fg(t);e?(d.comRecs.push({id:t,...e}),d.rt="community",setTimeout(()=>ja(t),100)):_("Recipe no longer available")}catch{_("Couldn't load recipe")}}function Hf(){const t=d.cookLog,e=d.wasteLog;let n=0;for(let N=0;N<60;N++){const D=new Date;D.setDate(D.getDate()-N);const B=D.toISOString().split("T")[0];if(t.find(q=>q.date===B))n++;else if(N>0)break}const i=u("ins-streak-num");i&&(i.textContent=n);const s=u("ins-total-cooked");s&&(s.textContent=t.length);const o=u("ins-waste-count");o&&(o.textContent=e.length);const r=u("ins-sub");r&&(r.textContent=t.length?" "+t.length+" meals cooked":"Your kitchen at a glance");const a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=u("ins-week");if(l){const N=Ka().map(D=>{const B=D.toISOString().split("T")[0],q=d.mp[B],C=B===At();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${C?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${C?"600":"400"}">${a[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${q?"var(--tx)":"var(--mt)"};font-style:${q?"normal":"italic"};flex:1">${q||"—"}</div>
        ${C?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=N}const h=t.slice(0,7).map(N=>N.name),f=u("ins-variety-nudge"),g=u("ins-variety-msg");if(f&&h.length>=3){const N={};h.forEach(B=>{const q=B.toLowerCase();N[q]=(N[q]||0)+1});const D=Object.entries(N).filter(([,B])=>B>=3);D.length?(f.style.display="block",g.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):f.style.display="none"}else f&&(f.style.display="none");const w={};t.forEach(N=>{w[N.name]=(w[N.name]||0)+1});const k=Object.entries(w).sort((N,D)=>D[1]-N[1]).slice(0,6),E=k[0]?k[0][1]:1,$=u("ins-cooked");if($)if(!k.length)$.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const N=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];$.innerHTML=k.map(([D,B],q)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${N[q]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(B/E*100)}%"></div></div><div class="ibar-val">${B}×</div></div>`).join("")}const P={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},O=u("ins-cuisine");if(O&&t.length){const N=C=>{const v=C.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};t.slice(0,20).forEach(C=>{const v=N(C.name);D[v]=(D[v]||0)+1});const B=Object.values(D).reduce((C,v)=>C+v,0),q=Object.entries(D).sort((C,v)=>v[1]-C[1]);O.innerHTML=q.map(([C,v])=>{const b=Math.round(v/B*100),S=P[C]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${C}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${S};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const M=u("ins-waste");M&&(M.innerHTML=e.length?e.slice(0,10).map(N=>`<div class="waste-item"><span style="font-size:.86rem">${N.name}</span><span style="font-size:.74rem;color:var(--rd)">${N.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function W$(){const t=["fridge","freezer","pantry"].map(r=>{const a=d.inv.filter(l=>l.location===r);return a.length?rm(r).toUpperCase()+": "+a.map(l=>`${l.name} (${cs(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=d.inv.filter(r=>{const a=rt(r.expiry);return a&&(a.c==="expiring"||a.c==="expired")}).map(r=>{const a=rt(r.expiry);return`${r.name} (${a.l})`}).join(", "),n=Ka().map(r=>{const a=r.toISOString().split("T")[0];return d.mp[a]?`${r.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[a]}`:""}).filter(Boolean).join(", "),i=d.recs.filter(r=>r.favorited||r.rating>=4).map(r=>`${r.name}${r.rating?` (${r.rating}★)`:""}`).join(", "),s=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other].filter(Boolean).join(", "),o=d.cookLog.slice(0,7).map(r=>r.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
HOUSEHOLD: ${d.cfg.name}, Adults: ${d.cfg.adults}, Kids: ${d.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${d.cfg.cuisines}, Cook time: ${d.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function G$(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function qv(){const t=u("chi"),e=t.value.trim();if(!e)return;t.value="",Wv(t),d.chat.push({role:"user",content:e}),yl("user",e);const n=u("csb");n&&(n.disabled=!0);const i="thinking-"+Date.now(),s=u("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:W$(),messages:d.chat.map(h=>({role:h.role,content:h.content}))})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"Sorry, I couldn't process that.",l=u(i);l&&l.remove(),d.chat.push({role:"assistant",content:a}),yl("assistant",a)}catch{const r=u(i);r&&r.remove(),yl("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function K$(t){const e=[];return{cleanText:t.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const o=JSON.parse(s.trim());o.title&&e.push(o)}catch{}return""}).trim(),recipes:e}}function Q$(t){const e=JSON.stringify(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),n=(t.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(t.title||"").replace(/</g,"&lt;")}</div>
    ${t.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${t.cuisine}${t.cookTime?" · "+t.cookTime:""}${t.servings?" · "+t.servings+" servings":""}</div>`:""}
    ${n?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${n.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function J$(t){try{const e=JSON.parse(t.dataset.recipe),n="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await nt({id:n,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),t.textContent="✓ Saved!",t.disabled=!0,t.style.background="var(--gn)",_("Recipe saved! 📖")}catch{_("Couldn't save recipe")}}function yl(t,e){const n=u("chmsgs");if(n){if(t==="assistant"){const{cleanText:i,recipes:s}=K$(e);if(i){const o=document.createElement("div");o.className="cb asst",o.innerHTML=G$(i),n.appendChild(o)}s.forEach(o=>{const r=document.createElement("div");r.style.maxWidth="88%",r.style.alignSelf="flex-start",r.innerHTML=Q$(o),n.appendChild(r)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,n.appendChild(i)}n.scrollTop=n.scrollHeight}}function Y$(t){const e=u("chi");e&&(e.value=t.textContent),qv()}function X$(){d.chat=[];const t=u("chmsgs");t&&(t.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Wv(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}const Lo="scan_cache_",Z$=720*60*60*1e3,eL=200;function tL(t){try{const e=localStorage.getItem(Lo+t);if(!e)return null;const n=JSON.parse(e);return Date.now()-n.cachedAt>Z$?(localStorage.removeItem(Lo+t),null):n}catch{return null}}function nL(t,e){try{const n={name:e.name||"",brand:e.brand||"",category:e.category||"General",offCategory:e.offCategory||"",scanTitle:e._scanTitle||"",image:e.image||null,source:e.source||null,cachedAt:Date.now()},i=Ou();i.length>=eL&&iL(i),localStorage.setItem(Lo+t,JSON.stringify(n))}catch{}}function Ou(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&n.startsWith(Lo)&&t.push(n)}return t}function iL(t){let e=null,n=1/0;for(const i of t)try{const s=JSON.parse(localStorage.getItem(i));s&&s.cachedAt<n&&(n=s.cachedAt,e=i)}catch{e=i;break}e&&localStorage.removeItem(e)}function sL(){return Ou().length}function oL(){const t=Ou();return t.forEach(e=>localStorage.removeItem(e)),t.length}let Do=!1,ca=!1,la=null;function Vu(){if(Do)return;const t=u("scanner-video");if(!t)return;const e=u("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{rL(t,e)})})}function rL(t,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:t,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(n){if(n){console.error("Scanner init error:",n);const i=u("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}aL(t),Quagga.start(),Do=!0,e&&(e.textContent="Scanning…"),lL(t),setTimeout(()=>cL(t),2e3)}),Quagga.onDetected(Gv)}function aL(t){t.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function cL(t){if(!Do)return;const e=t.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});la=n,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=n,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(n){console.error("Manual camera retry failed:",n)}}}let An=null;function lL(t){An&&(t.removeEventListener("click",An),An=null),An=async()=>{try{const e=t.querySelector("video");if(!e||!e.srcObject)return;const n=e.srcObject.getVideoTracks()[0];if(!n)return;const i=n.getCapabilities?n.getCapabilities():{};if(!i.focusMode||!i.focusMode.includes("single-shot"))return;await n.applyConstraints({advanced:[{focusMode:"single-shot"}]})}catch{}},t.addEventListener("click",An)}function dL(){if(An){const t=u("scanner-video");t&&t.removeEventListener("click",An),An=null}}function Uu(){if(Do){try{Quagga.stop()}catch{}Quagga.offDetected(Gv),dL(),la&&(la.getTracks().forEach(t=>t.stop()),la=null),Do=!1,ca=!1}}async function Gv(t){var s,o;if(ca)return;const e=t&&t.codeResult&&t.codeResult.code;if(!e)return;const n=((o=(s=t.codeResult.decodedCodes)==null?void 0:s.filter(r=>r.error!==void 0))==null?void 0:o.map(r=>r.error))||[];if(!((n.length?n.reduce((r,a)=>r+a,0)/n.length:1)>.25)){ca=!0,uL(),Uu(),u("scanbody").style.display="none",u("scspin").style.display="block",u("scst").textContent="Found "+e+" — looking up…";try{const r=await Kv(e);d.cp=r,u("aqty").value=1,u("aexp").value="";const a=u("scan-frac");a&&(a.value="0");const l=u("aunit");l&&(l.value="Unit"),Fu("fridge",u("rl-fridge")),Qv(r)}catch{const r=u("scerr");r.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",r.style.display="block"}u("scanbody").style.display="block",u("scspin").style.display="none",ca=!1}}function uL(){const t=u("scan-success");t&&(t.style.display="flex",t.style.animation="none",t.offsetHeight,t.style.animation="",setTimeout(()=>{t.style.display="none"},500))}function hL(){ue("result"),qe("scan"),u("scerr").style.display="none",Vu()}function pL(){d.scanDestList=!0,qe("scan");const t=u("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=u("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),u("scerr").style.display="none",Vu()}function fL(){d.scanDestList=!1,qe("scan");const t=u("scanovttl");t&&(t.textContent="Scan Barcode");const e=u("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your supplies."),u("scerr").style.display="none",Vu()}function mL(){const t=u("manual-name-section");if(t){t.style.display="block";const e=u("mnm");e&&e.focus()}}function gL(){const t=u("scanNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=u("scanNoteInp");n&&n.focus()}}function yL(){const t=u("scanCatKey"),e=t?t.value:"other";Xn(e,n=>{t&&(t.value=n),d.cp&&(d.cp._prepCategory=n);const i=u("scanCatBadgeWrap");if(i&&(i.innerHTML=Wt(n,"openScanCatPicker()")),d.cp&&d.cp.barcode&&d.hid){const s=d.cp.barcode.replace(/[^a-zA-Z0-9]/g,""),o=`households/${d.hid}/customProducts/barcode_${s}`;j(o,{prepCategory:n,updatedAt:new Date().toISOString()})}})}function vL(){if(!d.cp)return;const t=d.cp.notFound?"Barcode "+d.cp.barcode:d.cp.name,e=u("scanNoteInp"),n=e?e.value.trim():"",i=parseInt(u("aqty").value)||1,s=parseFloat(u("scan-frac").value)||0,o=ot(i,s),r=u("aunit").value||"Unit",a={id:Date.now().toString(),name:t,qty:o,unit:r,checked:!1,src:"scan"};d.cp.brand&&(a.brand=d.cp.brand),d.cp.image&&(a.image=d.cp.image),d.cp._scanTitle&&(a.scanTitle=d.cp._scanTitle),d.cp.offCategory&&(a.offCategory=d.cp.offCategory),n&&(a.note=n);const l=u("scanCatKey");a.prepCategory=l&&l.value||d.cp._prepCategory||"other",Oe(a),ue("result"),ue("scan"),d.scanDestList=!1,e&&(e.value="");const h=u("scanNoteWrap");h&&(h.style.display="none"),window.openShopAddSheet&&window.openShopAddSheet();const f=d.cp&&d.cp._scanTitle||t;_("✓ Added: "+f)}function wL(){const t=u("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function bL(){const t=u("meinp").value.trim();if(!t)return;Uu(),u("scanbody").style.display="none",u("scspin").style.display="block",u("scst").textContent="Looking up…";const e=await Kv(t);d.cp=e,u("aqty").value=1,u("aexp").value="";const n=u("scan-frac");n&&(n.value="0");const i=u("aunit");i&&(i.value="Unit"),Fu("fridge",u("rl-fridge")),u("meinp").value="",Qv(e),u("scanbody").style.display="block",u("scspin").style.display="none"}async function Kv(t){if(d.hid)try{const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${d.hid}/customProducts/barcode_${n}`,s=await W(i);if(s&&s.correctedName){console.log(`[Scan] Custom product override: "${s.correctedName}"`);const o={barcode:t,name:s.correctedName,brand:s.brand||"",quantity:s.quantity||"",category:s.category||"General",image:s.image||null,source:"Custom",description:s.description||"",nutrition:null,customOverride:!0,notFound:!1,_scanTitle:s.correctedName,_originalName:s.originalName||""};return s.prepCategory&&(o._prepCategory=s.prepCategory),o}}catch{}const e=tL(t);if(e)return console.log(`[Scan] Cache hit for barcode ${t}`),{barcode:t,name:e.name,brand:e.brand,quantity:"",category:e.category||"General",offCategory:e.offCategory||"",image:e.image||null,source:e.source||null,description:"",nutrition:null,notFound:!1,_scanTitle:e.scanTitle||"",fromCache:!0};try{const n=await fetch("/api/barcode?code="+encodeURIComponent(t));if(n.ok){const i=await n.json();if(i.found&&i.product){const s={...i.product,notFound:!1};return nL(t,s),s}}}catch{}return{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function Qv(t){var o;ue("scan"),u("resttl").textContent=t.notFound?"Not Found":"Product Found ✓";const e=u("aunit");if(e){const r=(t.quantity||"Unit").trim(),a=Array.from(e.options).find(l=>l.value.toLowerCase()===r.toLowerCase());e.value=a?a.value:"Unit"}let n="";if(t.notFound)n=`<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">⚠️ Barcode <code>${t.barcode}</code> not found in any database.</div>
      <div class="brow" style="gap:10px;margin-bottom:12px">
        <button class="btn bs" style="flex:1;font-size:.95rem" onclick="resumeScanner()">🔄 Scan again</button>
        <button class="btn bp" style="flex:1;font-size:.95rem" onclick="showManualNameInput()">✏️ Add manually</button>
      </div>
      <div id="manual-name-section" style="display:none">
        <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:4px"/>
      </div>
    </div>`;else{const r=eb(t);t._originalName||(t._originalName=t.name),t._scanTitle||(t._scanTitle=r.title);const a="",l=t._scanTitle||r.title,h=t.customOverride&&t._originalName?t._originalName:r.subtitle,f=h.toLowerCase().trim()===l.toLowerCase().trim(),g=h.length>60?h.slice(0,60)+"…":h,w=h.length>60?` data-full="${h.replace(/"/g,"&quot;")}" onclick="this.textContent=this.dataset.full" style="cursor:pointer"`:"";n=`<div class="pcard"><div class="phdr">${a}<div style="flex:1">
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
    </div></div></div>`;const k=t._prepCategory||Li({name:t.name||"",scanTitle:t._scanTitle||"",offCategory:t.offCategory||"",category:t.category||""});t._prepCategory=k,n+=`<div id="scanCatBadgeWrap">${Wt(k,"openScanCatPicker()")}</div>`,n+=`<input type="hidden" id="scanCatKey" value="${k}"/>`}u("resbody").innerHTML=n;const i=(o=u("ov-result"))==null?void 0:o.querySelector(".ovbody");if(i){const r=i.querySelector(".frow"),a=i.querySelectorAll(".frow")[1];r&&(r.style.display=d.scanDestList?"none":""),a&&(a.style.display=d.scanDestList?"none":"")}const s=u("scan-dest-btns");if(s)if(t.notFound){const r=d.scanDestList?"addScannedToList()":"addToInv()",a=d.scanDestList?"🛒 Add to Shopping List":"🧺 Add to Supplies";s.innerHTML=`<button class="btn bp" style="width:100%" id="addbtn" onclick="${r}">${a}</button>`}else d.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">🧺 Add to Supplies</button>
      </div>`;t.notFound&&setTimeout(()=>{const r=u("addbtn");r&&(r.disabled=!0)},0),qe("result")}function Fu(t,e){d.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function _L(){const t=u("mnm");u("addbtn").disabled=!(t&&t.value.trim())}async function kL(){if(!d.cp)return;const t=u("mnm"),e=d.cp.notFound?t&&t.value.trim()||"":d.cp.name;if(!e)return;const n=parseInt(u("aqty").value)||1,i=parseFloat(u("scan-frac").value)||0,s=u("aunit").value||"Unit",o=ot(n,i),r=u("aexp").value||null,a="item-"+d.cp.barcode.replace(/\W/g,"-"),l=d.inv.find(w=>w.id===a),h={id:a,barcode:d.cp.barcode,name:e,brand:d.cp.brand||"",unit:s,qty:l?l.qty+o:o,location:d.selR,category:d.cp.category||"General",image:d.cp.image||null,source:d.cp.source||null,expiry:r,addedAt:l?l.addedAt:new Date().toLocaleDateString()};d.cp._scanTitle&&(h.scanTitle=d.cp._scanTitle),d.cp.offCategory&&(h.offCategory=d.cp.offCategory);const f=u("scanCatKey");h.prepCategory=f&&f.value||d.cp._prepCategory||"other";const g=d.cp._scanTitle||e;await ee(h),d.cp=null,ue("result"),ue("scan"),window.openInvAddSheet&&window.openInvAddSheet(),_(l?`✓ Added: +${o} ${g}`:`✓ Added: ${g}`)}function TL(t){const e=u("aqty");e.value=Math.max(0,(parseInt(e.value)||0)+t)}function CL(){var s;const t=u("scan-title-row"),e=u("scan-title-edit"),n=u("scan-title-input");if(!t||!e||!n)return;const i=((s=u("scan-title-text"))==null?void 0:s.textContent)||"";n.value=i,t.style.display="none",e.style.display="flex",n.focus(),n.select()}async function IL(){const t=u("scan-title-row"),e=u("scan-title-edit"),n=u("scan-title-input"),i=u("scan-title-text");if(!t||!e||!n||!i)return;const s=Z(n.value.trim()),o=n.dataset.original||"",r=s||o;i.textContent=r,d.cp&&(d.cp.name=r,d.cp._scanTitle=r),e.style.display="none",t.style.display="flex",s&&s!==o&&d.cp&&d.cp.barcode&&(await SL(d.cp.barcode,s,d.cp,d.cp._originalName||o),_("✓ Product name saved for future scans"))}async function SL(t,e,n,i){if(!d.hid||!t)return;const s=t.replace(/[^a-zA-Z0-9]/g,""),o=`households/${d.hid}/customProducts/barcode_${s}`,r=Q(),a=r?r.uid:"unknown",l=u("scanCatKey"),h=l&&l.value||d.cp&&d.cp._prepCategory||null,f={barcode:t,correctedName:e,originalName:i||"",brand:n.brand||"",category:n.category||"General",image:n.image||null,quantity:n.quantity||"",description:n.description||"",updatedAt:new Date().toISOString(),updatedBy:a};h&&(f.prepCategory=h),await j(o,f);try{localStorage.removeItem(Lo+t)}catch{}}let $e=null,Mr=0,Or=0,J=null,_n=null,St=0,Tt=!1,Oi=!1;const kn=80,Vr=.1,Tn=.7,Ur=8,di="cubic-bezier(0.34, 1.56, 0.64, 1)",De="cubic-bezier(0.4, 0, 0.2, 1)";function EL(){document.addEventListener("touchstart",e=>{const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(d.selectMode||(J&&J!==i&&(Qt(J),J=null),$e=n,Mr=e.touches[0].clientX,Or=e.touches[0].clientY,_n=null,Tt=!1,St=i.offsetWidth,n.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!$e)return;const n=e.touches[0].clientX,i=e.touches[0].clientY,s=n-Mr,o=i-Or;if(!_n){if(Math.abs(s)<Ur&&Math.abs(o)<Ur)return;_n=Math.abs(s)>Math.abs(o)?"horizontal":"vertical"}if(_n==="vertical"){$e.classList.remove("swiping"),$e=null;return}e.preventDefault();const r=$e.closest(".swipe-wrap"),a=r==null?void 0:r.dataset.list,l=s>0&&a==="inv",h=l?s:s>=0?0:s;if($e.style.transform=`translateX(${h}px)`,h<0){const g=r==null?void 0:r.querySelector(".swipe-del");if(g){const k=Math.min(100,Math.abs(h)/kn*100);g.style.clipPath=`inset(0 0 0 ${100-k}%)`}const w=r==null?void 0:r.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const g=r==null?void 0:r.querySelector(".swipe-add");if(g){const k=Math.min(100,h/kn*100);g.style.clipPath=`inset(0 ${100-k}% 0 0)`}const w=r==null?void 0:r.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const f=Math.abs(h)/St;f>=Tn&&!Tt?(Tt=!0,navigator.vibrate&&navigator.vibrate(10),r==null||r.classList.add("swipe-threshold")):f<Tn&&Tt&&(Tt=!1,r==null||r.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!$e)return;const e=$e,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/St,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=Tn)qf(n,e);else if(r&&s>=Vr){e.style.transition=`transform 0.4s ${di}`,e.style.transform=`translateX(${kn}px)`;const a=n==null?void 0:n.querySelector(".swipe-add");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),J&&J!==n&&Qt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=Tn)zf(n,e);else if(!r&&i<0&&s>=Vr){e.style.transition=`transform 0.4s ${di}`,e.style.transform=`translateX(-${kn}px)`;const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),J&&J!==n&&Qt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${di}`,e.style.transform="translateX(0)";const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),J===n&&(J=null),setTimeout(()=>{e.style.transition="",a&&(a.style.transition=""),l&&(l.style.transition="")},350)}$e=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(d.selectMode||(J&&J!==i&&(Qt(J),J=null),Oi=!0,$e=n,Mr=e.clientX,Or=e.clientY,_n=null,Tt=!1,St=i.offsetWidth,n.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Oi||!$e)return;const n=e.clientX-Mr,i=e.clientY-Or;if(!_n){if(Math.abs(n)<Ur&&Math.abs(i)<Ur)return;_n=Math.abs(n)>Math.abs(i)?"horizontal":"vertical"}if(_n==="vertical"){$e.classList.remove("swiping"),$e=null,Oi=!1;return}e.preventDefault();const s=$e.closest(".swipe-wrap"),o=s==null?void 0:s.dataset.list,r=n>0&&o==="inv",a=r?n:n>=0?0:n;if($e.style.transform=`translateX(${a}px)`,a<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const g=Math.min(100,Math.abs(a)/kn*100);h.style.clipPath=`inset(0 0 0 ${100-g}%)`}const f=s==null?void 0:s.querySelector(".swipe-add");f&&(f.style.clipPath="inset(0 100% 0 0)")}else if(a>0&&r){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const g=Math.min(100,a/kn*100);h.style.clipPath=`inset(0 ${100-g}% 0 0)`}const f=s==null?void 0:s.querySelector(".swipe-del");f&&(f.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(a)/St;l>=Tn&&!Tt?(Tt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<Tn&&Tt&&(Tt=!1,s==null||s.classList.remove("swipe-threshold"))});function t(){if(!Oi||!$e){Oi=!1;return}Oi=!1;const e=$e,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/St,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=Tn)qf(n,e);else if(r&&s>=Vr){e.style.transition=`transform 0.4s ${di}`,e.style.transform=`translateX(${kn}px)`;const a=n==null?void 0:n.querySelector(".swipe-add");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),J&&J!==n&&Qt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=Tn)zf(n,e);else if(!r&&i<0&&s>=Vr){e.style.transition=`transform 0.4s ${di}`,e.style.transform=`translateX(-${kn}px)`;const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),J&&J!==n&&Qt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${di}`,e.style.transform="translateX(0)";const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),J===n&&(J=null),setTimeout(()=>{e.style.transition="",a&&(a.style.transition=""),l&&(l.style.transition="")},350)}$e=null}document.addEventListener("mouseup",t),document.addEventListener("mouseleave",t),document.addEventListener("mousedown",e=>{if(!J||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===J||(Qt(J),J=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const o=n.querySelector("textarea");o&&o.blur(),n.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const o=n.querySelector("input");o&&o.blur(),n.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!J||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===J||(Qt(J),J=null)},{passive:!0})}function Qt(t){const e=t==null?void 0:t.querySelector(".swipe-inner"),n=t==null?void 0:t.querySelector(".swipe-del"),i=t==null?void 0:t.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${di}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),n&&(n.style.transition=`clip-path 0.3s ${De}`,n.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{n.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${De}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),t==null||t.classList.remove("open","swipe-threshold")}async function zf(t,e){const n=t==null?void 0:t.dataset.id,i=t==null?void 0:t.dataset.list;if(!n||!i)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(-${St+100}px)`;const s=t==null?void 0:t.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${De}`,s.style.transform=`translateX(-${St+100}px)`),await new Promise(r=>setTimeout(r,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",J===t&&(J=null),await new Promise(r=>setTimeout(r,250)),ju(n,i==="shop"?"shop":"inv")}async function qf(t,e){const n=t==null?void 0:t.dataset.id;if(!n)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(${St+100}px)`;const i=t==null?void 0:t.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${St+100}px)`),await new Promise(s=>setTimeout(s,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",J===t&&(J=null),await new Promise(s=>setTimeout(s,250)),await Jv(n)}async function AL(t,e){if(e!=="inv")return;const n=u("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${s+100}px)`);const o=n.querySelector(".swipe-add");o&&(o.style.transition=`transform 0.3s ${De}`,o.style.transform=`translateX(${s+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",J===n&&(J=null),await new Promise(r=>setTimeout(r,250)),await Jv(t)}async function Jv(t){const e=d.inv.find(i=>i.id===t);if(!e)return;(await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`)}async function xL(t,e){const n=u("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(-${s+100}px)`);const o=n.querySelector(".swipe-del");o&&(o.style.transition=`transform 0.3s ${De}`,o.style.transform=`translateX(-${s+100}px)`),await new Promise(a=>setTimeout(a,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",J===n&&(J=null),await new Promise(a=>setTimeout(a,250)),ju(t,e==="shop"?"shop":"inv")}function RL(t,e){const n=u("sw-"+t);if(n){const i=n.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Qt(n),J=null;return}}if(d.selectMode){d.selectedIds.has(t)?(d.selectedIds.delete(t),n==null||n.classList.remove("selected")):(d.selectedIds.add(t),n==null||n.classList.add("selected")),wc();return}e==="shop"?window.openItemDetail(t):window.openInvItemDetail(t)}function PL(){if(d.selectMode==="shop"){xi();return}d.selectMode&&xi(),d.selectMode="shop",d.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=u("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),wc()}function $L(){if(d.selectMode==="inv"){xi();return}d.selectMode&&xi(),d.selectMode="inv",d.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=u("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),wc()}function xi(){d.selectMode=null,d.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=u("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=u("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),wc()}async function LL(){if(!d.selectedIds.size)return;const t=[...d.selectedIds],e=d.selectMode;xi(),e==="shop"?await Promise.all(t.map(n=>Ko(n))):await Promise.all(t.map(n=>Go(n))),_(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function wc(){const t=u("multi-bar");if(!t)return;const e=d.selectedIds.size,n=u("multi-count");n&&(n.textContent=e),d.selectMode?t.classList.add("visible"):t.classList.remove("visible")}let Vn=null,Jt=null;function ju(t,e,n={}){var r,a,l,h;Vn&&Yv();const i=e==="shop"?d.shop:d.inv,s=i.find(f=>f.id===t);if(!s)return;const o=i.indexOf(s);e==="shop"?(d.shop=d.shop.filter(f=>f.id!==t),(r=F.renderShop)==null||r.call(F),(a=F.renderSum)==null||a.call(F)):(d.inv=d.inv.filter(f=>f.id!==t),(l=F.renderAll)==null||l.call(F),(h=F.renderSum)==null||h.call(F)),NL(Z(s.name)),Vn={id:t,list:e,item:{...s},index:o,onCommit:n.onCommit||null}}function Yv(){if(!Vn)return;const{id:t,list:e,item:n,onCommit:i}=Vn;Vn=null,Xv(),i&&i(n);const s=e==="shop"?"shopping":"inventory",o=e==="shop"?"Shopping List":"Supplies";fe(`households/${d.hid}/${s}/${t}`),Se("removed",Z(n.name)+` from ${o}`)}function DL(){var s,o,r,a;if(!Vn)return;const{id:t,list:e,item:n,index:i}=Vn;Vn=null,Xv(),e==="shop"?(d.shop.splice(Math.min(i,d.shop.length),0,n),(s=F.renderShop)==null||s.call(F),(o=F.renderSum)==null||o.call(F)):(d.inv.splice(Math.min(i,d.inv.length),0,n),(r=F.renderAll)==null||r.call(F),(a=F.renderSum)==null||a.call(F)),_("Restored ✓")}function NL(t){const e=u("undo-toast"),n=u("undo-toast-text"),i=u("undo-bar");if(!e||!i)return;Jt&&(cancelAnimationFrame(Jt),Jt=null),n&&(n.textContent=`${t} deleted`),i.style.width="100%",e.classList.add("visible");const s=5e3,o=performance.now();function r(a){const l=a-o,h=Math.max(0,1-l/s);i.style.width=h*100+"%",h>0?Jt=requestAnimationFrame(r):(Jt=null,Yv())}Jt=requestAnimationFrame(r)}function Xv(){const t=u("undo-toast"),e=u("undo-bar");Jt&&(cancelAnimationFrame(Jt),Jt=null),t&&t.classList.remove("visible"),e&&(e.style.width="100%")}async function ML(){const t=d.selectMode;if(!t)return;const e=t==="shop"?d.shop:d.inv,n=e.length;if(!(!n||!confirm(`Delete all ${n} items from your ${t==="shop"?"shopping list":"supplies"}? This cannot be undone.`))){if(xi(),t==="shop"){const s=e.map(o=>o.id);await Promise.all(s.map(o=>Ko(o)))}else{const s=e.map(o=>o.id);await Promise.all(s.map(o=>Go(o)))}_(`All ${n} items deleted 🗑`)}}const Zv="ks-meal-reminders";async function OL(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function Bu(){try{return JSON.parse(localStorage.getItem(Zv))||{}}catch{return{}}}function Hu(t){localStorage.setItem(Zv,JSON.stringify(t))}const Et={};async function zu(){if(!await OL())return;const e=Bu(),n=new Date,i=n.toISOString().split("T")[0];for(const s of Object.keys(e))s<i&&(delete e[s],Et[s]&&(clearTimeout(Et[s]),delete Et[s]));for(const[s,o]of Object.entries(d.mp)){if(!o||s<i)continue;const r=e[s];if(r&&(r.fired||r.cancelled))continue;const l=new Date(s+"T09:00:00").getTime()-n.getTime();l<=0||(e[s]={meal:o,fired:!1,cancelled:!1},Et[s]&&clearTimeout(Et[s]),Et[s]=setTimeout(()=>{VL(s,o)},l))}Hu(e)}function VL(t,e){const n=Bu(),i=n[t];if(!(i&&i.cancelled)){try{new Notification("Tonight's dinner 🍽",{body:`${e} — tap to view recipe`,icon:"/icon-192.png",tag:`meal-${t}`})}catch{}n[t]={meal:e,fired:!0,cancelled:!1},Hu(n),delete Et[t]}}function qu(t){Et[t]&&(clearTimeout(Et[t]),delete Et[t]);const e=Bu();e[t]&&(e[t].cancelled=!0,Hu(e))}const UL=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function ew(t){return"chip-"+t.split(" ").join("-")}function tw(){const t=u("recChips");t&&(t.innerHTML=UL.map(e=>`<button onclick="toggleChip('${e}')" id="${ew(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function FL(t){const e=u(ew(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),nw()}function nw(){const t=u("recPicker"),e=u("recFilter")?u("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(o=>o.toLowerCase()),s=[...d.recs].sort((o,r)=>(r.cookCount||0)-(o.cookCount||0)).filter(o=>{const r=(o.name+" "+(o.description||"")+" "+(o.tags||[]).join(" ")).toLowerCase(),a=e?e.split(/\s+/).every(h=>r.includes(h)):!0,l=n.every(h=>r.includes(h));return a&&l});t.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(o=>`<option value="${o.id}">${o.name}</option>`).join(""),window._pickedRec=null,u("mealMinp").value=""}function jL(t,e){d.md=t,u("mealMttl").textContent="Meal for "+e,u("mealMinp").value=d.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=u("recFilter");n&&(n.value=""),tw();const i=u("recPicker");if(d.recs&&d.recs.length){const s=[...d.recs].sort((a,l)=>(l.cookCount||0)-(a.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(a=>`<option value="${a.id}">${a.name}</option>`).join("");const o=d.mp[t]||"",r=s.find(a=>a.name===o);i.value=r?r.id:"",u("recPickerWrap").style.display="block"}else u("recPickerWrap").style.display="none";u("mealM").classList.add("active"),setTimeout(()=>u("mealMinp").focus(),100)}function BL(t){if(!t){window._pickedRec=null,u("mealMinp").value="";return}const e=d.recs.find(n=>n.id===t);e&&(window._pickedRec=e,u("mealMinp").value=e.name)}function Wu(){u("mealM").classList.remove("active")}function HL(t,e){const n=d.mp[t];if(!n)return;const i=!!d.mpCooked[t],s=d.recs.find(a=>a.name&&a.name.toLowerCase()===n.toLowerCase());let o=u("mealDetailM");o||(o=document.createElement("div"),o.id="mealDetailM",o.className="modal",o.onclick=function(){this.classList.remove("active")},document.body.appendChild(o));let r;i?r=`
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
      <div class="mttl" style="font-size:1.05rem;margin-bottom:4px">${qL(n)}</div>
      <div style="font-size:.8rem;color:var(--mt);margin-bottom:16px">${e}</div>
      ${r}
    </div>
  `,window._mealDetailMarkCooked=async function(){o.classList.remove("active"),await zL(t,n)},window._mealDetailRemove=async function(){o.classList.remove("active"),await Fn(t,null),Gt(),ei(),$s(),_("Meal removed from plan")},window._mealDetailViewRecipe=function(){o.classList.remove("active"),s&&window.openRecipeView(s.id)},o.classList.add("active")}async function zL(t,e){await C0(t),await $d(e,t),await Se("cooked",e+" tonight 🍳"),qu(t),Gt(),ei(),$s(),await Gu(e),_("Meal logged! 🍳")}function qL(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function WL(){u("schedM").classList.remove("active")}async function GL(){const t=u("mealMinp").value.trim();if(await Fn(d.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=d.inv.map(r=>r.name.toLowerCase()),i=d.shop.map(r=>r.name.toLowerCase()),s=e.split(/[\n,]/).map(r=>r.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(r=>r.length>1&&r.length<60);let o=0;for(const r of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(r))continue;const a=r.replace(/^[-•*]\s*/,"").trim();if(!a||a.length<2)continue;const l=a.toLowerCase();n.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await Oe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:a,qty:1,checked:!1,src:"recipe"}),o++)}o>0&&_(`Added ${o} ingredient${o!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Wu(),Gt(),$s(),ei(),zu()}async function KL(){await Fn(d.md,null),Wu(),Gt(),$s(),ei()}function QL(t){const e=d.mp[t];e&&(d.cn=e,d.nr=0,u("cookedNm").textContent=e,u("cnotes").value="",To("cstars",0),u("cookedM").classList.add("active"))}async function JL(){const t=d.cn;await $d(t,At()),localStorage.getItem("ks-who"),await Se("cooked",t+" tonight 🍳"),qu(At()),await Fn(At(),null),u("cookedM").classList.remove("active"),Gt(),ei(),await Gu(t),_("Meal logged!")}async function YL(){var s;const t=d.cn,e=u("cnotes").value.trim(),n=(s=u("tog-leftover"))==null?void 0:s.classList.contains("on");await $d(t,At()),await Se("cooked",t+" tonight 🍳"),qu(At());const i=d.recs.find(o=>o.name.toLowerCase()===t.toLowerCase());i?await nt({...i,cookCount:(i.cookCount||0)+1,lastCooked:At()}):await nt({id:"rec-"+Date.now(),name:t,rating:d.nr,favorited:!1,notes:e,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:At()}),n&&await Fn(Hw(),t+" (leftovers)"),await Fn(At(),null),u("cookedM").classList.remove("active"),Gt(),ei(),await Gu(t),_(n?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}async function Gu(t){const e=d.recs.find(i=>i.name&&i.name.toLowerCase()===t.toLowerCase());if(!e)return;const n=XL(e);n.length&&ZL(t,n)}function XL(t){if(t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)&&t.ingredientsRaw.length)return t.ingredientsRaw.filter(e=>typeof e=="string"&&e.trim());if(t.description){const e=t.description.split(/\n/),n=e.findIndex(i=>/^ingredients/i.test(i.trim()));if(n>=0){const i=[];for(let s=n+1;s<e.length;s++){const o=e[s].trim();if(/^(steps|instructions|directions|notes)/i.test(o))break;o&&i.push(o.replace(/^[-•*]\s*/,""))}return i}}return[]}function ZL(t,e){let n=u("deductM");n||(n=document.createElement("div"),n.id="deductM",n.className="modal",n.onclick=function(){this.classList.remove("active")},document.body.appendChild(n)),n.innerHTML=`
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
  `,window._pendingDeductIngredients=e,window._confirmDeduction=async function(){n.classList.remove("active"),await nD(e)},window._skipDeduction=function(){n.classList.remove("active"),window._pendingDeductIngredients=null},n.classList.add("active")}function eD(t){let e=t.trim().replace(/^[-•*]\s*/,"");const n=e.match(/^([\d]+(?:\.\d+)?(?:\s*\/\s*\d+)?|[\d]*\s*[½¼¾⅓⅔])\s*/);let i=null;if(n){const a=n[1].trim();if(a.includes("½"))i=(parseInt(a)||0)+.5;else if(a.includes("¼"))i=(parseInt(a)||0)+.25;else if(a.includes("¾"))i=(parseInt(a)||0)+.75;else if(a.includes("⅓"))i=(parseInt(a)||0)+1/3;else if(a.includes("⅔"))i=(parseInt(a)||0)+2/3;else if(a.includes("/")){const l=a.split("/");i=parseFloat(l[0])/parseFloat(l[1])}else i=parseFloat(a);e=e.slice(n[0].length)}const s=e.match(/^(cups?|tbsps?|tsps?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|packages?|pkgs?|bunche?s?|heads?|slices?|pieces?|bottles?|jars?|bags?|boxes?|gallons?|pints?|quarts?|rolls?|dozen|loaf|loaves)\s*/i);let o=null;return s&&(o=s[1].trim(),e=e.slice(s[0].length)),{name:e.replace(/^of\s+/i,"").replace(/,.*$/,"").replace(/\(.*\)/,"").trim(),qty:i,unit:o}}function Wf(t){return t?t.toLowerCase().replace(/\b(fresh|dried|chopped|minced|sliced|diced|ground|large|small|medium|whole|organic|optional|to taste|for garnish|as needed)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,""):""}function tD(t,e){if(!t||!e)return!0;const n=t.toLowerCase().replace(/s$/,""),i=e.toLowerCase().replace(/s$/,"");if(n===i)return!0;const s={lb:"pound",lbs:"pound",oz:"ounce",ounce:"oz",g:"gram",gram:"g",kg:"kilogram",ml:"milliliter",l:"liter",liter:"l",tbsp:"tablespoon",tablespoon:"tbsp",tsp:"teaspoon",teaspoon:"tsp",clove:"clove",can:"can",piece:"piece",unit:"unit",bottle:"bottle",jar:"jar",bag:"bag",box:"box",bunch:"bunch",head:"head",loaf:"loaf",gallon:"gallon",dozen:"dozen",roll:"roll",package:"pack",pkg:"pack",pack:"pack"},o=s[n]||n,r=s[i]||i;return o===r}async function nD(t){let e=0;for(const n of t){const i=eD(n);if(!i.name)continue;const s=Wf(i.name);if(!s)continue;const o=d.inv.find(r=>{const a=Wf(r.name);return a.includes(s)||s.includes(a)});if(o&&i.qty!=null&&i.qty>0){if(!tD(i.unit,o.unit))continue;const r=(o.qty||0)-i.qty;r<=0?await Go(o.id):await ee({...o,qty:r}),e++}}e>0?_(`${e} ingredient${e!==1?"s":""} deducted from Supplies`):_("No matching ingredients found to deduct"),window._pendingDeductIngredients=null}function iD(t){u("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),u("schedWk").innerHTML=Ka().map((i,s)=>{const o=i.toISOString().split("T")[0],r=i.getTime()===n.getTime(),a=d.mp[o];return`<div class="wd${r?" today":""}${a?" hm":""}" onclick="schedSet('${o}','${t}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${a?`<div class="wdm">${a}</div>`:""}</div>`}).join(""),u("schedM").classList.add("active")}async function sD(t,e){await Fn(t,e),u("schedM").classList.remove("active"),Gt(),ei(),_("Scheduled! 📅"),zu()}function oD(){const t=s=>u(s),e=(s,o)=>{const r=t(s);r&&(r.value=o||"")};e("setName",d.cfg.name),e("setAdults",d.cfg.adults),e("setKids",d.cfg.kids),e("setOther",d.cfg.other),e("setCuisines",d.cfg.cuisines),e("setCookTime",d.cfg.cookTime),e("setZipcode",d.cfg.zipcode),e("setFavStore",d.cfg.favouriteStore);const n=(s,o)=>{const r=t(s);r&&r.classList.toggle("on",!!o)};n("tg-nopork",d.cfg.nopork),n("tg-noshellfish",d.cfg.noshellfish),n("tg-vegetarian",d.cfg.vegetarian),n("tg-glutenfree",d.cfg.glutenfree),n("tg-notif",d.cfg.notif);const i=u("notifTimeRow");i&&(i.style.display=d.cfg.notif?"block":"none"),e("setNotifTime",d.cfg.notifTime||"8"),e("setNotifDays",String(d.cfg.notifDays||3)),e("setUsername",d.username),Ju(),Qu(),bc()}function bc(){const t=u("customCategoriesList");if(!t)return;const e=Ps();let n="";e.length||(n+='<div style="font-size:.78rem;color:var(--mt);padding:8px 0">No custom categories yet. Create one from any add sheet or here.</div>');for(const i of e)n+=`<div class="srow" style="align-items:center;padding:8px 0" id="custom-cat-row-${i.key}">
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
  </div>`,t.innerHTML=n}function rD(t){const n=Ps().find(s=>s.key===t);if(!n)return;const i=u(`custom-cat-row-${t}`);i&&(i.innerHTML=`
    <div style="width:100%">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="editCatEmojiBtn-${t}" onclick="openSettingsEditEmojiPicker(this,'${t}')">${n.emoji}</button>
        <input class="fi" id="editCatName-${t}" value="${n.name}" style="flex:1;font-size:.85rem"/>
        <button class="btn bp bsm" onclick="saveEditCustomCat('${t}')">Save</button>
        <button class="btn bs bsm" onclick="renderCustomCategories()">Cancel</button>
      </div>
    </div>`)}let os=wt,No={};function aD(t){tr(t,os,e=>{os=e;const n=document.getElementById("settingsCatEmojiBtn");n&&(n.textContent=e)})}function cD(t,e){var i;const n=No[e]||((i=Ps().find(s=>s.key===e))==null?void 0:i.emoji)||wt;tr(t,n,s=>{No[e]=s;const o=document.getElementById(`editCatEmojiBtn-${e}`);o&&(o.textContent=s)})}function lD(t,e){os=e}function dD(t,e,n){No[e]=n}async function uD(t){const e=u(`editCatName-${t}`),n=e?e.value.trim():"";if(!n){_("Please enter a name");return}const i=No[t]||null;await Ay(t,n,i),delete No[t],bc()}async function hD(){const t=u("settingsCatName"),e=t?t.value.trim():"";if(!e){_("Please enter a category name");return}const i={key:"custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),name:e,emoji:os},s=d.cfg.customPrepCategories||[];d.cfg.customPrepCategories=[...s,i];try{await j(`households/${d.hid}/settings/config`,d.cfg),_(`${os} ${e} category created!`),t&&(t.value=""),os=wt,bc()}catch(o){console.error("Failed to save custom category:",o),_("Failed to save category")}}async function pD(){d.cfg={...d.cfg,name:u("setName").value.trim(),adults:u("setAdults").value.trim(),kids:u("setKids").value.trim(),nopork:u("tg-nopork").classList.contains("on"),noshellfish:u("tg-noshellfish").classList.contains("on"),vegetarian:u("tg-vegetarian").classList.contains("on"),glutenfree:u("tg-glutenfree").classList.contains("on"),other:u("setOther").value.trim(),cuisines:u("setCuisines").value.trim(),cookTime:u("setCookTime").value,zipcode:u("setZipcode")?u("setZipcode").value.trim():"",favouriteStore:u("setFavStore")?u("setFavStore").value:"",notif:u("tg-notif").classList.contains("on"),notifTime:u("setNotifTime")?u("setNotifTime").value:"8",notifDays:parseInt(u("setNotifDays")?u("setNotifDays").value:"3")},await tc(),d.cfg.notif&&iw(),_("Settings saved!"),ue("settings"),_u()}async function fD(){var e,n;const t=((n=(e=u("setZipcode"))==null?void 0:e.value)==null?void 0:n.trim())||"";d.cfg={...d.cfg,zipcode:t},await tc(),_("Saved!")}async function mD(t){if(!t.classList.contains("on")){if(!("Notification"in window)){_("Notifications not supported on this browser");return}if(Notification.permission==="denied"){_("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){_("Notifications permission denied");return}}t.classList.toggle("on");const n=u("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function gD(){if(Notification.permission!=="granted"){_("Enable notifications first");return}const t=d.inv.filter(n=>{const i=rt(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function iw(){if(!d.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=d.cfg.notifDays||3,i=d.inv.filter(o=>{if(!rt(o.expiry))return!1;const a=new Date(o.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((a-l)/864e5)<=n});if(!i.length)return;const s=i.slice(0,3).map(o=>o.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${n} days or less`})}function Ku(){return pe("ks-hhs")||[d.hid]}async function Qu(){const t=Q();if(t)try{const e=await W(`households/${d.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=u("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&n)try{await j(`household_codes/${e.inviteCode}`,{householdId:d.hid})}catch{}const s=u("regenCodeBtn");s&&(s.style.display=n?"":"none");const o=u("hhMembers");if(o&&e.members){const l=await Promise.all(e.members.map(async h=>{try{const f=await W(`users/${h.uid}`);return{...h,username:(f==null?void 0:f.username)||null}}catch{return{...h,username:null}}}));o.innerHTML=l.map(h=>{const f=h.uid===t.uid,g=h.role==="owner",w=g?" 👑":"",k=h.username?`@${h.username}`:"",E=h.joinedAt?new Date(h.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",$=[];k&&$.push(k),$.push(g?"Owner":"Member"),E&&$.push(`Joined ${E}`);let P="";return n&&!f&&(P=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${h.name}${f?" (you)":""}${w}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${$.join(" · ")}</div>
          </div>
          ${P}
        </div>`}).join("")}const r=u("utilitiesRow");if(r){r.style.display="";const l=u("utilitiesSubtitle");l&&(l.textContent=PD(n)+" tools")}const a=u("leaveHouseholdBtn");a&&(a.style.display="block",a.textContent=n?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function yD(){var e;const t=(e=u("hhInviteCode"))==null?void 0:e.textContent;if(!(!t||t==="—"))try{await navigator.clipboard.writeText(t),_("Invite code copied!")}catch{_("Couldn't copy — try manually")}}async function vD(){var n;const t=(n=u("hhInviteCode"))==null?void 0:n.textContent;if(!t||t==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${t} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),_("Share text copied to clipboard!")}catch{_("Couldn't share — try manually")}}async function wD(){if(confirm("Regenerate invite code? The old code will stop working."))try{const t=await b0(d.hid);if(t){const e=u("hhInviteCode");e&&(e.textContent=t),_("New invite code generated!")}}catch(t){console.error("regenInviteCode error:",t),_("Failed to regenerate code")}}async function bD(t,e){const n=e||"this member";if(confirm(`Remove ${n} from the household? They will lose access immediately.`))try{await dg(d.hid,t),_(`${n} has been removed`),Qu()}catch(i){console.error("removeMemberFromHH error:",i),_("Failed to remove member")}}async function _D(t,e){const n=e||"this member";if(confirm(`Transfer ownership to ${n}? You will become a regular member.`))try{await _0(d.hid,t),_(`Ownership transferred to ${n}`),Qu()}catch(i){console.error("transferOwnershipUI error:",i),_("Failed to transfer ownership")}}async function sw(){const t=Q();if(t)try{const e=await W(`households/${d.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=(e.members||[]).length,s=e.name||"this household";if(n){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await ug(d.hid,t.uid);try{const o=await W(`users/${t.uid}`);o&&await j(`users/${t.uid}`,{...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}_("Household deleted"),ud()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await dg(d.hid,t.uid),_("You have left the household"),ud()}}catch(e){console.error("leaveHousehold error:",e),_("Something went wrong. Please try again.")}}function ud(){localStorage.removeItem("ks-h");const t=(pe("ks-hhs")||[]).filter(e=>e!==d.hid);t.length>0?(et("ks-hhs",t),localStorage.setItem("ks-h",t[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function kD(){const t=Q();if(!t||!d.hid)return;await hg(d.hid,t.uid)||(_("You no longer have access to this household"),ud())}async function TD(){const t=Q();if(t)try{if(d.hid){const e=await W(`households/${d.hid}`);if(e&&e.ownerUid===t.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await D0(t.uid);try{await t.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),_("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),_("Failed to delete account. Please try again.")}}async function CD(){var i,s,o;const t=(o=(s=(i=u("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:o.toUpperCase();if(!t)return;const e=Q();if(!e){_("Sign in first");return}const n=u("newHHCode");n.disabled=!0;try{const r=await lg(t,e);if(!r){_("Invalid invite code. Check and try again."),n.disabled=!1;return}const a=Ku();a.includes(r)||a.push(r),et("ks-hhs",a),u("newHHCode").value="",Ju(),_("Household joined!")}catch(r){console.error("addHousehold error:",r),_("Failed to join household")}n.disabled=!1}function ID(t){t!==d.hid&&(localStorage.setItem("ks-h",t),location.reload())}async function SD(t){if(t===d.hid){sw();return}const e=Q();if(e)try{const i=await W(`users/${e.uid}`);if(i){const r=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==t),a={...i,householdIds:r,id:void 0};i.householdId&&delete a.householdId,await j(`users/${e.uid}`,a)}const s=await W(`households/${t}`);if(s){const o=(s.members||[]).filter(a=>a.uid!==e.uid),r=(s.memberUids||[]).filter(a=>a!==e.uid);await j(`households/${t}`,{...s,members:o,memberUids:r,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const n=Ku().filter(i=>i!==t);et("ks-hhs",n),Ju()}async function Ju(){const t=Ku().filter(i=>i!==d.hid),e=u("hhList");if(!e)return;if(!t.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const n=[];for(const i of t){let s=i;try{const o=await W(`households/${i}`);o!=null&&o.name&&(s=o.name)}catch{}n.push({id:i,name:s})}e.innerHTML=n.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Ba={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Mo=pe("ks-theme")||"gold",Oo=pe("ks-mode")||"auto";function Ha(t,e){Mo=t,Oo=e,et("ks-theme",t),et("ks-mode",e);const n=Ba[t]||Ba.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,o=document.documentElement.style;o.setProperty("--bg",s.bg),o.setProperty("--sf",s.sf),o.setProperty("--card",s.card),o.setProperty("--card2",s.card2),o.setProperty("--b1",s.b1),o.setProperty("--b2",s.b2),o.setProperty("--ac",s.ac),o.setProperty("--ac2",s.ac2),o.setProperty("--acd","rgba("+s.acr+",.12)"),o.setProperty("--tx",s.tx),o.setProperty("--tx2",s.tx2),o.setProperty("--mt",s.mt),o.setProperty("--gn","#6db56d"),o.setProperty("--gnd","rgba(109,181,109,.12)"),o.setProperty("--rd","#d96b6b"),o.setProperty("--rdd","rgba(217,107,107,.12)"),o.setProperty("--am","#c8960a"),o.setProperty("--amd","rgba(200,150,10,.12)"),ow(e),rw(t)}function ED(t){Ha(Mo,t)}function ow(t){["auto","light","dark"].forEach(e=>{const n=u("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function rw(t){const e=u("themePicker");e&&(e.innerHTML="",Object.keys(Ba).forEach(n=>{const i=Ba[n],s=n===t,o=document.createElement("div");o.title=i.name,o.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",o.textContent=s?"✓":"",o.onclick=()=>Ha(n,Oo),o.onmouseover=function(){this.style.transform="scale(1.15)"},o.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(o)}))}function AD(){Ha(Mo,Oo),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Oo==="auto"&&Ha(Mo,"auto")})}function xD(){rw(Mo),ow(Oo)}async function RD(){const t=u("enrichBtn"),e=u("enrichProgress"),n=u("enrichStatus"),i=u("enrichBar");t&&(t.disabled=!0),e&&(e.style.display="block");const s=d.shop.filter(h=>Gf(h)),o=d.inv.filter(h=>Gf(h)),r=[...s.map(h=>({item:h,list:"shop"})),...o.map(h=>({item:h,list:"inv"}))];if(!r.length){n&&(n.textContent="All items already enriched!"),i&&(i.style.width="100%"),t&&(t.disabled=!1),_("Nothing to enrich — all items already have data.");return}let a=0,l=0;for(let h=0;h<r.length;h++){const{item:f,list:g}=r[h],w=Math.round((h+1)/r.length*100);n&&(n.textContent=`Processing "${f.name}" (${h+1}/${r.length})…`),i&&(i.style.width=w+"%");try{const $=(await(await fetch(`/api/text-search?q=${encodeURIComponent(f.name)}`)).json()).results||[];if($.length){const P=$[0],O={...f,image:P.image||f.image||null,brand:P.brand||f.brand||"",category:P.category||f.category||"",source:P.source||f.source||"search"};g==="shop"?await Ne(O):await ee(O),a++}else l++}catch(k){console.warn(`Enrich failed for "${f.name}":`,k),l++}h<r.length-1&&await _c(300)}n&&(n.textContent=`Done! ${a} enriched, ${l} skipped.`),i&&(i.style.width="100%"),t&&(t.disabled=!1),_(`Enrichment complete: ${a} updated, ${l} unchanged.`)}function Gf(t){return!t.name||t.name.length<2||t.imageDismissed?!1:!t.image&&!t.brand}function _c(t){return new Promise(e=>setTimeout(e,t))}function PD(t){return t?7:2}async function $D(){qe("utilities");const t=Q();let e=!1;if(t&&d.hid)try{const i=await W(`households/${d.hid}`);e=i&&i.ownerUid===t.uid}catch(i){console.error("openUtilities: failed to fetch household doc:",i)}const n=u("ov-utilities");n&&n.querySelectorAll(".ownerUtil").forEach(i=>{i.style.display=e?"":"none"}),cw(),ti(()=>aw())}function aw(){Ns(),ue("utilities")}function LD(){const t=oL();_(t>0?`✓ Cleared ${t} cached scan${t===1?"":"s"}`:"Cache is already empty"),cw()}function cw(){const t=u("clearScanCacheBtn");if(!t)return;const e=sL();t.textContent=e>0?`🗑️ Clear scan cache (${e} item${e===1?"":"s"})`:"🗑️ Clear scan cache"}async function DD(){if(!d.recs||d.recs.length===0){_("No recipes to publish");return}if(!confirm(`Publish all ${d.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const t=Q(),e=(t==null?void 0:t.displayName)||localStorage.getItem("ks-who")||"Anonymous",n=d.recs.length;let i=0;const s=u("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${n}…`);const o=u("bulkPubBtn");o&&(o.disabled=!0);let r=0;for(const a of d.recs)try{if(await pg(a)){r++,s&&(s.textContent=`Published ${i}/${n} (${r} skipped)…`);continue}await Ld(a,e),i++,s&&(s.textContent=`Published ${i}/${n}…`)}catch(l){console.error("Failed to publish:",a.name,l)}_(`Published ${i} of ${n} recipes to community!`+(r?` (${r} already published)`:"")),o&&(o.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${r} skipped.`)}async function ND(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const t=u("removeDupBtn");t&&(t.disabled=!0,t.textContent="Scanning…");try{const e=await Ft();if(!e||e.length===0){_("No community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}const n=d.hid||"",i=await Nd(),s=l=>l.householdId?l.householdId===n:l.authorUid&&i.includes(l.authorUid),o={};for(const l of e){if(!s(l))continue;const h=(l.title||"").trim().toLowerCase();o[h]||(o[h]=[]),o[h].push(l)}const r=[];for(const l of Object.keys(o)){const h=o[l];if(!(h.length<=1)){h.sort((f,g)=>(f.createdAt||"").localeCompare(g.createdAt||""));for(let f=1;f<h.length;f++)r.push(h[f])}}if(r.length===0){_("No duplicate community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}let a=0;for(const l of r)try{await fe(`public_recipes/${l.id}`),a++,t&&(t.textContent=`Removing ${a}/${r.length}…`)}catch(h){console.error("Failed to delete duplicate:",l.id,l.title,h)}d.comRecs=await Ft(),_(`${a} duplicate recipe${a!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),_("Error scanning for duplicates. Check console.")}t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes")}async function MD(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=u("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Ft()||[]).filter(r=>r.authorUid===t);if(s.length===0){_("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let o=0;for(const r of s)try{await fe(`public_recipes/${r.id}`),o++,e&&(e.textContent=`Removing ${o}/${s.length}…`)}catch(a){console.error("Failed to delete community recipe:",r.id,r.title,a)}d.comRecs=await Ft(),_(`${o} community recipe${o!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),_("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function OD(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=u("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Ft(),s=d.hid||"",o=await Nd();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",o),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const r=f=>f.householdId?f.householdId===s:f.authorUid&&o.includes(f.authorUid),a=(i||[]).filter(r);if(console.log("[removeHHComm] Matched household recipes:",a.length,a.map(f=>({id:f.id,title:f.title,authorUid:f.authorUid,householdId:f.householdId}))),a.length===0){_("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${a.length} community recipe${a.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,h=0;for(const f of a)try{const g=`public_recipes/${f.id}`;f.authorUid===t?await fe(g):await y0(g),l++,console.log("[removeHHComm] Deleted:",f.id,f.title,"author:",f.authorUid),e&&(e.textContent=`Removing ${l}/${a.length}…`)}catch(g){h++,console.error("[removeHHComm] Failed to delete:",f.id,f.title,"author:",f.authorUid,g)}d.comRecs=await Ft(),h>0?_(`${l} removed, ${h} failed. Check console.`):_(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),_("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function VD(){var l,h,f,g,w;const t=Q();if(!t){_("Sign in first");return}const e=[...d.recs];let n=[];try{n=(await ae("public_recipes")).filter(E=>E.authorUid===t.uid)}catch(k){console.error("Failed to load public recipes:",k)}const i=[...e,...n],s=i.length;if(!s){_("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const o=u("regenSumProgress"),r=u("regenSumBtn");o&&(o.style.display="block",o.textContent=`Regenerating 0 of ${s}…`),r&&(r.disabled=!0);let a=0;for(let k=0;k<i.length;k++){const E=i[k],$=E.title||E.name||"Untitled",P=((l=E.ingredientsRaw)==null?void 0:l.join(", "))||E.ingredients||E.description||"",O=((h=E.stepsRaw)==null?void 0:h.join(". "))||E.steps||"";try{const D=((w=(g=(f=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${$}
Ingredients: ${P.substring(0,500)}
Instructions: ${O.substring(0,500)}`}]})})).json()).content)==null?void 0:f[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(D){if(n.some(q=>q.id===E.id))await j(`public_recipes/${E.id}`,{...E,summary:D,id:void 0});else{const q=`households/${d.hid}/recipes/${E.id}`;await j(q,{...E,summary:D,id:void 0});const C=d.recs.find(v=>v.id===E.id);C&&(C.summary=D)}a++}}catch(M){console.error("Summary regen failed for:",$,M)}o&&(o.textContent=`Regenerating ${k+1} of ${s}…`),await _c(300)}o&&(o.textContent=`Done — ${a} summaries updated.`),r&&(r.disabled=!1),_(`${a} summaries regenerated!`)}async function UD(){if(!Q()){_("Sign in first");return}const e=u("scanRecipesBtn"),n=u("scanRecipesProgress");e&&(e.disabled=!0,e.textContent="🔍 Scanning your recipes..."),n&&(n.style.display="block",n.textContent="Scanning..."),await _c(50);const i=[];for(const s of d.recs){const o=[],r=FD(s);r.length===0&&o.push("no ingredients found"),(!s.stepsRaw||s.stepsRaw.length===0)&&!(s.description||"").includes("Steps:")&&o.push("no instructions found");let a=0,l=0,h=0;for(const f of r){if(!f||typeof f!="string")continue;const g=f.trim();if(g.length>100){h++;continue}if(g.length>0&&g.length<3){l++;continue}g.length>=3&&!am(g)&&a++}a>0&&o.push(`${a} preparation method${a>1?"s":""} found as ingredient${a>1?"s":""}`),l>0&&o.push(`${l} suspiciously short ingredient${l>1?"s":""}`),h>0&&o.push("instructions mixed with ingredients"),o.length>0&&i.push({recipe:s,issues:o})}if(e&&(e.disabled=!1,e.textContent="🔍 Scan all recipes for issues"),n&&(n.style.display="none"),i.length===0){_("All recipes look good ✓");return}jD(i)}function FD(t){if(t.ingredientsRaw&&t.ingredientsRaw.length>0)return t.ingredientsRaw.map(o=>typeof o=="string"?o:o.name||"").filter(Boolean);const n=(t.description||"").split(`
`),i=[];let s=!1;for(const o of n){const r=o.trim();if(/^ingredients?:?\s*$/i.test(r)){s=!0;continue}if(/^(steps?|directions?|instructions?|method):?\s*$/i.test(r)){s=!1;continue}if(s&&r.startsWith("-")){const a=r.replace(/^-\s*/,"").replace(/^\d+[\d./\s]*(?:cups?|tbsp|tsp|oz|lb|g|kg|ml|l|cloves?|pieces?|slices?|cans?|bunch(?:es)?|heads?|stalks?|sprigs?|pinch(?:es)?|dash(?:es)?|packages?|packets?)\s*/i,"").trim();a&&i.push(a)}}return i}function jD(t){const e=t.map(({recipe:i,issues:s})=>{const o=i.name||i.title||"Untitled",r=s.join(", ");return`<div style="padding:10px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:flex-start;gap:10px">
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
  </div>`,n._flaggedData=t,n.addEventListener("click",i=>{i.target===n&&Yu()}),document.body.appendChild(n)}function Yu(){const t=document.getElementById("scanResultsModal");t&&t.remove()}async function BD(){const t=document.getElementById("scanResultsModal");if(!t||!t._flaggedData)return;const e=t._flaggedData,n=e.length;let i=0,s=0;const o=t.querySelector("div");o&&(o.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom));text-align:center">
      <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:8px">✨ Fixing Recipes...</div>
      <div id="fixProgress" style="font-size:.84rem;color:var(--mt);margin-bottom:16px">Fixing 1 of ${n}...</div>
      <div style="width:100%;height:6px;background:var(--b2);border-radius:3px;overflow:hidden;margin-bottom:12px">
        <div id="fixProgressBar" style="height:100%;background:var(--ac);border-radius:3px;width:0%;transition:width .3s ease"></div>
      </div>
    </div>`);for(let r=0;r<e.length;r++){const{recipe:a}=e[r],l=document.getElementById("fixProgress"),h=document.getElementById("fixProgressBar");l&&(l.textContent=`Fixing ${r+1} of ${n}... (${a.name||"Untitled"})`),h&&(h.style.width=`${(r+1)/n*100}%`);try{const f=a.description||"",g=(a.stepsRaw||[]).map((D,B)=>{const q=typeof D=="string"?D:D.text||"";return`${B+1}. ${q}`}).join(`
`)||"",k=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:f,instructions:g,title:a.name||""})})).json();if(!k.success){s++;continue}const{ingredients:E,steps:$}=k.result;let P=[];E.length&&(P.push("Ingredients:"),E.forEach(D=>{const B=[D.amount,D.unit].filter(Boolean).join(" ");P.push(`- ${B?B+" ":""}${D.name}`)}),P.push("")),$.length&&(P.push("Steps:"),$.forEach((D,B)=>P.push(`${B+1}. ${D}`)));const O={...a,description:P.join(`
`),ingredientsRaw:E,stepsRaw:$},M=`households/${d.hid}/recipes/${a.id}`;await j(M,{...O,id:void 0});const N=d.recs.find(D=>D.id===a.id);N&&(N.description=O.description,N.ingredientsRaw=O.ingredientsRaw,N.stepsRaw=O.stepsRaw),i++}catch(f){console.error(`Failed to fix recipe "${a.name}":`,f),s++}await _c(500)}Yu(),_(`${i} recipe${i!==1?"s":""} fixed${s>0?`, ${s} skipped`:""}`)}let zi=new Set,Qn=new Set,Xu=0,Ri=null,Dt=new Map,hd=new Set,Vo="";function HD(){const t=u("prep-search");Vo=t?t.value.trim().toLowerCase():"",Ri?eh(Ri):Vo?zD():ni()}function zD(){const t=u("prep-body");if(!t)return;const e=kc(),n=er();let i="",s=0;for(const o of n){const r=(e.get(o.key)||[]).filter(a=>[a.scanTitle||"",a.name||"",a.brand||""].join(" ").toLowerCase().includes(Vo));if(r.length){s+=r.length,i+=`<div class="prep-search-cat-header">${o.emoji} ${o.name} (${r.length})</div>`;for(const a of r){const l=ks(a),h=Qn.has(a.id),f=Z(a.scanTitle||a.name);i+=`<div class="prep-item${l?" prep-item-low":""}" id="prep-row-${a.id}">
        <div class="prep-item-info" style="flex:1;min-width:0">
          <div class="prep-item-name">${f}</div>
        </div>
        <div class="prep-qty-group">
          <button class="prep-qty-btn" onclick="prepQtyStep('${a.id}',-1)">−</button>
          <span class="prep-qty-val" id="prep-qty-${a.id}">${tn(a.qty)}</span>
          <button class="prep-qty-btn" onclick="prepQtyStep('${a.id}',1)">+</button>
        </div>
        <div class="prep-unit">${a.unit||"Unit"}</div>
        <button class="prep-shop-btn${h?" prep-shop-added":""}" id="prep-shop-${a.id}"
          onclick="prepAddToShop('${a.id}')"${h?" disabled":""}>
          ${h?"✓ Added":"🛒"}
        </button>
      </div>`}}}s||(i=`<div class="es" style="padding:40px 20px"><div class="ei">🔍</div>
      <p>No items matching "${Vo}"</p></div>`),t.innerHTML=i}function za(t){return t.prepCategory&&er().some(n=>n.key===t.prepCategory)?t.prepCategory:Li(t)}function kc(){const t=new Map,e=er();for(const n of e)t.set(n.key,[]);for(const n of d.inv){const i=za(n);t.has(i)?t.get(i).push(n):t.get("other").push(n)}for(const[n,i]of t)i.sort((s,o)=>(s.scanTitle||s.name).localeCompare(o.scanTitle||o.name,void 0,{sensitivity:"base"}));return t}function ks(t){if(t.doNotRestock)return!1;const e=t.restockThreshold!=null?t.restockThreshold:ar(t.unit);return t.qty<=e}function qD(){zi=new Set,Qn=new Set,Xu=0,Ri=null,hd=new Set,Vo="",Dt.forEach(e=>clearTimeout(e)),Dt.clear();const t=u("prep-search");t&&(t.value=""),ni(),qe("shoppingprep"),ti(()=>Zu())}function Zu(){Dt.forEach(n=>clearTimeout(n)),Dt.clear(),Ns(),ue("shoppingprep");const t=Qn.size,e=Xu;if(t>0||e>0){const n=[];t>0&&n.push(`${t} item${t!==1?"s":""} added to Shopping List`),e>0&&n.push(`${e} quantit${e!==1?"ies":"y"} updated`),_(`Shopping Prep complete — ${n.join(", ")}`)}else _("No changes made")}function ni(){const t=u("prep-body");if(!t)return;const e=u("prep-title");e&&(e.textContent="Shopping Prep");const n=u("prep-back");n&&n.setAttribute("onclick","closeShoppingPrep()");const i=kc(),s=er(),o=d.cfg.customPrepCategories||[],r=new Set(o.map(h=>h.key));let a='<div class="prep-grid">',l=!1;for(const h of s){const f=i.get(h.key)||[],g=f.filter(E=>ks(E)).length,w=r.has(h.key);if(w&&!l&&(a+='<div class="prep-custom-divider">Custom Categories</div>',l=!0),h.isSubCategory)continue;const k=w?` ontouchstart="prepCatLongPress(event,'${h.key}')" oncontextmenu="prepCatLongPress(event,'${h.key}')"`:"";a+=`<div class="prep-cat-card${g>0?" prep-cat-low":""}" onclick="openPrepCategory('${h.key}')"${k}>
      <div class="prep-emoji">${h.emoji}</div>
      <div class="prep-cat-name">${h.name}</div>
      <div class="prep-cat-count">${f.length} item${f.length!==1?"s":""}</div>
      ${g>0?`<div class="prep-low-badge">${g} low</div>`:""}
    </div>`}a+="</div>",a+=`<button class="btn bs bf prep-add-cat-btn" onclick="openPrepAddCategory()">
    + Add Category
  </button>`,t.innerHTML=a}function WD(t){Ri=t,ti(()=>lw()),eh(t)}function lw(){Ri=null,ni(),ti(()=>Zu())}function eh(t){const e=u("prep-body");if(!e)return;const n=er().find(h=>h.key===t);if(!n)return;const i=u("prep-title");i&&(i.textContent=`${n.emoji} ${n.name}`);const s=u("prep-back");s&&s.setAttribute("onclick","backToGrid()");const r=kc().get(t)||[],a=r.filter(h=>ks(h));let l="";a.length>0&&(l+=`<button class="btn bp bf prep-add-all-low" onclick="prepAddAllLow('${t}')">
      Add all low (${a.length})
    </button>`),r.length||(l+=`<div class="es" style="padding:40px 20px"><div class="ei">${n.emoji}</div>
      <p>No items in ${n.name}</p></div>`);for(const h of r){const f=ks(h),g=zi.has(h.id),w=Qn.has(h.id),k=Z(h.scanTitle||h.name);as(h.qty);const E=h.unit||"Unit";l+=`<div class="prep-item${f?" prep-item-low":""}${g?" prep-item-verified":""}" id="prep-row-${h.id}">
      <!-- Verify checkbox: marks item as physically checked during audit -->
      <div class="prep-verify${g?" checked":""}" onclick="prepToggleVerify('${h.id}')">
        ${g?"✓":""}
      </div>
      <div class="prep-item-info">
        <div class="prep-item-name">${k}</div>
        <!-- Category badge: tappable pill to recategorize this item -->
        <div class="prep-cat-badge" onclick="event.stopPropagation();prepRecategorize('${h.id}')">${an(za(h)).emoji} ${an(za(h)).name} ▼</div>
      </div>
      <!-- Inline quantity stepper: auto-saves to Firestore with 500ms debounce -->
      <div class="prep-qty-group">
        <button class="prep-qty-btn" onclick="prepQtyStep('${h.id}',-1)">−</button>
        <span class="prep-qty-val" id="prep-qty-${h.id}">${tn(h.qty)}</span>
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
  </button>`,e.innerHTML=l}function GD(t){zi.has(t)?zi.delete(t):zi.add(t);const e=u(`prep-row-${t}`);if(e){const n=e.querySelector(".prep-verify");n&&(n.classList.toggle("checked"),n.innerHTML=zi.has(t)?"✓":""),e.classList.toggle("prep-item-verified")}}function KD(t){if(Qn.has(t)||!d.inv.find(o=>o.id===t))return;const n=u(`prep-shop-${t}`);if(!n)return;const i=n.parentElement,s=document.createElement("div");s.className="prep-qty-picker",s.id=`prep-picker-${t}`,s.innerHTML=`
    <button class="prep-qty-btn" onclick="event.stopPropagation();prepPickerStep('${t}',-1)">−</button>
    <span class="prep-picker-val" id="prep-pick-val-${t}">1</span>
    <button class="prep-qty-btn" onclick="event.stopPropagation();prepPickerStep('${t}',1)">+</button>
    <button class="prep-picker-confirm" onclick="event.stopPropagation();prepConfirmAdd('${t}')">✓</button>
  `,n.style.display="none",i.appendChild(s)}const qa=new Map;function QD(t,e){const n=qa.get(t)||1,i=Math.max(1,Math.min(99,n+e));qa.set(t,i);const s=u(`prep-pick-val-${t}`);s&&(s.textContent=i)}async function JD(t){const e=d.inv.find(o=>o.id===t);if(!e)return;const n=qa.get(t)||1;qa.delete(t),await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:n,unit:e.unit||"Unit",checked:!1,brand:e.brand||"",src:"prep"}),Qn.add(t);const i=u(`prep-picker-${t}`);i&&i.remove();const s=u(`prep-shop-${t}`);s&&(s.style.display="",s.classList.add("prep-shop-added"),s.textContent=`✓ ${n>1?n+" ":""}Added`,s.disabled=!0)}async function YD(t){const n=(kc().get(t)||[]).filter(i=>ks(i)&&!Qn.has(i.id));if(!n.length){_("All low items already added");return}for(const i of n){await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:i.name,qty:1,unit:i.unit||"Unit",checked:!1,brand:i.brand||"",src:"prep"}),Qn.add(i.id);const s=u(`prep-shop-${i.id}`);s&&(s.classList.add("prep-shop-added"),s.textContent="✓ Added",s.disabled=!0)}_(`Added ${n.length} low item${n.length!==1?"s":""} to Shopping List`)}function XD(t,e){const n=d.inv.find(h=>h.id===t);if(!n)return;const{whole:i,frac:s}=as(n.qty),o=Math.max(0,Math.min(99,i+e)),r=ot(o,s);if(e<0&&n.qty<=.25)return;n.qty=r;const a=u(`prep-qty-${t}`);a&&(a.textContent=tn(r));const l=u(`prep-row-${t}`);l&&(ks(n)?l.classList.add("prep-item-low"):l.classList.remove("prep-item-low")),hd.has(t)||(Xu++,hd.add(t)),Dt.has(t)&&clearTimeout(Dt.get(t)),Dt.set(t,setTimeout(()=>{ee({...n,qty:r}),Dt.delete(t)},500))}function ZD(t){const e=d.inv.find(i=>i.id===t);if(!e)return;const n=za(e);Xn(n,async i=>{await xy(t,i),Ri&&eh(Ri);const{name:s}=an(i);_(`Moved to ${s}`)})}function eN(t,e){t.preventDefault(),t.stopPropagation();const n=document.getElementById("prep-cat-actions");n&&n.remove();const i=document.createElement("div");i.id="prep-cat-actions",i.className="prep-cat-action-menu",i.innerHTML=`
    <div class="prep-cat-action" onclick="prepCatRename('${e}')">✏️ Rename</div>
    <div class="prep-cat-action" onclick="prepCatAddSub('${e}')">📁 Add Sub-category</div>
    <div class="prep-cat-action" onclick="prepCatReorder('${e}',-1)">⬆️ Move Up</div>
    <div class="prep-cat-action" onclick="prepCatReorder('${e}',1)">⬇️ Move Down</div>
    <div class="prep-cat-action prep-cat-action-danger" onclick="prepCatDelete('${e}')">🗑 Delete</div>
  `;const s=document.createElement("div");s.className="prep-cat-action-backdrop",s.onclick=()=>{i.remove(),s.remove()},document.body.appendChild(s),document.body.appendChild(i);const o=t.touches?t.touches[0].clientX:t.clientX,r=t.touches?t.touches[0].clientY:t.clientY;i.style.left=Math.min(o,window.innerWidth-200)+"px",i.style.top=Math.min(r,window.innerHeight-250)+"px"}function tN(t){Tc();const n=(d.cfg.customPrepCategories||[]).find(s=>s.key===t);if(!n)return;const i=prompt(`Rename "${n.name}" to:`,n.name);!i||!i.trim()||(Ay(t,i.trim(),null),ni())}function nN(t){Tc();const e=prompt("Sub-category name:");!e||!e.trim()||(dE(t,e.trim(),wt),ni())}async function iN(t,e){Tc(),await uE(t,e),ni()}async function sN(t){Tc(),await Ey(t),ni()}function Tc(){const t=document.getElementById("prep-cat-actions"),e=document.querySelector(".prep-cat-action-backdrop");t&&t.remove(),e&&e.remove()}function oN(){const t=u("prep-body");if(!t)return;let e=document.getElementById("prep-add-cat-form");if(e){e.scrollIntoView({behavior:"smooth"});return}e=document.createElement("div"),e.id="prep-add-cat-form",e.className="prep-add-cat-form",e.innerHTML=`
    <div class="cat-create-form" style="margin-top:12px">
      <div style="font-size:.82rem;font-weight:600;color:var(--tx);margin-bottom:8px">New Category</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="prepCatEmojiBtn" onclick="openPrepCatEmojiPicker(this)">📁</button>
        <input class="fi cat-create-input" id="prepCatNameInput" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmPrepAddCategory()">Add</button>
      </div>
    </div>
  `,t.appendChild(e),e.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{const n=u("prepCatNameInput");n&&n.focus()},150)}let ko=wt;function rN(t){tr(t,ko,e=>{ko=e;const n=u("prepCatEmojiBtn");n&&(n.textContent=e)})}async function aN(){const t=u("prepCatNameInput"),e=t?t.value.trim():"";if(!e){_("Please enter a category name");return}const i={key:"custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),name:e,emoji:ko},s=d.cfg.customPrepCategories||[];d.cfg.customPrepCategories=[...s,i];try{await j(`households/${d.hid}/settings/config`,d.cfg),_(`${ko} ${e} category created!`),ko=wt,ni()}catch(o){console.error("Failed to save custom category:",o),_("Failed to save category")}}function cN(){Dt.forEach(t=>clearTimeout(t)),Dt.clear(),Ns(),ue("shoppingprep"),window.showScreen&&window.showScreen("shopping"),setTimeout(()=>{window.openShopAddSheet&&window.openShopAddSheet()},150)}let xn=0;async function lN(){const t=Q();if(t)try{const e=await W(`users/${t.uid}`);if(e!=null&&e.onboardingDone)return;dN()}catch{}}function dN(){const t=u("ov-onboarding");t&&(xn=0,t.classList.add("active"),dw())}function dw(){const t=u("onboarding-body");if(!t)return;const n=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===xn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;xn===0?t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:xn===1?t.innerHTML=`${n}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Set up your kitchen</div>
      <p style="font-size:.82rem;color:var(--mt);margin-bottom:18px;line-height:1.5">These help Claude give you better recipe suggestions.</p>
      <div class="frow"><label class="flbl">Household name</label><input class="fi" id="ob-name" placeholder="e.g. The Smith Family" value="${d.cfg.name||""}"/></div>
      <div class="frow"><label class="flbl">Adults</label><input class="fi" id="ob-adults" placeholder="e.g. Bora, Sarah" value="${d.cfg.adults||""}"/></div>
      <div class="frow"><label class="flbl">Kids</label><input class="fi" id="ob-kids" placeholder="e.g. 1 toddler (age 3)" value="${d.cfg.kids||""}"/></div>
      <div class="frow"><label class="flbl">Favourite cuisines</label><input class="fi" id="ob-cuisines" placeholder="e.g. Italian, Turkish, Mexican" value="${d.cfg.cuisines||""}"/></div>
      <div class="frow"><label class="flbl">Weeknight cook time</label>
        <select class="fsel" id="ob-cooktime">
          <option value="20-30 min"${d.cfg.cookTime==="20-30 min"?" selected":""}>20–30 min</option>
          <option value="30-45 min"${d.cfg.cookTime==="30-45 min"?" selected":""}>30–45 min</option>
          <option value="40-60 min"${d.cfg.cookTime==="40-60 min"?" selected":""}>40–60 min</option>
          <option value="60+ min"${d.cfg.cookTime==="60+ min"?" selected":""}>60+ min</option>
        </select>
      </div>
      <div class="frow"><label class="flbl">Dietary restrictions</label>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-nopork" ${d.cfg.nopork?"checked":""}/> No pork</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-noshellfish" ${d.cfg.noshellfish?"checked":""}/> No shellfish</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-vegetarian" ${d.cfg.vegetarian?"checked":""}/> Vegetarian</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-glutenfree" ${d.cfg.glutenfree?"checked":""}/> Gluten-free</label>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:xn===2?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:xn===3&&(t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to Supplies, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function uN(){var t,e,n,i,s,o,r,a,l,h,f,g,w;if(xn===1){const k=(e=(t=u("ob-name"))==null?void 0:t.value)==null?void 0:e.trim(),E=(i=(n=u("ob-adults"))==null?void 0:n.value)==null?void 0:i.trim(),$=(o=(s=u("ob-kids"))==null?void 0:s.value)==null?void 0:o.trim(),P=(a=(r=u("ob-cuisines"))==null?void 0:r.value)==null?void 0:a.trim(),O=(l=u("ob-cooktime"))==null?void 0:l.value;k&&(d.cfg.name=k),E&&(d.cfg.adults=E),$&&(d.cfg.kids=$),P&&(d.cfg.cuisines=P),O&&(d.cfg.cookTime=O),d.cfg.nopork=((h=u("ob-nopork"))==null?void 0:h.checked)||!1,d.cfg.noshellfish=((f=u("ob-noshellfish"))==null?void 0:f.checked)||!1,d.cfg.vegetarian=((g=u("ob-vegetarian"))==null?void 0:g.checked)||!1,d.cfg.glutenfree=((w=u("ob-glutenfree"))==null?void 0:w.checked)||!1,await tc()}xn++,dw()}async function uw(){const t=u("ov-onboarding");t&&t.classList.remove("active");const e=Q();if(e)try{const n=await W(`users/${e.uid}`);n&&await j(`users/${e.uid}`,{...n,onboardingDone:!0,id:void 0})}catch{}}async function hN(){await uw(),_("You can always adjust settings later ⚙️")}window.getIdToken=rg;F.renderAll=()=>{try{Da()}catch(t){console.error("[renderAll] crash:",t)}};F.renderSum=()=>{try{$s()}catch(t){console.error("[renderSum] crash:",t)}};F.renderRecs=()=>{try{it()}catch(t){console.error("[renderRecs] crash:",t)}};F.renderShop=()=>{try{Si()}catch(t){console.error("[renderShop] crash:",t)}};Yx(Gn);window.addEventListener("unhandledrejection",t=>{console.error("[unhandledrejection]",t.reason),t.preventDefault(),ce("error")});window.addEventListener("error",t=>{console.error("[global error]",t.message,t.filename,t.lineno),ce("error")});document.addEventListener("visibilitychange",()=>{document.hidden&&(Oy(),Ly())});const rs=["home","inventory","recipes","shopping","insights","chat"];function Kf(t){const e=u("screen-"+t);if(!e)return;const n=e.querySelector(".hbody, .ibody, .rbody, .shbody")||e;n.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 32px;text-align:center;gap:16px">
    <div style="font-size:2.5rem;opacity:.5">⚠️</div>
    <div style="font-size:.95rem;font-weight:600;color:var(--tx)">Something went wrong</div>
    <div style="font-size:.82rem;color:var(--mt);max-width:260px;line-height:1.6">This tab hit an error. Try switching tabs or pull down to refresh.</div>
    <button onclick="location.reload()" class="btn bp bsm" style="margin-top:8px">Reload App</button>
  </div>`}let Fr=!1,Qf=null;function Wa(){var t;for(const e of rs)if((t=u("screen-"+e))!=null&&t.classList.contains("active"))return e;return null}function pN(){document.querySelectorAll(".screen").forEach(t=>{t.classList.add("no-transition"),t.classList.remove("active","slide-left")}),document.body.offsetHeight,document.querySelectorAll(".screen").forEach(t=>t.classList.remove("no-transition"))}window.showScreen=function(t){var a,l;const e=Wa();if(e===t)return;if(e===null){console.log("[showScreen] First load — snapping",t,"visible (no transition)");const h=u("screen-"+t);h&&(h.classList.add("no-transition","active"),h.offsetHeight,h.classList.remove("no-transition")),document.querySelectorAll(".ni").forEach(f=>f.classList.remove("active")),(a=u("nav-"+t))==null||a.classList.add("active");try{t==="home"&&(window._shouldAnimateCounters=!0,Na()),t==="inventory"&&Gn(),t==="recipes"&&(d.rt==="community"?Fa():it()),t==="shopping"&&Si(),t==="insights"&&Hf()}catch(f){console.error(`[showScreen] Render error on first load of "${t}":`,f),Kf(t)}Yf(t);return}Fr&&(clearTimeout(Qf),pN(),Fr=!1),document.querySelectorAll(".ov.active").forEach(h=>h.classList.remove("active")),Oy(),Ly();const n=rs.indexOf(e),s=rs.indexOf(t)>n,o=u("screen-"+e),r=u("screen-"+t);document.querySelectorAll(".ni").forEach(h=>h.classList.remove("active")),(l=u("nav-"+t))==null||l.classList.add("active"),Fr=!0,s?(o&&(o.classList.remove("active"),o.classList.add("slide-left")),r&&(r.classList.remove("slide-left"),r.classList.add("active"))):(r&&(r.classList.add("no-transition","slide-left"),r.classList.remove("active"),r.offsetHeight,r.classList.remove("no-transition"),r.classList.remove("slide-left"),r.classList.add("active")),o&&o.classList.remove("active","slide-left")),Qf=setTimeout(()=>{Fr=!1,document.querySelectorAll(".screen:not(.active)").forEach(h=>h.classList.remove("slide-left"))},320),mE(),LA(),y1();try{t==="home"&&(window._shouldAnimateCounters=!0,Na()),t==="inventory"&&Gn(),t==="recipes"&&(d.rt==="community"?Fa():it()),t==="shopping"&&Si(),t==="insights"&&Hf()}catch(h){console.error(`[showScreen] Render error on "${t}":`,h),Kf(t)}Yf(t)};const fN={home:{action:"openHomeFabSheet()",ariaLabel:"Add item"},inventory:{action:"openInvAddSheet()",ariaLabel:"Add supply"},recipes:{action:"showOv('arec')",ariaLabel:"Add recipe"},shopping:{action:"openShopAddSheet()",ariaLabel:"Add to list"},insights:null,chat:null};let Jf=null;function Yf(t){const e=u("fab-btn");if(!e)return;const n=fN[t];n?(e.classList.remove("hidden"),e.innerHTML='<span class="fab-icon">＋</span>',e.setAttribute("onclick",n.action),e.setAttribute("aria-label",n.ariaLabel),e.classList.remove("settled"),clearTimeout(Jf),Jf=setTimeout(()=>{e.classList.add("settled")},2e3)):e.classList.add("hidden")}function mN(){let t=0,e=0,n=!1;const i=50,s=30,o=u("APP");o&&(o.addEventListener("touchstart",r=>{r.target.closest(".bsheet, .ov, .modal, .chmsgs")||r.target.closest(".swipe-wrap, .shit, .iit, .exi")||(t=r.touches[0].clientX,e=r.touches[0].clientY,n=!0)},{passive:!0}),o.addEventListener("touchend",r=>{if(!n)return;n=!1;const a=r.changedTouches[0].clientX-t,l=r.changedTouches[0].clientY-e,h=Math.abs(a),f=Math.abs(l);if(h<i||f>h*Math.tan(s*Math.PI/180))return;const g=Wa(),w=rs.indexOf(g);if(w===-1)return;const k=a<0?w+1:w-1;k>=0&&k<rs.length&&window.showScreen(rs[k])},{passive:!0}))}setTimeout(mN,0);const gN=qe;window.showOv=function(t){gN(t),t==="settings"&&setTimeout(xD,80)};window.hideOv=ue;window.initHome=_u;window.addLowToShop=pR;window.toggleHomeSection=Xx;window.openRecipeMatch=AR;window.showMoreMatches=xR;window.addMissingToShop=RR;window.changeWeek=nR;window.toggleExp=function(){const t=u("exppanel");t.style.display=t.style.display==="none"?"block":"none"};function yN(){const t=u("homeFabBackdrop"),e=u("homeFabSheet");t&&t.classList.add("active"),e&&e.classList.add("active")}function th(){const t=u("homeFabBackdrop"),e=u("homeFabSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function vN(){th(),Py()}function wN(){th(),Fy()}window.openHomeFabSheet=yN;window.closeHomeFabSheet=th;window.fabToSupplies=vN;window.fabToShopping=wN;window.openUniversalAdd=$R;window.closeUniversalAdd=Tu;window.uniQtyStep=LR;window.uniFracChange=DR;window.setUniAddLoc=MR;window.toggleUniAddNote=OR;window.onUniAddInput=VR;window.uniAddToSupplies=jR;window.uniAddToShopping=BR;window.uniAddScan=HR;window.uniAddVoice=zR;window.activityUndo=yR;window.activityUncheck=vR;window.activityRemoveShop=wR;window.activityRemoveInv=bR;window.activityRemoveRec=_R;window.activityRevert=kR;window.activityUndoCook=TR;window.activityClearMeal=CR;window.activityUnclip=IR;window.activityUndoDeduct=SR;window.openAdj=kE;window.updL=EE;window.adjQ=AE;window.adjQD=xE;window.adjE=RE;window.adjNote=PE;window.setIT=eA;window.addManual=tA;window.valMA=nA;window.chgMQ=iA;window.selML=sA;window.remItem=SE;window.importDoc=oA;window.adjUnit=$E;window.adjLowThresh=LE;window.adjLowThreshD=DE;window.adjDoNotRestock=NE;window.changeInvUnit=ME;window.changeInvThreshold=OE;window.changeInvThresholdDirect=VE;window.toggleDoNotRestock=FE;window.changeInvLocation=jE;window.changeInvQty=BE;window.changeInvQtyDirect=HE;window.changeInvFrac=zE;window.changeInvThreshFrac=UE;window.changeInvExpiry=qE;window.clearInvExpiry=WE;window.setInvExpiry=GE;window.changeInvNote=KE;window.editInvDetailName=QE;window.saveInvDetailName=JE;window.editInvDetailSubtitle=YE;window.saveInvDetailSubtitle=XE;window.editInvDetailCombined=ru;window.saveInvDetailCombined=au;window.openInvAddSheet=Py;window.closeInvAddSheet=ir;window.invAddScan=dA;window.invAddVoice=uA;window.invQtyStep=cA;window.invFracChange=lA;window.setInvAddLoc=hA;window.toggleInvAddNote=pA;window.qaddInv=fA;window.onInvInput=mA;window.pickInvInlineResult=bA;window.toggleInvVoice=Dy;window.openInvItemDetail=Zn;window.closeInvItemDetail=ou;window.deleteInvItemImage=TE;window.triggerInvPhotoUpload=CE;window.handleInvPhotoSelected=IE;window.addInvToShopping=kA;window.openShoppingPrep=qD;window.closeShoppingPrep=Zu;window.openPrepCategory=WD;window.backToGrid=lw;window.prepToggleVerify=GD;window.prepAddToShop=KD;window.prepAddAllLow=YD;window.prepQtyStep=XD;window.prepAddNewItem=cN;window.prepRecategorize=ZD;window.prepCatLongPress=eN;window.filterPrepSearch=HD;window.prepPickerStep=QD;window.prepConfirmAdd=JD;window.openPrepAddCategory=oN;window.openPrepCatEmojiPicker=rN;window.confirmPrepAddCategory=aN;window.prepCatRename=tN;window.prepCatAddSub=nN;window.prepCatReorder=iN;window.prepCatDelete=sN;window.selectCategory=nE;window.closeCategoryPicker=su;window.showCreateCustomCategory=oE;window.pickCustomEmoji=aE;window.openCatCreateEmojiPicker=rE;window.selectEmojiFromPicker=sE;window.closeEmojiPicker=Pa;window.confirmCreateCustomCategory=cE;window.deleteCustomCategory=Ey;window.openShopAddCatPicker=zA;window.changeShopCategory=qA;window.openInvAddCatPicker=yA;window.changeInvCategory=vA;window.changeInvEmoji=wA;window.toggleInvViewMode=vE;window.filterInvSearch=wE;window.openCategoryReview=TA;window.closeCategoryReview=du;window.confirmCatReview=CA;window.changeCatReview=IA;window.openUniAddCatPicker=FR;window.openScanCatPicker=yL;window.qadd=DA;window.togShop=rx;window.toggleShopDone=PA;window.toggleShNote=ax;window.saveShNote=cx;window.openShQty=lx;window.adjShQty=dx;window.saveShQty=qy;window.togAisle=ux;window.setSHT=yx;window.shareList=vx;window.openAddToKitchen=wx;window.setAtkLoc=bx;window.confirmAddToKitchen=_x;window.buildList=kx;window.toggleVoice=Vy;window.toggleAddNote=NA;window.openShopAddSheet=Fy;window.closeShopAddSheet=or;window.shopAddScan=FA;window.shopAddVoice=jA;window.shopQtyStep=VA;window.shopFracChange=UA;window.closeEnrichSheet=Hy;window.pickEnrichResult=ox;window.onShopInput=BA;window.pickInlineResult=By;window.openItemDetail=gc;window.closeItemDetail=WA;window.changeShopUnit=GA;window.changeShopQty=KA;window.changeShopQtyDirect=QA;window.changeShopFrac=JA;window.editShopDetailName=YA;window.saveShopDetailName=XA;window.editShopDetailSubtitle=ZA;window.saveShopDetailSubtitle=ex;window.editShopDetailCombined=gu;window.saveShopDetailCombined=yu;window.deleteItemImage=nx;window.triggerProductPhotoUpload=ix;window.handleProductPhotoSelected=sx;window.bpTog=Tx;window.bpSelAll=Cx;window.bpUpdBtn=function(){};window.bpConfirm=Ix;window._bpItems=[];window.searchDeals=Dx;window.dealsFromList=Nx;window.addDealToList=Yy;window.renderDealsZipBanner=Qy;window.loadFlippDeals=yc;window.refreshFlippDeals=Ax;window.filterDealStore=Rx;window.filterDealsLocal=Px;window.loadMoreDeals=Ox;window.setDealsPageSize=Mx;window.loadCoupons=wu;window.refreshCoupons=Vx;window.searchCoupons=jx;window.filterCouponCat=Ux;window.filterCouponsLocal=Fx;window.clipCoupon=Zy;window.loadMoreCoupons=Gx;window.setCouponsPageSize=Wx;window.toggleCouponsSection=Sx;window.toggleDealsSection=Ex;window.clrChk=function(){d.shop.filter(t=>t.checked).forEach(t=>{zy(t.name),Ko(t.id)})};window.setRT=O1;window.togFav=V1;window.valR=U1;window.importFromUrl=F1;window.setImportMode=j1;window.startBulkImport=z1;window.retryBulkImport=Q1;window.saveRec=Y1;window.openER=Nu;window.updR=e$;window.delER=t$;window.scaleRec=n$;window.whatCanIMake=i$;window.addRecIngToShop=s$;window.parseRecipeWithAI=o$;window.closeParsePreview=Va;window.applyParsedRecipe=a$;window.setStar=c$;window.togTag=_1;window.recipeTimeChanged=w1;window.markTotalTimeManual=b1;window.selectDifficulty=$v;window.togglePublic=d$;window.loadCommunity=Fa;window.setComCuisine=C$;window.setComSearch=I$;window.setComSort=S$;window.toggleComTag=E$;window.setComTime=A$;window.setComMinRating=x$;window.openComRecipe=ja;window.likeComRecipe=L$;window.saveComToKitchen=D$;window.addComComment=N$;window.shareComRecipe=M$;window.submitComReview=R$;window.unpublishComRecipe=$$;window.rateComRecipe=Bv;window.clearComRating=P$;window.deleteComComment=U$;window.openReportSheet=B$;window.closeReportSheet=Hv;window.submitComReport=H$;window.loadMoreComments=V$;window.openNotifications=z$;window.openComRecipeFromNotif=q$;window.openRecipeView=Mv;window.handleRecipeBack=lr;window.triggerCoverUpload=u$;window.handleCoverSelected=h$;window.handleCoverDrop=p$;window.removeCoverPhoto=f$;window.triggerStepPhotoUpload=m$;window.handleStepPhotoSelected=g$;window.removeStepPhoto=y$;window.openPhotoViewer=v$;window.closePhotoViewer=w$;window.photoViewerNav=Vv;window.triggerCommentPhotoUpload=_$;window.handleCommentPhotosSelected=k$;window.removeCommentPhoto=T$;window.setRecSearch=k1;window.setRecSort=T1;window.toggleFilterPanel=C1;window.setRecDifficulty=I1;window.setRecCookTime=S1;window.setRecServes=E1;window.toggleRecProtein=A1;window.toggleRecTag=x1;window.toggleRecTagsExpand=R1;window.clearRecFilters=P1;window.toggleComTagsPanel=L1;window.clearComFilters=D1;window.setViewStar=l$;window.editComRecipe=F$;window.saveComRecipeEdit=j$;window.editHouseholdNotes=X1;window.saveHouseholdNotes=Z1;window.sendChat=qv;window.sendPill=Y$;window.clrChat=X$;window.ar=Wv;window.importChatRecipe=J$;window.stopLiveScanner=Uu;window.resumeScanner=hL;window.openScanForList=pL;window.openScanForInventory=fL;window.addScannedToList=vL;window.toggleScanNote=gL;window.showManualNameInput=mL;window.togManual=wL;window.manLookup=bL;window.selRL=Fu;window.valAdd=_L;window.addToInv=kL;window.chgAQ=TL;window.editScanTitle=CL;window.confirmScanTitle=IL;window.swipeDelItem=xL;window.swipeAddItem=AL;window.swipeRowTap=RL;window.togShopSelect=PL;window.togInvSelect=$L;window.cancelSelect=xi;window.deleteSelected=LL;window.undoDelete=DL;window.deleteAll=ML;window.deleteWithUndo=ju;window.confirmVoiceMultiAdd=AA;window.cancelVoiceMulti=Uy;window.openMealM=jL;window.openMealDetail=HL;window.pickRec=BL;window.closeMealM=Wu;window.saveMeal=GL;window.clrMeal=KL;window.openCooked=QL;window.skipCooked=JL;window.saveCooked=YL;window.scheduleRecipe=iD;window.schedSet=sD;window.closeSchedM=WL;window.initRecChips=tw;window.toggleChip=FL;window.filterRecs=nw;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=pD;window.saveZipcode=fD;window.toggleNotif=mD;window.testNotif=gD;window.addHousehold=CD;window.switchHousehold=ID;window.removeHousehold=SD;window.setMode=ED;window.showNotif=_;window.applyTitleCaseWhileTyping=Ga;window.copyInviteCode=yD;window.shareInviteCode=vD;window.regenInviteCode=wD;window.removeMemberFromHH=bD;window.transferOwnershipUI=_D;window.leaveHousehold=sw;window.enrichExistingItems=RD;window.bulkPublishAll=DD;window.regenAllSummaries=VD;window.removeDuplicateCommunityRecipes=ND;window.removeMyCommRecipes=MD;window.removeHouseholdCommRecipes=OD;window.deleteAccount=TD;window.scanRecipesForIssues=UD;window.closeScanResults=Yu;window.fixAllFlaggedRecipes=BD;window.openUtilities=$D;window.closeUtilities=aw;window.clearScanCacheUI=LD;window.editCustomCat=rD;window.pickSettingsCatEmoji=lD;window.pickEditCatEmoji=dD;window.openSettingsAddEmojiPicker=aD;window.openSettingsEditEmojiPicker=cD;window.saveEditCustomCat=uD;window.addCustomCatFromSettings=hD;window.renderCustomCategories=bc;window.onSearchInput=function(t){const e=t.closest(".input-clear-wrap");e&&e.classList.toggle("has-text",t.value.length>0)};window.clearSearch=function(t,e){const n=u(t);if(!n)return;n.value="";const i=n.closest(".input-clear-wrap");i&&i.classList.remove("has-text"),n.focus(),e&&typeof window[e]=="function"&&window[e]()};window.manualRefresh=async function(t){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ce("syncing");try{(t==="shop"||t==="both")&&(d.shop=await ae(`households/${d.hid}/shopping`),Si()),(t==="inv"||t==="both")&&(d.inv=await ae(`households/${d.hid}/inventory`),Gn(),Da()),ce("synced"),_("Refreshed ✓")}catch(n){console.error("manualRefresh error:",n),ce("error"),_("Refresh failed")}};window.refreshHomeData=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),ce("syncing");try{const[e,n,i,s]=await Promise.allSettled([ae(`households/${d.hid}/inventory`),ae(`households/${d.hid}/shopping`),ae(`households/${d.hid}/mealplan`),ae(`households/${d.hid}/settings`)]);e.status==="fulfilled"&&(d.inv=e.value),n.status==="fulfilled"&&(d.shop=n.value),i.status==="fulfilled"&&(d.mp={},i.value.forEach(o=>{o.meal&&(d.mp[o.id]=o.meal)})),Na(),Gn(),ce("synced"),_("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),ce("error"),_("Refresh failed")}};window.refreshRecipes=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),ce("syncing");try{d.rt==="community"?(d.comRecs=await ae("public_recipes"),d.comPage=0,pt()):(d.recs=await ae(`households/${d.hid}/recipes`),it()),ce("synced"),_("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),ce("error"),_("Refresh failed")}};window.onboardNext=uN;window.finishOnboarding=uw;window.skipOnboarding=hN;window.saveUsername=async function(){var r;const t=u("usernameInput"),e=u("usernameStatus"),n=u("saveUsernameBtn"),i=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(n&&(n.disabled=!0,n.textContent="Checking…"),!await mg(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),n&&(n.disabled=!1,n.textContent="Save");return}const o=Q();o&&(await gg(o.uid,i),_("Username set to @"+i)),(r=u("usernameM"))==null||r.classList.remove("active"),n&&(n.disabled=!1,n.textContent="Save")};window.changeUsername=async function(){const t=u("setUsername"),e=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){_("3-20 chars, letters/numbers/underscores only");return}if(e===d.username){_("Username unchanged");return}if(!await mg(e)){_(`"${e}" is already taken`);return}const i=Q();i&&(await gg(i.uid,e),_("Username changed to @"+e))};window._appStart=async function(t){d.hid=t;const e=Q();if(e)try{const i=await W(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){_("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(d.hid&&!await W(`households/${d.hid}`)){console.warn(`[_appStart] Household ${d.hid} no longer exists`),await j(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await hg(d.hid,e.uid)){kD();return}console.log("[_appStart] Hiding login screen, showing app container"),u("LS").style.display="none",u("APP").style.display="flex",console.log("[_appStart] Calling showScreen('home'), current active screen:",Wa()),window.showScreen("home"),console.log("[_appStart] After showScreen('home'), active screen:",Wa()),ce("syncing");const n=Q();if(n)try{const i=await W(`users/${n.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const o=[...s];o.includes(t)||o.push(t),et("ks-hhs",o)}else{const o=pe("ks-hhs")||[t];o.includes(t)||(o.push(t),et("ks-hhs",o))}}catch{const i=pe("ks-hhs")||[t];i.includes(t)||(i.push(t),et("ks-hhs",i))}else{const i=pe("ks-hhs")||[t];i.includes(t)||(i.push(t),et("ks-hhs",i))}await S0(),oD(),_u(),SA(),_A(),MA(),rA(),PR(),eE(d.hid);try{ce("syncing");const i=await Promise.allSettled([ae(`households/${d.hid}/inventory`),ae(`households/${d.hid}/recipes`),ae(`households/${d.hid}/shopping`)]),s=(o,r)=>o.status==="fulfilled"?o.value:r;if(d.inv=s(i[0],d.inv),d.recs=s(i[1],d.recs),d.shop=s(i[2],d.shop),ce("synced"),d.homeDataReady=!0,!localStorage.getItem("ks-emoji-migration-v1")){const o=d.inv.filter(r=>r.customEmoji);if(o.length){console.log(`[emoji-migration-v1] Clearing customEmoji from ${o.length} items`);for(const r of o)delete r.customEmoji,ee(r)}localStorage.setItem("ks-emoji-migration-v1","1")}Da(),it(),Si()}catch(i){console.error("initial load error",i),ce("error"),d.homeDataReady=!0,Da()}if(zu(),n){const i=await L0(n.uid);d.username=i;const s=u("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var o;return(o=u("usernameM"))==null?void 0:o.classList.add("active")},600)}setTimeout(zv,800),setTimeout(lN,500)};AD();EL();d.cfg.notif&&setTimeout(iw,3e3);Si();function Cc(t){u("auth-loading").style.display="none",u("auth-signin").style.display=t==="signin"?"flex":"none",u("auth-signup").style.display=t==="signup"?"flex":"none",u("auth-join").style.display=t==="join"?"flex":"none",u("authError").style.display="none",u("signupError").style.display="none"}function gt(t,e){const n=u(t);n&&(n.textContent=e,n.style.display="block")}function Ic(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function ct(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var Xf;(Xf=u("btnGoogle"))==null||Xf.addEventListener("click",async()=>{const t=u("btnGoogle");ct(t,!0),u("authError").style.display="none";try{await h0()}catch(e){gt("authError",Ic(e))}ct(t,!1)});var Zf;(Zf=u("btnApple"))==null||Zf.addEventListener("click",async()=>{const t=u("btnApple");ct(t,!0),u("authError").style.display="none";try{await p0()}catch(e){gt("authError",Ic(e))}ct(t,!1)});var em;(em=u("btnEmailSign"))==null||em.addEventListener("click",async()=>{var i,s,o;const t=(s=(i=u("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(o=u("authPass"))==null?void 0:o.value;if(!t||!e){gt("authError","Please enter your email and password.");return}const n=u("btnEmailSign");ct(n,!0),u("authError").style.display="none";try{await f0(t,e)}catch(r){gt("authError",Ic(r))}ct(n,!1)});var tm;(tm=u("btnEmailSignup"))==null||tm.addEventListener("click",async()=>{var s,o,r,a,l;const t=(o=(s=u("signupName"))==null?void 0:s.value)==null?void 0:o.trim(),e=(a=(r=u("signupEmail"))==null?void 0:r.value)==null?void 0:a.trim(),n=(l=u("signupPass"))==null?void 0:l.value;if(!t){gt("signupError","Please enter your name.");return}if(!e||!n){gt("signupError","Please enter your email and password.");return}const i=u("btnEmailSignup");ct(i,!0),u("signupError").style.display="none";try{await m0(e,n,t)}catch(h){gt("signupError",Ic(h))}ct(i,!1)});var nm;(nm=u("btnToggleSignup"))==null||nm.addEventListener("click",()=>Cc("signup"));var im;(im=u("btnToggleSignin"))==null||im.addEventListener("click",()=>Cc("signin"));var sm;(sm=u("authPass"))==null||sm.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=u("btnEmailSign"))==null||e.click())});var om;(om=u("signupPass"))==null||om.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=u("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await g0()};let vl=!1;function da(t){localStorage.setItem("ks-h",t),u("LS").style.display="none",u("APP").style.display="flex",window._appStart(t)}function wl(t){Cc("join"),u("btnCreateKitchen").onclick=async()=>{var e;ct(u("btnCreateKitchen"),!0);try{const n=await W(`users/${t.uid}`),i=n!=null&&n.householdId?[n.householdId]:(n==null?void 0:n.householdIds)||[];if(i.length)for(const r of i){const a=await W(`households/${r}`);if(a&&(a.memberUids||[]).includes(t.uid)){console.log(`[_showJoinScreen] User already belongs to household ${r}, using that`),da(r);return}}const s=((e=d.cfg)==null?void 0:e.name)||"My Kitchen";if(await cg(t.uid,s),n)await j(`users/${t.uid}`,{...n,householdIds:[t.uid],needsHousehold:!1,id:void 0});else{const r=await Rl(t);r.householdIds=[t.uid],r.needsHousehold=!1,await j(`users/${t.uid}`,r)}localStorage.removeItem("ks-h");const o=pe("ks-hhs");if(o){const r=o.filter(a=>a!==t.uid);r.push(t.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}da(t.uid)}catch(n){console.error("Create kitchen error:",n),gt("joinError","Something went wrong. Please try again."),ct(u("btnCreateKitchen"),!1)}},u("btnJoinKitchen").onclick=async()=>{var n,i,s;const e=(s=(i=(n=u("joinCode"))==null?void 0:n.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){gt("joinError","Please enter an invite code.");return}ct(u("btnJoinKitchen"),!0),u("joinError").style.display="none";try{let o=await W(`users/${t.uid}`);o||(o=await Rl(t));const r=await lg(e,t);if(!r){gt("joinError","Invalid invite code. Check and try again."),ct(u("btnJoinKitchen"),!1);return}const a=pe("ks-hhs")||[];a.includes(r)||a.push(r),et("ks-hhs",a),da(r)}catch(o){console.error("Join kitchen error:",o),gt("joinError","Something went wrong. Please try again."),ct(u("btnJoinKitchen"),!1)}}}d0(async t=>{var e;if(t){if(localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),!vl){vl=!0;try{const n=await W(`users/${t.uid}`),i=localStorage.getItem("ks-h"),s=pe("ks-hhs");if(!!n||!!i||s&&s.length>0){const r=await T0(t);r?(u("LS").style.display="none",u("APP").style.display="flex",da(r)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),wl(t))}else wl(t)}catch(n){console.error("Failed to resolve household:",n),console.warn("[onAuth] Error during household resolution — showing join screen"),wl(t)}}}else Iy(),E0(),vl=!1,u("APP").style.display="none",u("LS").style.display="flex",Cc("signin")});
