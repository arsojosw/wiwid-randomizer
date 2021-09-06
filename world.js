var landscape_setting = [
    "Vast Ocean World",
    "Vast Landmass World",
    "Vast Ice Landmass World",
    "Vast Sky World",
    "Round Planet",
    "Archipelago",
    "Pangea",
    "Main Island",
    "Volcanic Island",
    "Frozen Land",
    "Rain Forest Land",
    "Mountainous Land",
]

var second_landscape_setting = [
    "Underground Tunnel Network",
    "Underground Chasm",
    "Underground Ocean",
    "Underground Volcanoes",
    "Underground Forest",
    "Underground Caves",
    "Underground Ruins",
    "Underground Dungeons",
    "Big Tree",
    "Strange Stone Formation",
    "Magical Leylines",
    "Huge Chasm",
    "Ruins of Old Civilization",
    "Ruins of Primitive Civilization",
    "Ruins of Advanced Civilization",
    "Mushroom Forest",
    "Dangerous Big Animals",
    "Carnivore Plants",
    "Rain Forest",
    "Desert",
    "Ice Desert",
    "Barren Lands",
    "Scorched Lands",
    "Volcanoes",
    "Swamps",
    "Poisonus Swamps",
    "Jagged Sharp Rock",
    "Big River",
    "Mountains",
    "Ice Caps Mountains",
    "Caves",
    "Magical Fruits",
    "Magical Tree",
    "Magical Big Tree",
    "Gargantuan Creature",
    "Gargantuan Creature Carcase",
    "Towers",
    "Magical Towers",
    "Flying Castle",
    "Flying LandMass",
    "Non Breathable Air",
    "Frozen Sea",
    "Frozen Forest",
    "Frozen Lake",
    "Frozen Cavern",
    "Frozen Caves",
    "Frozen Underground Caverns",
    "Golden Sand Desert"
]

var people_lives_with = [
    "Flourish",
    "Grow",
    "Thrive",
    "Bloom",
    "Prosper"
]
var first_human =[
    "Created",
    "Stand and Walk",
    "Born",
    "Exist",
    "Open their eyes",
    "Touch the land",
    "Raise",
    "Wake up",
    "Hear sound",
    "Breath air"
];
var first_human_born = [
    "The will of the GOD",
    "The breath of the GOD",
    "The leftover of GODS body",
    "The blood of the GOD",
    "The tears of the GOD",
    "The song of the GOD",
    "The will of the GOD",
    "Tall Tower",
    "Holy Land",         
    "Magical Tree Fruit",
    "Holy Land",
    "Magical Portal",
    "Shattered Rock",
    "Meteor Impact",
    "Decent from GODhood",
    "Awakened Animals",
    "Mud",
    "Awakened Clones",

]

var made_world = function(){
    var made_world_string = "";
    var setting_num = chance.integer({ min: 2, max: 5 })
    var i_landscape =  chance.pickone(landscape_setting);
    var i_second_landscape =  chance.pickset(second_landscape_setting,setting_num);
    made_world_string += "Is a <b>"+i_landscape+"</b>";
    for (let index = 0; index < i_second_landscape.length; index++) {
        if(index == 0){
            made_world_string += " with "+i_second_landscape[index];
        
        }else{
            made_world_string += " and "+i_second_landscape[index];
        
        }
    }
    made_world_string += ". ";
    made_world_string += "</br>";

    //first civilization
    made_world_string += "The <b>first civilization</b> begining to <b>"+String(chance.pickone(people_lives_with)).toLowerCase()+"</b> from <b>"+chance.pickone(i_second_landscape)+" area</b>.";

    //first human
    made_world_string += "</br>";
    made_world_string += "The <b>first humans "+String(chance.pickone(first_human)).toLowerCase()+"</b> for the first time from <b>"+String(chance.pickone(first_human_born)).toLowerCase()+"</b>.";
    made_world_string += "</br>";

    return made_world_string;
}