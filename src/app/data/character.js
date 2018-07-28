
/*

blankCharacter, for final character render
protoCharacter, for UI testing

*/

export const blankCharacter = {
  name: "blank",
  body: {
    race: "",
    gender: "",
    age: 0,
    height: "",
    weight: "",
    eyes: "",
    skin: "",
    hair: ""
  },
  past: {
    background: "",
    personality: "",
    ideals: "",
    bonds: "",
    flaws: ""
  },
  main: {
    gameClass: "",
    hitPoints: 0,
    hitDice: "",
    armorClass: 0,
    speed: 0,
    init: 0,
    prof: 2, // 1st lvl proficiency bonus
    score: {
      str: [0, 0],
      dex: [0, 0],
      con: [0, 0],
      int: [0, 0],
      wis: [0, 0],
      cha: [0, 0]
    },
    saves: [
      ["Strength", 0],
      ["Dexterity", 0],
      ["Constitution", 0],
      ["Intelligence", 0],
      ["Wisdom", 0],
      ["Charisma", 0]
    ],
    skills: [
      ["Acrobatics", 0],
      ["Animal Handling", 0],
      ["Arcana", 0],
      ["Athletics", 0],
      ["Deception", 0],
      ["History", 0],
      ["Insight", 0],
      ["Intimidation", 0],
      ["Investigation", 0],
      ["Medicine", 0],
      ["Nature", 0],
      ["Perception", 0],
      ["Performance", 0],
      ["Persuasion", 0],
      ["Religion", 0],
      ["Sleight of Hand", 0],
      ["Stealth", 0],
      ["Survival", 0]
    ],
    pp: 0,
    langs: [],
    tools: [],
  },
  equip: {
    weapons: [],
    armor: [],
    pack: [],
    money: {
      cp: 0,
      sp: 0,
      gp: 0,
      pp: 0
    }
  },
  spell: {
    spellClass: "",
    ability: "",
    save: 0, // 8 + 2 (lvl 1 proficiency bonus) + spellcasting ability mod
    toHit: 0, // 2 (lvl 1 proficiency bonus) + spellcasting ability mod
    cantrips: 0,
    known: 0,
    prepared: 0, // spellcasting ability modifier + lvl
    slots: 0
  },
  traits: []
};

export const protoCharacter = {
  name: "Aila Lightingroar",
  body: {
    race: "dwarf",
    gender: "female",
    age: 173,
    height: "1,2m",
    weight: "83kg",
    eyes: "Strong dark yellow eyes.",
    skin: "Fair white skin.",
    hair: "Shoulder height messy grey hair.",
    extra: ["Claw scar on left eye from an encouter with a orc.", "Tatoo of a lighting on right biceps."]
  },
  past: {
    background: "Legendary Lineage",
    personality: "I boast about how I will put my ancestors' deeds to shame.",
    ideals: "I am not my family's name. I will make my own legend.",
    bonds: "I wield the same weapon my ancestor used.",
    flaws: "If you speak ill of my ancestors, I will punch you in the face.",
    extra: ["I dont really know who I am..."]
  },
  main: {
    gameClass: "cleric",
    hitPoints: 12,
    hitDice: "1d8",
    armorClass: 18,
    speed: 25,
    init: 0,
    prof: 2, // 1st lvl proficiency bonus
    score: {
      str: [13, 1],
      dex: [11, 0],
      con: [16, 3],
      int: [11, 0],
      wis: [12, 1],
      cha: [14, 2]
    },
    saves: [     // add ability mod to ability saving throw, if prof, add it too
      ["Strength", 1],
      ["Dexterity", 0],
      ["Constitution", 3],
      ["Intelligence", 0],
      ["Wisdom", 3, true],
      ["Charisma", 4, true]
    ],
    skills: [
      ["Acrobatics", 0],
      ["Animal Handling", 1],
      ["Arcana", 0],
      ["Athletics", 3, true],
      ["Deception", 2],
      ["History", 2, true],
      ["Insight", 3, true],
      ["Intimidation", 2],
      ["Investigation", 0],
      ["Medicine", 3, true],
      ["Nature", 0],
      ["Perception", 1],
      ["Performance", 2],
      ["Persuasion", 2],
      ["Religion", 0],
      ["Sleight of Hand", 0],
      ["Stealth", 0],
      ["Survival", 1]
    ],
    pp: 11,  // passive perception === 10 + perception mod
    langs: ["Common", "Dwarvish", "Orc"],
    tools: ["vehicles (land)"],
  },
  equip: {
    weapons: [
      ["warhammer", 3, "1d8", 2, "bludgeoning", ["versatile(1d10)"]],
      ["dagger", 3, "1d4", 2,"piercing", ["finesse", "light", "thrown(20/60)"]]
    ],
    armor: [
      ["chain mail", 16, ["impeding(stealth)", "str(13)"]],
      ["medium shield", 2, ["-"]]
    ],
    pack: [
      "backpack",
      "bedroll",
      "mess kit",
      "tinderbox",
      "10 torches",
      "10 days of rations",
      "waterskin",
      "50ft (15m) of hempen rope",
      "holy symbol",
      "set of traveler's clothes",
      "wood figure of an ancestor",
      "signet ring",
      "dice set"
    ],
    money: {
      cp: 0,
      sp: 0,
      gp: 15,
      pp: 0
    }
  },
  spell: {
    spellClass: "cleric",
    ability: "wis",
    save: 12, // 8 + 2 (lvl 1 proficiency bonus) + spellcasting ability mod
    toHit: 4, // 2 (lvl 1 proficiency bonus) + spellcasting ability mod
    cantrips: 3,
    known: 0,
    prepared: 3, // spellcasting ability modifier + lvl
    slots: 2
  },
  traits: [
    [
      "Dwarven Toughness",
      "Your hit point maximun increases by 1, and it increases b1 every time you gain a level."
    ],
    [
      "Dwarven Fortitude",
      "Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. You must roll a 5 or 6 on d6 to use this feature again."
    ],
    [
      "Steadfast",
      "When an effect forces you to move, through a pull, push or a slide, you move 5ft less than the effect specifies. In addition, when a attack would knock you prone, you can immediately make a saving throw to avoid falling prone."
    ],
    [
      "Divine Domain",
      "Choose one domain related to your deity and gain a trait related to that domain. Knowledge, Life, Light, Nature, Tempest, Trickery, War, Forge and Grave are the available domains."
    ],
    [
      "Domain Spells",
      "Each domain has a list of spells, its domain spells, that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day."
    ]
  ]
};

