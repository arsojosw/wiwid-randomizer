var civs_types=[
    "Homestead",
    "Hamlet",
    "Village",
    "Town",
    "City",
    "Fort",
    "Port",
    "Keep",
    "Garrison"
];
var civs_produce = [
    "Ore",
    "Metal",
    "Steel",
    "Iron Ore",
    "Gold Ore",
    "Silver Ore",
    "Copper Ore",
    "Coal",
    "Oil",
    "Jewelry",
    "Log",
    "Plank",
    "Furniture",
    "Catle Meat",
    "Catle Hide",
    "Exotic Fur",
    "Exotic Meat",
    "Fish",
    "Exotic Fish",
    "Wine",
    "Ale",
    "Fruits",
    "Fruits Extract",
    "Exotic Fruits",
    "Mushroom",
    "Herbs",
    "Rare Herbs",
    "Textile",
    "Wool",
    "Tools",
    "Weapon & Armor",
    "Weapon",
    "Wooden Weapon",
    "Iron Weapon",
    "Armor",
    "Iron Armor",
    "Steel Armor"
];
var civs_district =[
    "North",
    "East",
    "South",
    "West",
];
var civs_district2 =[
    "NorthEast",
    "SouthEast",
    "NorthWest",
    "SouthWest",
];
var civs_rule =[
    "Guild",
    "Merchant",
    "Military",
    "Noblemen",
    "Mayor",
    "Magician",
    "Knight"
]
var civs_guild = [
    "Merchant",
    "Warior",
    "Adventure",
    "Thief",
    "Scavenger",
    "Mining",
    "Farmer",
    "Religion",
    "Trading",
    "Military",
    "Settelment",
    "Magician",
    "Kinght"
]

function create_civs_random(){
 var str_civs ="";
 var civs1 = chance.pickone(civs_types);

 // name
 var namecivs = "";
 var randomnes =chance.integer({ min: 1, max: 2 });
 if(randomnes == 1){
    namecivs = chance.word({ length: chance.integer({ min: 5, max: 8 }) })
 }else{
    namecivs = chance.word({ syllables: chance.integer({ min: 2, max: 3 }) })
 }
 str_civs += "<b>"+String(namecivs+" "+civs1+".</b></br> ").toUpperCase()+"";
 
 // resident
 var houses=0;
 if(civs1 == "Homestead" || civs1 == "Hamlet" || civs1 == "Village"  ){
    houses = chance.integer({ min: 7, max: 20 })
 }else if(civs1 == "Town" || civs1 == "City" || civs1 == "Fort" || civs1 == "Port" || civs1 == "Keep"){
    houses = chance.integer({ min: 50, max: 100 })
 }else{
    
 }
 str_civs += "<b>"+Number(houses * chance.integer({ min: 2, max: 4 }))+ " resident</b> lives there.</br> ";

 // produce
 var produce=[];
 if(civs1 == "Homestead" || civs1 == "Hamlet" || civs1 == "Village"  ){
    produce = chance.pickset(civs_produce, chance.integer({ min: 2, max: 3 }));
 }else if(civs1 == "Town" || civs1 == "City" || civs1 == "Fort" || civs1 == "Port" || civs1 == "Keep"){
    produce = chance.pickset(civs_produce, chance.integer({ min: 4, max: 6 }));
 }else{
    
 }
 str_civs += "They produce [ ";
 for (let index = 0; index < produce.length; index++) {
    str_civs += ""+produce[index];
     if(index < produce.length-1){
        str_civs += " | "
     }
 }
 str_civs += " ] ";
 str_civs += "and <b>the main commodity is "+chance.pickone(produce)+"</b>.</br> ";
 
 // town
 if(civs1 == "Town" || civs1 == "City" || civs1 == "Fort" || civs1 == "Port" || civs1 == "Keep"){
    // district
    var district = [];
    district = chance.pickset(civs_district, chance.integer({ min: 2, max: 3 }));
    district.push(chance.pickone(civs_district2));
    str_civs += "This "+ civs1.toLowerCase()+" is divided into "+"<b>"+district.length+" district</b> [ ";
    for (let index = 0; index < district.length; index++) {
        str_civs += ""+district[index];
        if(index < district.length-1){
            str_civs += " | ";
        }
    }
    str_civs += " ].</br> ";
    // Noble
    randomnes =chance.integer({ min: 1, max: 4 });
    if(randomnes == 1){
        str_civs += "Noble resident lives side by side with Common people in <b>"+ chance.pickone(district)+" district.</b> ";
    }else if(randomnes == 2){
        str_civs += "Noble resident lives separately from Common people in <b>"+ chance.pickone(district)+" district.</b> ";
    }else if(randomnes == 3){
        str_civs += "Noble resident lives side by side with Merchant resident in <b>"+ chance.pickone(district)+" district.</b> ";
    }else if(randomnes == 4){
        str_civs += "Noble resident lives exclusively in <b>"+ chance.pickone(district)+" district.</b> ";
    }
    str_civs += "</br>";

    //rule
    var ruled = chance.pickone(civs_rule);
    if(ruled == "Guild"){
        ruled = ""+chance.pickone(civs_guild) +" "+"Guild";
    }else if(ruled == "Merchant"){
        ruled = ""+chance.pickone(produce) +" "+"Merchant";
    }else if(ruled == "Mayor"){
        var names1 = chance.pickone(nameeff1);
        var names2 = chance.pickone(nameeff2);
        ruled = "Mayor "+String(names1+""+names2).toUpperCase();
    }else if(ruled == "Knight"){
        var names1 = chance.pickone(nameeff1);
        var names2 = chance.pickone(nameeff2);
        var gender = chance.pickone(["Sir", "Lady"])
        ruled = "Knight, "+gender+" "+String(names1+""+names2).toUpperCase();
    }else{

    }
    str_civs += "The "+ civs1.toLowerCase()+" is ruled by <b>"+ruled+".</b>";
    str_civs += "</br>";

 }else{
     // village
        var names1 = chance.pickone(nameeff1);
        var names2 = chance.pickone(nameeff2);
        ruled = "Chief "+String(names1+""+names2).toUpperCase();
     str_civs += "The "+ civs1.toLowerCase()+" is ruled by <b>"+ruled+".</b>";
     str_civs += "</br>";
 }
 
 


 return str_civs;    
}
function create_civs_many(){
    var str_civs ="";
    var randomnes =chance.integer({ min: 5, max: 10 });
    for (let index = 0; index < randomnes; index++) {
        
        str_civs += create_civs_random();
        str_civs += "</br>";

    }
    
    return str_civs;
}
function create_civs_spec(types){
    var str_civs ="";
    return str_civs;
}