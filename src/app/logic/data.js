function deepFreeze(object) {
  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object);
  // Freeze properties before freezing self
  for (let name of propNames) {
    let value = object[name];

    object[name] = value && typeof value === "object" ? 
      deepFreeze(value) : value;
  }
  return Object.freeze(object);
}

let __abilities = [
  ["str", "Strength"],
  ["dex", "Dexterity"],
  ["con", "Constitution"],
  ["int", "Intelligence"],
  ["wis", "Wisdom"],
  ["cha", "Charisma"]
];

let ABILITIES = deepFreeze(__abilities);

let __races = [
  [
    {
      name: "Human",
      id: "human",
      lore: "TODO",
      age: [20, 80],
      size: "Medium",
      height: 6,
      weight: 180,
      speed: 30,
      lang: ["Common", "one extra language of your choice"],
      special: [
        [
          "Bonus Skill",
          "You gain proficiency in one additional skill from your class skill list."
        ],
        [
          "Magical Affinity",
          "Whenever you are 5ft from a magical item you can sense its magic through one of your senses. Once per short rest you can increase the range of this feature to 30ft for 1min, after that you lose this feature and must finish a short rest to regain its passive effect. Using this feature only tells you if something is magical or not, nothing more than that."
        ],
        [
          "Grit",
          "You can use your reaction to gain advantage on a saving throw against a spell. You must roll a 5 or 6 on a d6 to use this feature again."
        ]
      ]
    },
    {
      name: "Halfling",
      id: "halfling",
      lore: "TODO",
      age: [20, 150],
      size: "Medium",
      height: 3,
      weight: 40,
      speed: 25,
      lang: ["Common", "Halfling"],
      special: [
        [
          "Lucky",
          "When you roll a 1 on an attack roll, ability check or saving throw, you can reroll the die and must use the new roll. Once you use this feature you can't use it again until you finish a short rest."
        ],
        [
          "Brave",
          "You have advantage on saving throws against being frightened."
        ],
        [
          "Second Chance",
          "When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. You can only use this feature once per combat."
        ]
      ]
    },
    {
      name: "Dwarf",
      id: "dwarf",
      lore: "TODO",
      age: [50, 350],
      size: "Medium",
      height: 4,
      weight: 150,
      speed: 25,
      lang: ["Common", "Dwarvish"],
      special: [
        [
          "Dwarven Toughness",
          "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
        ],
        [
          "Dwarven Fortitude",
          "Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. You must roll a 5 or 6 on d6 to use this feature again."
        ],
        [
          "Steadfast",
          "When an effect forces you to move, through a pull, push or a slide, you move 5ft less than the effect specifies. In addition, when a attack would knock you prone, you can immediately make a saving throw to avoid falling prone."
        ]
      ]
    },
    {
      name: "Elf",
      id: "elf",
      lore: "TODO",
      age: [100, 750],
      size: "Medium",
      height: 6,
      weight: 140,
      speed: 35,
      lang: ["Common", "Elvish"],
      special: [
        [
          "Fey Ancestry",
          "You have advantage on saving throws against being charmed."
        ],
        [
          "Elven Accuracy",
          "Whenever you have advantage on an attack roll, you can reroll one of the attack dice."
        ],
        [
          "Elf Magic",
          "You know one cantrip of your choice from the druid spell list. Wisdom is your spellcasting ability for this spell."
        ]
      ]
    },
    {
      name: "Aasimar",
      id: "aasimar",
      lore: "TODO",
      age: [20, 160],
      size: "Medium",
      height: 6,
      weight: 180,
      speed: 30,
      lang: ["Common", "Celestial"],
      special: [
        [
          "False Appearance",
          "While you aren't using any of your other race traits you are indistinguishable from a normal human. But when you do, your eyes glimmer with white light."
        ],
        [
          "Healing Hands",
          "As an action, you can touch a creature and cause it to regain hit points equal to your two times your lvl + Constitution modifier. Once you use this trait, you can't use it again until you finish a short rest."
        ],
        [
          "Celestial Resistance",
          "You have resistance to radiant damage."
        ],
        [
          "Radiant Soul",
          "Starting at 3rd lvl, you can use your action to unleash the divine energy within yourself, causing two luminous, incorporeal wings to sprout from your back. This transformation last for 1min or until you end it as a bonus action. During it, you have a flying speed of 30ft and once on each of your turns, you can deal extra radiant damage to one target. The extra damage is equal to 1d4 + your lvl. You can use this trait once per day."
        ]
      ]
    },
    {
      name: "Tiefling",
      id: "tiefling",
      lore: "TODO",
      age: [20, 160],
      size: "Medium",
      height: 6,
      weight: 180,
      speed: 30,
      lang: ["Common", "Infernal"],
      special: [
        [
          "False Appearance",
          "While you aren't using any of your other race traits you are indistinguishable from a normal human. But when you do, your eyes turn into a black void."
        ],
        [
          "Cursed Hands",
          "As an action, you can touch a creature and drain from it hit points equal to three times your lvl + Constitution modifier. Once you use this trait, you can't use it again until you finish a short rest."
        ],
        [
          "Hellish Resistance",
          "You have resistance to fire damage."
        ],
        [
          "Infernal Soul",
          "Starting at 3rd lvl, you can use your action to unleash the infernal energy within yourself, causing two dark, leathery wings to sprout from your back. This transformation last for 1min or until you end it as a bonus action. During it, you have a flying speed of 30ft and once on each of your turns, you can deal extra fire damage to one target. The extra damage is equal to 1d4 + your lvl. You can use this trait once per day."
        ]
      ]
    }
  ],
  [
    {
      name: "Dragonborn",
      id: "dragonborn",
      lore: "TODO",
      age: [15, 80],
      size: "Medium",
      height: 7,
      weight: 250,
      speed: 30,
      lang: ["Common", "Draconic"],
      special: [
        [
          "Dragon Hide",
          "Your natural scales are as hard as armor. When you aren't wearing armor, your AC is equal to 13 + Dexterity modifier."
        ],
        [
          "Draconic Ancestry",
          "Choose one type of dragon to be your ancestor. You have resistance to the damage type associated with your ancestor and your Breath Weapon deals that type of damage."
        ],
        [
          "Breath Weapon",
          "As a bonus action you can exhale destructive energy in a 15ft cone. Every creature inside the area takes 2d6 damage. Once you use this feature you can't use it again until you finish a short rest."
        ]
      ]
    },
    {
      name: "Goliath",
      id: "goliath",
      lore: "TODO",
      age: [20, 70],
      size: "Medium",
      height: 8,
      weight: 300,
      speed: 30,
      lang: ["Common", "Giant"],
      special: [
        [
          "Stone's Endurance",
          "When you take damage, you can use your reaction to roll a d12 + Constitution modifier and reduce the damage by that total. After you use this trait, you can't use it again until you finish a short rest."
        ],
        [
          "Mountain Born",
          "You're acclimated to the high altitudes and cold climates of mountains. You have resistance to cold damage and are naturally adapted to cold climates."
        ],
      ]
    },
    {
      name: "Gnome",
      id: "gnome",
      lore: "TODO",
      age: [40, 400],
      size: "Small",
      height: 3,
      weight: 40,
      speed: 25,
      lang: ["Common", "Gnomish"],
      special: [
        [
          "Fade Away",
          "Immediately after you take damage, you can use a reaction to magically become invisible until the end of your next turn or until you attack, deal damage or force someone to make a saving throw. Once you use this feature you can't do so again until you finish a long rest."
        ],
        [
          "Natural Illusionist",
          "You know the minor illusion cantrip. Intelligence is your spellcasting ability for it."
        ],
        [
          "Friends with Nature",
          "Through sounds and gestures, you can communicate simple ideas to Small or smaller beasts. Gnome often keep squirrels, badgers, rabbits, moles, woodpeckers and other creatures as beloved pets."
        ]
      ]
    },
    {
      name: "Kenku",
      id: "kenku",
      lore: 'TODO',
      age: [12,60],
      size: "Medium",
      height: 5,
      weight: 105,
      speed: 30,
      lang: ["Mimic Common", "Auran"],
      special: [
        [
          "Ambusher",
          "You gain advantage on any attacks against opponent that have not acted yet."
        ],
        [
          "Mimicry",
          "You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom (Insight) check VS your Charisma (Deception) check."
        ]
      ]
    },
    {
      name: "Lizardfolk",
      id: "lizardfolk",
      lore: 'TODO',
      age: [14,60],
      size: "Medium",
      height: 6,
      weight: 180,
      speed: 30,
      lang: ["Broken Common", "Draconic"],
      special: [
        [
          "Hungry Jaws",
          "As a bonus action you use your fanged maw to make a unarmed attack. If you hit with it, you deal 1d4 + Strength modifier piercing damage and gain temporary hit points equal to the damage dealt. To use this trait again you must get a 5 or 6 on the d6."
        ],
        [
          "Hold Breath",
          "You can hold your breath for up to 15 minutes"
        ],
        [
          "Natural Armor",
          "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + Dexterity modifier."
        ],
      ]
    },
    {
      name: "Tabaxi",
      id: "tabaxi",
      lore: "TODO",
      age: [18, 70],
      size: "Medium",
      height: 6,
      weight: 130,
      speed: 30,
      lang: ["Common", "one extra language of your choice"],
      special: [
        [
          "Feline Agility",
          "With a burst of speed you move double you speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet in one of your turns."
        ],
        [
          "Cat's Grip",
          "Because of your claws, you have a climbing speed of 20 feet on irregular surfaces."
        ],
        [
          "Cat's Claws",
          "You can use your claws to make unarmed strikes. If you hit, you deal 1d6 + Strength modifier slashing damage."
        ]
      ]
    }
  ],
  [
    {
      name: "Goblin",
      id: "goblin", 
      lore: "TODO",
      age: [8,60],
      size: "Small",
      height: 3,
      weight: 60,
      speed: 30,
      lang: ["Broken Common", "Goblin"],
      special: [
        [
          "Fury of the Small",
          "When you damage a creature and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage equal to your lvl + 1d6. To use this trait again you must get 5 or 6 on the d6."
        ],
        [
          "Redirect Attack",
          "When a creature you can see targets you with an attack, you can use your reaction to chose an ally within 5ft to change places with you. Your chosen ally becomes the target of that attack. You can only use this trait once per combat."
        ]
      ]
    },
    {
      name: "Orc",
      id: "orc",
      lore: "TODO",
      age: [12, 50],
      size: "Medium",
      height: 6,
      weight: 250,
      speed: 30,
      lang: ["Broken Common", "Orc"],
      special: [
        [
          "Aggressive",
          "As a bonus action, you can move up to your speed toward an enemy that you can see or hear. You must end this move closer to the enemy."
        ],
        [
          "Relentless Endurance",
          "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."
        ]
      ]
    },
    {
      name: "Bugbear",
      id: "bugbear",
      lore: "TODO",
      age: [16,80],
      size: "Medium",
      height: 7,
      weight: 300,
      speed: 30,
      lang: ["Broken Common", "Goblin"],
      special: [
        [
          "Long-Limbed",
          "You reach is 5 feet greater than normal with melee attacks."
        ],
        [
          "Surprise Attack",
          "If you surprise a creature and hit it with an attack on you first turn in combat, the attack deals an extra 2d6 damage. You can use this trait once for combat."
        ]
      ]
    },
    {
      name: "Hobgoblin",
      id: "hobgoblin",
      lore: "TODO",
      age: [16, 70],
      size: "Medium",
      height: 6,
      weight: 180,
      speed: 30,
      lang: ["Common", "Goblin"],
      special: [
        [
          "Saving Face",
          "If you miss an attack roll, fail an ability check or lose a saving throw, you gain a bonus to the roll equal to the number of allies that you can see within 30ft (max +5). You must take a short rest to use this trait again."
        ],
        [
          "Martial Advantage",
          "If an ally of yours, that isn't incapacitated, is within 5ft of the same enemy you are attacking, you can deal an extra 2d6 damage to the enemy. You can use this trait once per combat." 
        ]
      ]
    },
    {
      name: "Kobold",
      id: "kobold", 
      lore: "TODO",
      age: [6, 120],
      size: "Small",
      height: 3,
      weight: 30,
      speed: 35,
      lang: ["Broken Common", "Draconic"],
      special: [
        [
          "Grovel, Cower, and Beg",
          "As an action you can cower pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10ft of you that can see you. You can use this trait once per combat."
        ],
        [
          "Pack Tactics",
          "You have advantage on an attack roll against a creature if at least one of your allies is within 5 ft of it and the ally isn't incapacitated."
        ]
      ]
    },
    {
      name: "Yuan-ti Pureblood",
      id: "yuanti",
      lore: "TODO",
      age: [16, 70],
      size: "Medium",
      height: 5,
      weight: 120,
      speed: 30,
      lang: ["Common", "Draconic"],
      special: [
        [
          "Shapechanger",
          "You can use your action to Wild Shape into a poisonous snake. This tranformation can last up to 1 hour. You can only use this trait once per day."
        ],
        [
          "Poison Immunity",
          "You are immune to poison damage and the poisoned condition."
        ],
        [
          "Snake Charmer",
          "You can cast animal friendship an unlimited number of times but only on snakes. Charisma is your spellcasting ability for these spells."
        ]
      ]
    }
  ]
];

const RACES = deepFreeze(__races);

let __description = {

  str: [
    [-5,"Morbidly weak, has significant trouble lifting own limbs"],
    [-4,"Needs help to stand, can be knocked over by strong breezes"],
    [-3,"Visibly weak. Might be knocked off balance by swinging something dense"],
    [-2,"Difficulty pushing an object of their weight"],
    [-1,"Has trouble lifting heavy objects for a longer time"],
    [0,"Lifts heavy objects for a short time. Can perform simple physical labor for a few hours without break"],
    [1,"Carries heavy objects and throws small objects for medium distances. Can perform physical labor for half a day without break"],
    [2,"Visibly toned. Carries heavy objects with one arm for longer distances. Doesn't get too exhausted by physical labor"],
    [3,"Muscular. Can break objects like wood with bare hands and raw strength. Can perform heavy physical labor for several hours without break"],
    [4,"Heavily muscular. Able to out-wrestle a work animal or catch a falling person. Performs the work of multiple people in physical labor"],
    [5,"Pinnacle of brawn, able to out-lift several people in combined effort."]
  ],

  dex: [
    [-5,"Barely mobile, probably significantly paralyzed"],
    [-4,"Incapable of moving without noticeable effort or pain"],
    [-3,"Visible paralysis or physical difficulty"],
    [-2,"Significant klutz or very slow to react"],
    [-1,"Somewhat slow, occasionally trips over own feet"],
    [0,"Capable of usually catching a small tossed object"],
    [1,"Able to often hit large targets."],
    [2,"Able to often hit small targets. Can catch or dodge a medium-speed surprise projectile"],
    [3,"Light on feet, able to often hit small moving targets"],
    [4,"Graceful, able to flow from one action into another easily. Capable of dodging a small number of thrown objects"],
    [5,"Moves like water, reacting to all situations with almost no effort. Capable of dodging a large number of thrown objects"]
  ],

  con: [
    [-5,"Minimal immune system, body reacts violently to anything foreign"],
    [-4,"Frail, suffers frequent broken bones"],
    [-3,"Bruises very easily, knocked out by a light punch"],
    [-2,"Unusually prone to disease and infection"],
    [-1,"Easily winded, incapable of a full day’s hard labor"],
    [0,"Occasionally contracts mild sicknesses"],
    [1,"Can take a few hits before being knocked unconscious"],
    [2,"Easily shrugs off most illnesses. Able to labor for twelve hours most days"],
    [3,"Able to stay awake for days on end"],
    [4,"Very difficult to wear down, almost never feels fatigue"],
    [5,"Tireless paragon of physical endurance. Almost never gets sick, even to the most virulent diseases"]
  ],

  int: [
    [-5,"Animalistic, no longer capable of logic or reason. Behavior is reduced to simple reactions to immediate stimuli"],
    [-4,"Rather animalistic. Acts on instinct but can still resort to simple planning and tactics"],
    [-3,"Very limited speech and knowledge. Often resorts to charades to express thoughts"],
    [-2,"Has trouble following trains of thought, forgets most unimportant things"],
    [-1,"Misuses and mispronounces words. May be forgetful"],
    [0,"Knows what they need to know to get by"],
    [1,"Knows a bit more than is necessary, fairly logical"],
    [2,"Fairly intelligent, able to understand new tasks quickly. Able to do math or solve logic puzzles mentally with reasonable accuracy"],
    [3,"Very intelligent, may invent new processes or uses for knowledge"],
    [4,"Highly knowledgeable, probably the smartest person many people know"],
    [5,"Famous as a sage and genius. Able to make Holmesian leaps of logic"]
  ],

  wis: [
    [-5,"Seemingly incapable of thought, barely aware"],
    [-4,"Rarely notices important or prominent items, people, or occurrences"],
    [-3,"Seemingly incapable of forethought"],
    [-2,"Often fails to exert common sense"],
    [-1,"Forgets or opts not to consider options before taking action"],
    [0,"Makes reasoned decisions most of the time"],
    [1,"Able to tell when a person is upset"],
    [2,"Reads people and situations fairly well. Can get hunches about a situation that doesn’t feel right"],
    [3,"Often used as a source of wisdom or decider of actions"],
    [4,"Reads people and situations very well, almost unconsciously"],
    [5,"Nearly prescient, able to reason far beyond logic"]
  ],

  cha: [
    [-5,"Barely conscious, probably acts very alien. May have a presence which repels other people."],
    [-4,"Minimal independent thought, relies heavily on others to think instead"],
    [-3,"Has trouble thinking of others as people and how to interact with them"],
    [-2,"Terribly reticent, uninteresting, or rude"],
    [-1,"Something of a bore, makes people mildly uncomfortable or simply clumsy in conversation"],
    [0,"Capable of polite conversation"],
    [1,"Mildly interesting. Knows what to say to the right people"],
    [2,"Often popular or infamous. Knows what to say to most people and is very confident in debate"],
    [3,"Quickly likeable, respected or feared by many people. May be very eloquent. Good at getting their will when talking to people"],
    [4,"Quickly likeable, respected or feared by almost everybody. Can entertain people easily or knows how to effectively convince them of their own beliefs and arguments"],
    [5,"Renowned for wit, personality, and/or looks. May be a natural born leader"]
  ]
}
const DESCRIPTION = deepFreeze(__description);


export { RACES };
export { DESCRIPTION };
export { ABILITIES };
