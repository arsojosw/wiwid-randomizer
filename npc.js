var story_traits =["always goes straight to the point.","is very quick to trust other people.","constantly looks for the loophole.","is very selfish.","rarely speaks.","is very talkative.","takes everything at face-value.","is very empathic towards others.","is very pessimistic.","is an hopeless romantic.","is always very calm.","is very self-confident.","will ponder the pros and cons before making a decision.","is bipolar.","is very slow to trust other people.","is very impatient.","is a perfectionist.","is quick to forgive.","is very competitive.","hates fair play.","often spies on other people.","is always ironic.","is a pacifist.","is polite and respectful.","is a very good diplomat and always works towards resolution of conflict.","is materialistic.","is prone to violence.","only talks loudly.","has an even temper.","is not very obstinate.","is kind and generous.","is very cowardly.","doesn't care about risks or odds.","is very talkative.","always plays fair.","will always prioritize the needs of other people, even to their own detriment.","acts on impulse.","rarely speaks.","would rather act than talk or think."]
var npc_class = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
    "Villager",
    "Townsfolk",
    "Guard",
    "Merchant",
    "Noble",
    "Knight",
    "Librarian",
    "Farmer",
    "Blacksmith",
    "Hunter",
    "Tracker",
    "Fisherman",
    "Bandit",
    "Thief",
    "Shop Owner",
    "Barkeeper",
    "Innkeeper",
    "Mercenary",
    "Messengger",
    "Ruler",
    "Apprentice",
]
var proficiency = [
    "Athletics",
    "Acrobatic",
    "Alchemy",
    "Animal Handling",
    "Arcana",
    "Art",
    "Cooking",
    "Deception",
    "Farming",
    "Fishing",
    "History",
    "Herbalism",
    "Insight",
    "Investigation",
    "Intimidation",
    "Medicine",
    "Machinery",
    "Managing",
    "Nature",
    "Perception",
    "Performance",
    "Singing",
    "Persuasion",
    "Religion",
    "Sleight of Hand",
    "Stealth",
    "Survival",
]

var races=[
    {
        "racename":"Dragonborn",
        "variant":[
            {
                "variantname": "Standard",
                "abilityscore":{
                    "Str":2,
                    "Cha":1,
                },
                "Features":{
                    "Damage Resistance": "You have resistance to the damage type associated with your ancestry."
                }
            },
            {
                "variantname": "Draconblood",
                "abilityscore":{
                    "Int":2,
                    "Cha":1,
                },
                "Features":{
                    "Darkvision": "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Forceful Presence":"When you make a Intimidation or Persuasion check, you can do so with advantage once per long rest."
                }
            },
            {
                "variantname": "Ravenite",
                "abilityscore":{
                    "Str":2,
                    "Cha":1,
                },
                "Features":{
                    "Darkvision": "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
                    "Vengeful Assault":"When you take damage from a creature in range of a weapon you are wielding, you can use your reaction to make an attack against that creature. You can do this once per short or long rest."
                }
            }
        ],
        "Features":{
            "Dragon Color":{
                "Black":"Acid",
                "Blue":"Lightning",
                "Brass":"Fire",
                "Bronze":"Lightning",
                "Copper":"Acid",
                "Gold":"Fire",
                "Green":"Poison",
                "Red":"Fire",
                "Silver":"Cold",
                "White":"Cold",
            },
            "Breath Weapon":"You can use your action to exhale destructive energy. It deals damage in an area according to your ancestry. When you use your breath weapon, all creatures in the area must make a saving throw, the type of which is determined by your ancestry. The DC of this saving throw is 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increase to 3d6 at 6th level, 4d6 at 11th, and 5d6 at 16th level. After using your breath weapon, you cannot use it again until you complete a short or long rest. Instead, you may use your breath weapon a number of times equal to your Constitution modifier. You regain expended uses on a short or long rest.",
            "Languages":"You can read, speak, and write Common and Draconic."
        }

    },
    {
        "racename":"Human",
        "variant":[
            {
                "variantname": "Standard",
                "abilityscore":{
                    "Str":1,
                    "Dex":1,
                    "Con":1,
                    "Int":1,
                    "Wis":1,
                    "Cha":1,
                },
                "Features":{
                    
                }
            },
        ],
        "Features":{
            "Languages":"You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on."
        }

    },
    {
        "racename":"Elf",
        "variant":[
            {
                "variantname": "Wood Elf",
                "abilityscore":{
                    "Dex":2,
                    "Wis":1,
                },
                "Features":{
                    "Elf Weapon Training":"You have proficiency with the longsword, shortsword, shortbow, and longbow.",
                    "Fleet of Foot":"Your base walking speed increases to 35 feet.",
                    "Mask of the Wild":"You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                }
            },
            {
                "variantname": "Dark Elf",
                "abilityscore":{
                    "Dex":2,
                    "Cha":1,
                },
                "Features":{
                    "Superior Darkvision":"Your darkvision has a range of 120 feet, instead of 60.",
                    "Sunlight Sensitivity":"You have disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight when you, the target of the attack, or whatever you are trying to perceive is in direct sunlight.",
                    "Drow Magic":"You know the Dancing Lights cantrip. When you reach 3rd level, you can cast the Faerie Fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell onceand regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
                    "Drow Weapon Training":"You have proficiency with rapiers, shortswords, and hand crossbows."
                }
            },
        ],
        "Features":{
            "Fey Ancestry":"You have advantage on saving throws against being charmed, and magic can't put you to sleep",
            "Trance":'Elves do not sleep. Instead they meditate deeply, remaining semi-conscious, for 4 hours a day. The Common word for this meditation is "trance." While meditating, you dream after a fashion; such dreams are actually mental exercises that have become reflexive after years of practice. After resting in this way, you gain the same benefit a human would from 8 hours of sleep.',
            "Keen Senses":"You have proficiency in the Perception skill.",
            "Darkvision": "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
            "Languages":"You can speak, read, and write Common and Elven."
        }

    },
    {
        "racename":"Half-Elf",
        "variant":[
            {
                "variantname": "",
                "abilityscore":{
                    "Int":1,
                    "Cha":2,
                },
                "Features":{
                    "Half-Elf Versatility":{
                        "Skill Versatility":"You gain proficiency in two skills of your choice.",
                        "Elf Weapon Training (Wood Elf Heritage)":"You have proficiency with the longsword, shortsword, shortbow, and longbow.",
                        "Fleet of Foot (Wood Elf Heritage)":"Your base walking speed increases to 35 feet.",
                        "Mask of the Wild (Wood Elf Heritage)":"You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.",
                        "Drow Magic (Dark Elf Heritage)":"You know the Dancing Lights cantrip. When you reach 3rd level, you can cast Faerie Fire once, and it recharges after a long rest. When you reach 5th level, you can cast Darkness once, and it recharges after a long rest. Charisma is your spellcasting ability for these spells.",
                    },
                }
            },
        ],
        "Features":{
            "Darkvision": "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
            "Fey Ancestry":"You have advantage on saving throws against being charmed, and magic can't put you to sleep",
            "Languages":"You can read, speak, and write Common, Elven, and one language of your choice."
        }

    },
]


var createNPC = function(){
    var npc_str ="";
    var pick_races = chance.pickone(races);
    var pick_race_variants = chance.pickone(pick_races.variant);
    var variantabbscore = pick_race_variants.abilityscore;
    var abb_str = chance.integer({ min: 10, max: 18 });
    var abb_dex = chance.integer({ min: 10, max: 18 });
    var abb_con = chance.integer({ min: 10, max: 18 });
    var abb_int = chance.integer({ min: 10, max: 18 });
    var abb_wis = chance.integer({ min: 10, max: 18 });
    var abb_cha = chance.integer({ min: 10, max: 18 });

    $.each(variantabbscore,function(i,v){
        if(i=="Str") abb_str += v;
        if(i=="Dex") abb_dex += v;
        if(i=="Con") abb_con += v;
        if(i=="Int") abb_int += v;
        if(i=="Wis") abb_wis += v;
        if(i=="Cha") abb_cha += v;
        console.log(i)
    })

    npc_features = "";

    $.each(pick_races.Features,function(i,v){
        npc_features += '<div>';
        if(typeof v === 'object' && v !== null && !Array.isArray(v)){
            var temp = Object.keys(v).map((key) => [String(key+" | "+v[key])]); 
            var temp1 = chance.pickone(temp);
            npc_features +=  i + ' : <div class="tag2">'+ temp1 +'</div>';
        }else{
            npc_features += i + ' : <div class="tag2">'+ v +'</div>';
        }
        npc_features += '</div>';
        // npc_features += "</br>"
    })
    $.each(pick_race_variants.Features,function(i,v){
        npc_features += '<div>';
        if(typeof v === 'object' && v !== null && !Array.isArray(v)){
            var temp = Object.keys(v).map((key) => [String(key+" | "+v[key])]); 
            var temp1 = chance.pickone(temp);
            npc_features +=  i + ' : <div class="tag2">'+ temp1 +'</div>';
        }else{
            npc_features += i + ' : <div class="tag2">'+ v +'</div>';
        }
        npc_features += '</div>';
        // npc_features += "</br>"
    })

    npc_proficiency = chance.pickset(proficiency,4);


    // npc_str += JSON.stringify(pick_race_variants);
    npc_str += 'Name: '+create_clan_names() +"("+chance.pickone(["M","F"])+")";
    npc_str += '</br>';
    npc_str += 'Race: '+pick_races.racename +" | "+pick_race_variants.variantname;
    npc_str += '</br>';
    npc_str += 'Skills: '+npc_proficiency;
    npc_str += '</br>';

    var npc_lv = chance.integer({ min: 1, max: 20 });
    var npc_hp = 10;
    for (let index = 0; index < npc_lv-1; index++) {
        npc_hp+= chance.integer({ min: 5, max: 12 })
        
    }
    npc_str += 'Class: '+chance.pickone(npc_class) +" Lv:"+npc_lv+" Hp:"+npc_hp;
    npc_str += '</br>';

    npc_str += '<div class="columns">';
    npc_str += '<div class="column">';
    npc_str += "Strength</br>"+abb_str +"(+"+Math.floor((abb_str-10)/2)+")";
    npc_str += '</div>';
    npc_str += '<div class="column">';
    npc_str += "Dexterity</br>"+abb_dex+"(+"+Math.floor((abb_dex-10)/2)+")";
    npc_str += '</div>';
    npc_str += '<div class="column">';
    npc_str += "Constitution</br>"+abb_con+"(+"+Math.floor((abb_con-10)/2)+")";
    npc_str += '</div>';
    npc_str += '<div class="column">';
    npc_str += "Intelligence</br>"+abb_int+"(+"+Math.floor((abb_int-10)/2)+")";
    npc_str += '</div>';
    npc_str += '<div class="column">';
    npc_str += "Wisdom</br>"+abb_wis+"(+"+Math.floor((abb_wis-10)/2)+")";
    npc_str += '</div>';
    npc_str += '<div class="column">';
    npc_str += "Charisma</br>"+abb_cha+"(+"+Math.floor((abb_cha-10)/2)+")";
    npc_str += '</div>';
    npc_str += '</div>';


    npc_str += '</br>';
    npc_str += 'Features: ';
    npc_str += npc_features;

    npc_str += 'Traits: '+chance.pickset(story_traits,3);
    npc_str += '</br>';
    
     

    return npc_str;
}