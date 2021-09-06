var nameeff1 = [
    "Golden",
    "Silver",
    "Copper",
    "Bronze",
    "Red",
    "Blue",
    "Black",
    "Yellow",
    "Gray",
    "White",
    "Green",
    "Brown",
    "Dark",
    "Light",
    "Iron",
    "Steel",
    "Star",
    "Long",
    "Short",
    "Sharp",
    "Dull",
    "Sky",
    "Under",
    "Front",
    "Back",
    "First",
    "Last",
    "Middle",
    "Big",
    "Small",
    "Huge",
    "Calm",
    "Storm",
    "Frozen",
    "Barren",
    "Wet",
    "Dry",
    "Bloody",
    "Kind",
    "Evil",
    "Good",
]
var nameeff2 = [
    "Jaw",
    "Eye",
    "Talon",
    "Grip",
    "Arm",
    "Finger",
    "Leg",
    "Ear",
    "Belly",
    "Claw",
    "Fang",
    "Tail",
    "Scar",
    "Hair",
    "Breath",
    "Wing",
]
function reverse(s){
    return s.split("").reverse().join("");
}
function create_clan_names (){
  var string_names = "";

  var randomnes = chance.integer({ min: 1, max: 4 })
  var names1 = chance.pickone(nameeff1);
  var names2 = chance.pickone(nameeff2);
  var last = "";
  if(randomnes == 1){
    last = chance.last();
  }else if(randomnes == 2){
    last = chance.word();
  }else if(randomnes == 3){
    last = chance.first();
  }else if(randomnes == 4){
    last = chance.syllable();
  }
  
  
    // last = reverse(last);
  string_names += last.toUpperCase()+" "+String(chance.character({ alpha: true })).toUpperCase()+". "+ String(names1+""+names2).toUpperCase();
  return string_names;

}