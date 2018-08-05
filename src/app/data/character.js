import packs from './packs.js'

export const blankCharacter = {
  name: "",
  body: {},
  past: {},
  main: {
    _class: "",
    level: 1, // 1st lvl character blank template
    hitPoints: 0,
    hitDice: "",
    armorClass: 0,
    speed: 0,
    init: 0,
    prof: 2, // 1st lvl proficiency bonus
    score: {},
    saves: [],
    skills: [],
    pp: 0,
    langs: [],
    tools: {
      prof: [],
      all: {}
    }
  },
  equip: {
    weapons: [],
    armor: [],
    pack: {
      fromClass: [],
      fromBack: []
    },
    money: {
      cp: 0,
      sp: 0,
      gp: 0,
      pp: 0
    }
  },
  spell: {},
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
};


const getCharMain = ({race, _class, score, back}) => {
  let main = {
    _class: _class.id,
    armorClass: 10 + score.dex[1],
    level: 1, // 1st lvl character template
    speed: race.speed,
    init: score.dex[1],
    prof: 2, // 1st lvl proficiency bonus
    score: {...score}
  };

  // Character Hit Points and Hit Dice
  {
    // Hit Points are a mix of _class.hp lvl + constitution modifier
    // Hit Dice are based on _class.hp lvl

    switch(_class.hp) {
      case 1: // no player class
        main.hitPoints = 4;
        main.hitDice = "1d4";
        break;
      case 2: // sorcerer and wizard
        main.hitPoints = 6;
        main.hitDice = "1d6";
        break;
      case 3: // bard, cleric, druid, monk, rogue and warlock
        main.hitPoints = 8;
        main.hitDice = "1d8";
        break;
      case 4: // fighter, paladin and ranger
        main.hitPoints = 10;
        main.hitDice = "1d10";
        break;
      case 5: // barbarian
        main.hitPoints = 12;
        main.hitDice = "1d12";
        break;
      default:
        break;
    }
    // add con modifier to Hit Points
    main.hitPoints += score.con[1]; 

    // dwarf's racial trait === +1 Hit Points per lvl
    if(race.id === "dwarf") main.hitPoints += main.level;
  }

  // Character Saving Throws
  {
    let defaultSaves = [
      ["str", "Strength", 0],
      ["dex", "Dexterity", 0],
      ["con", "Constitution", 0],
      ["int", "Intelligence", 0],
      ["wis" ,"Wisdom", 0],
      ["cha" ,"Charisma", 0]
    ];

    main.saves = defaultSaves.map(item => {
      let [ability, save, mod] = [...item];

      // get each saving throw bonus, based on correct ability modifier
      mod = score[ability][1];

      // find thoses saves in which _class is proficient
      return _class.save.includes(save)
        ? [ability, save, mod + main.prof, true] // add proficiency bonus
        : [ability, save, mod]
    })
  }
  
  // Character Skills
  {
    let defaultSkills = [
      ["dex", "Acrobatics", 0],
      ["wis", "Animal Handling", 0],
      ["int", "Arcana", 0],
      ["str", "Athletics", 0],
      ["cha", "Deception", 0],
      ["int", "History", 0],
      ["wis", "Insight", 0],
      ["cha", "Intimidation", 0],
      ["int", "Investigation", 0],
      ["wis", "Medicine", 0],
      ["int", "Nature", 0],
      ["wis", "Perception", 0],
      ["cha", "Performance", 0],
      ["cha", "Persuasion", 0],
      ["int", "Religion", 0],
      ["dex", "Sleight of Hand", 0],
      ["dex", "Stealth", 0],
      ["wis", "Survival", 0]
    ];

    main.skills = defaultSkills.map(item => {
      let [ability, skill, mod] = [...item];

      // get each skill bonus, based on correct ability modifier
      mod = score[ability][1];

      // find thoses skills in which background is already proficient
      return back.skill.includes(skill)
        ? [ability, skill, mod + main.prof, true] // add proficiency bonus
        : [ability, skill, mod]
    })

    // get Passive Perception based on Perception Skill bonus + 10
    for(const item of main.skills) {
      if(item[1] === "Perception") main.pp = 10 + item[2];
    }
  }

  // Character Spoken Languages
  {
    let defaultLangs = [
      // standard langs, open to the player
      [true, "Common", false],
      [true, "Dwarvish", false],
      [true, "Elvish", false],
      [true, "Giant", false],
      [true, "Gnomish", false],
      [true, "Goblin", false],
      [true, "Halfling", false],
      [true, "Orc", false],
      // exotic langs, locked away by default
      [false, "Abyssal", false],
      [false, "Celestial", false],
      [false, "Draconic", false],
      [false, "Deep Speech", false],
      [false, "Infernal", false],
      [false, "Auran", false],
      [false, "Aquan", false],
      [false, "Ignan", false],
      [false, "Terran", false],
      [false, "Sylvan", false],
      [false, "Undercommon", false],
      [false, "Thieves' Cant", false, false],
      [false, "Druidic", false, false]
    ];

    main.langs = defaultLangs.map(item => {

      // control for druids
      if(item[1] === "Druidic" && _class.id === "druid") {
        return [item[0], item[1], true, true];
      }
      // control for rogues
      else if(item[1] === "Thieves' Cant" && _class.id === "rogue") {
        return [item[0], item[1], true, true];
      }
      else {
        // find thoses languages already spoken by race
        return race.lang.includes(item[1])
          ? [item[0], item[1], true]
          : [...item]
      }
    })
  }

  // Character Tools Proficiency
  {
    let defaultTools = {
      prof: [],
      all: {
        artisan: [
          ["Alchemist's supplies"],
          ["Brewer's supplies"],
          ["Calligrapher's supplies"],
          ["Carpenter's tools"],
          ["Cartographer's tools"],
          ["Cobbler's tools"],
          ["Cook's utensils"],
          ["Glassblower's tools"],
          ["Jeweler's tools"],
          ["Leatherworker's tools"],
          ["Mason's tools"],
          ["Painter's supplies"],
          ["Potter's tools"],
          ["Smith's tools"],
          ["Tinker's tools"],
          ["Weaver's tools"],
          ["Woodcarver's tools"],
        ],
        gaming: [
          ["Dice set"],
          ["Dragonchess set"],
          ["Playing card set"],
          ["Three-Dragon Ante set"]
        ],
        musical: [
          ["Bagpipes"],
          ["Drum"],
          ["Dulcimer"],
          ["Flute"],
          ["Lute"],
          ["Lyre"],
          ["Horn"],
          ["Pan flute"],
          ["Shawm"],
          ["Viol"]
        ],
        unique: [
          ["Disguise kit"],
          ["Forgery kit"],
          ["Herbalism kit"],
          ["Navigator's tools"],
          ["Poisoner's kit"],
          ["Thieves' tools"],
          ["Vehicles (land)"],
          ["Vehicles (water)"]
        ]
      }
    };

    // only for gnomes
    if(race.id === "gnome") defaultTools.prof.push("Tinker's tools");

    // always just one
    if(_class.tool) defaultTools.prof.push(_class.tool[0]);

    // add all unique tools by default
    if(back._tools && back._tools.unique) {
      for(const item of back._tools.unique) {
        // dont add a second Thieves' tools proficiency
        defaultTools.prof.includes(item)
          ? null
          : defaultTools.prof.push(item);
      }
    } 
    main.tools = defaultTools;
  }

  return main;
}

const getCharEquip = ({race, _class, score, back}, prof) => {
  /*
  weapons: [
    ["warhammer", 3, "1d8", 2, "bludgeoning", ["versatile(1d10)"]],
    ["dagger", 3, "1d4", 2,"piercing", ["finesse", "light", "thrown(20/60)"]]
  ],

  armor: [
    ["chain mail", 16, ["impeding(stealth)", "str(13)"]],
    ["medium shield", 2, ["-"]]
  ],
*/
  let equip = {
    weapons: [],
    armor: [],
    pack: {
      fromClass: [],
      fromBack: [...back.equip]
    },
    money: {
      cp: 0,
      sp: 0,
      gp: back._gold,
      pp: 0,
    }
  };

  // only for classes without choice of pack
  if(_class._pack.length === 1) {
    equip.pack.fromClass = [...packs[_class._pack[0]]];
  };

  // add default equip from class
  switch(_class.id) {
    case "barbarian":
      equip.weapons.push(["javelins", prof + score.str[1], "1d6", score.str[1], "piercing", ["thrown(30/120)"]]);
      equip.armor.push(["unarmored defense", 10 + score.dex[1] + score.con[1]]);
      break;
      
    case "bard":
      equip.weapons.push(["dagger", prof + score.str[1], "1d4", score.str[1], "piercing", ["finesse", "light", "thrown(20/60)"]]);
      equip.armor.push(["leather armor", 11 + score.dex[1]]);
      break;

    case "cleric":
      equip.armor.push(["medium shield", 2]);
      break;

    case "druid":
      equip.armor.push(["leather armor", 11 + score.dex[1]]);
      break;

    case "monk":
      equip.armor.push(["unarmored defense", 10 + score.dex[1] + score.wis[1]]);
      break;

    case "paladin":
      equip.armor.push(["chain mail", 16]);
      break;

    case "ranger":
      equip.weapons.push(["longbow", prof + score.dex[1], "1d10", score.dex[1], "piercing", ["ammunition(150/600)", "heavy", "two-handed"]]);
      break;

    case "rogue":
      equip.weapons.push(["dagger", prof + score.str[1], "1d4", score.str[1], "piercing", ["finesse", "light", "thrown(20/60)"]]);
      equip.armor.push(["leather armor", 11 + score.dex[1]]);
      break;

    case "sorcerer":
      equip.weapons.push(["dagger", prof + score.str[1], "1d4", score.str[1], "piercing", ["finesse", "light", "thrown(20/60)"]]);
      break;

    case "warlock":
      equip.weapons.push(["dagger", prof + score.str[1], "1d4", score.str[1], "piercing", ["finesse", "light", "thrown(20/60)"]]);
      equip.armor.push(["leather armor", 11 + score.dex[1]]);
      break;
  }

  // add racial traits that are like equips
  switch(race.id) {
    case "dragonborn":
      equip.armor.push(["dragon hide", 13 + score.dex[1]]);
      break;
    case "lizardfolk":
      equip.armor.push(["natural armor", 12 + score.dex[1]]);
      break;
    case "tabaxi":
      equip.weapons.push(["claws", prof + score.str[1], "1d4", score.str[1], "slashing", ["finesse", "light", "thrown(20/60)"]]);
      break;
  }

  return equip;
}


/*
  return complete spellcasting list
  e.g.
  {
    _class,   // spellcasting class
    ability,  // spellcasting ability
    save,     // spell save DC, when your spell triggers a saving throw 
    toHit,    // spell attack bonus, for spell attack rolls VS armor class
    cantrips, // number of cantrips known at 1st lvl
    known,    // number of 1st lvl spells known at 1st lvl
    prepared, // number of 1st lvl spells that can be prepared at 1st lvl
    slots,    // number of 1st lvl spell slots at 1st lvl
    ritual,   // if said spellcasting class has access to ritual casting
    focus,    // if said spellcasting class can use a spellcasting focus
    *notYet,  // only in Paladin and Ranger, access to magic at 2nd lvl
  }

  abiliy, cantrips, known, slots, ritual, focus and notYet
    are already defined inside each class
*/
const getCharSpell = ({_class, score}, prof) => {
  // classes without default access to magic, dont bother
  if(_class._spell === false) return false;

  // shallow copy
  let spell = {..._class._spell};

  // DRY
  spell._class = _class.id;

  // 8 + proficiency + spellcasting ability modifier
  spell.save = 8 + prof + score[spell.ability][1];

  // proficiency + spellcasting ability modifier
  spell.toHit = prof + score[spell.ability][1];

  switch(_class.id) {
      // this classes have a dynamic prepared property
    case 'cleric':
    case 'druid':
    case 'paladin': 
    case 'wizard':
      spell.prepared = score[spell.ability][1] + 1;
      break;

    default:
      // all others dont need prepared property
      // since all known spell are prepared by default
      spell.prepared = 0;
      break;
  }

  return spell;
}


// collect important traits that 1st lvl player should know
const getCharTraits = ({race, _class}) => {
  let traits = [];
  // each trait in race   === ["name", "description"]
  // each trait in _class === ["name", "lvl", "description"]

  // all traits from race
  for(const item of race.special) traits.push([item[0], item[1]]);

  // only traits from _class that are active at 1st lvl
  for(const item of _class.special) {
    if(item[1].match(/1st/)) traits.push([item[0], item[2]]);
  }

  return traits;
}

const getCharBody = ({race}) => {
  return {
    race: race.id,
    size: race.size,
    gender: "",
    age: "",
    height: "",
    weight: "",
    eyes: "",
    skin: "",
    hair: "",
  };
}

const getCharPast = ({back}) => {
  return {
    background: back.name,
    personality: "",
    ideals: "",
    bonds: "",
    flaws: ""
  };
};

export const getChar = (char) => {
  return Object.assign(
    {},
    { body: getCharBody(char) },
    { past: getCharPast(char) },
    { main: getCharMain(char) },
    { equip: getCharEquip(char, 2) }, // 2 === 1st lvl proficiency bonus
    { spell: getCharSpell(char, 2) }, // 2 === 1st lvl proficiency bonus
    { traits : getCharTraits(char) }
  );
}


