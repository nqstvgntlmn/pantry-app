(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Ea={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:"",favouriteStore:""},u={hid:null,inv:[],recs:[],shop:[],mp:{},mpCooked:{},cfg:{...Ea},cookLog:[],wasteLog:[],activity:[],productPrefs:{},homeDataReady:!1,chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set,homeDataLoaded:!1,homeTodos:[],homeChores:[],homeMaint:[],homeGame:null};function fe(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function tt(t,e){localStorage.setItem(t,JSON.stringify(e))}const Ss=[{value:0,label:"·/·"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function Aa(t){const e=Number(t)||0,n=Math.floor(e),i=e-n,s=Ss.reduce((o,r)=>Math.abs(r.value-i)<Math.abs(o-i)?r.value:o,0);return{whole:n,frac:s}}function dt(t,e){const n=Math.max(0,Math.min(99,Math.floor(Number(t)||0))),i=Number(e)||0,s=n+i;return s<=0?.25:s}function Bn(t){const{whole:e,frac:n}=Aa(t),i=n>0?(Ss.find(s=>Math.abs(s.value-n)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}const Pb={bag:"Bags",bar:"Bars",bottle:"Bottles",box:"Boxes",bucket:"Buckets",bunch:"Bunches",can:"Cans",carton:"Cartons",clove:"Cloves",container:"Containers",gallon:"Gallons","half gallon":"Half Gallons",head:"Heads",jar:"Jars",liter:"Liters",loaf:"Loaves",pack:"Packs",piece:"Pieces",pound:"Pounds",roll:"Rolls",tube:"Tubes",unit:"Units"};function Dd(t,e){if(!t)return"Unit";const n=Number(e)||0;return Math.floor(n)<=1?t:Pb[t.toLowerCase()]||t}function cs(t,e){return`${Bn(t)} ${Dd(e||"Unit",t)}`}function Vl(t,e){const n=e>.01,i=Ss.map(o=>{const r=Math.abs(o.value-e)<.01?" selected":"";return`<option value="${o.value}"${r}>${o.label}</option>`}).join("");return`<select class="frac-select${n?" frac-active":""}" id="${t}">${i}</select>`}function Z(t){return t?t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function rc(t){if(!t)return;const e=t.value;if(!e)return;const n=t.selectionStart,i=e.replace(/(^|\s)(\w)/g,(s,o,r)=>o+r.toUpperCase());i!==e&&(t.value=i,t.setSelectionRange(n,n))}function d(t){return document.getElementById(t)}function Jt(){return new Date().toISOString().split("T")[0]}function Ld(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Db(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function ot(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),i=Math.round((n-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Lm(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[t]||t}const Lb=[{keywords:["mac & cheese","mac and cheese","mac n cheese","macaroni and cheese"],emoji:"🧀"},{keywords:["energy drink","red bull","monster energy","celsius","bang"],emoji:"🥤"},{keywords:["ice cream","gelato","sorbet","frozen yogurt"],emoji:"🍦"},{keywords:["olive oil","cooking oil","vegetable oil","coconut oil","canola oil","sesame oil","avocado oil"],emoji:"🫒"},{keywords:["soy sauce","fish sauce","hot sauce","sriracha","tabasco","worcestershire"],emoji:"🫙"},{keywords:["baby food","baby formula","diaper"],emoji:"👶"},{keywords:["pet food","dog food","cat food","dog treat","cat treat"],emoji:"🐾"},{keywords:["dish soap","hand soap","body wash"],emoji:"🧴"},{keywords:["sparkling water","seltzer","club soda"],emoji:"💧"},{keywords:["oat milk","almond milk","soy milk","coconut milk"],emoji:"🥛"},{keywords:["chocolate bar"],emoji:"🍫"},{keywords:["peanut butter","almond butter","sunflower butter"],emoji:"🥜"},{keywords:["tomato sauce","marinara","pizza sauce","pasta sauce"],emoji:"🥫"},{keywords:["caper","pickle","relish","artichoke heart","sun-dried","sundried","anchov"],emoji:"🫙"},{keywords:["olive","black olive","green olive","kalamata"],emoji:"🫒"},{keywords:["canned","can of"],emoji:"🥫"},{keywords:["bread","pita","bagel","tortilla","naan","flatbread","bun","roll","croissant","muffin","biscuit","english muffin","wrap"],emoji:"🫓"},{keywords:["loaf"],emoji:"🫓"},{keywords:["peppercorn","spice","herb","cumin","turmeric","paprika","cinnamon","oregano","basil","thyme","rosemary","cayenne","chili flake","seasoning","bay leaf","nutmeg","cardamom","clove","saffron","dill","parsley","sage","fennel seed","coriander","allspice","ginger powder"],emoji:"🌶️"},{keywords:["chocolate","cocoa","cacao"],emoji:"🍫"},{keywords:["candy","gummy","gum","licorice","taffy"],emoji:"🍬"},{keywords:["soda","cola","pepsi","coke","sprite","fanta","ginger ale","tonic","drink"],emoji:"🥤"},{keywords:["water"],emoji:"💧"},{keywords:["coffee","espresso","cold brew"],emoji:"☕"},{keywords:["tea","matcha","chai","herbal tea"],emoji:"🍵"},{keywords:["juice","lemonade","smoothie"],emoji:"🧃"},{keywords:["milk","cream","half and half","half & half","creamer"],emoji:"🥛"},{keywords:["cheese","cheddar","mozzarella","parmesan","brie","gouda","feta","ricotta","provolone","swiss","gruyere","colby","pepper jack","cream cheese"],emoji:"🧀"},{keywords:["butter","margarine","ghee"],emoji:"🧈"},{keywords:["egg"],emoji:"🥚"},{keywords:["yogurt","yoghurt","kefir"],emoji:"🥛"},{keywords:["chicken","poultry","turkey","rotisserie"],emoji:"🍗"},{keywords:["beef","steak","meat","lamb","pork","bacon","sausage","ground","brisket","ham","prosciutto","salami","deli"],emoji:"🥩"},{keywords:["fish","salmon","tuna","cod","shrimp","seafood","crab","lobster","tilapia","sardine","clam","mussel","scallop"],emoji:"🐟"},{keywords:["tofu","tempeh","seitan"],emoji:"🥦"},{keywords:["apple","banana","orange","grape","berry","berries","strawberry","blueberry","mango","peach","pear","plum","kiwi","melon","watermelon","pineapple","cherry","lemon","lime","avocado","fruit","raspberry","blackberry","clementine","tangerine","grapefruit","papaya","pomegranate","fig","date","coconut"],emoji:"🍎"},{keywords:["broccoli","carrot","celery","cabbage","tomato","onion","garlic","spinach","mushroom","squash","lettuce","cucumber","pepper","potato","corn","zucchini","eggplant","vegetable","produce","jalap","kale","asparagus","cauliflower","radish","beet","turnip","sweet potato","yam","green bean","snap pea","arugula","chard","bok choy","scallion","leek","ginger"],emoji:"🥦"},{keywords:["chip","crisp","pringles","pretzel","popcorn","cracker","granola bar","protein bar","trail mix","jerky"],emoji:"🍿"},{keywords:["cookie","biscotti","wafer"],emoji:"🍪"},{keywords:["frozen"],emoji:"🧊"},{keywords:["condiment"],emoji:"🧴"},{keywords:["sauce","ketchup","mustard","mayo","mayonnaise","salsa","dressing","jam","jelly","honey","syrup","marinade","glaze","chutney","hummus","tahini","pesto"],emoji:"🫙"},{keywords:["vinegar","rice vinegar","balsamic","apple cider vinegar","white vinegar","red wine vinegar"],emoji:"🍶"},{keywords:["oil"],emoji:"🫒"},{keywords:["cleaning","cleaner","detergent","bleach","windex","sponge","mop","broom","disinfectant","lysol","scrub"],emoji:"🧹"},{keywords:["lotion","shampoo","conditioner","deodorant","sunscreen","face wash","moisturizer","soap","toothpaste","mouthwash","floss","razor","tissue","toilet paper","paper towel"],emoji:"🧴"},{keywords:["vitamin","medicine","supplement","capsule","tablet","pain relief","tylenol","advil","ibuprofen","probiotic","antacid","allergy"],emoji:"💊"},{keywords:["baby","infant","formula"],emoji:"👶"},{keywords:["pet","dog","cat","kibble","litter"],emoji:"🐾"},{keywords:["nut","almond","cashew","peanut","walnut","pecan","pistachio","seed","sunflower","pumpkin seed","chia","flax"],emoji:"🥜"},{keywords:["rice","pasta","noodle","grain","oat","cereal","flour","quinoa","couscous","barley","farro","bulgur","polenta","cornmeal","panko","breadcrumb"],emoji:"🌾"},{keywords:["baking soda","baking powder","yeast","vanilla extract","extract","food coloring","sprinkle","frosting"],emoji:"🧁"},{keywords:["sugar","sweetener","stevia","splenda"],emoji:"🍯"},{keywords:["aluminum foil","plastic wrap","parchment","wax paper","ziploc","storage bag","trash bag","garbage bag"],emoji:"🧻"}];function Nd(t){if(!t)return"🛒";if(t.customEmoji)return t.customEmoji;const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of Lb)if(n.keywords.some(i=>e.includes(i)))return n.emoji;return"🛒"}function Qo(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return e.match(/olive oil|vegetable oil|canola oil|coconut oil|sesame oil|avocado oil|cooking spray|oil(?:\s|$)/)?"Oils & Cooking":e.match(/vinegar|rice vinegar|balsamic|soy sauce|fish sauce|worcestershire|hot sauce|sriracha|teriyaki|hoisin|oyster sauce|tahini|pesto|salsa|marinara|tomato sauce|bbq sauce|wing sauce/)?"Sauces & Vinegars":n.includes("pasta")||n.includes("grain")||e.match(/pasta|macaroni|spaghetti|penne|fusilli|linguine|rigatoni|orzo|ramen|noodle|rice(?!.*vinegar)|couscous|quinoa|barley|farro|lentil|chickpea|bean(?!.*green)|oat|cereal|granola|flour|cornmeal|polenta|bulgur|millet/)?"Dry Goods & Pasta":n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato(?!.*sauce|.*paste|.*puree)|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper(?!corn)|avocado|potato|sweet potato|zucchini|corn(?!starch|meal)|pea(?:s|$)|green bean|asparagus|beet|kale|arugula|cilantro|parsley|dill|mint|basil|lemon|lime|orange|grape(?!.*seed)|berr|strawberr|blueberr|raspberr|mango|peach|pear|plum|melon|pineapple|ginger|scallion|leek|radish|eggplant|artichoke/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod(?:\s|$)|tuna|fish|steak|pork|shrimp|sausage|bacon|ham(?:\s|$)|ground meat|meatball|crab|lobster|clam|mussel|anchov|tofu|tempeh|seitan/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter(?!.*nut)|cheese|milk(?!.*coconut)|cream(?!.*of)|yogurt|ghee|sour cream|whipping|half.and.half|cottage|ricotta|mozzarella|parmesan|cheddar|feta|brie|gouda|cream cheese/)?"Dairy":n.includes("baking")||n.includes("spice")||e.match(/baking soda|baking powder|yeast|vanilla|cocoa powder|cornstarch|sugar|powdered sugar|brown sugar|maple syrup|honey|molasses|cinnamon|cumin|turmeric|paprika|oregano|thyme|rosemary|cayenne|chili powder|nutmeg|clove|allspice|cardamom|saffron|curry powder|garam masala|bay lea|peppercorn|seasoning|spice/)?"Baking & Spices":n.includes("condiment")||n.includes("pickle")||e.match(/ketchup|mustard|mayo|mayonnaise|relish|pickle|olive|caper|jam|jelly|preserves|hummus|guacamole|chutney|horseradish|ranch|dressing/)?"Condiments & Pickled":n.includes("canned")||e.match(/canned|tomato paste|tomato puree|diced tomato|crushed tomato|coconut milk|broth|stock|soup(?:\s|$)|condensed/)?"Canned Goods":n.includes("snack")||e.match(/chip|cracker|cookie|pretzel|popcorn|chocolate|candy|gumm|trail mix|granola bar|protein bar|nut(?:s|$)|almond(?:s|$)|cashew|walnut|pistachio|peanut(?!.*butter)|dried fruit|fruit snack|brownie/)?"Snacks":n.includes("beverage")||n.includes("drink")||e.match(/juice|coffee|tea(?:\s|$)|water(?:\s|$)|soda|seltzer|sparkling|kombucha|lemonade|smoothie|wine(?:\s|$)|beer(?:\s|$)/)?"Beverages":n.includes("bread")||n.includes("bakery")||e.match(/bread|tortilla|pita|bagel|naan|flatbread|bun(?:\s|$)|roll(?:\s|$)|croissant|muffin|wrap(?:\s|$)/)?"Grains":n.includes("frozen")||t.location==="freezer"?"Frozen":"General"}function Nb(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let dl=null;function b(t,e=2500){const n=d("notif");n&&(n.textContent=t,n.style.display="block",n.style.animation="none",n.offsetWidth,n.style.animation=`toastSpring ${e/1e3}s ease forwards`,dl&&clearTimeout(dl),dl=setTimeout(()=>n.style.display="none",e))}function We(t){var e;(e=d("ov-"+t))==null||e.classList.add("active")}function ue(t){var e;(e=d("ov-"+t))==null||e.classList.remove("active")}function xo(t,e){const n=d(t);n&&n.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}const ul=["chopped","finely chopped","diced","sliced","minced","grated","shredded","crushed","mashed","julienned","cubed","halved","quartered","torn","peeled","deveined","deboned","trimmed","drained","rinsed","sifted","seared","blanched","toasted","roasted","grilled","fried","baked","steamed","boiled","melted","softened","dissolved","beaten","whipped","whisked","divided","separated","combined","mixed","tossed","coated","marinated","soaked","chilled","frozen","thawed","warmed","room temperature","at room temperature","for serving","for garnish","for garnishing","for topping","for drizzling","for decoration","for dusting","for dipping","to taste","to serve","as needed","as required","as desired","optional","if desired","if needed","if using","fresh","dried","ground","whole","packed","loosely packed","tightly packed","lightly","roughly","coarsely","finely","thinly","thickly","into pieces","into strips","into cubes","plus more","plus extra","or more","or less","about","approximately","heaping","scant","level","generous","garnish","topping","finishing","reserved"];function Nm(t){if(!t||typeof t!="string")return!1;const e=t.trim();if(e.length<3||/^[\d\s.\/½¼¾⅓⅔]+$/.test(e)||e.length>100)return!1;const n=e.toLowerCase();if(ul.includes(n))return!1;const i=new Set(["and","or","the","a","an","of","with","in","on","for","to","into","per"]),s=n.split(/\s+/);return!(s.every(r=>i.has(r)||ul.includes(r)||ul.some(a=>a===r))&&s.length>0)}function xa(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Mb={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger","kale","zucchini","corn","berry","grape","orange","melon","pear","mango","peach"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","sausage","ground","tilapia","crab","lobster","scallop"],Bakery:["bread","bagel","muffin","croissant","tortilla","pita","naan","roll","bun","baguette","flatbread","english muffin","biscuit"],Deli:["deli","ham","salami","prosciutto","roast beef","sliced turkey","cold cut","hummus","prepared"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir","sour cream","cottage cheese","half and half","whipping cream"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret","pot pie","burrito"],"Canned Goods":["canned","can of","diced tomato","tomato paste","tomato sauce","bean","lentil","chickpea","stock","broth","soup","tuna can","sardine"],"Condiments & Sauces":["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","worcestershire","bbq sauce","salsa","ranch","dressing","vinegar","relish","sriracha","teriyaki","pesto"],Baking:["flour","sugar","baking soda","baking powder","vanilla","yeast","cocoa","chocolate chip","corn starch","powdered sugar","brown sugar","molasses","food coloring"],Pantry:["rice","pasta","oil","spice","salt","honey","oat","cereal","granola","peanut butter","jam","jelly","syrup","olive oil"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed","popcorn","pretzel","energy drink","sparkling"],"Paper & Cleaning":["paper towel","toilet paper","napkin","dish soap","detergent","sponge","trash bag","foil","plastic wrap","wipe","bleach","cleaner"],Baby:["diaper","formula","baby food","baby wipe","pacifier","bottle nipple"],Pet:["dog food","cat food","pet treat","litter","pet food"],"Health & Beauty":["shampoo","conditioner","body wash","lotion","toothpaste","toothbrush","deodorant","razor","vitamin","medicine","band-aid","sunscreen"]},Ob={Produce:"🥬","Meat & Fish":"🥩",Bakery:"🍞",Deli:"🥪","Dairy & Eggs":"🥛",Frozen:"🧊","Canned Goods":"🥫","Condiments & Sauces":"🫙",Baking:"🧁",Pantry:"🫘","Snacks & Drinks":"🥤","Paper & Cleaning":"🧻",Baby:"👶",Pet:"🐾","Health & Beauty":"💊",Other:"📦"};function Vb(t){if(!t)return null;const e=t.toLowerCase();return/cleaning|household|laundry|detergent|disinfectant/.test(e)?"cleaning":/personal care|hygiene|cosmetic|vitamin|supplement|medicine|pharmaceutical|beauty|shampoo|conditioner|lotion|body wash|soap|deodorant|toothpaste|toothbrush|moisturizer|sunscreen|face wash|cleanser|hair|skin care/.test(e)?"personal":/frozen/.test(e)?"frozen":/\bmeat|poultry|chicken|beef|pork|fish|seafood|deli|sausage|bacon|ham\b/.test(e)?"meat":/dairy|milk|cheese|yogurt|yoghurt|butter|cream|egg|curd|paneer/.test(e)?"dairy":/vegetable|produce|fresh fruit|salad|fresh herb/.test(e)?"produce":/olive|pickle|caper|condiment|sauce|dressing|vinegar|oil|ketchup|mustard|mayo|relish|spice|seasoning|herb|pepper|salt|cumin|oregano|thyme|jam|jelly|preserve|marmalade|honey|syrup|hummus|tahini|pesto|salsa/.test(e)?"condiments":/bread|bakery|pastry|baguette|croissant|muffin|bagel|tortilla|naan|pita|flatbread/.test(e)?"bakery":/cereal|grain|pasta|rice|flour|oat|noodle|couscous|quinoa|barley|bulgur/.test(e)?"grains":/canned|preserved|tinned|bean|legume|lentil|chickpea|broth|stock/.test(e)?"canned":/snack|chip|crisp|popcorn|nut|beverage|drink|soda|juice|water|coffee|tea|chocolate|candy|sweet|confection|dessert|ice cream|cookie|biscuit|cake|energy drink/.test(e)?"snacks":null}const Fb=[{category:null,keywords:["chewing gum","gum"],title:"Gum"},{category:null,keywords:["eye drop","eye relief","visine","contact"],title:"Eye Drops"},{category:null,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:null,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["chip","crisp","pringles"],title:"Chips"},{category:/snack/i,keywords:["cookie","biscuit"],title:"Cookies"},{category:/snack/i,keywords:["cracker"],title:"Crackers"},{category:/snack/i,keywords:["popcorn"],title:"Popcorn"},{category:/snack/i,keywords:["pretzel"],title:"Pretzels"},{category:/snack/i,keywords:["granola bar","energy bar","protein bar"],title:"Energy Bar"},{category:/snack/i,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:/snack/i,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["candy","gummy"],title:"Candy"},{category:/snack/i,keywords:["nut","almond","cashew","peanut"],title:"Nuts"},{category:/beverage/i,keywords:["water"],title:"Water"},{category:/beverage/i,keywords:["juice"],title:"Juice"},{category:/beverage/i,keywords:["soda","cola","pepsi","coke"],title:"Soda"},{category:/beverage/i,keywords:["coffee"],title:"Coffee"},{category:/beverage/i,keywords:["tea"],title:"Tea"},{category:/beverage/i,keywords:["energy drink","red bull","monster"],title:"Energy Drink"},{category:/dairy/i,keywords:["cream cheese"],title:"Cream Cheese"},{category:/dairy/i,keywords:["milk"],title:"Milk"},{category:/dairy/i,keywords:["yogurt","yoghurt"],title:"Yogurt"},{category:/dairy/i,keywords:["cheese"],title:"Cheese"},{category:/dairy/i,keywords:["butter"],title:"Butter"},{category:/personal care/i,keywords:["shampoo and conditioner","shampoo & conditioner","2-in-1","2 in 1"],title:"Shampoo & Conditioner"},{category:/personal care/i,keywords:["conditioner"],title:"Conditioner"},{category:/personal care/i,keywords:["shampoo"],title:"Shampoo"},{category:/personal care/i,keywords:["body lotion","lotion","moisturizer"],title:"Body Lotion"},{category:/personal care/i,keywords:["body wash","shower gel"],title:"Body Wash"},{category:/personal care/i,keywords:["deodorant","antiperspirant"],title:"Deodorant"},{category:/personal care/i,keywords:["toothpaste"],title:"Toothpaste"},{category:/personal care/i,keywords:["toothbrush"],title:"Toothbrush"},{category:/personal care/i,keywords:["sunscreen","spf"],title:"Sunscreen"},{category:/personal care/i,keywords:["face wash","cleanser"],title:"Face Wash"},{category:/personal care/i,keywords:["vitamin","supplement","capsule","tablet"],title:"Vitamins"},{category:/personal care/i,keywords:["pain relief","tylenol","advil","ibuprofen"],title:"Pain Relief"},{category:/personal care/i,keywords:["band-aid","bandage"],title:"Bandages"},{category:/clean/i,keywords:["detergent","laundry"],title:"Laundry Detergent"},{category:/clean/i,keywords:["dish soap","dishwasher"],title:"Dish Soap"},{category:/clean/i,keywords:["bleach"],title:"Bleach"},{category:/clean/i,keywords:["spray","cleaner","windex"],title:"Cleaning Spray"},{category:/frozen/i,keywords:["pizza"],title:"Frozen Pizza"},{category:/frozen/i,keywords:["ice cream","gelato"],title:"Ice Cream"},{category:/frozen/i,keywords:["fries","potato"],title:"Frozen Fries"},{category:/condiment/i,keywords:["ketchup"],title:"Ketchup"},{category:/condiment/i,keywords:["mustard"],title:"Mustard"},{category:/condiment/i,keywords:["mayo","mayonnaise"],title:"Mayonnaise"},{category:/condiment/i,keywords:["hot sauce","sriracha","tabasco"],title:"Hot Sauce"},{category:/condiment/i,keywords:["soy sauce"],title:"Soy Sauce"},{category:/condiment/i,keywords:["olive oil","vegetable oil","cooking oil"],title:"Cooking Oil"},{category:/condiment/i,keywords:["vinegar"],title:"Vinegar"},{category:/bread/i,keywords:["bread"],title:"Bread"},{category:/bread/i,keywords:["bagel"],title:"Bagels"},{category:/bread/i,keywords:["tortilla","wrap"],title:"Tortillas"},{category:/meat/i,keywords:["chicken"],title:"Chicken"},{category:/meat/i,keywords:["beef","ground beef"],title:"Beef"},{category:/meat/i,keywords:["pork","bacon"],title:"Pork"},{category:/meat/i,keywords:["turkey"],title:"Turkey"},{category:/meat/i,keywords:["salmon","tuna","fish"],title:"Fish"},{category:/pet/i,keywords:["dog food","dog treat"],title:"Dog Food"},{category:/pet/i,keywords:["cat food","cat treat"],title:"Cat Food"}];function Ub(t,e){const n=(t||"").toLowerCase(),i=(e||"").toLowerCase();for(const s of Fb)if(!(s.category!==null&&!s.category.test(i))&&s.keywords.some(o=>n.includes(o)))return s.title;return null}const Ep=new Set(["general","food","grocery","personal care","pet food","household","other","generic foods","beverages",""]),Bb=/\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi,jb=new Set(["for","with","and","the","a","an","in","of","by","from"]),Hb=["zero sugar","diet","zero","light","lite","decaf","caffeine free","organic","original","classic","extra","plus","pro","max","mini"];function zb(t){if(!t)return{title:"",subtitle:"",brand:""};const e=(t.name||"").trim(),n=(t.brand||"").trim(),i=(t.description||"").trim(),s=(t.category||"").trim(),o=Wb(e,n,i,s),r=qb(e,n);return{title:o||e,subtitle:r,brand:n}}function qb(t,e){if(!t)return"";let n=t;if(e){const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+i+"\\s*","i"),"").trim();const s={mountain:"mtn",mount:"mt",doctor:"dr",mister:"mr",saint:"st",international:"intl",company:"co"},a=e.toLowerCase().split(/\s+/).map(l=>s[l]||l).join(" ");if(a!==e.toLowerCase()){const l=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(l+"\\s*","i"),"").trim()}}return n=n.replace(/\b(\w+)\s+\1\b/gi,"$1"),n=n.replace(/\s{2,}/g," ").trim(),n||t}function Wb(t,e,n,i){const s=Ub(t,i);if(s)return s;if(n&&n.length>=3&&n.length<=40&&!Ep.has(n.toLowerCase()))return Z(n);if(i&&!Ep.has(i.toLowerCase())){const o=i.replace(/-/g," ");if(o.length<=30)return Z(o)}return Gb(t,e)}function Gb(t,e){if(!t)return"";let n=t;if(e){const f=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+f+"\\s*","i"),"")}n=n.split(/\s*[—–-]\s*/)[0].trim(),n=n.replace(Bb,"").trim(),n=n.replace(/\s*\([^)]*\)\s*/g," ").replace(/[,|]+\s*$/,"").trim();const i=n.toLowerCase(),s=Hb.filter(f=>i.includes(f)),o=n.split(/\s+/).filter(f=>f.length>=2&&!jb.has(f.toLowerCase())&&!/^\d+$/.test(f));if(o.length===0)return Z(t.split(/\s+/).slice(0,2).join(" "));if(o.length<=3)return Z(o.join(" "));const r=o.slice(-2),a=o.slice(-3);let h=(r.join("").length<8?a:r).join(" ");for(const f of s)h.toLowerCase().includes(f)||(h+=" "+f);return Z(h)}function Kb(t){const e=t.toLowerCase();for(const[n,i]of Object.entries(Mb))if(i.some(s=>e.includes(s)))return n;return"Other"}const Qb={ShopRite:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],"Whole Foods":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Condiments & Sauces","Baking","Frozen","Snacks & Drinks","Health & Beauty","Paper & Cleaning","Other"],"Trader Joe's":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Canned Goods","Condiments & Sauces","Baking","Snacks & Drinks","Other"],Walmart:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Condiments & Sauces","Baking","Frozen","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Target:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Canned Goods","Condiments & Sauces","Baking","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Costco:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Baking","Frozen","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],Kroger:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Safeway:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],Publix:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Aldi:["Produce","Bakery","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Pantry","Baking","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],"Stop & Shop":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Wegmans:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],"Amazon Fresh":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Health & Beauty","Other"]};function Jb(t){return t&&Qb[t]||null}const Yb=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),Xb=new Set(["Piece","Unit","Pack","Box","Bag","Bar","Pound","Oz","Clove"]);function Zb(t){return t?Yb.has(t)?1:(Xb.has(t),2):2}function Mm(t){return t.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i,"").trim().split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i).map(i=>i.trim()).filter(i=>i.length>0).map(i=>{let s=i,o=1;const r=i.match(/^(\d+)\s+(.+)/),a=i.match(/^(.+?)\s*[x×]\s*(\d+)$/i);return a?(s=a[1].trim(),o=parseInt(a[2],10)||1):r&&(s=r[2].trim(),o=parseInt(r[1],10)||1),{name:s,qty:o}})}const e_=()=>{};var Ap={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},t_=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],r=t[n++],a=t[n++],l=((s&7)<<18|(o&63)<<12|(r&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|r&63)}}return e.join("")},Vm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],r=s+1<t.length,a=r?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=o>>2,g=(o&3)<<4|a>>4;let w=(a&15)<<2|h>>6,k=h&63;l||(k=64,r||(w=64)),i.push(n[f],n[g],n[w],n[k])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Om(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):t_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||h==null||g==null)throw new n_;const w=o<<2|a>>4;if(i.push(w),h!==64){const k=a<<4&240|h>>2;if(i.push(k),g!==64){const E=h<<6&192|g;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i_=function(t){const e=Om(t);return Vm.encodeByteArray(e,!0)},Ra=function(t){return i_(t).replace(/\./g,"")},Fm=function(t){try{return Vm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function s_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const o_=()=>s_().__FIREBASE_DEFAULTS__,r_=()=>{if(typeof process>"u"||typeof Ap>"u")return;const t=Ap.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},a_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fm(t[1]);return e&&JSON.parse(e)},ac=()=>{try{return e_()||o_()||r_()||a_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Um=t=>{var e,n;return(n=(e=ac())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Bm=t=>{const e=Um(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},jm=()=>{var t;return(t=ac())==null?void 0:t.config},Hm=t=>{var e;return(e=ac())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Xn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Md(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function zm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ra(JSON.stringify(n)),Ra(JSON.stringify(r)),""].join(".")}const fo={};function l_(){const t={prod:[],emulator:[]};for(const e of Object.keys(fo))fo[e]?t.emulator.push(e):t.prod.push(e);return t}function d_(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let xp=!1;function Od(t,e){if(typeof window>"u"||typeof document>"u"||!Xn(window.location.host)||fo[t]===e||fo[t]||xp)return;fo[t]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",o=l_().prod.length>0;function r(){const w=document.getElementById(i);w&&w.remove()}function a(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{xp=!0,r()},w}function f(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=d_(i),k=n("text"),E=document.getElementById(k)||document.createElement("span"),P=n("learnmore"),$=document.getElementById(P)||document.createElement("a"),D=n("preprendIcon"),N=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const B=w.element;a(B),f($,P);const F=h();l(N,D),B.append(N,E,$,F),document.body.appendChild(B)}o?(E.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function h_(){var e;const t=(e=ac())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function p_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function f_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function m_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function g_(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y_(){return!h_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v_(){try{return typeof indexedDB=="object"}catch{return!1}}function w_(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="FirebaseError";class Ht extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=b_,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jo.prototype.create)}}class Jo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],r=o?__(o,i):"Error",a=`${this.serviceName}: ${r} (${s}).`;return new Ht(s,a,i)}}function __(t,e){return t.replace(k_,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const k_=/\{\$([^}]+)}/g;function T_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ti(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],r=e[s];if(Rp(o)&&Rp(r)){if(!Ti(o,r))return!1}else if(o!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Rp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function C_(t,e){const n=new S_(t,e);return n.subscribe.bind(n)}class S_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");I_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=hl),s.error===void 0&&(s.error=hl),s.complete===void 0&&(s.complete=hl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hl(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class jn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new c_;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(x_(e))try{this.getOrInitializeService({instanceIdentifier:di})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=di){return this.instances.has(e)}getOptions(e=di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&r.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:A_(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=di){return this.component?this.component.multipleInstances?e:di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function A_(t){return t===di?void 0:t}function x_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new E_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const $_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},P_=ie.INFO,D_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},L_=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=D_[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vd{constructor(e){this.name=e,this._logLevel=P_,this._logHandler=L_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const N_=(t,e)=>e.some(n=>t instanceof n);let $p,Pp;function M_(){return $p||($p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O_(){return Pp||(Pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qm=new WeakMap,Fl=new WeakMap,Wm=new WeakMap,pl=new WeakMap,Fd=new WeakMap;function V_(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n(Dn(t.result)),s()},r=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&qm.set(n,t)}).catch(()=>{}),Fd.set(e,t),e}function F_(t){if(Fl.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),s()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});Fl.set(t,e)}let Ul={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function U_(t){Ul=t(Ul)}function B_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(fl(this),e,...n);return Wm.set(i,e.sort?e.sort():[e]),Dn(i)}:O_().includes(t)?function(...e){return t.apply(fl(this),e),Dn(qm.get(this))}:function(...e){return Dn(t.apply(fl(this),e))}}function j_(t){return typeof t=="function"?B_(t):(t instanceof IDBTransaction&&F_(t),N_(t,M_())?new Proxy(t,Ul):t)}function Dn(t){if(t instanceof IDBRequest)return V_(t);if(pl.has(t))return pl.get(t);const e=j_(t);return e!==t&&(pl.set(t,e),Fd.set(e,t)),e}const fl=t=>Fd.get(t);function H_(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const r=indexedDB.open(t,e),a=Dn(r);return i&&r.addEventListener("upgradeneeded",l=>{i(Dn(r.result),l.oldVersion,l.newVersion,Dn(r.transaction),l)}),n&&r.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const z_=["get","getKey","getAll","getAllKeys","count"],q_=["put","add","delete","clear"],ml=new Map;function Dp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ml.get(e))return ml.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=q_.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||z_.includes(n)))return;const o=async function(r,...a){const l=this.transaction(r,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&l.done]))[0]};return ml.set(e,o),o}U_(t=>({...t,get:(e,n,i)=>Dp(e,n)||t.get(e,n,i),has:(e,n)=>!!Dp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function G_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bl="@firebase/app",Lp="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Vd("@firebase/app"),K_="@firebase/app-compat",Q_="@firebase/analytics-compat",J_="@firebase/analytics",Y_="@firebase/app-check-compat",X_="@firebase/app-check",Z_="@firebase/auth",ek="@firebase/auth-compat",tk="@firebase/database",nk="@firebase/data-connect",ik="@firebase/database-compat",sk="@firebase/functions",ok="@firebase/functions-compat",rk="@firebase/installations",ak="@firebase/installations-compat",ck="@firebase/messaging",lk="@firebase/messaging-compat",dk="@firebase/performance",uk="@firebase/performance-compat",hk="@firebase/remote-config",pk="@firebase/remote-config-compat",fk="@firebase/storage",mk="@firebase/storage-compat",gk="@firebase/firestore",yk="@firebase/ai",vk="@firebase/firestore-compat",wk="firebase",bk="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="[DEFAULT]",_k={[Bl]:"fire-core",[K_]:"fire-core-compat",[J_]:"fire-analytics",[Q_]:"fire-analytics-compat",[X_]:"fire-app-check",[Y_]:"fire-app-check-compat",[Z_]:"fire-auth",[ek]:"fire-auth-compat",[tk]:"fire-rtdb",[nk]:"fire-data-connect",[ik]:"fire-rtdb-compat",[sk]:"fire-fn",[ok]:"fire-fn-compat",[rk]:"fire-iid",[ak]:"fire-iid-compat",[ck]:"fire-fcm",[lk]:"fire-fcm-compat",[dk]:"fire-perf",[uk]:"fire-perf-compat",[hk]:"fire-rc",[pk]:"fire-rc-compat",[fk]:"fire-gcs",[mk]:"fire-gcs-compat",[gk]:"fire-fst",[vk]:"fire-fst-compat",[yk]:"fire-vertex","fire-js":"fire-js",[wk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map,kk=new Map,Hl=new Map;function Np(t,e){try{t.container.addComponent(e)}catch(n){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ci(t){const e=t.name;if(Hl.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;Hl.set(e,t);for(const n of $a.values())Np(n,t);for(const n of kk.values())Np(n,t);return!0}function cc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ze(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new Jo("app","Firebase",Tk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=bk;function Gm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:jl,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Ln.create("bad-app-name",{appName:String(s)});if(n||(n=jm()),!n)throw Ln.create("no-options");const o=$a.get(s);if(o){if(Ti(n,o.options)&&Ti(i,o.config))return o;throw Ln.create("duplicate-app",{appName:s})}const r=new R_(s);for(const l of Hl.values())r.addComponent(l);const a=new Ck(n,i,r);return $a.set(s,a),a}function Ud(t=jl){const e=$a.get(t);if(!e&&t===jl&&jm())return Gm();if(!e)throw Ln.create("no-app",{appName:t});return e}function Lt(t,e,n){let i=_k[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const r=[`Unable to register library "${i}" with version "${e}":`];s&&r.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&r.push("and"),o&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(r.join(" "));return}Ci(new jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Sk="firebase-heartbeat-database",Ik=1,Ro="firebase-heartbeat-store";let gl=null;function Km(){return gl||(gl=H_(Sk,Ik,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),gl}async function Ek(t){try{const n=(await Km()).transaction(Ro),i=await n.objectStore(Ro).get(Qm(t));return await n.done,i}catch(e){if(e instanceof Ht)nn.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nn.warn(n.message)}}}async function Mp(t,e){try{const i=(await Km()).transaction(Ro,"readwrite");await i.objectStore(Ro).put(e,Qm(t)),await i.done}catch(n){if(n instanceof Ht)nn.warn(n.message);else{const i=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nn.warn(i.message)}}}function Qm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ak=1024,xk=30;class Rk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pk(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Op();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(r=>r.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>xk){const r=Dk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){nn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Op(),{heartbeatsToSend:i,unsentEntries:s}=$k(this._heartbeatsCache.heartbeats),o=Ra(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return nn.warn(n),""}}}function Op(){return new Date().toISOString().substring(0,10)}function $k(t,e=Ak){const n=[];let i=t.slice();for(const s of t){const o=n.find(r=>r.agent===s.agent);if(o){if(o.dates.push(s.date),Vp(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Pk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return v_()?w_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ek(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Mp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Mp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vp(t){return Ra(JSON.stringify({version:2,heartbeats:t})).length}function Dk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){Ci(new jn("platform-logger",e=>new W_(e),"PRIVATE")),Ci(new jn("heartbeat",e=>new Rk(e),"PRIVATE")),Lt(Bl,Lp,t),Lt(Bl,Lp,"esm2020"),Lt("fire-js","")}Lk("");var Nk="firebase",Mk="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(Nk,Mk,"app");function Jm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ok=Jm,Ym=new Jo("auth","Firebase",Jm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Vd("@firebase/auth");function Vk(t,...e){Pa.logLevel<=ie.WARN&&Pa.warn(`Auth (${Pi}): ${t}`,...e)}function ta(t,...e){Pa.logLevel<=ie.ERROR&&Pa.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw jd(t,...e)}function vt(t,...e){return jd(t,...e)}function Bd(t,e,n){const i={...Ok(),[e]:n};return new Jo("auth","Firebase",i).create(e,{appName:t.name})}function Nt(t){return Bd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xm(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ht(t,"argument-error"),Bd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Ym.create(t,...e)}function G(t,e,...n){if(!t)throw jd(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ta(e),new Error(e)}function sn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Fk(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fk()||f_()||"connection"in navigator)?navigator.onLine:!0}function Bk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=u_()||m_()}get(){return Uk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],zk=new Xo(3e4,6e4);function Zn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ln(t,e,n,i,s={}){return eg(t,s,async()=>{let o={},r={};i&&(e==="GET"?r=i:o={body:JSON.stringify(i)});const a=Yo({key:t.config.apiKey,...r}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...o};return p_()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Xn(t.emulatorConfig.host)&&(h.credentials="include"),Zm.fetch()(await tg(t,t.config.apiHost,n,a),h)})}async function eg(t,e,n){t._canInitEmulator=!1;const i={...jk,...e};try{const s=new Wk(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw Vr(t,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const a=o.ok?r.errorMessage:r.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vr(t,"credential-already-in-use",r);if(l==="EMAIL_EXISTS")throw Vr(t,"email-already-in-use",r);if(l==="USER_DISABLED")throw Vr(t,"user-disabled",r);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bd(t,f,h);ht(t,f)}}catch(s){if(s instanceof Ht)throw s;ht(t,"network-request-failed",{message:String(s)})}}async function Zo(t,e,n,i,s={}){const o=await ln(t,e,n,i,s);return"mfaPendingCredential"in o&&ht(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function tg(t,e,n,i){const s=`${e}${n}?${i}`,o=t,r=o.config.emulator?Hd(t.config,s):`${t.config.apiScheme}://${s}`;return Hk.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(r).toString():r}function qk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(vt(this.auth,"network-request-failed")),zk.get())})}}function Vr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=vt(t,e,i);return s.customData._tokenResponse=n,s}function Up(t){return t!==void 0&&t.enterprise!==void 0}class Gk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Kk(t,e){return ln(t,"GET","/v2/recaptchaConfig",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){return ln(t,"POST","/v1/accounts:delete",e)}async function Da(t,e){return ln(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jk(t,e=!1){const n=Ve(t),i=await n.getIdToken(e),s=zd(i);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,r=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:mo(yl(s.auth_time)),issuedAtTime:mo(yl(s.iat)),expirationTime:mo(yl(s.exp)),signInProvider:r||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function yl(t){return Number(t)*1e3}function zd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ta("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fm(n);return s?JSON.parse(s):(ta("Failed to decode base64 JWT payload"),null)}catch(s){return ta("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bp(t){const e=zd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ht&&Yk(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Yk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t){var g;const e=t.auth,n=await t.getIdToken(),i=await ls(t,Da(e,{idToken:n}));G(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(g=s.providerUserInfo)!=null&&g.length?ng(s.providerUserInfo):[],r=eT(t.providerData,o),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(r!=null&&r.length),h=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ql(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Zk(t){const e=Ve(t);await La(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eT(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ng(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(t,e){const n=await eg(t,{},async()=>{const i=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,r=await tg(t,s,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Xn(t.emulatorConfig.host)&&(l.credentials="include"),Zm.fetch()(r,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nT(t,e){return ln(t,"POST","/v2/accounts:revokeToken",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Bp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await tT(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,r=new Gi;return i&&(G(typeof i=="string","internal-error",{appName:e}),r.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),r.accessToken=s),o&&(G(typeof o=="number","internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gt{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ql(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ls(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Jk(this,e)}reload(){return Zk(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await La(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(Nt(this.auth));const e=await this.getIdToken();return await ls(this,Qk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,o=n.phoneNumber??void 0,r=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:E,stsTokenManager:P}=n;G(g&&P,e,"internal-error");const $=Gi.fromJSON(this.name,P);G(typeof g=="string",e,"internal-error"),vn(i,e.name),vn(s,e.name),G(typeof w=="boolean",e,"internal-error"),G(typeof k=="boolean",e,"internal-error"),vn(o,e.name),vn(r,e.name),vn(a,e.name),vn(l,e.name),vn(h,e.name),vn(f,e.name);const D=new gt({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:k,photoURL:r,phoneNumber:o,tenantId:a,stsTokenManager:$,createdAt:h,lastLoginAt:f});return E&&Array.isArray(E)&&(D.providerData=E.map(N=>({...N}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,n,i=!1){const s=new Gi;s.updateFromServerResponse(n);const o=new gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await La(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];G(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?ng(s.providerUserInfo):[],r=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),a=new Gi;a.updateFromIdToken(i);const l=new gt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:r}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ql(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new Map;function Zt(t){sn(t instanceof Function,"Expected a class definition");let e=jp.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ig.type="NONE";const Hp=ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e,n){return`firebase:${t}:${e}:${n}`}class Ki{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=na(this.userKey,s.apiKey,o),this.fullPersistenceKey=na("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Da(this.auth,{idToken:e}).catch(()=>{});return n?gt._fromGetAccountInfoResponse(this.auth,n,e):null}return gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ki(Zt(Hp),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=s[0]||Zt(Hp);const r=na(i,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(r);if(f){let g;if(typeof f=="string"){const w=await Da(e,{idToken:f}).catch(()=>{});if(!w)break;g=await gt._fromGetAccountInfoResponse(e,w,f)}else g=gt._fromJSON(e,f);h!==o&&(a=g),o=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Ki(o,e,i):(o=l[0],a&&await o._set(r,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(r)}catch{}})),new Ki(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lg(e))return"Blackberry";if(dg(e))return"Webos";if(og(e))return"Safari";if((e.includes("chrome/")||rg(e))&&!e.includes("edge/"))return"Chrome";if(cg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sg(t=Ge()){return/firefox\//i.test(t)}function og(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rg(t=Ge()){return/crios\//i.test(t)}function ag(t=Ge()){return/iemobile/i.test(t)}function cg(t=Ge()){return/android/i.test(t)}function lg(t=Ge()){return/blackberry/i.test(t)}function dg(t=Ge()){return/webos/i.test(t)}function qd(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iT(t=Ge()){var e;return qd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function sT(){return g_()&&document.documentMode===10}function ug(t=Ge()){return qd(t)||cg(t)||dg(t)||lg(t)||/windows phone/i.test(t)||ag(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t,e=[]){let n;switch(t){case"Browser":n=zp(Ge());break;case"Worker":n=`${zp(Ge())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${i}`}/**
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
 */class oT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((r,a)=>{try{const l=e(o);r(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function rT(t,e={}){return ln(t,"GET","/v2/passwordPolicy",Zn(t,e))}/**
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
 */const aT=6;class cT{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??aT,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qp(this),this.idTokenSubscription=new qp(this),this.beforeStateQueue=new oT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ym,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Da(this,{idToken:e}),i=await gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Ze(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(o=this.redirectUser)==null?void 0:o._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await La(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(Nt(this));const n=e?Ve(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(Nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(Nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rT(this),n=new cT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await nT(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let r=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{r||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{r=!0,l()}}else{const l=e.addObserver(n);return()=>{r=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Vk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zt(t){return Ve(t)}class qp{constructor(e){this.auth=e,this.observer=null,this.addObserver=C_(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dT(t){lc=t}function pg(t){return lc.loadJS(t)}function uT(){return lc.recaptchaEnterpriseScript}function hT(){return lc.gapiScript}function pT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class fT{constructor(){this.enterprise=new mT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class mT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gT="recaptcha-enterprise",fg="NO_RECAPTCHA";class yT{constructor(e){this.type=gT,this.auth=zt(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(r,a)=>{Kk(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new Gk(l);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,r(h.siteKey)}}).catch(l=>{a(l)})})}function s(o,r,a){const l=window.grecaptcha;Up(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(h=>{r(h)}).catch(()=>{r(fg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fT().execute("siteKey",{action:"verify"}):new Promise((o,r)=>{i(this.auth).then(a=>{if(!n&&Up(window.grecaptcha))s(a,o,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let l=uT();l.length!==0&&(l+=a),pg(l).then(()=>{s(a,o,r)}).catch(h=>{r(h)})}}).catch(a=>{r(a)})})}}async function Wp(t,e,n,i=!1,s=!1){const o=new yT(t);let r;if(s)r=fg;else try{r=await o.verify(n)}catch{r=await o.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wl(t,e,n,i,s){var o;if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Wp(t,e,n,n==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Wp(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(t,e){const n=cc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(Ti(o,e??{}))return s;ht(s,"already-initialized")}return n.initialize({options:e})}function wT(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function bT(t,e,n){const i=zt(t);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=mg(e),{host:r,port:a}=_T(e),l=a===null?"":`:${a}`,h={url:`${o}//${r}${l}/`},f=Object.freeze({host:r,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(Ti(h,i.config.emulator)&&Ti(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,Xn(r)?(Md(`${o}//${r}${l}`),Od("Auth",!0)):kT()}function mg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _T(t){const e=mg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:Gp(i.substr(o.length+1))}}else{const[o,r]=i.split(":");return{host:o,port:Gp(r)}}}function Gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function TT(t,e){return ln(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(t,e){return Zo(t,"POST","/v1/accounts:signInWithPassword",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}async function IT(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o extends Wd{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new $o(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wl(e,n,"signInWithPassword",CT);case"emailLink":return ST(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wl(e,i,"signUpPassword",TT);case"emailLink":return IT(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e){return Zo(t,"POST","/v1/accounts:signInWithIdp",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="http://localhost";class on extends Wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new on(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=n;if(!i||!s)return null;const r=new on(i,s);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Qi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:ET,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xT(t){const e=ro(ao(t)).link,n=e?ro(ao(e)).deep_link_id:null,i=ro(ao(t)).deep_link_id;return(i?ro(ao(i)).link:null)||i||n||e||t}class Gd{constructor(e){const n=ro(ao(e)),i=n.apiKey??null,s=n.oobCode??null,o=AT(n.mode??null);G(i&&s&&o,"argument-error"),this.apiKey=i,this.operation=o,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=xT(e);try{return new Gd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Gd.parseLink(n);return G(i,"argument-error"),$o._fromEmailAndCode(e,i.code,i.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class go extends Es{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return G("providerId"in n&&"signInMethod"in n,"argument-error"),on._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),on._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return go.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return go.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:r,providerId:a}=e;if(!i&&!s&&!n&&!o||!a)return null;try{return new go(a)._credential({idToken:n,accessToken:i,nonce:r,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Es{constructor(){super("facebook.com")}static credential(e){return on._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return on._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Yt.credential(n,i)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Es{constructor(){super("github.com")}static credential(e){return on._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Es{constructor(){super("twitter.com")}static credential(e,n){return on._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return En.credential(n,i)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e){return Zo(t,"POST","/v1/accounts:signUp",Zn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await gt._fromIdTokenResponse(e,i,s),r=Kp(i);return new Si({user:o,providerId:r,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Kp(i);return new Si({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Kp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Ht{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Na(e,n,i,s)}}function gg(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Na._fromErrorAndOperation(t,o,e,i):o})}async function $T(t,e,n=!1){const i=await ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e,n=!1){const{auth:i}=t;if(Ze(i.app))return Promise.reject(Nt(i));const s="reauthenticate";try{const o=await ls(t,gg(i,s,e,t),n);G(o.idToken,i,"internal-error");const r=zd(o.idToken);G(r,i,"internal-error");const{sub:a}=r;return G(t.uid===a,i,"user-mismatch"),Si._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ht(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(t,e,n=!1){if(Ze(t.app))return Promise.reject(Nt(t));const i="signIn",s=await gg(t,i,e),o=await Si._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}async function DT(t,e){return yg(zt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vg(t){const e=zt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function LT(t,e,n){if(Ze(t.app))return Promise.reject(Nt(t));const i=zt(t),r=await Wl(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",RT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vg(t),l}),a=await Si._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(a.user),a}function NT(t,e,n){return Ze(t.app)?Promise.reject(Nt(t)):DT(Ve(t),Is.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&vg(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e){return ln(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Ve(t),o={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},r=await ls(i,MT(i.auth,o));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function VT(t,e,n,i){return Ve(t).onIdTokenChanged(e,n,i)}function FT(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function UT(t,e,n,i){return Ve(t).onAuthStateChanged(e,n,i)}function BT(t){return Ve(t).signOut()}const Ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=1e3,HT=10;class bg extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((r,a,l)=>{this.notifyListeners(r,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const r=this.storage.getItem(i);!n&&this.localCache[i]===r||this.notifyListeners(i,r)},o=this.storage.getItem(i);sT()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HT):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},jT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bg.type="LOCAL";const zT=bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_g.type="SESSION";const kg=_g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new uc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,r=this.handlersMap[s];if(!(r!=null&&r.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(r).map(async h=>h(n.origin,o)),l=await qT(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,r;return new Promise((a,l)=>{const h=Kd("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);r={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(w.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function GT(t){Mt().location.href=t}/**
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
 */function Tg(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function KT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function JT(){return Tg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="firebaseLocalStorageDb",YT=1,Oa="firebaseLocalStorage",Sg="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hc(t,e){return t.transaction([Oa],e?"readwrite":"readonly").objectStore(Oa)}function XT(){const t=indexedDB.deleteDatabase(Cg);return new er(t).toPromise()}function Gl(){const t=indexedDB.open(Cg,YT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Oa,{keyPath:Sg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Oa)?e(i):(i.close(),await XT(),e(await Gl()))})})}async function Qp(t,e,n){const i=hc(t,!0).put({[Sg]:e,value:n});return new er(i).toPromise()}async function ZT(t,e){const n=hc(t,!1).get(e),i=await new er(n).toPromise();return i===void 0?null:i.value}function Jp(t,e){const n=hc(t,!0).delete(e);return new er(n).toPromise()}const e0=800,t0=3;class Ig{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>t0)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(JT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await KT(),!this.activeServiceWorker)return;this.sender=new WT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gl();return await Qp(e,Ma,"1"),await Jp(e,Ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>ZT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=hc(s,!1).getAll();return new er(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),e0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ig.type="LOCAL";const n0=Ig;new Xo(3e4,6e4);/**
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
 */function Qd(t,e){return e?Zt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Wd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i0(t){return yg(t.auth,new Jd(t),t.bypassAuthState)}function s0(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),PT(n,new Jd(t),t.bypassAuthState)}async function o0(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),$T(n,new Jd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:r,type:a}=e;if(r){this.reject(r);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i0;case"linkViaPopup":case"linkViaRedirect":return o0;case"reauthViaPopup":case"reauthViaRedirect":return s0;default:ht(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=new Xo(2e3,1e4);async function Ag(t,e,n){if(Ze(t.app))return Promise.reject(vt(t,"operation-not-supported-in-this-environment"));const i=zt(t);Xm(t,e,dc);const s=Qd(i,n);return new pi(i,"signInViaPopup",e,s).executeNotNull()}class pi extends Eg{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r0.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="pendingRedirect",ia=new Map;class c0 extends Eg{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const i=await l0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l0(t,e){const n=Rg(e),i=xg(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}async function d0(t,e){return xg(t)._set(Rg(e),"true")}function u0(t,e){ia.set(t._key(),e)}function xg(t){return Zt(t._redirectPersistence)}function Rg(t){return na(a0,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e,n){return h0(t,e,n)}async function h0(t,e,n){if(Ze(t.app))return Promise.reject(Nt(t));const i=zt(t);Xm(t,e,dc),await i._initializationPromise;const s=Qd(i,n);return await d0(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function p0(t,e){return await zt(t)._initializationPromise,Pg(t,e,!1)}async function Pg(t,e,n=!1){if(Ze(t.app))return Promise.reject(Nt(t));const i=zt(t),s=Qd(i,e),r=await new c0(i,s,n).execute();return r&&!n&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=600*1e3;class m0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Dg(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yp(e))}saveEventToCache(e){this.cachedEventUids.add(Yp(e)),this.lastProcessedEventTime=Date.now()}}function Yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y0(t,e={}){return ln(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w0=/^https?/;async function b0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await y0(t);for(const n of e)try{if(_0(n))return}catch{}ht(t,"unauthorized-domain")}function _0(t){const e=zl(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return r.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&r.hostname===i}if(!w0.test(n))return!1;if(v0.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const k0=new Xo(3e4,6e4);function Xp(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function T0(t){return new Promise((e,n)=>{var s,o,r;function i(){Xp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xp(),n(vt(t,"network-request-failed"))},timeout:k0.get()})}if((o=(s=Mt().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((r=Mt().gapi)!=null&&r.load)i();else{const a=pT("iframefcb");return Mt()[a]=()=>{gapi.load?i():n(vt(t,"network-request-failed"))},pg(`${hT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sa=null,e})}let sa=null;function C0(t){return sa=sa||T0(t),sa}/**
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
 */const S0=new Xo(5e3,15e3),I0="__/auth/iframe",E0="emulator/auth/iframe",A0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R0(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hd(e,E0):`https://${t.config.authDomain}/${I0}`,i={apiKey:e.apiKey,appName:t.name,v:Pi},s=x0.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Yo(i).slice(1)}`}async function $0(t){const e=await C0(t),n=Mt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:R0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A0,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const r=vt(t,"network-request-failed"),a=Mt().setTimeout(()=>{o(r)},S0.get());function l(){Mt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{o(r)})}))}/**
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
 */const P0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D0=500,L0=600,N0="_blank",M0="http://localhost";class Zp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O0(t,e,n,i=D0,s=L0){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...P0,width:i.toString(),height:s.toString(),top:o,left:r},h=Ge().toLowerCase();n&&(a=rg(h)?N0:n),sg(h)&&(e=e||M0,l.scrollbars="yes");const f=Object.entries(l).reduce((w,[k,E])=>`${w}${k}=${E},`,"");if(iT(h)&&a!=="_self")return V0(e||"",a),new Zp(null);const g=window.open(e||"",a,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new Zp(g)}function V0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const F0="__/auth/handler",U0="emulator/auth/handler",B0=encodeURIComponent("fac");async function ef(t,e,n,i,s,o){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const r={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Pi,eventId:s};if(e instanceof dc){e.setDefaultLanguage(t.languageCode),r.providerId=e.providerId||"",T_(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))r[f]=g}if(e instanceof Es){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(r.scopes=f.join(","))}t.tenantId&&(r.tid=t.tenantId);const a=r;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),h=l?`#${B0}=${encodeURIComponent(l)}`:"";return`${j0(t)}?${Yo(a).slice(1)}${h}`}function j0({config:t}){return t.emulator?Hd(t,U0):`https://${t.authDomain}/${F0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="webStorageSupport";class H0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kg,this._completeRedirectFn=Pg,this._overrideRedirectResult=u0}async _openPopup(e,n,i,s){var r;sn((r=this.eventManagers[e._key()])==null?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ef(e,n,i,zl(),s);return O0(e,o,Kd())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await ef(e,n,i,zl(),s);return GT(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(sn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await $0(e),i=new m0(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vl,{type:vl},s=>{var r;const o=(r=s==null?void 0:s[0])==null?void 0:r[vl];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=b0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ug()||og()||qd()}}const z0=H0;var tf="@firebase/auth",nf="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G0(t){Ci(new jn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:r,authDomain:a}=i.options;G(r&&!r.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:r,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hg(t)},h=new lT(i,s,o,l);return wT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ci(new jn("auth-internal",e=>{const n=zt(e.getProvider("auth").getImmediate());return(i=>new q0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(tf,nf,W0(t)),Lt(tf,nf,"esm2020")}/**
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
 */const K0=300,Q0=Hm("authIdTokenMaxAge")||K0;let sf=null;const J0=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Q0)return;const s=n==null?void 0:n.token;sf!==s&&(sf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Y0(t=Ud()){const e=cc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vT(t,{popupRedirectResolver:z0,persistence:[n0,zT,kg]}),i=Hm("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const r=J0(o.toString());FT(n,r,()=>r(n.currentUser)),VT(n,a=>r(a))}}const s=Um("auth");return s&&bT(n,`http://${s}`),n}function X0(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}dT({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=vt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",X0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G0("Browser");const Z0={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Yd=Gm(Z0),pt=Y0(Yd);window._firebaseAuth=pt;const of=new Yt,Va=new go("apple.com");Va.addScope("email");Va.addScope("name");let Xd=null;const oa=[];function eC(t){return oa.push(t),t(Xd),()=>{const e=oa.indexOf(t);e!==-1&&oa.splice(e,1)}}function tC(t){Xd=t,oa.forEach(e=>e(t))}UT(pt,t=>{tC(t||null)});p0(pt).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function nC(){try{return(await Ag(pt,of)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await $g(pt,of),null;throw t}}async function iC(){try{return(await Ag(pt,Va)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await $g(pt,Va),null;throw t}}async function sC(t,e){return(await NT(pt,t,e)).user}async function oC(t,e,n){const i=await LT(pt,t,e);return n&&await OT(i.user,{displayName:n}),i.user}async function rC(){await BT(pt)}async function Lg(){return pt.currentUser?pt.currentUser.getIdToken():null}function Q(){return Xd}async function tr(t,e,n){const i={"Content-Type":"application/json"},s=await Lg();s&&(i.Authorization=`Bearer ${s}`);const o=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:t,path:e,data:n})});if(!(o.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${o.status}) for ${t} ${e}`);return o.json()}async function se(t){try{return(await tr("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function M(t,e){return tr("set",t,e)}async function he(t){return tr("delete",t)}async function aC(t){return tr("admin-delete",t)}async function W(t){try{return(await tr("get",t)).doc||null}catch{return null}}function Ng(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Kl(t){var n;const e={name:t.displayName||((n=t.email)==null?void 0:n.split("@")[0])||"User",email:t.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await M(`users/${t.uid}`,e),e}async function Mg(t,e){var r;const n=Q(),i=t,s=Ng(),o={name:e||"My Kitchen",ownerUid:t,members:[{uid:t,name:(n==null?void 0:n.displayName)||((r=n==null?void 0:n.email)==null?void 0:r.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[t],inviteCode:s,createdAt:new Date().toISOString()};try{await M(`households/${i}`,o),await M(`household_codes/${s}`,{householdId:i})}catch(a){console.error(`[createHousehold] FAILED to write households/${i}:`,a)}return{hid:i,...o}}async function cC(t){const e=await W(`household_codes/${t.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function lC(t,e){if(!nr(e||{}).includes(t))return;const i=await W(`households/${t}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${t} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${t} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${t}`);try{await he(`households/${t}`),i.inviteCode&&await he(`household_codes/${i.inviteCode}`)}catch(o){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",o)}}async function Og(t,e){var a;const n=await cC(t);if(!n)return null;const i=await W(`households/${n}`);if(!i)return null;const s=i.members||[],o=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((a=e.email)==null?void 0:a.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),o.includes(e.uid)||o.push(e.uid),await M(`households/${n}`,{...i,members:s,memberUids:o,id:void 0}));const r=await W(`users/${e.uid}`);if(r){await lC(e.uid,r);const l={...r,householdIds:[n],needsHousehold:!1,onboardingDone:!0,id:void 0};r.householdId&&delete l.householdId,await M(`users/${e.uid}`,l)}return n}async function dC(t){const e=await W(`households/${t}`);if(!e)return null;if(e.inviteCode)try{await he(`household_codes/${e.inviteCode}`)}catch{}const n=Ng();return await M(`household_codes/${n}`,{householdId:t}),await M(`households/${t}`,{...e,inviteCode:n,id:void 0}),n}async function Vg(t,e){const n=await W(`households/${t}`);if(!n)return;const i=(n.members||[]).filter(o=>o.uid!==e),s=(n.memberUids||[]).filter(o=>o!==e);await M(`households/${t}`,{...n,members:i,memberUids:s,id:void 0});try{const o=await W(`users/${e}`);if(o){const r={...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};o.householdId&&delete r.householdId,await M(`users/${e}`,r)}}catch{}}async function uC(t,e){const n=await W(`households/${t}`);if(!n)throw new Error("Household not found");const i=(n.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===n.ownerUid?"member":s.role}));await M(`households/${t}`,{...n,ownerUid:e,members:i,id:void 0})}async function Fg(t,e){const n=await W(`households/${t}`);if(!n)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const o=await se(`households/${t}/${s}`);for(const r of o)await he(`households/${t}/${s}/${r.id}`)}catch{}if(n.inviteCode)try{await he(`household_codes/${n.inviteCode}`)}catch{}await he(`households/${t}`);try{const s=await W(`users/${e}`);if(s){const r=nr(s).filter(l=>l!==t),a={...s,householdIds:r,id:void 0};s.householdId&&delete a.householdId,await M(`users/${e}`,a)}}catch{}}async function Ug(t,e){try{const n=await W(`households/${t}`);return n?(n.memberUids||[]).includes(e):!1}catch{return!1}}async function rf(t,e){const n=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of n){const s=await se(`households/${t}/${i}`);for(const o of s){const r=o.id,a={...o};delete a.id,await M(`households/${e}/${i}/${r}`,a)}}}function nr(t){return t.householdId&&typeof t.householdId=="string"?[t.householdId]:t.householdIds||[]}async function hC(t,e){const n=nr(e);if(!n.length)return null;console.log(`[_validateHouseholdIds] Checking ${n.length} household IDs:`,n);const i=await Promise.all(n.map(async a=>{const l=await W(`households/${a}`);if(!l)return console.log(`[_validateHouseholdIds] household ${a} does NOT exist — will remove`),{hid:a,exists:!1,isMember:!1};const h=(l.memberUids||[]).includes(t)||(l.members||[]).some(f=>f.uid===t);return console.log(`[_validateHouseholdIds] household ${a} exists, isMember=${h}`),{hid:a,exists:!0,isMember:h}})),s=i.filter(a=>a.exists).map(a=>a.hid),o=i.filter(a=>a.exists&&a.isMember).map(a=>a.hid),r=i.filter(a=>!a.exists).map(a=>a.hid);if(r.length>0){console.log(`[_validateHouseholdIds] Removing ${r.length} stale IDs:`,r);const a=n.filter(l=>!r.includes(l));await M(`users/${t}`,{...e,householdIds:a,id:void 0})}if(o.length>0){const l=o.find(h=>h!==t)||o[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function pC(t){var h;const e=t.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const n=localStorage.getItem("ks-h");n&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${n}"`),localStorage.removeItem("ks-h"));const i=await W(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const f=await hC(e,i),g=nr(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${f}, ids=`,g),f?(n&&n!==f&&n!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${n} → ${f}`),await rf(n,f)),f):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),o=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${o}`);const r=((h=u.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Mg(e,o?r:"My Kitchen"),o&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await rf(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const a=await Kl(t);a.householdIds=[e],await M(`users/${e}`,a),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=fe("ks-hhs");if(l){const f=l.filter(g=>g!==s);f.includes(e)||f.push(e),localStorage.setItem("ks-hhs",JSON.stringify(f))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Hn(t,e){if(e){u.mp[t]=e;const n=u.mpCooked[t]||!1;await M(`households/${u.hid}/mealplan/${t}`,{date:t,meal:e,cooked:n})}else delete u.mp[t],delete u.mpCooked[t],await he(`households/${u.hid}/mealplan/${t}`)}async function fC(t){u.mpCooked[t]=!0;const e=u.mp[t];e&&await M(`households/${u.hid}/mealplan/${t}`,{date:t,meal:e,cooked:!0})}async function pc(){await M(`households/${u.hid}/settings/config`,u.cfg)}async function Zd(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||Ql(),loggedAt:new Date().toISOString()};u.cookLog.unshift(n),u.cookLog.length>200&&(u.cookLog=u.cookLog.slice(0,200)),await M(`households/${u.hid}/cooklog/${n.id}`,n)}async function mC(t){if(u.wasteLog.find(n=>n.name===t&&n.date===Ql()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:Ql(),loggedAt:new Date().toISOString()};u.wasteLog.unshift(e),u.wasteLog.length>100&&(u.wasteLog=u.wasteLog.slice(0,100)),await M(`households/${u.hid}/wastelog/${e.id}`,e)}async function gC(){try{try{const o=await W(`households/${u.hid}`);o&&o.inviteCode&&(await W(`household_codes/${o.inviteCode}`)||(await M(`household_codes/${o.inviteCode}`,{householdId:u.hid}),console.log(`[backfill] Created household_codes/${o.inviteCode} for household ${u.hid}`)))}catch(o){console.warn("[backfill] household_codes backfill skipped:",o.message)}const e=(await se(`households/${u.hid}/settings`)).find(o=>o.id==="config");if(e)u.cfg={...Ea,...e};else{const o=fe("ks-c");u.cfg={...Ea,...o||{}},await pc(),o&&localStorage.removeItem("ks-c")}const n=await se(`households/${u.hid}/mealplan`);if(u.mp={},u.mpCooked={},n.forEach(o=>{o.date&&o.meal&&(u.mp[o.date]=o.meal,o.cooked&&(u.mpCooked[o.date]=!0))}),!n.length){const o=fe("ks-m");if(o&&Object.keys(o).length){u.mp=o;for(const[r,a]of Object.entries(o))await Hn(r,a);localStorage.removeItem("ks-m")}}const i=await se(`households/${u.hid}/cooklog`);if(i.length)u.cookLog=i.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=fe("ks-cooklog");if(o&&o.length){u.cookLog=o.map((r,a)=>({id:r.id||(Date.now()-a).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.cookLog)await M(`households/${u.hid}/cooklog/${r.id}`,r);localStorage.removeItem("ks-cooklog")}}try{const o=await se(`households/${u.hid}/productPreferences`);u.productPrefs={};for(const r of o)r.id&&(u.productPrefs[r.id]=r)}catch(o){console.warn("[loadFirestoreData] productPreferences load skipped:",o.message)}const s=await se(`households/${u.hid}/wastelog`);if(s.length)u.wasteLog=s.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=fe("ks-waste");if(o&&o.length){u.wasteLog=o.map((r,a)=>({id:r.id||(Date.now()-a).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.wasteLog)await M(`households/${u.hid}/wastelog/${r.id}`,r);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}let Ji=0;function As(){Ji++,Ji===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function xs(){Ji--,Ji<=0&&(Ji=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}function yC(){window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null),window._pollFn=null,Ji=0}const U={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function H(t){var i;const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+(((i=u.cfg)==null?void 0:i.name)||u.hid):t==="syncing"?"Syncing…":"Sync error")}async function ee(t,e={}){var n,i;H("syncing"),As();try{const s=!u.inv.find(o=>o.id===t.id);u.inv=[...u.inv.filter(o=>o.id!==t.id),t],(n=U.renderAll)==null||n.call(U),(i=U.renderSum)==null||i.call(U),await M(`households/${u.hid}/inventory/${t.id}`,t),s&&!e.silent&&Pe("added",Z(t.name)+" to Supplies"),H("synced")}catch(s){console.error(s),H("error")}finally{xs()}}async function ir(t){var e,n;H("syncing"),As();try{const i=u.inv.find(s=>s.id===t);if(u.inv=u.inv.filter(s=>s.id!==t),(e=U.renderAll)==null||e.call(U),(n=U.renderSum)==null||n.call(U),await he(`households/${u.hid}/inventory/${t}`),i){const s={name:i.name,qty:i.qty,unit:i.unit,location:i.location,note:i.note,prepCategory:i.prepCategory,barcode:i.barcode,list:"supplies"};Pe("removed",Z(i.name)+" from Supplies",s)}H("synced")}catch(i){console.error(i),H("error")}finally{xs()}}async function it(t){var e,n;As();try{const i=!u.recs.find(o=>o.id===t.id);u.recs=[...u.recs.filter(o=>o.id!==t.id),t],(e=U.renderRecs)==null||e.call(U),(n=U.renderSum)==null||n.call(U),await M(`households/${u.hid}/recipes/${t.id}`,t);const s=Z(t.name||t.title||"a recipe");i?Pe("added",s+" to Recipes"):Pe("updated",s)}catch(i){console.error(i)}finally{xs()}}async function wl(t){var e,n;As();try{const i=u.recs.find(s=>s.id===t);u.recs=u.recs.filter(s=>s.id!==t),(e=U.renderRecs)==null||e.call(U),(n=U.renderSum)==null||n.call(U),await he(`households/${u.hid}/recipes/${t}`),i&&Pe("deleted",Z(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{xs()}}async function Oe(t,e={}){var n,i;As();try{const s=!u.shop.find(o=>o.id===t.id);u.shop=[...u.shop.filter(o=>o.id!==t.id),t],(n=U.renderShop)==null||n.call(U),(i=U.renderSum)==null||i.call(U),await M(`households/${u.hid}/shopping/${t.id}`,t),s&&!e.silent&&Pe("added",Z(t.name)+" to Shopping List")}catch(s){console.error(s)}finally{xs()}}async function sr(t){var e,n;As();try{const i=u.shop.find(s=>s.id===t);if(u.shop=u.shop.filter(s=>s.id!==t),(e=U.renderShop)==null||e.call(U),(n=U.renderSum)==null||n.call(U),await he(`households/${u.hid}/shopping/${t}`),i){const s={name:i.name,qty:i.quantity||i.qty||1,unit:i.unit,note:i.note,prepCategory:i.prepCategory,barcode:i.barcode,list:"shopping"};Pe("removed",Z(i.name)+" from Shopping List",s)}}catch(i){console.error(i)}finally{xs()}}async function eu(t,e){var s;const n="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:t.name,ingredients:t.description||"",steps:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",sourceRecipeId:t.id||null,imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",difficulty:t.difficulty||"",summary:t.summary||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],authorName:e||"Anonymous",authorUsername:u.username||"",authorUid:((s=Q())==null?void 0:s.uid)||"",householdId:u.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await M(`public_recipes/${n}`,i),{id:n,...i}}async function Bg(t){var i;if(!((i=Q())==null?void 0:i.uid))return null;const n=u.hid||"";if(t.publicId)try{const s=await jg(t.publicId);if(s)return s}catch{}try{u.comRecs=await Ft()}catch{}if(u.comRecs&&u.comRecs.length>0){const s=await nu(),o=l=>l.householdId?l.householdId===n:l.authorUid&&s.includes(l.authorUid);if(t.id){const l=u.comRecs.find(h=>o(h)&&h.sourceRecipeId===t.id);if(l)return l}const r=(t.name||"").trim().toLowerCase(),a=u.comRecs.find(l=>o(l)&&(l.title||"").trim().toLowerCase()===r);if(a)return a}return null}async function tu(t){await he(`public_recipes/${t}`)}async function Ft(){return se("public_recipes")}async function jg(t){return W(`public_recipes/${t}`)}async function vC(t,e){var r;const n=(r=Q())==null?void 0:r.uid;if(!n)return;const i=`public_recipes/${t}/likes/${n}`;e?await he(i):await M(i,{likedAt:new Date().toISOString()});const s=await se(`public_recipes/${t}/likes`),o=await W(`public_recipes/${t}`);o&&await M(`public_recipes/${t}`,{...o,likes:s.length,id:void 0})}async function wC(t,e,n){var a;const i=(a=Q())==null?void 0:a.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),o="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:s,authorName:n,authorUsername:u.username||"",authorUid:i,createdAt:new Date().toISOString()};await M(`public_recipes/${t}/comments/${o}`,r);try{const l=await W(`public_recipes/${t}`);if(l){const h=await se(`public_recipes/${t}/comments`);await M(`public_recipes/${t}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await PC(l.authorUid,{type:"comment",recipeId:t,recipeName:l.title||"a recipe",commenterUsername:u.username||n||"Someone"})}}catch{}return{id:o,...r}}async function bC(t){return se(`public_recipes/${t}/comments`)}async function _C(t){var i;const e=(i=Q())==null?void 0:i.uid;return e?!!await W(`public_recipes/${t}/likes/${e}`):!1}async function kC(t){const n={id:"rec-"+Date.now(),name:t.title,description:t.ingredients||"",notes:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],difficulty:t.difficulty||"",summary:t.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await it(n),n}async function Hg(t){return t?!await W(`usernames/${t.toLowerCase()}`):!1}async function zg(t,e){const n=await W(`users/${t}`),i=n==null?void 0:n.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await he(`usernames/${i.toLowerCase()}`)}catch{}await M(`usernames/${e.toLowerCase()}`,{uid:t}),n&&await M(`users/${t}`,{...n,username:e,id:void 0}),u.username=e}async function TC(t){try{const e=await W(`users/${t}`);return(e==null?void 0:e.username)||null}catch{return null}}async function CC(t){const e=await W(`users/${t}`);if(!e)return;try{const s=(await Ft()||[]).filter(o=>o.authorUid===t);for(const o of s)await M(`public_recipes/${o.id}`,{...o,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${t}:`,i)}const n=nr(e);for(const i of n)try{const s=await W(`households/${i}`);if(!s)continue;const o=s.ownerUid===t,r=(s.members||[]).length;if(o&&r<=1)await Fg(i,t);else if(!o){const a=(s.members||[]).filter(h=>h.uid!==t),l=(s.memberUids||[]).filter(h=>h!==t);await M(`households/${i}`,{...s,members:a,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await he(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await se(`users/${t}/notifications`);for(const s of i)await he(`users/${t}/notifications/${s.id}`)}catch{}try{await he(`users/${t}`)}catch{}}async function SC(t){var n;const e=(n=Q())==null?void 0:n.uid;return e?W(`public_recipes/${t}/reviews/${e}`):null}async function nu(){if(!u.hid)return[];try{const t=await W(`households/${u.hid}`);return(t==null?void 0:t.memberUids)||[]}catch{return[]}}async function Pe(t,e,n){if(!u.hid||!e)return;const i=localStorage.getItem("ks-who")||"Someone",s="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={memberName:i,action:t,itemName:e,timestamp:new Date().toISOString()};n&&(o.itemData=n);try{await M(`households/${u.hid}/activity/${s}`,o),IC()}catch{}}async function IC(){try{const t=await se(`households/${u.hid}/activity`),e=Date.now()-10080*60*1e3;for(const n of t)n.timestamp&&new Date(n.timestamp).getTime()<e&&await he(`households/${u.hid}/activity/${n.id}`)}catch{}}function Ql(){return new Date().toISOString().split("T")[0]}async function EC(t,e){var g;const n=(g=Q())==null?void 0:g.uid;if(!n||!e||e<1||e>5)return null;const i=await W(`public_recipes/${t}`);if(i&&i.authorUid===n)return null;const s=new Date().toISOString(),o=await W(`public_recipes/${t}/ratings/${n}`),r={rating:e,createdAt:(o==null?void 0:o.createdAt)||s,updatedAt:s};await M(`public_recipes/${t}/ratings/${n}`,r);const a=await se(`public_recipes/${t}/ratings`),l=a.reduce((w,k)=>w+(k.rating||0),0),h=a.length,f=h>0?Math.round(l/h*10)/10:0;return i&&await M(`public_recipes/${t}`,{...i,ratingSum:l,ratingCount:h,avgRating:f,id:void 0}),{...r,ratingSum:l,ratingCount:h,avgRating:f}}async function AC(t){var n;const e=(n=Q())==null?void 0:n.uid;return e?W(`public_recipes/${t}/ratings/${e}`):null}async function xC(t){var a;const e=(a=Q())==null?void 0:a.uid;if(!e)return null;await he(`public_recipes/${t}/ratings/${e}`);const n=await se(`public_recipes/${t}/ratings`),i=n.reduce((l,h)=>l+(h.rating||0),0),s=n.length,o=s>0?Math.round(i/s*10)/10:0,r=await W(`public_recipes/${t}`);return r&&await M(`public_recipes/${t}`,{...r,ratingSum:i,ratingCount:s,avgRating:o,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:o}}async function RC(t,e){await he(`public_recipes/${t}/comments/${e}`);try{const n=await W(`public_recipes/${t}`);if(n){const i=await se(`public_recipes/${t}/comments`);await M(`public_recipes/${t}`,{...n,commentCount:i.length,id:void 0})}}catch{}}async function $C(t,e,n,i){var h;const s=(h=Q())==null?void 0:h.uid;if(!s)return null;if((await se("reports")).find(f=>f.reportedBy===s&&f.targetId===e&&f.type===t))return"duplicate";const a="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:t,targetId:e,recipeId:i||e,reportedBy:s,reason:n,createdAt:new Date().toISOString(),status:"pending"};return await M(`reports/${a}`,l),{id:a,...l}}async function PC(t,e){if(!t)return;const n="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await M(`users/${t}/notifications/${n}`,i)}async function DC(){var n;const t=(n=Q())==null?void 0:n.uid;return t?(await se(`users/${t}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function LC(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=await se(`users/${t}/notifications`);for(const i of e)i.read||await M(`users/${t}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function NC(){var n;const t=(n=Q())==null?void 0:n.uid;return t?(await se(`users/${t}/notifications`)).filter(i=>!i.read).length:0}var af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nn,qg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function _(){}_.prototype=v.prototype,I.F=v.prototype,I.prototype=new _,I.prototype.constructor=I,I.D=function(S,C,A){for(var T=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)T[Ie-2]=arguments[Ie];return v.prototype[C].apply(S,T)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,_){_||(_=0);const S=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)S[C]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(C=0;C<16;++C)S[C]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=I.g[0],_=I.g[1],C=I.g[2];let A=I.g[3],T;T=v+(A^_&(C^A))+S[0]+3614090360&4294967295,v=_+(T<<7&4294967295|T>>>25),T=A+(C^v&(_^C))+S[1]+3905402710&4294967295,A=v+(T<<12&4294967295|T>>>20),T=C+(_^A&(v^_))+S[2]+606105819&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(v^C&(A^v))+S[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(A^_&(C^A))+S[4]+4118548399&4294967295,v=_+(T<<7&4294967295|T>>>25),T=A+(C^v&(_^C))+S[5]+1200080426&4294967295,A=v+(T<<12&4294967295|T>>>20),T=C+(_^A&(v^_))+S[6]+2821735955&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(v^C&(A^v))+S[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(A^_&(C^A))+S[8]+1770035416&4294967295,v=_+(T<<7&4294967295|T>>>25),T=A+(C^v&(_^C))+S[9]+2336552879&4294967295,A=v+(T<<12&4294967295|T>>>20),T=C+(_^A&(v^_))+S[10]+4294925233&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(v^C&(A^v))+S[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(A^_&(C^A))+S[12]+1804603682&4294967295,v=_+(T<<7&4294967295|T>>>25),T=A+(C^v&(_^C))+S[13]+4254626195&4294967295,A=v+(T<<12&4294967295|T>>>20),T=C+(_^A&(v^_))+S[14]+2792965006&4294967295,C=A+(T<<17&4294967295|T>>>15),T=_+(v^C&(A^v))+S[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=v+(C^A&(_^C))+S[1]+4129170786&4294967295,v=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(v^_))+S[6]+3225465664&4294967295,A=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(A^v))+S[11]+643717713&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^v&(C^A))+S[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^A&(_^C))+S[5]+3593408605&4294967295,v=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(v^_))+S[10]+38016083&4294967295,A=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(A^v))+S[15]+3634488961&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^v&(C^A))+S[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^A&(_^C))+S[9]+568446438&4294967295,v=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(v^_))+S[14]+3275163606&4294967295,A=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(A^v))+S[3]+4107603335&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^v&(C^A))+S[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(C^A&(_^C))+S[13]+2850285829&4294967295,v=_+(T<<5&4294967295|T>>>27),T=A+(_^C&(v^_))+S[2]+4243563512&4294967295,A=v+(T<<9&4294967295|T>>>23),T=C+(v^_&(A^v))+S[7]+1735328473&4294967295,C=A+(T<<14&4294967295|T>>>18),T=_+(A^v&(C^A))+S[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=v+(_^C^A)+S[5]+4294588738&4294967295,v=_+(T<<4&4294967295|T>>>28),T=A+(v^_^C)+S[8]+2272392833&4294967295,A=v+(T<<11&4294967295|T>>>21),T=C+(A^v^_)+S[11]+1839030562&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^v)+S[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^A)+S[1]+2763975236&4294967295,v=_+(T<<4&4294967295|T>>>28),T=A+(v^_^C)+S[4]+1272893353&4294967295,A=v+(T<<11&4294967295|T>>>21),T=C+(A^v^_)+S[7]+4139469664&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^v)+S[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^A)+S[13]+681279174&4294967295,v=_+(T<<4&4294967295|T>>>28),T=A+(v^_^C)+S[0]+3936430074&4294967295,A=v+(T<<11&4294967295|T>>>21),T=C+(A^v^_)+S[3]+3572445317&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^v)+S[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(_^C^A)+S[9]+3654602809&4294967295,v=_+(T<<4&4294967295|T>>>28),T=A+(v^_^C)+S[12]+3873151461&4294967295,A=v+(T<<11&4294967295|T>>>21),T=C+(A^v^_)+S[15]+530742520&4294967295,C=A+(T<<16&4294967295|T>>>16),T=_+(C^A^v)+S[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=v+(C^(_|~A))+S[0]+4096336452&4294967295,v=_+(T<<6&4294967295|T>>>26),T=A+(_^(v|~C))+S[7]+1126891415&4294967295,A=v+(T<<10&4294967295|T>>>22),T=C+(v^(A|~_))+S[14]+2878612391&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~v))+S[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~A))+S[12]+1700485571&4294967295,v=_+(T<<6&4294967295|T>>>26),T=A+(_^(v|~C))+S[3]+2399980690&4294967295,A=v+(T<<10&4294967295|T>>>22),T=C+(v^(A|~_))+S[10]+4293915773&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~v))+S[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~A))+S[8]+1873313359&4294967295,v=_+(T<<6&4294967295|T>>>26),T=A+(_^(v|~C))+S[15]+4264355552&4294967295,A=v+(T<<10&4294967295|T>>>22),T=C+(v^(A|~_))+S[6]+2734768916&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~v))+S[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=v+(C^(_|~A))+S[4]+4149444226&4294967295,v=_+(T<<6&4294967295|T>>>26),T=A+(_^(v|~C))+S[11]+3174756917&4294967295,A=v+(T<<10&4294967295|T>>>22),T=C+(v^(A|~_))+S[2]+718787259&4294967295,C=A+(T<<15&4294967295|T>>>17),T=_+(A^(C|~v))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+A&4294967295}i.prototype.v=function(I,v){v===void 0&&(v=I.length);const _=v-this.blockSize,S=this.C;let C=this.h,A=0;for(;A<v;){if(C==0)for(;A<=_;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<v;)if(S[C++]=I.charCodeAt(A++),C==this.blockSize){s(this,S),C=0;break}}else for(;A<v;)if(S[C++]=I[A++],C==this.blockSize){s(this,S),C=0;break}}this.h=C,this.o+=v},i.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var _=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,_=0;_<4;++_)for(let S=0;S<32;S+=8)I[v++]=this.g[_]>>>S&255;return I};function o(I,v){var _=a;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=v(I)}function r(I,v){this.h=v;const _=[];let S=!0;for(let C=I.length-1;C>=0;C--){const A=I[C]|0;S&&A==v||(_[C]=A,S=!1)}this.g=_}var a={};function l(I){return-128<=I&&I<128?o(I,function(v){return new r([v|0],v<0?-1:0)}):new r([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return $(h(-I));const v=[];let _=1;for(let S=0;I>=_;S++)v[S]=I/_|0,_*=4294967296;return new r(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return $(f(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(v,8));let S=g;for(let A=0;A<I.length;A+=8){var C=Math.min(8,I.length-A);const T=parseInt(I.substring(A,A+C),v);C<8?(C=h(Math.pow(v,C)),S=S.j(C).add(h(T))):(S=S.j(_),S=S.add(h(T)))}return S}var g=l(0),w=l(1),k=l(16777216);t=r.prototype,t.m=function(){if(P(this))return-$(this).m();let I=0,v=1;for(let _=0;_<this.g.length;_++){const S=this.i(_);I+=(S>=0?S:4294967296+S)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(E(this))return"0";if(P(this))return"-"+$(this).toString(I);const v=h(Math.pow(I,6));var _=this;let S="";for(;;){const C=F(_,v).g;_=D(_,C.j(v));let A=((_.g.length>0?_.g[0]:_.h)>>>0).toString(I);if(_=C,E(_))return A+S;for(;A.length<6;)A="0"+A;S=A+S}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function E(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=D(this,I),P(I)?-1:E(I)?0:1};function $(I){const v=I.g.length,_=[];for(let S=0;S<v;S++)_[S]=~I.g[S];return new r(_,~I.h).add(w)}t.abs=function(){return P(this)?$(this):this},t.add=function(I){const v=Math.max(this.g.length,I.g.length),_=[];let S=0;for(let C=0;C<=v;C++){let A=S+(this.i(C)&65535)+(I.i(C)&65535),T=(A>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);S=T>>>16,A&=65535,T&=65535,_[C]=T<<16|A}return new r(_,_[_.length-1]&-2147483648?-1:0)};function D(I,v){return I.add($(v))}t.j=function(I){if(E(this)||E(I))return g;if(P(this))return P(I)?$(this).j($(I)):$($(this).j(I));if(P(I))return $(this.j($(I)));if(this.l(k)<0&&I.l(k)<0)return h(this.m()*I.m());const v=this.g.length+I.g.length,_=[];for(var S=0;S<2*v;S++)_[S]=0;for(S=0;S<this.g.length;S++)for(let C=0;C<I.g.length;C++){const A=this.i(S)>>>16,T=this.i(S)&65535,Ie=I.i(C)>>>16,mt=I.i(C)&65535;_[2*S+2*C]+=T*mt,N(_,2*S+2*C),_[2*S+2*C+1]+=A*mt,N(_,2*S+2*C+1),_[2*S+2*C+1]+=T*Ie,N(_,2*S+2*C+1),_[2*S+2*C+2]+=A*Ie,N(_,2*S+2*C+2)}for(I=0;I<v;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=v;I<2*v;I++)_[I]=0;return new r(_,0)};function N(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function B(I,v){this.g=I,this.h=v}function F(I,v){if(E(v))throw Error("division by zero");if(E(I))return new B(g,g);if(P(I))return v=F($(I),v),new B($(v.g),$(v.h));if(P(v))return v=F(I,$(v)),new B($(v.g),v.h);if(I.g.length>30){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=w,S=v;S.l(I)<=0;)_=z(_),S=z(S);var C=ne(_,1),A=ne(S,1);for(S=ne(S,2),_=ne(_,2);!E(S);){var T=A.add(S);T.l(I)<=0&&(C=C.add(_),A=T),S=ne(S,1),_=ne(_,1)}return v=D(I,C.j(v)),new B(C,v)}for(C=g;I.l(v)>=0;){for(_=Math.max(1,Math.floor(I.m()/v.m())),S=Math.ceil(Math.log(_)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),A=h(_),T=A.j(v);P(T)||T.l(I)>0;)_-=S,A=h(_),T=A.j(v);E(A)&&(A=w),C=C.add(A),I=D(I,T)}return new B(C,I)}t.B=function(I){return F(this,I).h},t.and=function(I){const v=Math.max(this.g.length,I.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)&I.i(S);return new r(_,this.h&I.h)},t.or=function(I){const v=Math.max(this.g.length,I.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)|I.i(S);return new r(_,this.h|I.h)},t.xor=function(I){const v=Math.max(this.g.length,I.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)^I.i(S);return new r(_,this.h^I.h)};function z(I){const v=I.g.length+1,_=[];for(let S=0;S<v;S++)_[S]=I.i(S)<<1|I.i(S-1)>>>31;return new r(_,I.h)}function ne(I,v){const _=v>>5;v%=32;const S=I.g.length-_,C=[];for(let A=0;A<S;A++)C[A]=v>0?I.i(A+_)>>>v|I.i(A+_+1)<<32-v:I.i(A+_);return new r(C,I.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,qg=i,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=h,r.fromString=f,Nn=r}).apply(typeof af<"u"?af:typeof self<"u"?self:typeof window<"u"?window:{});var Fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wg,co,Gg,ra,Jl,Kg,Qg,Jg;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fr=="object"&&Fr];for(var p=0;p<c.length;++p){var m=c[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=n(this);function s(c,p){if(p)e:{var m=i;c=c.split(".");for(var y=0;y<c.length-1;y++){var x=c[y];if(!(x in m))break e;m=m[x]}c=c[c.length-1],y=m[c],p=p(y),p!=y&&p!=null&&e(m,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var m=[],y;for(y in p)Object.prototype.hasOwnProperty.call(p,y)&&m.push([y,p[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},r=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,m){return c.call.apply(c.bind,arguments)}function h(c,p,m){return h=l,h.apply(null,arguments)}function f(c,p){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function g(c,p){function m(){}m.prototype=p.prototype,c.Z=p.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(y,x,R){for(var O=Array(arguments.length-2),te=2;te<arguments.length;te++)O[te-2]=arguments[te];return p.prototype[x].apply(y,O)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function k(c){const p=c.length;if(p>0){const m=Array(p);for(let y=0;y<p;y++)m[y]=c[y];return m}return[]}function E(c,p){for(let y=1;y<arguments.length;y++){const x=arguments[y];var m=typeof x;if(m=m!="object"?m:x?Array.isArray(x)?"array":m:"null",m=="array"||m=="object"&&typeof x.length=="number"){m=c.length||0;const R=x.length||0;c.length=m+R;for(let O=0;O<R;O++)c[m+O]=x[O]}else c.push(x)}}class P{constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function $(c){r.setTimeout(()=>{throw c},0)}function D(){var c=I;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class N{constructor(){this.h=this.g=null}add(p,m){const y=B.get();y.set(p,m),this.h?this.h.next=y:this.g=y,this.h=y}}var B=new P(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let z,ne=!1,I=new N,v=()=>{const c=Promise.resolve(void 0);z=()=>{c.then(_)}};function _(){for(var c;c=D();){try{c.h.call(c.g)}catch(m){$(m)}var p=B;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}ne=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!r.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};r.addEventListener("test",m,p),r.removeEventListener("test",m,p)}catch{}return c})();function T(c){return/^[\s\xa0]*$/.test(c)}function Ie(c,p){C.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}g(Ie,C),Ie.prototype.init=function(c,p){const m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(m=="mouseover"?p=c.fromElement:m=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ie.Z.h.call(this)},Ie.prototype.h=function(){Ie.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var mt="closure_listenable_"+(Math.random()*1e6|0),Tr=0;function me(c,p,m,y,x){this.listener=c,this.proxy=null,this.src=p,this.type=m,this.capture=!!y,this.ha=x,this.key=++Tr,this.da=this.fa=!1}function _t(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Cr(c,p,m){for(const y in c)p.call(m,c[y],y,c)}function nb(c,p){for(const m in c)p.call(void 0,c[m],m,c)}function Ih(c){const p={};for(const m in c)p[m]=c[m];return p}const Eh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ah(c,p){let m,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(m in y)c[m]=y[m];for(let R=0;R<Eh.length;R++)m=Eh[R],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function Sr(c){this.src=c,this.g={},this.h=0}Sr.prototype.add=function(c,p,m,y,x){const R=c.toString();c=this.g[R],c||(c=this.g[R]=[],this.h++);const O=Bc(c,p,y,x);return O>-1?(p=c[O],m||(p.fa=!1)):(p=new me(p,this.src,R,!!y,x),p.fa=m,c.push(p)),p};function Uc(c,p){const m=p.type;if(m in c.g){var y=c.g[m],x=Array.prototype.indexOf.call(y,p,void 0),R;(R=x>=0)&&Array.prototype.splice.call(y,x,1),R&&(_t(p),c.g[m].length==0&&(delete c.g[m],c.h--))}}function Bc(c,p,m,y){for(let x=0;x<c.length;++x){const R=c[x];if(!R.da&&R.listener==p&&R.capture==!!m&&R.ha==y)return x}return-1}var jc="closure_lm_"+(Math.random()*1e6|0),Hc={};function xh(c,p,m,y,x){if(Array.isArray(p)){for(let R=0;R<p.length;R++)xh(c,p[R],m,y,x);return null}return m=Ph(m),c&&c[mt]?c.J(p,m,a(y)?!!y.capture:!1,x):ib(c,p,m,!1,y,x)}function ib(c,p,m,y,x,R){if(!p)throw Error("Invalid event type");const O=a(x)?!!x.capture:!!x;let te=qc(c);if(te||(c[jc]=te=new Sr(c)),m=te.add(p,m,y,O,R),m.proxy)return m;if(y=sb(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)A||(x=O),x===void 0&&(x=!1),c.addEventListener(p.toString(),y,x);else if(c.attachEvent)c.attachEvent($h(p.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function sb(){function c(m){return p.call(c.src,c.listener,m)}const p=ob;return c}function Rh(c,p,m,y,x){if(Array.isArray(p))for(var R=0;R<p.length;R++)Rh(c,p[R],m,y,x);else y=a(y)?!!y.capture:!!y,m=Ph(m),c&&c[mt]?(c=c.i,R=String(p).toString(),R in c.g&&(p=c.g[R],m=Bc(p,m,y,x),m>-1&&(_t(p[m]),Array.prototype.splice.call(p,m,1),p.length==0&&(delete c.g[R],c.h--)))):c&&(c=qc(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Bc(p,m,y,x)),(m=c>-1?p[c]:null)&&zc(m))}function zc(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[mt])Uc(p.i,c);else{var m=c.type,y=c.proxy;p.removeEventListener?p.removeEventListener(m,y,c.capture):p.detachEvent?p.detachEvent($h(m),y):p.addListener&&p.removeListener&&p.removeListener(y),(m=qc(p))?(Uc(m,c),m.h==0&&(m.src=null,p[jc]=null)):_t(c)}}}function $h(c){return c in Hc?Hc[c]:Hc[c]="on"+c}function ob(c,p){if(c.da)c=!0;else{p=new Ie(p,this);const m=c.listener,y=c.ha||c.src;c.fa&&zc(c),c=m.call(y,p)}return c}function qc(c){return c=c[jc],c instanceof Sr?c:null}var Wc="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ph(c){return typeof c=="function"?c:(c[Wc]||(c[Wc]=function(p){return c.handleEvent(p)}),c[Wc])}function je(){S.call(this),this.i=new Sr(this),this.M=this,this.G=null}g(je,S),je.prototype[mt]=!0,je.prototype.removeEventListener=function(c,p,m,y){Rh(this,c,p,m,y)};function Ke(c,p){var m,y=c.G;if(y)for(m=[];y;y=y.G)m.push(y);if(c=c.M,y=p.type||p,typeof p=="string")p=new C(p,c);else if(p instanceof C)p.target=p.target||c;else{var x=p;p=new C(y,c),Ah(p,x)}x=!0;let R,O;if(m)for(O=m.length-1;O>=0;O--)R=p.g=m[O],x=Ir(R,y,!0,p)&&x;if(R=p.g=c,x=Ir(R,y,!0,p)&&x,x=Ir(R,y,!1,p)&&x,m)for(O=0;O<m.length;O++)R=p.g=m[O],x=Ir(R,y,!1,p)&&x}je.prototype.N=function(){if(je.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const m=c.g[p];for(let y=0;y<m.length;y++)_t(m[y]);delete c.g[p],c.h--}}this.G=null},je.prototype.J=function(c,p,m,y){return this.i.add(String(c),p,!1,m,y)},je.prototype.K=function(c,p,m,y){return this.i.add(String(c),p,!0,m,y)};function Ir(c,p,m,y){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let x=!0;for(let R=0;R<p.length;++R){const O=p[R];if(O&&!O.da&&O.capture==m){const te=O.listener,Ee=O.ha||O.src;O.fa&&Uc(c.i,O),x=te.call(Ee,y)!==!1&&x}}return x&&!y.defaultPrevented}function rb(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=h(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:r.setTimeout(c,p||0)}function Dh(c){c.g=rb(()=>{c.g=null,c.i&&(c.i=!1,Dh(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class ab extends S{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Dh(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(c){S.call(this),this.h=c,this.g={}}g(js,S);var Lh=[];function Nh(c){Cr(c.g,function(p,m){this.g.hasOwnProperty(m)&&zc(p)},c),c.g={}}js.prototype.N=function(){js.Z.N.call(this),Nh(this)},js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gc=r.JSON.stringify,cb=r.JSON.parse,lb=class{stringify(c){return r.JSON.stringify(c,void 0)}parse(c){return r.JSON.parse(c,void 0)}};function Mh(){}function Oh(){}var Hs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Kc(){C.call(this,"d")}g(Kc,C);function Qc(){C.call(this,"c")}g(Qc,C);var oi={},Vh=null;function Er(){return Vh=Vh||new je}oi.Ia="serverreachability";function Fh(c){C.call(this,oi.Ia,c)}g(Fh,C);function zs(c){const p=Er();Ke(p,new Fh(p))}oi.STAT_EVENT="statevent";function Uh(c,p){C.call(this,oi.STAT_EVENT,c),this.stat=p}g(Uh,C);function Qe(c){const p=Er();Ke(p,new Uh(p,c))}oi.Ja="timingevent";function Bh(c,p){C.call(this,oi.Ja,c),this.size=p}g(Bh,C);function qs(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){c()},p)}function Ws(){this.g=!0}Ws.prototype.ua=function(){this.g=!1};function db(c,p,m,y,x,R){c.info(function(){if(c.g)if(R){var O="",te=R.split("&");for(let le=0;le<te.length;le++){var Ee=te[le].split("=");if(Ee.length>1){const De=Ee[0];Ee=Ee[1];const Tt=De.split("_");O=Tt.length>=2&&Tt[1]=="type"?O+(De+"="+Ee+"&"):O+(De+"=redacted&")}}}else O=null;else O=R;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+p+`
`+m+`
`+O})}function ub(c,p,m,y,x,R,O){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+p+`
`+m+`
`+R+" "+O})}function Mi(c,p,m,y){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+pb(c,m)+(y?" "+y:"")})}function hb(c,p){c.info(function(){return"TIMEOUT: "+p})}Ws.prototype.info=function(){};function pb(c,p){if(!c.g)return p;if(!p)return null;try{const R=JSON.parse(p);if(R){for(c=0;c<R.length;c++)if(Array.isArray(R[c])){var m=R[c];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var x=y[0];if(x!="noop"&&x!="stop"&&x!="close")for(let O=1;O<y.length;O++)y[O]=""}}}}return Gc(R)}catch{return p}}var Ar={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},jh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hh;function Jc(){}g(Jc,Mh),Jc.prototype.g=function(){return new XMLHttpRequest},Hh=new Jc;function Gs(c){return encodeURIComponent(String(c))}function fb(c){var p=1;c=c.split(":");const m=[];for(;p>0&&c.length;)m.push(c.shift()),p--;return c.length&&m.push(c.join(":")),m}function hn(c,p,m,y){this.j=c,this.i=p,this.l=m,this.S=y||1,this.V=new js(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zh}function zh(){this.i=null,this.g="",this.h=!1}var qh={},Yc={};function Xc(c,p,m){c.M=1,c.A=Rr(kt(p)),c.u=m,c.R=!0,Wh(c,null)}function Wh(c,p){c.F=Date.now(),xr(c),c.B=kt(c.A);var m=c.B,y=c.S;Array.isArray(y)||(y=[String(y)]),op(m.i,"t",y),c.C=0,m=c.j.L,c.h=new zh,c.g=Tp(c.j,m?p:null,!c.u),c.P>0&&(c.O=new ab(h(c.Y,c,c.g),c.P)),p=c.V,m=c.g,y=c.ba;var x="readystatechange";Array.isArray(x)||(x&&(Lh[0]=x.toString()),x=Lh);for(let R=0;R<x.length;R++){const O=xh(m,x[R],y||p.handleEvent,!1,p.h||p);if(!O)break;p.g[O.key]=O}p=c.J?Ih(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),zs(),db(c.i,c.v,c.B,c.l,c.S,c.u)}hn.prototype.ba=function(c){c=c.target;const p=this.O;p&&mn(c)==3?p.j():this.Y(c)},hn.prototype.Y=function(c){try{if(c==this.g)e:{const te=mn(this.g),Ee=this.g.ya(),le=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||hp(this.g)))){this.K||te!=4||Ee==7||(Ee==8||le<=0?zs(3):zs(2)),Zc(this);var p=this.g.ca();this.X=p;var m=mb(this);if(this.o=p==200,ub(this.i,this.v,this.B,this.l,this.S,te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var y,x=this.g;if((y=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var R=y;break t}}R=null}if(c=R)Mi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,el(this,c);else{this.o=!1,this.m=3,Qe(12),ri(this),Ks(this);break e}}if(this.R){c=!0;let De;for(;!this.K&&this.C<m.length;)if(De=gb(this,m),De==Yc){te==4&&(this.m=4,Qe(14),c=!1),Mi(this.i,this.l,null,"[Incomplete Response]");break}else if(De==qh){this.m=4,Qe(15),Mi(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Mi(this.i,this.l,De,null),el(this,De);if(Gh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||m.length!=0||this.h.h||(this.m=1,Qe(16),c=!1),this.o=this.o&&c,!c)Mi(this.i,this.l,m,"[Invalid Chunked Response]"),ri(this),Ks(this);else if(m.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),cl(O),O.P=!0,Qe(11))}}else Mi(this.i,this.l,m,null),el(this,m);te==4&&ri(this),this.o&&!this.K&&(te==4?wp(this.j,this):(this.o=!1,xr(this)))}else Rb(this.g),p==400&&m.indexOf("Unknown SID")>0?(this.m=3,Qe(12)):(this.m=0,Qe(13)),ri(this),Ks(this)}}}catch{}finally{}};function mb(c){if(!Gh(c))return c.g.la();const p=hp(c.g);if(p==="")return"";let m="";const y=p.length,x=mn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ri(c),Ks(c),"";c.h.i=new r.TextDecoder}for(let R=0;R<y;R++)c.h.h=!0,m+=c.h.i.decode(p[R],{stream:!(x&&R==y-1)});return p.length=0,c.h.g+=m,c.C=0,c.h.g}function Gh(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function gb(c,p){var m=c.C,y=p.indexOf(`
`,m);return y==-1?Yc:(m=Number(p.substring(m,y)),isNaN(m)?qh:(y+=1,y+m>p.length?Yc:(p=p.slice(y,y+m),c.C=y+m,p)))}hn.prototype.cancel=function(){this.K=!0,ri(this)};function xr(c){c.T=Date.now()+c.H,Kh(c,c.H)}function Kh(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=qs(h(c.aa,c),p)}function Zc(c){c.D&&(r.clearTimeout(c.D),c.D=null)}hn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(hb(this.i,this.B),this.M!=2&&(zs(),Qe(17)),ri(this),this.m=2,Ks(this)):Kh(this,this.T-c)};function Ks(c){c.j.I==0||c.K||wp(c.j,c)}function ri(c){Zc(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,Nh(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function el(c,p){try{var m=c.j;if(m.I!=0&&(m.g==c||tl(m.h,c))){if(!c.L&&tl(m.h,c)&&m.I==3){try{var y=m.Ba.g.parse(p)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)Nr(m),Dr(m);else break e;al(m),Qe(18)}}else m.xa=x[1],0<m.xa-m.K&&x[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=qs(h(m.Va,m),6e3));Yh(m.h)<=1&&m.ta&&(m.ta=void 0)}else ci(m,11)}else if((c.L||m.g==c)&&Nr(m),!T(p))for(x=m.Ba.g.parse(p),p=0;p<x.length;p++){let le=x[p];const De=le[0];if(!(De<=m.K))if(m.K=De,le=le[1],m.I==2)if(le[0]=="c"){m.M=le[1],m.ba=le[2];const Tt=le[3];Tt!=null&&(m.ka=Tt,m.j.info("VER="+m.ka));const li=le[4];li!=null&&(m.za=li,m.j.info("SVER="+m.za));const gn=le[5];gn!=null&&typeof gn=="number"&&gn>0&&(y=1.5*gn,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const yn=c.g;if(yn){const Or=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Or){var R=y.h;R.g||Or.indexOf("spdy")==-1&&Or.indexOf("quic")==-1&&Or.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(nl(R,R.h),R.h=null))}if(y.G){const ll=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;ll&&(y.wa=ll,pe(y.J,y.G,ll))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var O=c;if(y.na=kp(y,y.L?y.ba:null,y.W),O.L){Xh(y.h,O);var te=O,Ee=y.O;Ee&&(te.H=Ee),te.D&&(Zc(te),xr(te)),y.g=O}else yp(y);m.i.length>0&&Lr(m)}else le[0]!="stop"&&le[0]!="close"||ci(m,7);else m.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?ci(m,7):rl(m):le[0]!="noop"&&m.l&&m.l.qa(le),m.A=0)}}zs(4)}catch{}}var yb=class{constructor(c,p){this.g=c,this.map=p}};function Qh(c){this.l=c||10,r.PerformanceNavigationTiming?(c=r.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Yh(c){return c.h?1:c.g?c.g.size:0}function tl(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function nl(c,p){c.g?c.g.add(p):c.h=p}function Xh(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Qh.prototype.cancel=function(){if(this.i=Zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Zh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const m of c.g.values())p=p.concat(m.G);return p}return k(c.i)}var ep=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vb(c,p){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const y=c[m].indexOf("=");let x,R=null;y>=0?(x=c[m].substring(0,y),R=c[m].substring(y+1)):x=c[m],p(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function pn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof pn?(this.l=c.l,Qs(this,c.j),this.o=c.o,this.g=c.g,Js(this,c.u),this.h=c.h,il(this,rp(c.i)),this.m=c.m):c&&(p=String(c).match(ep))?(this.l=!1,Qs(this,p[1]||"",!0),this.o=Ys(p[2]||""),this.g=Ys(p[3]||"",!0),Js(this,p[4]),this.h=Ys(p[5]||"",!0),il(this,p[6]||"",!0),this.m=Ys(p[7]||"")):(this.l=!1,this.i=new Zs(null,this.l))}pn.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(Xs(p,tp,!0),":");var m=this.g;return(m||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Xs(p,tp,!0),"@"),c.push(Gs(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(Xs(m,m.charAt(0)=="/"?_b:bb,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",Xs(m,Tb)),c.join("")},pn.prototype.resolve=function(c){const p=kt(this);let m=!!c.j;m?Qs(p,c.j):m=!!c.o,m?p.o=c.o:m=!!c.g,m?p.g=c.g:m=c.u!=null;var y=c.h;if(m)Js(p,c.u);else if(m=!!c.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var x=p.h.lastIndexOf("/");x!=-1&&(y=p.h.slice(0,x+1)+y)}if(x=y,x==".."||x==".")y="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){y=x.lastIndexOf("/",0)==0,x=x.split("/");const R=[];for(let O=0;O<x.length;){const te=x[O++];te=="."?y&&O==x.length&&R.push(""):te==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),y&&O==x.length&&R.push("")):(R.push(te),y=!0)}y=R.join("/")}else y=x}return m?p.h=y:m=c.i.toString()!=="",m?il(p,rp(c.i)):m=!!c.m,m&&(p.m=c.m),p};function kt(c){return new pn(c)}function Qs(c,p,m){c.j=m?Ys(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function Js(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function il(c,p,m){p instanceof Zs?(c.i=p,Cb(c.i,c.l)):(m||(p=Xs(p,kb)),c.i=new Zs(p,c.l))}function pe(c,p,m){c.i.set(p,m)}function Rr(c){return pe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ys(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Xs(c,p,m){return typeof c=="string"?(c=encodeURI(c).replace(p,wb),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function wb(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var tp=/[#\/\?@]/g,bb=/[#\?:]/g,_b=/[#\?]/g,kb=/[#\?@]/g,Tb=/#/g;function Zs(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function ai(c){c.g||(c.g=new Map,c.h=0,c.i&&vb(c.i,function(p,m){c.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}t=Zs.prototype,t.add=function(c,p){ai(this),this.i=null,c=Oi(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(p),this.h+=1,this};function np(c,p){ai(c),p=Oi(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function ip(c,p){return ai(c),p=Oi(c,p),c.g.has(p)}t.forEach=function(c,p){ai(this),this.g.forEach(function(m,y){m.forEach(function(x){c.call(p,x,y,this)},this)},this)};function sp(c,p){ai(c);let m=[];if(typeof p=="string")ip(c,p)&&(m=m.concat(c.g.get(Oi(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)m=m.concat(c[p]);return m}t.set=function(c,p){return ai(this),this.i=null,c=Oi(this,c),ip(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=sp(this,c),c.length>0?String(c[0]):p):p};function op(c,p,m){np(c,p),m.length>0&&(c.i=null,c.g.set(Oi(c,p),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let y=0;y<p.length;y++){var m=p[y];const x=Gs(m);m=sp(this,m);for(let R=0;R<m.length;R++){let O=x;m[R]!==""&&(O+="="+Gs(m[R])),c.push(O)}}return this.i=c.join("&")};function rp(c){const p=new Zs;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function Oi(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function Cb(c,p){p&&!c.j&&(ai(c),c.i=null,c.g.forEach(function(m,y){const x=y.toLowerCase();y!=x&&(np(this,y),op(this,x,m))},c)),c.j=p}function Sb(c,p){const m=new Ws;if(r.Image){const y=new Image;y.onload=f(fn,m,"TestLoadImage: loaded",!0,p,y),y.onerror=f(fn,m,"TestLoadImage: error",!1,p,y),y.onabort=f(fn,m,"TestLoadImage: abort",!1,p,y),y.ontimeout=f(fn,m,"TestLoadImage: timeout",!1,p,y),r.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else p(!1)}function Ib(c,p){const m=new Ws,y=new AbortController,x=setTimeout(()=>{y.abort(),fn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:y.signal}).then(R=>{clearTimeout(x),R.ok?fn(m,"TestPingServer: ok",!0,p):fn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(x),fn(m,"TestPingServer: error",!1,p)})}function fn(c,p,m,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(m)}catch{}}function Eb(){this.g=new lb}function sl(c){this.i=c.Sb||null,this.h=c.ab||!1}g(sl,Mh),sl.prototype.g=function(){return new $r(this.i,this.h)};function $r(c,p){je.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g($r,je),t=$r.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,to(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||r).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,eo(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof r.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ap(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function ap(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?eo(this):to(this),this.readyState==3&&ap(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,eo(this))},t.Na=function(c){this.g&&(this.response=c,eo(this))},t.ga=function(){this.g&&eo(this)};function eo(c){c.readyState=4,c.l=null,c.j=null,c.B=null,to(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=p.next();return c.join(`\r
`)};function to(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty($r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function cp(c){let p="";return Cr(c,function(m,y){p+=y,p+=":",p+=m,p+=`\r
`}),p}function ol(c,p,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=cp(m),typeof c=="string"?m!=null&&Gs(m):pe(c,p,m))}function ve(c){je.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ve,je);var Ab=/^https?$/i,xb=["POST","PUT"];t=ve.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hh.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(R){lp(this,R);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)m.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const R of y.keys())m.set(R,y.get(R));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(R=>R.toLowerCase()=="content-type"),x=r.FormData&&c instanceof r.FormData,!(Array.prototype.indexOf.call(xb,p,void 0)>=0)||y||x||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of m)this.g.setRequestHeader(R,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(R){lp(this,R)}};function lp(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,dp(c),Pr(c)}function dp(c){c.A||(c.A=!0,Ke(c,"complete"),Ke(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ke(this,"complete"),Ke(this,"abort"),Pr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pr(this,!0)),ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?up(this):this.Xa())},t.Xa=function(){up(this)};function up(c){if(c.h&&typeof o<"u"){if(c.v&&mn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ke(c,"readystatechange"),mn(c)==4){c.h=!1;try{const R=c.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var m;if(!(m=p)){var y;if(y=R===0){let O=String(c.D).match(ep)[1]||null;!O&&r.self&&r.self.location&&(O=r.self.location.protocol.slice(0,-1)),y=!Ab.test(O?O.toLowerCase():"")}m=y}if(m)Ke(c,"complete"),Ke(c,"success");else{c.o=6;try{var x=mn(c)>2?c.g.statusText:""}catch{x=""}c.l=x+" ["+c.ca()+"]",dp(c)}}finally{Pr(c)}}}}function Pr(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,p||Ke(c,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function mn(c){return c.g?c.g.readyState:0}t.ca=function(){try{return mn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),cb(p)}};function hp(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Rb(c){const p={};c=(c.g&&mn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(T(c[y]))continue;var m=fb(c[y]);const x=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const R=p[x]||[];p[x]=R,R.push(m)}nb(p,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function no(c,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||p}function pp(c){this.za=0,this.i=[],this.j=new Ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=no("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=no("baseRetryDelayMs",5e3,c),this.Za=no("retryDelaySeedMs",1e4,c),this.Ta=no("forwardChannelMaxRetries",2,c),this.va=no("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Qh(c&&c.concurrentRequestLimit),this.Ba=new Eb,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pp.prototype,t.ka=8,t.I=1,t.connect=function(c,p,m,y){Qe(0),this.W=c,this.H=p||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=kp(this,null,this.W),Lr(this)};function rl(c){if(fp(c),c.I==3){var p=c.V++,m=kt(c.J);if(pe(m,"SID",c.M),pe(m,"RID",p),pe(m,"TYPE","terminate"),io(c,m),p=new hn(c,c.j,p),p.M=2,p.A=Rr(kt(m)),m=!1,r.navigator&&r.navigator.sendBeacon)try{m=r.navigator.sendBeacon(p.A.toString(),"")}catch{}!m&&r.Image&&(new Image().src=p.A,m=!0),m||(p.g=Tp(p.j,null),p.g.ea(p.A)),p.F=Date.now(),xr(p)}_p(c)}function Dr(c){c.g&&(cl(c),c.g.cancel(),c.g=null)}function fp(c){Dr(c),c.v&&(r.clearTimeout(c.v),c.v=null),Nr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&r.clearTimeout(c.m),c.m=null)}function Lr(c){if(!Jh(c.h)&&!c.m){c.m=!0;var p=c.Ea;z||v(),ne||(z(),ne=!0),I.add(p,c),c.D=0}}function $b(c,p){return Yh(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=qs(h(c.Ea,c,p),bp(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const x=new hn(this,this.j,c);let R=this.o;if(this.U&&(R?(R=Ih(R),Ah(R,this.U)):R=this.U),this.u!==null||this.R||(x.J=R,R=null),this.S)e:{for(var p=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(p+=y,p>4096){p=m;break e}if(p===4096||m===this.i.length-1){p=m+1;break e}}p=1e3}else p=1e3;p=gp(this,x,p),m=kt(this.J),pe(m,"RID",c),pe(m,"CVER",22),this.G&&pe(m,"X-HTTP-Session-Id",this.G),io(this,m),R&&(this.R?p="headers="+Gs(cp(R))+"&"+p:this.u&&ol(m,this.u,R)),nl(this.h,x),this.Ra&&pe(m,"TYPE","init"),this.S?(pe(m,"$req",p),pe(m,"SID","null"),x.U=!0,Xc(x,m,null)):Xc(x,m,p),this.I=2}}else this.I==3&&(c?mp(this,c):this.i.length==0||Jh(this.h)||mp(this))};function mp(c,p){var m;p?m=p.l:m=c.V++;const y=kt(c.J);pe(y,"SID",c.M),pe(y,"RID",m),pe(y,"AID",c.K),io(c,y),c.u&&c.o&&ol(y,c.u,c.o),m=new hn(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),p&&(c.i=p.G.concat(c.i)),p=gp(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),nl(c.h,m),Xc(m,y,p)}function io(c,p){c.H&&Cr(c.H,function(m,y){pe(p,y,m)}),c.l&&Cr({},function(m,y){pe(p,y,m)})}function gp(c,p,m){m=Math.min(c.i.length,m);const y=c.l?h(c.l.Ka,c.l,c):null;e:{var x=c.i;let te=-1;for(;;){const Ee=["count="+m];te==-1?m>0?(te=x[0].g,Ee.push("ofs="+te)):te=0:Ee.push("ofs="+te);let le=!0;for(let De=0;De<m;De++){var R=x[De].g;const Tt=x[De].map;if(R-=te,R<0)te=Math.max(0,x[De].g-100),le=!1;else try{R="req"+R+"_"||"";try{var O=Tt instanceof Map?Tt:Object.entries(Tt);for(const[li,gn]of O){let yn=gn;a(gn)&&(yn=Gc(gn)),Ee.push(R+li+"="+encodeURIComponent(yn))}}catch(li){throw Ee.push(R+"type="+encodeURIComponent("_badmap")),li}}catch{y&&y(Tt)}}if(le){O=Ee.join("&");break e}}O=void 0}return c=c.i.splice(0,m),p.G=c,O}function yp(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;z||v(),ne||(z(),ne=!0),I.add(p,c),c.A=0}}function al(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=qs(h(c.Da,c),bp(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,vp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=qs(h(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Qe(10),Dr(this),vp(this))};function cl(c){c.B!=null&&(r.clearTimeout(c.B),c.B=null)}function vp(c){c.g=new hn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=kt(c.na);pe(p,"RID","rpc"),pe(p,"SID",c.M),pe(p,"AID",c.K),pe(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&pe(p,"TO",c.ia),pe(p,"TYPE","xmlhttp"),io(c,p),c.u&&c.o&&ol(p,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=Rr(kt(p)),m.u=null,m.R=!0,Wh(m,c)}t.Va=function(){this.C!=null&&(this.C=null,Dr(this),al(this),Qe(19))};function Nr(c){c.C!=null&&(r.clearTimeout(c.C),c.C=null)}function wp(c,p){var m=null;if(c.g==p){Nr(c),cl(c),c.g=null;var y=2}else if(tl(c.h,p))m=p.G,Xh(c.h,p),y=1;else return;if(c.I!=0){if(p.o)if(y==1){m=p.u?p.u.length:0,p=Date.now()-p.F;var x=c.D;y=Er(),Ke(y,new Bh(y,m)),Lr(c)}else yp(c);else if(x=p.m,x==3||x==0&&p.X>0||!(y==1&&$b(c,p)||y==2&&al(c)))switch(m&&m.length>0&&(p=c.h,p.i=p.i.concat(m)),x){case 1:ci(c,5);break;case 4:ci(c,10);break;case 3:ci(c,6);break;default:ci(c,2)}}}function bp(c,p){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*p}function ci(c,p){if(c.j.info("Error code "+p),p==2){var m=h(c.bb,c),y=c.Ua;const x=!y;y=new pn(y||"//www.google.com/images/cleardot.gif"),r.location&&r.location.protocol=="http"||Qs(y,"https"),Rr(y),x?Sb(y.toString(),m):Ib(y.toString(),m)}else Qe(2);c.I=0,c.l&&c.l.pa(p),_p(c),fp(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function _p(c){if(c.I=0,c.ja=[],c.l){const p=Zh(c.h);(p.length!=0||c.i.length!=0)&&(E(c.ja,p),E(c.ja,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.oa()}}function kp(c,p,m){var y=m instanceof pn?kt(m):new pn(m);if(y.g!="")p&&(y.g=p+"."+y.g),Js(y,y.u);else{var x=r.location;y=x.protocol,p=p?p+"."+x.hostname:x.hostname,x=+x.port;const R=new pn(null);y&&Qs(R,y),p&&(R.g=p),x&&Js(R,x),m&&(R.h=m),y=R}return m=c.G,p=c.wa,m&&p&&pe(y,m,p),pe(y,"VER",c.ka),io(c,y),y}function Tp(c,p,m){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new ve(new sl({ab:m})):new ve(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cp(){}t=Cp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Mr(){}Mr.prototype.g=function(c,p){return new rt(c,p)};function rt(c,p){je.call(this),this.g=new pp(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!T(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!T(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new Vi(this)}g(rt,je),rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},rt.prototype.close=function(){rl(this.g)},rt.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=Gc(c),c=m);p.i.push(new yb(p.Ya++,c)),p.I==3&&Lr(p)},rt.prototype.N=function(){this.g.l=null,delete this.j,rl(this.g),delete this.g,rt.Z.N.call(this)};function Sp(c){Kc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const m in p){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}g(Sp,Kc);function Ip(){Qc.call(this),this.status=1}g(Ip,Qc);function Vi(c){this.g=c}g(Vi,Cp),Vi.prototype.ra=function(){Ke(this.g,"a")},Vi.prototype.qa=function(c){Ke(this.g,new Sp(c))},Vi.prototype.pa=function(c){Ke(this.g,new Ip)},Vi.prototype.oa=function(){Ke(this.g,"b")},Mr.prototype.createWebChannel=Mr.prototype.g,rt.prototype.send=rt.prototype.o,rt.prototype.open=rt.prototype.m,rt.prototype.close=rt.prototype.close,Jg=function(){return new Mr},Qg=function(){return Er()},Kg=oi,Jl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ar.NO_ERROR=0,Ar.TIMEOUT=8,Ar.HTTP_ERROR=6,ra=Ar,jh.COMPLETE="complete",Gg=jh,Oh.EventType=Hs,Hs.OPEN="a",Hs.CLOSE="b",Hs.ERROR="c",Hs.MESSAGE="d",je.prototype.listen=je.prototype.J,co=Oh,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,Wg=ve}).apply(typeof Fr<"u"?Fr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="12.10.0";function MC(t){Rs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ii=new Vd("@firebase/firestore");function Ui(){return Ii.logLevel}function j(t,...e){if(Ii.logLevel<=ie.DEBUG){const n=e.map(iu);Ii.debug(`Firestore (${Rs}): ${t}`,...n)}}function rn(t,...e){if(Ii.logLevel<=ie.ERROR){const n=e.map(iu);Ii.error(`Firestore (${Rs}): ${t}`,...n)}}function Ei(t,...e){if(Ii.logLevel<=ie.WARN){const n=e.map(iu);Ii.warn(`Firestore (${Rs}): ${t}`,...n)}}function iu(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Yg(t,i,n)}function Yg(t,e,n){let i=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw rn(i),new Error(i)}function ye(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||Yg(e,s,i)}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ze.UNAUTHENTICATED)))}shutdown(){}}class VC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class FC{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let o=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Yi,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const l=o;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Yi)}}),0),r()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((i=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ye(typeof i.accessToken=="string",31837,{l:i}),new Xg(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class UC{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class BC{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new UC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ze(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const i=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const r=o.token!==this.m;return this.m=o.token,j("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>i(o)))};const s=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=HC(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%62))}return i}}function oe(t,e){return t<e?-1:t>e?1:0}function Yl(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.charAt(i),o=e.charAt(i);if(s!==o)return bl(s)===bl(o)?oe(s,o):bl(s)?1:-1}return oe(t.length,e.length)}const zC=55296,qC=57343;function bl(t){const e=t.charCodeAt(0);return e>=zC&&e<=qC}function ds(t,e,n){return t.length===e.length&&t.every(((i,s)=>n(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="__name__";class It{constructor(e,n,i){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&X(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return It.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof It?e.forEach((i=>{n.push(i)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=It.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return oe(e.length,n.length)}static compareSegments(e,n){const i=It.isNumericId(e),s=It.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?It.extractNumericId(e).compare(It.extractNumericId(n)):Yl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nn.fromString(e.substring(4,e.length-2))}}class ge extends It{construct(e,n,i){return new ge(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((s=>s.length>0)))}return new ge(n)}static emptyPath(){return new ge([])}}const WC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends It{construct(e,n,i){return new et(e,n,i)}static isValidIdentifier(e){return WC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lf}static keyField(){return new et([lf])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let r=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(r=!r,s++):a!=="."||r?(i+=a,s++):(o(),s++)}if(o(),r)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function GC(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KC(t,e,n,i){if(e===!0&&i===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function df(t){if(K.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function QC(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function JC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function aa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=JC(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Se(t,e){const n={typeString:t};return e&&(n.value=e),n}function or(t,e){if(!QC(t))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const r=t[i];if(s&&typeof r!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&r!==o.value){n=`Expected '${i}' field to equal '${o.value}'`;break}}if(n)throw new q(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=-62135596800,hf=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*hf);return new Ce(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<uf)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hf}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(or(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Se("string",Ce._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Po=-1;function YC(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new Ce(n+1,0):new Ce(n,i));return new zn(s,K.empty(),e)}function XC(t){return new zn(t.readTime,t.key,Po)}class zn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new zn(Y.min(),K.empty(),Po)}static max(){return new zn(Y.max(),K.empty(),Po)}}function ZC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==eS)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,i)=>{n(e)}))}static reject(e){return new L(((n,i)=>{i(e)}))}static waitFor(e){return new L(((n,i)=>{let s=0,o=0,r=!1;e.forEach((a=>{++s,a.next((()=>{++o,r&&o===s&&n()}),(l=>i(l)))})),r=!0,o===s&&n()}))}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next((s=>s?L.resolve(s):i()));return n}static forEach(e,n){const i=[];return e.forEach(((s,o)=>{i.push(n.call(this,s,o))})),this.waitFor(i)}static mapArray(e,n){return new L(((i,s)=>{const o=e.length,r=new Array(o);let a=0;for(let l=0;l<o;l++){const h=l;n(e[h]).next((f=>{r[h]=f,++a,a===o&&i(r)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((i,s)=>{const o=()=>{e()===!0?n().next((()=>{o()}),s):i()};o()}))}}function nS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $s(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=-1;function gc(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="";function sS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pf(e)),e=oS(t.get(n),e);return pf(e)}function oS(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const o=t.charAt(s);switch(o){case"\0":n+="";break;case ey:n+="";break;default:n+=o}}return n}function pf(t){return t+ey+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,i)=>(e(n,i),!1)))}toString(){const e=[];return this.inorderTraversal(((n,i)=>(e.push(`${n}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ur(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ur(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ur(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ur(this.root,e,this.comparator,!0)}}class Ur{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,i,s,o){this.key=e,this.value=n,this.color=i??Ue.RED,this.left=s??Ue.EMPTY,this.right=o??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,o){return new Ue(e??this.key,n??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,i),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,i,s,o){return this}insert(e,n,i){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,i)=>(e(n),!1)))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mf(this.data.getIterator())}getIteratorFrom(e){return new mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((i=>{n=n.add(i)})),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new $n([])}unionWith(e){let n=new $e(et.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new $n(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,((n,i)=>n.isEqual(i)))}}/**
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
 */class ty extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ty("Invalid base64 string: "+o):o}})(e);return new Be(n)}static fromUint8Array(e){const n=(function(s){let o="";for(let r=0;r<s.length;++r)o+=String.fromCharCode(s[r]);return o})(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const aS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qn(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=aS.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wn(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="server_timestamp",iy="__type__",sy="__previous_value__",oy="__local_write_time__";function su(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[iy])==null?void 0:i.stringValue)===ny}function yc(t){const e=t.mapValue.fields[sy];return su(e)?yc(e):e}function Do(t){const e=qn(t.mapValue.fields[oy].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n,i,s,o,r,a,l,h,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=g}}const Fa="(default)";class Lo{constructor(e,n){this.projectId=e,this.database=n||Fa}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database===Fa}isEqual(e){return e instanceof Lo&&e.projectId===this.projectId&&e.database===this.database}}function lS(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="__type__",uS="__max__",Br={mapValue:{}},hS="__vector__",Zl="value";function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?su(t)?4:fS(t)?9007199254740991:pS(t)?10:11:X(28295,{value:t})}function Ut(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const r=qn(s.timestampValue),a=qn(o.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,o){return Wn(s.bytesValue).isEqual(Wn(o.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,o){return _e(s.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(o.geoPointValue.longitude)})(t,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return _e(s.integerValue)===_e(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const r=_e(s.doubleValue),a=_e(o.doubleValue);return r===a?Xl(r)===Xl(a):isNaN(r)&&isNaN(a)}return!1})(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:case 11:return(function(s,o){const r=s.mapValue.fields||{},a=o.mapValue.fields||{};if(ff(r)!==ff(a))return!1;for(const l in r)if(r.hasOwnProperty(l)&&(a[l]===void 0||!Ut(r[l],a[l])))return!1;return!0})(t,e);default:return X(52216,{left:t})}}function No(t,e){return(t.values||[]).find((n=>Ut(n,e)))!==void 0}function us(t,e){if(t===e)return 0;const n=Gn(t),i=Gn(e);if(n!==i)return oe(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return(function(o,r){const a=_e(o.integerValue||o.doubleValue),l=_e(r.integerValue||r.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(t,e);case 3:return gf(t.timestampValue,e.timestampValue);case 4:return gf(Do(t),Do(e));case 5:return Yl(t.stringValue,e.stringValue);case 6:return(function(o,r){const a=Wn(o),l=Wn(r);return a.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(o,r){const a=o.split("/"),l=r.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=oe(a[h],l[h]);if(f!==0)return f}return oe(a.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(o,r){const a=oe(_e(o.latitude),_e(r.latitude));return a!==0?a:oe(_e(o.longitude),_e(r.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return yf(t.arrayValue,e.arrayValue);case 10:return(function(o,r){var w,k,E,P;const a=o.fields||{},l=r.fields||{},h=(w=a[Zl])==null?void 0:w.arrayValue,f=(k=l[Zl])==null?void 0:k.arrayValue,g=oe(((E=h==null?void 0:h.values)==null?void 0:E.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return g!==0?g:yf(h,f)})(t.mapValue,e.mapValue);case 11:return(function(o,r){if(o===Br.mapValue&&r===Br.mapValue)return 0;if(o===Br.mapValue)return 1;if(r===Br.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),h=r.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const w=Yl(l[g],f[g]);if(w!==0)return w;const k=us(a[l[g]],h[f[g]]);if(k!==0)return k}return oe(l.length,f.length)})(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function gf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=qn(t),i=qn(e),s=oe(n.seconds,i.seconds);return s!==0?s:oe(n.nanos,i.nanos)}function yf(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const o=us(n[s],i[s]);if(o)return o}return oe(n.length,i.length)}function hs(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const i=qn(n);return`time(${i.seconds},${i.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Wn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return K.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let i="[",s=!0;for(const o of n.values||[])s?s=!1:i+=",",i+=ed(o);return i+"]"})(t.arrayValue):"mapValue"in t?(function(n){const i=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const r of i)o?o=!1:s+=",",s+=`${r}:${ed(n.fields[r])}`;return s+"}"})(t.mapValue):X(61005,{value:t})}function ca(t){switch(Gn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yc(t);return e?16+ca(e):16;case 5:return 2*t.stringValue.length;case 6:return Wn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,o)=>s+ca(o)),0)})(t.arrayValue);case 10:case 11:return(function(i){let s=0;return rr(i.fields,((o,r)=>{s+=o.length+ca(r)})),s})(t.mapValue);default:throw X(13486,{value:t})}}function td(t){return!!t&&"integerValue"in t}function ou(t){return!!t&&"arrayValue"in t}function vf(t){return!!t&&"nullValue"in t}function wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _l(t){return!!t&&"mapValue"in t}function pS(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[dS])==null?void 0:i.stringValue)===hS}function yo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return rr(t.mapValue.fields,((n,i)=>e.mapValue.fields[n]=yo(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return{...t}}function fS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===uS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!_l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=et.emptyPath(),i={},s=[];e.forEach(((r,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}r?i[a.lastSegment()]=yo(r):s.push(a.lastSegment())}));const o=this.getFieldsMap(n);this.applyChanges(o,i,s)}delete(e){const n=this.field(e.popLast());_l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];_l(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){rr(n,((s,o)=>e[s]=o));for(const s of i)delete e[s]}clone(){return new xt(yo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,i,s,o,r,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=o,this.data=r,this.documentState=a}static newInvalidDocument(e){return new qe(e,0,Y.min(),Y.min(),Y.min(),xt.empty(),0)}static newFoundDocument(e,n,i,s){return new qe(e,1,n,Y.min(),i,s,0)}static newNoDocument(e,n){return new qe(e,2,n,Y.min(),Y.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,Y.min(),Y.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ua{constructor(e,n){this.position=e,this.inclusive=n}}function bf(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const o=e[s],r=t.position[s];if(o.field.isKeyField()?i=K.comparator(K.fromName(r.referenceValue),n.key):i=us(r,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function _f(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ut(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ba{constructor(e,n="asc"){this.field=e,this.dir=n}}function mS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ry{}class Re extends ry{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new yS(e,n,i):n==="array-contains"?new bS(e,i):n==="in"?new _S(e,i):n==="not-in"?new kS(e,i):n==="array-contains-any"?new TS(e,i):new Re(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new vS(e,i):new wS(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(us(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.matchesComparison(us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends ry{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Bt(e,n)}matches(e){return ay(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ay(t){return t.op==="and"}function cy(t){return gS(t)&&ay(t)}function gS(t){for(const e of t.filters)if(e instanceof Bt)return!1;return!0}function nd(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+hs(t.value);if(cy(t))return t.filters.map((e=>nd(e))).join(",");{const e=t.filters.map((n=>nd(n))).join(",");return`${t.op}(${e})`}}function ly(t,e){return t instanceof Re?(function(i,s){return s instanceof Re&&i.op===s.op&&i.field.isEqual(s.field)&&Ut(i.value,s.value)})(t,e):t instanceof Bt?(function(i,s){return s instanceof Bt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((o,r,a)=>o&&ly(r,s.filters[a])),!0):!1})(t,e):void X(19439)}function dy(t){return t instanceof Re?(function(n){return`${n.field.canonicalString()} ${n.op} ${hs(n.value)}`})(t):t instanceof Bt?(function(n){return n.op.toString()+" {"+n.getFilters().map(dy).join(" ,")+"}"})(t):"Filter"}class yS extends Re{constructor(e,n,i){super(e,n,i),this.key=K.fromName(i.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class vS extends Re{constructor(e,n){super(e,"in",n),this.keys=uy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class wS extends Re{constructor(e,n){super(e,"not-in",n),this.keys=uy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function uy(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((i=>K.fromName(i.referenceValue)))}class bS extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ou(n)&&No(n.arrayValue,this.value)}}class _S extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class kS extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!No(this.value.arrayValue,n)}}class TS extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some((i=>No(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,n=null,i=[],s=[],o=null,r=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=r,this.endAt=a,this.Te=null}}function kf(t,e=null,n=[],i=[],s=null,o=null,r=null){return new CS(t,e,n,i,s,o,r)}function ru(t){const e=ae(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((i=>nd(i))).join(","),n+="|ob:",n+=e.orderBy.map((i=>(function(o){return o.field.canonicalString()+o.dir})(i))).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>hs(i))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>hs(i))).join(",")),e.Te=n}return e.Te}function au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ly(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_f(t.startAt,e.startAt)&&_f(t.endAt,e.endAt)}function id(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n=null,i=[],s=[],o=null,r="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=r,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function SS(t,e,n,i,s,o,r,a){return new vc(t,e,n,i,s,o,r,a)}function cu(t){return new vc(t)}function Tf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IS(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ES(t){return t.collectionGroup!==null}function vo(t){const e=ae(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),n.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let a=new $e(et.comparator);return r.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(a=a.add(h.field))}))})),a})(e).forEach((o=>{n.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Ba(o,i))})),n.has(et.keyField().canonicalString())||e.Ie.push(new Ba(et.keyField(),i))}return e.Ie}function Ot(t){const e=ae(t);return e.Ee||(e.Ee=AS(e,vo(t))),e.Ee}function AS(t,e){if(t.limitType==="F")return kf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Ba(s.field,o)}));const n=t.endAt?new Ua(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Ua(t.startAt.position,t.startAt.inclusive):null;return kf(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function sd(t,e,n){return new vc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wc(t,e){return au(Ot(t),Ot(e))&&t.limitType===e.limitType}function hy(t){return`${ru(Ot(t))}|lt:${t.limitType}`}function Bi(t){return`Query(target=${(function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map((s=>dy(s))).join(", ")}]`),gc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map((s=>(function(r){return`${r.field.canonicalString()} (${r.dir})`})(s))).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map((s=>hs(s))).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map((s=>hs(s))).join(",")),`Target(${i})`})(Ot(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&(function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):K.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)})(t,e)&&(function(i,s){for(const o of vo(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(t,e)&&(function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0})(t,e)&&(function(i,s){return!(i.startAt&&!(function(r,a,l){const h=bf(r,a,l);return r.inclusive?h<=0:h<0})(i.startAt,vo(i),s)||i.endAt&&!(function(r,a,l){const h=bf(r,a,l);return r.inclusive?h>=0:h>0})(i.endAt,vo(i),s))})(t,e)}function xS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function py(t){return(e,n)=>{let i=!1;for(const s of vo(t)){const o=RS(s,e,n);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function RS(t,e,n){const i=t.field.isKeyField()?K.comparator(e.key,n.key):(function(o,r,a){const l=r.data.field(o),h=a.data.field(o);return l!==null&&h!==null?us(l,h):X(42886)})(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){rr(this.inner,((n,i)=>{for(const[s,o]of i)e(s,o)}))}isEmpty(){return rS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=new ke(K.comparator);function Kn(){return $S}const fy=new ke(K.comparator);function lo(...t){let e=fy;for(const n of t)e=e.insert(n.key,n);return e}function PS(t){let e=fy;return t.forEach(((n,i)=>e=e.insert(n,i.overlayedDocument))),e}function fi(){return wo()}function my(){return wo()}function wo(){return new Di((t=>t.toString()),((t,e)=>t.isEqual(e)))}const DS=new $e(K.comparator);function ce(...t){let e=DS;for(const n of t)e=e.add(n);return e}const LS=new $e(oe);function NS(){return LS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function OS(t){return{integerValue:""+t}}/**
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
 */class _c{constructor(){this._=void 0}}function VS(t,e,n){return t instanceof od?(function(s,o){const r={fields:{[iy]:{stringValue:ny},[oy]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&su(o)&&(o=yc(o)),o&&(r.fields[sy]=o),{mapValue:r}})(n,e):t instanceof ja?gy(t,e):t instanceof Ha?yy(t,e):(function(s,o){const r=US(s,o),a=Cf(r)+Cf(s.Ae);return td(r)&&td(s.Ae)?OS(a):MS(s.serializer,a)})(t,e)}function FS(t,e,n){return t instanceof ja?gy(t,e):t instanceof Ha?yy(t,e):n}function US(t,e){return t instanceof rd?(function(i){return td(i)||(function(o){return!!o&&"doubleValue"in o})(i)})(e)?e:{integerValue:0}:null}class od extends _c{}class ja extends _c{constructor(e){super(),this.elements=e}}function gy(t,e){const n=vy(e);for(const i of t.elements)n.some((s=>Ut(s,i)))||n.push(i);return{arrayValue:{values:n}}}class Ha extends _c{constructor(e){super(),this.elements=e}}function yy(t,e){let n=vy(e);for(const i of t.elements)n=n.filter((s=>!Ut(s,i)));return{arrayValue:{values:n}}}class rd extends _c{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Cf(t){return _e(t.integerValue||t.doubleValue)}function vy(t){return ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function BS(t,e){return t.field.isEqual(e.field)&&(function(i,s){return i instanceof ja&&s instanceof ja||i instanceof Ha&&s instanceof Ha?ds(i.elements,s.elements,Ut):i instanceof rd&&s instanceof rd?Ut(i.Ae,s.Ae):i instanceof od&&s instanceof od})(t.transform,e.transform)}class vi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vi}static exists(e){return new vi(void 0,e)}static updateTime(e){return new vi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function la(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lu{}function wy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new HS(t.key,vi.none()):new du(t.key,t.data,vi.none());{const n=t.data,i=xt.empty();let s=new $e(et.comparator);for(let o of e.fields)if(!s.has(o)){let r=n.field(o);r===null&&o.length>1&&(o=o.popLast(),r=n.field(o)),r===null?i.delete(o):i.set(o,r),s=s.add(o)}return new kc(t.key,i,new $n(s.toArray()),vi.none())}}function jS(t,e,n){t instanceof du?(function(s,o,r){const a=s.value.clone(),l=If(s.fieldTransforms,o,r.transformResults);a.setAll(l),o.convertToFoundDocument(r.version,a).setHasCommittedMutations()})(t,e,n):t instanceof kc?(function(s,o,r){if(!la(s.precondition,o))return void o.convertToUnknownDocument(r.version);const a=If(s.fieldTransforms,o,r.transformResults),l=o.data;l.setAll(by(s)),l.setAll(a),o.convertToFoundDocument(r.version,l).setHasCommittedMutations()})(t,e,n):(function(s,o,r){o.convertToNoDocument(r.version).setHasCommittedMutations()})(0,e,n)}function bo(t,e,n,i){return t instanceof du?(function(o,r,a,l){if(!la(o.precondition,r))return a;const h=o.value.clone(),f=Ef(o.fieldTransforms,l,r);return h.setAll(f),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),null})(t,e,n,i):t instanceof kc?(function(o,r,a,l){if(!la(o.precondition,r))return a;const h=Ef(o.fieldTransforms,l,r),f=r.data;return f.setAll(by(o)),f.setAll(h),r.convertToFoundDocument(r.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(t,e,n,i):(function(o,r,a){return la(o.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):a})(t,e,n)}function Sf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ds(i,s,((o,r)=>BS(o,r)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class du extends lu{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kc extends lu{constructor(e,n,i,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function by(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function If(t,e,n){const i=new Map;ye(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const o=t[s],r=o.transform,a=e.data.field(o.field);i.set(o.field,FS(r,a,n[s]))}return i}function Ef(t,e,n){const i=new Map;for(const s of t){const o=s.transform,r=n.data.field(s.field);i.set(s.field,VS(o,r,e))}return i}class HS extends lu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&jS(o,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=bo(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=bo(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=my();return this.mutations.forEach((s=>{const o=e.get(s.key),r=o.overlayedDocument;let a=this.applyToLocalView(r,o.mutatedFields);a=n.has(s.key)?null:a;const l=wy(r,a);l!==null&&i.set(s.key,l),r.isValidDocument()||r.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ce())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,((n,i)=>Sf(n,i)))&&ds(this.baseMutations,e.baseMutations,((n,i)=>Sf(n,i)))}}/**
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
 */class qS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,re;function _y(t){if(t===void 0)return rn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Te.OK:return V.OK;case Te.CANCELLED:return V.CANCELLED;case Te.UNKNOWN:return V.UNKNOWN;case Te.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Te.INTERNAL:return V.INTERNAL;case Te.UNAVAILABLE:return V.UNAVAILABLE;case Te.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Te.NOT_FOUND:return V.NOT_FOUND;case Te.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Te.ABORTED:return V.ABORTED;case Te.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Te.DATA_LOSS:return V.DATA_LOSS;default:return X(39323,{code:t})}}(re=Te||(Te={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GS(){return new TextEncoder}/**
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
 */const KS=new Nn([4294967295,4294967295],0);function Af(t){const e=GS().encode(t),n=new qg;return n.update(e),new Uint8Array(n.digest())}function xf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Nn([n,i],0),new Nn([s,o],0)]}class uu{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(i<0)throw new uo(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Nn.fromNumber(this.ge)}ye(e,n,i){let s=e.add(n.multiply(Nn.fromNumber(i)));return s.compare(KS)===1&&(s=new Nn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Af(e),[i,s]=xf(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);if(!this.we(r))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),r=new uu(o,s,n);return i.forEach((a=>r.insert(a))),r}insert(e){if(this.ge===0)return;const n=Af(e),[i,s]=xf(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);this.be(r)}}be(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,i,s,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,ar.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Tc(Y.min(),s,new ke(oe),Kn(),ce())}}class ar{constructor(e,n,i,s,o){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ar(i,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,i,s){this.Se=e,this.removedTargetIds=n,this.key=i,this.De=s}}class ky{constructor(e,n){this.targetId=e,this.Ce=n}}class Ty{constructor(e,n,i=Be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Rf{constructor(){this.ve=0,this.Fe=$f(),this.Me=Be.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),i=ce();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:X(38017,{changeType:o})}})),new ar(this.Me,this.xe,e,n,i)}Ke(){this.Oe=!1,this.Fe=$f()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class QS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Kn(),this.He=jr(),this.Je=jr(),this.Ze=new ke(oe)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:X(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((i,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,i=e.Ce.count,s=this.ot(n);if(s){const o=s.target;if(id(o))if(i===0){const r=new K(o.path);this.et(n,r,qe.newNoDocument(r,Y.min()))}else ye(i===1,20013,{expectedCount:i});else{const r=this._t(n);if(r!==i){const a=this.ut(e),l=a?this.ct(a,e,r):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let r,a;try{r=Wn(i).toUint8Array()}catch(l){if(l instanceof ty)return Ei("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new uu(r,s,o)}catch(l){return Ei(l instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach((o=>{const r=this.Ge.ht(),a=`projects/${r.projectId}/databases/${r.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.et(n,o,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((o,r)=>{const a=this.ot(r);if(a){if(o.current&&id(a.target)){const l=new K(a.target.path);this.It(l).has(r)||this.Et(r,l)||this.et(r,l,qe.newNoDocument(l,e))}o.Be&&(n.set(r,o.ke()),o.Ke())}}));let i=ce();this.Je.forEach(((o,r)=>{let a=!0;r.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(o))})),this.je.forEach(((o,r)=>r.setReadTime(e)));const s=new Tc(e,n,this.Ze,this.je,i);return this.je=Kn(),this.He=jr(),this.Je=jr(),this.Ze=new ke(oe),s}Ye(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,i),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Rf,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new $e(oe),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new $e(oe),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Rf),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function jr(){return new ke(K.comparator)}function $f(){return new ke(K.comparator)}const JS={asc:"ASCENDING",desc:"DESCENDING"},YS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XS={and:"AND",or:"OR"};class ZS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ad(t,e){return t.useProto3Json||gc(e)?e:{value:e}}function eI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Xi(t){return ye(!!t,49232),Y.fromTimestamp((function(n){const i=qn(n);return new Ce(i.seconds,i.nanos)})(t))}function nI(t,e){return cd(t,e).canonicalString()}function cd(t,e){const n=(function(s){return new ge(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Cy(t){const e=ge.fromString(t);return ye(xy(e),10190,{key:e.toString()}),e}function kl(t,e){const n=Cy(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Iy(n))}function Sy(t,e){return nI(t.databaseId,e)}function iI(t){const e=Cy(t);return e.length===4?ge.emptyPath():Iy(e)}function Pf(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Iy(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function sI(t,e){let n;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(h,f){return h.useProto3Json?(ye(f===void 0||typeof f=="string",58123),Be.fromBase64String(f||"")):(ye(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Be.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),r=e.targetChange.cause,a=r&&(function(h){const f=h.code===void 0?V.UNKNOWN:_y(h.code);return new q(f,h.message||"")})(r);n=new Ty(i,s,o,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=kl(t,i.document.name),o=Xi(i.document.updateTime),r=i.document.createTime?Xi(i.document.createTime):Y.min(),a=new xt({mapValue:{fields:i.document.fields}}),l=qe.newFoundDocument(s,o,r,a),h=i.targetIds||[],f=i.removedTargetIds||[];n=new da(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=kl(t,i.document),o=i.readTime?Xi(i.readTime):Y.min(),r=qe.newNoDocument(s,o),a=i.removedTargetIds||[];n=new da([],a,r.key,r)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=kl(t,i.document),o=i.removedTargetIds||[];n=new da([],o,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,r=new WS(s,o),a=i.targetId;n=new ky(a,r)}}return n}function oI(t,e){return{documents:[Sy(t,e.path)]}}function rI(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Sy(t,s);const o=(function(h){if(h.length!==0)return Ay(Bt.create(h,"and"))})(e.filters);o&&(n.structuredQuery.where=o);const r=(function(h){if(h.length!==0)return h.map((f=>(function(w){return{field:ji(w.field),direction:lI(w.dir)}})(f)))})(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=ad(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function aI(t){let e=iI(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ye(i===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=(function(g){const w=Ey(g);return w instanceof Bt&&cy(w)?w.getFilters():[w]})(n.where));let r=[];n.orderBy&&(r=(function(g){return g.map((w=>(function(E){return new Ba(Hi(E.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(w)))})(n.orderBy));let a=null;n.limit&&(a=(function(g){let w;return w=typeof g=="object"?g.value:g,gc(w)?null:w})(n.limit));let l=null;n.startAt&&(l=(function(g){const w=!!g.before,k=g.values||[];return new Ua(k,w)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const w=!g.before,k=g.values||[];return new Ua(k,w)})(n.endAt)),SS(e,s,r,o,a,"F",l,h)}function cI(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ey(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Hi(n.unaryFilter.field);return Re.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Hi(n.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Hi(n.unaryFilter.field);return Re.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Hi(n.unaryFilter.field);return Re.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Re.create(Hi(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Bt.create(n.compositeFilter.filters.map((i=>Ey(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(n.compositeFilter.op))})(t):X(30097,{filter:t})}function lI(t){return JS[t]}function dI(t){return YS[t]}function uI(t){return XS[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Hi(t){return et.fromServerFormat(t.fieldPath)}function Ay(t){return t instanceof Re?(function(n){if(n.op==="=="){if(wf(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if(vf(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wf(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if(vf(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:dI(n.op),value:n.value}}})(t):t instanceof Bt?(function(n){const i=n.getFilters().map((s=>Ay(s)));return i.length===1?i[0]:{compositeFilter:{op:uI(n.op),filters:i}}})(t):X(54877,{filter:t})}function xy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,i,s,o=Y.min(),r=Y.min(),a=Be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.yt=e}}function pI(t){const e=aI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(){this.Sn=new mI}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(zn.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class mI{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new $e(ge.comparator),o=!s.has(i);return this.index[n]=s.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new $e(ge.comparator)).toArray()}}/**
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
 */const Df={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ry=41943040;class st{static withCacheSize(e){return new st(e,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st.DEFAULT_COLLECTION_PERCENTILE=10,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,st.DEFAULT=new st(Ry,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),st.DISABLED=new st(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Lf="LruGarbageCollector",gI=1048576;function Nf([t,e],[n,i]){const s=oe(t,n);return s===0?oe(e,i):s}class yI{constructor(e){this.Pr=e,this.buffer=new $e(Nf),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Nf(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vI{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){j(Lf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$s(n)?j(Lf,"Ignoring IndexedDB error during garbage collection: ",n):await fc(n)}await this.Ar(3e5)}))}}class wI{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((i=>Math.floor(n/100*i)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(mc.ce);const i=new yI(n);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,n,i){return this.Vr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Df)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Df):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let i,s,o,r,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,r=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,a=Date.now(),this.removeTargets(e,i,n)))).next((g=>(o=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(h=Date.now(),Ui()<=ie.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${r-f}ms
	Determined least recently used ${s} in `+(a-r)+`ms
	Removed ${o} targets in `+(l-a)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g}))))}}function bI(t,e){return new wI(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.changes=new Di((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(i!==null&&bo(i.mutation,s,$n.empty(),Ce.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.getLocalViewOfDocuments(e,i,ce()).next((()=>i))))}getLocalViewOfDocuments(e,n,i=ce()){const s=fi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,i).next((o=>{let r=lo();return o.forEach(((a,l)=>{r=r.insert(a,l.overlayedDocument)})),r}))))}getOverlayedDocuments(e,n){const i=fi();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,ce())))}populateOverlays(e,n,i){const s=[];return i.forEach((o=>{n.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((r,a)=>{n.set(r,a)}))}))}computeViews(e,n,i,s){let o=Kn();const r=wo(),a=(function(){return wo()})();return n.forEach(((l,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof kc)?o=o.insert(h.key,h):f!==void 0?(r.set(h.key,f.mutation.getFieldMask()),bo(f.mutation,h,f.mutation.getFieldMask(),Ce.now())):r.set(h.key,$n.empty())})),this.recalculateAndSaveOverlays(e,o).next((l=>(l.forEach(((h,f)=>r.set(h,f))),n.forEach(((h,f)=>a.set(h,new kI(f,r.get(h)??null)))),a)))}recalculateAndSaveOverlays(e,n){const i=wo();let s=new ke(((r,a)=>r-a)),o=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((r=>{for(const a of r)a.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=i.get(l)||$n.empty();f=a.applyToLocalView(h,f),i.set(l,f);const g=(s.get(a.batchId)||ce()).add(l);s=s.insert(a.batchId,g)}))})).next((()=>{const r=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,g=my();f.forEach((w=>{if(!o.has(w)){const k=wy(n.get(w),i.get(w));k!==null&&g.set(w,k),o=o.add(w)}})),r.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(r)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,n,i,s){return IS(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ES(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next((o=>{const r=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-o.size):L.resolve(fi());let a=Po,l=o;return r.next((h=>L.forEach(h,((f,g)=>(a<g.largestBatchId&&(a=g.largestBatchId),o.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((w=>{l=l.insert(f,w)}))))).next((()=>this.populateOverlays(e,h,o))).next((()=>this.computeViews(e,l,h,ce()))).next((f=>({batchId:a,changes:PS(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next((i=>{let s=lo();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const o=n.collectionGroup;let r=lo();return this.indexManager.getCollectionParents(e,o).next((a=>L.forEach(a,(l=>{const h=(function(g,w){return new vc(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((f=>{f.forEach(((g,w)=>{r=r.insert(g,w)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,n,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next((r=>(o=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,o,s)))).next((r=>{o.forEach(((l,h)=>{const f=h.getKey();r.get(f)===null&&(r=r.insert(f,qe.newInvalidDocument(f)))}));let a=lo();return r.forEach(((l,h)=>{const f=o.get(l);f!==void 0&&bo(f.mutation,h,$n.empty(),Ce.now()),bc(n,h)&&(a=a.insert(l,h))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Xi(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:pI(s.bundledQuery),readTime:Xi(s.readTime)}})(n)),L.resolve()}}/**
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
 */class SI{constructor(){this.overlays=new ke(K.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=fi();return L.forEach(n,(s=>this.getOverlay(e,s).next((o=>{o!==null&&i.set(s,o)})))).next((()=>i))}saveOverlays(e,n,i){return i.forEach(((s,o)=>{this.bt(e,n,o)})),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=fi(),o=n.length+1,r=new K(n.child("")),a=this.overlays.getIteratorFrom(r);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let o=new ke(((h,f)=>h-f));const r=this.overlays.getIterator();for(;r.hasNext();){const h=r.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let f=o.get(h.largestBatchId);f===null&&(f=fi(),o=o.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=fi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>a.set(h,f))),!(a.size()>=s)););return L.resolve(a)}bt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const r=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,r)}this.overlays=this.overlays.insert(i.key,new qS(n,i));let o=this.Lr.get(n);o===void 0&&(o=ce(),this.Lr.set(n,o)),this.Lr.set(n,o.add(i.key))}}/**
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
 */class II{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.kr=new $e(Ne.Kr),this.qr=new $e(Ne.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const i=new Ne(e,n);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,n){e.forEach((i=>this.addReference(i,n)))}removeReference(e,n){this.Wr(new Ne(e,n))}Qr(e,n){e.forEach((i=>this.removeReference(i,n)))}Gr(e){const n=new K(new ge([])),i=new Ne(n,e),s=new Ne(n,e+1),o=[];return this.qr.forEachInRange([i,s],(r=>{this.Wr(r),o.push(r.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new ge([])),i=new Ne(n,e),s=new Ne(n,e+1);let o=ce();return this.qr.forEachInRange([i,s],(r=>{o=o.add(r.key)})),o}containsKey(e){const n=new Ne(e,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Ne{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||oe(e.Hr,n.Hr)}static Ur(e,n){return oe(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new $e(Ne.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new zS(o,n,i,s);this.mutationQueue.push(r);for(const a of s)this.Jr=this.Jr.add(new Ne(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(r)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Xr(i),o=s<0?0:s;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?iS:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Ne(n,0),s=new Ne(n,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([i,s],(r=>{const a=this.Zr(r.Hr);o.push(a)})),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new $e(oe);return n.forEach((s=>{const o=new Ne(s,0),r=new Ne(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,r],(a=>{i=i.add(a.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let o=i;K.isDocumentKey(o)||(o=o.child(""));const r=new Ne(new K(o),0);let a=new $e(oe);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(a=a.add(l.Hr)),!0)}),r),L.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ye(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(n.mutations,(s=>{const o=new Ne(s.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,n){const i=new Ne(n,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.ti=e,this.docs=(function(){return new ke(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),o=s?s.size:0,r=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:r}),this.size+=r-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let i=Kn();return n.forEach((s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():qe.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let o=Kn();const r=n.path,a=new K(r.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!r.isPrefixOf(h.path))break;h.path.length>r.length+1||ZC(XC(f),i)<=0||(s.has(f.key)||bc(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,n,i,s){X(9500)}ni(e,n){return L.forEach(this.docs,(i=>n(i)))}newChangeBuffer(e){return new xI(this)}getSize(e){return L.resolve(this.size)}}class xI extends _I{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.persistence=e,this.ri=new Di((n=>ru(n)),au),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new hu,this.targetCount=0,this.oi=ps._r()}forEachTarget(e,n){return this.ri.forEach(((i,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const o=[];return this.ri.forEach(((r,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.ri.delete(r),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),L.waitFor(o).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.ri.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.si.$r(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach((r=>{o.push(s.markPotentiallyOrphaned(e,r))})),L.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.si.jr(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n){this._i={},this.overlays={},this.ai=new mc(0),this.ui=!1,this.ui=!0,this.ci=new II,this.referenceDelegate=e(this),this.li=new RI(this),this.indexManager=new fI,this.remoteDocumentCache=(function(s){return new AI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new hI(n),this.Pi=new CI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this._i[e.toKey()];return i||(i=new EI(n,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,i){j("MemoryPersistence","Starting transaction:",e);const s=new $I(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(e,n){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,n))))}}class $I extends tS{constructor(e){super(),this.currentSequenceNumber=e}}class pu{constructor(e){this.persistence=e,this.Ri=new hu,this.Ai=null}static Vi(e){return new pu(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>i.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((o=>{o||n.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class za{constructor(e,n){this.persistence=e,this.fi=new Di((i=>sS(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=bI(this,n)}static Vi(e,n){return new za(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>n.next((s=>i+s))))}pr(e){let n=0;return this.mr(e,(i=>{n++})).next((()=>n))}mr(e,n){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((o=>o?L.resolve():n(s)))))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,(r=>this.wr(e,r,n).next((a=>{a||(i++,o.removeEntry(r,Y.min()))})))).next((()=>o.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ca(e.data.value)),n}wr(e,n,i){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Ts=i,this.Is=s}static Es(e,n){let i=ce(),s=ce();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new fu(e,n.fromCache,i,s)}}/**
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
 */class PI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return y_()?8:nS(Ge())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,s){const o={result:null};return this.gs(e,n).next((r=>{o.result=r})).next((()=>{if(!o.result)return this.ps(e,n,s,i).next((r=>{o.result=r}))})).next((()=>{if(o.result)return;const r=new PI;return this.ys(e,n,r).next((a=>{if(o.result=a,this.As)return this.ws(e,n,r,a.size)}))})).next((()=>o.result))}ws(e,n,i,s){return i.documentReadCount<this.Vs?(Ui()<=ie.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Ui()<=ie.DEBUG&&j("QueryEngine","Query:",Bi(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Ui()<=ie.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(n))):L.resolve())}gs(e,n){if(Tf(n))return L.resolve(null);let i=Ot(n);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=sd(n,null,"F"),i=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next((o=>{const r=ce(...o);return this.fs.getDocuments(e,r).next((a=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(n,a);return this.Ss(n,h,r,l.readTime)?this.gs(e,sd(n,null,"F")):this.Ds(e,h,n,l)}))))})))))}ps(e,n,i,s){return Tf(n)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,i).next((o=>{const r=this.bs(n,o);return this.Ss(n,r,i,s)?L.resolve(null):(Ui()<=ie.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Bi(n)),this.Ds(e,r,n,YC(s,Po)).next((a=>a)))}))}bs(e,n){let i=new $e(py(e));return n.forEach(((s,o)=>{bc(e,o)&&(i=i.add(o))})),i}Ss(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,n,i){return Ui()<=ie.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Bi(n)),this.fs.getDocumentsMatchingQuery(e,n,zn.min(),i)}Ds(e,n,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((o=>(n.forEach((r=>{o=o.insert(r.key,r)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="LocalStore",LI=3e8;class NI{constructor(e,n,i,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ke(oe),this.Fs=new Di((o=>ru(o)),au),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function MI(t,e,n,i){return new NI(t,e,n,i)}async function Py(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next((o=>(s=o,n.Os(e),n.mutationQueue.getAllMutationBatches(i)))).next((o=>{const r=[],a=[];let l=ce();for(const h of s){r.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of o){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:r,addedBatchIds:a})))}))}))}function Dy(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function OI(t,e){const n=ae(t),i=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const r=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach(((f,g)=>{const w=s.get(g);if(!w)return;a.push(n.li.removeMatchingKeys(o,f.removedDocuments,g).next((()=>n.li.addMatchingKeys(o,f.addedDocuments,g))));let k=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Be.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,i)),s=s.insert(g,k),(function(P,$,D){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=LI?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(w,k,f)&&a.push(n.li.updateTargetData(o,k))}));let l=Kn(),h=ce();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))})),a.push(VI(o,r,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!i.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(o).next((g=>n.li.setTargetsMetadata(o,o.currentSequenceNumber,i)));a.push(f)}return L.waitFor(a).next((()=>r.apply(o))).next((()=>n.localDocuments.getLocalViewOfDocuments(o,l,h))).next((()=>l))})).then((o=>(n.vs=s,o)))}function VI(t,e,n){let i=ce(),s=ce();return n.forEach((o=>i=i.add(o))),e.getEntries(t,i).next((o=>{let r=Kn();return n.forEach(((a,l)=>{const h=o.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),r=r.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),r=r.insert(a,l)):j(mu,"Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)})),{Bs:r,Ls:s}}))}function FI(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return n.li.getTargetData(i,e).next((o=>o?(s=o,L.resolve(s)):n.li.allocateTargetId(i).next((r=>(s=new Pn(e,r,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(e,i.targetId)),i}))}async function ld(t,e,n){const i=ae(t),s=i.vs.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,(r=>i.persistence.referenceDelegate.removeTarget(r,s)))}catch(r){if(!$s(r))throw r;j(mu,`Failed to update sequence numbers for target ${e}: ${r}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Mf(t,e,n){const i=ae(t);let s=Y.min(),o=ce();return i.persistence.runTransaction("Execute query","readwrite",(r=>(function(l,h,f){const g=ae(l),w=g.Fs.get(f);return w!==void 0?L.resolve(g.vs.get(w)):g.li.getTargetData(h,f)})(i,r,Ot(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(r,a.targetId).next((l=>{o=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(r,e,n?s:Y.min(),n?o:ce()))).next((a=>(UI(i,xS(e),a),{documents:a,ks:o})))))}function UI(t,e,n){let i=t.Ms.get(e)||Y.min();n.forEach(((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)})),t.Ms.set(e,i)}class Of{constructor(){this.activeTargetIds=NS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BI{constructor(){this.vo=new Of,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,i){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Of,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="ConnectivityMonitor";class Ff{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){j(Vf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){j(Vf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Hr=null;function dd(){return Hr===null?Hr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hr++,"0x"+Hr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="RestConnection",HI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class zI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Fa?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,n,i,s,o){const r=dd(),a=this.Qo(e,n.toUriEncodedString());j(Tl,`Sending RPC '${e}' ${r}:`,a,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,o);const{host:h}=new URL(a),f=Xn(h);return this.zo(e,a,l,i,f).then((g=>(j(Tl,`Received RPC '${e}' ${r}: `,g),g)),(g=>{throw Ei(Tl,`RPC '${e}' ${r} failed with error: `,g,"url: ",a,"request:",i),g}))}jo(e,n,i,s,o,r){return this.Wo(e,n,i,s,o)}Go(e,n,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Rs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,o)=>e[o]=s)),i&&i.headers.forEach(((s,o)=>e[o]=s))}Qo(e,n){const i=HI[e];let s=`${this.qo}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection",so=(t,e,n)=>{t.listen(e,(i=>{try{n(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Zi extends zI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Zi.c_){const e=Qg();so(e,Kg.STAT_EVENT,(n=>{n.stat===Jl.PROXY?j(He,"STAT_EVENT: detected buffering proxy"):n.stat===Jl.NOPROXY&&j(He,"STAT_EVENT: detected no buffering proxy")})),Zi.c_=!0}}zo(e,n,i,s,o){const r=dd();return new Promise(((a,l)=>{const h=new Wg;h.setWithCredentials(!0),h.listenOnce(Gg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case ra.NO_ERROR:const g=h.getResponseJson();j(He,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(g)),a(g);break;case ra.TIMEOUT:j(He,`RPC '${e}' ${r} timed out`),l(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case ra.HTTP_ERROR:const w=h.getStatus();if(j(He,`RPC '${e}' ${r} failed with status:`,w,"response text:",h.getResponseText()),w>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const E=k==null?void 0:k.error;if(E&&E.status&&E.message){const P=(function(D){const N=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN})(E.status);l(new q(P,E.message))}else l(new q(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new q(V.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:r,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{j(He,`RPC '${e}' ${r} completed.`)}}));const f=JSON.stringify(s);j(He,`RPC '${e}' ${r} sending request:`,s),h.send(n,"POST",f,i,15)}))}T_(e,n,i){const s=dd(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const h=o.join("");j(He,`Creating RPC '${e}' stream ${s}: ${h}`,a);const f=r.createWebChannel(h,a);this.I_(f);let g=!1,w=!1;const k=new qI({Ho:E=>{w?j(He,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(g||(j(He,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),j(He,`RPC '${e}' stream ${s} sending:`,E),f.send(E))},Jo:()=>f.close()});return so(f,co.EventType.OPEN,(()=>{w||(j(He,`RPC '${e}' stream ${s} transport opened.`),k.i_())})),so(f,co.EventType.CLOSE,(()=>{w||(w=!0,j(He,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(f))})),so(f,co.EventType.ERROR,(E=>{w||(w=!0,Ei(He,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),k.o_(new q(V.UNAVAILABLE,"The operation could not be completed")))})),so(f,co.EventType.MESSAGE,(E=>{var P;if(!w){const $=E.data[0];ye(!!$,16349);const D=$,N=(D==null?void 0:D.error)||((P=D[0])==null?void 0:P.error);if(N){j(He,`RPC '${e}' stream ${s} received error:`,N);const B=N.status;let F=(function(I){const v=Te[I];if(v!==void 0)return _y(v)})(B),z=N.message;B==="NOT_FOUND"&&z.includes("database")&&z.includes("does not exist")&&z.includes(this.databaseId.database)&&Ei(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),F===void 0&&(F=V.INTERNAL,z="Unknown error status: "+B+" with message "+N.message),w=!0,k.o_(new q(F,z)),f.close()}else j(He,`RPC '${e}' stream ${s} received:`,$),k.__($)}})),Zi.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,i){super.Go(e,n,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Jg()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return new Zi(t)}function Cl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t){return new ZS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zi.c_=!1;class Ny{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=n,this.R_=i,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="PersistentStream";class GI{constructor(e,n,i,s,o,r,a,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=o,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ny(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(rn(n.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===n&&this.G_(i,s)}),(i=>{e((()=>{const s=new q(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,n){const i=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return j(Uf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(j(Uf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class KI extends GI{constructor(e,n,i,s,o,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,r),this.serializer=o}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=sI(this.serializer,e),i=(function(o){if(!("targetChange"in o))return Y.min();const r=o.targetChange;return r.targetIds&&r.targetIds.length?Y.min():r.readTime?Xi(r.readTime):Y.min()})(e);return this.listener.J_(n,i)}Z_(e){const n={};n.database=Pf(this.serializer),n.addTarget=(function(o,r){let a;const l=r.target;if(a=id(l)?{documents:oI(o,l)}:{query:rI(o,l).ft},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){a.resumeToken=tI(o,r.resumeToken);const h=ad(o,r.expectedCount);h!==null&&(a.expectedCount=h)}else if(r.snapshotVersion.compareTo(Y.min())>0){a.readTime=eI(o,r.snapshotVersion.toTimestamp());const h=ad(o,r.expectedCount);h!==null&&(a.expectedCount=h)}return a})(this.serializer,e);const i=cI(this.serializer,e);i&&(n.labels=i),this.K_(n)}X_(e){const n={};n.database=Pf(this.serializer),n.removeTarget=e,this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{}class JI extends QI{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,r])=>this.connection.Wo(e,cd(n,i),s,o,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())}))}jo(e,n,i,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.jo(e,cd(n,i),s,r,a,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(V.UNKNOWN,r.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function YI(t,e,n,i){return new JI(t,e,n,i)}class XI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(rn(n),this.aa=!1):j("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="RemoteStore";class ZI{constructor(e,n,i,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((r=>{i.enqueueAndForget((async()=>{lr(this)&&(j(fs,"Restarting streams for network reachability change."),await(async function(l){const h=ae(l);h.Ea.add(4),await cr(h),h.Va.set("Unknown"),h.Ea.delete(4),await Cc(h)})(this))}))})),this.Va=new XI(i,s)}}async function Cc(t){if(lr(t))for(const e of t.Ra)await e(!0)}async function cr(t){for(const e of t.Ra)await e(!1)}function My(t,e){const n=ae(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),wu(n)?vu(n):Ps(n).O_()&&yu(n,e))}function gu(t,e){const n=ae(t),i=Ps(n);n.Ia.delete(e),i.O_()&&Oy(n,e),n.Ia.size===0&&(i.O_()?i.L_():lr(n)&&n.Va.set("Unknown"))}function yu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).Z_(e)}function Oy(t,e){t.da.$e(e),Ps(t).X_(e)}function vu(t){t.da=new QS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.Va.ua()}function wu(t){return lr(t)&&!Ps(t).x_()&&t.Ia.size>0}function lr(t){return ae(t).Ea.size===0}function Vy(t){t.da=void 0}async function eE(t){t.Va.set("Online")}async function tE(t){t.Ia.forEach(((e,n)=>{yu(t,e)}))}async function nE(t,e){Vy(t),wu(t)?(t.Va.ha(e),vu(t)):t.Va.set("Unknown")}async function iE(t,e,n){if(t.Va.set("Online"),e instanceof Ty&&e.state===2&&e.cause)try{await(async function(s,o){const r=o.cause;for(const a of o.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,r),s.Ia.delete(a),s.da.removeTarget(a))})(t,e)}catch(i){j(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Bf(t,i)}else if(e instanceof da?t.da.Xe(e):e instanceof ky?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const i=await Dy(t.localStore);n.compareTo(i)>=0&&await(function(o,r){const a=o.da.Tt(r);return a.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.Ia.get(h);f&&o.Ia.set(h,f.withResumeToken(l.resumeToken,r))}})),a.targetMismatches.forEach(((l,h)=>{const f=o.Ia.get(l);if(!f)return;o.Ia.set(l,f.withResumeToken(Be.EMPTY_BYTE_STRING,f.snapshotVersion)),Oy(o,l);const g=new Pn(f.target,l,h,f.sequenceNumber);yu(o,g)})),o.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(i){j(fs,"Failed to raise snapshot:",i),await Bf(t,i)}}async function Bf(t,e,n){if(!$s(e))throw e;t.Ea.add(1),await cr(t),t.Va.set("Offline"),n||(n=()=>Dy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{j(fs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Cc(t)}))}async function jf(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),j(fs,"RemoteStore received new credentials");const i=lr(n);n.Ea.add(3),await cr(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Cc(n)}async function sE(t,e){const n=ae(t);e?(n.Ea.delete(2),await Cc(n)):e||(n.Ea.add(2),await cr(n),n.Va.set("Unknown"))}function Ps(t){return t.ma||(t.ma=(function(n,i,s){const o=ae(n);return o.sa(),new KI(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(t.datastore,t.asyncQueue,{Zo:eE.bind(null,t),Yo:tE.bind(null,t),t_:nE.bind(null,t),J_:iE.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),wu(t)?vu(t):t.Va.set("Unknown")):(await t.ma.stop(),Vy(t))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((r=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const r=Date.now()+i,a=new bu(e,n,r,s,o);return a.start(i),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fy(t,e){if(rn("AsyncQueue",`${e}: ${t}`),$s(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static emptySet(e){return new es(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||K.comparator(n.key,i.key):(n,i)=>K.comparator(n.key,i.key),this.keyedMap=lo(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,i)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new es;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.ga=new ke(K.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,i)=>{e.push(i)})),e}}class ms{constructor(e,n,i,s,o,r,a,l,h){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=r,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,i,s,o){const r=[];return n.forEach((a=>{r.push({type:0,doc:a})})),new ms(e,n,es.emptySet(n),r,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class rE{constructor(){this.queries=zf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=ae(n),o=s.queries;s.queries=zf(),o.forEach(((r,a)=>{for(const l of a.ba)l.onError(i)}))})(this,new q(V.ABORTED,"Firestore shutting down"))}}function zf(){return new Di((t=>hy(t)),wc)}async function aE(t,e){const n=ae(t);let i=3;const s=e.query;let o=n.queries.get(s);o?!o.Sa()&&e.Da()&&(i=2):(o=new oE,i=e.Da()?0:1);try{switch(i){case 0:o.wa=await n.onListen(s,!0);break;case 1:o.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(r){const a=Fy(r,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,o),o.ba.push(e),e.va(n.onlineState),o.wa&&e.Fa(o.wa)&&_u(n)}async function cE(t,e){const n=ae(t),i=e.query;let s=3;const o=n.queries.get(i);if(o){const r=o.ba.indexOf(e);r>=0&&(o.ba.splice(r,1),o.ba.length===0?s=e.Da()?0:1:!o.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function lE(t,e){const n=ae(t);let i=!1;for(const s of e){const o=s.query,r=n.queries.get(o);if(r){for(const a of r.ba)a.Fa(s)&&(i=!0);r.wa=s}}i&&_u(n)}function dE(t,e,n){const i=ae(t),s=i.queries.get(e);if(s)for(const o of s.ba)o.onError(n);i.queries.delete(e)}function _u(t){t.Ca.forEach((e=>{e.next()}))}var ud,qf;(qf=ud||(ud={})).Ma="default",qf.Cache="cache";class uE{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new ms(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ud.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.key=e}}class By{constructor(e){this.key=e}}class hE{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ce(),this.mutatedKeys=ce(),this.eu=py(e),this.tu=new es(this.eu)}get nu(){return this.Za}ru(e,n){const i=n?n.iu:new Hf,s=n?n.tu:this.tu;let o=n?n.mutatedKeys:this.mutatedKeys,r=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,g)=>{const w=s.get(f),k=bc(this.query,g)?g:null,E=!!w&&this.mutatedKeys.has(w.key),P=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let $=!1;w&&k?w.data.isEqual(k.data)?E!==P&&(i.track({type:3,doc:k}),$=!0):this.su(w,k)||(i.track({type:2,doc:k}),$=!0,(l&&this.eu(k,l)>0||h&&this.eu(k,h)<0)&&(a=!0)):!w&&k?(i.track({type:0,doc:k}),$=!0):w&&!k&&(i.track({type:1,doc:w}),$=!0,(l||h)&&(a=!0)),$&&(k?(r=r.add(k),o=P?o.add(f):o.delete(f)):(r=r.delete(f),o=o.delete(f)))})),this.query.limit!==null)for(;r.size>this.query.limit;){const f=this.query.limitType==="F"?r.last():r.first();r=r.delete(f.key),o=o.delete(f.key),i.track({type:1,doc:f})}return{tu:r,iu:i,Ss:a,mutatedKeys:o}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const r=e.iu.ya();r.sort(((f,g)=>(function(k,E){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:$})}};return P(k)-P(E)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(i),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,r.length!==0||h?{snapshot:new ms(this.query,e.tu,o,r,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Hf,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ce(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const n=[];return e.forEach((i=>{this.Ya.has(i)||n.push(new By(i))})),this.Ya.forEach((i=>{e.has(i)||n.push(new Uy(i))})),n}cu(e){this.Za=e.ks,this.Ya=ce();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ms.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ku="SyncEngine";class pE{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class fE{constructor(e){this.key=e,this.hu=!1}}class mE{constructor(e,n,i,s,o,r){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=r,this.Pu={},this.Tu=new Di((a=>hy(a)),wc),this.Iu=new Map,this.Eu=new Set,this.Ru=new ke(K.comparator),this.Au=new Map,this.Vu=new hu,this.du={},this.mu=new Map,this.fu=ps.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function gE(t,e,n=!0){const i=Wy(t);let s;const o=i.Tu.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await jy(i,e,n,!0),s}async function yE(t,e){const n=Wy(t);await jy(n,e,!0,!1)}async function jy(t,e,n,i){const s=await FI(t.localStore,Ot(e)),o=s.targetId,r=t.sharedClientState.addLocalQueryTarget(o,n);let a;return i&&(a=await vE(t,e,o,r==="current",s.resumeToken)),t.isPrimaryClient&&n&&My(t.remoteStore,s),a}async function vE(t,e,n,i,s){t.pu=(g,w,k)=>(async function(P,$,D,N){let B=$.view.ru(D);B.Ss&&(B=await Mf(P.localStore,$.query,!1).then((({documents:I})=>$.view.ru(I,B))));const F=N&&N.targetChanges.get($.targetId),z=N&&N.targetMismatches.get($.targetId)!=null,ne=$.view.applyChanges(B,P.isPrimaryClient,F,z);return Gf(P,$.targetId,ne.au),ne.snapshot})(t,g,w,k);const o=await Mf(t.localStore,e,!0),r=new hE(e,o.ks),a=r.ru(o.documents),l=ar.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),h=r.applyChanges(a,t.isPrimaryClient,l);Gf(t,n,h.au);const f=new pE(e,n,r);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function wE(t,e,n){const i=ae(t),s=i.Tu.get(e),o=i.Iu.get(s.targetId);if(o.length>1)return i.Iu.set(s.targetId,o.filter((r=>!wc(r,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await ld(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),n&&gu(i.remoteStore,s.targetId),hd(i,s.targetId)})).catch(fc)):(hd(i,s.targetId),await ld(i.localStore,s.targetId,!0))}async function bE(t,e){const n=ae(t),i=n.Tu.get(e),s=n.Iu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),gu(n.remoteStore,i.targetId))}async function Hy(t,e){const n=ae(t);try{const i=await OI(n.localStore,e);e.targetChanges.forEach(((s,o)=>{const r=n.Au.get(o);r&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?r.hu=!0:s.modifiedDocuments.size>0?ye(r.hu,14607):s.removedDocuments.size>0&&(ye(r.hu,42227),r.hu=!1))})),await qy(n,i,e)}catch(i){await fc(i)}}function Wf(t,e,n){const i=ae(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach(((o,r)=>{const a=r.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(r,a){const l=ae(r);l.onlineState=a;let h=!1;l.queries.forEach(((f,g)=>{for(const w of g.ba)w.va(a)&&(h=!0)})),h&&_u(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _E(t,e,n){const i=ae(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Au.get(e),o=s&&s.key;if(o){let r=new ke(K.comparator);r=r.insert(o,qe.newNoDocument(o,Y.min()));const a=ce().add(o),l=new Tc(Y.min(),new Map,new ke(oe),r,a);await Hy(i,l),i.Ru=i.Ru.remove(o),i.Au.delete(e),Tu(i)}else await ld(i.localStore,e,!1).then((()=>hd(i,e,n))).catch(fc)}function hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((i=>{t.Vu.containsKey(i)||zy(t,i)}))}function zy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(gu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Tu(t))}function Gf(t,e,n){for(const i of n)i instanceof Uy?(t.Vu.addReference(i.key,e),kE(t,i)):i instanceof By?(j(ku,"Document no longer in limbo: "+i.key),t.Vu.removeReference(i.key,e),t.Vu.containsKey(i.key)||zy(t,i.key)):X(19791,{wu:i})}function kE(t,e){const n=e.key,i=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(i)||(j(ku,"New document in limbo: "+n),t.Eu.add(i),Tu(t))}function Tu(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(ge.fromString(e)),i=t.fu.next();t.Au.set(i,new fE(n)),t.Ru=t.Ru.insert(n,i),My(t.remoteStore,new Pn(Ot(cu(n.path)),i,"TargetPurposeLimboResolution",mc.ce))}}async function qy(t,e,n){const i=ae(t),s=[],o=[],r=[];i.Tu.isEmpty()||(i.Tu.forEach(((a,l)=>{r.push(i.pu(l,e,n).then((h=>{var f;if((h||n)&&i.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=fu.Es(l.targetId,h);o.push(g)}})))})),await Promise.all(r),i.Pu.J_(s),await(async function(l,h){const f=ae(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(h,(w=>L.forEach(w.Ts,(k=>f.persistence.referenceDelegate.addReference(g,w.targetId,k))).next((()=>L.forEach(w.Is,(k=>f.persistence.referenceDelegate.removeReference(g,w.targetId,k)))))))))}catch(g){if(!$s(g))throw g;j(mu,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const k=f.vs.get(w),E=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(E);f.vs=f.vs.insert(w,P)}}})(i.localStore,o))}async function TE(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){j(ku,"User change. New user:",e.toKey());const i=await Py(n.localStore,e);n.currentUser=e,(function(o,r){o.mu.forEach((a=>{a.forEach((l=>{l.reject(new q(V.CANCELLED,r))}))})),o.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await qy(n,i.Ns)}}function CE(t,e){const n=ae(t),i=n.Au.get(e);if(i&&i.hu)return ce().add(i.key);{let s=ce();const o=n.Iu.get(e);if(!o)return s;for(const r of o){const a=n.Tu.get(r);s=s.unionWith(a.view.nu)}return s}}function Wy(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_E.bind(null,e),e.Pu.J_=lE.bind(null,e.eventManager),e.Pu.yu=dE.bind(null,e.eventManager),e}class qa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ly(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return MI(this.persistence,new DI,e.initialUser,this.serializer)}Cu(e){return new $y(pu.Vi,this.serializer)}Du(e){return new BI}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qa.provider={build:()=>new qa};class SE extends qa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ye(this.persistence.referenceDelegate instanceof za,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new vI(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?st.withCacheSize(this.cacheSizeBytes):st.DEFAULT;return new $y((i=>za.Vi(i,n)),this.serializer)}}class pd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Wf(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=TE.bind(null,this.syncEngine),await sE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rE})()}createDatastore(e){const n=Ly(e.databaseInfo.databaseId),i=WI(e.databaseInfo);return YI(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return(function(i,s,o,r,a){return new ZI(i,s,o,r,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>Wf(this.syncEngine,n,0)),(function(){return Ff.v()?new Ff:new jI})())}createSyncEngine(e,n){return(function(s,o,r,a,l,h,f){const g=new mE(s,o,r,a,l,h);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const o=ae(s);j(fs,"RemoteStore shutting down."),o.Ea.add(5),await cr(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}pd.provider={build:()=>new pd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class IE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="FirestoreClient";class EE{constructor(e,n,i,s,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=Zg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,(async r=>{j(Qn,"Received user=",r.uid),await this.authCredentialListener(r),this.user=r})),this.appCheckCredentials.start(i,(r=>(j(Qn,"Received new app check token=",r),this.appCheckCredentialListener(r,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Fy(n,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Sl(t,e){t.asyncQueue.verifyOperationInProgress(),j(Qn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Py(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Kf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await AE(t);j(Qn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((i=>jf(e.remoteStore,i))),t.setAppCheckTokenChangeListener(((i,s)=>jf(e.remoteStore,s))),t._onlineComponents=e}async function AE(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j(Qn,"Using user provided OfflineComponentProvider");try{await Sl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Ei("Error using user provided cache. Falling back to memory cache: "+n),await Sl(t,new qa)}}else j(Qn,"Using default OfflineComponentProvider"),await Sl(t,new SE(void 0));return t._offlineComponents}async function xE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j(Qn,"Using user provided OnlineComponentProvider"),await Kf(t,t._uninitializedComponentsProvider._online)):(j(Qn,"Using default OnlineComponentProvider"),await Kf(t,new pd))),t._onlineComponents}async function Qf(t){const e=await xE(t),n=e.eventManager;return n.onListen=gE.bind(null,e.syncEngine),n.onUnlisten=wE.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yE.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bE.bind(null,e.syncEngine),n}function RE(t,e,n,i){const s=new IE(i),o=new uE(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>aE(await Qf(t),o))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>cE(await Qf(t),o)))}}/**
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
 */function Gy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="ComponentProvider",Jf=new Map;function PE(t,e,n,i,s){return new cS(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Gy(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firestore.googleapis.com",Yf=!0;class Xf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ky,this.ssl=Yf}else this.host=e.host,this.ssl=e.ssl??Yf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ry;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gI)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gy(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new OC;switch(i.type){case"firstParty":return new BC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const i=Jf.get(n);i&&(j($E,"Removing Datastore"),Jf.delete(n),i.terminate())})(this),Promise.resolve()}}function DE(t,e,n,i={}){var h;t=aa(t,Cu);const s=Xn(e),o=t._getSettings(),r={...o,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Md(`https://${a}`),Od("Firestore",!0)),o.host!==Ky&&o.host!==a&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...o,host:a,ssl:s,emulatorOptions:i};if(!Ti(l,r)&&(t._setSettings(l),i.mockUserToken)){let f,g;if(typeof i.mockUserToken=="string")f=i.mockUserToken,g=ze.MOCK_USER;else{f=zm(i.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new ze(w)}t._authCredentials=new VC(new Xg(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Sc(this.firestore,e,this._query)}}class ct{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(or(n,ct._jsonSchema))return new ct(e,i||null,new K(ge.fromString(n.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:Se("string",ct._jsonSchemaVersion),referencePath:Se("string")};class ts extends Sc{constructor(e,n,i){super(e,n,cu(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new K(e))}withConverter(e){return new ts(this.firestore,e,this._path)}}function wn(t,e,...n){if(t=Ve(t),GC("collection","path",e),t instanceof Cu){const i=ge.fromString(e,...n);return df(i),new ts(t,null,i)}{if(!(t instanceof ct||t instanceof ts))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ge.fromString(e,...n));return df(i),new ts(t.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="AsyncQueue";class em{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ny(this,"async_queue_retry"),this._c=()=>{const i=Cl();i&&j(Zf,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=Cl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Yi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!$s(e))throw e;j(Zf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,rn("INTERNAL UNHANDLED ERROR: ",tm(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=bu.createAndSchedule(this,e,n,i,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&X(47125,{Pc:tm(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,i)=>n.targetTimeMs-i.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function tm(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fd extends Cu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new em,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new em(e),this._firestoreClient=void 0,await e}}}function LE(t,e){const n=typeof t=="object"?t:Ud(),i=typeof t=="string"?t:Fa,s=cc(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Bm("firestore");o&&DE(s,...o)}return s}function NE(t){if(t._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ME(t),t._firestoreClient}function ME(t){var i,s,o,r;const e=t._freezeSettings(),n=PE(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new EE(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Be.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(or(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Se("string",Rt._jsonSchemaVersion),bytes:Se("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Mn._jsonSchemaVersion}}static fromJSON(e){if(or(e,Mn._jsonSchema))return new Mn(e.latitude,e.longitude)}}Mn._jsonSchemaVersion="firestore/geoPoint/1.0",Mn._jsonSchema={type:Se("string",Mn._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
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
 */class On{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:On._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(or(e,On._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new On(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}On._jsonSchemaVersion="firestore/vectorValue/1.0",On._jsonSchema={type:Se("string",On._jsonSchemaVersion),vectorValues:Se("object")};function Jy(t,e,n){if((e=Ve(e))instanceof Qy)return e._internalPath;if(typeof e=="string")return VE(t,e);throw md("Field path arguments must be of type string or ",t)}const OE=new RegExp("[~\\*/\\[\\]]");function VE(t,e,n){if(e.search(OE)>=0)throw md(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Qy(...e.split("."))._internalPath}catch{throw md(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function md(t,e,n,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let r="";return new q(V.INVALID_ARGUMENT,o+t+r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{convertValue(e,n="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return rr(e,((s,o)=>{i[s]=this.convertValue(o,n)})),i}convertVectorValue(e){var i,s,o;const n=(o=(s=(i=e.fields)==null?void 0:i[Zl].arrayValue)==null?void 0:s.values)==null?void 0:o.map((r=>_e(r.doubleValue)));return new On(n)}convertGeoPoint(e){return new Mn(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map((i=>this.convertValue(i,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const i=yc(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=qn(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=ge.fromString(e);ye(xy(i),9688,{name:e});const s=new Lo(i.get(1),i.get(3)),o=new K(i.popFirst(5));return s.isEqual(n)||rn(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */class Yy extends FE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}const nm="@firebase/firestore",im="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){return(function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const o of i)if(o in s&&typeof s[o]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Jy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UE extends Xy{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wi extends Xy{constructor(e,n,i,s,o,r){super(e,n,i,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Jy("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=wi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}wi._jsonSchemaVersion="firestore/documentSnapshot/1.0",wi._jsonSchema={type:Se("string",wi._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class ua extends wi{data(e={}){return super.data(e)}}class ns{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ho(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((i=>{e.call(n,new ua(this._firestore,this._userDataWriter,i.key,i,new ho(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map((a=>{const l=new ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ho(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:r++}}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>o||a.type!==3)).map((a=>{const l=new ua(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ho(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return a.type!==0&&(h=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),f=r.indexOf(a.doc.key)),{type:jE(a.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
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
 */ns._jsonSchemaVersion="firestore/querySnapshot/1.0",ns._jsonSchema={type:Se("string",ns._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};function bn(t,...e){var h,f,g;t=Ve(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||sm(e[i])||(n=e[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(sm(e[i])){const w=e[i];e[i]=(h=w.next)==null?void 0:h.bind(w),e[i+1]=(f=w.error)==null?void 0:f.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let o,r,a;if(t instanceof ct)r=aa(t.firestore,fd),a=cu(t._key.path),o={next:w=>{e[i]&&e[i](HE(r,t,w))},error:e[i+1],complete:e[i+2]};else{const w=aa(t,Sc);r=aa(w.firestore,fd),a=w._query;const k=new Yy(r);o={next:E=>{e[i]&&e[i](new ns(r,k,w,E))},error:e[i+1],complete:e[i+2]},BE(t._query)}const l=NE(r);return RE(l,a,s,o)}function HE(t,e,n){const i=n.docs.get(e._key),s=new Yy(t);return new wi(t,s,e._key,i,new ho(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){MC(Pi),Ci(new jn("firestore",((i,{instanceIdentifier:s,options:o})=>{const r=i.getProvider("app").getImmediate(),a=new fd(new FC(i.getProvider("auth-internal")),new jC(r,i.getProvider("app-check-internal")),lS(r,s),r);return o={useFetchStreams:n,...o},a._setSettings(o),a}),"PUBLIC").setMultipleInstances(!0)),Lt(nm,im,e),Lt(nm,im,"esm2020")})();const _n=LE(Yd);let St=[],mi=null;function zr(){mi&&clearTimeout(mi),mi=setTimeout(()=>{var t;mi=null,(t=U.renderAll)==null||t.call(U)},80)}function zE(t){if(Zy(),!t)return;const e=n=>n.docs.map(i=>({id:i.id,...i.data()}));St.push(bn(wn(_n,`households/${t}/inventory`),n=>{u.inv=e(n),H("synced"),zr()},n=>{console.warn("realtime inv error:",n),H("error")})),St.push(bn(wn(_n,`households/${t}/shopping`),n=>{var i;u.shop=e(n),H("synced"),(i=U.renderShop)==null||i.call(U),zr()},n=>{console.warn("realtime shop error:",n),H("error")})),St.push(bn(wn(_n,`households/${t}/recipes`),n=>{var i;u.recs=e(n),H("synced"),(i=U.renderRecs)==null||i.call(U),zr()},n=>{console.warn("realtime recs error:",n),H("error")})),St.push(bn(wn(_n,`households/${t}/mealplan`),n=>{const i={};e(n).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),u.mp=i,H("synced")},n=>{console.warn("realtime mp error:",n)})),St.push(bn(wn(_n,`households/${t}/settings`),n=>{const i=e(n).find(s=>s.id==="config");i&&(u.cfg={...Ea,...i})},n=>{console.warn("realtime settings error:",n)})),St.push(bn(wn(_n,`households/${t}/cooklog`),n=>{u.cookLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime cooklog error:",n)})),St.push(bn(wn(_n,`households/${t}/wastelog`),n=>{u.wasteLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime wastelog error:",n)})),St.push(bn(wn(_n,`households/${t}/activity`),n=>{u.activity=e(n).sort((i,s)=>new Date(s.timestamp||0)-new Date(i.timestamp||0)).slice(0,10),zr()},n=>{console.warn("realtime activity error:",n)})),H("synced"),console.log("[realtime] Listeners started for household:",t)}function Zy(){mi&&(clearTimeout(mi),mi=null),St.forEach(t=>{try{t()}catch{}}),St=[],console.log("[realtime] All listeners stopped")}const is=[{key:"produce",name:"Produce",emoji:"🥦",keywords:["vegetable","fruit","fresh herb","cucumber","tomato","lettuce","onion","garlic","pepper","carrot","potato","banana","apple","avocado","broccoli","spinach","kale","celery","mushroom","corn","zucchini","squash","cabbage","cauliflower","sweet potato","green bean","asparagus","berry","blueberry","strawberry","raspberry","grape","orange","lemon","lime","mango","pineapple","watermelon","peach","pear","plum","cilantro","parsley","basil","mint","dill","ginger","jalap","scallion","radish","beet","turnip","eggplant","artichoke"]},{key:"personal",name:"Personal Care",emoji:"🧴",keywords:["shampoo","conditioner","lotion","soap","toothpaste","deodorant","vitamins","vitamin","supplement","sunscreen","razor","body wash","face wash","moisturizer","floss","mouthwash","band-aid","bandage","medicine","aspirin","ibuprofen","cotton","tissue","q-tip","cleanser","hair","skin care","personal care"]},{key:"dairy",name:"Dairy, Eggs & Milk",emoji:"🥛",keywords:["milk","cheese","butter","yogurt","cream","egg","dairy","sour cream","cottage cheese","cream cheese","half and half","whipped cream","ghee","curd","paneer","mozzarella","cheddar","parmesan","feta","ricotta","gouda","brie","provolone"]},{key:"meat",name:"Meat & Seafood",emoji:"🥩",keywords:["chicken","beef","pork","fish","salmon","tuna","shrimp","turkey","lamb","meat","steak","bacon","sausage","ground","tilapia","cod","crab","lobster","scallop","clam","mussel","prawn","veal","brisket","ribs","wing","thigh","breast","drumstick","ham","pepperoni","salami","deli"]},{key:"bakery",name:"Bakery & Bread",emoji:"🧁",keywords:["bread","pita","bagel","tortilla","muffin","croissant","roll","loaf","bun","cake","cookie","donut","pastry","naan","flatbread","ciabatta","sourdough","brioche","biscuit","waffle","pancake","english muffin","wrap"]},{key:"frozen",name:"Frozen",emoji:"🧊",keywords:["frozen","ice cream","popsicle","freezer"]},{key:"canned",name:"Canned & Dry Goods",emoji:"🥫",keywords:["can","canned","beans","lentils","chickpeas","soup","broth","stock","tomato paste","tomato sauce","diced tomato","tuna can","sardine","coconut milk","evaporated milk","condensed milk","corn can","peas can","dried"]},{key:"snacks",name:"Snacks & Beverages",emoji:"🍿",keywords:["chips","crackers","popcorn","soda","juice","water","energy drink","gum","candy","snack","pretzel","granola bar","protein bar","trail mix","nuts","dried fruit","chocolate","cookie","tea","coffee","sparkling","kombucha","sports drink","seltzer","lemonade"]},{key:"cleaning",name:"Cleaning & Household",emoji:"🧹",keywords:["detergent","bleach","cleaner","dish soap","sponge","trash bag","paper towel","toilet paper","aluminum foil","plastic wrap","ziplock","ziploc","battery","light bulb","air freshener","laundry","fabric softener","dryer sheet","disinfectant","wipes","broom","mop"]},{key:"grains",name:"Grains, Pasta & Rice",emoji:"🌾",keywords:["rice","pasta","flour","oats","quinoa","cereal","grain","noodle","spaghetti","penne","macaroni","couscous","barley","bulgur","farro","polenta","cornmeal","breadcrumb","pancake mix","oatmeal","granola"]},{key:"pantry",name:"Pantry Staples",emoji:"🏺",keywords:["pantry","shelf stable","canned good","dry good","staple","baking mix","cooking oil","shortening","cornstarch","gelatin","yeast","cocoa","chocolate chip","powdered milk","evaporated","instant","bouillon","broth cube","stock cube"]},{key:"condiments",name:"Condiments & Sauces",emoji:"🫙",keywords:["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","olive oil","vinegar","sauce","condiment","dressing","salsa","bbq sauce","barbecue","teriyaki","sriracha","pesto","hummus","tahini","honey","jam","jelly","peanut butter","almond butter","nutella","syrup","marinade","relish","worcestershire","fish sauce","oyster sauce","chili paste","seasoning","spice","salt","pepper","cumin","paprika","cinnamon","oregano","thyme","turmeric","curry","chili powder","garlic powder","onion powder","baking soda","baking powder","vanilla","sugar","brown sugar","powdered sugar","olive","olives","black olive","green olive","caper","capers","pickle","pickles","gherkin","preserve","marmalade","herb","rosemary","sage","bay leaf","tarragon","chive"]},{key:"other",name:"Other",emoji:"🍳",keywords:[]}],ev=[{label:"Produce",emojis:["🥦","🥕","🧅","🧄","🥔","🍅","🥑","🌽","🥒","🫑","🥬","🥗","🍎","🍊","🍋","🍇","🍓","🫐","🍌","🍑","🥭","🍍"]},{label:"Dairy & Eggs",emojis:["🥛","🧀","🥚","🧈","🍦","🫙"]},{label:"Meat & Seafood",emojis:["🥩","🍗","🥓","🌭","🍖","🐟","🦐","🦞","🦀","🦑"]},{label:"Bakery & Grains",emojis:["🍞","🥐","🥖","🫓","🥨","🧁","🎂","🍰","🌾","🍝","🍜","🍚","🍛"]},{label:"Beverages",emojis:["🥤","🧃","☕","🍵","🧋","🍺","🍷","🥂","💧","🫖"]},{label:"Condiments & Sauces",emojis:["🫙","🧂","🫒","🌶️","🍯","🥫"]},{label:"Snacks",emojis:["🍿","🍪","🍩","🍫","🍬","🍭","🥜","🌰","🥨","🍡"]},{label:"Frozen",emojis:["🧊","🍦","🧇","🥞"]},{label:"Personal Care",emojis:["🧴","🧼","🪥","💊","💉","🩹","🧻","🪒"]},{label:"Cleaning & Household",emojis:["🧹","🧺","🧽","🪣","🗑️","🧯","🔧","🏠"]},{label:"Cultural & Custom",emojis:["🌍","🕌","✡️","🍱","🥘","🫕","🌿","🎋","🏮","📁"]}];ev.flatMap(t=>t.emojis);const bt="📁";let gs=null,Wa=null;function Li(t){if(t.offCategory){const n=Vb(t.offCategory);if(n)return n}if(t.location==="freezer")return"frozen";const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of is)if(n.key!=="other"){for(const i of n.keywords)if(e.includes(i))return n.key}return"other"}function dn(t){return t?Li({name:t,scanTitle:"",category:"",offCategory:""}):"other"}function Ds(){return u.cfg.customPrepCategories||[]}function dr(){const t=Ds();if(!t.length)return is;const e=is.filter(n=>n.key!=="other");for(const n of t)if(e.push({key:n.key,name:n.name,emoji:n.emoji,keywords:[],isCustom:!0}),n.children&&n.children.length>0)for(const i of n.children)e.push({key:i.key,name:i.name,emoji:i.emoji,keywords:[],isCustom:!0,isSubCategory:!0,parentKey:n.key});return e.push(is.find(n=>n.key==="other")),e}function an(t){if(!t)return{name:"Other",emoji:"🍳"};const e=is.find(i=>i.key===t);if(e)return{name:e.name,emoji:e.emoji};const n=Ds().find(i=>i.key===t);return n?{name:n.name,emoji:n.emoji}:{name:"Other",emoji:"🍳"}}function qt(t,e){const{name:n,emoji:i}=an(t);return`<div class="cat-badge" onclick="${e}">${i} ${n} ▼</div>`}function ei(t,e){gs=e,Wa=t;const n=d("catPickerBackdrop"),i=d("catPickerSheet");!n||!i||(qE(),n.classList.add("active"),i.classList.add("active"))}function Su(){const t=d("catPickerBackdrop"),e=d("catPickerSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),gs=null,Wa=null}function qE(){const t=d("catPickerBody");if(!t)return;const e=Ds();let n="";for(const i of is){const s=i.key===Wa;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
      <span class="cat-picker-emoji">${i.emoji}</span>
      <span class="cat-picker-name">${i.name}</span>
      ${s?'<span class="cat-picker-check">✓</span>':""}
    </div>`}if(e.length>0){n+='<div class="cat-picker-divider">Custom</div>';for(const i of e){const s=i.key===Wa;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
        <span class="cat-picker-emoji">${i.emoji}</span>
        <span class="cat-picker-name">${i.name}</span>
        ${s?'<span class="cat-picker-check">✓</span>':""}
      </div>`}}n+=`<div id="catPickerCreateSection">
    <button class="cat-picker-create" onclick="showCreateCustomCategory()">＋ Create custom category</button>
  </div>`,n+=`<div id="catPickerCreateForm" style="display:none">
    <div class="cat-create-form">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="catCreateEmojiBtn" onclick="openCatCreateEmojiPicker(this)">${bt}</button>
        <input class="fi cat-create-input" id="catCreateName" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmCreateCustomCategory()">Add</button>
      </div>
    </div>
  </div>`,t.innerHTML=n}function WE(t){gs&&gs(t),Su()}let Ga=null,gd=null;function ur(t,e,n){Ka(),Ga=n,gd=e||bt;const i=document.createElement("div");i.id="emojiPickerPopup",i.className="emoji-picker-popup";let s="";for(const r of ev){s+=`<div class="emoji-picker-group-label">${r.label}</div>`,s+='<div class="emoji-picker-grid">';for(const a of r.emojis)s+=`<button class="emoji-picker-cell${a===gd?" emoji-picker-selected":""}" onclick="selectEmojiFromPicker('${a}')">${a}</button>`;s+="</div>"}i.innerHTML=s;const o=document.createElement("div");o.id="emojiPickerBackdrop",o.className="emoji-picker-backdrop",o.onclick=()=>Ka(),document.body.appendChild(o),document.body.appendChild(i),GE(i,t),requestAnimationFrame(()=>{o.classList.add("active"),i.classList.add("active")})}function GE(t,e){if(!e)return;const n=e.getBoundingClientRect(),i=window.innerWidth,s=Math.min(i-24,360);t.style.width=s+"px",t.style.left=Math.max(12,(i-s)/2)+"px",n.top>340+16?(t.style.bottom=window.innerHeight-n.top+8+"px",t.style.top="auto"):(t.style.top=n.bottom+8+"px",t.style.bottom="auto")}function KE(t){Ga&&Ga(t),Ka()}function Ka(){const t=document.getElementById("emojiPickerPopup"),e=document.getElementById("emojiPickerBackdrop");t&&t.remove(),e&&e.remove(),Ga=null,gd=null}let ys=bt;function QE(){const t=d("catPickerCreateSection"),e=d("catPickerCreateForm");t&&(t.style.display="none"),e&&(e.style.display="block"),setTimeout(()=>{const n=d("catCreateName");n&&n.focus()},100),ys=bt}function JE(t){ur(t,ys,e=>{ys=e;const n=d("catCreateEmojiBtn");n&&(n.textContent=e)})}function YE(t,e){ys=e,document.querySelectorAll(".cat-emoji-btn").forEach(n=>n.classList.remove("cat-emoji-selected")),t&&t.classList.add("cat-emoji-selected")}async function XE(){const t=d("catCreateName"),e=t?t.value.trim():"";if(!e){b("Please enter a category name");return}const n="custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),i={key:n,name:e,emoji:ys},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await M(`households/${u.hid}/settings/config`,u.cfg),b(`${ys} ${e} category created!`)}catch(o){console.error("Failed to save custom category:",o),b("Failed to save category");return}gs&&(gs(n),Su())}async function tv(t){const e=u.cfg.customPrepCategories||[],n=e.find(i=>i.key===t);if(n&&confirm(`Delete "${n.name}" category? Items will move to Other.`)){u.cfg.customPrepCategories=e.filter(i=>i.key!==t);for(const i of u.inv)i.prepCategory===t&&(i.prepCategory="other",ee(i));for(const i of u.shop)i.prepCategory===t&&(i.prepCategory="other",Oe(i));try{await M(`households/${u.hid}/settings/config`,u.cfg),b(`"${n.name}" category deleted`)}catch(i){console.error("Failed to delete custom category:",i),b("Failed to delete category")}}}async function nv(t,e,n){const s=(u.cfg.customPrepCategories||[]).find(o=>o.key===t);if(s){e&&(s.name=e),n&&(s.emoji=n);try{await M(`households/${u.hid}/settings/config`,u.cfg),b("Category updated")}catch(o){console.error("Failed to rename custom category:",o)}}}async function ZE(t,e){const n=u.shop.find(i=>i.id===t);n&&await Oe({...n,prepCategory:e})}async function iv(t,e){const n=u.inv.find(i=>i.id===t);n&&await ee({...n,prepCategory:e})}async function eA(t,e,n){const s=(u.cfg.customPrepCategories||[]).find(a=>a.key===t);if(!s){b("Parent category not found");return}const r={key:t+"-sub-"+Date.now(),name:e,emoji:n};s.children||(s.children=[]),s.children.push(r);try{await M(`households/${u.hid}/settings/config`,u.cfg),b(`Sub-category "${e}" added`)}catch(a){console.error("Failed to add sub-category:",a),b("Failed to add sub-category")}}async function tA(t,e){const n=u.cfg.customPrepCategories||[],i=n.findIndex(o=>o.key===t);if(i<0)return;const s=i+e;if(!(s<0||s>=n.length)){[n[i],n[s]]=[n[s],n[i]];try{await M(`households/${u.hid}/settings/config`,u.cfg),b("Category reordered")}catch(o){console.error("Failed to reorder category:",o)}}}async function nA(t,e){if(!t||!e||!u.hid)return;const n=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");if(n)try{await M(`households/${u.hid}/productPreferences/${n}`,{prepCategory:e,updatedAt:new Date().toISOString()})}catch(i){console.error("Failed to save product category preference:",i)}}function iA(t){if(!t)return null;const e=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");return u.productPrefs&&u.productPrefs[e]&&u.productPrefs[e].prepCategory||null}function Ic(){return u.inv.filter(t=>!(t.prepCategory||iA(t.name)))}async function sv(t,e){const n=u.inv.find(i=>i.id===t);n&&(await ee({...n,prepCategory:e}),await nA(n.name,e))}const hr=["Bag","Bar","Bottle","Box","Bucket","Bunch","Can","Carton","Clove","Container","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf","Oz","Pack","Piece","Pound","Roll","Tube","Unit"];let yd=!1;function sA(t){if(yd)return;yd=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function oA(){yd=!1}function rA(t){if(!t.brand)return!1;if(t.source==="scan"||t.source==="Barcode")return!0;if(t.source==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}function aA(t){Nd(t);const e=ot(t.expiry),n=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=t.restockThreshold!=null?t.restockThreshold:yr(t.unit),o=!t.doNotRestock&&typeof t.qty=="number"&&t.qty<=s&&t.qty>0,r=o?" low-stock":"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
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
          <div class="iqt">${Bn(t.qty)}${o?'<span class="low-stock-dot" title="Running low"></span>':""}</div>
          <div class="iun">${Dd(t.unit||"Unit",t.qty)}</div>
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
  </div>`}function cA(){}let ui="";function lA(){const t=d("inv-search");ui=t?t.value.trim().toLowerCase():"",Ni()}function dA(t,e){return e?[t.scanTitle||"",t.name||"",t.brand||"",t.note||"",t.location||"",t.unit||""].join(" ").toLowerCase().includes(e):!0}function uA(){const t=d("expiryTimeline");if(!t)return;const e=u.inv.filter(n=>n.expiry).sort((n,i)=>new Date(n.expiry)-new Date(i.expiry));if(!e.length){t.style.display="none",t.innerHTML="";return}t.style.display="flex",t.innerHTML=e.map(n=>{const i=ot(n.expiry),s=i?i.c==="expired"?"exp-tl-red":i.c==="expiring"?"exp-tl-amber":"exp-tl-green":"exp-tl-green",o=i?i.l:"";return`<div class="exp-tl-item" onclick="openInvItemDetail('${n.id}')">
      <div class="exp-tl-dot ${s}"></div>
      <div class="exp-tl-name">${Z(n.scanTitle||n.name)}</div>
      <div class="exp-tl-date">${o}</div>
    </div>`}).join("")}function Ni(){var o;const t=(r,a)=>(r.scanTitle||r.name).localeCompare(a.scanTitle||a.name,void 0,{sensitivity:"base"});let e;ui?e=u.inv.filter(r=>dA(r,ui)).sort(t):e=u.it==="all"?u.inv.slice().sort(t):u.inv.filter(r=>r.location===u.it).sort(t);const n=d("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};ui?n&&(n.textContent=e.length+" result"+(e.length!==1?"s":"")):n&&(n.textContent=e.length+" "+(i[u.it]||"items")),Nv();const s=d("ibody");if(s){if(!e.length){const r=u.it!=="all"||ui,a=ui?`No items matching "${ui}"`:r?`Nothing in your ${((o=i[u.it])==null?void 0:o.replace(" items",""))||"filter"} yet.`:"Your pantry is waiting to be filled.";s.innerHTML=`<div class="es"><div class="ei">🍳</div><p>${a}<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item above to get started</span></p></div>`;return}s.innerHTML=`<div class="ilst">${e.map(aA).join("")}</div>`,u.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),u.selectedIds.has(r.dataset.id)&&r.classList.add("selected")}),sA(s),uA(),Ru()}}function hA(t){ti(t)}async function ti(t){if(u.selectMode)return;const e=u.inv.find(z=>z.id===t);if(!e)return;const n=d("invItemDetailContent");if(!n)return;const i=Nd(e),s=`<div class="item-detail-img-ph" onclick="changeInvEmoji('${e.id}', this)" title="Tap to change emoji">
    <div style="font-size:1.6rem">${i}</div>
  </div>`,o="",r=rA(e),a=e.unit||"Unit",l=hr.map(z=>`<option value="${z}"${z===a?" selected":""}>${z}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:yr(a),f=ot(e.expiry),g=e.scanTitle||e.name,w=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let k=`<div class="item-detail-header">
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
  </div>`;const E=e.prepCategory||Li(e);k+=qt(E,`changeInvCategory('${e.id}')`),k+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:P,frac:$}=Aa(e.qty);k+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${P}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Vl(`inv-frac-${e.id}`,$).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
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
  </div>`;const{whole:D,frac:N}=Aa(h);k+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-thresh-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${D}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Vl(`inv-threshfrac-${e.id}`,N).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,k+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,k+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,n.innerHTML=k;const B=d("invItemDetailBackdrop"),F=d("invItemDetailSheet");B&&B.classList.add("active"),F&&F.classList.add("active")}function Iu(){const t=d("invItemDetailBackdrop"),e=d("invItemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function pA(t){}function fA(t){}async function mA(t){}async function gA(t){u.inv.find(e=>e.id===t),Iu(),ue("adj"),window.deleteWithUndo?window.deleteWithUndo(t,"inv",{onCommit:e=>{const n=ot(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&mC(e.name)}}):(await ir(t),b("Item removed"))}async function yA(t,e){const n=u.inv.find(i=>i.id===u.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await ee({...n,location:t}),Pu(n.name,t))}async function vA(t){const e=u.inv.find(i=>i.id===u.adjId);if(!e)return;const n=Math.max(0,(e.qty||1)+t);n<=0||(d("adjqty").value=n,await ee({...e,qty:n}))}async function wA(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=parseInt(d("adjqty").value);!isNaN(e)&&e>=0&&await ee({...t,qty:e})}async function bA(){const t=u.inv.find(e=>e.id===u.adjId);t&&await ee({...t,expiry:d("adjexp").value||null})}async function _A(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=(d("adjnote").value||"").trim();await ee({...t,note:e||null})}async function kA(){const t=u.inv.find(i=>i.id===u.adjId);if(!t)return;const e=d("adjunit").value;await ee({...t,unit:e}),Du(t.name,e);const n=u.shop.find(i=>i.name.toLowerCase().trim()===t.name.toLowerCase().trim());n&&await Oe({...n,unit:e}),b("Unit updated everywhere",2e3)}async function TA(t){const e=u.inv.find(s=>s.id===u.adjId);if(!e)return;const n=e.restockThreshold!=null?e.restockThreshold:yr(e.unit),i=Math.max(0,n+t);d("adjlowthresh").value=i,await ee({...e,restockThreshold:i})}async function CA(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=parseInt(d("adjlowthresh").value);!isNaN(e)&&e>=0&&await ee({...t,restockThreshold:e})}async function SA(){var n;const t=u.inv.find(i=>i.id===u.adjId);if(!t)return;const e=((n=d("adjdonotrestock"))==null?void 0:n.checked)||!1;await ee({...t,doNotRestock:e})}async function IA(t,e){const n=u.inv.find(o=>o.id===t);if(!n)return;const i={...n,unit:e};n.restockThreshold==null,await ee(i),Du(n.name,e);const s=u.shop.find(o=>o.name.toLowerCase().trim()===n.name.toLowerCase().trim());s&&await Oe({...s,unit:e}),b("Unit updated everywhere",2e3),ti(t)}async function EA(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const i=d(`inv-thresh-${t}`),s=d(`inv-threshfrac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,a=Math.max(0,o+e),l=a+r;i&&(i.value=a),await ee({...n,restockThreshold:Math.max(0,l)})}async function AA(t){const e=u.inv.find(r=>r.id===t);if(!e)return;const n=d(`inv-thresh-${t}`),i=d(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await ee({...e,restockThreshold:Math.max(0,s+o)})}async function xA(t){const e=u.inv.find(r=>r.id===t);if(!e)return;const n=d(`inv-thresh-${t}`),i=d(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0;await ee({...e,restockThreshold:Math.max(0,s+o)})}async function RA(t,e){const n=u.inv.find(i=>i.id===t);n&&await ee({...n,doNotRestock:e})}async function $A(t,e,n){const i=u.inv.find(o=>o.id===t);if(!i)return;const s=d("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(o=>o.classList.remove("sel")),n&&n.classList.add("sel"),await ee({...i,location:e}),Pu(i.name,e)}async function PA(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const i=d(`inv-qty-${t}`),s=d(`inv-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,a=Math.max(0,Math.min(99,o+e)),l=dt(a,r);e<0&&dt(o,r)<=.25||(i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),a===0&&r===0&&s&&(s.value="0.25"),await ee({...n,qty:l}))}async function DA(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-qty-${t}`),i=d(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=dt(s,o);await ee({...e,qty:r})}async function LA(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-qty-${t}`),i=d(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=dt(s,o);o===0&&s===0&&n&&(n.value=1),await ee({...e,qty:r})}async function NA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=d(`inv-expiry-${t}`);await ee({...e,expiry:(n==null?void 0:n.value)||null})}async function MA(t){const e=u.inv.find(n=>n.id===t);e&&(await ee({...e,expiry:null}),ti(t))}async function OA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=new Date().toISOString().split("T")[0];await ee({...e,expiry:n}),ti(t)}async function VA(t){const e=u.inv.find(s=>s.id===t);if(!e)return;const n=d(`inv-note-${t}`),i=((n==null?void 0:n.value)||"").trim();await ee({...e,note:i||null})}function Eu(t){const e=d(`inv-detail-display-${t}`),n=d(`inv-detail-edit-${t}`),i=d(`inv-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function Au(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-detail-name-input-${t}`),i=d(`inv-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await ee(r),e.barcode&&u.hid&&await HA(e.barcode,s),b("✓ Name updated"),ti(t)}function FA(t){Eu(t)}async function UA(t){await Au(t)}function BA(t){Eu(t)}async function jA(t){await Au(t)}async function HA(t,e){if(!u.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`;await M(i,{correctedName:e,updatedAt:new Date().toISOString()})}function zA(t){u.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=d("itab-"+t);e&&e.classList.add("active"),Ni()}async function qA(){const t=d("man").value.trim();if(!t)return;const e=d("mac").value,n=d("mau").value.trim()||"unit",i=Math.max(1,parseInt(d("maq").value)||1),s=d("mae").value||null,o="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await ee({id:o,barcode:o,name:t,brand:"",unit:n,qty:i,location:u.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),d("man").value="",d("maq").value=1,d("mae").value="",d("mabtn").disabled=!0,b(`${t} added!`),ue("madd"),Mu()}function WA(){d("mabtn").disabled=!d("man").value.trim()}function GA(t){const e=d("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function KA(t,e){u.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function QA(){const t=d("imptxt").value.trim();if(!t)return;let e=0,n=0,i="pantry";for(const s of t.split(`
`)){const o=s.toLowerCase();o.includes("fridge")?i="fridge":o.includes("freezer")?i="freezer":o.includes("pantry")&&(i="pantry");const r=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),a=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,f;if(r?(l=r[1].trim(),h=parseFloat(r[2]),f=r[3].trim()):a&&(l=a[1].trim(),h=parseFloat(a[2]),f=(a[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=u.inv.find(k=>k.id===g);await ee({id:g,barcode:g,name:l,brand:"",unit:f||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?n++:e++}}d("imptxt").value="",b(`Imported ${e} new, updated ${n}`),ue("import")}let ha=null,Ec="fridge",Ye=null,pa=!1,po="",fa=!1;function ov(){const t=d("invAddBackdrop"),e=d("invAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),Ec="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(o=>o.classList.remove("sel"));const n=d("invAddLoc-fridge");n&&n.classList.add("sel"),YA();const i=d("invAddCatBadge");i&&(i.style.display="none",i.innerHTML="");const s=d("invAddCatKey");s&&(s.value="",s.dataset.manual=""),setTimeout(()=>{const o=d("invi");o&&(o.value="",o.focus())},150)}function pr(){const t=d("invAddBackdrop"),e=d("invAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),xu()}let _o=1;function JA(){const t=d("invQtyFrac");t&&(t.innerHTML=Ss.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("invQtyUnit");e&&(e.innerHTML=hr.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function YA(){_o=1;const t=d("invQtyVal");t&&(t.textContent="1");const e=d("invQtyFrac");e&&(e.value="0");const n=d("invQtyUnit");n&&(n.value="Unit")}function XA(t){_o=Math.max(1,Math.min(99,_o+t));const e=d("invQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=_o)}function ZA(){const t=d("invQtyFrac");t&&parseFloat(t.value)}function rv(){const t=d("invQtyFrac"),e=d("invQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:dt(_o,n),unit:i}}function ex(){pr(),window.openScanForInventory&&window.openScanForInventory()}function tx(){pr(),cv()}function nx(t,e){Ec=t,document.querySelectorAll("#invAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function ix(){const t=d("invAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("invAddNoteInp");n&&n.focus()}}async function sx(){const t=d("invi"),e=t?t.value.trim():"";if(!e)return;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=rv(),a=i||r.qty,l=d("invAddNoteInp"),h=l?l.value.trim():"",f=await fr(n),g=(f==null?void 0:f.preferredLocation)||Ec,w=r.unit!=="Unit"?r.unit:(f==null?void 0:f.preferredUnit)||"unit",k="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),E=d("invAddCatKey"),P=E&&E.value||dn(n),$={id:k,barcode:k,name:n,brand:"",unit:w,qty:a,location:g,category:Qo({name:n}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:P};h&&($.note=h),ee($),b(`${n} added!`),t&&(t.value=""),l&&(l.value="");const D=d("invAddNoteWrap");D&&(D.style.display="none"),xu(),pr(),Mu()}function ox(){const t=d("invi");t&&rc(t),rx(t?t.value.trim():"")}function rx(t){const e=d("invAddCatBadge"),n=d("invAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=dn(t);e.innerHTML=qt(i,"openInvAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function ax(){const t=d("invAddCatKey"),e=t?t.value:"other";ei(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=d("invAddCatBadge");i&&(i.innerHTML=qt(n,"openInvAddCatPicker()"))})}function cx(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||Li(e);ei(n,async i=>{await iv(t,i),ti(t);const{name:s}=an(i);b(`Category: ${s}`)})}function lx(t,e){const n=u.inv.find(s=>s.id===t);if(!n)return;const i=Nd(n);ur(e,i,async s=>{n.customEmoji=s,await ee(n),ti(t),b(`Emoji: ${s}`)})}async function dx(t){if(!ha||!ha[t])return;const e=ha[t],n=d("invAddNoteInp"),i=n?n.value.trim():"",s=rv(),o=await fr(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),a=s.unit!=="Unit"?s.unit:(o==null?void 0:o.preferredUnit)||"unit",l={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:a,qty:s.qty,location:(o==null?void 0:o.preferredLocation)||Ec,category:e.category||Qo({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(l.note=i),ee(l),b(`Added "${e.name}" ✓`);const h=d("invi");h&&(h.value=""),n&&(n.value="");const f=d("invAddNoteWrap");f&&(f.style.display="none"),xu(),pr()}function xu(){ha=null;const t=d("invSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}function ux(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("invAddMicOpt");e&&(e.style.display="")}function vd(t){const e=d("inv-micstatus");e&&e.classList.toggle("visible",t)}function av(){if(Ye){try{Ye.abort()}catch{}Ye=null}pa=!1,po="",fa=!1,vd(!1)}function cv(){if(pa&&Ye){fa=!0,Ye.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){b("Voice input not supported");return}Ye=new t,Ye.lang="en-US",Ye.interimResults=!0,Ye.maxAlternatives=1,Ye.continuous=!1,po="",pa=!0,vd(!0),Ye.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?po+=o:n+=o}const i=d("invi");i&&(i.value=(po+n).trim())},Ye.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&b("Couldn't hear that — try again")},Ye.onend=async()=>{pa=!1,vd(!1),Ye=null;let e=po.trim();if(!e&&fa){const s=d("invi");e=s?s.value.trim():""}if(fa=!1,!e)return;const n=Mm(e);for(const{name:s}of n){const o=await fr(s),r="itm-"+s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),a=(o==null?void 0:o.preferredLocation)||xa(s);ee({id:r,barcode:r,name:s,brand:"",unit:(o==null?void 0:o.preferredUnit)||"unit",qty:1,location:a,category:Qo({name:s}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),Mu()}if(n.length>1)b(`Added ${n.length} items 🎤`);else{const s=xa(n[0].name);b(`Added "${n[0].name}" to ${s}`)}const i=d("invi");i&&(i.value="")},Ye.start()}async function hx(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?b(`${e.name} added to shopping list 🛒`):b(`${e.name} quantity updated on shopping list 🛒`),Iu()}function Ru(){const t=Ic(),e=d("inv-cat-review-btn"),n=d("inv-cat-review-count");e&&(e.style.display=t.length>0?"inline-flex":"none"),n&&(n.textContent=t.length)}function px(){const t=d("cat-review-body");if(!t)return;const e=Ic();if(!e.length){t.innerHTML=`<div class="es" style="padding:40px 20px"><div class="ei">✅</div>
      <p>All items have confirmed categories!</p></div>`,We("catreview");return}let n=`<div style="padding:0 0 8px;font-size:.82rem;color:var(--mt)">
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
    </div>`}t.innerHTML=n,We("catreview")}function $u(){ue("catreview"),Ni()}async function fx(t,e){await sv(t,e);const n=d(`cat-review-${t}`);n&&(n.style.transition="opacity .3s, max-height .3s",n.style.opacity="0",n.style.maxHeight="0",n.style.overflow="hidden",setTimeout(()=>n.remove(),300)),Ru(),Ic().length===0&&(b("All categories confirmed!"),setTimeout(()=>$u(),600))}function mx(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=Li(e);ei(n,async i=>{await sv(t,i);const s=d(`cat-review-${t}`);s&&(s.style.transition="opacity .3s, max-height .3s",s.style.opacity="0",s.style.maxHeight="0",s.style.overflow="hidden",setTimeout(()=>s.remove(),300)),Ru(),Ic().length===0&&(b("All categories confirmed!"),setTimeout(()=>$u(),600))})}function lv(t){return t?t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function fr(t){if(!u.hid||!t)return null;const e=lv(t);if(!e)return null;try{return await W(`households/${u.hid}/productPreferences/${e}`)||null}catch{return null}}async function dv(t,e){if(!u.hid||!t)return;const n=lv(t);if(n)try{const i=await W(`households/${u.hid}/productPreferences/${n}`)||{};M(`households/${u.hid}/productPreferences/${n}`,{...i,...e,productName:t.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function Pu(t,e){e&&dv(t,{preferredLocation:e})}function Du(t,e){e&&dv(t,{preferredUnit:e})}function Il(t){return t?t.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function Fe(t,e={}){const n=Il(t.name),i=u.shop.find(r=>!r.checked&&Il(r.name)===n);if(!i){const r=u.inv.find(a=>Il(a.name)===n);if(r){const a=r.restockThreshold!=null?r.restockThreshold:Zb(r.unit);if(r.qty>a){const l=r.qty+(r.unit?" "+r.unit:"");if(!confirm(`You already have ${r.name} in Supplies (${l}). Add to shopping list anyway?`))return{action:"skipped",item:t}}}return await Oe(t,e),{action:"new",item:t}}const s=(i.unit||"").trim().toLowerCase(),o=(t.unit||"").trim().toLowerCase();if(s===o){const r=(i.qty||1)+(t.qty||1),a=i.note||t.note||"",l={...i,qty:r};return a&&(l.note=a),await Oe(l,e),{action:"consolidated",item:l,addedQty:t.qty||1}}else{const r=`${Bn(i.qty||1)} ${i.unit||"unit"}`,a=`${Bn(t.qty||1)} ${t.unit||"unit"}`,l=i.consolidatedAmounts?`${i.consolidatedAmounts} + ${a}`:`${r} + ${a}`;return await Oe({...i,consolidatedAmounts:l},e),{action:"consolidated-mixed",item:i}}}let Xe=null,ma=!1,zi="",ga=!1;function gx(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("shopAddMicOpt");e&&(e.style.display="")}function wd(t){const e=d("micstatus");e&&e.classList.toggle("visible",t)}function uv(){if(Xe){try{Xe.abort()}catch{}Xe=null}ma=!1,zi="",ga=!1,wd(!1)}function hv(){if(ma&&Xe){ga=!0,Xe.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){b("Voice input not supported");return}Xe=new t,Xe.lang="en-US",Xe.interimResults=!0,Xe.maxAlternatives=1,Xe.continuous=!1,zi="",ma=!0,wd(!0),Xe.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?zi+=o:n+=o}const i=d("shi");i&&(i.value=(zi+n).trim())},Xe.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&b("Couldn't hear that — try again")},Xe.onend=()=>{let e=(zi||"").trim();if(!e&&ga){const n=d("shi");e=n?n.value.trim():""}if(ma=!1,Xe=null,zi="",ga=!1,wd(!1),e){const n=Mm(e);if(n.length>1)yx(n);else{const{name:s,qty:o}=n[0],r={id:Date.now().toString(),name:s,qty:o,checked:!1,src:"manual"};Fe(r),b(`Added "${s}" 🎤`)}const i=d("shi");i&&(i.value="")}},Xe.start()}function yx(t){Lu=t;const e=d("voiceConfirmBackdrop"),n=d("voiceConfirmSheet");if(!e||!n){t.forEach(({name:o,qty:r})=>{Fe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:o,qty:r,checked:!1,src:"manual"})}),b(`Added ${t.length} items 🎤`);return}const i=d("voiceConfirmList");i&&(i.innerHTML=t.map((o,r)=>`
      <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--b1);cursor:pointer">
        <input type="checkbox" checked data-vi="${r}" style="width:20px;height:20px;accent-color:var(--ac)"/>
        <span style="flex:1;font-size:.92rem;color:var(--tx)">${Z(o.name)}</span>
        ${o.qty>1?`<span style="font-size:.78rem;color:var(--mt)">×${o.qty}</span>`:""}
      </label>
    `).join(""));const s=d("voiceConfirmCount");s&&(s.textContent=`Adding ${t.length} items:`),e.classList.add("active"),n.classList.add("active")}let Lu=[];async function vx(){const n=[...document.querySelectorAll("#voiceConfirmList input[type=checkbox]:checked")].map(i=>parseInt(i.dataset.vi,10)).map(i=>Lu[i]).filter(Boolean);for(const{name:i,qty:s}of n)await Fe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:i,qty:s,checked:!1,src:"manual"});b(`Added ${n.length} item${n.length>1?"s":""} 🎤`),pv()}function pv(){Lu=[];const t=d("voiceConfirmBackdrop"),e=d("voiceConfirmSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function wx(t){if(!t.brand)return!1;if(t.src==="scan")return!0;if(t.src==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}let ya=new Set;function bx(){if(ya=new Set,!nt.length&&!jt.length)return;const t=(u.shop||[]).filter(e=>!e.checked);if(t.length)for(const e of t){const n=gr(e.name);if(!n.length)continue;if(nt.some(o=>Iv(o,n))){ya.add(e.id);continue}jt.some(o=>Cv(o,n))&&ya.add(e.id)}}function El(t){const e=t.qty||1,n=t.unit||"Unit";let i,s;return t.consolidatedAmounts?(i=t.consolidatedAmounts,s=""):(i=Bn(e),s=Dd(n,e)),`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
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
        ${ya.has(t.id)?`<div class="deal-badge" onclick="event.stopPropagation();setSHT('deals')">💰 Deal</div>`:""}
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
  </div>`}function Ls(){bx();const t=(l,h)=>(l.scanTitle||l.name).localeCompare(h.scanTitle||h.name,void 0,{sensitivity:"base"}),e=d("shlist"),n=u.shop.filter(l=>!l.checked).sort(t),i=u.shop.filter(l=>l.checked).sort(t),s=d("clrchk");s&&(s.style.display=i.length?"block":"none");const o=d("shsub");if(o&&(o.textContent=n.length+" items to buy"),!e)return;if(!u.shop.length){e.innerHTML='<div class="es"><div class="ei">🥑</div><p>Your list is clear — enjoy the peace.<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item or ask Claude to build one</span></p></div>';return}const r=localStorage.getItem("ks-shop-done-collapsed")==="1",a=i.length?`<div class="done-section-hdr" onclick="toggleShopDone()">
    Done <span class="done-count">${i.length}</span>
    <button class="clear-done-btn" onclick="event.stopPropagation();clrChk()">Clear all</button>
  </div>
  <div class="done-section-body${r?" collapsed":""}" id="shopDoneBody">${i.map(El).join("")}</div>`:"";if(u.aisleMode&&n.length){const l={};n.forEach(g=>{const w=Kb(g.name);l[w]||(l[w]=[]),l[w].push(g)});const h=Jb(u.cfg.favouriteStore);let f;h?f=Object.entries(l).sort(([g],[w])=>{const k=h.indexOf(g),E=h.indexOf(w);return(k===-1?999:k)-(E===-1?999:E)}):f=Object.entries(l).sort(),e.innerHTML=f.map(([g,w])=>`<div class="aisle-divider">
        <span class="aisle-icon">${Ob[g]||"📦"}</span>
        <span class="aisle-name">${g}</span>
        <span class="aisle-count">${w.length}</span>
      </div>${w.map(El).join("")}`).join("")+a}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(El).join("")}`:"")+a;if(u.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(h=>{h.classList.add("selecting"),u.selectedIds.has(h.dataset.id)&&h.classList.add("selected")});const l=document.querySelector(".shbody");l&&(l.style.paddingLeft="52px")}kx(e)}function _x(){const t=d("shopDoneBody");if(!t)return;const e=t.classList.toggle("collapsed");localStorage.setItem("ks-shop-done-collapsed",e?"1":"0")}let bd=!1;function kx(t){if(bd)return;bd=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function Tx(){bd=!1}function Cx(){const t=d("shi"),e=t.value.trim();if(!e)return;if(ss&&ss.length===1){gv(0);return}let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=mv(),a=i||r.qty,l=r.unit,h=d("addNoteInp"),f=h?h.value.trim():"",g={id:Date.now().toString(),name:n,qty:a,unit:l,checked:!1,src:"manual"};f&&(g.note=f);const w=d("shopAddCatKey");g.prepCategory=w&&w.value||dn(n),Fe(g),t.value="",h&&(h.value="");const k=d("addNoteWrap");k&&(k.style.display="none"),Nu(),mr()}function Sx(){const t=d("addNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("addNoteInp");n&&n.focus()}}function fv(){const t=d("shopAddBackdrop"),e=d("shopAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),Ex();const n=d("shopAddCatBadge");n&&(n.style.display="none",n.innerHTML="");const i=d("shopAddCatKey");i&&(i.value="",i.dataset.manual=""),setTimeout(()=>{const s=d("shi");s&&(s.value="",s.focus())},150)}function mr(){const t=d("shopAddBackdrop"),e=d("shopAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),Nu()}let ko=1;function Ix(){const t=d("shopQtyFrac");t&&(t.innerHTML=Ss.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("shopQtyUnit");e&&(e.innerHTML=hr.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function Ex(){ko=1;const t=d("shopQtyVal");t&&(t.textContent="1");const e=d("shopQtyFrac");e&&(e.value="0");const n=d("shopQtyUnit");n&&(n.value="Unit")}function Ax(t){ko=Math.max(1,Math.min(99,ko+t));const e=d("shopQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=ko)}function xx(){const t=d("shopQtyFrac");t&&parseFloat(t.value)}function mv(){const t=d("shopQtyFrac"),e=d("shopQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:dt(ko,n),unit:i}}function Rx(){mr(),window.openScanForList&&window.openScanForList()}function $x(){mr(),hv()}let ss=null;function Px(){const t=d("shi");t&&rc(t),Dx(t?t.value.trim():"")}function Dx(t){const e=d("shopAddCatBadge"),n=d("shopAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=dn(t),{emoji:s,name:o}=an(i);e.innerHTML=qt(i,"openShopAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function Lx(){const t=d("shopAddCatKey"),e=t?t.value:"other";ei(e,n=>{t&&(t.value=n,t.dataset.manual="true");const{emoji:i,name:s}=an(n),o=d("shopAddCatBadge");o&&(o.innerHTML=qt(n,"openShopAddCatPicker()"))})}function Nx(t){const e=u.shop.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||dn(e.name);ei(n,async i=>{await ZE(t,i),Ac(t);const{name:s}=an(i);b(`Category: ${s}`)})}function gv(t){if(!ss||!ss[t])return;const e=ss[t],n=d("addNoteInp"),i=n?n.value.trim():"",s=d("shi")?d("shi").value.trim():"",o=mv(),r={id:Date.now().toString(),name:e.name,qty:o.qty,unit:o.unit,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),Fe(r),b(`Added "${e.name}" ✓`);const a=d("shi");a&&(a.value=""),n&&(n.value="");const l=d("addNoteWrap");l&&(l.style.display="none"),Nu(),mr()}function Nu(){ss=null;const t=d("shopSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}async function Mu(t,e,n){}function yv(){const t=d("enrichBackdrop"),e=d("enrichSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Ac(t){if(u.selectMode)return;event&&event.stopPropagation();const e=u.shop.find(E=>E.id===t);if(!e)return;const n=d("itemDetailContent");if(!n)return;const i=wx(e),s=e.scanTitle||e.name,o=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let r=`<div class="item-detail-header">
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
  </div>`;const a=e.prepCategory||dn(e.name);r+=qt(a,`changeShopCategory('${e.id}')`);const l=e.qty||1,h=e.unit||"Unit",{whole:f,frac:g}=Aa(l);r+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="shop-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${f}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Vl(`shop-frac-${e.id}`,g).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeShopUnit('${e.id}',this.value)">
        ${hr.map(E=>`<option value="${E}"${E===h?" selected":""}>${E}</option>`).join("")}
      </select>
    </div>
  </div>`,e.note&&(r+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),r+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',n.innerHTML=r;const w=d("itemDetailBackdrop"),k=d("itemDetailSheet");w&&w.classList.add("active"),k&&k.classList.add("active")}function Mx(){const t=d("itemDetailBackdrop"),e=d("itemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function Ox(t,e){const n=u.shop.find(s=>s.id===t);if(!n)return;await Oe({...n,unit:e}),Du(n.name,e);const i=u.inv.find(s=>s.name.toLowerCase().trim()===n.name.toLowerCase().trim());i&&await ee({...i,unit:e}),b("Unit updated everywhere",2e3),Ac(t)}async function Vx(t,e){const n=u.shop.find(h=>h.id===t);if(!n)return;const i=d(`shop-qty-${t}`),s=d(`shop-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0;if(e<0&&dt(o,r)<=.25)return;const a=Math.max(0,Math.min(99,o+e)),l=dt(a,r);i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),a===0&&r===0&&s&&(s.value="0.25"),await Oe({...n,qty:l})}async function Fx(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-qty-${t}`),i=d(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=dt(s,o);r!==(e.qty||1)&&await Oe({...e,qty:r})}async function Ux(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-qty-${t}`),i=d(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=dt(s,o);o===0&&s===0&&n&&(n.value=1),await Oe({...e,qty:r})}function Ou(t){const e=d(`shop-detail-display-${t}`),n=d(`shop-detail-edit-${t}`),i=d(`shop-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function Vu(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-detail-name-input-${t}`),i=d(`shop-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await Oe(r),e.barcode&&u.hid&&await qx(e.barcode,s),b("✓ Name updated"),Ac(t)}function Bx(t){Ou(t)}async function jx(t){await Vu(t)}function Hx(t){Ou(t)}async function zx(t){await Vu(t)}async function qx(t,e){if(!u.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`;await M(i,{correctedName:e,updatedAt:new Date().toISOString()})}async function Wx(t){}function Gx(t){}async function Kx(t){}function Qx(t){const e=window._enrichCtx;if(!e)return;const n=e.results[t];if(n){if(e.list==="shop"){const i=u.shop.find(s=>s.id===e.itemId);i&&Oe({...i,name:n.name,brand:n.brand||"",category:n.category||"",source:n.source||"search"})}else if(e.list==="inv"){const i=u.inv.find(s=>s.id===e.itemId);i&&ee({...i,name:n.name,brand:n.brand||"",category:n.category||i.category,source:n.source||"search"})}yv(),b(`Updated with "${n.name}" ✓`)}}function vv(t){if(!u.hid||!t)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);M(`households/${u.hid}/completed_items/${e}`,{name:t,completedAt:new Date().toISOString()}).catch(n=>console.warn("recordCompleted error:",n))}function Jx(t){const e=u.shop.find(i=>i.id===t);if(!e)return;const n=!e.checked;Oe({...e,checked:n}),n&&vv(e.name),Pe(n?"checked off":"unchecked",Z(e.name)+" on Shopping List")}function Yx(t,e){t.stopPropagation();const n=d("sne-"+e),i=d("sni-"+e);if(!n)return;n.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function Xx(t){const e=d("sni-"+t);if(!e)return;const n=u.shop.find(s=>s.id===t);if(!n)return;const i=e.value.trim();i!==(n.note||"")&&Oe({...n,note:i})}function Zx(t){const e=d("sqe-"+t),n=d("sqi-"+t);if(!e)return;e.classList.toggle("open")&&n&&(n.focus(),n.select())}function eR(t,e){const n=d("sqi-"+t);if(!n)return;const i=Math.max(1,(parseInt(n.value,10)||1)+e);n.value=i,wv(t)}function wv(t){const e=d("sqi-"+t);if(!e)return;const n=u.shop.find(s=>s.id===t);if(!n)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(n.qty||1)&&Oe({...n,qty:i})}function tR(){u.aisleMode=!u.aisleMode;const t=d("aislebtn");t&&(t.style.background=u.aisleMode?"var(--ac)":"",t.style.color=u.aisleMode?"var(--bg)":""),Ls()}const nR=["byisguder@gmail.com","bushra.hoss1989@gmail.com"];function iR(){const t=Q();return!t||!t.email?!1:nR.includes(t.email.toLowerCase())}const sR=new Date("2026-04-23T00:00:00Z"),oR=7;function rR(){const t=d("jwt-expiry-banner");if(!t)return;const n=sR-new Date,i=Math.ceil(n/(1e3*60*60*24));i<=0?(t.style.display="block",t.style.borderColor="var(--rd)",t.style.color="var(--rd)",t.textContent="⚠️ ShopRite service JWT has expired — coupons will not load. Contact Bora to refresh the token."):i<=oR?(t.style.display="block",t.style.borderColor="#D4A853",t.style.color="#D4A853",t.textContent="⚠️ ShopRite deals expire soon — refresh needed by April 23"):t.style.display="none"}function _d(t){["list","deals"].forEach(i=>{const s=d("shtab-"+i);s&&s.classList.remove("active");const o=d("sh-"+i+"-body");o&&(o.style.display="none")});const e=d("shtab-"+t);e&&e.classList.add("active");const n=d("sh-"+t+"-body");if(n&&(n.style.display="block"),t==="deals"){const i=d("deals-gate"),s=d("deals-content");iR()?(i&&(i.style.display="none"),s&&(s.style.display="block"),Tv(),rR(),Oo||Uu(),vs||xc()):(i&&(i.style.display="block"),s&&(s.style.display="none"))}}function aR(){const t=u.shop.filter(i=>!i.checked);if(!t.length){b("List is empty!");return}const n=`🛒 Shopping List

`+t.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+Bn(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>b("List copied!"))}let Al={},kd={};async function cR(){const t=u.shop.filter(n=>n.checked);if(!t.length){b("No completed items!");return}Al={},kd={};for(const n of t){const i=await fr(n.name),s=n.name.toLowerCase();i!=null&&i.preferredLocation&&(Al[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(kd[s]=i.preferredUnit)}const e=d("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const i=Al[n.name.toLowerCase()]||xa(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${i}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${n.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,We("atk")}function lR(t,e,n){const i=d("atk-"+t);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),n.classList.add("sel")}async function dR(){const t=u.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let n=0;for(const i of t){const s=d("atk-"+i.id);if(!s)continue;const o=s.dataset.loc||xa(i.name),r=u.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),a=i.qty||1;await ee({id:r?r.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:r?r.name:i.name,qty:r?r.qty+a:a,unit:r?r.unit:i.unit&&i.unit!=="unit"?i.unit:kd[i.name.toLowerCase()]||"unit",location:o,category:r?r.category:Qo({name:i.name}),addedAt:r?r.addedAt:e,brand:r?r.brand:i.brand||"",expiry:r?r.expiry:null,image:r?r.image:i.image||null,source:"shopping"}),Pu(i.name,o),await sr(i.id),n++}ue("atk"),b(`${n} item${n!==1?"s":""} added to your supplies! 🧺`)}async function uR(){const t=Ld().map(s=>{const o=s.toISOString().split("T")[0];return u.mp[o]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[o]}`:""}).filter(Boolean).join(", ");if(!t){b("No meals planned yet!");return}const e=u.inv.map(s=>`${s.name} (${cs(s.qty,s.unit)})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),i=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",a=[],l=[];r.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const D=$[1].replace(/\*\*/g,"").trim();D&&!u.shop.find(N=>N.name.toLowerCase()===D.toLowerCase())&&a.push({name:D,sel:!0})}});const h=r.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,f=u.inv.map(P=>P.name.toLowerCase());if(a.forEach(P=>{const $=u.inv.find(D=>D.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${cs($.qty,$.unit)} — need more`)}),!a.length){b("Nothing new needed — you're all stocked! ✓");return}window._bpItems=a;const g=u.inv.length>0?Math.max(0,h-a.length):0,w=a.filter(P=>P.note).length,k=[];g>0&&k.push(`✅ ${g} already in stock`),w>0&&k.push(`⚠️ ${w} partially stocked`),k.push(`🛒 ${a.length} to add`);const E=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${k.join("<br>")}</div>`;d("bpList").innerHTML=E+a.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),Fu(),d("buildPreviewM").classList.add("active")}catch{b("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=i)}}function hR(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=d("bpck-"+t),n=d("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),Fu()}function pR(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const i=d("bpck-"+n),s=d("bpitem-"+n);t?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Fu()}function Fu(){const t=window._bpItems.filter(n=>n.sel).length,e=d("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function fR(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){d("buildPreviewM").classList.remove("active");return}for(const e of t)await Fe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});d("buildPreviewM").classList.remove("active"),b(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function bv(t,e,n){const i=document.getElementById(n);if(i&&i.remove(),e){const s=document.createElement("div");s.id=n,s.style.cssText="font-size:.64rem;color:var(--mt);text-align:center;margin-top:6px",s.textContent="Cached results — tap ↻ Refresh for latest",t.parentNode.insertBefore(s,t)}}let vs=!1,jt=[],_v=[],Ai=0,Jn="all",Qa=10,qr=!1,Wr=!1;function mR(){qr=!qr;const t=d("coupons-section-body"),e=d("coupons-chevron");t&&(t.style.display=qr?"none":""),e&&(e.textContent=qr?"▶":"▼")}function gR(){Wr=!Wr;const t=d("deals-section-body"),e=d("deals-chevron");t&&(t.style.display=Wr?"none":""),e&&(e.textContent=Wr?"▶":"▼")}function kv(t,e){const n=e===1/0?"all":String(e);document.querySelectorAll(`.page-size-btn[data-section="${t}"]`).forEach(s=>{s.classList.toggle("active",s.dataset.size===n)})}function Tv(){const t=d("deals-zip-banner");if(!t)return;const e=u.cfg.zipcode;e?(t.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,t.style.borderColor="var(--b2)"):(t.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,t.style.borderColor="var(--am)")}async function xc(){const t=d("dealsstatus"),e=d("dealslist");if(!t||!e)return;if(vs&&jt.length>0){Mo(),cn();return}const n=u.cfg.zipcode;if(!n){t.style.display="block",t.style.color="var(--am)",t.textContent="Set your zipcode in Settings to see weekly deals.";return}t.style.display="block",t.style.color="var(--mt)",t.innerHTML='<div style="display:flex;align-items:center;gap:8px"><span class="shimmer" style="display:inline-block;width:16px;height:16px;border-radius:50%"></span> Loading weekly circulars from Walmart, ALDI, Stop & Shop, Wegmans…</div>',e.innerHTML="";try{const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"browse",zipcode:n,householdId:u.hid})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Failed to load weekly deals");jt=s.deals||[],_v=s.stores||[],vs=!0,Ai=0,Jn="all",t.style.display="none",Mo(),cn(),bv(e,s.fromCache,"deals-cache-note")}catch(i){t.style.display="block",t.style.color="var(--rd)",t.textContent=i.message||"Could not load weekly deals",console.error("loadFlippDeals error:",i)}}async function yR(){vs=!1,jt=[],_v=[],Ai=0;const t=d("deals-refresh-btn");t&&(t.textContent="↻ …",t.disabled=!0),await xc(),t&&(t.textContent="↻ Refresh",t.disabled=!1)}const vR=["Walmart","ALDI","Stop & Shop","Wegmans"];function Mo(){const t=d("deals-store-chips");if(!t)return;const e={};jt.forEach(i=>{const s=i.store||"";e[s]=(e[s]||0)+1});let n=`<button class="coupon-chip${Jn==="all"?" active":""}" onclick="filterDealStore('all')">All (${jt.length})</button>`;vR.forEach(i=>{const s=e[i]||0,o=Jn===i?" active":"",r=i.replace(/'/g,"\\'");n+=`<button class="coupon-chip${o}" onclick="filterDealStore('${r}')">${i} (${s})</button>`}),t.innerHTML=n}function wR(t){Jn=t,Ai=0,Mo(),cn()}function bR(){Ai=0,cn()}function _R(){let t=jt;Jn!=="all"&&(t=t.filter(i=>i.store===Jn));const e=d("dealsearch"),n=((e==null?void 0:e.value)||"").trim().toLowerCase();return n&&(t=t.filter(i=>(i.name||"").toLowerCase().includes(n)||(i.brand||"").toLowerCase().includes(n)||(i.store||"").toLowerCase().includes(n))),t}function Cv(t,e){const n=new Set(gr([t.name,t.brand].filter(Boolean).join(" ")));return e.some(i=>n.has(i))}function kR(t){const e=(u.shop||[]).filter(o=>!o.checked);if(!e.length)return{onList:[],rest:t};const n=e.map(o=>gr(o.name)).filter(o=>o.length>0);if(!n.length)return{onList:[],rest:t};const i=[],s=[];for(const o of t)n.some(a=>Cv(o,a))?i.push(o):s.push(o);return{onList:i,rest:s}}function cn(){const t=d("dealslist"),e=d("deals-more");if(!t)return;const n=_R();if(!n.length){const a=d("dealsearch"),l=((a==null?void 0:a.value)||"").trim();l?t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for "<strong>${l}</strong>".<br>Try a different search term.</p></div>`:t.innerHTML='<div class="es"><div class="ei">📰</div><p>No weekly deals available.<br>Try refreshing or check back later for new circulars.</p></div>',e&&(e.style.display="none");return}const{onList:i,rest:s}=kR(n);t.innerHTML="";const o=document.createElement("div");if(o.className="coupon-section-header",o.innerHTML='<span class="coupon-section-icon">🛒</span> On My List',t.appendChild(o),i.length)i.forEach(a=>{t.appendChild(Td(a))});else{const a=document.createElement("div");a.className="coupon-list-empty",a.textContent="No deals found for your current list",t.appendChild(a)}const r=document.createElement("div");if(r.className="coupon-section-header",r.innerHTML='<span class="coupon-section-icon">📰</span> All Deals',t.appendChild(r),s.length){const a=Qa,l=s.slice(0,a);s.length>a,l.forEach(h=>{t.appendChild(Td(h))}),e&&(e.style.display=s.length>10?"block":"none",kv("deals",Qa))}else{const a=document.createElement("div");a.className="coupon-list-empty",a.textContent="All matching deals are shown above",t.appendChild(a),e&&(e.style.display="none")}}function Td(t){const e=document.createElement("div");if(e.className="deal-card"+(t.discount?" deal-match":""),t.image){const a=document.createElement("img");a.className="coupon-img",a.src=t.image,a.alt=t.name||"Deal",a.loading="lazy",a.onerror=function(){this.style.display="none"},e.appendChild(a)}const n=document.createElement("div");n.style.flex="1";const i=document.createElement("div");i.className="deal-store",i.textContent=t.store||"Store",n.appendChild(i);const s=document.createElement("div");if(s.className="deal-name",s.textContent=t.name||"",n.appendChild(s),t.brand){const a=document.createElement("div");a.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",a.textContent=t.brand,n.appendChild(a)}const o=document.createElement("div");if(o.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",t.price){const a=document.createElement("span");a.className="deal-price",a.textContent=t.price,o.appendChild(a)}if(t.discount){const a=document.createElement("span");a.className="deal-badge",a.textContent=t.discount,o.appendChild(a)}n.appendChild(o),e.appendChild(n);const r=document.createElement("button");return r.className="btn bs bsm",r.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",r.textContent="+ List",(a=>{r.onclick=()=>Sv(a)})(t.name||""),e.appendChild(r),e}async function Sv(t){const e=(t||"").replace(/&#39;/g,"'");(await Fe({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?b(e+" added!"):b(e+" quantity updated!")}async function TR(){const t=d("dealsearch").value.trim();if(!t){Ai=0,Jn="all",Mo(),cn();return}if(vs&&jt.length>0){Ai=0,cn();return}const e=d("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+t+" near "+(u.cfg.zipcode||"your area")+"…",d("dealslist").innerHTML="";try{const n=u.cfg.zipcode;if(!n)throw new Error("Set your zipcode in Settings to search for local deals.");const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:n,query:t})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Deals API request failed");e.style.display="none";const o=d("dealslist");if(o.innerHTML="",!s.deals||!s.deals.length){o.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for "<strong>${t}</strong>".<br>Try a different search term.</p></div>`;return}s.deals.forEach(r=>{o.appendChild(Td(r))})}catch(n){e.style.color="var(--rd)",e.textContent=n.message||"Unknown error"}}async function CR(){if(!u.shop.filter(e=>!e.checked).length){b("Add items to your list first!");return}if(vs&&jt.length>0){const e=d("dealsearch");e&&(e.value=""),Jn="all",Ai=0,Mo(),cn();const n=d("dealslist");n&&n.scrollIntoView({behavior:"smooth",block:"start"});return}await xc()}function SR(t){Qa=t,cn()}function IR(){Qa+=10,cn()}let Oo=!1,nt=[],ws=new Set,bi=0,wt="onlist",Ja=10;async function Uu(){const t=d("coupon-status"),e=d("coupon-list");if(!(!t||!e)){t.style.display="block",t.style.color="var(--mt)",t.innerHTML='<div style="display:flex;align-items:center;gap:8px"><span class="shimmer" style="display:inline-block;width:16px;height:16px;border-radius:50%"></span> Loading ShopRite digital coupons…</div>',e.innerHTML="";try{const n=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"list",householdId:u.hid})}),i=await n.json();if(!n.ok||i.error)throw new Error(i.error||"Failed to load coupons");nt=i.coupons||[],ws=new Set(i.clippedIds||[]),Oo=!0,bi=0,wt="onlist",nt.forEach(s=>{s.clipped=ws.has(s.id)}),t.style.display="none",To(),Vn(),bv(e,i.fromCache,"coupon-cache-note")}catch(n){t.style.display="block",t.style.color="var(--rd)",t.textContent=n.message||"Could not load coupons",console.error("loadCoupons error:",n)}}}async function ER(){Oo=!1,nt=[],ws=new Set,bi=0;const t=d("coupon-refresh-btn");t&&(t.textContent="↻ …",t.disabled=!0),await Uu(),t&&(t.textContent="↻ Refresh",t.disabled=!1)}function To(){const t=d("coupon-cats");if(!t)return;const{onList:e}=Bu(nt),n=e.length,i=new Map;nt.forEach(r=>{const a=r.category||"Other";i.set(a,(i.get(a)||0)+1)});const s=[...i.entries()].sort((r,a)=>r[0]==="Other"?1:a[0]==="Other"?-1:a[1]-r[1]);let o=`<button class="coupon-chip${wt==="onlist"?" active":""}" onclick="filterCouponCat('onlist')">On My List (${n})</button>`;o+=`<button class="coupon-chip${wt==="all"?" active":""}" onclick="filterCouponCat('all')">All (${nt.length})</button>`,s.forEach(([r,a])=>{o+=`<button class="coupon-chip${wt===r?" active":""}" onclick="filterCouponCat('${r.replace(/'/g,"\\'")}')">${r} (${a})</button>`}),t.innerHTML=o}function AR(t){wt=t,bi=0,To(),Vn()}function xR(){bi=0,Vn()}async function RR(){const t=d("coupon-search"),e=((t==null?void 0:t.value)||"").trim();if(!e){bi=0,wt="all",To(),Vn();return}if(Oo&&nt.length>0){bi=0,wt="all",To(),Vn();return}const n=d("coupon-status");n&&(n.style.display="block",n.textContent="Searching coupons for '"+e+"'...");try{const i=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"list",householdId:u.hid,query:e})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Search failed");nt=s.coupons||[],ws=new Set(s.clippedIds||[]),Oo=!0,bi=0,nt.forEach(o=>{o.clipped=ws.has(o.id)}),n&&(n.style.display="none"),To(),Vn()}catch(i){n&&(n.style.display="block",n.style.color="var(--rd)",n.textContent=i.message)}}function $R(){let t=nt;if(wt==="onlist"){const{onList:i}=Bu(t);t=i}else wt!=="all"&&(t=t.filter(i=>(i.category||"Other")===wt));const e=d("coupon-search"),n=((e==null?void 0:e.value)||"").trim().toLowerCase();return n&&(t=t.filter(i=>(i.name||"").toLowerCase().includes(n)||(i.brand||"").toLowerCase().includes(n)||(i.description||"").toLowerCase().includes(n))),t}const PR=new Set(["a","an","the","of","and","or","for","to","in","on","with","some","any","more","get","buy","need","bag","box","can","pack","ct","oz","lb","lbs","kg","ml","gal","qt","pt","bunch","head","piece","pieces","slice","slices","large","small","medium","fresh","organic","whole","half","extra","regular","light","low","free"]);function gr(t){return t?t.toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(e=>e.length>=2&&!PR.has(e)):[]}function Iv(t,e){const n=new Set(gr([t.name,t.brand,t.description].filter(Boolean).join(" ")));return e.some(i=>n.has(i))}function Bu(t){const e=(u.shop||[]).filter(o=>!o.checked);if(console.log("[On My List] Active shopping items:",e.map(o=>o.name)),!e.length)return{onList:[],rest:t};const n=e.map(o=>{const r=gr(o.name);return console.log(`[On My List] "${o.name}" → tokens: [${r.join(", ")}]`),r}).filter(o=>o.length>0);if(!n.length)return{onList:[],rest:t};const i=[],s=[];for(const o of t)n.some(a=>Iv(o,a))?i.push(o):s.push(o);return{onList:i,rest:s}}function DR(){if(!nt.length)return 0;const{onList:t}=Bu(nt);return t.length}function Vn(){const t=d("coupon-list"),e=d("coupon-more");if(!t)return;const n=$R();if(!n.length){const o=wt==="onlist"?"No coupons match your shopping list":"No coupons found.<br>Try a different search or category.";t.innerHTML=`<div class="es"><div class="ei">🎟</div><p>${o}</p></div>`,e&&(e.style.display="none");return}t.innerHTML="";const i=Ja,s=n.slice(0,i);n.length>i,s.forEach(o=>{t.appendChild(LR(o))}),e&&(e.style.display=n.length>10?"block":"none",kv("coupons",Ja))}function LR(t){const e=document.createElement("div"),n=!!t.image;if(e.className="coupon-card"+(t.clipped?" clipped":"")+(n?" coupon-has-image":""),e.id="coupon-"+t.id,t.image){const r=document.createElement("img");r.className="coupon-img",r.src=t.image,r.alt=t.name||"Coupon",r.loading="lazy",r.onerror=function(){var a;this.style.display="none",(a=this.closest(".coupon-card"))==null||a.classList.remove("coupon-has-image")},e.appendChild(r)}const i=document.createElement("div");if(i.className="coupon-body",t.brand){const r=document.createElement("div");r.className="coupon-brand",r.textContent=t.brand,i.appendChild(r)}const s=document.createElement("div");if(s.className="coupon-name",s.textContent=t.name||"Digital Coupon",i.appendChild(s),t.description){const r=document.createElement("div");r.className="coupon-desc",r.textContent=t.description,i.appendChild(r)}if(t.value){const r=document.createElement("div");r.className="coupon-value",r.textContent=t.value,i.appendChild(r)}if(t.expiryDate){const r=document.createElement("div");r.className="coupon-expiry";try{const a=new Date(t.expiryDate),h=Math.ceil((a-new Date)/864e5);h<=3&&h>=0?(r.style.color="var(--am)",r.textContent=h===0?"Expires today":`Expires in ${h} day${h>1?"s":""}`):r.textContent="Expires "+a.toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{r.textContent="Exp: "+t.expiryDate}i.appendChild(r)}e.appendChild(i);const o=document.createElement("button");return o.className="coupon-clip-btn"+(t.clipped?" clipped":""),o.textContent=t.clipped?"✓ Clipped":"Clip",o.setAttribute("data-coupon-id",t.id),t.clipped||(o.onclick=()=>Ev(t.id)),e.appendChild(o),e}async function Ev(t){const e=d("coupon-"+t),n=e==null?void 0:e.querySelector(".coupon-clip-btn");if(!(!n||n.classList.contains("clipped"))){n.classList.add("loading"),n.textContent="…";try{const i=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"clip",householdId:u.hid,couponId:t})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Clip failed");ws.add(t);const o=nt.find(r=>r.id===t);if(o&&(o.clipped=!0),n.classList.remove("loading"),n.classList.add("clipped","clip-animating"),n.textContent="✓ Clipped",n.onclick=null,setTimeout(()=>n.classList.remove("clip-animating"),500),e&&e.classList.add("clipped"),o&&o.value){const r=o.value.match(/\$?([\d.]+)/);if(r){const a=parseFloat(r[1])||0,l=parseFloat(localStorage.getItem("ks-clipped-savings")||"0");localStorage.setItem("ks-clipped-savings",(l+a).toFixed(2))}}b("Coupon clipped to your Price Plus Card!")}catch(i){n.classList.remove("loading"),n.textContent="Clip",b("Clip failed: "+(i.message||"Unknown error")),console.error("clipCoupon error:",i)}}}function NR(t){Ja=t,Vn()}function MR(){Ja+=10,Vn()}function Av(t){return(t||"").split(" ")[0].trim()||t}const OR=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Gr={morning:["Good morning","Morning","Rise and shine"],afternoon:["Good afternoon","Afternoon"],evening:["Good evening","Evening","Welcome back"],lateNight:["Good night","Night owl","Burning the midnight oil","Still going strong"]};let om=null;function VR(t){return t[Math.floor(Math.random()*t.length)]}function FR(t,e){const n=OR[e];let i;return t>=5&&t<11?i=[...Gr.morning,`Good ${n} morning`]:t>=11&&t<17?(i=[...Gr.afternoon,`Happy ${n}`,`Good ${n} afternoon`],e===1&&i.push("Hope your week is off to a great start"),(e===4||e===5)&&i.push("Almost the weekend"),(e===0||e===6)&&i.push("Happy weekend")):t>=17&&t<21?(i=[...Gr.evening,`Good ${n} evening`],e===5&&i.push("Happy Friday evening")):i=[...Gr.lateNight],i}function xv(t){const e=new Date().getDay(),n=FR(t,e),i=n.length>1?n.filter(o=>o!==om):n,s=VR(i);return om=s,s}const Rv="ks-weather-cache",UR=1800*1e3;function BR(){try{const t=sessionStorage.getItem(Rv);if(!t)return null;const e=JSON.parse(t);return Date.now()-e.ts>UR?null:e.data}catch{return null}}function jR(t){try{sessionStorage.setItem(Rv,JSON.stringify({ts:Date.now(),data:t}))}catch{}}async function rm(t){var e;try{const n=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(t)}&count=1&language=en&format=json`);if(!n.ok)return null;const i=await n.json();if(!((e=i.results)!=null&&e.length))return null;const s=i.results[0];return{lat:s.latitude,lon:s.longitude,city:s.name}}catch{return null}}function HR(t,e,n,i){const o=(n-t)*Math.PI/180,r=(i-e)*Math.PI/180,a=Math.sin(o/2)**2+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(r/2)**2;return 3958.8*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}async function zR(){var o,r;const t=BR();if(t)return t;let e=null,n=!1;try{const a=await new Promise((l,h)=>navigator.geolocation.getCurrentPosition(l,h,{timeout:5e3,maximumAge:18e5}));e={lat:a.coords.latitude,lon:a.coords.longitude},n=!0}catch{}if(!e){const a=(o=u.cfg)==null?void 0:o.zipcode;if(!a)return null;const l=await rm(a);if(!l)return null;e={lat:l.lat,lon:l.lon}}let i=!1,s=null;if(n&&((r=u.cfg)!=null&&r.zipcode))try{s=await rm(u.cfg.zipcode),s&&HR(e.lat,e.lon,s.lat,s.lon)>20&&(i=!0)}catch{}try{const a=`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=auto`,l=await fetch(a);if(!l.ok)return null;const h=await l.json();let f=null;if(i)try{const w=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${e.lat}&longitude=${e.lon}&localityLanguage=en`,k=await fetch(w);if(k.ok){const E=await k.json();f=E.city||E.locality||null}}catch{}const g={tempF:Math.round(h.current.temperature_2m),weatherCode:h.current.weather_code,city:f,isTraveling:i};return jR(g),g}catch{return null}}function qR(t){return t===0?"clear":t<=3?"cloudy":t>=45&&t<=48?"foggy":t>=51&&t<=57?"drizzly":t>=61&&t<=67?"rainy":t>=71&&t<=77?"snowy":t>=80&&t<=82?"rainy":t>=85&&t<=86?"snowy":t>=95?"stormy":null}function WR(t){return{clear:"Sunny",cloudy:"Overcast",foggy:"Foggy",drizzly:"Drizzle",rainy:"Rainy",snowy:"Snowy",stormy:"Stormy"}[t]||"Unknown"}function GR(t){return{clear:"☀️",cloudy:"☁️",foggy:"🌫️",drizzly:"🌦️",rainy:"🌧️",snowy:"❄️",stormy:"⛈️"}[t]||""}function KR(t){if(!t)return null;const e=qR(t.weatherCode);if(!e)return null;const n=GR(e),i=WR(e),s=t.isTraveling&&t.city?` in ${t.city}`:"";return`${n} ${t.tempF}° — ${i}${s}`}async function QR(){const t=await zR(),e=d("grt-weather");if(!e)return;const n=KR(t);n?(e.textContent=n,e.style.display=""):e.style.display="none"}const JR={morning:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=400&fit=crop&crop=center",afternoon:"https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop&crop=center",evening:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop&crop=center",night:"https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&h=400&fit=crop&crop=center"};function YR(t){return t>=5&&t<12?"morning":t>=12&&t<17?"afternoon":t>=17&&t<21?"evening":"night"}function XR(t){const e=document.querySelector(".hhdr");if(!e)return;const n=YR(t),i=JR[n];e.classList.add("hero-bg"),e.style.backgroundImage=`url('${i}')`}function ju(){const t=new Date().getHours(),e=xv(t),n=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=Av(n),s=d("grt");s&&(s.innerHTML=`${e}, <span>${i}</span>`);const o=d("grt-weather");o&&(o.style.display="none");const r=d("hdt");r&&(r.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),XR(t),QR(),Wt()}function Vo(){$v(),va==null||va()}let va=null;function ZR(t){va=t}function $v(){const t=d("home-skeleton");if(!u.homeDataReady){t&&(t.style.display="");return}t&&!t.classList.contains("hidden")&&(t.classList.add("hidden"),setTimeout(()=>{t&&(t.style.display="none")},320));try{const e=new Date().getHours(),n=xv(e),i=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),s=Av(i),o=d("grt");o&&!o.innerHTML&&(o.innerHTML=`${n}, <span>${s}</span>`),t$(),Wt(),Ns(),l$(),d$(),u$(),f$(),ni(),i$(),v$(),Nv(),n$()}catch(e){console.error("[renderHome] section render error:",e)}}const Fo={lowstock:!0,activity:!0,cooktonight:!1};function e$(t){Fo[t]=!Fo[t],Cd(t)}function Cd(t){const e=Fo[t]!==!1,n=d(`${t}-arrow`),s=d({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[t]||t);n&&(e?n.classList.add("collapsed"):n.classList.remove("collapsed")),s&&(e?s.classList.add("collapsed"):s.classList.remove("collapsed"))}function t$(){Fo.lowstock=!0,Fo.activity=!0}function n$(){Cd("lowstock"),Cd("activity")}function ni(){const t=Jt(),e=u.mp[t],n=d("tnd"),i=d("tna"),s=d("tonight-main"),o=!!u.mpCooked[t];s&&(s.onclick=function(){e?window.openMealDetail(t,"Today"):window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),o?i&&(i.innerHTML=`<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`):i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${t}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">Nothing planned yet — what are you craving? 🍽️</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function i$(){const t=d("lastcooked");if(!t)return;const n=(u.activity||[]).find(a=>a.action==="cooked");if(!n){t.style.display="none";return}const i=(n.itemName||"").replace(/\s*tonight\s*🍳?\s*$/i,"").trim();if(!i){t.style.display="none";return}const s=Date.now()-new Date(n.timestamp).getTime(),o=Math.floor(s/864e5);let r;o===0?r="today":o===1?r="yesterday":r=o+" days ago",t.style.display="block",t.innerHTML=`🍳 Last cooked: <strong style="color:var(--tx)">${i}</strong> — ${r}`}let Ya=0;function Pv(t){const e=new Date;e.setHours(0,0,0,0);const n=new Date(e);return n.setDate(e.getDate()-e.getDay()),n.setDate(n.getDate()+t*7),Array.from({length:7},(i,s)=>{const o=new Date(n);return o.setDate(n.getDate()+s),o})}function s$(t){Ya+=t,Wt()}function Wt(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=d("wgrd");if(!n)return;const i=Pv(Ya),s=d("weekLbl");if(s){const o=i[0],r=i[6],a=o.toLocaleDateString("en-US",{month:"short"}),l=r.toLocaleDateString("en-US",{month:"short"}),h=a===l?`${a} ${o.getDate()} – ${r.getDate()}`:`${a} ${o.getDate()} – ${l} ${r.getDate()}`;s.textContent=Ya===0?"This Week":h}n.innerHTML=i.map((o,r)=>{const a=o.toISOString().split("T")[0],l=o.getTime()===e.getTime(),h=u.mp[a],f=u.mpCooked[a],g=h?`openMealDetail('${a}','${t[r]} ${o.getDate()}')`:`openMealM('${a}','${t[r]} ${o.getDate()}')`;return`<div class="wd${l?" today":""}${h?" hm":""}${f?" hm-cooked":""}" onclick="${g}"><div class="wdn">${t[r]}</div><div class="wdd">${o.getDate()}</div>${h?`<div class="wdm">${h}</div>`:""}</div>`}).join(""),o$()}function o$(){const t=d("variety-nudge");if(!t)return;const e=Pv(Ya).map(s=>u.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n={};e.forEach(s=>{const o=s.toLowerCase();n[o]=(n[o]||0)+1});const i=Object.entries(n).find(([,s])=>s>=3);i?(t.style.display="block",t.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):t.style.display="none"}function r$(){try{const t=localStorage.getItem("ks-clipped-savings");if(t)return parseFloat(t)||0}catch{}return 0}function a$(){const t=u.inv.filter(n=>{const i=ot(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).map(n=>(n.name||"").toLowerCase());if(!t.length||!u.recs.length)return[];const e=u.recs.map(n=>{const i=(n.ingredients||[]).map(o=>(typeof o=="string"?o:o.name||"").toLowerCase()),s=t.filter(o=>i.some(r=>r.includes(o)||o.includes(r)));return{recipe:n,matchCount:s.length,matchNames:s}}).filter(n=>n.matchCount>0);return e.sort((n,i)=>i.matchCount-n.matchCount),e.slice(0,3)}function Ns(){const t=u.inv.filter(f=>{const g=ot(f.expiry);return g&&(g.c==="expiring"||g.c==="expired")}).length,e=u.shop.filter(f=>!f.checked).length,n=d("home-exp-val"),i=d("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),i&&(i.textContent=t>0?"expiring soon":"Nothing in next 3 days");const s=d("home-shop-val"),o=d("home-shop-sub");s&&(s.textContent=e),o&&(o.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const r=d("sgrd");if(!r)return;const a=r$();let l=`
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
    </div>`);const h=a$();h.length&&(l+=`
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
    </div>`),r.innerHTML=l,window._shouldAnimateCounters&&(window._shouldAnimateCounters=!1,r.querySelectorAll(".scv").forEach(f=>{const g=parseInt(f.textContent,10);isNaN(g)||g===0||c$(f,g,600)}))}function c$(t,e,n){const i=performance.now();t.textContent="0";function s(o){const r=o-i,a=Math.min(r/n,1),l=1-Math.pow(1-a,3);t.textContent=Math.round(l*e),a<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}function l$(){const t=d("quick-chips");if(!t)return;const e=u.shop.filter(n=>!n.checked).length;t.innerHTML=`
    <button class="quick-chip" onclick="showScreen('shopping')">🛒 ${e} to buy</button>
    <button class="quick-chip" onclick="showScreen('inventory');setTimeout(()=>{const el=document.getElementById('expiryTimeline');if(el)el.scrollIntoView({behavior:'smooth'})},200)">⚠️ Expiring Soon</button>
    <button class="quick-chip" onclick="showScreen('shopping');setTimeout(()=>setSHT('deals'),100)">✨ Deals</button>
  `}function d$(){const t=d("notif-strip");if(!t)return;const e=[],n=u.inv.filter(o=>{const r=ot(o.expiry);return r&&r.c==="expired"});n.length&&e.push(`<button class="notif-pill notif-danger" onclick="showScreen('inventory')">🚨 ${n.length} expired item${n.length>1?"s":""}</button>`);const i=u.inv.filter(o=>{const r=ot(o.expiry);return r&&r.c==="expiring"});i.length&&e.push(`<button class="notif-pill notif-warn" onclick="showScreen('inventory')">⏱ ${i.length} expiring soon</button>`);const s=DR();s>0&&e.push(`<button class="notif-pill notif-deal" onclick="showScreen('shopping');setTimeout(()=>setSHT('coupons'),100)">💰 ${s} coupon match${s>1?"es":""}</button>`),e.length?(t.style.display="flex",t.innerHTML=e.join("")):(t.style.display="none",t.innerHTML="")}function u$(){const t=u.inv.filter(i=>{const s=ot(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=d("exslbl"),n=d("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>{const s=ot(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Z(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const h$=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),p$=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function yr(t){return t?h$.has(t)?1:(p$.has(t),2):2}function f$(){const t=u.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:yr(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=d("lowstocklbl"),n=d("lowstocklist");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Z(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${cs(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function m$(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?b(`${e.name} added to shopping list 🛒`):b(`${e.name} quantity updated on shopping list 🛒`)}function g$(t){const e=Date.now()-new Date(t).getTime(),n=Math.floor(e/6e4);if(n<1)return"just now";if(n<60)return n+"m ago";const i=Math.floor(n/60);if(i<24)return i+"h ago";const s=Math.floor(i/24);return s===1?"yesterday":s+"d ago"}function y$(t){const e=t.id||"",n=(t.action||"").toLowerCase(),i=(t.itemName||"").toLowerCase();return n.includes("removed")&&(i.includes("shopping")||i.includes("supplies"))?`<button class="act-btn" onclick="activityUndo('${e}')">Undo</button>`:""}function v$(){const t=d("activityfeed"),e=d("activitylbl");if(!t)return;const n=u.activity||[];if(!n.length){e&&(e.style.display="none"),t.innerHTML="";return}e&&(e.style.display="flex"),t.innerHTML=n.slice(0,10).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${Z(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
        ${y$(i)}
        <div style="font-size:.68rem;color:var(--mt)">${g$(i.timestamp)}</div>
      </div>
    </div>`).join("")}function Ms(t){return(u.activity||[]).find(e=>e.id===t)}function Os(t){return!t||!t.itemName?"":t.itemName.replace(/\s+(to|from|on)\s+(Shopping List|Supplies|Recipes)$/i,"").replace(/\s+tonight\s*🍳$/i,"").trim()}async function w$(t){const e=Ms(t);if(!e)return b("Activity entry not found");const n=Os(e);if(!n)return;const i=e.itemData||{},s=(e.itemName||"").toLowerCase(),o=i.list||(s.includes("shopping")?"shopping":"supplies"),r=Date.now().toString(36)+Math.random().toString(36).slice(2);try{o==="shopping"?(await Fe({name:i.name||n,qty:i.qty||1,unit:i.unit||void 0,note:i.note||void 0,prepCategory:i.prepCategory||void 0,barcode:i.barcode||void 0},{silent:!0}),b(`${n} added back to shopping list`)):(await ee({id:r,name:i.name||n,qty:i.qty||1,unit:i.unit||void 0,location:i.location||"pantry",note:i.note||void 0,prepCategory:i.prepCategory||void 0,barcode:i.barcode||void 0},{silent:!0}),b(`${n} added back to supplies`));const a=o==="shopping"?"Shopping List":"Supplies",l=(e.memberName||"Someone").split(" ")[0];await M(`households/${u.hid}/activity/${t}`,{memberName:l,action:"restored",itemName:Z(n)+" to "+a,timestamp:e.timestamp})}catch(a){console.error("[activityUndo]",a),b("Couldn't undo — please try manually")}}async function b$(t){const e=Ms(t);if(!e)return b("Activity entry not found");const n=Os(e),i=u.shop.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return b("Item not found on shopping list");try{i.done=!1,await Oe(i),b(`${n} unchecked`),await Pe("unchecked",Z(n)+" on Shopping List")}catch(s){console.error("[activityUncheck]",s),b("Couldn't uncheck — please try manually")}}async function _$(t){const e=Ms(t);if(!e)return b("Activity entry not found");const n=Os(e),i=u.shop.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return b("Item not found on shopping list");try{await sr(i.id),b(`${n} removed from shopping list`)}catch(s){console.error("[activityRemoveShop]",s),b("Couldn't remove — please try manually")}}async function k$(t){const e=Ms(t);if(!e)return b("Activity entry not found");const n=Os(e),i=u.inv.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return b("Item not found in supplies");try{await ir(i.id),b(`${n} removed from supplies`)}catch(s){console.error("[activityRemoveInv]",s),b("Couldn't remove — please try manually")}}async function T$(t){const e=Ms(t);if(!e)return b("Activity entry not found");const n=Os(e),i=u.recs.find(s=>(s.name||s.title||"").toLowerCase()===n.toLowerCase());if(!i)return b("Recipe not found");try{u.recs=u.recs.filter(s=>s.id!==i.id),await he(`households/${u.hid}/recipes/${i.id}`),b(`${n} removed from recipes`),await Pe("removed",Z(n)+" from Recipes")}catch(s){console.error("[activityRemoveRec]",s),b("Couldn't remove — please try manually")}}async function C$(t){b("Open the item to adjust quantity manually")}async function S$(t){const e=Ms(t);if(!e)return b("Activity entry not found");const n=Os(e);b("Open meal plan to unmark "+n)}async function I$(t){b("Open meal plan to change this day's plan")}async function E$(t){b("Coupons can't be unclipped once loaded to card")}async function A$(t){b("Open Supplies to manually adjust quantities")}const am=5;let qi=[],Gt=0;function Dv(t){return typeof t!="string"||!t.trim()?"":t.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function x$(t,e){let n=[];t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)?n=t.ingredientsRaw:t.ingredients&&typeof t.ingredients=="string"?n=t.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(t.ingredients)&&(n=t.ingredients);const i=n.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let o=0;const r=i.length;for(const l of i){const h=Dv(l);if(!h){o++;continue}e.some(g=>g.includes(h)||h.includes(g))?o++:s.push(l)}return{matchPct:Math.round(o/r*100),matchCount:o,totalCount:r,missing:s}}async function R$(){const t=d("recipeMatchResults");if(t){We("recipematch"),t.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=u.inv.map(i=>Dv(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",u.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const n=await se("public_recipes");if(console.log("[RecipeMatch] Fetched",n.length,"community recipes"),!n.length){console.log("[RecipeMatch] No community recipes found"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),qi=n.map(i=>{const s=x$(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",qi.length),Gt=0,Lv(t)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function Lv(t){if(!qi.length){t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=qi.slice(Gt,Gt+am);Gt+=e.length;const n=e.map(i=>{let s,o,r;i.matchPct>=80?(s="var(--gn)",o="Ready to cook",r="🟢"):i.matchPct>=60?(s="var(--am)",o="Almost there",r="🟡"):(s="#e67e22",o="Just a few things needed",r="🟠");const a=i.imageUrl?`<img src="${i.imageUrl}" loading="lazy" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',h=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const w=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${w}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",f=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(Gt<=am)t.innerHTML=n;else{const i=t.querySelector(".match-more-btn");i&&i.remove(),t.insertAdjacentHTML("beforeend",n)}Gt<qi.length?t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${qi.length-Gt} remaining)</button></div>`):Gt>0&&t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Gt} matching recipes</div>`)}function $$(){const t=d("recipeMatchResults");t&&Lv(t)}async function P$(t){if(!t)return;(await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?b(`${t} added to shopping list 🛒`):b(`${t} already on shopping list`)}function Nv(){const t=["fridge","freezer","pantry","household"].map(n=>{const i=u.inv.filter(s=>s.location===n);return i.length?Lm(n).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${cs(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=d("expbox");e&&(e.textContent=t||"No items yet.")}let Hu="fridge",Co=1;function D$(){const t=d("uniQtyFrac");t&&(t.innerHTML=Ss.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("uniQtyUnit");e&&(e.innerHTML=hr.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function Mv(){Co=1;const t=d("uniQtyVal");t&&(t.textContent="1");const e=d("uniQtyFrac");e&&(e.value="0");const n=d("uniQtyUnit");n&&(n.value="Unit")}function L$(){const t=d("uniAddBackdrop"),e=d("uniAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),Hu="fridge",document.querySelectorAll("#uniAddSheet .lbtn").forEach(l=>l.classList.remove("sel"));const n=d("uniAddLoc-fridge");n&&n.classList.add("sel"),Mv();const i=d("uniAddNoteWrap");i&&(i.style.display="none");const s=d("uniAddNoteInp");s&&(s.value="");const o=d("uniSearchDropdown");o&&(o.innerHTML="",o.classList.remove("active"));const r=d("uniAddCatBadge");r&&(r.style.display="none",r.innerHTML="");const a=d("uniAddCatKey");a&&(a.value="",a.dataset.manual=""),setTimeout(()=>{const l=d("uniAddInput");l&&(l.value="",l.focus())},150)}function zu(){const t=d("uniAddBackdrop"),e=d("uniAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active");const n=d("uniSearchDropdown");n&&(n.innerHTML="",n.classList.remove("active"))}function N$(t){Co=Math.max(1,Math.min(99,Co+t));const e=d("uniQtyVal");e&&(e.textContent=Co)}function M$(){const t=d("uniQtyFrac");t&&parseFloat(t.value)}function O$(){const t=d("uniQtyFrac"),e=d("uniQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:dt(Co,n),unit:i}}function V$(t,e){Hu=t,document.querySelectorAll("#uniAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function F$(){const t=d("uniAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("uniAddNoteInp");n&&n.focus()}}function U$(){const t=d("uniAddInput");t&&rc(t),B$(t?t.value.trim():"")}function B$(t){const e=d("uniAddCatBadge"),n=d("uniAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=dn(t);e.innerHTML=qt(i,"openUniAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function j$(){const t=d("uniAddCatKey"),e=t?t.value:"other";ei(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=d("uniAddCatBadge");i&&(i.innerHTML=qt(n,"openUniAddCatPicker()"))})}function Ov(){const t=d("uniAddInput"),e=t?t.value.trim():"";if(!e)return null;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=O$(),a=i||r.qty,l=r.unit,h=d("uniAddNoteInp"),f=h?h.value.trim():"";return{name:n,qty:a,unit:l,note:f}}function Vv(){const t=d("uniAddInput");t&&(t.value="",t.focus());const e=d("uniAddNoteInp");e&&(e.value="");const n=d("uniAddNoteWrap");n&&(n.style.display="none");const i=d("uniSearchDropdown");i&&(i.innerHTML="",i.classList.remove("active"));const s=d("uniAddCatBadge");s&&(s.style.display="none",s.innerHTML="");const o=d("uniAddCatKey");o&&(o.value="",o.dataset.manual=""),Mv()}async function H$(){const t=Ov();if(!t)return;const{name:e,qty:n,note:i}=t,s=await fr(e),o=(s==null?void 0:s.preferredLocation)||Hu,r=t.unit!=="Unit"?t.unit:(s==null?void 0:s.preferredUnit)||"unit",a="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),l=d("uniAddCatKey"),h=l&&l.value||dn(e),f={id:a,barcode:a,name:e,brand:"",unit:r,qty:n,location:o,category:Qo({name:e}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:h};i&&(f.note=i),ee(f),b(`${e} added to Supplies 🧺`),Vv()}async function z$(){const t=Ov();if(!t)return;const{name:e,qty:n,unit:i,note:s}=t,o=d("uniAddCatKey"),r=o&&o.value||dn(e),a={id:Date.now().toString(),name:e,qty:n,unit:i,checked:!1,src:"manual",prepCategory:r};s&&(a.note=s);const l=await Fe(a);if(l.action==="new")b(`${e} added to Shopping 🛒`);else if(l.action==="consolidated")b(`${e} quantity updated on Shopping 🛒`);else if(l.action==="skipped")return;Vv()}function q$(){zu(),window.openScanForInventory&&window.openScanForInventory()}function W$(){zu(),window.toggleInvVoice&&window.toggleInvVoice()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="firebasestorage.googleapis.com",Uv="storageBucket",G$=120*1e3,K$=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Ht{constructor(e,n,i=0){super(xl(e),`Firebase Storage: ${n} (${xl(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function xl(t){return"storage/"+t}function qu(){const t="An unknown error occurred, please check the error payload for server response.";return new be(we.UNKNOWN,t)}function Q$(t){return new be(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function J$(t){return new be(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Y$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(we.UNAUTHENTICATED,t)}function X$(){return new be(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Z$(t){return new be(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function eP(){return new be(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tP(){return new be(we.CANCELED,"User canceled the upload/download.")}function nP(t){return new be(we.INVALID_URL,"Invalid URL '"+t+"'.")}function iP(t){return new be(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function sP(){return new be(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Uv+"' property when initializing the app?")}function oP(){return new be(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function rP(){return new be(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function aP(t){return new be(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sd(t){return new be(we.INVALID_ARGUMENT,t)}function Bv(){return new be(we.APP_DELETED,"The Firebase app was deleted.")}function cP(t){return new be(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function So(t,e){return new be(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function oo(t){throw new be(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=lt.makeFromUrl(e,n)}catch{return new lt(e,"")}if(i.path==="")return i;throw iP(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const r="(/(.*))?$",a=new RegExp("^gs://"+s+r,"i"),l={bucket:1,path:3};function h(F){F.path_=decodeURIComponent(F.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",k=new RegExp(`^https?://${g}/${f}/b/${s}/o${w}`,"i"),E={bucket:1,path:3},P=n===Fv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,$="([^?#]*)",D=new RegExp(`^https?://${P}/${s}/${$}`,"i"),B=[{regex:a,indices:l,postModify:o},{regex:k,indices:E,postModify:h},{regex:D,indices:{bucket:1,path:2},postModify:h}];for(let F=0;F<B.length;F++){const z=B[F],ne=z.regex.exec(e);if(ne){const I=ne[z.indices.bucket];let v=ne[z.indices.path];v||(v=""),i=new lt(I,v),z.postModify(i);break}}if(i==null)throw nP(e);return i}}class lP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t,e,n){let i=1,s=null,o=null,r=!1,a=0;function l(){return a===2}let h=!1;function f(...$){h||(h=!0,e.apply(null,$))}function g($){s=setTimeout(()=>{s=null,t(k,l())},$)}function w(){o&&clearTimeout(o)}function k($,...D){if(h){w();return}if($){w(),f.call(null,$,...D);return}if(l()||r){w(),f.call(null,$,...D);return}i<64&&(i*=2);let B;a===1?(a=2,B=0):B=(i+Math.random())*1e3,g(B)}let E=!1;function P($){E||(E=!0,w(),!h&&(s!==null?($||(a=2),clearTimeout(s),g(0)):$||(a=1)))}return g(0),o=setTimeout(()=>{r=!0,P(!0)},n),P}function uP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return t!==void 0}function pP(t){return typeof t=="object"&&!Array.isArray(t)}function Wu(t){return typeof t=="string"||t instanceof String}function cm(t){return Gu()&&t instanceof Blob}function Gu(){return typeof Blob<"u"}function lm(t,e,n,i){if(i<e)throw Sd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Sd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function jv(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var _i;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_i||(_i={}));/**
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
 */function fP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n,i,s,o,r,a,l,h,f,g,w=!0,k=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=a,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,P)=>{this.resolve_=E,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Kr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const r=a=>{const l=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&o.addUploadProgressListener(r),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(r),this.pendingConnection_=null;const a=o.getErrorCode()===_i.NO_ERROR,l=o.getStatus();if(!a||fP(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===_i.ABORT;i(!1,new Kr(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new Kr(h,o))})},n=(i,s)=>{const o=this.resolve_,r=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hP(l)?o(l):o()}catch(l){r(l)}else if(a!==null){const l=qu();l.serverResponse=a.getErrorText(),this.errorCallback_?r(this.errorCallback_(a,l)):r(l)}else if(s.canceled){const l=this.appDelete_?Bv():tP();r(l)}else{const l=eP();r(l)}};this.canceled_?n(!1,new Kr(!1,null,!0)):this.backoffId_=dP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Kr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function gP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function bP(t,e,n,i,s,o,r=!0,a=!1){const l=jv(t.urlParams),h=t.url+l,f=Object.assign({},t.headers);return vP(f,e),gP(f,n),yP(f,o),wP(f,i),new mP(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function kP(...t){const e=_P();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(Gu())return new Blob(t);throw new be(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function TP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function CP(t){if(typeof atob>"u")throw aP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rl{constructor(e,n){this.data=e,this.contentType=n||null}}function SP(t,e){switch(t){case Dt.RAW:return new Rl(Hv(e));case Dt.BASE64:case Dt.BASE64URL:return new Rl(zv(t,e));case Dt.DATA_URL:return new Rl(EP(e),AP(e))}throw qu()}function Hv(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=i,r=t.charCodeAt(++n);i=65536|(o&1023)<<10|r&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function IP(t){let e;try{e=decodeURIComponent(t)}catch{throw So(Dt.DATA_URL,"Malformed data URL.")}return Hv(e)}function zv(t,e){switch(t){case Dt.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw So(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Dt.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw So(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=CP(e)}catch(s){throw s.message.includes("polyfill")?s:So(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class qv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw So(Dt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=xP(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function EP(t){const e=new qv(t);return e.base64?zv(Dt.BASE64,e.rest):IP(e.rest)}function AP(t){return new qv(t).contentType}function xP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){let i=0,s="";cm(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(cm(this.data_)){const i=this.data_,s=TP(i,e,n);return s===null?null:new An(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new An(i,!0)}}static getBlob(...e){if(Gu()){const n=e.map(i=>i instanceof An?i.data_:i);return new An(kP.apply(null,n))}else{const n=e.map(r=>Wu(r)?SP(Dt.RAW,r).data:r.data_);let i=0;n.forEach(r=>{i+=r.byteLength});const s=new Uint8Array(i);let o=0;return n.forEach(r=>{for(let a=0;a<r.length;a++)s[o++]=r[a]}),new An(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t){let e;try{e=JSON.parse(t)}catch{return null}return pP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function $P(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function Gv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(t,e){return e}class Je{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||PP}}let Qr=null;function DP(t){return!Wu(t)||t.length<2?t:Gv(t)}function Kv(){if(Qr)return Qr;const t=[];t.push(new Je("bucket")),t.push(new Je("generation")),t.push(new Je("metageneration")),t.push(new Je("name","fullPath",!0));function e(o,r){return DP(r)}const n=new Je("name");n.xform=e,t.push(n);function i(o,r){return r!==void 0?Number(r):r}const s=new Je("size");return s.xform=i,t.push(s),t.push(new Je("timeCreated")),t.push(new Je("updated")),t.push(new Je("md5Hash",null,!0)),t.push(new Je("cacheControl",null,!0)),t.push(new Je("contentDisposition",null,!0)),t.push(new Je("contentEncoding",null,!0)),t.push(new Je("contentLanguage",null,!0)),t.push(new Je("contentType",null,!0)),t.push(new Je("metadata","customMetadata",!0)),Qr=t,Qr}function LP(t,e){function n(){const i=t.bucket,s=t.fullPath,o=new lt(i,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function NP(t,e,n){const i={};i.type="file";const s=n.length;for(let o=0;o<s;o++){const r=n[o];i[r.local]=r.xform(i,e[r.server])}return LP(i,t),i}function Qv(t,e,n){const i=Wv(e);return i===null?null:NP(t,i,n)}function MP(t,e,n,i){const s=Wv(e);if(s===null||!Wu(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const r=encodeURIComponent;return o.split(",").map(h=>{const f=t.bucket,g=t.fullPath,w="/b/"+r(f)+"/o/"+r(g),k=Rc(w,n,i),E=jv({alt:"media",token:h});return k+E})[0]}function OP(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Ku{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){if(!t)throw qu()}function VP(t,e){function n(i,s){const o=Qv(t,s,e);return Jv(o!==null),o}return n}function FP(t,e){function n(i,s){const o=Qv(t,s,e);return Jv(o!==null),MP(o,s,t.host,t._protocol)}return n}function Yv(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=X$():s=Y$():n.getStatus()===402?s=J$(t.bucket):n.getStatus()===403?s=Z$(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function Xv(t){const e=Yv(t);function n(i,s){let o=e(i,s);return i.getStatus()===404&&(o=Q$(t.path)),o.serverResponse=s.serverResponse,o}return n}function UP(t,e,n){const i=e.fullServerUrl(),s=Rc(i,t.host,t._protocol),o="GET",r=t.maxOperationRetryTime,a=new Ku(s,o,FP(t,n),r);return a.errorHandler=Xv(e),a}function BP(t,e){const n=e.fullServerUrl(),i=Rc(n,t.host,t._protocol),s="DELETE",o=t.maxOperationRetryTime;function r(l,h){}const a=new Ku(i,s,r,o);return a.successCodes=[200,204],a.errorHandler=Xv(e),a}function jP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function HP(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=jP(null,e)),i}function zP(t,e,n,i,s){const o=e.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function a(){let B="";for(let F=0;F<2;F++)B=B+Math.random().toString().slice(2);return B}const l=a();r["Content-Type"]="multipart/related; boundary="+l;const h=HP(e,i,s),f=OP(h,n),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+l+"--",k=An.getBlob(g,i,w);if(k===null)throw oP();const E={name:h.fullPath},P=Rc(o,t.host,t._protocol),$="POST",D=t.maxUploadRetryTime,N=new Ku(P,$,VP(t,n),D);return N.urlParams=E,N.headers=r,N.body=k.uploadData(),N.errorHandler=Yv(e),N}class qP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_i.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_i.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_i.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s,o){if(this.sent_)throw oo("cannot .send() more than once");if(Xn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw oo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw oo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw oo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw oo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WP extends qP{initXhr(){this.xhr_.responseType="text"}}function Qu(){return new WP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n){this._service=e,n instanceof lt?this._location=n:this._location=lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xi(e,n)}get root(){const e=new lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Gv(this._location.path)}get storage(){return this._service}get parent(){const e=RP(this._location.path);if(e===null)return null;const n=new lt(this._location.bucket,e);return new xi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw cP(e)}}function GP(t,e,n){t._throwIfRoot("uploadBytes");const i=zP(t.storage,t._location,Kv(),new An(e,!0),n);return t.storage.makeRequestWithTokens(i,Qu).then(s=>({metadata:s,ref:t}))}function KP(t){t._throwIfRoot("getDownloadURL");const e=UP(t.storage,t._location,Kv());return t.storage.makeRequestWithTokens(e,Qu).then(n=>{if(n===null)throw rP();return n})}function QP(t){t._throwIfRoot("deleteObject");const e=BP(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Qu)}function JP(t,e){const n=$P(t._location.path,e),i=new lt(t._location.bucket,n);return new xi(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){return/^[A-Za-z]+:\/\//.test(t)}function XP(t,e){return new xi(t,e)}function Zv(t,e){if(t instanceof Ju){const n=t;if(n._bucket==null)throw sP();const i=new xi(n,n._bucket);return e!=null?Zv(i,e):i}else return e!==void 0?JP(t,e):t}function ZP(t,e){if(e&&YP(e)){if(t instanceof Ju)return XP(t,e);throw Sd("To use ref(service, url), the first argument must be a Storage instance.")}else return Zv(t,e)}function dm(t,e){const n=e==null?void 0:e[Uv];return n==null?null:lt.makeFromBucketSpec(n,t)}function e1(t,e,n,i={}){t.host=`${e}:${n}`;const s=Xn(e);s&&(Md(`https://${t.host}/b`),Od("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=i;o&&(t._overrideAuthToken=typeof o=="string"?o:zm(o,t.app.options.projectId))}class Ju{constructor(e,n,i,s,o,r=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=r,this._bucket=null,this._host=Fv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=G$,this._maxUploadRetryTime=K$,this._requests=new Set,s!=null?this._bucket=lt.makeFromBucketSpec(s,this._host):this._bucket=dm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=lt.makeFromBucketSpec(this._url,e):this._bucket=dm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){lm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){lm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xi(this,e)}_makeRequest(e,n,i,s,o=!0){if(this._deleted)return new lP(Bv());{const r=bP(e,this._appId,i,s,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const um="@firebase/storage",hm="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="storage";function t1(t,e,n){return t=Ve(t),GP(t,e,n)}function n1(t){return t=Ve(t),KP(t)}function i1(t){return t=Ve(t),QP(t)}function tw(t,e){return t=Ve(t),ZP(t,e)}function s1(t=Ud(),e){t=Ve(t);const i=cc(t,ew).getImmediate({identifier:e}),s=Bm("storage");return s&&o1(i,...s),i}function o1(t,e,n,i={}){e1(t,e,n,i)}function r1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ju(n,i,s,e,Pi)}function a1(){Ci(new jn(ew,r1,"PUBLIC").setMultipleInstances(!0)),Lt(um,hm,""),Lt(um,hm,"esm2020")}a1();const nw=s1(Yd);function c1(t,e,n,i){return new Promise((s,o)=>{const r=new Image,a=new FileReader;a.onload=l=>{r.onload=()=>{let h=r.width,f=r.height;if(h>e||f>n){const P=Math.min(e/h,n/f);h=Math.round(h*P),f=Math.round(f*P)}const g=document.createElement("canvas");g.width=h,g.height=f,g.getContext("2d").drawImage(r,0,0,h,f);let k=.82;const E=()=>{g.toBlob(P=>{if(!P)return o(new Error("Canvas compression failed"));P.size<=i||k<=.3?s(P):(k-=.1,E())},"image/jpeg",k)};E()},r.onerror=()=>o(new Error("Failed to load image")),r.src=l.target.result},a.onerror=()=>o(new Error("Failed to read file")),a.readAsDataURL(t)})}async function Yu(t,e,n,i,s){if(!t)throw new Error("No file provided");const o=await c1(t,n,i,s);console.log(`[uploadRecipeImage] Compressed to ${(o.size/1024).toFixed(1)}KB → ${e}`);const r=tw(nw,e);await t1(r,o,{contentType:"image/jpeg"});const a=await n1(r);return console.log("[uploadRecipeImage] Upload complete:",e),a}async function iw(t,e){return Yu(t,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function l1(t,e,n){return Yu(t,`recipes/${e}/steps/${n}.jpg`,800,600,300*1024)}async function d1(t,e,n,i){return Yu(t,`recipes/${e}/comments/${n}/${i}.jpg`,600,600,200*1024)}async function sw(t){try{const e=tw(nw,t);await i1(e),console.log("[deleteRecipeStorageFile] Deleted:",t)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const u1=20,h1=.4,p1="cubic-bezier(0.25, 1.0, 0.5, 1)",f1="cubic-bezier(0.2, 0, 0, 1)";let Xu=null,Zu=!1,ki=!1,ow=0,rw=0,Id=!1,Ed=!1,xe=null,Io=null,Xa=null,os=null;function ii(t){Fn(),Xu=t,Zu=!0,Io=m1,Xa=g1,os=y1,document.addEventListener("touchstart",Io,{passive:!0}),document.addEventListener("touchmove",Xa,{passive:!1}),document.addEventListener("touchend",os,{passive:!0}),document.addEventListener("touchcancel",os,{passive:!0})}function Fn(){Io&&(document.removeEventListener("touchstart",Io),document.removeEventListener("touchmove",Xa),document.removeEventListener("touchend",os),document.removeEventListener("touchcancel",os)),xe&&(xe.style.transform="",xe.style.transition=""),Zu=!1,ki=!1,Xu=null,xe=null,Io=null,Xa=null,os=null}function m1(t){if(!Zu)return;const e=t.touches[0];if(e.clientX>u1)return;const n=t.target;n&&(n.classList.contains("bkbtn")||n.closest(".bkbtn"))||(xe=document.querySelector(".ov.active"),xe&&(ki=!0,ow=e.clientX,rw=e.clientY,Id=!1,Ed=!1,xe.style.transition="none"))}function g1(t){if(!ki||!xe)return;const e=t.touches[0],n=e.clientX-ow,i=e.clientY-rw;if(!Id){if(Math.abs(n)<8&&Math.abs(i)<8)return;Id=!0,Ed=Math.abs(n)>Math.abs(i)}if(!Ed){ki=!1,xe.style.transform="",xe.style.transition="";return}t.preventDefault();const s=Math.max(0,n);xe.style.transform=`translateX(${s}px)`}function y1(t){if(!ki||!xe){ki=!1;return}ki=!1;const e=xe.style.transform,n=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(n/i>=h1){xe.style.transition=`transform 0.25s ${f1}`,xe.style.transform=`translateX(${i}px)`;const o=xe,r=Xu;setTimeout(()=>{r&&r(),o.style.transform="",o.style.transition=""},260)}else{xe.style.transition=`transform 0.3s ${p1}`,xe.style.transform="translateX(0)";const o=xe;setTimeout(()=>{o.style.transition=""},310)}}let bs="view",Vt=null,rs={},$t=[],gi=[],yi=0,Ad=!1,vr=!1,pm=!1,fm=!1;function v1(t){if(Ad)return;Ad=!0,t.querySelectorAll(".rcd").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function w1(){Ad=!1}let wr={add:!1,edit:!1};function b1(t){if(t<=0)return"";if(t<60)return String(t);const e=Math.floor(t/60),n=t%60;return n===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${n} min`}function _s(t,e){const n=d(t),i=d(e);if(!n)return"";const s=n.value.trim();if(!s)return"";if(isNaN(s))return s;const o=i?i.value:"min",r=parseFloat(s);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function mm(t,e){const n=d(t),i=d(e);if(!n)return NaN;const s=parseFloat(n.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function _1(t){if(wr[t])return;const e=t==="add"?"rpreptime":"epreptime",n=t==="add"?"rpreptimeunit":"epreptimeunit",i=t==="add"?"rcooktime":"ecooktime",s=t==="add"?"rcooktimeunit":"ecooktimeunit",o=t==="add"?"rtotaltime":"etotaltime",r=t==="add"?"rtotaltimeunit":"etotaltimeunit",a=mm(e,n),l=mm(i,s),h=d(o),f=d(r);if(!h)return;if(isNaN(a)&&isNaN(l)){h.value="";return}const g=(isNaN(a)?0:a)+(isNaN(l)?0:l);if(g<=0){h.value="";return}if(g>=60){const w=b1(g);h.value=w,f&&(f.value="min")}else h.value=String(g),f&&(f.value="min")}function k1(t){wr[t]=!0}function aw(t,e){const n=d(t);if(!n)return"";const i=n.value.trim();if(!i)return"";if(isNaN(i))return i;const s=d(e),o=s?s.value:"min",r=parseFloat(i);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function en(t){if(!t)return{value:"",unit:"min"};const e=t.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const n=t.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return n?{value:n[1],unit:"min"}:/\d+\s*hour/i.test(t)&&/\d+\s*min/i.test(t)?{value:t,unit:"min"}:isNaN(t)?{value:t,unit:"min"}:{value:t,unit:"min"}}function cw(t,e){const n=d(t);if(!n)return;const i=n.querySelectorAll(".diff-pill"),s=n.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(o=>o.classList.remove("sel")),!s){const o=n.querySelector(`.diff-pill[data-val="${e}"]`);o&&o.classList.add("sel")}}function lw(t){const e=document.querySelector(`#${t} .diff-pill.sel`);return e?e.dataset.val:""}function eh(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function dw(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function T1(t){t.classList.toggle("sel")}const wa=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function xd(t){if(t==="my"){const e=u.recFilters;let n=e.tags.length+e.protein.length;return e.difficulty&&n++,e.cookTime!=="any"&&n++,e.serves!=="any"&&n++,n}else{let e=u.comTags.length;return u.comCuisine!=="all"&&e++,u.comTime!=="any"&&e++,u.comMinRating>0&&e++,e}}function th(t){const n=fe(t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=xd(t),s=i>0?` (${i})`:"";let o=`<button class="filter-toggle" id="${t}-filter-toggle" onclick="toggleFilterPanel('${t}')">
    <span>Filters${s}</span><span>${n?"▲":"▼"}</span>
  </button>`;if(o+=`<div class="filter-panel" id="${t}-filter-panel" style="display:${n?"block":"none"}">`,t==="my"){const r=u.recFilters;o+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(a=>{o+=`<button class="filter-pill${r.difficulty===a?" sel":""}" onclick="setRecDifficulty('${a}')">${a}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([a,l])=>{o+=`<button class="filter-pill${r.cookTime===a?" sel":""}" onclick="setRecCookTime('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([a,l])=>{o+=`<button class="filter-pill${r.serves===a?" sel":""}" onclick="setRecServes('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',wa.find(a=>a.cat==="Protein").tags.forEach(a=>{o+=`<button class="filter-pill${r.protein.includes(a)?" sel":""}" onclick="toggleRecProtein('${a}')">${a}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${fe("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,wa.forEach(a=>{a.tags.forEach(l=>{o+=`<button class="filter-pill${r.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${fe("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${r.tags.length?` (${r.tags.length} selected)`:""}</button>`,o+="</div>",i>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else o+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comMinRating===a?" sel":""}" onclick="setComMinRating(${a})">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comTime===a?" sel":""}" onclick="setComTime('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(a=>{o+=`<button class="filter-pill${u.comCuisine===a.toLowerCase()?" sel":""}" onclick="setComCuisine('${a.toLowerCase()}')">${a==="all"?"All":a}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comSort===a?" sel":""}" onclick="setComSort('${a}')">${l}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${fe("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,wa.forEach(a=>{a.tags.forEach(l=>{o+=`<button class="filter-pill${u.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${fe("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${u.comTags.length?` (${u.comTags.length} selected)`:""}</button>`,o+="</div>",xd("com")>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return o+="</div>",o}function C1(t){u.recSearch=t;const e=d("rec-search"),n=d("rec-search-fab-input");e&&e!==document.activeElement&&(e.value=t),n&&n!==document.activeElement&&(n.value=t),ut()}function S1(t){u.recSort=t,tt("ks-recSort",t),ut()}function I1(t){const e=t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",n=d(`${t}-filter-panel`),i=d(`${t}-filter-toggle`);if(!n)return;const s=n.style.display!=="none";n.style.display=s?"none":"block",tt(e,!s);const o=xd(t),r=o>0?` (${o})`:"";i&&(i.innerHTML=`<span>Filters${r}</span><span>${s?"▼":"▲"}</span>`)}function E1(t){u.recFilters.difficulty=u.recFilters.difficulty===t?"":t,Vs(),ut()}function A1(t){u.recFilters.cookTime=t,Vs(),ut()}function x1(t){u.recFilters.serves=t,Vs(),ut()}function R1(t){const e=u.recFilters.protein.indexOf(t);e>=0?u.recFilters.protein.splice(e,1):u.recFilters.protein.push(t),Vs(),ut()}function $1(t){const e=u.recFilters.tags.indexOf(t);e>=0?u.recFilters.tags.splice(e,1):u.recFilters.tags.push(t),Vs(),ut()}function P1(){const t=fe("ks-recTagsExpanded");tt("ks-recTagsExpanded",!t),ut()}function D1(){u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},u.recSearch="",Vs(),ut()}function Vs(){tt("ks-recFilters",u.recFilters)}function L1(){const t=fe("ks-recFilters");t&&(u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...t}),u.recSort=fe("ks-recSort")||"az"}L1();function N1(){const t=u.recFilters;return!!(u.recSearch||u.recSort&&u.recSort!=="az"||t.tags.length||t.difficulty||t.cookTime!=="any"||t.serves!=="any"||t.protein.length)}function uw(){if(pm)return;pm=!0;const t=document.createElement("button");t.id="rec-search-fab",t.className="rec-search-fab",t.setAttribute("aria-label","Search & filter recipes"),t.textContent="🔍",t.onclick=()=>mw(),document.body.appendChild(t)}function hw(){if(fm)return;const t=d("rbody");t&&(fm=!0,t.addEventListener("scroll",()=>{const e=d("rec-search-fab");if(!e)return;const n=d("screen-recipes");if(!n||!n.classList.contains("active"))return;const i=d("ov-erec");if(i&&i.classList.contains("active"))return;const s=d("rec-inline-search");t.scrollTop>100?(e.classList.add("visible"),s&&(s.style.opacity="0")):(e.classList.remove("visible"),s&&(s.style.opacity="1"),vr&&$c())},{passive:!0}))}function pw(){if(uw(),hw(),d("rec-search-panel"))return;const t=document.createElement("div");t.id="rec-search-backdrop",t.className="rec-search-backdrop",t.onclick=()=>$c(),document.body.appendChild(t);const e=document.createElement("div");e.id="rec-search-panel",e.className="rec-search-panel",document.body.appendChild(e)}function fw(){const t=d("rec-search-fab");t&&t.classList.toggle("has-filters",N1())}function mw(){vr?$c():M1()}function M1(){vr=!0,pw();const t=d("rec-search-fab");t&&t.classList.remove("visible");const e=d("rec-search-panel"),n=d("rec-search-backdrop");if(!e)return;const i=u.recSort||"az";e.innerHTML=`
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
    ${th("my")}
  `,n&&n.classList.add("open"),e.classList.add("open"),setTimeout(()=>{const s=d("rec-search-fab-input");s&&s.focus()},250)}function $c(){vr=!1;const t=d("rec-search-panel"),e=d("rec-search-backdrop");t&&t.classList.remove("open"),e&&e.classList.remove("open");const n=d("screen-recipes"),i=n&&n.classList.contains("active"),s=d("rec-search-fab"),o=d("rbody");s&&o&&o.scrollTop>100&&i&&s.classList.add("visible"),fw()}function br(){const t=d("rec-search-panel"),e=d("rec-search-backdrop"),n=d("rec-search-fab");t&&t.classList.remove("open"),e&&e.classList.remove("open"),n&&n.classList.remove("visible"),vr=!1}function tn(){const t=d("screen-recipes");if(!t||!t.classList.contains("active"))return;const e=d("rec-search-fab"),n=d("rbody");e&&n&&n.scrollTop>100&&e.classList.add("visible")}function O1(){const t=fe("ks-comTagsOpen");tt("ks-comTagsOpen",!t),ft()}function V1(){u.comTags=[],u.comCuisine="all",u.comTime="any",u.comMinRating=0,u.comSort="newest",u.comSearch="",u.comPage=0,ft()}function F1(t){if(!t)return 0;const e=t.match(/(\d+)/);return e?parseInt(e[1]):0}function U1(t){const e=Array.from({length:5},(f,g)=>`<span class="star${g<t.rating?" on":""}">${g<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"",i=t.imageUrl?`<div class="rcd-cover"><img src="${t.imageUrl}" loading="lazy" alt="" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[];if(t.difficulty){const f=t.difficulty==="easy"?"recipe-badge-easy":t.difficulty==="hard"?"recipe-badge-hard":"recipe-badge-medium",g=t.difficulty.charAt(0).toUpperCase()+t.difficulty.slice(1);s.push(`<span class="recipe-badge ${f}">${g}</span>`)}(t.totalTime||t.cookTime)&&s.push(`<span class="recipe-badge recipe-badge-time">⏱ ${t.totalTime||t.cookTime}</span>`);const o=[t.servings?`🍽 ${t.servings} servings`:""].filter(Boolean),r=[...s,...o.map(f=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${f}</span>`)],a=r.length?`<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;align-items:center">${r.join("")}</div>`:"",l=t.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${t.summary}</div>`:t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:"",h=`<div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${a}${l}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div>`;return t.imageUrl?`<div class="rcd rcd-has-image${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${i}<div class="rcd-content">${h}</div></div>`:`<div class="rcd${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${h}</div>`}function B1(t){u.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=d("rtab-"+t);e&&e.classList.add("active"),t==="community"?_w():ut()}function ut(){if(uw(),hw(),u.rt==="community")return;let t=[...u.recs];if(u.rt==="fav"?t=t.filter(r=>r.favorited):u.rt==="top"?t=t.filter(r=>r.rating>=4):u.rt==="quick"?t=t.filter(r=>(r.tags||[]).includes("Quick")):u.rt==="kid"&&(t=t.filter(r=>(r.tags||[]).includes("Kid-Friendly"))),u.recSearch){const r=u.recSearch.toLowerCase();t=t.filter(a=>(a.name||"").toLowerCase().includes(r))}const e=u.recFilters;e.tags.length&&(t=t.filter(r=>e.tags.every(a=>(r.tags||[]).includes(a)))),e.difficulty&&(t=t.filter(r=>r.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(t=t.filter(r=>{const a=_a(r.cookTime||r.totalTime);return a?e.cookTime==="under30"?a<=30:e.cookTime==="under60"?a<=60:e.cookTime==="over60"?a>60:!0:!1})),e.serves&&e.serves!=="any"&&(t=t.filter(r=>{const a=F1(r.servings);return a?e.serves==="1-2"?a<=2:e.serves==="3-4"?a>=3&&a<=4:e.serves==="5+"?a>=5:!0:!1})),e.protein.length&&(t=t.filter(r=>e.protein.some(a=>(r.tags||[]).includes(a))));const n=u.recSort||"az";n==="az"?t.sort((r,a)=>(r.name||"").localeCompare(a.name||"")):n==="newest"?t.sort((r,a)=>new Date(a.savedAt||0)-new Date(r.savedAt||0)):n==="rating"&&t.sort((r,a)=>(a.rating||0)-(r.rating||0));const i=d("rsub");i&&(i.textContent=t.length+" recipe"+(t.length!==1?"s":""));const s=d("rbody");if(!s)return;pw(),fw();const o=`<div id="rec-inline-search" style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(u.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${n==="az"?" selected":""}>A → Z</option>
        <option value="newest"${n==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${n==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${th("my")}
  </div>`;if(!t.length){const r=u.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length,a=r?"🔍":u.rt==="fav"?"❤️":u.rt==="top"?"⭐":u.rt==="quick"?"⚡":u.rt==="kid"?"🧸":"🍝",l=r?"No recipes match your filters.<br><span style='font-size:.78rem;color:var(--ac)'>Try adjusting or clearing filters</span>":u.rt==="fav"?"No favorites yet!<br><span style='font-size:.78rem;color:var(--ac)'>Tap the heart on any recipe to save it here</span>":u.rt==="top"?"No 4–5 star recipes yet.<br><span style='font-size:.78rem;color:var(--ac)'>Rate your recipes to see them here</span>":u.rt==="quick"?"No quick recipes saved yet.":u.rt==="kid"?"No kid-friendly recipes yet.":"Your recipe book is empty.<br><span style='font-size:.78rem;color:var(--ac)'>Tap + Add or cook a meal to start collecting</span>";s.innerHTML=o+`<div class="es"><div class="ei">${a}</div><p>${l}</p></div>`;return}s.innerHTML=o+`<div class="recipe-grid">${t.map(U1).join("")}</div>`,v1(s)}async function j1(t){const e=u.recs.find(n=>n.id===t);e&&(await it({...e,favorited:!e.favorited}),b(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function H1(){d("savrecbtn").disabled=!d("rn").value.trim()}async function z1(){const t=d("rurl").value.trim();if(!t)return;const e=d("rurlstatus"),n=d("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",n.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),n.disabled=!1;return}const o=s.recipe,r=nh(o);if(d("rn").value=o.title||"",d("rd").value=r,d("rnotes").value=o.notes||"",d("rsourceurl").value=t,d("rcuisine")&&(d("rcuisine").value=o.cuisine||""),o.tags&&o.tags.length&&dw("rtags",o.tags),d("savrecbtn").disabled=!o.title,eD(o.imageUrl),u._importedRecipe={ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],imageUrl:o.imageUrl||null,prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",summary:o.summary||""},o.prepTime){const l=en(o.prepTime);d("rpreptime")&&(d("rpreptime").value=l.value),d("rpreptimeunit")&&(d("rpreptimeunit").value=l.unit)}if(o.cookTime){const l=en(o.cookTime);d("rcooktime")&&(d("rcooktime").value=l.value),d("rcooktimeunit")&&(d("rcooktimeunit").value=l.unit)}if(o.totalTime){const l=en(o.totalTime);d("rtotaltime")&&(d("rtotaltime").value=l.value),d("rtotaltimeunit")&&(d("rtotaltimeunit").value=l.unit),wr.add=!0}o.servings&&d("rserves")&&(d("rserves").value=o.servings),o.difficulty&&["Easy","Medium","Hard"].includes(o.difficulty)&&cw("rdiff",o.difficulty),o.recipeYield&&d("ryield")&&(d("ryield").value=o.recipeYield),o.storageInstructions&&d("rstorage")&&(d("rstorage").value=o.storageInstructions);const a=[o.prepTime?`Prep: ${o.prepTime}`:"",o.cookTime?`Cook: ${o.cookTime}`:"",o.servings?`Serves: ${o.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(a.length?a.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}function q1(t){const e=d("importOnePane"),n=d("importManyPane"),i=d("importOneTab"),s=d("importManyTab");e&&(e.style.display=t==="one"?"block":"none"),n&&(n.style.display=t==="many"?"block":"none"),i&&(i.style.background=t==="one"?"var(--ac)":"",i.style.color=t==="one"?"var(--bg)":""),s&&(s.style.background=t==="many"?"var(--ac)":"",s.style.color=t==="many"?"var(--bg)":"")}function W1(t){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(t.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function G1(t){const e=t.toLowerCase(),n=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const o of n)if(o.pattern.test(e))return{status:"video",reason:`${o.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const o of i)if(o.pattern.test(e))return{status:"private",reason:`${o.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const o of s)if(o.pattern.test(e))return{status:"paywall",reason:`${o.name} — may be paywalled`};return{status:"ok",reason:""}}async function K1(){const t=d("bulkUrls"),e=t?t.value.trim():"";if(!e)return;const n=W1(e);if(!n.length){b("No URLs found in the text");return}const i=n.map(E=>({url:E,...G1(E)})),s=i.filter(E=>E.status==="ok"),o=i.filter(E=>E.status==="paywall"),r=i.filter(E=>E.status==="video"),a=i.filter(E=>E.status==="private"),l=d("bulkImportProgress");if(!l)return;l.style.display="block";const h=d("bulkImportBtn");h&&(h.disabled=!0);const f=[...s,...o],g=[],w=f.filter(E=>{const P=u.recs.find($=>$.sourceUrl&&$.sourceUrl===E.url);return P?(g.push({url:E.url,name:P.name||P.url}),!1):!0}),k={success:[],duplicates:g,failed:[],skipped:[...r,...a]};for(let E=0;E<w.length;E++){const P=w[E],$=P.status==="paywall"?" — may be paywalled":"";E>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${E+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(D=>setTimeout(D,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${E+1} of ${w.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const D=await Q1(P.url,l,E,w.length);if(D.success&&D.recipe){const N=D.recipe,B=nh(N),F="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await it({id:F,name:N.title||"Untitled Recipe",description:B,notes:N.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:N.imageUrl||null,ingredientsRaw:N.ingredients||[],stepsRaw:N.steps||[],prepTime:N.prepTime||"",cookTime:N.cookTime||"",totalTime:N.totalTime||"",servings:N.servings||"",difficulty:N.difficulty||"",recipeYield:N.recipeYield||"",storageInstructions:N.storageInstructions||"",tags:N.tags||[],savedAt:new Date().toLocaleDateString()}),k.success.push({url:P.url,name:N.title})}else{const N=Y1(D.reason,D.error);k.failed.push({url:P.url,error:N})}}catch(D){k.failed.push({url:P.url,error:D.message})}}X1(l,k),h&&(h.disabled=!1)}async function Q1(t,e,n,i){const s=[1e4,2e4,4e4],o=3,r=J1(t),a=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});let l=await a.json();if(a.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<o;h++){const f=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${f}s before retrying ${r}… (${n+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function J1(t){try{const e=new URL(t),n=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${n}/${i}`:n}catch{return t.length>40?"…"+t.slice(-40):t}}function Y1(t,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[t]||e||"Unknown error"}function X1(t,e){let n="";e.success.length&&(n+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.duplicates.length&&(n+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.skipped.length&&(n+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{n+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),n+="</div>"),e.failed.length&&(n+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,n+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{n+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',n+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,n+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,n+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,n+="</div>"}),n+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(n='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),t.innerHTML=n}async function Z1(t){const e=d("bulkImportProgress");if(!e)return;const n=u.recs.find(s=>s.sourceUrl&&s.sourceUrl===t);if(n){b(`Already imported: ${n.name||t}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const o=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(o.success&&o.recipe){const r=o.recipe,a=nh(r),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await it({id:l,name:r.title||"Untitled Recipe",description:a,notes:r.notes||"",rating:0,favorited:!1,sourceUrl:t,source:"AI Import",imageUrl:r.imageUrl||null,ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",tags:r.tags||[],savedAt:new Date().toLocaleDateString()}),b(`Imported: ${r.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${r.title||t} — imported</div>`)}else b("Import failed: "+(o.error||"Unknown error")),e.innerHTML=i}catch(s){b("Import failed: "+s.message),e.innerHTML=i}}function nh(t){const e=[];return t.description&&(e.push(t.description),e.push("")),t.ingredients&&t.ingredients.length&&(e.push("Ingredients:"),t.ingredients.forEach(n=>{if(typeof n=="string")e.push(`- ${n}`);else{const i=[n.amount,n.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${n.name}`)}}),e.push("")),t.steps&&t.steps.length&&(e.push("Steps:"),t.steps.forEach((n,i)=>{e.push(`${i+1}. ${n}`)})),e.join(`
`)}function eD(t){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!t)return;const n=d("addRecCoverZone");n&&(n.classList.add("has-preview"),n.innerHTML=`<img src="${t}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function tD(){var P,$,D,N;const t=d("rn").value.trim();if(!t)return;const e=d("rd").value.trim(),n=d("rsourceurl")?d("rsourceurl").value.trim():"",i=d("rcuisine")?d("rcuisine").value.trim():"",s=eh("rtags"),o=document.getElementById("rpubtoggle"),r=o?o.classList.contains("on"):!1,a=u._importedRecipe||{},l="rec-"+Date.now();let h=a.imageUrl||null;if(Vt)try{b("Uploading cover photo…"),h=await iw(Vt,l),Vt=null}catch(B){console.error("Cover upload failed:",B),b("Cover photo upload failed — saving recipe without it")}const f={id:l,name:t,rating:u.nr,favorited:!1,notes:d("rnotes").value.trim(),description:e,source:n?"AI Import":"Manual",sourceUrl:n||null,imageUrl:h,tags:s,cuisine:i,prepTime:_s("rpreptime","rpreptimeunit")||a.prepTime||"",cookTime:_s("rcooktime","rcooktimeunit")||a.cookTime||"",totalTime:aw("rtotaltime","rtotaltimeunit")||a.totalTime||"",servings:(d("rserves")?d("rserves").value.trim():"")||a.servings||"",difficulty:lw("rdiff")||a.difficulty||"",recipeYield:(d("ryield")?d("ryield").value.trim():"")||a.recipeYield||"",storageInstructions:(d("rstorage")?d("rstorage").value.trim():"")||a.storageInstructions||"",summary:(d("rsummary")?d("rsummary").value.trim():"")||a.summary||"",ingredientsRaw:a.ingredientsRaw||[],stepsRaw:a.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:r};if(!f.summary&&(f.name||f.description))try{b("Generating summary…");const B=((P=f.ingredientsRaw)==null?void 0:P.join(", "))||f.description||"",ne=((N=(D=($=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${f.name}
Cuisine: ${f.cuisine||""}
Ingredients: ${B.substring(0,500)}`}]})})).json()).content)==null?void 0:$[0])==null?void 0:D.text)==null?void 0:N.trim())||"";ne&&(f.summary=ne)}catch(B){console.error("Auto-summary generation failed:",B)}if(r){const B=Q(),F=(B==null?void 0:B.displayName)||localStorage.getItem("ks-who")||"Anonymous",z=await eu(f,F);f.publicId=z.id,Pe("published",Z(f.name||"a recipe")+" to community")}await it(f),d("rn").value="",d("rnotes").value="",d("rd").value="",d("rsourceurl").value="",d("rurl").value="",d("rcuisine")&&(d("rcuisine").value=""),d("rpreptime")&&(d("rpreptime").value=""),d("rcooktime")&&(d("rcooktime").value=""),d("rtotaltime")&&(d("rtotaltime").value=""),d("rserves")&&(d("rserves").value=""),d("rpreptimeunit")&&(d("rpreptimeunit").value="min"),d("rcooktimeunit")&&(d("rcooktimeunit").value="min"),d("rtotaltimeunit")&&(d("rtotaltimeunit").value="min"),d("ryield")&&(d("ryield").value=""),d("rstorage")&&(d("rstorage").value=""),d("rsummary")&&(d("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(B=>B.classList.remove("sel")),wr.add=!1,dw("rtags",[]),u.nr=0,u._importedRecipe=null,d("savrecbtn").disabled=!0,xo("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const k=d("addRecCoverZone");k&&(k.classList.remove("has-preview"),k.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),o&&o.classList.remove("on");const E=d("rurlstatus");E&&(E.style.display="none",E.textContent=""),b("Recipe saved! 📖"),ue("arec")}function gw(t){const e=u.recs.find(v=>v.id===t);if(!e)return;u.eid=t,bs="view";const n=d("erecTitle");n&&(n.textContent="Recipes"),ii(()=>_r());let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" loading="lazy" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
    </div>`;const s=e.imageUrl,o=e.rating||0,r=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(v,_)=>`<span class="star${_<o?" on":""}" onclick="setViewStar(${_+1})" style="cursor:pointer">${_<o?"★":"☆"}</span>`).join("")}${o>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,a=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${de(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${r}
    ${a}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),f=h.length?`<div class="rv-meta">${h.map(v=>`<div class="rv-meta-pill">${v}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(v=>`<span class="com-tag">${v}</span>`).join("")}</div>`:"";let k="";if(e.ingredientsRaw&&e.ingredientsRaw.length)k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(_=>{if(typeof _=="string")return`<li>${de(_)}</li>`;const S=[_.amount,_.unit].filter(Boolean).join(" ");return`<li>${S?`<strong>${de(S)}</strong> `:""}${de(_.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const v=e.description.split(`
`),_=v.findIndex(C=>/^ingredients/i.test(C.trim())),S=v.findIndex(C=>/^steps/i.test(C.trim()));if(_>=0){const C=S>_?S:v.length,A=v.slice(_+1,C).filter(T=>T.trim());A.length&&(k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${A.map(T=>`<li>${de(T.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let E="";if(e.stepsRaw&&e.stepsRaw.length)E=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((_,S)=>{var Ie;const C=typeof _=="string"?_:_.text||"",A=(Ie=e.stepPhotos)==null?void 0:Ie[S],T=A?`<div class="rv-step-photo" onclick="openPhotoViewer(['${A}'],0)"><img src="${A}" alt="Step ${S+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${de(C)}${T}</li>`}).join("")}</ol>`;else if(e.description){const v=e.description.split(`
`),_=v.findIndex(S=>/^steps/i.test(S.trim()));if(_>=0){const S=v.slice(_+1).filter(C=>C.trim());S.length&&(E=`<div class="rv-section">Instructions</div><ol class="rv-steps">${S.map(C=>`<li>${de(C.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!k&&!E&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${de(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${de(e.storageInstructions)}</div>`:"",D=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${de(e.notes)}</div>`:"";let N="";const B=(e.name||"").toLowerCase();if(B){const v=(u.activity||[]).filter(_=>_.action==="cooked"&&(_.itemName||"").toLowerCase().includes(B)).map(_=>new Date(_.timestamp)).sort((_,S)=>S-_).slice(0,5).map(_=>_.toLocaleDateString("en-US",{month:"short",day:"numeric"}));v.length&&(N=`<div style="margin-top:14px;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">🍳 Made this before</div>
        <div style="font-size:.84rem;color:var(--tx)">${v.join(", ")}</div>
      </div>`)}const F=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",z=e.householdNotes||"",ne=`<div style="margin-top:14px" id="rv-hh-notes-section">
    <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">📝 Household Notes</div>
    <div id="rv-hh-notes-display" onclick="editHouseholdNotes('${e.id}')" style="cursor:pointer;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1);font-size:.84rem;color:${z?"var(--tx)":"var(--mt)"};line-height:1.6;min-height:40px;font-style:${z?"normal":"italic"}">${z?de(z):"Tap to add a note…"}</div>
    <textarea id="rv-hh-notes-edit" style="display:none;width:100%;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--ac);font-size:.84rem;color:var(--tx);line-height:1.6;font-family:'DM Sans',sans-serif;resize:vertical;min-height:70px" onblur="saveHouseholdNotes('${e.id}')" placeholder="e.g. Add extra garlic next time, Double the sauce…">${z}</textarea>
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
    ${k}
    ${E}
    ${P}
    ${$}
    ${D}
    ${ne}
    ${N}
    ${F}
  `,We("erec"),br()}function nD(t){const e=d("rv-hh-notes-display"),n=d("rv-hh-notes-edit");!e||!n||(e.style.display="none",n.style.display="block",n.focus())}async function iD(t){const e=d("rv-hh-notes-edit"),n=d("rv-hh-notes-display");if(!e)return;const i=e.value.trim(),s=u.recs.find(o=>o.id===t);s&&(s.householdNotes=i,await it(s)),n&&(n.textContent=i||"Tap to add a note…",n.style.color=i?"var(--tx)":"var(--mt)",n.style.fontStyle=i?"normal":"italic",n.style.display="block"),e.style.display="none"}function _r(){if(bs==="edit"&&u._editingComId){Fn();const e=u._editingComId;u._editingComId=null,tc(e);return}if(bs==="edit"&&u.eid){Fn(),gw(u.eid);return}const t=d("erecTitle");t&&(t.textContent="Recipes"),ue("erec"),Fn(),tn()}function de(t){return(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ih(t){const e=u.recs.find(E=>E.id===t);if(!e)return;u.eid=t,bs="edit",Vt=null,rs={};const n=d("erecTitle");n&&(n.textContent="Edit Recipe"),ii(()=>_r());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],o=E=>s.includes(E)?" sel":"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=en(e.prepTime),f=en(e.cookTime),g=en(e.totalTime);wr.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
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
  </div>`;let k="";e.stepsRaw&&e.stepsRaw.length&&(k=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((P,$)=>{var B;const D=typeof P=="string"?P:P.text||"",N=(B=e.stepPhotos)==null?void 0:B[$];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${$+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${de(D)}</div>
        ${N?`<img src="${N}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${N}'],0)" alt="Step ${$+1}"/>`:""}
        <button class="step-photo-btn${N?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${$})" title="${N?"Change":"Add"} step photo">📷</button>
        ${N?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${$})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
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
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,We("erec"),br()}async function sD(){var z,ne,I;const t=u.recs.find(v=>v.id===u.eid);if(!t)return;const e=t.rating||0,n=eh("etags"),i=d("ecuis")?d("ecuis").value.trim():t.cuisine||"";let s=t.imageUrl;if(Vt)try{b("Uploading cover photo…"),s=await iw(Vt,t.id),Vt=null}catch(v){console.error("Cover upload failed:",v),b("Cover photo upload failed — saving recipe without it")}else t._removeCover&&(s=null,delete t._removeCover,sw(`recipes/${t.id}/cover.jpg`).catch(()=>{}));const o={...t.stepPhotos||{}},r=Object.keys(rs);if(r.length){b("Uploading step photos…");for(const v of r)try{const _=await l1(rs[v],t.id,parseInt(v));o[v]=_}catch(_){console.error(`Step ${v} photo upload failed:`,_)}rs={}}const a=_s("epreptime","epreptimeunit")||"",l=_s("ecooktime","ecooktimeunit")||"",h=aw("etotaltime","etotaltimeunit")||"",f=d("eserves")?d("eserves").value.trim():t.servings||"",g=lw("ediff")||"",w=d("eyield")?d("eyield").value.trim():t.recipeYield||"",k=d("estorage")?d("estorage").value.trim():t.storageInstructions||"";let E=d("esummary")?d("esummary").value.trim():t.summary||"";const P=d("ern").value.trim(),$=d("erd").value.trim(),D=P!==t.name,N=$!==(t.description||"")&&Math.abs($.length-(t.description||"").length)>20,B=i!==(t.cuisine||"");if(E===(t.summary||"")&&(D||N||B))try{const C=(((I=(ne=(z=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${t.name}
New title: ${P}
Old cuisine: ${t.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${$.substring(0,300)}
Old summary: ${E||"(none)"}`}]})})).json()).content)==null?void 0:z[0])==null?void 0:ne.text)==null?void 0:I.trim())||"").match(/\{[\s\S]*\}/);if(C){const A=JSON.parse(C[0]);A.shouldUpdate&&A.newSummary&&(E=A.newSummary,b("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const F={...t,name:P,rating:e,description:$,notes:d("erno").value.trim(),favorited:d("etog").classList.contains("on"),tags:n,cuisine:i,imageUrl:s,stepPhotos:o,prepTime:a,cookTime:l,totalTime:h,servings:f,difficulty:g,recipeYield:w,storageInstructions:k,summary:E};await it(F),b("Recipe updated!"),ue("erec"),tn(),t.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const _={title:F.name,summary:F.summary,cuisine:F.cuisine,tags:F.tags,description:F.description,ingredients:F.description,ingredientsRaw:F.ingredientsRaw||[],stepsRaw:F.stepsRaw||[],prepTime:F.prepTime,cookTime:F.cookTime,totalTime:F.totalTime,servings:F.servings,difficulty:F.difficulty,imageUrl:F.imageUrl},S=(v=u.comRecs)==null?void 0:v.find(C=>C.id===t.publicId);S?await M(`public_recipes/${t.publicId}`,{...S,..._,id:void 0}):await M(`public_recipes/${t.publicId}`,_),b("Community version updated!")}catch(_){console.error("Community sync failed:",_),b("Couldn't update community version")}},300)}async function oD(){const t=u.recs.find(i=>i.id===u.eid);if(!t)return;const e=t.name||t.title||"this recipe";if(!t.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await wl(u.eid),b("Recipe deleted"),ue("erec"),tn();return}const n=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(n)if(n.trim()==="1")await wl(u.eid),b("Local copy deleted — community version kept"),ue("erec"),tn();else if(n.trim()==="2"){try{await tu(t.publicId)}catch(i){console.error("Failed to remove community version:",i)}await wl(u.eid),b("Recipe deleted from everywhere"),ue("erec"),tn()}else b("Cancelled — type 1 or 2 to delete")}async function rD(t){const e=d("erd");if(!e)return;const n=e.value.trim();if(!n){b("No ingredients to scale");return}const i=d("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"";r?(e.value=r.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${t}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function aD(){const t=d("rsub");t&&(t.textContent="Thinking…");const e=u.inv.map(s=>`${s.name} (${cs(s.qty,s.unit)})`).join(", "),n=u.recs.map(s=>s.name).join(", "),i=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other||null].filter(Boolean).join(", ");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",a=d("rbody");a&&(a.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Nb(r)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function cD(t){const e=u.recs.find(n=>n.id===t);if(!e||!e.description){b("No ingredients listed");return}b("Parsing ingredients…");try{const n=u.inv.map(h=>h.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),o=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(o).filter(h=>Nm(h)).filter(h=>!n.some(f=>f.includes(h.toLowerCase())||h.toLowerCase().includes(f)));if(!l.length){b("All ingredients already in pantry ✓");return}for(const h of l)await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:h,qty:1,checked:!1,src:"recipe"});b(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),ue("erec"),tn(),window.showScreen("shopping")}catch{b("Couldn't parse ingredients")}}async function lD(t){const e=t||u.eid,n=u.recs.find(s=>s.id===e);if(!n){b("Recipe not found");return}const i=d("parseAIBtn");i&&(i.disabled=!0,i.textContent="✨ Parsing with AI...");try{const s=n.description||"",o=(n.stepsRaw||[]).map((f,g)=>{const w=typeof f=="string"?f:f.text||"";return`${g+1}. ${w}`}).join(`
`)||"",a=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:s,instructions:o,title:n.name||""})})).json();if(!a.success){b(a.error||"AI parsing failed");return}const{ingredients:l,steps:h}=a.result;dD(e,l,h)}catch(s){console.error("Parse with AI failed:",s),b("Couldn't parse recipe — try again")}finally{i&&(i.disabled=!1,i.textContent="✨ Parse with AI")}}function dD(t,e,n){const i=e.map(r=>{const a=[r.amount,r.unit].filter(Boolean).join(" ");return`<div style="padding:6px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
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
  </div>`,o._parsedData={recipeId:t,ingredients:e,steps:n},o.addEventListener("click",r=>{r.target===o&&Za()}),document.body.appendChild(o)}function Za(){const t=d("parsePreviewModal");t&&t.remove()}async function uD(){const t=d("parsePreviewModal");if(!t||!t._parsedData)return;const{recipeId:e,ingredients:n,steps:i}=t._parsedData,s=u.recs.find(a=>a.id===e);if(!s){b("Recipe not found"),Za();return}let o=[];n.length&&(o.push("Ingredients:"),n.forEach(a=>{const l=[a.amount,a.unit].filter(Boolean).join(" ");o.push(`- ${l?l+" ":""}${a.name}`)}),o.push("")),i.length&&(o.push("Steps:"),i.forEach((a,l)=>o.push(`${l+1}. ${a}`)));const r={...s,description:o.join(`
`),ingredientsRaw:n,stepsRaw:i};try{await it(r),b("Recipe restructured and saved ✓"),Za(),ih(e)}catch(a){console.error("Failed to save parsed recipe:",a),b("Couldn't save — try again")}}function hD(t,e){u.nr=t,e==="r"?(xo("rstars",t),gm("rstars",e)):e==="c"&&(xo("cstars",t),gm("cstars",e))}function gm(t,e){const n=d(t);if(!n)return;const i=n.querySelector(".star-clear");if(i&&i.remove(),u.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=o=>{if(o.stopPropagation(),u.nr=0,xo(t,0),s.remove(),e==="rv"&&u.eid){const r=u.recs.find(a=>a.id===u.eid);r&&(r.rating=0,it({...r,rating:0}))}},n.appendChild(s)}}async function pD(t){const e=u.recs.find(i=>i.id===u.eid);if(!e)return;e.rating=t,u.nr=t;const n=d("rvstars");n&&(n.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<t?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<t?"★":"☆"}</span>`).join("")+(t>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await it({...e,rating:t})}async function fD(t){const e=u.recs.find(o=>o.id===t);if(!e)return;const n=!e.isPublic,i=Q(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(n){const o=await Bg(e);if(o){b("This recipe has already been published to the community.");const a=d("epub");a&&!a.classList.contains("on")&&a.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=o.id,await it({...e}));return}const r=await eu(e,s);e.publicId=r.id,Pe("published",Z(e.name||"a recipe")+" to community"),b("Recipe shared with the community!")}else{const o=e.publicId||e.id;await tu(o),e.publicId=null,Pe("unpublished",Z(e.name||"a recipe")+" from community"),b("Recipe removed from community")}await it({...e,isPublic:n,publicId:e.publicId||null})}function mD(t){const n=d(t==="add"?"addRecCoverInput":"editCoverInput");n&&n.click()}function gD(t,e){var i,s;const n=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];n&&(Vt=n,yw(n,e))}function yD(t,e){var i,s;const n=(s=(i=t.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!n||!n.type.startsWith("image/")||(Vt=n,yw(n,e))}function yw(t,e){const i=d(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=o=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${o.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(t)}function vD(t){Vt=null;const n=d(t==="add"?"addRecCoverZone":"editCoverZone");if(n&&(n.classList.remove("has-preview"),n.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',t==="edit"&&u.eid)){const i=u.recs.find(s=>s.id===u.eid);i&&(i._removeCover=!0)}}let ba=null;function wD(t){ba=t;const e=d("stepPhotoInput");e&&(e.value="",e.click())}function bD(t){var i,s;const e=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||ba===null)return;rs[ba]=e;const n=new FileReader;n.onload=o=>{b(`Step ${ba+1} photo added`)},n.readAsDataURL(e)}function _D(t){const e=u.recs.find(n=>n.id===u.eid);if(e){if(delete rs[t],e.stepPhotos&&e.stepPhotos[t]){const n=`recipes/${e.id}/steps/${t}.jpg`;sw(n).catch(()=>{}),delete e.stepPhotos[t]}ih(e.id),b(`Step ${t+1} photo removed`)}}function kD(t,e){gi=t||[],yi=e||0,ww();const n=d("photoViewer");n&&n.classList.add("active"),CD()}function TD(){const t=d("photoViewer");t&&t.classList.remove("active"),gi=[]}function vw(t){const e=yi+t;e<0||e>=gi.length||(yi=e,ww())}function ww(){const t=d("pvImg"),e=d("pvCounter"),n=d("pvPrev"),i=d("pvNext");t&&(t.src=gi[yi]||""),e&&(e.textContent=gi.length>1?`${yi+1} / ${gi.length}`:""),n&&(n.style.display=yi>0?"flex":"none"),i&&(i.style.display=yi<gi.length-1?"flex":"none")}function CD(){const t=d("pvWrap");if(!t)return;let e=0,n=0;const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,n=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const o=s.changedTouches[0].clientX-e,r=s.changedTouches[0].clientY-n;Math.abs(o)>50&&Math.abs(o)>Math.abs(r)&&vw(o<0?1:-1)},{passive:!0})}function SD(){const t=d("cmtPhotoInput");t&&(t.value="",t.click())}function ID(t){var n;const e=(n=t.target)==null?void 0:n.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&$t.push(e[i]);bw()}}function ED(t){$t.splice(t,1),bw()}function bw(){const t=d("cmtPhotoPreview");if(!t)return;if(!$t.length){t.innerHTML="";return}let e="";$t.forEach((n,i)=>{const s=URL.createObjectURL(n);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',t.innerHTML=e}let Pt=null;function _a(t){if(!t)return 0;const e=t.toLowerCase();let n=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(n+=parseInt(i[1])*60),s&&(n+=parseInt(s[1])),n}function ec(t,e){const n=Math.round(t||0),i=Array.from({length:5},(o,r)=>r<n?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function _w(){const t=d("rbody");if(t){t.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',u.comPage=0;try{u.comRecs=await Ft(),ft()}catch(e){console.error("loadCommunity:",e),t.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function AD(t){u.comCuisine=t,u.comPage=0,ft()}function xD(t){u.comSearch=t,u.comPage=0,ft()}function RD(t){u.comSort=t,u.comPage=0,ft()}function $D(t){const e=u.comTags.indexOf(t);e>=0?u.comTags.splice(e,1):u.comTags.push(t),u.comPage=0,ft()}function PD(t){u.comTime=t,u.comPage=0,ft()}function DD(t){u.comMinRating=parseInt(t)||0,u.comPage=0,ft()}function ft(){const t=d("rbody");if(!t)return;Pt&&(Pt.disconnect(),Pt=null);let e=[...u.comRecs];if(u.comCuisine&&u.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(u.comCuisine.toLowerCase())||(l.tags||[]).some(h=>h.toLowerCase().includes(u.comCuisine.toLowerCase())))),u.comSearch){const l=u.comSearch.toLowerCase();e=e.filter(h=>(h.title||"").toLowerCase().includes(l)||(h.tags||[]).join(" ").toLowerCase().includes(l)||(h.cuisine||"").toLowerCase().includes(l)||(h.authorUsername||"").toLowerCase().includes(l)||(h.authorName||"").toLowerCase().includes(l))}u.comTags.length&&(e=e.filter(l=>u.comTags.every(h=>(l.tags||[]).includes(h)))),u.comTime&&u.comTime!=="any"&&(e=e.filter(l=>{const h=_a(l.cookTime||l.totalTime);return h?u.comTime==="under30"?h<=30:u.comTime==="30to60"?h>30&&h<=60:u.comTime==="over60"?h>60:!0:!1})),u.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=u.comMinRating)),u.comSort==="popular"?e.sort((l,h)=>(h.likes||0)-(l.likes||0)):u.comSort==="rated"?e.sort((l,h)=>(h.avgRating||0)-(l.avgRating||0)):u.comSort==="az"?e.sort((l,h)=>(l.title||"").localeCompare(h.title||"")):u.comSort==="cooktime"?e.sort((l,h)=>_a(l.cookTime||l.totalTime)-_a(h.cookTime||h.totalTime)):e.sort((l,h)=>new Date(h.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(u.comPage+1)*20),s=i.length<e.length,o=d("rsub");o&&(o.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const r=u.comSort||"newest";let a=`<div style="margin-bottom:14px">
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
    ${th("com")}
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
        ${l.avgRating||l.ratingCount?`<span>${ec(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${h}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${f}</div>
      </div>
    </div>`}),a+="</div>",s&&(a+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),t.innerHTML=a,s){const l=d("com-scroll-sentinel");l&&(Pt=new IntersectionObserver(h=>{h[0].isIntersecting&&(u.comPage++,kw(e,t))},{rootMargin:"200px"}),Pt.observe(l))}}function kw(t,e){const i=u.comPage*20,s=i+20,o=t.slice(i,s),r=s<t.length;let a="";o.forEach(f=>{const g=(f.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),w=f.authorUsername?`@${f.authorUsername}`:f.authorName||"Anonymous",k=f.cookTime||f.totalTime||"",E=f.commentCount||0,P=f.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${f.imageUrl}" loading="lazy" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";a+=`<div class="rcd com-rcd" onclick="openComRecipe('${f.id}')">
      ${P}
      <div class="rrow">
        <div class="rnm" style="flex:1">${f.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${f.likes||0}</span>
          ${E?`<span style="font-size:.78rem;color:var(--mt)">💬 ${E}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${f.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${f.cuisine}</span>`:""}
        ${f.avgRating||f.ratingCount?`<span>${ec(f.avgRating,f.ratingCount)}</span>`:""}
        ${k?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${k}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=d("com-scroll-sentinel");l&&l.remove(),Pt&&(Pt.disconnect(),Pt=null);const h=d("com-recipe-grid");if(h?h.insertAdjacentHTML("beforeend",a):e.insertAdjacentHTML("beforeend",a),r){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const f=d("com-scroll-sentinel");f&&(Pt=new IntersectionObserver(g=>{g[0].isIntersecting&&(u.comPage++,kw(t,e))},{rootMargin:"200px"}),Pt.observe(f))}}async function tc(t){var Tr;const e=u.comRecs.find(me=>me.id===t);if(!e)return;u._openComId=t,bs="view",$t=[];const n=d("erecTitle");n&&(n.textContent="Recipes"),ii(()=>_r());const i=(Tr=Q())==null?void 0:Tr.uid,[s,o,r,a]=await Promise.all([_C(t),bC(t).catch(()=>[]),AC(t).catch(()=>null),SC(t)]);s?u.myLikes.add(t):u.myLikes.delete(t),o.sort((me,_t)=>new Date(me.createdAt||0)-new Date(_t.createdAt||0)),u._comComments=o;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,h=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" loading="lazy" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",f=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=f.length?`<div class="rv-meta">${f.map(me=>`<div class="rv-meta-pill">${me}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${ec(e.avgRating,e.ratingCount)}</div>`:"",k=(e.tags||[]).map(me=>`<span class="com-tag">${me}</span>`).join(""),E=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",P=u.myLikes.has(t),$=i&&i===e.authorUid;let D=!1;!$&&i&&e.householdId&&e.householdId===u.hid&&(D=!0);const N=$||D,B=$||e.householdId&&e.householdId===u.hid;let F="";e.ingredientsRaw&&e.ingredientsRaw.length?F=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(me=>`<li>${(typeof me=="string"?me:(me.amount||"")+" "+(me.unit||"")+" "+(me.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(F=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let z="";e.stepsRaw&&e.stepsRaw.length?z=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(me=>`<li style="margin-bottom:8px">${(typeof me=="string"?me:me.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(z=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const ne=BD(o.slice(0,20),t,i,$),I=o.length>20,v=(r==null?void 0:r.rating)||0,_=v>0?`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",S=$?"":Array.from({length:5},(me,_t)=>`<span class="star${_t<v?" on":""}" onclick="rateComRecipe('${t}',${_t+1})" style="cursor:pointer;font-size:1.3rem">${_t<v?"★":"☆"}</span>`).join("")+_,C=N?`<button class="btn bs bsm" onclick="editComRecipe('${t}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",A=$?`<button class="btn bd bsm" onclick="unpublishComRecipe('${t}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",T=C+A,Ie=!N&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${t}','${t}')" title="Report recipe">🚩 Report</button>`:"";d("erecbody").innerHTML=`
    ${h}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${Ie}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${w}
      <div style="font-size:.76rem;color:var(--mt)">by ${E} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${k?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${k}</div>`:""}
    </div>

    ${g}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${P?"bp":"bs"} bsm" onclick="likeComRecipe('${t}')" id="com-like-btn">
        ${P?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      ${B?"":`<button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${t}')">📖 Save to my recipes</button>`}
      <button class="btn bs bsm" onclick="shareComRecipe('${t}')">📤 Share</button>
    </div>

    ${F?`<div class="frow"><label class="flbl">Ingredients</label>${F}</div>`:""}
    ${z?`<div class="frow"><label class="flbl">Instructions</label>${z}</div>`:""}

    ${$?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${S}</div>
      ${v?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${v}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${ec(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${o.length})</div>
      <div id="com-comments">${ne||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
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

    ${T}`;const mt=d("com-cmt-input");mt&&mt.addEventListener("input",()=>{const me=d("com-cmt-counter");me&&(me.textContent=`${mt.value.length} / 500`)}),We("erec"),br()}async function LD(t,e){return Tw(t,e)}async function Tw(t,e){if(!Q()){b("Sign in to rate recipes");return}try{const i=await EC(t,e);if(!i){b("You can't rate your own recipe");return}const s=u.comRecs.find(a=>a.id===t);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const o=d("com-rating-stars");o&&(o.innerHTML=Array.from({length:5},(a,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${t}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const r=d("com-rating-label");r&&(r.textContent=`You rated this ${e}★`),b(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),b("Couldn't submit rating")}}async function ND(t){if(Q())try{const n=await xC(t);if(!n)return;const i=u.comRecs.find(r=>r.id===t);i&&(i.ratingSum=n.ratingSum,i.ratingCount=n.ratingCount,i.avgRating=n.avgRating);const s=d("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(r,a)=>`<span class="star" onclick="rateComRecipe('${t}',${a+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const o=d("com-rating-label");o&&(o.textContent=""),b("Rating cleared")}catch(n){console.error("clearComRating:",n),b("Couldn't clear rating")}}async function MD(t){if(confirm("Remove this recipe from the community?"))try{await tu(t),u.comRecs=u.comRecs.filter(e=>e.id!==t),b("Recipe unpublished"),ue("erec"),tn(),ft()}catch(e){console.error("unpublishComRecipe:",e),b("Couldn't unpublish recipe")}}async function OD(t){if(!Q()){b("Sign in to like recipes");return}const n=u.myLikes.has(t);try{await vC(t,n),n?u.myLikes.delete(t):u.myLikes.add(t);const i=u.comRecs.find(o=>o.id===t);i&&(i.likes=(i.likes||0)+(n?-1:1));const s=d("com-like-btn");if(s){const o=u.myLikes.has(t);s.className=`btn ${o?"bp":"bs"} bsm`,s.innerHTML=`${o?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}b(n?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),b("Couldn't update like")}}async function VD(t){if(!Q()){b("Sign in to save recipes");return}const n=u.comRecs.find(i=>i.id===t);if(n)try{await kC(n),Pe("saved",Z(n.title||"a recipe")+" from community"),b("Recipe saved to your kitchen! 📖"),ue("erec"),tn()}catch(i){console.error("saveComToKitchen:",i),b("Couldn't save recipe")}}async function FD(t){var o;const e=Q();if(!e){b("Sign in to comment");return}const n=d("com-cmt-input"),i=(o=n==null?void 0:n.value)==null?void 0:o.trim();if(!i&&!$t.length)return;if(i&&i.length>500){b("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const r=await wC(t,i||"",s);if(!r)return;let a=[];if($t.length){b("Uploading photos…");for(let k=0;k<$t.length;k++)try{const E=await d1($t[k],t,r.id,k);a.push(E)}catch(E){console.error(`Comment photo ${k} upload failed:`,E)}a.length&&(r.photoUrls=a,await M(`public_recipes/${t}/comments/${r.id}`,{...r,id:void 0}))}n&&(n.value=""),$t=[];const l=d("cmtPhotoPreview");l&&(l.innerHTML="");const h=d("com-cmt-counter");h&&(h.textContent="0 / 500");const f=d("com-comments"),g=u.comRecs.find(k=>k.id===t),w=e.uid===(g==null?void 0:g.authorUid);f&&r&&(f.querySelector("div[style*='color:var(--mt)']")&&!f.querySelector("div[style*='border-bottom']")&&(f.innerHTML=""),f.innerHTML+=sh(r,t,e.uid,w)),u._comComments&&u._comComments.push(r),b(a.length?`Comment posted with ${a.length} photo${a.length!==1?"s":""}!`:"Comment posted!")}catch(r){console.error("addComComment:",r),b("Couldn't post comment")}}async function UD(t){const e=u.comRecs.find(s=>s.id===t),n=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:n});return}catch{}try{await navigator.clipboard.writeText(n),b("Link copied!")}catch{b("Couldn't copy link")}}function sh(t,e,n,i){const s=(t.authorUsername?"@"+t.authorUsername:t.authorName)||"Anonymous",o=t.createdAt?new Date(t.createdAt).toLocaleDateString():"",r=(t.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a=n&&(t.authorUid===n||i),l=n&&t.authorUid!==n;let h="";a&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${t.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${t.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let f="";const g=t.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");f=`<div class="cmt-photos-grid">${g.map((E,P)=>`<img src="${E}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
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
  </div>`}function BD(t,e,n,i){return t.length?t.map(s=>sh(s,e,n,i)).join(""):""}function jD(){var h;const t=u._openComId,e=(h=Q())==null?void 0:h.uid,n=u.comRecs.find(f=>f.id===t),i=e&&e===(n==null?void 0:n.authorUid),s=d("com-comments");if(!s||!u._comComments)return;const o=s.querySelectorAll(".com-comment-row").length,r=u._comComments.slice(o,o+20);if(r.length){const f=r.map(g=>sh(g,t,e,i)).join("");s.insertAdjacentHTML("beforeend",f)}const a=u._comComments.length-o-r.length,l=d("com-load-more");l&&(a>0?l.textContent=`Load more comments (${a} remaining)`:l.remove())}async function HD(t,e){if(confirm("Delete this comment?"))try{await RC(t,e);const n=document.getElementById("cmt-"+e);n&&n.remove(),u._comComments&&(u._comComments=u._comComments.filter(i=>i.id!==e)),b("Comment deleted")}catch(n){console.error("deleteComComment:",n),b("Couldn't delete comment")}}async function zD(t){var w;const e=u.comRecs.find(k=>k.id===t);if(!e)return;const i=((w=Q())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===u.hid;if(!i&&!s){b("Only household members can edit");return}u._editingComId=t,bs="edit";const o=d("erecTitle");o&&(o.textContent="Edit Community Recipe"),ii(()=>_r());const r=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,a=e.tags||[],l=k=>a.includes(k)?" sel":"";let h='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';wa.forEach(k=>{h+=`<div class="tag-cat">${k.cat}</div>`,k.tags.forEach(E=>{h+=`<div class="tag${l(E)}" data-tag="${E}" onclick="togTag(this)">${E}</div>`})}),h+="</div></div>";const f=en(e.prepTime),g=en(e.cookTime);en(e.totalTime),d("erecbody").innerHTML=`
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
    </div>`,We("erec"),br()}async function qD(){var w,k,E,P,$,D,N,B,F,z,ne,I;const t=u._editingComId,e=u.comRecs.find(v=>v.id===t);if(!e)return;const n=((k=(w=d("comEditTitle"))==null?void 0:w.value)==null?void 0:k.trim())||e.title,i=((P=(E=d("comEditSummary"))==null?void 0:E.value)==null?void 0:P.trim())||"",s=((D=($=d("comEditCuisine"))==null?void 0:$.value)==null?void 0:D.trim())||"",o=((B=(N=d("comEditServes"))==null?void 0:N.value)==null?void 0:B.trim())||"",r=eh("comEditTags"),a=((z=(F=d("comEditIngredients"))==null?void 0:F.value)==null?void 0:z.trim())||"",l=((I=(ne=d("comEditSteps"))==null?void 0:ne.value)==null?void 0:I.trim())||"",h=_s("comEditPrepTime","comEditPrepUnit")||"",f=_s("comEditCookTime","comEditCookUnit")||"",g={...e,title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:a,steps:l,prepTime:h,cookTime:f};delete g.id;try{await M(`public_recipes/${t}`,g),Object.assign(e,{title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:a,steps:l,prepTime:h,cookTime:f}),u._editingComId=null;const v=d("erecTitle");v&&(v.textContent="Recipes"),Pe("updated",Z(n)+" (community)"),b("Community recipe updated!"),Fn(),ue("erec"),tn(),ft()}catch(v){console.error("saveComRecipeEdit:",v),b("Couldn't save changes")}}function WD(t,e,n){if(!Q()){b("Sign in to report content");return}u._reportTarget={type:t,targetId:e,recipeId:n};const s=d("report-sheet"),o=d("reportBackdrop");s&&s.classList.add("active"),o&&o.classList.add("active")}function Cw(){const t=d("report-sheet"),e=d("reportBackdrop");t&&t.classList.remove("active"),e&&e.classList.remove("active"),u._reportTarget=null}async function GD(t){const e=u._reportTarget;if(e){try{const n=await $C(e.type,e.targetId,t,e.recipeId);b(n==="duplicate"?"You've already reported this":"Thanks for your report")}catch(n){console.error("submitComReport:",n),b("Couldn't submit report")}Cw()}}async function Sw(){try{const t=await NC(),e=t>9?"9+":String(t),n=t>0,i=d("recipes-notif-badge");i&&(i.textContent=e,i.style.display=n?"flex":"none");const s=d("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=n?"flex":"none")}catch{}}async function KD(){if(!Q()){b("Sign in to view notifications");return}try{const e=await DC();LC().then(()=>Sw());const n=d("erecbody");if(!n)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const o=!s.read,r=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${o?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${o?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${r}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,n.innerHTML=i,We("erec"),br()}catch(e){console.error("openNotifications:",e),b("Couldn't load notifications")}}async function QD(t){if(ue("erec"),!u.comRecs.length)try{u.comRecs=await Ft()}catch{}if(u.comRecs.find(e=>e.id===t)){u.rt="community",document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=d("rtab-community");e&&e.classList.add("active"),setTimeout(()=>tc(t),100)}else try{const e=await jg(t);e?(u.comRecs.push({id:t,...e}),u.rt="community",setTimeout(()=>tc(t),100)):b("Recipe no longer available")}catch{b("Couldn't load recipe")}}function JD(){const t=["fridge","freezer","pantry"].map(r=>{const a=u.inv.filter(l=>l.location===r);return a.length?Lm(r).toUpperCase()+": "+a.map(l=>`${l.name} (${cs(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=u.inv.filter(r=>{const a=ot(r.expiry);return a&&(a.c==="expiring"||a.c==="expired")}).map(r=>{const a=ot(r.expiry);return`${r.name} (${a.l})`}).join(", "),n=Ld().map(r=>{const a=r.toISOString().split("T")[0];return u.mp[a]?`${r.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[a]}`:""}).filter(Boolean).join(", "),i=u.recs.filter(r=>r.favorited||r.rating>=4).map(r=>`${r.name}${r.rating?` (${r.rating}★)`:""}`).join(", "),s=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other].filter(Boolean).join(", "),o=u.cookLog.slice(0,7).map(r=>r.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function YD(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Iw(){const t=d("chi"),e=t.value.trim();if(!e)return;t.value="",Ew(t),u.chat.push({role:"user",content:e}),$l("user",e);const n=d("csb");n&&(n.disabled=!0);const i="thinking-"+Date.now(),s=d("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:JD(),messages:u.chat.map(h=>({role:h.role,content:h.content}))})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"Sorry, I couldn't process that.",l=d(i);l&&l.remove(),u.chat.push({role:"assistant",content:a}),$l("assistant",a)}catch{const r=d(i);r&&r.remove(),$l("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function XD(t){const e=[];return{cleanText:t.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const o=JSON.parse(s.trim());o.title&&e.push(o)}catch{}return""}).trim(),recipes:e}}function ZD(t){const e=JSON.stringify(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),n=(t.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(t.title||"").replace(/</g,"&lt;")}</div>
    ${t.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${t.cuisine}${t.cookTime?" · "+t.cookTime:""}${t.servings?" · "+t.servings+" servings":""}</div>`:""}
    ${n?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${n.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function eL(t){try{const e=JSON.parse(t.dataset.recipe),n="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await it({id:n,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),t.textContent="✓ Saved!",t.disabled=!0,t.style.background="var(--gn)",b("Recipe saved! 📖")}catch{b("Couldn't save recipe")}}function $l(t,e){const n=d("chmsgs");if(n){if(t==="assistant"){const{cleanText:i,recipes:s}=XD(e);if(i){const o=document.createElement("div");o.className="cb asst",o.innerHTML=YD(i),n.appendChild(o)}s.forEach(o=>{const r=document.createElement("div");r.style.maxWidth="88%",r.style.alignSelf="flex-start",r.innerHTML=ZD(o),n.appendChild(r)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,n.appendChild(i)}n.scrollTop=n.scrollHeight}}function tL(t){const e=d("chi");e&&(e.value=t.textContent),Iw()}function nL(){u.chat=[];const t=d("chmsgs");t&&(t.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Ew(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}const Uo="scan_cache_",iL=720*60*60*1e3,sL=200;function oL(t){try{const e=localStorage.getItem(Uo+t);if(!e)return null;const n=JSON.parse(e);return Date.now()-n.cachedAt>iL?(localStorage.removeItem(Uo+t),null):n}catch{return null}}function rL(t,e){try{const n={name:e.name||"",brand:e.brand||"",category:e.category||"General",offCategory:e.offCategory||"",scanTitle:e._scanTitle||"",image:e.image||null,source:e.source||null,cachedAt:Date.now()},i=oh();i.length>=sL&&aL(i),localStorage.setItem(Uo+t,JSON.stringify(n))}catch{}}function oh(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&n.startsWith(Uo)&&t.push(n)}return t}function aL(t){let e=null,n=1/0;for(const i of t)try{const s=JSON.parse(localStorage.getItem(i));s&&s.cachedAt<n&&(n=s.cachedAt,e=i)}catch{e=i;break}e&&localStorage.removeItem(e)}function cL(){return oh().length}function lL(){const t=oh();return t.forEach(e=>localStorage.removeItem(e)),t.length}let Bo=!1,ka=!1,Ta=null;function rh(){if(Bo)return;const t=d("scanner-video");if(!t)return;const e=d("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{dL(t,e)})})}function dL(t,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:t,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(n){if(n){console.error("Scanner init error:",n);const i=d("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}uL(t),Quagga.start(),Bo=!0,e&&(e.textContent="Scanning…"),pL(t),setTimeout(()=>hL(t),2e3)}),Quagga.onDetected(Aw)}function uL(t){t.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function hL(t){if(!Bo)return;const e=t.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Ta=n,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=n,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(n){console.error("Manual camera retry failed:",n)}}}let xn=null;function pL(t){xn&&(t.removeEventListener("click",xn),xn=null),xn=async()=>{try{const e=t.querySelector("video");if(!e||!e.srcObject)return;const n=e.srcObject.getVideoTracks()[0];if(!n)return;const i=n.getCapabilities?n.getCapabilities():{};if(!i.focusMode||!i.focusMode.includes("single-shot"))return;await n.applyConstraints({advanced:[{focusMode:"single-shot"}]})}catch{}},t.addEventListener("click",xn)}function fL(){if(xn){const t=d("scanner-video");t&&t.removeEventListener("click",xn),xn=null}}function ah(){if(Bo){try{Quagga.stop()}catch{}Quagga.offDetected(Aw),fL(),Ta&&(Ta.getTracks().forEach(t=>t.stop()),Ta=null),Bo=!1,ka=!1}}async function Aw(t){var s,o;if(ka)return;const e=t&&t.codeResult&&t.codeResult.code;if(!e)return;const n=((o=(s=t.codeResult.decodedCodes)==null?void 0:s.filter(r=>r.error!==void 0))==null?void 0:o.map(r=>r.error))||[];if(!((n.length?n.reduce((r,a)=>r+a,0)/n.length:1)>.25)){ka=!0,mL(),ah(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Found "+e+" — looking up…";try{const r=await xw(e);u.cp=r,d("aqty").value=1,d("aexp").value="";const a=d("scan-frac");a&&(a.value="0");const l=d("aunit");l&&(l.value="Unit"),ch("fridge",d("rl-fridge")),Rw(r)}catch{const r=d("scerr");r.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",r.style.display="block"}d("scanbody").style.display="block",d("scspin").style.display="none",ka=!1}}function mL(){const t=d("scan-success");t&&(t.style.display="flex",t.style.animation="none",t.offsetHeight,t.style.animation="",setTimeout(()=>{t.style.display="none"},500))}function gL(){ue("result"),We("scan"),d("scerr").style.display="none",rh()}function yL(){u.scanDestList=!0,We("scan");const t=d("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=d("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),d("scerr").style.display="none",rh()}function vL(){u.scanDestList=!1,We("scan");const t=d("scanovttl");t&&(t.textContent="Scan Barcode");const e=d("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your supplies."),d("scerr").style.display="none",rh()}function wL(){const t=d("manual-name-section");if(t){t.style.display="block";const e=d("mnm");e&&e.focus()}}function bL(){const t=d("scanNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("scanNoteInp");n&&n.focus()}}function _L(){const t=d("scanCatKey"),e=t?t.value:"other";ei(e,n=>{t&&(t.value=n),u.cp&&(u.cp._prepCategory=n);const i=d("scanCatBadgeWrap");if(i&&(i.innerHTML=qt(n,"openScanCatPicker()")),u.cp&&u.cp.barcode&&u.hid){const s=u.cp.barcode.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`;M(o,{prepCategory:n,updatedAt:new Date().toISOString()})}})}function kL(){if(!u.cp)return;const t=u.cp.notFound?"Barcode "+u.cp.barcode:u.cp.name,e=d("scanNoteInp"),n=e?e.value.trim():"",i=parseInt(d("aqty").value)||1,s=parseFloat(d("scan-frac").value)||0,o=dt(i,s),r=d("aunit").value||"Unit",a={id:Date.now().toString(),name:t,qty:o,unit:r,checked:!1,src:"scan"};u.cp.brand&&(a.brand=u.cp.brand),u.cp.image&&(a.image=u.cp.image),u.cp._scanTitle&&(a.scanTitle=u.cp._scanTitle),u.cp.offCategory&&(a.offCategory=u.cp.offCategory),n&&(a.note=n);const l=d("scanCatKey");a.prepCategory=l&&l.value||u.cp._prepCategory||"other",Fe(a),ue("result"),ue("scan"),u.scanDestList=!1,e&&(e.value="");const h=d("scanNoteWrap");h&&(h.style.display="none"),window.openShopAddSheet&&window.openShopAddSheet();const f=u.cp&&u.cp._scanTitle||t;b("✓ Added: "+f)}function TL(){const t=d("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function CL(){const t=d("meinp").value.trim();if(!t)return;ah(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Looking up…";const e=await xw(t);u.cp=e,d("aqty").value=1,d("aexp").value="";const n=d("scan-frac");n&&(n.value="0");const i=d("aunit");i&&(i.value="Unit"),ch("fridge",d("rl-fridge")),d("meinp").value="",Rw(e),d("scanbody").style.display="block",d("scspin").style.display="none"}async function xw(t){if(u.hid)try{const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`,s=await W(i);if(s&&s.correctedName){console.log(`[Scan] Custom product override: "${s.correctedName}"`);const o={barcode:t,name:s.correctedName,brand:s.brand||"",quantity:s.quantity||"",category:s.category||"General",image:s.image||null,source:"Custom",description:s.description||"",nutrition:null,customOverride:!0,notFound:!1,_scanTitle:s.correctedName,_originalName:s.originalName||""};return s.prepCategory&&(o._prepCategory=s.prepCategory),o}}catch{}const e=oL(t);if(e)return console.log(`[Scan] Cache hit for barcode ${t}`),{barcode:t,name:e.name,brand:e.brand,quantity:"",category:e.category||"General",offCategory:e.offCategory||"",image:e.image||null,source:e.source||null,description:"",nutrition:null,notFound:!1,_scanTitle:e.scanTitle||"",fromCache:!0};try{const n=await fetch("/api/barcode?code="+encodeURIComponent(t));if(n.ok){const i=await n.json();if(i.found&&i.product){const s={...i.product,notFound:!1};return rL(t,s),s}}}catch{}return{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function Rw(t){var o;ue("scan"),d("resttl").textContent=t.notFound?"Not Found":"Product Found ✓";const e=d("aunit");if(e){const r=(t.quantity||"Unit").trim(),a=Array.from(e.options).find(l=>l.value.toLowerCase()===r.toLowerCase());e.value=a?a.value:"Unit"}let n="";if(t.notFound)n=`<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">⚠️ Barcode <code>${t.barcode}</code> not found in any database.</div>
      <div class="brow" style="gap:10px;margin-bottom:12px">
        <button class="btn bs" style="flex:1;font-size:.95rem" onclick="resumeScanner()">🔄 Scan again</button>
        <button class="btn bp" style="flex:1;font-size:.95rem" onclick="showManualNameInput()">✏️ Add manually</button>
      </div>
      <div id="manual-name-section" style="display:none">
        <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:4px"/>
      </div>
    </div>`;else{const r=zb(t);t._originalName||(t._originalName=t.name),t._scanTitle||(t._scanTitle=r.title);const a="",l=t._scanTitle||r.title,h=t.customOverride&&t._originalName?t._originalName:r.subtitle,f=h.toLowerCase().trim()===l.toLowerCase().trim(),g=h.length>60?h.slice(0,60)+"…":h,w=h.length>60?` data-full="${h.replace(/"/g,"&quot;")}" onclick="this.textContent=this.dataset.full" style="cursor:pointer"`:"";n=`<div class="pcard"><div class="phdr">${a}<div style="flex:1">
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
    </div></div></div>`;const k=t._prepCategory||Li({name:t.name||"",scanTitle:t._scanTitle||"",offCategory:t.offCategory||"",category:t.category||""});t._prepCategory=k,n+=`<div id="scanCatBadgeWrap">${qt(k,"openScanCatPicker()")}</div>`,n+=`<input type="hidden" id="scanCatKey" value="${k}"/>`}d("resbody").innerHTML=n;const i=(o=d("ov-result"))==null?void 0:o.querySelector(".ovbody");if(i){const r=i.querySelector(".frow"),a=i.querySelectorAll(".frow")[1];r&&(r.style.display=u.scanDestList?"none":""),a&&(a.style.display=u.scanDestList?"none":"")}const s=d("scan-dest-btns");if(s)if(t.notFound){const r=u.scanDestList?"addScannedToList()":"addToInv()",a=u.scanDestList?"🛒 Add to Shopping List":"🧺 Add to Supplies";s.innerHTML=`<button class="btn bp" style="width:100%" id="addbtn" onclick="${r}">${a}</button>`}else u.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">🧺 Add to Supplies</button>
      </div>`;t.notFound&&setTimeout(()=>{const r=d("addbtn");r&&(r.disabled=!0)},0),We("result")}function ch(t,e){u.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function SL(){const t=d("mnm");d("addbtn").disabled=!(t&&t.value.trim())}async function IL(){if(!u.cp)return;const t=d("mnm"),e=u.cp.notFound?t&&t.value.trim()||"":u.cp.name;if(!e)return;const n=parseInt(d("aqty").value)||1,i=parseFloat(d("scan-frac").value)||0,s=d("aunit").value||"Unit",o=dt(n,i),r=d("aexp").value||null,a="item-"+u.cp.barcode.replace(/\W/g,"-"),l=u.inv.find(w=>w.id===a),h={id:a,barcode:u.cp.barcode,name:e,brand:u.cp.brand||"",unit:s,qty:l?l.qty+o:o,location:u.selR,category:u.cp.category||"General",image:u.cp.image||null,source:u.cp.source||null,expiry:r,addedAt:l?l.addedAt:new Date().toLocaleDateString()};u.cp._scanTitle&&(h.scanTitle=u.cp._scanTitle),u.cp.offCategory&&(h.offCategory=u.cp.offCategory);const f=d("scanCatKey");h.prepCategory=f&&f.value||u.cp._prepCategory||"other";const g=u.cp._scanTitle||e;await ee(h),u.cp=null,ue("result"),ue("scan"),window.openInvAddSheet&&window.openInvAddSheet(),b(l?`✓ Added: +${o} ${g}`:`✓ Added: ${g}`)}function EL(t){const e=d("aqty");e.value=Math.max(0,(parseInt(e.value)||0)+t)}function AL(){var s;const t=d("scan-title-row"),e=d("scan-title-edit"),n=d("scan-title-input");if(!t||!e||!n)return;const i=((s=d("scan-title-text"))==null?void 0:s.textContent)||"";n.value=i,t.style.display="none",e.style.display="flex",n.focus(),n.select()}async function xL(){const t=d("scan-title-row"),e=d("scan-title-edit"),n=d("scan-title-input"),i=d("scan-title-text");if(!t||!e||!n||!i)return;const s=Z(n.value.trim()),o=n.dataset.original||"",r=s||o;i.textContent=r,u.cp&&(u.cp.name=r,u.cp._scanTitle=r),e.style.display="none",t.style.display="flex",s&&s!==o&&u.cp&&u.cp.barcode&&(await RL(u.cp.barcode,s,u.cp,u.cp._originalName||o),b("✓ Product name saved for future scans"))}async function RL(t,e,n,i){if(!u.hid||!t)return;const s=t.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`,r=Q(),a=r?r.uid:"unknown",l=d("scanCatKey"),h=l&&l.value||u.cp&&u.cp._prepCategory||null,f={barcode:t,correctedName:e,originalName:i||"",brand:n.brand||"",category:n.category||"General",image:n.image||null,quantity:n.quantity||"",description:n.description||"",updatedAt:new Date().toISOString(),updatedBy:a};h&&(f.prepCategory=h),await M(o,f);try{localStorage.removeItem(Uo+t)}catch{}}let Le=null,Jr=0,Yr=0,J=null,kn=null,Et=0,Ct=!1,Fi=!1;const Tn=80,Xr=.1,Cn=.7,Zr=8,hi="cubic-bezier(0.34, 1.56, 0.64, 1)",Me="cubic-bezier(0.4, 0, 0.2, 1)";function $L(){document.addEventListener("touchstart",e=>{const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(u.selectMode||(J&&J!==i&&(Kt(J),J=null),Le=n,Jr=e.touches[0].clientX,Yr=e.touches[0].clientY,kn=null,Ct=!1,Et=i.offsetWidth,n.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Le)return;const n=e.touches[0].clientX,i=e.touches[0].clientY,s=n-Jr,o=i-Yr;if(!kn){if(Math.abs(s)<Zr&&Math.abs(o)<Zr)return;kn=Math.abs(s)>Math.abs(o)?"horizontal":"vertical"}if(kn==="vertical"){Le.classList.remove("swiping"),Le=null;return}e.preventDefault();const r=Le.closest(".swipe-wrap"),a=r==null?void 0:r.dataset.list,l=s>0&&a==="inv",h=l?s:s>=0?0:s;if(Le.style.transform=`translateX(${h}px)`,h<0){const g=r==null?void 0:r.querySelector(".swipe-del");if(g){const k=Math.min(100,Math.abs(h)/Tn*100);g.style.clipPath=`inset(0 0 0 ${100-k}%)`}const w=r==null?void 0:r.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const g=r==null?void 0:r.querySelector(".swipe-add");if(g){const k=Math.min(100,h/Tn*100);g.style.clipPath=`inset(0 ${100-k}% 0 0)`}const w=r==null?void 0:r.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const f=Math.abs(h)/Et;f>=Cn&&!Ct?(Ct=!0,navigator.vibrate&&navigator.vibrate(10),r==null||r.classList.add("swipe-threshold")):f<Cn&&Ct&&(Ct=!1,r==null||r.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Le)return;const e=Le,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/Et,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=Cn)vm(n,e);else if(r&&s>=Xr){e.style.transition=`transform 0.4s ${hi}`,e.style.transform=`translateX(${Tn}px)`;const a=n==null?void 0:n.querySelector(".swipe-add");a&&(a.style.transition=`clip-path 0.3s ${Me}`,a.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),J&&J!==n&&Kt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=Cn)ym(n,e);else if(!r&&i<0&&s>=Xr){e.style.transition=`transform 0.4s ${hi}`,e.style.transform=`translateX(-${Tn}px)`;const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${Me}`,a.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),J&&J!==n&&Kt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${hi}`,e.style.transform="translateX(0)";const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${Me}`,a.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Me}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),J===n&&(J=null),setTimeout(()=>{e.style.transition="",a&&(a.style.transition=""),l&&(l.style.transition="")},350)}Le=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(u.selectMode||(J&&J!==i&&(Kt(J),J=null),Fi=!0,Le=n,Jr=e.clientX,Yr=e.clientY,kn=null,Ct=!1,Et=i.offsetWidth,n.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Fi||!Le)return;const n=e.clientX-Jr,i=e.clientY-Yr;if(!kn){if(Math.abs(n)<Zr&&Math.abs(i)<Zr)return;kn=Math.abs(n)>Math.abs(i)?"horizontal":"vertical"}if(kn==="vertical"){Le.classList.remove("swiping"),Le=null,Fi=!1;return}e.preventDefault();const s=Le.closest(".swipe-wrap"),o=s==null?void 0:s.dataset.list,r=n>0&&o==="inv",a=r?n:n>=0?0:n;if(Le.style.transform=`translateX(${a}px)`,a<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const g=Math.min(100,Math.abs(a)/Tn*100);h.style.clipPath=`inset(0 0 0 ${100-g}%)`}const f=s==null?void 0:s.querySelector(".swipe-add");f&&(f.style.clipPath="inset(0 100% 0 0)")}else if(a>0&&r){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const g=Math.min(100,a/Tn*100);h.style.clipPath=`inset(0 ${100-g}% 0 0)`}const f=s==null?void 0:s.querySelector(".swipe-del");f&&(f.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(a)/Et;l>=Cn&&!Ct?(Ct=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<Cn&&Ct&&(Ct=!1,s==null||s.classList.remove("swipe-threshold"))});function t(){if(!Fi||!Le){Fi=!1;return}Fi=!1;const e=Le,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/Et,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=Cn)vm(n,e);else if(r&&s>=Xr){e.style.transition=`transform 0.4s ${hi}`,e.style.transform=`translateX(${Tn}px)`;const a=n==null?void 0:n.querySelector(".swipe-add");a&&(a.style.transition=`clip-path 0.3s ${Me}`,a.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),J&&J!==n&&Kt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=Cn)ym(n,e);else if(!r&&i<0&&s>=Xr){e.style.transition=`transform 0.4s ${hi}`,e.style.transform=`translateX(-${Tn}px)`;const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${Me}`,a.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),J&&J!==n&&Kt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${hi}`,e.style.transform="translateX(0)";const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${Me}`,a.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Me}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),J===n&&(J=null),setTimeout(()=>{e.style.transition="",a&&(a.style.transition=""),l&&(l.style.transition="")},350)}Le=null}document.addEventListener("mouseup",t),document.addEventListener("mouseleave",t),document.addEventListener("mousedown",e=>{if(!J||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===J||(Kt(J),J=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const o=n.querySelector("textarea");o&&o.blur(),n.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const o=n.querySelector("input");o&&o.blur(),n.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!J||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===J||(Kt(J),J=null)},{passive:!0})}function Kt(t){const e=t==null?void 0:t.querySelector(".swipe-inner"),n=t==null?void 0:t.querySelector(".swipe-del"),i=t==null?void 0:t.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${hi}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),n&&(n.style.transition=`clip-path 0.3s ${Me}`,n.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{n.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${Me}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),t==null||t.classList.remove("open","swipe-threshold")}async function ym(t,e){const n=t==null?void 0:t.dataset.id,i=t==null?void 0:t.dataset.list;if(!n||!i)return;e.style.transition=`transform 0.3s ${Me}`,e.style.transform=`translateX(-${Et+100}px)`;const s=t==null?void 0:t.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${Me}`,s.style.transform=`translateX(-${Et+100}px)`),await new Promise(r=>setTimeout(r,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",J===t&&(J=null),await new Promise(r=>setTimeout(r,250)),lh(n,i==="shop"?"shop":"inv")}async function vm(t,e){const n=t==null?void 0:t.dataset.id;if(!n)return;e.style.transition=`transform 0.3s ${Me}`,e.style.transform=`translateX(${Et+100}px)`;const i=t==null?void 0:t.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${Me}`,i.style.transform=`translateX(${Et+100}px)`),await new Promise(s=>setTimeout(s,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",J===t&&(J=null),await new Promise(s=>setTimeout(s,250)),await $w(n)}async function PL(t,e){if(e!=="inv")return;const n=d("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Me}`,i.style.transform=`translateX(${s+100}px)`);const o=n.querySelector(".swipe-add");o&&(o.style.transition=`transform 0.3s ${Me}`,o.style.transform=`translateX(${s+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",J===n&&(J=null),await new Promise(r=>setTimeout(r,250)),await $w(t)}async function $w(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?b(`${e.name} added to shopping list 🛒`):b(`${e.name} quantity updated on shopping list 🛒`)}async function DL(t,e){const n=d("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Me}`,i.style.transform=`translateX(-${s+100}px)`);const o=n.querySelector(".swipe-del");o&&(o.style.transition=`transform 0.3s ${Me}`,o.style.transform=`translateX(-${s+100}px)`),await new Promise(a=>setTimeout(a,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",J===n&&(J=null),await new Promise(a=>setTimeout(a,250)),lh(t,e==="shop"?"shop":"inv")}function LL(t,e){const n=d("sw-"+t);if(n){const i=n.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Kt(n),J=null;return}}if(u.selectMode){u.selectedIds.has(t)?(u.selectedIds.delete(t),n==null||n.classList.remove("selected")):(u.selectedIds.add(t),n==null||n.classList.add("selected")),Pc();return}e==="shop"?window.openItemDetail(t):window.openInvItemDetail(t)}function NL(){if(u.selectMode==="shop"){Ri();return}u.selectMode&&Ri(),u.selectMode="shop",u.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=d("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Pc()}function ML(){if(u.selectMode==="inv"){Ri();return}u.selectMode&&Ri(),u.selectMode="inv",u.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=d("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Pc()}function Ri(){u.selectMode=null,u.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=d("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=d("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Pc()}async function OL(){if(!u.selectedIds.size)return;const t=[...u.selectedIds],e=u.selectMode;Ri(),e==="shop"?await Promise.all(t.map(n=>sr(n))):await Promise.all(t.map(n=>ir(n))),b(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function Pc(){const t=d("multi-bar");if(!t)return;const e=u.selectedIds.size,n=d("multi-count");n&&(n.textContent=e),u.selectMode?t.classList.add("visible"):t.classList.remove("visible")}let Un=null,Qt=null;function lh(t,e,n={}){var r,a,l,h;Un&&Pw();const i=e==="shop"?u.shop:u.inv,s=i.find(f=>f.id===t);if(!s)return;const o=i.indexOf(s);e==="shop"?(u.shop=u.shop.filter(f=>f.id!==t),(r=U.renderShop)==null||r.call(U),(a=U.renderSum)==null||a.call(U)):(u.inv=u.inv.filter(f=>f.id!==t),(l=U.renderAll)==null||l.call(U),(h=U.renderSum)==null||h.call(U)),FL(Z(s.name)),Un={id:t,list:e,item:{...s},index:o,onCommit:n.onCommit||null}}function Pw(){if(!Un)return;const{id:t,list:e,item:n,onCommit:i}=Un;Un=null,Dw(),i&&i(n);const s=e==="shop"?"shopping":"inventory",o=e==="shop"?"Shopping List":"Supplies";he(`households/${u.hid}/${s}/${t}`);const r={name:n.name,qty:n.quantity||n.qty||1,unit:n.unit,location:n.location,note:n.note,prepCategory:n.prepCategory,barcode:n.barcode,list:e==="shop"?"shopping":"supplies"};Pe("removed",Z(n.name)+` from ${o}`,r)}function VL(){var s,o,r,a;if(!Un)return;const{id:t,list:e,item:n,index:i}=Un;Un=null,Dw(),e==="shop"?(u.shop.splice(Math.min(i,u.shop.length),0,n),(s=U.renderShop)==null||s.call(U),(o=U.renderSum)==null||o.call(U)):(u.inv.splice(Math.min(i,u.inv.length),0,n),(r=U.renderAll)==null||r.call(U),(a=U.renderSum)==null||a.call(U)),b("Restored ✓")}function FL(t){const e=d("undo-toast"),n=d("undo-toast-text"),i=d("undo-bar");if(!e||!i)return;Qt&&(cancelAnimationFrame(Qt),Qt=null),n&&(n.textContent=`${t} deleted`),i.style.width="100%",e.classList.add("visible");const s=5e3,o=performance.now();function r(a){const l=a-o,h=Math.max(0,1-l/s);i.style.width=h*100+"%",h>0?Qt=requestAnimationFrame(r):(Qt=null,Pw())}Qt=requestAnimationFrame(r)}function Dw(){const t=d("undo-toast"),e=d("undo-bar");Qt&&(cancelAnimationFrame(Qt),Qt=null),t&&t.classList.remove("visible"),e&&(e.style.width="100%")}async function UL(){const t=u.selectMode;if(!t)return;const e=t==="shop"?u.shop:u.inv,n=e.length;if(!(!n||!confirm(`Delete all ${n} items from your ${t==="shop"?"shopping list":"supplies"}? This cannot be undone.`))){if(Ri(),t==="shop"){const s=e.map(o=>o.id);await Promise.all(s.map(o=>sr(o)))}else{const s=e.map(o=>o.id);await Promise.all(s.map(o=>ir(o)))}b(`All ${n} items deleted 🗑`)}}const Lw="ks-meal-reminders";async function BL(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function dh(){try{return JSON.parse(localStorage.getItem(Lw))||{}}catch{return{}}}function uh(t){localStorage.setItem(Lw,JSON.stringify(t))}const At={};async function hh(){if(!await BL())return;const e=dh(),n=new Date,i=n.toISOString().split("T")[0];for(const s of Object.keys(e))s<i&&(delete e[s],At[s]&&(clearTimeout(At[s]),delete At[s]));for(const[s,o]of Object.entries(u.mp)){if(!o||s<i)continue;const r=e[s];if(r&&(r.fired||r.cancelled))continue;const l=new Date(s+"T09:00:00").getTime()-n.getTime();l<=0||(e[s]={meal:o,fired:!1,cancelled:!1},At[s]&&clearTimeout(At[s]),At[s]=setTimeout(()=>{jL(s,o)},l))}uh(e)}function jL(t,e){const n=dh(),i=n[t];if(!(i&&i.cancelled)){try{new Notification("Tonight's dinner 🍽",{body:`${e} — tap to view recipe`,icon:"/icon-192.png",tag:`meal-${t}`})}catch{}n[t]={meal:e,fired:!0,cancelled:!1},uh(n),delete At[t]}}function ph(t){At[t]&&(clearTimeout(At[t]),delete At[t]);const e=dh();e[t]&&(e[t].cancelled=!0,uh(e))}const HL=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Nw(t){return"chip-"+t.split(" ").join("-")}function Mw(){const t=d("recChips");t&&(t.innerHTML=HL.map(e=>`<button onclick="toggleChip('${e}')" id="${Nw(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function zL(t){const e=d(Nw(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Ow()}function Ow(){const t=d("recPicker"),e=d("recFilter")?d("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(o=>o.toLowerCase()),s=[...u.recs].sort((o,r)=>(r.cookCount||0)-(o.cookCount||0)).filter(o=>{const r=(o.name+" "+(o.description||"")+" "+(o.tags||[]).join(" ")).toLowerCase(),a=e?e.split(/\s+/).every(h=>r.includes(h)):!0,l=n.every(h=>r.includes(h));return a&&l});t.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(o=>`<option value="${o.id}">${o.name}</option>`).join(""),window._pickedRec=null,d("mealMinp").value=""}function qL(t,e){u.md=t,d("mealMttl").textContent="Meal for "+e,d("mealMinp").value=u.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=d("recFilter");n&&(n.value=""),Mw();const i=d("recPicker");if(u.recs&&u.recs.length){const s=[...u.recs].sort((a,l)=>(l.cookCount||0)-(a.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(a=>`<option value="${a.id}">${a.name}</option>`).join("");const o=u.mp[t]||"",r=s.find(a=>a.name===o);i.value=r?r.id:"",d("recPickerWrap").style.display="block"}else d("recPickerWrap").style.display="none";d("mealM").classList.add("active"),setTimeout(()=>d("mealMinp").focus(),100)}function WL(t){if(!t){window._pickedRec=null,d("mealMinp").value="";return}const e=u.recs.find(n=>n.id===t);e&&(window._pickedRec=e,d("mealMinp").value=e.name)}function fh(){d("mealM").classList.remove("active")}function GL(t,e){const n=u.mp[t];if(!n)return;const i=!!u.mpCooked[t],s=u.recs.find(a=>a.name&&a.name.toLowerCase()===n.toLowerCase());let o=d("mealDetailM");o||(o=document.createElement("div"),o.id="mealDetailM",o.className="modal",o.onclick=function(){this.classList.remove("active")},document.body.appendChild(o));let r;i?r=`
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
      <div class="mttl" style="font-size:1.05rem;margin-bottom:4px">${QL(n)}</div>
      <div style="font-size:.8rem;color:var(--mt);margin-bottom:16px">${e}</div>
      ${r}
    </div>
  `,window._mealDetailMarkCooked=async function(){o.classList.remove("active"),await KL(t,n)},window._mealDetailRemove=async function(){o.classList.remove("active"),await Hn(t,null),Wt(),ni(),Ns(),b("Meal removed from plan")},window._mealDetailViewRecipe=function(){o.classList.remove("active"),s&&window.openRecipeView(s.id)},o.classList.add("active")}async function KL(t,e){await fC(t),await Zd(e,t),await Pe("cooked",e+" tonight 🍳"),ph(t),Wt(),ni(),Ns(),await mh(e),b("Meal logged! 🍳")}function QL(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function JL(){d("schedM").classList.remove("active")}async function YL(){const t=d("mealMinp").value.trim();if(await Hn(u.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=u.inv.map(r=>r.name.toLowerCase()),i=u.shop.map(r=>r.name.toLowerCase()),s=e.split(/[\n,]/).map(r=>r.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(r=>r.length>1&&r.length<60);let o=0;for(const r of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(r))continue;const a=r.replace(/^[-•*]\s*/,"").trim();if(!a||a.length<2)continue;const l=a.toLowerCase();n.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await Fe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:a,qty:1,checked:!1,src:"recipe"}),o++)}o>0&&b(`Added ${o} ingredient${o!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,fh(),Wt(),Ns(),ni(),hh()}async function XL(){await Hn(u.md,null),fh(),Wt(),Ns(),ni()}function ZL(t){const e=u.mp[t];e&&(u.cn=e,u.nr=0,d("cookedNm").textContent=e,d("cnotes").value="",xo("cstars",0),d("cookedM").classList.add("active"))}async function eN(){const t=u.cn;await Zd(t,Jt()),localStorage.getItem("ks-who"),await Pe("cooked",t+" tonight 🍳"),ph(Jt()),await Hn(Jt(),null),d("cookedM").classList.remove("active"),Wt(),ni(),await mh(t),b("Meal logged!")}async function tN(){var s;const t=u.cn,e=d("cnotes").value.trim(),n=(s=d("tog-leftover"))==null?void 0:s.classList.contains("on");await Zd(t,Jt()),await Pe("cooked",t+" tonight 🍳"),ph(Jt());const i=u.recs.find(o=>o.name.toLowerCase()===t.toLowerCase());i?await it({...i,cookCount:(i.cookCount||0)+1,lastCooked:Jt()}):await it({id:"rec-"+Date.now(),name:t,rating:u.nr,favorited:!1,notes:e,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Jt()}),n&&await Hn(Db(),t+" (leftovers)"),await Hn(Jt(),null),d("cookedM").classList.remove("active"),Wt(),ni(),await mh(t),b(n?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}async function mh(t){const e=u.recs.find(i=>i.name&&i.name.toLowerCase()===t.toLowerCase());if(!e)return;const n=nN(e);n.length&&iN(t,n)}function nN(t){if(t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)&&t.ingredientsRaw.length)return t.ingredientsRaw.filter(e=>typeof e=="string"&&e.trim());if(t.description){const e=t.description.split(/\n/),n=e.findIndex(i=>/^ingredients/i.test(i.trim()));if(n>=0){const i=[];for(let s=n+1;s<e.length;s++){const o=e[s].trim();if(/^(steps|instructions|directions|notes)/i.test(o))break;o&&i.push(o.replace(/^[-•*]\s*/,""))}return i}}return[]}function iN(t,e){let n=d("deductM");n||(n=document.createElement("div"),n.id="deductM",n.className="modal",n.onclick=function(){this.classList.remove("active")},document.body.appendChild(n)),n.innerHTML=`
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
  `,window._pendingDeductIngredients=e,window._confirmDeduction=async function(){n.classList.remove("active"),await rN(e)},window._skipDeduction=function(){n.classList.remove("active"),window._pendingDeductIngredients=null},n.classList.add("active")}function sN(t){let e=t.trim().replace(/^[-•*]\s*/,"");const n=e.match(/^([\d]+(?:\.\d+)?(?:\s*\/\s*\d+)?|[\d]*\s*[½¼¾⅓⅔])\s*/);let i=null;if(n){const a=n[1].trim();if(a.includes("½"))i=(parseInt(a)||0)+.5;else if(a.includes("¼"))i=(parseInt(a)||0)+.25;else if(a.includes("¾"))i=(parseInt(a)||0)+.75;else if(a.includes("⅓"))i=(parseInt(a)||0)+1/3;else if(a.includes("⅔"))i=(parseInt(a)||0)+2/3;else if(a.includes("/")){const l=a.split("/");i=parseFloat(l[0])/parseFloat(l[1])}else i=parseFloat(a);e=e.slice(n[0].length)}const s=e.match(/^(cups?|tbsps?|tsps?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|packages?|pkgs?|bunche?s?|heads?|slices?|pieces?|bottles?|jars?|bags?|boxes?|gallons?|pints?|quarts?|rolls?|dozen|loaf|loaves)\s*/i);let o=null;return s&&(o=s[1].trim(),e=e.slice(s[0].length)),{name:e.replace(/^of\s+/i,"").replace(/,.*$/,"").replace(/\(.*\)/,"").trim(),qty:i,unit:o}}function wm(t){return t?t.toLowerCase().replace(/\b(fresh|dried|chopped|minced|sliced|diced|ground|large|small|medium|whole|organic|optional|to taste|for garnish|as needed)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,""):""}function oN(t,e){if(!t||!e)return!0;const n=t.toLowerCase().replace(/s$/,""),i=e.toLowerCase().replace(/s$/,"");if(n===i)return!0;const s={lb:"pound",lbs:"pound",oz:"ounce",ounce:"oz",g:"gram",gram:"g",kg:"kilogram",ml:"milliliter",l:"liter",liter:"l",tbsp:"tablespoon",tablespoon:"tbsp",tsp:"teaspoon",teaspoon:"tsp",clove:"clove",can:"can",piece:"piece",unit:"unit",bottle:"bottle",jar:"jar",bag:"bag",box:"box",bunch:"bunch",head:"head",loaf:"loaf",gallon:"gallon",dozen:"dozen",roll:"roll",package:"pack",pkg:"pack",pack:"pack"},o=s[n]||n,r=s[i]||i;return o===r}async function rN(t){let e=0;for(const n of t){const i=sN(n);if(!i.name)continue;const s=wm(i.name);if(!s)continue;const o=u.inv.find(r=>{const a=wm(r.name);return a.includes(s)||s.includes(a)});if(o&&i.qty!=null&&i.qty>0){if(!oN(i.unit,o.unit))continue;const r=(o.qty||0)-i.qty;r<=0?await ir(o.id):await ee({...o,qty:r}),e++}}e>0?b(`${e} ingredient${e!==1?"s":""} deducted from Supplies`):b("No matching ingredients found to deduct"),window._pendingDeductIngredients=null}function aN(t){d("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),d("schedWk").innerHTML=Ld().map((i,s)=>{const o=i.toISOString().split("T")[0],r=i.getTime()===n.getTime(),a=u.mp[o];return`<div class="wd${r?" today":""}${a?" hm":""}" onclick="schedSet('${o}','${t}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${a?`<div class="wdm">${a}</div>`:""}</div>`}).join(""),d("schedM").classList.add("active")}async function cN(t,e){await Hn(t,e),d("schedM").classList.remove("active"),Wt(),ni(),b("Scheduled! 📅"),hh()}function lN(){const t=s=>d(s),e=(s,o)=>{const r=t(s);r&&(r.value=o||"")};e("setName",u.cfg.name),e("setAdults",u.cfg.adults),e("setKids",u.cfg.kids),e("setOther",u.cfg.other),e("setCuisines",u.cfg.cuisines),e("setCookTime",u.cfg.cookTime),e("setZipcode",u.cfg.zipcode),e("setFavStore",u.cfg.favouriteStore);const n=(s,o)=>{const r=t(s);r&&r.classList.toggle("on",!!o)};n("tg-nopork",u.cfg.nopork),n("tg-noshellfish",u.cfg.noshellfish),n("tg-vegetarian",u.cfg.vegetarian),n("tg-glutenfree",u.cfg.glutenfree),n("tg-notif",u.cfg.notif);const i=d("notifTimeRow");i&&(i.style.display=u.cfg.notif?"block":"none"),e("setNotifTime",u.cfg.notifTime||"8"),e("setNotifDays",String(u.cfg.notifDays||3)),e("setUsername",u.username),vh(),yh(),Dc()}function Dc(){const t=d("customCategoriesList");if(!t)return;const e=Ds();let n="";e.length||(n+='<div style="font-size:.78rem;color:var(--mt);padding:8px 0">No custom categories yet. Create one from any add sheet or here.</div>');for(const i of e)n+=`<div class="srow" style="align-items:center;padding:8px 0" id="custom-cat-row-${i.key}">
      <span style="font-size:1.1rem;margin-right:8px">${i.emoji}</span>
      <span class="srlbl" style="flex:1">${i.name}</span>
      <button class="btn bs bsm" style="font-size:.7rem;padding:4px 8px;margin-right:4px" onclick="editCustomCat('${i.key}')">Edit</button>
      <button class="btn bs bsm" style="font-size:.7rem;padding:4px 8px;color:var(--rd);border-color:var(--rd)" onclick="deleteCustomCategory('${i.key}');renderCustomCategories()">Delete</button>
    </div>`;n+=`<div style="margin-top:10px">
    <div style="display:flex;gap:8px;align-items:center">
      <button class="emoji-trigger-btn" id="settingsCatEmojiBtn" onclick="openSettingsAddEmojiPicker(this)">${bt}</button>
      <input class="fi" id="settingsCatName" placeholder="New category name..." style="flex:1;font-size:.85rem"/>
      <button class="btn bp bsm" onclick="addCustomCatFromSettings()">+ Add</button>
    </div>
  </div>`,t.innerHTML=n}function dN(t){const n=Ds().find(s=>s.key===t);if(!n)return;const i=d(`custom-cat-row-${t}`);i&&(i.innerHTML=`
    <div style="width:100%">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="editCatEmojiBtn-${t}" onclick="openSettingsEditEmojiPicker(this,'${t}')">${n.emoji}</button>
        <input class="fi" id="editCatName-${t}" value="${n.name}" style="flex:1;font-size:.85rem"/>
        <button class="btn bp bsm" onclick="saveEditCustomCat('${t}')">Save</button>
        <button class="btn bs bsm" onclick="renderCustomCategories()">Cancel</button>
      </div>
    </div>`)}let as=bt,jo={};function uN(t){ur(t,as,e=>{as=e;const n=document.getElementById("settingsCatEmojiBtn");n&&(n.textContent=e)})}function hN(t,e){var i;const n=jo[e]||((i=Ds().find(s=>s.key===e))==null?void 0:i.emoji)||bt;ur(t,n,s=>{jo[e]=s;const o=document.getElementById(`editCatEmojiBtn-${e}`);o&&(o.textContent=s)})}function pN(t,e){as=e}function fN(t,e,n){jo[e]=n}async function mN(t){const e=d(`editCatName-${t}`),n=e?e.value.trim():"";if(!n){b("Please enter a name");return}const i=jo[t]||null;await nv(t,n,i),delete jo[t],Dc()}async function gN(){const t=d("settingsCatName"),e=t?t.value.trim():"";if(!e){b("Please enter a category name");return}const i={key:"custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),name:e,emoji:as},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await M(`households/${u.hid}/settings/config`,u.cfg),b(`${as} ${e} category created!`),t&&(t.value=""),as=bt,Dc()}catch(o){console.error("Failed to save custom category:",o),b("Failed to save category")}}async function yN(){u.cfg={...u.cfg,name:d("setName").value.trim(),adults:d("setAdults").value.trim(),kids:d("setKids").value.trim(),nopork:d("tg-nopork").classList.contains("on"),noshellfish:d("tg-noshellfish").classList.contains("on"),vegetarian:d("tg-vegetarian").classList.contains("on"),glutenfree:d("tg-glutenfree").classList.contains("on"),other:d("setOther").value.trim(),cuisines:d("setCuisines").value.trim(),cookTime:d("setCookTime").value,zipcode:d("setZipcode")?d("setZipcode").value.trim():"",favouriteStore:d("setFavStore")?d("setFavStore").value:"",notif:d("tg-notif").classList.contains("on"),notifTime:d("setNotifTime")?d("setNotifTime").value:"8",notifDays:parseInt(d("setNotifDays")?d("setNotifDays").value:"3")},await pc(),u.cfg.notif&&Vw(),b("Settings saved!"),ue("settings"),ju()}async function vN(){var e,n;const t=((n=(e=d("setZipcode"))==null?void 0:e.value)==null?void 0:n.trim())||"";u.cfg={...u.cfg,zipcode:t},await pc(),b("Saved!")}async function wN(t){if(!t.classList.contains("on")){if(!("Notification"in window)){b("Notifications not supported on this browser");return}if(Notification.permission==="denied"){b("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){b("Notifications permission denied");return}}t.classList.toggle("on");const n=d("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function bN(){if(Notification.permission!=="granted"){b("Enable notifications first");return}const t=u.inv.filter(n=>{const i=ot(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function Vw(){if(!u.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=u.cfg.notifDays||3,i=u.inv.filter(o=>{if(!ot(o.expiry))return!1;const a=new Date(o.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((a-l)/864e5)<=n});if(!i.length)return;const s=i.slice(0,3).map(o=>o.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${n} days or less`})}function gh(){return fe("ks-hhs")||[u.hid]}async function yh(){const t=Q();if(t)try{const e=await W(`households/${u.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=d("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&n)try{await M(`household_codes/${e.inviteCode}`,{householdId:u.hid})}catch{}const s=d("regenCodeBtn");s&&(s.style.display=n?"":"none");const o=d("hhMembers");if(o&&e.members){const l=await Promise.all(e.members.map(async h=>{try{const f=await W(`users/${h.uid}`);return{...h,username:(f==null?void 0:f.username)||null}}catch{return{...h,username:null}}}));o.innerHTML=l.map(h=>{const f=h.uid===t.uid,g=h.role==="owner",w=g?" 👑":"",k=h.username?`@${h.username}`:"",E=h.joinedAt?new Date(h.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",P=[];k&&P.push(k),P.push(g?"Owner":"Member"),E&&P.push(`Joined ${E}`);let $="";return n&&!f&&($=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${h.name}${f?" (you)":""}${w}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${P.join(" · ")}</div>
          </div>
          ${$}
        </div>`}).join("")}const r=d("utilitiesRow");if(r){r.style.display="";const l=d("utilitiesSubtitle");l&&(l.textContent=NN(n)+" tools")}const a=d("leaveHouseholdBtn");a&&(a.style.display="block",a.textContent=n?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function _N(){var e;const t=(e=d("hhInviteCode"))==null?void 0:e.textContent;if(!(!t||t==="—"))try{await navigator.clipboard.writeText(t),b("Invite code copied!")}catch{b("Couldn't copy — try manually")}}async function kN(){var n;const t=(n=d("hhInviteCode"))==null?void 0:n.textContent;if(!t||t==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${t} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),b("Share text copied to clipboard!")}catch{b("Couldn't share — try manually")}}async function TN(){if(confirm("Regenerate invite code? The old code will stop working."))try{const t=await dC(u.hid);if(t){const e=d("hhInviteCode");e&&(e.textContent=t),b("New invite code generated!")}}catch(t){console.error("regenInviteCode error:",t),b("Failed to regenerate code")}}async function CN(t,e){const n=e||"this member";if(confirm(`Remove ${n} from the household? They will lose access immediately.`))try{await Vg(u.hid,t),b(`${n} has been removed`),yh()}catch(i){console.error("removeMemberFromHH error:",i),b("Failed to remove member")}}async function SN(t,e){const n=e||"this member";if(confirm(`Transfer ownership to ${n}? You will become a regular member.`))try{await uC(u.hid,t),b(`Ownership transferred to ${n}`),yh()}catch(i){console.error("transferOwnershipUI error:",i),b("Failed to transfer ownership")}}async function Fw(){const t=Q();if(t)try{const e=await W(`households/${u.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=(e.members||[]).length,s=e.name||"this household";if(n){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await Fg(u.hid,t.uid);try{const o=await W(`users/${t.uid}`);o&&await M(`users/${t.uid}`,{...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}b("Household deleted"),Rd()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await Vg(u.hid,t.uid),b("You have left the household"),Rd()}}catch(e){console.error("leaveHousehold error:",e),b("Something went wrong. Please try again.")}}function Rd(){localStorage.removeItem("ks-h");const t=(fe("ks-hhs")||[]).filter(e=>e!==u.hid);t.length>0?(tt("ks-hhs",t),localStorage.setItem("ks-h",t[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function IN(){const t=Q();if(!t||!u.hid)return;await Ug(u.hid,t.uid)||(b("You no longer have access to this household"),Rd())}async function EN(){const t=Q();if(t)try{if(u.hid){const e=await W(`households/${u.hid}`);if(e&&e.ownerUid===t.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await CC(t.uid);try{await t.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),b("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),b("Failed to delete account. Please try again.")}}async function AN(){var i,s,o;const t=(o=(s=(i=d("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:o.toUpperCase();if(!t)return;const e=Q();if(!e){b("Sign in first");return}const n=d("newHHCode");n.disabled=!0;try{const r=await Og(t,e);if(!r){b("Invalid invite code. Check and try again."),n.disabled=!1;return}const a=gh();a.includes(r)||a.push(r),tt("ks-hhs",a),d("newHHCode").value="",vh(),b("Household joined!")}catch(r){console.error("addHousehold error:",r),b("Failed to join household")}n.disabled=!1}function xN(t){t!==u.hid&&(localStorage.setItem("ks-h",t),location.reload())}async function RN(t){if(t===u.hid){Fw();return}const e=Q();if(e)try{const i=await W(`users/${e.uid}`);if(i){const r=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==t),a={...i,householdIds:r,id:void 0};i.householdId&&delete a.householdId,await M(`users/${e.uid}`,a)}const s=await W(`households/${t}`);if(s){const o=(s.members||[]).filter(a=>a.uid!==e.uid),r=(s.memberUids||[]).filter(a=>a!==e.uid);await M(`households/${t}`,{...s,members:o,memberUids:r,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const n=gh().filter(i=>i!==t);tt("ks-hhs",n),vh()}async function vh(){const t=gh().filter(i=>i!==u.hid),e=d("hhList");if(!e)return;if(!t.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const n=[];for(const i of t){let s=i;try{const o=await W(`households/${i}`);o!=null&&o.name&&(s=o.name)}catch{}n.push({id:i,name:s})}e.innerHTML=n.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const nc={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Ho=fe("ks-theme")||"gold",zo=fe("ks-mode")||"auto";function ic(t,e){Ho=t,zo=e,tt("ks-theme",t),tt("ks-mode",e);const n=nc[t]||nc.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,o=document.documentElement.style;o.setProperty("--bg",s.bg),o.setProperty("--sf",s.sf),o.setProperty("--card",s.card),o.setProperty("--card2",s.card2),o.setProperty("--b1",s.b1),o.setProperty("--b2",s.b2),o.setProperty("--ac",s.ac),o.setProperty("--ac2",s.ac2),o.setProperty("--acd","rgba("+s.acr+",.12)"),o.setProperty("--tx",s.tx),o.setProperty("--tx2",s.tx2),o.setProperty("--mt",s.mt),o.setProperty("--gn","#6db56d"),o.setProperty("--gnd","rgba(109,181,109,.12)"),o.setProperty("--rd","#d96b6b"),o.setProperty("--rdd","rgba(217,107,107,.12)"),o.setProperty("--am","#c8960a"),o.setProperty("--amd","rgba(200,150,10,.12)"),Uw(e),Bw(t)}function $N(t){ic(Ho,t)}function Uw(t){["auto","light","dark"].forEach(e=>{const n=d("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function Bw(t){const e=d("themePicker");e&&(e.innerHTML="",Object.keys(nc).forEach(n=>{const i=nc[n],s=n===t,o=document.createElement("div");o.title=i.name,o.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",o.textContent=s?"✓":"",o.onclick=()=>ic(n,zo),o.onmouseover=function(){this.style.transform="scale(1.15)"},o.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(o)}))}function PN(){ic(Ho,zo),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{zo==="auto"&&ic(Ho,"auto")})}function DN(){Bw(Ho),Uw(zo)}async function LN(){const t=d("enrichBtn"),e=d("enrichProgress"),n=d("enrichStatus"),i=d("enrichBar");t&&(t.disabled=!0),e&&(e.style.display="block");const s=u.shop.filter(h=>bm(h)),o=u.inv.filter(h=>bm(h)),r=[...s.map(h=>({item:h,list:"shop"})),...o.map(h=>({item:h,list:"inv"}))];if(!r.length){n&&(n.textContent="All items already enriched!"),i&&(i.style.width="100%"),t&&(t.disabled=!1),b("Nothing to enrich — all items already have data.");return}let a=0,l=0;for(let h=0;h<r.length;h++){const{item:f,list:g}=r[h],w=Math.round((h+1)/r.length*100);n&&(n.textContent=`Processing "${f.name}" (${h+1}/${r.length})…`),i&&(i.style.width=w+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(f.name)}`)).json()).results||[];if(P.length){const $=P[0],D={...f,image:$.image||f.image||null,brand:$.brand||f.brand||"",category:$.category||f.category||"",source:$.source||f.source||"search"};g==="shop"?await Oe(D):await ee(D),a++}else l++}catch(k){console.warn(`Enrich failed for "${f.name}":`,k),l++}h<r.length-1&&await Lc(300)}n&&(n.textContent=`Done! ${a} enriched, ${l} skipped.`),i&&(i.style.width="100%"),t&&(t.disabled=!1),b(`Enrichment complete: ${a} updated, ${l} unchanged.`)}function bm(t){return!t.name||t.name.length<2||t.imageDismissed?!1:!t.image&&!t.brand}function Lc(t){return new Promise(e=>setTimeout(e,t))}function NN(t){return t?7:2}async function MN(){We("utilities");const t=Q();let e=!1;if(t&&u.hid)try{const i=await W(`households/${u.hid}`);e=i&&i.ownerUid===t.uid}catch(i){console.error("openUtilities: failed to fetch household doc:",i)}const n=d("ov-utilities");n&&n.querySelectorAll(".ownerUtil").forEach(i=>{i.style.display=e?"":"none"}),Hw(),ii(()=>jw())}function jw(){Fn(),ue("utilities")}function ON(){const t=lL();b(t>0?`✓ Cleared ${t} cached scan${t===1?"":"s"}`:"Cache is already empty"),Hw()}function Hw(){const t=d("clearScanCacheBtn");if(!t)return;const e=cL();t.textContent=e>0?`🗑️ Clear scan cache (${e} item${e===1?"":"s"})`:"🗑️ Clear scan cache"}async function VN(){if(!u.recs||u.recs.length===0){b("No recipes to publish");return}if(!confirm(`Publish all ${u.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const t=Q(),e=(t==null?void 0:t.displayName)||localStorage.getItem("ks-who")||"Anonymous",n=u.recs.length;let i=0;const s=d("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${n}…`);const o=d("bulkPubBtn");o&&(o.disabled=!0);let r=0;for(const a of u.recs)try{if(await Bg(a)){r++,s&&(s.textContent=`Published ${i}/${n} (${r} skipped)…`);continue}await eu(a,e),i++,s&&(s.textContent=`Published ${i}/${n}…`)}catch(l){console.error("Failed to publish:",a.name,l)}b(`Published ${i} of ${n} recipes to community!`+(r?` (${r} already published)`:"")),o&&(o.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${r} skipped.`)}async function FN(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const t=d("removeDupBtn");t&&(t.disabled=!0,t.textContent="Scanning…");try{const e=await Ft();if(!e||e.length===0){b("No community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}const n=u.hid||"",i=await nu(),s=l=>l.householdId?l.householdId===n:l.authorUid&&i.includes(l.authorUid),o={};for(const l of e){if(!s(l))continue;const h=(l.title||"").trim().toLowerCase();o[h]||(o[h]=[]),o[h].push(l)}const r=[];for(const l of Object.keys(o)){const h=o[l];if(!(h.length<=1)){h.sort((f,g)=>(f.createdAt||"").localeCompare(g.createdAt||""));for(let f=1;f<h.length;f++)r.push(h[f])}}if(r.length===0){b("No duplicate community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}let a=0;for(const l of r)try{await he(`public_recipes/${l.id}`),a++,t&&(t.textContent=`Removing ${a}/${r.length}…`)}catch(h){console.error("Failed to delete duplicate:",l.id,l.title,h)}u.comRecs=await Ft(),b(`${a} duplicate recipe${a!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),b("Error scanning for duplicates. Check console.")}t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes")}async function UN(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=d("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Ft()||[]).filter(r=>r.authorUid===t);if(s.length===0){b("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let o=0;for(const r of s)try{await he(`public_recipes/${r.id}`),o++,e&&(e.textContent=`Removing ${o}/${s.length}…`)}catch(a){console.error("Failed to delete community recipe:",r.id,r.title,a)}u.comRecs=await Ft(),b(`${o} community recipe${o!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),b("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function BN(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=d("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Ft(),s=u.hid||"",o=await nu();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",o),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const r=f=>f.householdId?f.householdId===s:f.authorUid&&o.includes(f.authorUid),a=(i||[]).filter(r);if(console.log("[removeHHComm] Matched household recipes:",a.length,a.map(f=>({id:f.id,title:f.title,authorUid:f.authorUid,householdId:f.householdId}))),a.length===0){b("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${a.length} community recipe${a.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,h=0;for(const f of a)try{const g=`public_recipes/${f.id}`;f.authorUid===t?await he(g):await aC(g),l++,console.log("[removeHHComm] Deleted:",f.id,f.title,"author:",f.authorUid),e&&(e.textContent=`Removing ${l}/${a.length}…`)}catch(g){h++,console.error("[removeHHComm] Failed to delete:",f.id,f.title,"author:",f.authorUid,g)}u.comRecs=await Ft(),h>0?b(`${l} removed, ${h} failed. Check console.`):b(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),b("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function jN(){var l,h,f,g,w;const t=Q();if(!t){b("Sign in first");return}const e=[...u.recs];let n=[];try{n=(await se("public_recipes")).filter(E=>E.authorUid===t.uid)}catch(k){console.error("Failed to load public recipes:",k)}const i=[...e,...n],s=i.length;if(!s){b("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const o=d("regenSumProgress"),r=d("regenSumBtn");o&&(o.style.display="block",o.textContent=`Regenerating 0 of ${s}…`),r&&(r.disabled=!0);let a=0;for(let k=0;k<i.length;k++){const E=i[k],P=E.title||E.name||"Untitled",$=((l=E.ingredientsRaw)==null?void 0:l.join(", "))||E.ingredients||E.description||"",D=((h=E.stepsRaw)==null?void 0:h.join(". "))||E.steps||"";try{const F=((w=(g=(f=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${P}
Ingredients: ${$.substring(0,500)}
Instructions: ${D.substring(0,500)}`}]})})).json()).content)==null?void 0:f[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(F){if(n.some(ne=>ne.id===E.id))await M(`public_recipes/${E.id}`,{...E,summary:F,id:void 0});else{const ne=`households/${u.hid}/recipes/${E.id}`;await M(ne,{...E,summary:F,id:void 0});const I=u.recs.find(v=>v.id===E.id);I&&(I.summary=F)}a++}}catch(N){console.error("Summary regen failed for:",P,N)}o&&(o.textContent=`Regenerating ${k+1} of ${s}…`),await Lc(300)}o&&(o.textContent=`Done — ${a} summaries updated.`),r&&(r.disabled=!1),b(`${a} summaries regenerated!`)}async function HN(){if(!Q()){b("Sign in first");return}const e=d("scanRecipesBtn"),n=d("scanRecipesProgress");e&&(e.disabled=!0,e.textContent="🔍 Scanning your recipes..."),n&&(n.style.display="block",n.textContent="Scanning..."),await Lc(50);const i=[];for(const s of u.recs){const o=[],r=zN(s);r.length===0&&o.push("no ingredients found"),(!s.stepsRaw||s.stepsRaw.length===0)&&!(s.description||"").includes("Steps:")&&o.push("no instructions found");let a=0,l=0,h=0;for(const f of r){if(!f||typeof f!="string")continue;const g=f.trim();if(g.length>100){h++;continue}if(g.length>0&&g.length<3){l++;continue}g.length>=3&&!Nm(g)&&a++}a>0&&o.push(`${a} preparation method${a>1?"s":""} found as ingredient${a>1?"s":""}`),l>0&&o.push(`${l} suspiciously short ingredient${l>1?"s":""}`),h>0&&o.push("instructions mixed with ingredients"),o.length>0&&i.push({recipe:s,issues:o})}if(e&&(e.disabled=!1,e.textContent="🔍 Scan all recipes for issues"),n&&(n.style.display="none"),i.length===0){b("All recipes look good ✓");return}qN(i)}function zN(t){if(t.ingredientsRaw&&t.ingredientsRaw.length>0)return t.ingredientsRaw.map(o=>typeof o=="string"?o:o.name||"").filter(Boolean);const n=(t.description||"").split(`
`),i=[];let s=!1;for(const o of n){const r=o.trim();if(/^ingredients?:?\s*$/i.test(r)){s=!0;continue}if(/^(steps?|directions?|instructions?|method):?\s*$/i.test(r)){s=!1;continue}if(s&&r.startsWith("-")){const a=r.replace(/^-\s*/,"").replace(/^\d+[\d./\s]*(?:cups?|tbsp|tsp|oz|lb|g|kg|ml|l|cloves?|pieces?|slices?|cans?|bunch(?:es)?|heads?|stalks?|sprigs?|pinch(?:es)?|dash(?:es)?|packages?|packets?)\s*/i,"").trim();a&&i.push(a)}}return i}function qN(t){const e=t.map(({recipe:i,issues:s})=>{const o=i.name||i.title||"Untitled",r=s.join(", ");return`<div style="padding:10px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:flex-start;gap:10px">
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
  </div>`,n._flaggedData=t,n.addEventListener("click",i=>{i.target===n&&wh()}),document.body.appendChild(n)}function wh(){const t=document.getElementById("scanResultsModal");t&&t.remove()}async function WN(){const t=document.getElementById("scanResultsModal");if(!t||!t._flaggedData)return;const e=t._flaggedData,n=e.length;let i=0,s=0;const o=t.querySelector("div");o&&(o.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom));text-align:center">
      <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:8px">✨ Fixing Recipes...</div>
      <div id="fixProgress" style="font-size:.84rem;color:var(--mt);margin-bottom:16px">Fixing 1 of ${n}...</div>
      <div style="width:100%;height:6px;background:var(--b2);border-radius:3px;overflow:hidden;margin-bottom:12px">
        <div id="fixProgressBar" style="height:100%;background:var(--ac);border-radius:3px;width:0%;transition:width .3s ease"></div>
      </div>
    </div>`);for(let r=0;r<e.length;r++){const{recipe:a}=e[r],l=document.getElementById("fixProgress"),h=document.getElementById("fixProgressBar");l&&(l.textContent=`Fixing ${r+1} of ${n}... (${a.name||"Untitled"})`),h&&(h.style.width=`${(r+1)/n*100}%`);try{const f=a.description||"",g=(a.stepsRaw||[]).map((F,z)=>{const ne=typeof F=="string"?F:F.text||"";return`${z+1}. ${ne}`}).join(`
`)||"",k=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:f,instructions:g,title:a.name||""})})).json();if(!k.success){s++;continue}const{ingredients:E,steps:P}=k.result;let $=[];E.length&&($.push("Ingredients:"),E.forEach(F=>{const z=[F.amount,F.unit].filter(Boolean).join(" ");$.push(`- ${z?z+" ":""}${F.name}`)}),$.push("")),P.length&&($.push("Steps:"),P.forEach((F,z)=>$.push(`${z+1}. ${F}`)));const D={...a,description:$.join(`
`),ingredientsRaw:E,stepsRaw:P},N=`households/${u.hid}/recipes/${a.id}`;await M(N,{...D,id:void 0});const B=u.recs.find(F=>F.id===a.id);B&&(B.description=D.description,B.ingredientsRaw=D.ingredientsRaw,B.stepsRaw=D.stepsRaw),i++}catch(f){console.error(`Failed to fix recipe "${a.name}":`,f),s++}await Lc(500)}wh(),b(`${i} recipe${i!==1?"s":""} fixed${s>0?`, ${s} skipped`:""}`)}let Wi=new Set,Yn=new Set,$i=null,qo="";function GN(){const t=d("prep-search");qo=t?t.value.trim().toLowerCase():"",$i?_h($i):qo?KN():si()}function KN(){const t=d("prep-body");if(!t)return;const e=Nc(),n=dr();let i="",s=0;for(const o of n){const r=(e.get(o.key)||[]).filter(a=>[a.scanTitle||"",a.name||"",a.brand||""].join(" ").toLowerCase().includes(qo));if(r.length){s+=r.length,i+=`<div class="prep-search-cat-header">${o.emoji} ${o.name} (${r.length})</div>`;for(const a of r){const l=Wo(a),h=Yn.has(a.id),f=Z(a.scanTitle||a.name),g=`${Bn(a.qty)} ${a.unit||""}`.trim();i+=`<div class="prep-item${l?" prep-item-low":""}" id="prep-row-${a.id}">
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
      <p>No items matching "${qo}"</p></div>`),t.innerHTML=i}function sc(t){return t.prepCategory&&dr().some(n=>n.key===t.prepCategory)?t.prepCategory:Li(t)}function Nc(){const t=new Map,e=dr();for(const n of e)t.set(n.key,[]);for(const n of u.inv){const i=sc(n);t.has(i)?t.get(i).push(n):t.get("other").push(n)}for(const[n,i]of t)i.sort((s,o)=>(s.scanTitle||s.name).localeCompare(o.scanTitle||o.name,void 0,{sensitivity:"base"}));return t}function Wo(t){if(t.doNotRestock)return!1;const e=t.restockThreshold!=null?t.restockThreshold:yr(t.unit);return t.qty<=e}function QN(){Wi=new Set,Yn=new Set,$i=null,qo="";const t=d("prep-search");t&&(t.value=""),si(),We("shoppingprep"),ii(()=>bh())}function bh(){Ts(),Fn(),ue("shoppingprep");const t=Yn.size;t>0&&b(`Shopping Prep complete — ${t} item${t!==1?"s":""} added to Shopping List`)}function si(){const t=d("prep-body");if(!t)return;const e=d("prep-title");e&&(e.textContent="Shopping Prep");const n=d("prep-back");n&&n.setAttribute("onclick","closeShoppingPrep()");const i=Nc(),s=dr(),o=u.cfg.customPrepCategories||[],r=new Set(o.map(h=>h.key));let a='<div class="prep-grid">',l=!1;for(const h of s){const f=i.get(h.key)||[],g=f.filter(E=>Wo(E)).length,w=r.has(h.key);if(w&&!l&&(a+='<div class="prep-custom-divider">Custom Categories</div>',l=!0),h.isSubCategory)continue;const k=w?` ontouchstart="prepCatLongPress(event,'${h.key}')" oncontextmenu="prepCatLongPress(event,'${h.key}')"`:"";a+=`<div class="prep-cat-card${g>0?" prep-cat-low":""}" onclick="openPrepCategory('${h.key}')"${k}>
      <div class="prep-emoji">${h.emoji}</div>
      <div class="prep-cat-name">${h.name}</div>
      <div class="prep-cat-count">${f.length} item${f.length!==1?"s":""}</div>
      ${g>0?`<div class="prep-low-badge">${g} low</div>`:""}
    </div>`}a+="</div>",a+=`<button class="btn bs bf prep-add-cat-btn" onclick="openPrepAddCategory()">
    + Add Category
  </button>`,t.innerHTML=a}function JN(t){$i=t,ii(()=>zw()),_h(t)}function zw(){$i=null,si(),ii(()=>bh())}function _h(t){const e=d("prep-body");if(!e)return;const n=dr().find(h=>h.key===t);if(!n)return;const i=d("prep-title");i&&(i.textContent=`${n.emoji} ${n.name}`);const s=d("prep-back");s&&s.setAttribute("onclick","backToGrid()");const r=Nc().get(t)||[],a=r.filter(h=>Wo(h));let l="";a.length>0&&(l+=`<button class="btn bp bf prep-add-all-low" onclick="prepAddAllLow('${t}')">
      Add all low (${a.length})
    </button>`),r.length||(l+=`<div class="es" style="padding:40px 20px"><div class="ei">${n.emoji}</div>
      <p>No items in ${n.name}</p></div>`);for(const h of r){const f=Wo(h),g=Wi.has(h.id),w=Yn.has(h.id),k=Z(h.scanTitle||h.name),E=`${Bn(h.qty)} ${h.unit||""}`.trim();l+=`<div class="prep-item${f?" prep-item-low":""}${g?" prep-item-verified":""}" id="prep-row-${h.id}">
      <!-- Verify checkbox: marks item as physically checked during audit -->
      <div class="prep-verify${g?" checked":""}" onclick="prepToggleVerify('${h.id}')">
        ${g?"✓":""}
      </div>
      <div class="prep-item-info">
        <div class="prep-item-name">
          <!-- Read-only badge showing current Supplies quantity (informational only) -->
          <span class="prep-stock-badge${f?" prep-stock-low":""}">${E}</span>
          ${k}
        </div>
        <!-- Category badge: tappable pill to recategorize this item -->
        <div class="prep-cat-badge" onclick="event.stopPropagation();prepRecategorize('${h.id}')">${an(sc(h)).emoji} ${an(sc(h)).name} ▼</div>
      </div>
      <!-- Cart button: tapping opens a qty popover for adding to shopping list -->
      <button class="prep-shop-btn${w?" prep-shop-added":""}" id="prep-shop-${h.id}"
        onclick="prepAddToShop('${h.id}')"${w?" disabled":""}>
        ${w?"✓ Added":"🛒"}
      </button>
    </div>`}l+=`<button class="btn bs bf" style="margin-top:16px" onclick="prepAddNewItem()">
    + Add new item to Shopping List
  </button>`,e.innerHTML=l}function YN(t){Wi.has(t)?Wi.delete(t):Wi.add(t);const e=d(`prep-row-${t}`);if(e){const n=e.querySelector(".prep-verify");n&&(n.classList.toggle("checked"),n.innerHTML=Wi.has(t)?"✓":""),e.classList.toggle("prep-item-verified")}}function XN(t){if(Yn.has(t)||!u.inv.find(r=>r.id===t))return;const n=d(`prep-shop-${t}`);if(!n)return;Ts(),ks.set(t,1);const i=document.createElement("div");i.className="prep-shop-popover",i.id="prep-active-popover",i.dataset.itemId=t,i.innerHTML=`
    <div class="prep-popover-label">Qty to add</div>
    <div class="prep-popover-stepper">
      <button class="prep-qty-btn" onclick="event.stopPropagation();prepPickerStep('${t}',-1)">−</button>
      <span class="prep-picker-val" id="prep-pick-val-${t}">1</span>
      <button class="prep-qty-btn" onclick="event.stopPropagation();prepPickerStep('${t}',1)">+</button>
    </div>
    <button class="prep-popover-add" onclick="event.stopPropagation();prepConfirmAdd('${t}')">Add</button>
  `;const s=document.createElement("div");s.className="prep-popover-backdrop",s.id="prep-popover-backdrop",s.onclick=()=>Ts(),document.body.appendChild(s);const o=n.getBoundingClientRect();i.style.position="fixed",i.style.right=window.innerWidth-o.right+"px",i.style.bottom=window.innerHeight-o.top+6+"px",document.body.appendChild(i)}const ks=new Map;function ZN(t,e){const n=ks.get(t)||1,i=Math.max(1,Math.min(99,n+e));ks.set(t,i);const s=d(`prep-pick-val-${t}`);s&&(s.textContent=i)}async function eM(t){const e=u.inv.find(s=>s.id===t);if(!e)return;const n=ks.get(t)||1;ks.delete(t),Ts(),await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:n,unit:e.unit||"Unit",checked:!1,brand:e.brand||"",src:"prep"}),Yn.add(t);const i=d(`prep-shop-${t}`);i&&(i.classList.add("prep-shop-added"),i.textContent=`✓ ${n>1?n+" ":""}Added`,i.disabled=!0)}function Ts(){const t=document.getElementById("prep-active-popover"),e=document.getElementById("prep-popover-backdrop");if(t){const n=t.dataset.itemId;n&&ks.delete(n),t.remove()}e&&e.remove()}async function tM(t){const n=(Nc().get(t)||[]).filter(i=>Wo(i)&&!Yn.has(i.id));if(!n.length){b("All low items already added");return}for(const i of n){await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:i.name,qty:1,unit:i.unit||"Unit",checked:!1,brand:i.brand||"",src:"prep"}),Yn.add(i.id);const s=d(`prep-shop-${i.id}`);s&&(s.classList.add("prep-shop-added"),s.textContent="✓ Added",s.disabled=!0)}b(`Added ${n.length} low item${n.length!==1?"s":""} to Shopping List`)}function nM(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=sc(e);ei(n,async i=>{await iv(t,i),$i&&_h($i);const{name:s}=an(i);b(`Moved to ${s}`)})}function iM(t,e){t.preventDefault(),t.stopPropagation();const n=document.getElementById("prep-cat-actions");n&&n.remove();const i=document.createElement("div");i.id="prep-cat-actions",i.className="prep-cat-action-menu",i.innerHTML=`
    <div class="prep-cat-action" onclick="prepCatRename('${e}')">✏️ Rename</div>
    <div class="prep-cat-action" onclick="prepCatAddSub('${e}')">📁 Add Sub-category</div>
    <div class="prep-cat-action" onclick="prepCatReorder('${e}',-1)">⬆️ Move Up</div>
    <div class="prep-cat-action" onclick="prepCatReorder('${e}',1)">⬇️ Move Down</div>
    <div class="prep-cat-action prep-cat-action-danger" onclick="prepCatDelete('${e}')">🗑 Delete</div>
  `;const s=document.createElement("div");s.className="prep-cat-action-backdrop",s.onclick=()=>{i.remove(),s.remove()},document.body.appendChild(s),document.body.appendChild(i);const o=t.touches?t.touches[0].clientX:t.clientX,r=t.touches?t.touches[0].clientY:t.clientY;i.style.left=Math.min(o,window.innerWidth-200)+"px",i.style.top=Math.min(r,window.innerHeight-250)+"px"}function sM(t){Mc();const n=(u.cfg.customPrepCategories||[]).find(s=>s.key===t);if(!n)return;const i=prompt(`Rename "${n.name}" to:`,n.name);!i||!i.trim()||(nv(t,i.trim(),null),si())}function oM(t){Mc();const e=prompt("Sub-category name:");!e||!e.trim()||(eA(t,e.trim(),bt),si())}async function rM(t,e){Mc(),await tA(t,e),si()}async function aM(t){Mc(),await tv(t),si()}function Mc(){const t=document.getElementById("prep-cat-actions"),e=document.querySelector(".prep-cat-action-backdrop");t&&t.remove(),e&&e.remove()}function cM(){const t=d("prep-body");if(!t)return;let e=document.getElementById("prep-add-cat-form");if(e){e.scrollIntoView({behavior:"smooth"});return}e=document.createElement("div"),e.id="prep-add-cat-form",e.className="prep-add-cat-form",e.innerHTML=`
    <div class="cat-create-form" style="margin-top:12px">
      <div style="font-size:.82rem;font-weight:600;color:var(--tx);margin-bottom:8px">New Category</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="prepCatEmojiBtn" onclick="openPrepCatEmojiPicker(this)">📁</button>
        <input class="fi cat-create-input" id="prepCatNameInput" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmPrepAddCategory()">Add</button>
      </div>
    </div>
  `,t.appendChild(e),e.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{const n=d("prepCatNameInput");n&&n.focus()},150)}let Eo=bt;function lM(t){ur(t,Eo,e=>{Eo=e;const n=d("prepCatEmojiBtn");n&&(n.textContent=e)})}async function dM(){const t=d("prepCatNameInput"),e=t?t.value.trim():"";if(!e){b("Please enter a category name");return}const i={key:"custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),name:e,emoji:Eo},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await M(`households/${u.hid}/settings/config`,u.cfg),b(`${Eo} ${e} category created!`),Eo=bt,si()}catch(o){console.error("Failed to save custom category:",o),b("Failed to save category")}}function uM(){Ts(),Fn(),ue("shoppingprep"),window.showScreen&&window.showScreen("shopping"),setTimeout(()=>{window.openShopAddSheet&&window.openShopAddSheet()},150)}let Rn=0;async function hM(){const t=Q();if(t)try{const e=await W(`users/${t.uid}`);if(e!=null&&e.onboardingDone)return;pM()}catch{}}function pM(){const t=d("ov-onboarding");t&&(Rn=0,t.classList.add("active"),qw())}function qw(){const t=d("onboarding-body");if(!t)return;const n=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===Rn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Rn===0?t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Rn===1?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:Rn===2?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:Rn===3&&(t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to Supplies, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function fM(){var t,e,n,i,s,o,r,a,l,h,f,g,w;if(Rn===1){const k=(e=(t=d("ob-name"))==null?void 0:t.value)==null?void 0:e.trim(),E=(i=(n=d("ob-adults"))==null?void 0:n.value)==null?void 0:i.trim(),P=(o=(s=d("ob-kids"))==null?void 0:s.value)==null?void 0:o.trim(),$=(a=(r=d("ob-cuisines"))==null?void 0:r.value)==null?void 0:a.trim(),D=(l=d("ob-cooktime"))==null?void 0:l.value;k&&(u.cfg.name=k),E&&(u.cfg.adults=E),P&&(u.cfg.kids=P),$&&(u.cfg.cuisines=$),D&&(u.cfg.cookTime=D),u.cfg.nopork=((h=d("ob-nopork"))==null?void 0:h.checked)||!1,u.cfg.noshellfish=((f=d("ob-noshellfish"))==null?void 0:f.checked)||!1,u.cfg.vegetarian=((g=d("ob-vegetarian"))==null?void 0:g.checked)||!1,u.cfg.glutenfree=((w=d("ob-glutenfree"))==null?void 0:w.checked)||!1,await pc()}Rn++,qw()}async function Ww(){const t=d("ov-onboarding");t&&t.classList.remove("active");const e=Q();if(e)try{const n=await W(`users/${e.uid}`);n&&await M(`users/${e.uid}`,{...n,onboardingDone:!0,id:void 0})}catch{}}async function mM(){await Ww(),b("You can always adjust settings later ⚙️")}window.getIdToken=Lg;U.renderAll=()=>{try{Vo()}catch(t){console.error("[renderAll] crash:",t)}};U.renderSum=()=>{try{Ns()}catch(t){console.error("[renderSum] crash:",t)}};U.renderRecs=()=>{try{ut()}catch(t){console.error("[renderRecs] crash:",t)}};U.renderShop=()=>{try{Ls()}catch(t){console.error("[renderShop] crash:",t)}};ZR(Ni);window.addEventListener("unhandledrejection",t=>{console.error("[unhandledrejection]",t.reason),t.preventDefault(),H("error")});window.addEventListener("error",t=>{console.error("[global error]",t.message,t.filename,t.lineno),H("error")});document.addEventListener("visibilitychange",()=>{document.hidden&&(uv(),av())});const oc=["k-overview","k-pantry","k-shopping","k-supplies","k-deals"],kh=["h-overview","h-todos","h-cleaning","h-maintain","h-game"],gM={"k-pantry":"inventory","k-shopping":"shopping","k-supplies":"inventory","k-deals":"shopping"};let $d="kitchen";function yM(){return $d==="kitchen"?oc:kh}function vM(t){return(t.startsWith("k-")?"knav-":"hnav-")+t.substring(2)}function wM(t){const e=d("screen-"+t);if(!e)return;const n=e.querySelector(".hbody, .ibody, .rbody, .shbody, .placeholder-screen")||e;n.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 32px;text-align:center;gap:16px">
    <div style="font-size:2.5rem;opacity:.5">⚠️</div>
    <div style="font-size:.95rem;font-weight:600;color:var(--tx)">Something went wrong</div>
    <div style="font-size:.82rem;color:var(--mt);max-width:260px;line-height:1.6">This tab hit an error. Try switching tabs or pull down to refresh.</div>
    <button onclick="location.reload()" class="btn bp bsm" style="margin-top:8px">Reload App</button>
  </div>`}let ea=!1,_m=null,Ca=null;function Go(){return Ca}function bM(){document.querySelectorAll(".screen").forEach(t=>{t.classList.add("no-transition"),t.classList.remove("active","slide-left")}),document.body.offsetHeight,document.querySelectorAll(".screen").forEach(t=>t.classList.remove("no-transition"))}function Pd(t){const e=gM[t];return d(e?"screen-"+e:"screen-"+t)}function Pl(t){try{switch(t){case"k-pantry":case"k-supplies":Ni(),Vo();break;case"k-shopping":_d("list"),Ls();break;case"k-deals":_d("deals");break;case"k-overview":Qw();break;case"h-overview":case"h-todos":case"h-cleaning":case"h-maintain":case"h-game":AM().then(()=>{Yw().then(()=>{switch(t){case"h-overview":un();break;case"h-todos":Fs();break;case"h-cleaning":Us();break;case"h-maintain":kr();break;case"h-game":Bs();break}})});break;default:break}}catch(e){console.error("[_onTabEnter] Error entering tab",t,e),wM(t)}}window.showScreen=function(t){const e=Go();if(e===t)return;const n=oc.includes(t)?oc:kh,i=Pd(t),s=e?Pd(e):null;if(e!==null&&i&&s&&i===s){Ca=t,Dl(t),Nl(t),Pl(t);return}if(e===null){console.log("[showScreen] First load — snapping",t,"visible (no transition)"),i&&(i.classList.add("no-transition","active"),i.offsetHeight,i.classList.remove("no-transition")),Ca=t,Dl(t),Nl(t),Pl(t);return}ea&&(clearTimeout(_m),bM(),ea=!1),document.querySelectorAll(".ov.active").forEach(l=>l.classList.remove("active")),uv(),av();const o=n.indexOf(e),r=n.indexOf(t),a=o===-1?!0:r>o;Ca=t,Dl(t),ea=!0,a?(s&&(s.classList.remove("active"),s.classList.add("slide-left")),i&&(i.classList.remove("slide-left"),i.classList.add("active"))):(i&&(i.classList.add("no-transition","slide-left"),i.classList.remove("active"),i.offsetHeight,i.classList.remove("no-transition"),i.classList.remove("slide-left"),i.classList.add("active")),s&&s.classList.remove("active","slide-left")),_m=setTimeout(()=>{ea=!1,document.querySelectorAll(".screen:not(.active)").forEach(l=>l.classList.remove("slide-left"))},320),oA(),Tx(),w1(),Pl(t),Nl(t)};function Dl(t){var s;const e=t.startsWith("k-")?"nav-kitchen":"nav-home-world",n=d(e);if(!n)return;n.querySelectorAll(".wn-item").forEach(o=>o.classList.remove("active"));const i=vM(t);(s=d(i))==null||s.classList.add("active")}window.switchWorld=function(t){const e=t===$d;$d=t;const n=d("ws-kitchen"),i=d("ws-home");t==="kitchen"?(n==null||n.classList.add("ws-active"),i==null||i.classList.remove("ws-active")):(i==null||i.classList.add("ws-active"),n==null||n.classList.remove("ws-active"));const s=d("nav-kitchen"),o=d("nav-home-world");if(t==="kitchen"?(s&&(s.style.display="flex"),o&&(o.style.display="none")):(s&&(s.style.display="none"),o&&(o.style.display="flex")),!e){const r=t==="kitchen"?oc[0]:kh[0];window.showScreen(r)}};const _M={"k-overview":{action:"openHomeFabSheet()",ariaLabel:"Add item"},"k-pantry":{action:"openInvAddSheet()",ariaLabel:"Add supply"},"k-shopping":{action:"openShopAddSheet()",ariaLabel:"Add to list"},"k-supplies":{action:"openInvAddSheet()",ariaLabel:"Add supply"},"h-todos":{action:"openTodoAddSheet()",ariaLabel:"Add to-do"},"h-cleaning":{action:"openChoreAddSheet()",ariaLabel:"Add chore"},"h-maintain":{action:"openMaintAddSheet()",ariaLabel:"Add task"}};let Ll=null;function Nl(t){const e=d("fab-btn");if(!e)return;const n=_M[t];n?(e.style.transition="none",e.classList.remove("hidden","settled"),e.offsetHeight,e.style.transition="",e.innerHTML='<span class="fab-icon">＋</span>',e.setAttribute("onclick",n.action),e.setAttribute("aria-label",n.ariaLabel),clearTimeout(Ll),Ll=setTimeout(()=>{e.classList.add("settled")},500)):(e.classList.add("hidden"),e.classList.remove("settled"),clearTimeout(Ll))}function kM(){let t=0,e=0,n=!1;const i=50,s=30,o=d("APP");o&&(o.addEventListener("touchstart",r=>{r.target.closest(".bsheet, .ov, .modal, .chmsgs")||r.target.closest(".swipe-wrap, .shit, .iit, .exi")||(t=r.touches[0].clientX,e=r.touches[0].clientY,n=!0)},{passive:!0}),o.addEventListener("touchend",r=>{if(!n)return;n=!1;const a=r.changedTouches[0].clientX-t,l=r.changedTouches[0].clientY-e,h=Math.abs(a),f=Math.abs(l);if(h<i||f>h*Math.tan(s*Math.PI/180))return;const g=yM(),w=Go(),k=g.indexOf(w);if(k===-1)return;const E=a<0?k+1:k-1;E>=0&&E<g.length&&window.showScreen(g[E])},{passive:!0}))}setTimeout(kM,0);const TM=We;window.showOv=function(t){TM(t),t==="settings"&&setTimeout(DN,80)};window.hideOv=ue;window.initHome=ju;window.addLowToShop=m$;window.toggleHomeSection=e$;window.openRecipeMatch=R$;window.showMoreMatches=$$;window.addMissingToShop=P$;window.changeWeek=s$;window.toggleExp=function(){const t=d("exppanel");t.style.display=t.style.display==="none"?"block":"none"};function CM(){const t=d("homeFabBackdrop"),e=d("homeFabSheet");t&&t.classList.add("active"),e&&e.classList.add("active")}function Th(){const t=d("homeFabBackdrop"),e=d("homeFabSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function SM(){Th(),ov()}function IM(){Th(),fv()}window.openHomeFabSheet=CM;window.closeHomeFabSheet=Th;window.fabToSupplies=SM;window.fabToShopping=IM;window.openUniversalAdd=L$;window.closeUniversalAdd=zu;window.uniQtyStep=N$;window.uniFracChange=M$;window.setUniAddLoc=V$;window.toggleUniAddNote=F$;window.onUniAddInput=U$;window.uniAddToSupplies=H$;window.uniAddToShopping=z$;window.uniAddScan=q$;window.uniAddVoice=W$;window.activityUndo=w$;window.activityUncheck=b$;window.activityRemoveShop=_$;window.activityRemoveInv=k$;window.activityRemoveRec=T$;window.activityRevert=C$;window.activityUndoCook=S$;window.activityClearMeal=I$;window.activityUnclip=E$;window.activityUndoDeduct=A$;window.openAdj=hA;window.updL=yA;window.adjQ=vA;window.adjQD=wA;window.adjE=bA;window.adjNote=_A;window.setIT=zA;window.addManual=qA;window.valMA=WA;window.chgMQ=GA;window.selML=KA;window.remItem=gA;window.importDoc=QA;window.adjUnit=kA;window.adjLowThresh=TA;window.adjLowThreshD=CA;window.adjDoNotRestock=SA;window.changeInvUnit=IA;window.changeInvThreshold=EA;window.changeInvThresholdDirect=AA;window.toggleDoNotRestock=RA;window.changeInvLocation=$A;window.changeInvQty=PA;window.changeInvQtyDirect=DA;window.changeInvFrac=LA;window.changeInvThreshFrac=xA;window.changeInvExpiry=NA;window.clearInvExpiry=MA;window.setInvExpiry=OA;window.changeInvNote=VA;window.editInvDetailName=FA;window.saveInvDetailName=UA;window.editInvDetailSubtitle=BA;window.saveInvDetailSubtitle=jA;window.editInvDetailCombined=Eu;window.saveInvDetailCombined=Au;window.openInvAddSheet=ov;window.closeInvAddSheet=pr;window.invAddScan=ex;window.invAddVoice=tx;window.invQtyStep=XA;window.invFracChange=ZA;window.setInvAddLoc=nx;window.toggleInvAddNote=ix;window.qaddInv=sx;window.onInvInput=ox;window.pickInvInlineResult=dx;window.toggleInvVoice=cv;window.openInvItemDetail=ti;window.closeInvItemDetail=Iu;window.deleteInvItemImage=pA;window.triggerInvPhotoUpload=fA;window.handleInvPhotoSelected=mA;window.addInvToShopping=hx;window.openShoppingPrep=QN;window.closeShoppingPrep=bh;window.openPrepCategory=JN;window.backToGrid=zw;window.prepToggleVerify=YN;window.prepAddToShop=XN;window.prepAddAllLow=tM;window.prepAddNewItem=uM;window.prepRecategorize=nM;window.prepCatLongPress=iM;window.filterPrepSearch=GN;window.prepPickerStep=ZN;window.prepConfirmAdd=eM;window.dismissPrepPopover=Ts;window.openPrepAddCategory=cM;window.openPrepCatEmojiPicker=lM;window.confirmPrepAddCategory=dM;window.prepCatRename=sM;window.prepCatAddSub=oM;window.prepCatReorder=rM;window.prepCatDelete=aM;window.selectCategory=WE;window.closeCategoryPicker=Su;window.showCreateCustomCategory=QE;window.pickCustomEmoji=YE;window.openCatCreateEmojiPicker=JE;window.selectEmojiFromPicker=KE;window.closeEmojiPicker=Ka;window.confirmCreateCustomCategory=XE;window.deleteCustomCategory=tv;window.openShopAddCatPicker=Lx;window.changeShopCategory=Nx;window.openInvAddCatPicker=ax;window.changeInvCategory=cx;window.changeInvEmoji=lx;window.toggleInvViewMode=cA;window.filterInvSearch=lA;window.openCategoryReview=px;window.closeCategoryReview=$u;window.confirmCatReview=fx;window.changeCatReview=mx;window.openUniAddCatPicker=j$;window.openScanCatPicker=_L;window.qadd=Cx;window.togShop=Jx;window.toggleShopDone=_x;window.toggleShNote=Yx;window.saveShNote=Xx;window.openShQty=Zx;window.adjShQty=eR;window.saveShQty=wv;window.togAisle=tR;window.setSHT=_d;window.shareList=aR;window.openAddToKitchen=cR;window.setAtkLoc=lR;window.confirmAddToKitchen=dR;window.buildList=uR;window.toggleVoice=hv;window.toggleAddNote=Sx;window.openShopAddSheet=fv;window.closeShopAddSheet=mr;window.shopAddScan=Rx;window.shopAddVoice=$x;window.shopQtyStep=Ax;window.shopFracChange=xx;window.closeEnrichSheet=yv;window.pickEnrichResult=Qx;window.onShopInput=Px;window.pickInlineResult=gv;window.openItemDetail=Ac;window.closeItemDetail=Mx;window.changeShopUnit=Ox;window.changeShopQty=Vx;window.changeShopQtyDirect=Fx;window.changeShopFrac=Ux;window.editShopDetailName=Bx;window.saveShopDetailName=jx;window.editShopDetailSubtitle=Hx;window.saveShopDetailSubtitle=zx;window.editShopDetailCombined=Ou;window.saveShopDetailCombined=Vu;window.deleteItemImage=Wx;window.triggerProductPhotoUpload=Gx;window.handleProductPhotoSelected=Kx;window.bpTog=hR;window.bpSelAll=pR;window.bpUpdBtn=function(){};window.bpConfirm=fR;window._bpItems=[];window.searchDeals=TR;window.dealsFromList=CR;window.addDealToList=Sv;window.renderDealsZipBanner=Tv;window.loadFlippDeals=xc;window.refreshFlippDeals=yR;window.filterDealStore=wR;window.filterDealsLocal=bR;window.loadMoreDeals=IR;window.setDealsPageSize=SR;window.loadCoupons=Uu;window.refreshCoupons=ER;window.searchCoupons=RR;window.filterCouponCat=AR;window.filterCouponsLocal=xR;window.clipCoupon=Ev;window.loadMoreCoupons=MR;window.setCouponsPageSize=NR;window.toggleCouponsSection=mR;window.toggleDealsSection=gR;window.clrChk=function(){u.shop.filter(t=>t.checked).forEach(t=>{vv(t.name),sr(t.id)})};window.setRT=B1;window.togFav=j1;window.valR=H1;window.importFromUrl=z1;window.setImportMode=q1;window.startBulkImport=K1;window.retryBulkImport=Z1;window.saveRec=tD;window.openER=ih;window.updR=sD;window.delER=oD;window.scaleRec=rD;window.whatCanIMake=aD;window.addRecIngToShop=cD;window.parseRecipeWithAI=lD;window.closeParsePreview=Za;window.applyParsedRecipe=uD;window.setStar=hD;window.togTag=T1;window.recipeTimeChanged=_1;window.markTotalTimeManual=k1;window.selectDifficulty=cw;window.togglePublic=fD;window.loadCommunity=_w;window.setComCuisine=AD;window.setComSearch=xD;window.setComSort=RD;window.toggleComTag=$D;window.setComTime=PD;window.setComMinRating=DD;window.openComRecipe=tc;window.likeComRecipe=OD;window.saveComToKitchen=VD;window.addComComment=FD;window.shareComRecipe=UD;window.submitComReview=LD;window.unpublishComRecipe=MD;window.rateComRecipe=Tw;window.clearComRating=ND;window.deleteComComment=HD;window.openReportSheet=WD;window.closeReportSheet=Cw;window.submitComReport=GD;window.loadMoreComments=jD;window.openNotifications=KD;window.openComRecipeFromNotif=QD;window.openRecipeView=gw;window.handleRecipeBack=_r;window.triggerCoverUpload=mD;window.handleCoverSelected=gD;window.handleCoverDrop=yD;window.removeCoverPhoto=vD;window.triggerStepPhotoUpload=wD;window.handleStepPhotoSelected=bD;window.removeStepPhoto=_D;window.openPhotoViewer=kD;window.closePhotoViewer=TD;window.photoViewerNav=vw;window.triggerCommentPhotoUpload=SD;window.handleCommentPhotosSelected=ID;window.removeCommentPhoto=ED;window.setRecSearch=C1;window.setRecSort=S1;window.toggleFilterPanel=I1;window.setRecDifficulty=E1;window.setRecCookTime=A1;window.setRecServes=x1;window.toggleRecProtein=R1;window.toggleRecTag=$1;window.toggleRecTagsExpand=P1;window.clearRecFilters=D1;window.toggleComTagsPanel=O1;window.clearComFilters=V1;window.toggleRecSearchPanel=mw;window.closeRecSearchPanel=$c;window.setViewStar=pD;window.editComRecipe=zD;window.saveComRecipeEdit=qD;window.editHouseholdNotes=nD;window.saveHouseholdNotes=iD;window.sendChat=Iw;window.sendPill=tL;window.clrChat=nL;window.ar=Ew;window.importChatRecipe=eL;window.stopLiveScanner=ah;window.resumeScanner=gL;window.openScanForList=yL;window.openScanForInventory=vL;window.addScannedToList=kL;window.toggleScanNote=bL;window.showManualNameInput=wL;window.togManual=TL;window.manLookup=CL;window.selRL=ch;window.valAdd=SL;window.addToInv=IL;window.chgAQ=EL;window.editScanTitle=AL;window.confirmScanTitle=xL;window.swipeDelItem=DL;window.swipeAddItem=PL;window.swipeRowTap=LL;window.togShopSelect=NL;window.togInvSelect=ML;window.cancelSelect=Ri;window.deleteSelected=OL;window.undoDelete=VL;window.deleteAll=UL;window.deleteWithUndo=lh;window.confirmVoiceMultiAdd=vx;window.cancelVoiceMulti=pv;window.openMealM=qL;window.openMealDetail=GL;window.pickRec=WL;window.closeMealM=fh;window.saveMeal=YL;window.clrMeal=XL;window.openCooked=ZL;window.skipCooked=eN;window.saveCooked=tN;window.scheduleRecipe=aN;window.schedSet=cN;window.closeSchedM=JL;window.initRecChips=Mw;window.toggleChip=zL;window.filterRecs=Ow;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=yN;window.saveZipcode=vN;window.toggleNotif=wN;window.testNotif=bN;window.addHousehold=AN;window.switchHousehold=xN;window.removeHousehold=RN;window.setMode=$N;window.showNotif=b;window.applyTitleCaseWhileTyping=rc;window.copyInviteCode=_N;window.shareInviteCode=kN;window.regenInviteCode=TN;window.removeMemberFromHH=CN;window.transferOwnershipUI=SN;window.leaveHousehold=Fw;window.enrichExistingItems=LN;window.bulkPublishAll=VN;window.regenAllSummaries=jN;window.removeDuplicateCommunityRecipes=FN;window.removeMyCommRecipes=UN;window.removeHouseholdCommRecipes=BN;window.deleteAccount=EN;window.scanRecipesForIssues=HN;window.closeScanResults=wh;window.fixAllFlaggedRecipes=WN;window.openUtilities=MN;window.closeUtilities=jw;window.clearScanCacheUI=ON;window.editCustomCat=dN;window.pickSettingsCatEmoji=pN;window.pickEditCatEmoji=fN;window.openSettingsAddEmojiPicker=uN;window.openSettingsEditEmojiPicker=hN;window.saveEditCustomCat=mN;window.addCustomCatFromSettings=gN;window.renderCustomCategories=Dc;window.onSearchInput=function(t){const e=t.closest(".input-clear-wrap");e&&e.classList.toggle("has-text",t.value.length>0)};window.clearSearch=function(t,e){const n=d(t);if(!n)return;n.value="";const i=n.closest(".input-clear-wrap");i&&i.classList.remove("has-text"),n.focus(),e&&typeof window[e]=="function"&&window[e]()};function Gw(){const t=new Date().getHours();return t<12?"Good morning":t<17?"Good afternoon":"Good evening"}function Oc(){return(localStorage.getItem("ks-who")||"there").split(" ")[0]}function Kw(){return new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}function Qw(){var w;const t=d("screen-k-overview");if(!t)return;const e=Oc(),n=Gw(),i=Kw(),s=(u.inv||[]).filter(k=>!k.doNotRestock&&k.qty!=null&&k.lowThreshold!=null&&k.qty<=k.lowThreshold),o=(u.shop||[]).filter(k=>!k.checked).length,r=new Date,a=new Date(r.getTime()+3*864e5),l=(u.inv||[]).filter(k=>{if(!k.exp)return!1;const E=new Date(k.exp);return E<=a&&E>=r}),h=r.toISOString().split("T")[0],f=((w=u.mp)==null?void 0:w[h])||null,g=(u.activity||[]).slice(0,3);t.innerHTML=`
    <div class="ko-header">
      <div>
        <div class="ko-greeting">${n}, <span>${e}</span></div>
        <div class="ko-date">${i}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="srow" style="margin:0"><span class="sdot" id="sdot-ko"></span></div>
        <div class="setbtn" onclick="showOv('settings')">⚙️</div>
      </div>
    </div>
    <div class="ko-body">
      <!-- Quick Stats Row -->
      <div class="ko-stats-row">
        <div class="ko-stat-card" onclick="showScreen('k-pantry')">
          <div class="ko-stat-icon">📦</div>
          <div class="ko-stat-val">${s.length}</div>
          <div class="ko-stat-label">Running Low</div>
        </div>
        <div class="ko-stat-card" onclick="showScreen('k-shopping')">
          <div class="ko-stat-icon">🛒</div>
          <div class="ko-stat-val">${o}</div>
          <div class="ko-stat-label">On My List</div>
        </div>
        <div class="ko-stat-card" onclick="showScreen('k-pantry')">
          <div class="ko-stat-icon">⏰</div>
          <div class="ko-stat-val">${l.length}</div>
          <div class="ko-stat-label">Expiring Soon</div>
        </div>
      </div>

      <!-- What's for dinner tonight card — static prompt with Find Recipes button -->
      <div class="ko-section-label">Tonight's Dinner</div>
      <div class="ko-dinner-card">
        <div class="ko-dinner-icon">${f?"🍽️":"🤔"}</div>
        <div class="ko-dinner-content">
          <div class="ko-dinner-title">${f||"What's for dinner tonight?"}</div>
          <div class="ko-dinner-sub">${f?"Planned for tonight":"Browse your saved recipes for inspiration"}</div>
          <button class="ko-recipes-btn" onclick="showNotif('Recipes coming to Kitchen tab soon!')">Find Recipes</button>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="ko-section-label">Recent Activity</div>
      ${g.length?g.map(k=>`
        <div class="ko-activity-row">
          <div class="ko-activity-icon">${k.icon||"📝"}</div>
          <div class="ko-activity-text">
            <div class="ko-activity-desc">${k.text||k.action||"Activity"}</div>
            <div class="ko-activity-time">${EM(k.ts)}</div>
          </div>
        </div>
      `).join(""):`
        <div class="ko-empty-activity">
          <div style="opacity:.5;font-size:1.5rem;margin-bottom:8px">📋</div>
          <div>No recent activity yet</div>
          <div style="font-size:.75rem;color:var(--mt);margin-top:4px">Actions you take will appear here</div>
        </div>
      `}
    </div>
  `}function EM(t){if(!t)return"";const e=typeof t=="string"?new Date(t):new Date(t),n=Date.now()-e.getTime(),i=Math.floor(n/6e4);if(i<1)return"just now";if(i<60)return`${i} min ago`;const s=Math.floor(i/60);if(s<24)return`${s} hr${s>1?"s":""} ago`;const o=Math.floor(s/24);return o===1?"yesterday":o<7?`${o} days ago`:e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}async function AM(){if(!u.homeDataLoaded){H("syncing");try{const[t,e,n,i]=await Promise.allSettled([se(`households/${u.hid}/home_todos`),se(`households/${u.hid}/home_chores`),se(`households/${u.hid}/home_maintenance`),W(`households/${u.hid}/home_config/gameState`)]);u.homeTodos=t.status==="fulfilled"?t.value:[],u.homeChores=e.status==="fulfilled"?e.value:[],u.homeMaint=n.status==="fulfilled"?n.value:[],u.homeGame=i.status==="fulfilled"&&i.value?i.value:Ch(),u.homeChores.length||await xM(),u.homeMaint.length||await RM(),i.value||await Ko(),u.homeDataLoaded=!0,H("synced")}catch(t){console.error("[_loadHomeData] Error:",t),H("error"),u.homeDataLoaded=!0}}}function Ch(){return{boraWeekPts:0,bushraWeekPts:0,boraAllTimePts:0,bushraAllTimePts:0,boraSeasonPts:0,bushraSeasonPts:0,seasonStart:new Date().toISOString().split("T")[0],weekStart:Jw(),lastConsequence:null,weeklyHistory:[],boraStreak:0,bushraStreak:0,boraPowerCards:["shield","swap","ghost","double"],bushraPowerCards:["shield","swap","ghost","double"]}}function Jw(){const t=new Date,e=t.getDay(),n=t.getDate()-e+(e===0?-6:1);return new Date(t.setDate(n)).toISOString().split("T")[0]}async function Yw(){const t=u.homeGame;if(!t)return;const e=Jw();if(t.weekStart!==e){const n={weekStart:t.weekStart,boraPoints:t.boraWeekPts,bushraPoints:t.bushraWeekPts,winner:t.boraWeekPts>t.bushraWeekPts?"Bora":t.bushraWeekPts>t.boraWeekPts?"Bushra":"Tie",consequence:t.lastConsequence||null};t.weeklyHistory=[n,...t.weeklyHistory||[]].slice(0,12),t.boraWeekPts>t.bushraWeekPts?(t.boraStreak=(t.boraStreak||0)+1,t.bushraStreak=0):t.bushraWeekPts>t.boraWeekPts?(t.bushraStreak=(t.bushraStreak||0)+1,t.boraStreak=0):(t.boraStreak=0,t.bushraStreak=0),t.boraWeekPts=0,t.bushraWeekPts=0,t.weekStart=e,t.lastConsequence=null,await Ko()}t.seasonStart&&Math.floor((Date.now()-new Date(t.seasonStart).getTime())/864e5)>=30&&(t.boraSeasonPts=0,t.bushraSeasonPts=0,t.seasonStart=new Date().toISOString().split("T")[0],await Ko())}async function Sh(t,e){const n=u.homeGame;n&&(await Yw(),t==="Bora"?(n.boraWeekPts=(n.boraWeekPts||0)+e,n.boraAllTimePts=(n.boraAllTimePts||0)+e,n.boraSeasonPts=(n.boraSeasonPts||0)+e):(n.bushraWeekPts=(n.bushraWeekPts||0)+e,n.bushraAllTimePts=(n.bushraAllTimePts||0)+e,n.bushraSeasonPts=(n.bushraSeasonPts||0)+e),await Ko())}async function Ko(){try{const t={...u.homeGame};delete t.id,await M(`households/${u.hid}/home_config/gameState`,t)}catch(t){console.error("[_saveGameState]",t)}}async function xM(){const t=[{name:"Vacuum living room",frequency:"weekly",assignee:"Rotating",room:"Living Room",nextDue:Ae("weekly")},{name:"Vacuum bedrooms",frequency:"weekly",assignee:"Rotating",room:"Bedrooms",nextDue:Ae("weekly")},{name:"Mop kitchen floor",frequency:"weekly",assignee:"Rotating",room:"Kitchen",nextDue:Ae("weekly")},{name:"Clean bathrooms",frequency:"weekly",assignee:"Rotating",room:"Bathroom",nextDue:Ae("weekly")},{name:"Do laundry",frequency:"weekly",assignee:"Rotating",room:"Laundry",nextDue:Ae("weekly")},{name:"Take out trash",frequency:"weekly",assignee:"Rotating",room:"Kitchen",nextDue:Ae("weekly")},{name:"Take out recycling",frequency:"weekly",assignee:"Rotating",room:"Kitchen",nextDue:Ae("weekly")},{name:"Wipe kitchen counters",frequency:"daily",assignee:"Rotating",room:"Kitchen",nextDue:Ae("daily")},{name:"Do dishes",frequency:"daily",assignee:"Rotating",room:"Kitchen",nextDue:Ae("daily")},{name:"Clean stovetop",frequency:"weekly",assignee:"Rotating",room:"Kitchen",nextDue:Ae("weekly")},{name:"Dust surfaces",frequency:"biweekly",assignee:"Rotating",room:"Living Room",nextDue:Ae("biweekly")},{name:"Change bed sheets",frequency:"biweekly",assignee:"Rotating",room:"Bedrooms",nextDue:Ae("biweekly")},{name:"Clean mirrors",frequency:"biweekly",assignee:"Rotating",room:"Bathroom",nextDue:Ae("biweekly")},{name:"Mop bathroom floor",frequency:"weekly",assignee:"Rotating",room:"Bathroom",nextDue:Ae("weekly")},{name:"Deep clean fridge",frequency:"monthly",assignee:"Rotating",room:"Kitchen",nextDue:Ae("monthly")},{name:"Clean oven",frequency:"monthly",assignee:"Rotating",room:"Kitchen",nextDue:Ae("monthly")}];for(const e of t){const n="chore_"+Date.now()+"_"+Math.random().toString(36).slice(2,8);e.id=n,e.lastDone=null,e.createdAt=new Date().toISOString(),await M(`households/${u.hid}/home_chores/${n}`,e),u.homeChores.push({...e})}}async function RM(){const t=[{name:"Replace HVAC filters",category:"HVAC",frequency:"monthly",notes:"Use MERV-11 or higher. Check monthly, replace when dirty."},{name:"Service furnace",category:"HVAC",frequency:"annual",notes:"Schedule before heating season. Inspect heat exchanger, clean burners."},{name:"Service AC unit",category:"HVAC",frequency:"annual",notes:"Clean condenser coils, check refrigerant levels. Schedule before summer."},{name:"Clean gutters & downspouts",category:"Exterior",frequency:"biannual",notes:"Spring and fall. Check for loose brackets. Flush with hose."},{name:"Chimney inspection & sweep",category:"Exterior",frequency:"annual",notes:"Before fireplace season. Check flue liner, cap, and damper."},{name:"Inspect roof",category:"Exterior",frequency:"annual",notes:"Check shingles, flashing, vents. Cape Cod roofs collect leaves in valleys."},{name:"Test smoke & CO detectors",category:"Electrical",frequency:"monthly",notes:"Replace batteries annually. Replace units every 10 years."},{name:"Inspect & clean dryer vent",category:"Appliance",frequency:"annual",notes:"Prevent fire hazard. Clean full run from dryer to outside vent."},{name:"Water heater flush",category:"Plumbing",frequency:"annual",notes:"Drain sediment to maintain efficiency. Check anode rod every 3 years."},{name:"Check sump pump",category:"Plumbing",frequency:"quarterly",notes:"Pour water to test float switch. Clean pit. Check discharge pipe."},{name:"Inspect basement for moisture",category:"General",frequency:"quarterly",notes:"Check walls, floor, windows for leaks. Monitor dehumidifier."},{name:"Caulk windows & doors",category:"Exterior",frequency:"annual",notes:"Check all exterior caulking. Cape Cod windows are prone to drafts."},{name:"Clean refrigerator coils",category:"Appliance",frequency:"biannual",notes:"Under or behind fridge. Improves efficiency and extends life."},{name:"Test GFCI outlets",category:"Electrical",frequency:"monthly",notes:"Press test button, then reset. Check kitchen, bathroom, outdoor outlets."},{name:"Inspect attic insulation",category:"General",frequency:"annual",notes:"Cape Cod attics need R-49 minimum. Check for moisture, pests."},{name:"Treat lawn / fertilize",category:"Exterior",frequency:"quarterly",notes:"Spring (April), summer (June), fall (Sept), winterize (Nov)."},{name:"Power wash siding & walkways",category:"Exterior",frequency:"annual",notes:"Spring cleaning. Careful with older wood siding."},{name:"Check weather stripping",category:"Exterior",frequency:"annual",notes:"All exterior doors. Replace worn strips before winter."},{name:"Inspect foundation",category:"General",frequency:"annual",notes:"Check for cracks, settling. 1950s Cape Cods may have stone/block foundations."},{name:"Service garage door",category:"General",frequency:"annual",notes:"Lubricate tracks, check springs and cables, test auto-reverse."},{name:"Flush main sewer line",category:"Plumbing",frequency:"annual",notes:"Older homes prone to root intrusion. Snake or hydro-jet preventively."},{name:"Inspect electrical panel",category:"Electrical",frequency:"annual",notes:"Check for corrosion, loose connections. 1950s homes may have older panels."}];for(const e of t){const n="maint_"+Date.now()+"_"+Math.random().toString(36).slice(2,8);e.id=n,e.lastDone=null,e.nextDue=Ae(e.frequency),e.estimatedCost=null,e.createdAt=new Date().toISOString(),await M(`households/${u.hid}/home_maintenance/${n}`,e),u.homeMaint.push({...e})}}function Ae(t){const e=new Date;switch(t){case"daily":e.setDate(e.getDate()+1);break;case"weekly":e.setDate(e.getDate()+7);break;case"biweekly":e.setDate(e.getDate()+14);break;case"monthly":e.setMonth(e.getMonth()+1);break;case"quarterly":e.setMonth(e.getMonth()+3);break;case"biannual":e.setMonth(e.getMonth()+6);break;case"annual":e.setFullYear(e.getFullYear()+1);break;default:e.setDate(e.getDate()+7)}return e.toISOString().split("T")[0]}function Xw(t,e){const n=new Date(t);switch(e){case"daily":n.setDate(n.getDate()+1);break;case"weekly":n.setDate(n.getDate()+7);break;case"biweekly":n.setDate(n.getDate()+14);break;case"monthly":n.setMonth(n.getMonth()+1);break;case"quarterly":n.setMonth(n.getMonth()+3);break;case"biannual":n.setMonth(n.getMonth()+6);break;case"annual":n.setFullYear(n.getFullYear()+1);break;case"one-time":return null;default:n.setDate(n.getDate()+7)}return n.toISOString().split("T")[0]}function un(){const t=d("screen-h-overview");if(!t)return;const e=Oc(),n=Gw(),i=Kw(),s=u.homeGame||Ch(),o=s.boraWeekPts>s.bushraWeekPts,r=s.bushraWeekPts>s.boraWeekPts,a=s.boraWeekPts===s.bushraWeekPts,l=Math.abs(s.boraWeekPts-s.bushraWeekPts),h=a?0:l+1,f=o?"Bushra":"Bora",g=new Date().toISOString().split("T")[0],w=(u.homeChores||[]).filter(D=>D.nextDue&&D.nextDue<=g).sort((D,N)=>(D.nextDue||"").localeCompare(N.nextDue||"")).slice(0,3),k=(u.homeTodos||[]).filter(D=>!D.done).sort((D,N)=>{const B={High:0,Normal:1,Low:2};return(B[D.priority]||1)-(B[N.priority]||1)}).slice(0,3),E=(u.homeChores||[]).filter(D=>D.lastDone?D.lastDone>=s.weekStart:!1).length,P=(u.homeTodos||[]).filter(D=>!D.done||!D.doneAt?!1:D.doneAt>=s.weekStart).length,$=(s.boraWeekPts||0)+(s.bushraWeekPts||0);t.innerHTML=`
    <div class="ho-header">
      <div>
        <div class="ko-greeting">${n}, <span>${e}</span></div>
        <div class="ko-date">${i}</div>
      </div>
      <div class="setbtn" onclick="showOv('settings')">⚙️</div>
    </div>
    <div class="ho-body">
      <!-- Leaderboard Card -->
      <div class="ho-card ho-leaderboard">
        <div class="ho-card-title">This Week's Leaderboard</div>
        <div class="ho-lb-row">
          <div class="ho-lb-player ${o?"ho-lb-leading":""}">
            <div class="ho-lb-avatar ho-avatar-bora">B</div>
            <div class="ho-lb-name">Bora</div>
            <div class="ho-lb-pts">${s.boraWeekPts||0} pts</div>
          </div>
          <div class="ho-lb-vs">vs</div>
          <div class="ho-lb-player ${r?"ho-lb-leading":""}">
            <div class="ho-lb-avatar ho-avatar-bushra">B</div>
            <div class="ho-lb-name">Bushra</div>
            <div class="ho-lb-pts">${s.bushraWeekPts||0} pts</div>
          </div>
        </div>
        ${a?'<div class="ho-lb-msg">All tied up! Keep going!</div>':`<div class="ho-lb-msg">${f} needs ${h} more pts to dodge the wheel</div>`}
      </div>

      <!-- Today's Chores -->
      <div class="ho-card">
        <div class="ho-card-title">Today's Chores</div>
        ${w.length?w.map(D=>`
          <div class="ho-task-row">
            <button class="ho-task-check" onclick="markChoreDone('${D.id}')">&#10003;</button>
            <div class="ho-task-info">
              <div class="ho-task-name">${D.name}</div>
              <div class="ho-task-meta">
                <span class="ho-assignee-badge ${D.assignee==="Bushra"?"ho-badge-bushra":"ho-badge-bora"}">${D.assignee==="Rotating"?"Rotating":D.assignee}</span>
                <span>${D.room||""}</span>
              </div>
            </div>
          </div>
        `).join(""):'<div class="ho-empty-msg">All caught up! No chores due today.</div>'}
        <button class="btn bsm bs" style="width:100%;margin-top:10px" onclick="showScreen('h-cleaning')">View All Chores</button>
      </div>

      <!-- Open To-Dos -->
      <div class="ho-card">
        <div class="ho-card-title">Open To-Dos</div>
        ${k.length?k.map(D=>`
          <div class="ho-task-row">
            <button class="ho-task-check" onclick="markTodoDone('${D.id}')">&#10003;</button>
            <div class="ho-task-info">
              <div class="ho-task-name">${D.title}</div>
              <div class="ho-task-meta">
                <span class="ho-assignee-badge ${D.assignee==="Bushra"?"ho-badge-bushra":D.assignee==="Bora"?"ho-badge-bora":""}">${D.assignee||"Both"}</span>
                ${D.priority==="High"?'<span class="ho-priority-high">High</span>':""}
              </div>
            </div>
          </div>
        `).join(""):'<div class="ho-empty-msg">No open to-dos!</div>'}
        <button class="btn bsm bs" style="width:100%;margin-top:10px" onclick="showScreen('h-todos')">View All To-Dos</button>
      </div>

      <!-- This Week Summary -->
      <div class="ho-card">
        <div class="ho-card-title">This Week</div>
        <div class="ko-stats-row">
          <div class="ko-stat-card" style="cursor:default">
            <div class="ko-stat-val">${E}</div>
            <div class="ko-stat-label">Chores Done</div>
          </div>
          <div class="ko-stat-card" style="cursor:default">
            <div class="ko-stat-val">${P}</div>
            <div class="ko-stat-label">To-Dos Done</div>
          </div>
          <div class="ko-stat-card" style="cursor:default">
            <div class="ko-stat-val">${$}</div>
            <div class="ko-stat-label">Points Earned</div>
          </div>
        </div>
      </div>
    </div>
  `}function Fs(){const t=d("screen-h-todos");if(!t)return;const e=new Date().toISOString().split("T")[0],n=(u.homeTodos||[]).filter(h=>!h.done),i=(u.homeTodos||[]).filter(h=>h.done),s=n.filter(h=>h.dueDate&&h.dueDate<e).sort((h,f)=>h.dueDate.localeCompare(f.dueDate)),o=n.filter(h=>h.dueDate===e),r=n.filter(h=>h.dueDate&&h.dueDate>e).sort((h,f)=>h.dueDate.localeCompare(f.dueDate)),a=n.filter(h=>!h.dueDate),l=(h,f,g)=>f.length?`
      <div class="ho-section-label ${g||""}">${h} (${f.length})</div>
      ${f.map(w=>km(w)).join("")}
    `:"";t.innerHTML=`
    <div class="ho-header">
      <div>
        <div class="ho-tab-title">To-Dos</div>
        <div class="ko-date">${n.length} open &middot; ${i.length} done</div>
      </div>
    </div>
    <div class="ho-body">
      ${l("Overdue",s,"ho-overdue")}
      ${l("Today",o)}
      ${l("Upcoming",r)}
      ${l("No Date",a)}
      ${n.length?"":'<div class="ho-empty-state"><div style="font-size:2.5rem;margin-bottom:12px">&#9989;</div><div>All done! Add a to-do with the + button.</div></div>'}
      ${i.length?`
        <div class="ho-section-label" style="margin-top:24px">Done (${i.length})</div>
        ${i.slice(0,10).map(h=>km(h,!0)).join("")}
        ${i.length>10?`<div class="ho-empty-msg">${i.length-10} more completed items...</div>`:""}
      `:""}
    </div>
  `}function km(t,e=!1){const n=t.priority==="High"?"ho-todo-high":t.priority==="Low"?"ho-todo-low":"";return`
    <div class="ho-todo-item ${e?"ho-todo-done":""} ${n}">
      <button class="ho-todo-check ${e?"ho-todo-checked":""}" onclick="${e?`uncheckTodo('${t.id}')`:`markTodoDone('${t.id}')`}">
        ${e?"&#10003;":""}
      </button>
      <div class="ho-todo-content" onclick="openTodoDetail('${t.id}')">
        <div class="ho-todo-title ${e?"ho-todo-title-done":""}">${t.title}</div>
        <div class="ho-task-meta">
          <span class="ho-assignee-badge ${t.assignee==="Bushra"?"ho-badge-bushra":t.assignee==="Bora"?"ho-badge-bora":""}">${t.assignee||"Both"}</span>
          ${t.priority&&t.priority!=="Normal"?`<span class="ho-priority-${t.priority.toLowerCase()}">${t.priority}</span>`:""}
          ${t.dueDate?`<span class="ho-due-date">${Cs(t.dueDate)}</span>`:""}
        </div>
        ${t.note?`<div class="ho-todo-note">${t.note}</div>`:""}
      </div>
      <button class="ho-todo-del" onclick="deleteTodo('${t.id}')">&#128465;</button>
    </div>
  `}function Cs(t){return t?new Date(t+"T00:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric"}):""}function $M(){let t=d("todoAddBackdrop"),e=d("todoAddSheet");if(!t){const n=document.createElement("div");n.innerHTML=`
      <div class="bsheet-backdrop" id="todoAddBackdrop" onclick="closeTodoAddSheet()"></div>
      <div class="bsheet" id="todoAddSheet">
        <div class="bsheet-handle"></div>
        <div class="bsheet-title">New To-Do</div>
        <div class="frow"><label class="flbl">Title</label><input class="fi" id="todoTitle" placeholder="What needs to be done?"></div>
        <div class="frow"><label class="flbl">Note (optional)</label><textarea class="fta" id="todoNote" rows="2" placeholder="Any extra details..."></textarea></div>
        <div class="frow"><label class="flbl">Assignee</label>
          <div class="lpick">
            <button class="lbtn sel" onclick="setTodoField(this,'todoAssignee','Bora')">Bora</button>
            <button class="lbtn" onclick="setTodoField(this,'todoAssignee','Bushra')">Bushra</button>
            <button class="lbtn" onclick="setTodoField(this,'todoAssignee','Both')">Both</button>
          </div>
          <input type="hidden" id="todoAssignee" value="Bora">
        </div>
        <div class="frow"><label class="flbl">Priority</label>
          <div class="lpick">
            <button class="lbtn" onclick="setTodoField(this,'todoPriority','High')">High</button>
            <button class="lbtn sel" onclick="setTodoField(this,'todoPriority','Normal')">Normal</button>
            <button class="lbtn" onclick="setTodoField(this,'todoPriority','Low')">Low</button>
          </div>
          <input type="hidden" id="todoPriority" value="Normal">
        </div>
        <div class="frow"><label class="flbl">Due Date (optional)</label><input class="fi" type="date" id="todoDueDate"></div>
        <button class="btn bp bf" onclick="saveTodo()" style="margin-top:12px">Add To-Do</button>
      </div>
    `,document.body.appendChild(n),t=d("todoAddBackdrop"),e=d("todoAddSheet")}d("todoTitle").value="",d("todoNote").value="",d("todoAssignee").value="Bora",d("todoPriority").value="Normal",d("todoDueDate").value="",e.querySelectorAll(".lpick").forEach(n=>{n.querySelectorAll(".lbtn").forEach((i,s)=>{var o;((o=n.querySelector("input[type=hidden]"))==null?void 0:o.id)==="todoAssignee"?i.classList.toggle("sel",s===0):i.classList.toggle("sel",s===1)})}),t.classList.add("active"),e.classList.add("active"),setTimeout(()=>{var n;return(n=d("todoTitle"))==null?void 0:n.focus()},300)}function Zw(){var t,e;(t=d("todoAddBackdrop"))==null||t.classList.remove("active"),(e=d("todoAddSheet"))==null||e.classList.remove("active")}function PM(t,e,n){d(e).value=n,t.closest(".lpick").querySelectorAll(".lbtn").forEach(i=>i.classList.remove("sel")),t.classList.add("sel")}async function DM(){var i,s,o,r,a,l,h;const t=(s=(i=d("todoTitle"))==null?void 0:i.value)==null?void 0:s.trim();if(!t){b("Please enter a title");return}const e={title:t,note:((r=(o=d("todoNote"))==null?void 0:o.value)==null?void 0:r.trim())||"",assignee:((a=d("todoAssignee"))==null?void 0:a.value)||"Both",priority:((l=d("todoPriority"))==null?void 0:l.value)||"Normal",dueDate:((h=d("todoDueDate"))==null?void 0:h.value)||null,done:!1,doneAt:null,createdAt:new Date().toISOString()},n="todo_"+Date.now()+"_"+Math.random().toString(36).slice(2,8);e.id=n,Zw(),H("syncing");try{await M(`households/${u.hid}/home_todos/${n}`,e),u.homeTodos.push(e),Fs(),un(),H("synced"),b("To-do added")}catch(f){console.error("[saveTodo]",f),H("error")}}async function LM(t){const e=u.homeTodos.find(s=>s.id===t);if(!e||e.done)return;e.done=!0,e.doneAt=new Date().toISOString();const n=e.priority==="High"?10:e.priority==="Low"?2:5,i=e.assignee==="Bushra"?"Bushra":"Bora";H("syncing");try{await M(`households/${u.hid}/home_todos/${t}`,{...e,id:void 0}),await Sh(i,n),Fs(),un(),Bs(),H("synced"),b(`+${n} pts for ${i}!`)}catch(s){console.error("[markTodoDone]",s),H("error")}}async function NM(t){const e=u.homeTodos.find(n=>n.id===t);if(!(!e||!e.done)){e.done=!1,e.doneAt=null,H("syncing");try{await M(`households/${u.hid}/home_todos/${t}`,{...e,id:void 0}),Fs(),un(),H("synced")}catch(n){console.error("[uncheckTodo]",n),H("error")}}}async function MM(t){if(confirm("Delete this to-do?")){H("syncing");try{await he(`households/${u.hid}/home_todos/${t}`),u.homeTodos=u.homeTodos.filter(e=>e.id!==t),Fs(),un(),H("synced"),b("To-do deleted")}catch(e){console.error("[deleteTodo]",e),H("error")}}}function OM(t){}let Sa="schedule";function Us(){const t=d("screen-h-cleaning");if(!t)return;const e=new Date().toISOString().split("T")[0],n=[...u.homeChores||[]],i=Sa==="schedule"?"sel":"",s=Sa==="room"?"sel":"";let o="";if(Sa==="schedule")n.sort((r,a)=>(r.nextDue||"9999").localeCompare(a.nextDue||"9999")),o=n.map(r=>Tm(r,e)).join("");else{const r={};n.forEach(a=>{const l=a.room||"General";r[l]||(r[l]=[]),r[l].push(a)}),o=Object.keys(r).sort().map(a=>`
      <div class="ho-section-label">${a}</div>
      ${r[a].map(l=>Tm(l,e)).join("")}
    `).join("")}t.innerHTML=`
    <div class="ho-header">
      <div>
        <div class="ho-tab-title">Cleaning Schedule</div>
        <div class="ko-date">${n.length} chores</div>
      </div>
      <div class="lpick" style="gap:4px">
        <button class="lbtn bsm ${i}" onclick="setCleaningView('schedule')">Schedule</button>
        <button class="lbtn bsm ${s}" onclick="setCleaningView('room')">By Room</button>
      </div>
    </div>
    <div class="ho-body">
      ${o}
      ${n.length?"":'<div class="ho-empty-state"><div style="font-size:2.5rem;margin-bottom:12px">&#128167;</div><div>No chores yet. Add one with the + button.</div></div>'}
    </div>
  `}function Tm(t,e){const n=t.nextDue&&t.nextDue<e,i=t.nextDue===e;return`
    <div class="ho-chore-item ${n?"ho-chore-overdue":i?"ho-chore-today":""}">
      <button class="ho-task-check" onclick="markChoreDone('${t.id}')">&#10003;</button>
      <div class="ho-task-info" style="flex:1">
        <div class="ho-task-name">${t.name}</div>
        <div class="ho-task-meta">
          <span class="ho-assignee-badge ${t.assignee==="Bushra"?"ho-badge-bushra":t.assignee==="Bora"?"ho-badge-bora":""}">${t.assignee}</span>
          <span class="ho-freq-tag">${t.frequency}</span>
          ${t.room?`<span>${t.room}</span>`:""}
        </div>
        <div class="ho-chore-due">${n?"Overdue":i?"Due today":t.nextDue?"Due "+Cs(t.nextDue):"No due date"}</div>
      </div>
      <button class="ho-todo-del" onclick="deleteChore('${t.id}')">&#128465;</button>
    </div>
  `}function VM(t){Sa=t,Us()}async function FM(t){const e=u.homeChores.find(a=>a.id===t);if(!e)return;const i=new Date().toISOString().split("T")[0];e.lastDone=i,e.nextDue=Xw(i,e.frequency);const s=Oc(),o=e.assignee==="Rotating"?s:e.assignee,r=8;H("syncing");try{const a={...e};delete a.id,await M(`households/${u.hid}/home_chores/${t}`,a),await Sh(o==="Bushra"?"Bushra":"Bora",r),Us(),un(),Bs(),H("synced"),b(`+${r} pts! Next due ${e.nextDue?Cs(e.nextDue):"N/A"}`)}catch(a){console.error("[markChoreDone]",a),H("error")}}function UM(){let t=d("choreAddBackdrop");if(d("choreAddSheet"),!t){const e=document.createElement("div");e.innerHTML=`
      <div class="bsheet-backdrop" id="choreAddBackdrop" onclick="closeChoreAddSheet()"></div>
      <div class="bsheet" id="choreAddSheet">
        <div class="bsheet-handle"></div>
        <div class="bsheet-title">New Chore</div>
        <div class="frow"><label class="flbl">Name</label><input class="fi" id="choreName" placeholder="e.g. Vacuum upstairs"></div>
        <div class="frow"><label class="flbl">Room / Area</label><input class="fi" id="choreRoom" placeholder="e.g. Kitchen, Bedroom"></div>
        <div class="frow"><label class="flbl">Frequency</label>
          <select class="fsel" id="choreFreq">
            <option value="daily">Daily</option>
            <option value="weekly" selected>Weekly</option>
            <option value="biweekly">Biweekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div class="frow"><label class="flbl">Assignee</label>
          <div class="lpick">
            <button class="lbtn sel" onclick="setTodoField(this,'choreAssignee','Bora')">Bora</button>
            <button class="lbtn" onclick="setTodoField(this,'choreAssignee','Bushra')">Bushra</button>
            <button class="lbtn" onclick="setTodoField(this,'choreAssignee','Rotating')">Rotating</button>
          </div>
          <input type="hidden" id="choreAssignee" value="Bora">
        </div>
        <button class="btn bp bf" onclick="saveChore()" style="margin-top:12px">Add Chore</button>
      </div>
    `,document.body.appendChild(e)}d("choreName").value="",d("choreRoom").value="",d("choreFreq").value="weekly",d("choreAssignee").value="Bora",d("choreAddBackdrop").classList.add("active"),d("choreAddSheet").classList.add("active"),setTimeout(()=>{var e;return(e=d("choreName"))==null?void 0:e.focus()},300)}function eb(){var t,e;(t=d("choreAddBackdrop"))==null||t.classList.remove("active"),(e=d("choreAddSheet"))==null||e.classList.remove("active")}async function BM(){var s,o,r,a,l,h;const t=(o=(s=d("choreName"))==null?void 0:s.value)==null?void 0:o.trim();if(!t){b("Please enter a chore name");return}const e=((r=d("choreFreq"))==null?void 0:r.value)||"weekly",n={name:t,room:((l=(a=d("choreRoom"))==null?void 0:a.value)==null?void 0:l.trim())||"",frequency:e,assignee:((h=d("choreAssignee"))==null?void 0:h.value)||"Rotating",nextDue:Ae(e),lastDone:null,createdAt:new Date().toISOString()},i="chore_"+Date.now()+"_"+Math.random().toString(36).slice(2,8);n.id=i,eb(),H("syncing");try{await M(`households/${u.hid}/home_chores/${i}`,{...n,id:void 0}),u.homeChores.push(n),Us(),H("synced"),b("Chore added")}catch(f){console.error("[saveChore]",f),H("error")}}async function jM(t){if(confirm("Delete this chore?")){H("syncing");try{await he(`households/${u.hid}/home_chores/${t}`),u.homeChores=u.homeChores.filter(e=>e.id!==t),Us(),un(),H("synced"),b("Chore deleted")}catch(e){console.error("[deleteChore]",e),H("error")}}}function kr(){const t=d("screen-h-maintain");if(!t)return;const e=new Date().toISOString().split("T")[0],n=[...u.homeMaint||[]];n.sort((o,r)=>(o.nextDue||"9999").localeCompare(r.nextDue||"9999"));const i=n.filter(o=>o.nextDue&&o.nextDue<e),s=n.filter(o=>!o.nextDue||o.nextDue>=e);t.innerHTML=`
    <div class="ho-header">
      <div>
        <div class="ho-tab-title">Home Maintenance</div>
        <div class="ko-date">22 Andrew Street &middot; ${n.length} tasks</div>
      </div>
    </div>
    <div class="ho-body">
      ${i.length?`
        <div class="ho-section-label ho-overdue">Overdue (${i.length})</div>
        ${i.map(o=>Cm(o,!0)).join("")}
      `:""}
      ${s.length?`
        <div class="ho-section-label">Upcoming</div>
        ${s.map(o=>Cm(o,!1)).join("")}
      `:""}
      ${n.length?"":'<div class="ho-empty-state"><div style="font-size:2.5rem;margin-bottom:12px">&#128736;</div><div>No maintenance tasks. Add one with the + button.</div></div>'}
    </div>
  `}function Cm(t,e){const i={HVAC:"&#9928;",Plumbing:"&#128167;",Electrical:"&#9889;",Exterior:"&#127968;",Appliance:"&#127859;",General:"&#128295;"}[t.category]||"&#128295;";return`
    <div class="ho-maint-item ${e?"ho-chore-overdue":""}">
      <button class="ho-task-check" onclick="markMaintDone('${t.id}')">&#10003;</button>
      <div class="ho-task-info" style="flex:1">
        <div class="ho-task-name">${i} ${t.name}</div>
        <div class="ho-task-meta">
          <span class="ho-freq-tag">${t.category}</span>
          <span class="ho-freq-tag">${t.frequency}</span>
          ${t.estimatedCost?`<span class="price-tag">$${t.estimatedCost}</span>`:""}
        </div>
        <div class="ho-chore-due">${e?"Overdue":t.nextDue?"Due "+Cs(t.nextDue):"One-time"}</div>
        ${t.notes?`<div class="ho-todo-note">${t.notes}</div>`:""}
        ${t.lastDone?`<div class="ho-maint-last">Last done: ${Cs(t.lastDone)}</div>`:""}
      </div>
      <button class="ho-todo-del" onclick="deleteMaint('${t.id}')">&#128465;</button>
    </div>
  `}async function HM(t){const e=u.homeMaint.find(o=>o.id===t);if(!e)return;const n=new Date().toISOString().split("T")[0];e.lastDone=n,e.nextDue=Xw(n,e.frequency);const i=Oc(),s=15;H("syncing");try{const o={...e};delete o.id,await M(`households/${u.hid}/home_maintenance/${t}`,o),await Sh(i==="Bushra"?"Bushra":"Bora",s),kr(),un(),Bs(),H("synced"),b(`+${s} pts! Maintenance done.`)}catch(o){console.error("[markMaintDone]",o),H("error")}}function zM(){let t=d("maintAddBackdrop");if(d("maintAddSheet"),!t){const e=document.createElement("div");e.innerHTML=`
      <div class="bsheet-backdrop" id="maintAddBackdrop" onclick="closeMaintAddSheet()"></div>
      <div class="bsheet" id="maintAddSheet">
        <div class="bsheet-handle"></div>
        <div class="bsheet-title">New Maintenance Task</div>
        <div class="frow"><label class="flbl">Name</label><input class="fi" id="maintName" placeholder="e.g. Replace HVAC filter"></div>
        <div class="frow"><label class="flbl">Category</label>
          <select class="fsel" id="maintCat">
            <option value="HVAC">HVAC</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Exterior">Exterior</option>
            <option value="Appliance">Appliance</option>
            <option value="General" selected>General</option>
          </select>
        </div>
        <div class="frow"><label class="flbl">Frequency</label>
          <select class="fsel" id="maintFreq">
            <option value="monthly">Monthly</option>
            <option value="quarterly" selected>Quarterly</option>
            <option value="biannual">Biannual</option>
            <option value="annual">Annual</option>
            <option value="one-time">One-time</option>
          </select>
        </div>
        <div class="frow"><label class="flbl">Notes (optional)</label><textarea class="fta" id="maintNotes" rows="2" placeholder="Any details or reminders..."></textarea></div>
        <div class="frow"><label class="flbl">Estimated Cost (optional)</label><input class="fi" id="maintCost" type="number" placeholder="$"></div>
        <button class="btn bp bf" onclick="saveMaint()" style="margin-top:12px">Add Task</button>
      </div>
    `,document.body.appendChild(e)}d("maintName").value="",d("maintCat").value="General",d("maintFreq").value="quarterly",d("maintNotes").value="",d("maintCost").value="",d("maintAddBackdrop").classList.add("active"),d("maintAddSheet").classList.add("active"),setTimeout(()=>{var e;return(e=d("maintName"))==null?void 0:e.focus()},300)}function tb(){var t,e;(t=d("maintAddBackdrop"))==null||t.classList.remove("active"),(e=d("maintAddSheet"))==null||e.classList.remove("active")}async function qM(){var s,o,r,a,l,h,f;const t=(o=(s=d("maintName"))==null?void 0:s.value)==null?void 0:o.trim();if(!t){b("Please enter a task name");return}const e=((r=d("maintFreq"))==null?void 0:r.value)||"quarterly",n={name:t,category:((a=d("maintCat"))==null?void 0:a.value)||"General",frequency:e,notes:((h=(l=d("maintNotes"))==null?void 0:l.value)==null?void 0:h.trim())||"",estimatedCost:(f=d("maintCost"))!=null&&f.value?parseFloat(d("maintCost").value):null,nextDue:Ae(e),lastDone:null,createdAt:new Date().toISOString()},i="maint_"+Date.now()+"_"+Math.random().toString(36).slice(2,8);n.id=i,tb(),H("syncing");try{await M(`households/${u.hid}/home_maintenance/${i}`,{...n,id:void 0}),u.homeMaint.push(n),kr(),H("synced"),b("Task added")}catch(g){console.error("[saveMaint]",g),H("error")}}async function WM(t){if(confirm("Delete this maintenance task?")){H("syncing");try{await he(`households/${u.hid}/home_maintenance/${t}`),u.homeMaint=u.homeMaint.filter(e=>e.id!==t),kr(),H("synced"),b("Task deleted")}catch(e){console.error("[deleteMaint]",e),H("error")}}}const Ao=["Cook dinner for a week","Breakfast in bed","Car wash duty","No phone at dinner for 3 days","Compliment the winner every day for a week","Do the grocery run solo","Handle all bedtime routines for a week","Winner picks the next 3 movies"],Sm={shield:{icon:"&#128737;",name:"Shield",desc:"Block one chore from counting this week"},swap:{icon:"&#128260;",name:"Swap",desc:"Swap your weekly score with your partner's"},ghost:{icon:"&#128123;",name:"Ghost Week",desc:"Your opponent's points don't count this week"},double:{icon:"&#11014;",name:"Double Down",desc:"All your points count double this week"}};function Bs(){const t=d("screen-h-game");if(!t)return;const e=u.homeGame||Ch();e.boraWeekPts>e.bushraWeekPts,e.bushraWeekPts>e.boraWeekPts;const n=e.seasonStart?Math.floor((Date.now()-new Date(e.seasonStart).getTime())/864e5):0,i=Math.max(0,30-n),s=new Date(e.weekStart),o=new Date(s);o.setDate(o.getDate()+7);const a=Date.now()>=o.getTime()&&e.boraWeekPts!==e.bushraWeekPts,l=e.boraWeekPts<e.bushraWeekPts?"Bora":"Bushra",h=(e.weeklyHistory||[]).slice(0,4);t.innerHTML=`
    <div class="ho-header">
      <div>
        <div class="ho-tab-title">The Game</div>
        <div class="ko-date">Household Gamification</div>
      </div>
    </div>
    <div class="ho-body">
      <!-- Leaderboard -->
      <div class="ho-card ho-leaderboard">
        <div class="ho-card-title">Leaderboard</div>
        <div class="ho-game-scores">
          <div class="ho-game-player">
            <div class="ho-lb-avatar ho-avatar-bora" style="width:48px;height:48px;font-size:1.2rem">B</div>
            <div class="ho-game-name">Bora</div>
            <div class="ho-game-week-pts">${e.boraWeekPts||0} <small>this week</small></div>
            <div class="ho-game-all-pts">${e.boraAllTimePts||0} <small>all-time</small></div>
            ${e.boraStreak>1?`<div class="ho-streak">&#128293; ${e.boraStreak} week streak</div>`:""}
          </div>
          <div class="ho-game-vs">VS</div>
          <div class="ho-game-player">
            <div class="ho-lb-avatar ho-avatar-bushra" style="width:48px;height:48px;font-size:1.2rem">B</div>
            <div class="ho-game-name">Bushra</div>
            <div class="ho-game-week-pts">${e.bushraWeekPts||0} <small>this week</small></div>
            <div class="ho-game-all-pts">${e.bushraAllTimePts||0} <small>all-time</small></div>
            ${e.bushraStreak>1?`<div class="ho-streak">&#128293; ${e.bushraStreak} week streak</div>`:""}
          </div>
        </div>
      </div>

      <!-- Season Progress -->
      <div class="ho-card">
        <div class="ho-card-title">Season Progress</div>
        <div class="ho-season-info">
          <div class="ho-season-row"><span>Days remaining</span><strong>${i}</strong></div>
          <div class="ho-season-bar"><div class="ho-season-fill" style="width:${Math.min(100,n/30*100)}%"></div></div>
          <div class="ho-season-row"><span>Bora season pts</span><strong>${e.boraSeasonPts||0}</strong></div>
          <div class="ho-season-row"><span>Bushra season pts</span><strong>${e.bushraSeasonPts||0}</strong></div>
        </div>
      </div>

      <!-- Consequence Wheel -->
      <div class="ho-card">
        <div class="ho-card-title">Consequence Wheel</div>
        ${a?`
          <div class="ho-wheel-container" id="wheelContainer">
            <div class="ho-wheel" id="spinWheel">
              ${Ao.map((f,g)=>`<div class="ho-wheel-seg" style="--seg-i:${g};--seg-total:${Ao.length}">${f}</div>`).join("")}
            </div>
            <div class="ho-wheel-pointer">&#9660;</div>
          </div>
          <button class="btn bp bf" onclick="spinWheel()" id="spinBtn" style="margin-top:12px">Spin the Wheel for ${l}!</button>
        `:e.lastConsequence?`
          <div class="ho-consequence-result">
            <div class="ho-consequence-label">Last consequence:</div>
            <div class="ho-consequence-text">${e.lastConsequence}</div>
          </div>
        `:`
          <div class="ho-empty-msg">The wheel spins at the end of the week when there's a loser. Keep earning points!</div>
        `}
      </div>

      <!-- Power Cards -->
      <div class="ho-card">
        <div class="ho-card-title">Power Cards</div>
        <div class="ho-power-section">
          <div class="ho-power-label">Bora's Cards</div>
          <div class="ho-power-row">
            ${(e.boraPowerCards||[]).map(f=>{const g=Sm[f];return g?`<div class="ho-power-card ho-power-bora" title="${g.desc}"><div class="ho-power-icon">${g.icon}</div><div class="ho-power-name">${g.name}</div></div>`:""}).join("")}
          </div>
          <div class="ho-power-label" style="margin-top:12px">Bushra's Cards</div>
          <div class="ho-power-row">
            ${(e.bushraPowerCards||[]).map(f=>{const g=Sm[f];return g?`<div class="ho-power-card ho-power-bushra" title="${g.desc}"><div class="ho-power-icon">${g.icon}</div><div class="ho-power-name">${g.name}</div></div>`:""}).join("")}
          </div>
        </div>
      </div>

      <!-- Weekly History -->
      <div class="ho-card">
        <div class="ho-card-title">Weekly History</div>
        ${h.length?h.map(f=>`
          <div class="ho-history-row">
            <div class="ho-history-week">Week of ${Cs(f.weekStart)}</div>
            <div class="ho-history-scores">Bora ${f.boraPoints} — ${f.bushraPoints} Bushra</div>
            <div class="ho-history-winner">${f.winner==="Tie"?"Tied!":f.winner+" won!"}</div>
            ${f.consequence?`<div class="ho-history-consequence">${f.consequence}</div>`:""}
          </div>
        `).join(""):'<div class="ho-empty-msg">No weekly history yet. Complete your first week!</div>'}
      </div>
    </div>
  `}async function GM(){const t=d("spinBtn");t&&(t.disabled=!0);const e=d("spinWheel");if(!e)return;const n=Math.floor(Math.random()*Ao.length),i=Ao[n],s=360/Ao.length,o=360*5+(360-n*s-s/2);e.style.transition="transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)",e.style.transform=`rotate(${o}deg)`,setTimeout(async()=>{u.homeGame.lastConsequence=i,await Ko(),b(`Result: ${i}`),Bs()},4200)}window.renderKitchenOverview=Qw;window.renderHomeOverview=un;window.renderHomeTodos=Fs;window.renderHomeCleaning=Us;window.renderHomeMaintain=kr;window.renderHomeGame=Bs;window.openTodoAddSheet=$M;window.closeTodoAddSheet=Zw;window.setTodoField=PM;window.saveTodo=DM;window.markTodoDone=LM;window.uncheckTodo=NM;window.deleteTodo=MM;window.openTodoDetail=OM;window.setCleaningView=VM;window.markChoreDone=FM;window.openChoreAddSheet=UM;window.closeChoreAddSheet=eb;window.saveChore=BM;window.deleteChore=jM;window.markMaintDone=HM;window.openMaintAddSheet=zM;window.closeMaintAddSheet=tb;window.saveMaint=qM;window.deleteMaint=WM;window.spinWheel=GM;window.manualRefresh=async function(t){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),H("syncing");try{(t==="shop"||t==="both")&&(u.shop=await se(`households/${u.hid}/shopping`),Ls()),(t==="inv"||t==="both")&&(u.inv=await se(`households/${u.hid}/inventory`),Ni(),Vo()),H("synced"),b("Refreshed ✓")}catch(n){console.error("manualRefresh error:",n),H("error"),b("Refresh failed")}};window.refreshHomeData=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),H("syncing");try{const[e,n,i,s]=await Promise.allSettled([se(`households/${u.hid}/inventory`),se(`households/${u.hid}/shopping`),se(`households/${u.hid}/mealplan`),se(`households/${u.hid}/settings`)]);e.status==="fulfilled"&&(u.inv=e.value),n.status==="fulfilled"&&(u.shop=n.value),i.status==="fulfilled"&&(u.mp={},i.value.forEach(o=>{o.meal&&(u.mp[o.id]=o.meal)})),$v(),Ni(),H("synced"),b("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),H("error"),b("Refresh failed")}};window.refreshRecipes=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),H("syncing");try{u.rt==="community"?(u.comRecs=await se("public_recipes"),u.comPage=0,ft()):(u.recs=await se(`households/${u.hid}/recipes`),ut()),H("synced"),b("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),H("error"),b("Refresh failed")}};window.onboardNext=fM;window.finishOnboarding=Ww;window.skipOnboarding=mM;window.saveUsername=async function(){var r;const t=d("usernameInput"),e=d("usernameStatus"),n=d("saveUsernameBtn"),i=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(n&&(n.disabled=!0,n.textContent="Checking…"),!await Hg(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),n&&(n.disabled=!1,n.textContent="Save");return}const o=Q();o&&(await zg(o.uid,i),b("Username set to @"+i)),(r=d("usernameM"))==null||r.classList.remove("active"),n&&(n.disabled=!1,n.textContent="Save")};window.changeUsername=async function(){const t=d("setUsername"),e=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){b("3-20 chars, letters/numbers/underscores only");return}if(e===u.username){b("Username unchanged");return}if(!await Hg(e)){b(`"${e}" is already taken`);return}const i=Q();i&&(await zg(i.uid,e),b("Username changed to @"+e))};window._appStart=async function(t){u.hid=t;const e=Q();if(e)try{const i=await W(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){b("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(u.hid&&!await W(`households/${u.hid}`)){console.warn(`[_appStart] Household ${u.hid} no longer exists`),await M(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await Ug(u.hid,e.uid)){IN();return}console.log("[_appStart] Hiding login screen, showing app container"),d("LS").style.display="none",d("APP").style.display="flex",console.log("[_appStart] Calling showScreen('k-overview'), current active screen:",Go()),window.showScreen("k-overview"),console.log("[_appStart] After showScreen('k-overview'), active screen:",Go()),H("syncing");const n=Q();if(n)try{const i=await W(`users/${n.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const o=[...s];o.includes(t)||o.push(t),tt("ks-hhs",o)}else{const o=fe("ks-hhs")||[t];o.includes(t)||(o.push(t),tt("ks-hhs",o))}}catch{const i=fe("ks-hhs")||[t];i.includes(t)||(i.push(t),tt("ks-hhs",i))}else{const i=fe("ks-hhs")||[t];i.includes(t)||(i.push(t),tt("ks-hhs",i))}await gC(),lN(),ju(),gx(),ux(),Ix(),JA(),D$(),zE(u.hid);try{H("syncing");const i=await Promise.allSettled([se(`households/${u.hid}/inventory`),se(`households/${u.hid}/recipes`),se(`households/${u.hid}/shopping`)]),s=(o,r)=>o.status==="fulfilled"?o.value:r;if(u.inv=s(i[0],u.inv),u.recs=s(i[1],u.recs),u.shop=s(i[2],u.shop),H("synced"),u.homeDataReady=!0,!localStorage.getItem("ks-emoji-migration-v1")){const o=u.inv.filter(r=>r.customEmoji);if(o.length){console.log(`[emoji-migration-v1] Clearing customEmoji from ${o.length} items`);for(const r of o)delete r.customEmoji,ee(r)}localStorage.setItem("ks-emoji-migration-v1","1")}Vo(),ut(),Ls()}catch(i){console.error("initial load error",i),H("error"),u.homeDataReady=!0,Vo()}if(hh(),n){const i=await TC(n.uid);u.username=i;const s=d("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var o;return(o=d("usernameM"))==null?void 0:o.classList.add("active")},600)}setTimeout(Sw,800),setTimeout(hM,500)};PN();$L();u.cfg.notif&&setTimeout(Vw,3e3);Ls();function Vc(t){d("auth-loading").style.display="none",d("auth-signin").style.display=t==="signin"?"flex":"none",d("auth-signup").style.display=t==="signup"?"flex":"none",d("auth-join").style.display=t==="join"?"flex":"none",d("authError").style.display="none",d("signupError").style.display="none"}function yt(t,e){const n=d(t);n&&(n.textContent=e,n.style.display="block")}function Fc(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function at(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var Im;(Im=d("btnGoogle"))==null||Im.addEventListener("click",async()=>{const t=d("btnGoogle");at(t,!0),d("authError").style.display="none";try{await nC()}catch(e){yt("authError",Fc(e))}at(t,!1)});var Em;(Em=d("btnApple"))==null||Em.addEventListener("click",async()=>{const t=d("btnApple");at(t,!0),d("authError").style.display="none";try{await iC()}catch(e){yt("authError",Fc(e))}at(t,!1)});var Am;(Am=d("btnEmailSign"))==null||Am.addEventListener("click",async()=>{var i,s,o;const t=(s=(i=d("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(o=d("authPass"))==null?void 0:o.value;if(!t||!e){yt("authError","Please enter your email and password.");return}const n=d("btnEmailSign");at(n,!0),d("authError").style.display="none";try{await sC(t,e)}catch(r){yt("authError",Fc(r))}at(n,!1)});var xm;(xm=d("btnEmailSignup"))==null||xm.addEventListener("click",async()=>{var s,o,r,a,l;const t=(o=(s=d("signupName"))==null?void 0:s.value)==null?void 0:o.trim(),e=(a=(r=d("signupEmail"))==null?void 0:r.value)==null?void 0:a.trim(),n=(l=d("signupPass"))==null?void 0:l.value;if(!t){yt("signupError","Please enter your name.");return}if(!e||!n){yt("signupError","Please enter your email and password.");return}const i=d("btnEmailSignup");at(i,!0),d("signupError").style.display="none";try{await oC(e,n,t)}catch(h){yt("signupError",Fc(h))}at(i,!1)});var Rm;(Rm=d("btnToggleSignup"))==null||Rm.addEventListener("click",()=>Vc("signup"));var $m;($m=d("btnToggleSignin"))==null||$m.addEventListener("click",()=>Vc("signin"));var Pm;(Pm=d("authPass"))==null||Pm.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=d("btnEmailSign"))==null||e.click())});var Dm;(Dm=d("signupPass"))==null||Dm.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=d("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await rC()};(function(){const e=document.createElement("div");e.className="scroll-top-tap",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);const n={home:".hbody",inventory:".ibody",recipes:".rbody",shopping:"#sh-list-body",chat:".chmsgs","k-pantry":".ibody","k-supplies":".ibody","k-shopping":"#sh-list-body","k-deals":"#sh-deals-body","k-overview":".ko-body","h-overview":".ho-body","h-todos":".ho-body","h-cleaning":".ho-body","h-maintain":".ho-body","h-game":".ho-body"};e.addEventListener("click",()=>{if(document.querySelector(".ov.active, .modal[style*='flex'], .bsheet.open"))return;const i=Go();if(!i)return;const s=Pd(i);if(!s)return;const o=n[i];(o&&s.querySelector(o)||s).scrollTo({top:0,behavior:"smooth"})})})();let Ml=!1;function Ia(t){var n;localStorage.setItem("ks-h",t),d("LS").style.display="none",d("APP").style.display="flex";const e=((n=document.getElementById("world-switcher"))==null?void 0:n.offsetHeight)||64;document.documentElement.style.setProperty("--wsh",e+"px"),window._appStart(t)}function Ol(t){Vc("join"),d("btnCreateKitchen").onclick=async()=>{var e;at(d("btnCreateKitchen"),!0);try{const n=await W(`users/${t.uid}`),i=n!=null&&n.householdId?[n.householdId]:(n==null?void 0:n.householdIds)||[];if(i.length)for(const r of i){const a=await W(`households/${r}`);if(a&&(a.memberUids||[]).includes(t.uid)){console.log(`[_showJoinScreen] User already belongs to household ${r}, using that`),Ia(r);return}}const s=((e=u.cfg)==null?void 0:e.name)||"My Kitchen";if(await Mg(t.uid,s),n)await M(`users/${t.uid}`,{...n,householdIds:[t.uid],needsHousehold:!1,id:void 0});else{const r=await Kl(t);r.householdIds=[t.uid],r.needsHousehold=!1,await M(`users/${t.uid}`,r)}localStorage.removeItem("ks-h");const o=fe("ks-hhs");if(o){const r=o.filter(a=>a!==t.uid);r.push(t.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Ia(t.uid)}catch(n){console.error("Create kitchen error:",n),yt("joinError","Something went wrong. Please try again."),at(d("btnCreateKitchen"),!1)}},d("btnJoinKitchen").onclick=async()=>{var n,i,s;const e=(s=(i=(n=d("joinCode"))==null?void 0:n.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){yt("joinError","Please enter an invite code.");return}at(d("btnJoinKitchen"),!0),d("joinError").style.display="none";try{let o=await W(`users/${t.uid}`);o||(o=await Kl(t));const r=await Og(e,t);if(!r){yt("joinError","Invalid invite code. Check and try again."),at(d("btnJoinKitchen"),!1);return}const a=fe("ks-hhs")||[];a.includes(r)||a.push(r),tt("ks-hhs",a),Ia(r)}catch(o){console.error("Join kitchen error:",o),yt("joinError","Something went wrong. Please try again."),at(d("btnJoinKitchen"),!1)}}}eC(async t=>{var e;if(t){if(localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),!Ml){Ml=!0;try{const n=await W(`users/${t.uid}`),i=localStorage.getItem("ks-h"),s=fe("ks-hhs");if(!!n||!!i||s&&s.length>0){const r=await pC(t);r?(d("LS").style.display="none",d("APP").style.display="flex",Ia(r)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),Ol(t))}else Ol(t)}catch(n){console.error("Failed to resolve household:",n),console.warn("[onAuth] Error during household resolution — showing join screen"),Ol(t)}}}else Zy(),yC(),Ml=!1,d("APP").style.display="none",d("LS").style.display="flex",Vc("signin")});
