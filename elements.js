var oddElement =[
	"Time",
	"Space",
	"Life",
	"Void",
	"Death",
	"Fate",
	"Destiny",
	"Day",
	"Night",
	"Dawn",
	"Twilight",
	"Sky",
	"Ocean",
	"River",
	"Moutains",
	"Storm",
	"Hunt",
	"Knowledge",
	"Creation",
	"Art",
	"Desire",
	"Civilization",
	"Underground",
	"Horizon",
	"Music",
	"Rebirth",
	"Future",
	"Present",
	"Past",
	"Food",
	"Tower",
	"Animal",
	"Seeing",
	"Forest",
	"City",
	"Harvest",
	"Rain",
	"Love",
	"Armor",
	"Stars",
	"King",
]
var primodialElement =[
	"Fire",
	"Water",
	"Earth",
	"Wind"
]
var basicElement=[
	"Fire",
	"Water",
	"Earth",
	"Wind",
	"Lightning",
	"Light",
	"Darkness",
	"Life"
]

var createGod=function(status){
	var god_string = "";

	if(status == "odd"){
		var first = chance.pickone(oddElement);
		var second = chance.pickone(oddElement);
		
		if(first != second){
			var randomnes = chance.integer({ min: 1, max: 2 })
			if(randomnes == 1){
				god_string += "GOD of "+first +" and "+second+"";
			}else{
				god_string += "GOD of "+second +" and "+first+""
			}
		}else{
			god_string += "GOD of "+first +"";
		}
		return god_string;
		// $('#god').text();

	}
	if(status == "primodial"){
		var first = chance.pickone(primodialElement);
		var second = chance.pickone(oddElement);
		
		if(first != second){
			var randomnes = chance.integer({ min: 1, max: 2 })
			if(randomnes == 1){
				god_string += "GOD of "+first +" and "+second+"";
			}else{
				god_string += "GOD of "+second +" and "+first+"";
			}
		}else{
			god_string += "GOD of "+first +"";
		}
		return god_string;
		// $('#god').text(god_string);
	}		
	if(status == "basic"){
		return god_string;
		
	}
}
