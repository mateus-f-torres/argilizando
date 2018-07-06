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
  {
    name: "Kenku",
    id: "kenku",
    pitch: 'TODO',
    age: [12,60],
    size: "Medium",
    height: 5,
    weight: 105,
    speed: 30,
    lang: ["Common", "Auran"],
    special: [
      [
        "Expert Forgery",
        "You can duplicate other creatures's handwritting and craftwork. You have advantage on all checks made to produce forgeries or duplicates of existing objects."
      ],
      [
        "Mimicry",
        "You can mimic sounds you have heard, including voices. A creature that hears the sounds you make can tell they are imitations with a successful Wisdom(Insight) check VS your Charisma(Deception) check."
      ]
    ]
  },
  {
    name: "Lizardfolk",
    id: "lizardfolk",
    pitch: 'TODO',
    age: [14,60],
    size: "Medium",
    height: 6,
    weight: 180,
    speed: 30,
    lang: ["Common", "Draconic"],
    special: [
      [
        "Bite",
        "You can use your fanged maw to make unarmed strikes. If you hit with it, you deal 1d6 + Strength modifier piercing damage."
      ],
      [
        "Cunning Artisan",
        "In your short rest you can try to harvest the bone and hide from a slain creature if size Small or larger to create one of the following items: a shield, a club, a javelin or 1d4 darts or blowgun needles. To use this trait, you need a blade or appropriate artisan's tools."
      ],
      [
        "Hold Breath",
        "You can hold your breath for up to 15 minutes"
      ],
      [
        "Natural Armor",
        "You have tough, scaly skin. When you aren't wearing armor, your AC is 13 + Dexterity modifier."
      ],
      [
        "Hungry Jaws",
        "In battle, as a bonus action, you can make a special bite attack. If the attack hits, it deals normal damage and you gain temporary hit points equal to the damage dealt. To use this trait again you must roll a 5-6 on the d6 or take a short rest."
      ]
    ]
  },
  {
    name: "Tabaxi",
    id: "tabaxi",
    pitch: "TODO",
    age: [18, 70],
    size: "Medium",
    height: 6,
    weight: 130,
    speed: 30,
    lang: ["Common", "X"],
    special: [
      [
        "Feline Agility",
        "With a burst of speed you move double you speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet in one of your turns or your get a 6 on a d6."
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
  },
  {
    name: "Bugbear",
    id: "bugbear",
    pitch: "TODO",
    age: [16,80],
    size: "Medium",
    height: 7,
    weight: 300,
    speed: 30,
    lang: ["Common", "Goblin"],
    special: [
      [
        "Long-Limbed",
        "You reach is 5 feet greater than normal with melee attacks."
      ],
      [
        "Powerful Build",
        "You count as one size larger when determining your carrying capacity and the weight you can push, drag or lift."
      ],
      [
        "Surprise Attack",
        "If you surprise a creature and hit it with an attack on you first turn in combat, the attack deals an extra 2d6 damage. You can use this trait once for combat."
      ]
    ]
  },
  {
    name: "Goblin",
    id: "goblin", 
    pitch: "TODO",
    age: [8,60],
    size: "Small",
    height: 3,
    weight: 60,
    speed: 35,
    lang: ["Common", "Goblin"],
    special: [
      [
        "Fury of the Small",
        "When you damage a creature and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage equal to your lvl + 1d6. To use this trait again you must get 5-6 on the d6 or take a short rest."
      ],
      [
        "Nimble Escape",
        "You can take the Disengage or Hide action as a bonus action on each of your turns;"
      ]
    ]
  },
  {
    name: "Hobgoblin",
    id: "hobgoblin",
    pitch: "TODO",
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
    pitch: "TODO",
    age: [6, 120],
    size: "Small",
    height: 3,
    weight: 30,
    speed: 35,
    lang: ["Common", "Draconic"],
    special: [
      [
        "Grovel, Cower, and Beg",
        "As an action you can cowet pathetically to distract nearby foes. Until the end of your next turn, your allies gain advantage on attack rolls against enemies within 10ft of you that can see you. You can use this trait once per combat."
      ],
      [
        "Pack Tactics",
        "You have advantage on an attack roll against a creature if at least one of your allies is within 5 ft of it and the ally isn't incapacitated."
      ]
    ]
  },
  {
    name: "Orc",
    id: "orc",
    pitch: "TODO",
    age: [12, 50],
    size: "Medium",
    height: 6,
    weight: 250,
    speed: 30,
    lang: ["Common", "Orc"],
    special: [
      [
        "Aggressive",
        "As a bonus action, you can move up to your speed toward an enemy that you can see or hear. You must end this move closer to the enemy."
      ],
      [
        "Powerful Build",
        "You count as one size larger when determinig your carrying capacity and the weight you can push, drag or lift."
      ]
    ]
  },
  {
    name: "Yuan-ti Pureblood",
    id: "yuanti",
    pitch: "TODO",
    age: [16, 70],
    size: "Medium",
    height: 5,
    weight: 120,
    speed: 30,
    lang: ["Common", "Draconic"],
    special: [
      [
        "Magic Resistance",
        "You have advantage on saving throws agains spells and other magical effects."
      ],
      [
        "Poison Immunity",
        "You are immune to poison damage and the poisoned condition."
      ],
      [
        "Snake Charmer",
        "You know the poison spray cantrip. You can cast animal friendship an unlimited number of times but only on snakes. And starting at lvl 3 you can cast suggestion with this trait. Once you cast it you must take a long rest to do it again. Charisma is your spellcasting ability for these spells."
      ]
    ]
  },
  {
    name: "Githyanki",
    id: "githyanki",
    pitch: "TODO",
    age: [16, 100],
    size: "Medium",
    height: 6,
    weight: 120,
    speed: 30,
    lang: ["Common", "Gith"],
    special: [
      [
        "Decadent Mastery",
        "You learn one language of your choice, and you are proficient with one skill or tool of your choice."
      ],
      [
        "Martial Prodigy",
        "You are proficient with light and medium armor and with shortswords, longswords, and greatswords."
      ],
      [
        "Githyanki Psionics",
        "You know the mage hand cantrip, and the hand is invisible when you cast the cantrip with this trait. When you reach 3rd level, you can cast the jump spell once with this trait, and you regain the ability to do so when you fi nish a long rest. When you reach 5th level, you can cast the misty step spell once with this trait, and you regain the ability to do so when you finish a long rest. Intelligence is your spellcasting ability for these spells. When you cast them with this trait, they don't require components."
      ]
    ]
  }
]
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
