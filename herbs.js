//herbsattribute contain of detail of where it can be found or what in it like poison or magical
var herbsattribute =[
    "Artic",
    "Swamp",
    "Grassland",
    "Mountain",
    "Ice",
    "River",
    "Desert",
    "Cave",
    "Lake",
    "Beach",
    "Poisonus",
    "Rare",
    "Common",
	"Marsh",
	"Deepwater",
	"Space",
	"Underground",
	"Coastal",
]

//herbsname1 contain of adjective or oddietes for the names, even color.
var herbsname1=[
    "Red",
    "Blue",
    "Green",
    "Strong",
    "Small",
    "Long",
	"Silver",
	"Gold",
	"Transparent",
	"Luminuous",
	"Glowing",
	"White",
	"Black",
];

//herbsname2 contain of part of the plant or the animal example Leaves or physycal common knwledge
var herbsname2=[
    "Leaves",
    "Flower",
	"Bud",
	"Petal",
	"Branch",
	"Root",
];

//name formula will be combination from herbsattribute herbsname1 herbsname2 example: Common Green Flower

//herbsused contain how to be used. 
var herbsused=[
    "Soak",
    "Boiled",
    "Burn",
    "Freeze",
    "Smashed",
    "Minced",
    "Cut",
    "Cook",
    "Overcook",
	"Distilled",
	"Ground",
	"Fermented",
];

//herbseffect contain what the effect to the target
var herbseffect=[
    "Heal",
    "Instant Heal",
    "Gradually Heal",
    "Inflict",
    "Delayed Inflict",
    "Instant Inflict",
    "Enhance",
    "Gradually Enhance",
    "Prevent",
    "Delayed Prevent for",
    "Grant Immunities for",
    "Grant Resistant for",
    "Grant Resistant for",
];

//herbseffectattr contain what the effect 
var herbseffectattr=[
    "Burn",
    "Freeze",
    "Petrified",
    "Paralyzed",
    "Unconcious",
    "Stomachache",
    "Headache",
    "Hallucination",
    "Nightmare Hallucination",
    "Sleep",
    "Snooring",
    "Bad Breath",
    "FrostBite",
	"Death",
	"Dream",
	"Fear",
	"Charm",
];

// herbs effect formula will be combination from "This herbsname2 will herbseffect herbseffectattr effect if herbsused"  example: This flower will Grant Immunities for Burn effect if Overcook