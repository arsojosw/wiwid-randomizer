var ingredient = [
	"meat",
	"vegies",
	"both",
]

var meat =[
	"Suspicious Meat",
	"Soft Meat",
	"Hard Meat",
	"Thin Meat",
	"Thick Meat",
	"Juicy Meat",
	"Fatty Meat",
	"Chicken",
	"Chicken Fillet",
	"Beef Ribs",
	"Beef",
	"Beef Fillet",
	"Beef Leg",
	"Lamb Meat",
	"Lamb Ribs",
	"Lamb Leg",
	"Fish",
	"Fish Head",
	"Fish Fillet",
	"Crab Meat",
	"Meatballs",
	"Shrimp Meatballs",
	"Chicken Meatballs",
	"Beef Meatballs",
	"Crab Meatballs",
	"Fish Meatballs",
	"Shrimp",
	"Snake Meat",
	"Snake Head",
	"Goat Meat",
	"Goat Ribs",
	"Goat Leg",
	"Red Meat",
	"White Meat",
	"Chicken Sausages",
	"Beef Sausages",
	"Fish Meat Sausages",
	"Carb Meat Sausages",
	"Shrimp Paste Sausages",
	"Sausages"

]
var vegies =[
	"Suspicious Vegies",
	"Vegies",
	"Beans",
	"Cabbages",
	"Carrot",
	"Potaoes",
	"Turnip",
	"Pumpkin",
	"Cauliflower",
	"Corn",
	"Radish",
	"Artichoke",
	"Beet",
	"Eggplant",
	"Yam",
	"Tomatoes",
	"Sweet Potatoes",
	"Onion",
	"Garlic",
	"Mushroom",
	"Wild Mushroom",
	"Wild Herb",
	"Herb",
	"Rice"
]

var foods_cook =[
	"Raw",
	"Broiled",
	"Grilled",
	"Half-Grilled",
	"Roasted",
	"Half-Roasted",
	"Baked",
	"Half-Baked",
	"Sauted",
	"Simmered",
	"Boiled",
	"Half-Boiled",
	"Steamed",
	"Marinated",
	"Stew",
	"Platter",
	"Fried",
	"Half-Fried",
	"Curry",
	"Soup",
	"Smoked",
	"Half-Smoked",
	"Overcook",
	"Minced",
]


var foods_style =[
	"Wilderness",
	"Urbanize",
	"Community",
	"Survial",
	"Common",
	"Rare",
	"Legendary",
	"Bold",
	"Dangerous",
	"Original",
	"NotSoBad",
	"Edible",
	"Royalty",
	"Handmade",
	"Royalty",
	"Magical",
	"BlackMarket",
	"Underground",
	"Granny",
	"Thin",
	"Thick",
	"Weak",
	"Strong",
	"Intoxicated",
	"Homemade"
]

var sauces =[
	"Honey",
	"Wine",
	"Red Wine",
	"White Wine",
	"Mushroom",
	"Spicy",
	"Aromatic",
	"Minty",
	"Sour",
	"Cinnamon",
	"Smoked",
	"Milky",
	"Savory",
	"Sweet",
	"Balsamic",
	"Homemade",
	"Herbs"
]

made_food = function(times){
	if(times == undefined){
		times = chance.integer({ min: 1, max: 3 });
	}
	var ing_sum = times;

	var ing = chance.pickone(ingredient);
	
	var foods = [];
	var food_string = "";
	var first_ing = "";
	var first_cook = "";
	var first_food = "";
	if(ing == "meat"){
		for (var i = ing_sum - 1; i >= 0; i--) {
			var i_meat = chance.pickone(meat);
			var cook_meat = chance.pickone(foods_cook);
			if(cook_meat == "Stew" || cook_meat == "Soup" || cook_meat == "Platter" || cook_meat == "Curry"){
				foods.push(i_meat+" "+cook_meat);
			}else{
				foods.push(cook_meat+" "+i_meat);
			}

			if(first_ing == ""){
				first_ing = i_meat;
			}
			if(first_cook == ""){
				first_cook = cook_meat;
			}
		}
	}else if(ing == "vegies"){
		for (var i = ing_sum - 1; i >= 0; i--) {
			var i_vegies = chance.pickone(vegies);
			var cook_vegies = chance.pickone(foods_cook);
			if(cook_vegies == "Stew"|| cook_vegies == "Soup"|| cook_vegies == "Platter" || cook_vegies == "Curry"){
				foods.push(i_vegies+" "+cook_vegies);
			}else{
				foods.push(cook_vegies+" "+i_vegies);
			}
			if(first_ing == ""){
				first_ing = i_vegies;
			}
			if(first_cook == ""){
				first_cook = cook_vegies;
			}

		}
	}else{
		
		ing_sum = 2;
	
		var randomnes = chance.integer({ min: 1, max: 2 })
		for (var i = (ing_sum/2) - 1; i >= 0; i--) {
			var i_meat = chance.pickone(meat);
			var cook_meat = chance.pickone(foods_cook);
			if(cook_meat == "Stew" || cook_meat == "Soup" || cook_meat == "Platter" || cook_meat == "Curry"){
				foods.push(i_meat+" "+cook_meat);
			}else{
				foods.push(cook_meat+" "+i_meat);
			}
			if(first_ing == ""){
				first_ing = i_meat;
			}
			if(first_cook == ""){
				first_cook = cook_meat;
			}
		}
		for (var i = (ing_sum/2) - 1; i >= 0; i--) {
			var i_vegies = chance.pickone(vegies);
			var cook_vegies = chance.pickone(foods_cook);
			if(cook_vegies == "Stew" || cook_vegies == "Soup" || cook_vegies == "Platter" || cook_vegies == "Curry"){
				foods.push(i_vegies+" "+cook_vegies);
			}else{
				foods.push(cook_vegies+" "+i_vegies);
			}
			if(first_ing == ""){
				first_ing = i_vegies;
			}
			if(first_cook == ""){
				first_cook = cook_vegies;
			}
		}
		
	}
	foods = chance.shuffle(foods);
	for (var i = foods.length - 1; i >= 0; i--) {
		if(i == 0){
			// i_foods_style = chance.pickone(foods_style);
			food_string+=foods[i];
			var randomnes = chance.integer({ min: 1, max: 5 })
			if(randomnes <= 2){
				randomnes = chance.integer({ min: 1, max: 2 })
				if(randomnes == 1){
					
					i_sauces = chance.pickone(colors);
					i_foods_style = chance.pickone(foods_style);
					food_string+=" complete with "+i_foods_style+" "+i_sauces+" sauces";

				}else{
					i_sauces = chance.pickone(sauces);
					i_foods_style = chance.pickone(foods_style);
					food_string+=" complete with "+i_foods_style+" "+i_sauces+" sauces";

				}
			}
		}else{
			food_string+=foods[i];
		}
		
		
		if(i>0){
			if(foods.length>2 && i==1){
				food_string+=" and "
			}else{
				food_string+=" mixed with "	
			}
			
		}
		if(first_food == ""){
			first_food = foods[i];
		}
	}
	randomnes = chance.integer({ min: 1, max: 3 })
	if(randomnes == 1){
		randomnes = chance.integer({ min: 1, max: 3 })
		if(randomnes == 1){
			food_name = chance.first() + "'s Speciality";
		}else if(randomnes == 2){
			food_name = chance.last() + "'s Speciality";
		}else{
			food_name = chance.name() + "'s Speciality";
		}
	}else if(randomnes == 2){
		randomnes = chance.integer({ min: 1, max: 3 })
		if(randomnes == 1){
			food_name = chance.first() + "'s "+ first_ing;
		}else if(randomnes == 2){
			food_name = chance.last() + "'s "+ first_cook;
		}else{
			food_name = chance.name() + "'s "+ first_food;
		}
	}else if(randomnes == 3){
		if(randomnes == 1){
			food_name = chance.first() + "'s Meals";
		}else if(randomnes == 2){
			food_name = chance.last() + "'s Lunch";
		}else{
			food_name = chance.name() + "'s Dinner";
		}
	}
	
	console.log(foods);
	console.log(food_string);
	$('#food-name').text(food_name);
	$('#food').text(food_string);
}