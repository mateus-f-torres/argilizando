export default [
  [
    "Defenders",
    [
      {
        id: "barbarian",
        primary: "Strength",
        hp: 5,
        armor: 3,
        weapon: 3,
        magic: 1,
        versatile: 1,
        save: ["Strength", "Constitution"],
        skill: [
          2, 
          ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
        ],
        tool: ["None"],
        equip: [
          ["greataxe", "or 1 martial weapon"],
          ["2 handaxes", "or 1 simple weapon"],
          ["4 javelins"],
          ["explorer's pack"]
        ],
        special: [
          [
            "Rage",
            "1st lvl",
            "Enter a battle rage and gain advantage on Strength checks and saving throws, bonus damage with Strength based melee weapons and resistance to bludgeoning, piercing and slashing damage."
          ],
          [
            "Unarmored Defense",
            "1st lvl",
            "When you are not wearing any armor your AC is 10 + Dexterity modifier + Constitution modifier."
          ],
          [
            "Reckless Attack",
            "2nd lvl",
            "Throw aside all concern for defense and attack with fierce desperation to gain advantage on Strength based melee attack, but attack rolls against you also have advantage during that round."
          ]
        ],
        _spell: false
      },
      {
        id: "fighter",
        primary: "Strength and/or Dexterity",
        hp: 4,
        armor: 4,
        weapon: 5,
        magic: 2,
        versatile: 2,
        save: ["Strength", "Constitution"],
        skill: [
          2,
          ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"]
        ],
        tool: ["None"],
        equip: [
          ["chain mail or", "leather, longbow + 20 arrows"],
          ["martial weapon + medium shield", "or martial weapon + mini-shield", "or 2 martial weapons"],
          ["light crossbow + 20 bolts", "or 2 handaxes"],
          ["dungeoneer's pack", "or explorer's pack"]
        ],
        special: [
          [
            "Fighting Style",
            "1st lvl",
            "Adopt a particular style of fighting, for example: Archery for +2 bonus to ranged attack rolls, Great Weapon Fighting for the choice to reroll 1s and 2s when wielding a two-handed weapon or Two-Weapon Fighting for more damage when attacking with one weapon on each hand."
          ],
          [
            "Second Wind",
            "1st lvl",
            "Catch you breath during combat and heal yourself for 1d10 + your lvl."
          ],
          [
            "Action Surge",
            "2nd lvl",
            "Push yourself beyond your normal limit and gain an extra action."
          ]
        ],
        _spell: false,
      },
      {
        id: "paladin",
        primary: "Strength and Charisma",
        hp: 4,
        armor: 5,
        weapon: 3,
        magic: 3,
        versatile: 2,
        save: ["Wisdom", "Charisma"],
        skill: [
          2,
          ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"]
        ],
        tool: ["None"],
        equip: [
          ["martial weapon + medium shield", "or 2 martial weapons"],
          ["5 javelins", "or 1 simple weapon"],
          ["priest's pack", "or explorer's pack"],
          ["chain mail + holy symbol"]
        ],
        special: [
          [
            "Divine Smite",
            "2nd lvl",
            "Expend spell slots to imbue your melee weapon attack with divine power to deal extra damage to the target, starting at 2d8."
          ],
          [
            "Channel Divinity",
            "3rd lvl",
            "Channel divine energy to fuel magical effects that change with each oath. From turning fiends and undeads to ensnaring a foe with spectral vines or maybe getting a +10 bonus to hit."
          ],
          [
            "Auras",
            "6th lvl",
            "Your mere presence around your allies is enough to give bonuses and advantage on saving throws or certain conditions. With each oath providing more types of auras."
          ]
        ],
        _spell: {
          ability: "cha",
          cantrips: 0,
          known: 0,
          slots: 2,
          ritual: false,
          focus: "holy symbol",
          notYet: true // acess to magic on lvl 2
        }
      }
    ]
  ],
  [
    "Leaders",
    [
      {
        id: "cleric",
        primary: "Wisdom",
        hp: 3,
        armor: 4,
        weapon: 3,
        magic: 4,
        versatile: 3,
        save: ["Wisdom", "Charisma"],
        skill: [
          2,
          ["History", "Insight", "Medicine", "Persuasion", "Religion"]
        ],
        tool: ["None"],
        equip: [
          ["mace", "or warhammer"],
          ["scale mail", "or leather armor", "or chain mail"],
          ["light crossbow + 20 bolts", "or 1 simple weapon"],
          ["priest's pack", "or explorer's pack"],
          ["medium shield + holy symbol"]
        ],
        special: [
          [
            "Divine Domain",
            "1st lvl",
            "Choose one domain related to your deity and gain a trait related to that domain. Knowledge, Life, Light, Nature, Tempest, Trickery, War, Forge and Grave are the available domains."
          ],
          [
            "Domain Spells",
            "1st lvl",
            "With each domain comes a different set of know spells."
          ],
          [
            "Channel Divinity",
            "2nd lvl",
            "Serve as a lighting rod for your deity on this plane and gain acess to unique magical powers for a brief amount of time."
          ]
        ],
        _spell: {
          ability: "wis",
          cantrips: 3,
          known: 0,
          slots: 2,
          ritual: true,
          focus: "holy symbol"
        }
      },
      {
        id: "bard",
        primary: "Charisma",
        hp: 3,
        armor: 2,
        weapon: 3,
        magic: 4,
        versatile: 5,
        save: ["Dexterity", "Charisma"],
        skill: [
          3,
          ["Any"]
        ],
        tool: ["Three musical instruments"],
        equip: [
          ["rapier", "or longsword", "or 1 simple weapon"],
          ["diplomat's pack", "or entertainer's pack"],
          ["lute or", "any other musical instrument"],
          ["leather armor + dagger"]
        ],
        special: [
          [
            "Bardic Inspiration",
            "1st lvl",
            "Inspire others through stirring words or music and give a creature a d6 to use during rolls."
          ],
          [
            "Jack of All Trades",
            "2nd lvl",
            "Add half your proficiency bonus, rounded down, to any ability check that you are not proficient with."
          ],
          [
            "Song of Rest",
            "2nd lvl",
            "Help wounded allies recover during a short rest by giving +1d6 hp to them."
          ]
        ],
        _spell: {
          ability: "cha",
          cantrips: 2,
          known: 4,
          slots: 2,
          ritual: true,
          focus: "instrument"
        }
      }
    ]
  ],
  [
    "Strikers",
    [
      {
        id: "monk",
        primary: "Dexterity and Wisdom",
        hp: 3,
        armor: 1,
        weapon: 2,
        magic: 2,
        versatile: 3,
        save: ["Strength", "Dexterity"],
        skill: [
          2,
          ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"]
        ],
        tool: ["Artisan's Tools"],
        equip: [
          ["2 simple weapons + 10 darts"],
          ["dungeoneer's pack", "or explorer's pack"],
        ],
        special: [
          [
            "Unarmored Defense",
            "1st lvl",
            "While you are wearing no armor and not wielding a shield your AC is 10 + Dexterity modifier + Wisdom modifier."
          ],
          [
            "Martial Arts",
            "1st lvl",
            "When attacking with an unarmed strike or monk weapons you can use Dexterity instead of Strength, roll a d4 instead of the normal damage die and make an unarmed strike as a bonus action."
          ],
          [
            "Ki",
            "2nd lvl",
            "Harness the mystic energy of ki and gain acess to special actions like Flurry of Blows, Patient Defense and Step of the Wind."
          ]
        ],
        _spell: false
      },
      {
        id: "ranger",
        primary: "Dexterity and Wisdom",
        hp: 4,
        armor: 3,
        weapon: 4,
        magic: 3,
        versatile: 3,
        save: ["Strength", "Dexterity"],
        skill: [
          3,
          ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"]
        ],
        tool: ["None"],
        equip: [
          ["scale mail", "or leather armor"],
          ["2 shortswords", "or 2 simple weapons"],
          ["dungeoneer's pack", "or explorer's pack"],
          ["longbow + 20 arrows"]
        ],
        special: [
          [
            "Favored Enemy",
            "1st lvl",
            "Choose a type of creature to gain significant experience studying, tracking, hunting and even talking the same language as them."
          ],
          [
            "Natural Explorer",
            "1st lvl",
            "Become familiar with a type of natural environment and adept at traveling, surviving and hunting in such environment."
          ],
          [
            "Primeval Awareness",
            "3rd lvl",
            "Expend spell slots to magically sense if a certain type of creature is near you and your group even if the creature is hidden by magic."
          ]
        ],
        _spell: {
          ability: "wis",
          cantrips: 0,
          known: 2,
          slots: 2,
          ritual: false,
          focus: false,
          notYet: true // acess to magic on lvl 2
        }
      },
      {
        id: "rogue",
        primary: "Dexterity",
        hp: 3,
        armor: 2,
        weapon: 3,
        magic: 2,
        versatile: 3,
        save: ["Dexterity", "Intelligence"],
        skill: [
          4,
          ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"]
        ],
        tool: ["Thieves' tools"],
        equip: [
          ["rapier", "or shortsword"],
          ["shortbow + 20 arrows", "or shortsword"],
          ["burglar's pack", "or dungeoneer's pack", "or explorer's pack"],
          ["leather armor"],
          ["2 daggers + thieves' tools"]
        ],
        special: [
          [
            "Sneak Attack",
            "1st lvl",
            "Exploit a foe's distraction and deal extra damage."
          ],
          [
            "Cunning Action",
            "2nd lvl",
            "Quick thinking and agility allows you move and act quickly to take Dash, Disengage and Hide as bonus actions instead of actions."
          ],
          [
            "Uncanny Dodge",
            "5th lvl",
            "Use your reaction to halve an enemy attack's damage against you"
          ]
        ],
        _spell: false
      },
      {
        id: "warlock",
        primary: "Charisma",
        hp: 3,
        armor: 2,
        weapon: 2,
        magic: 3,
        versatile: 4,
        save: ["Wisdom", "Charisma"],
        skill: [
          2,
          ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"]
        ],
        tool: ["None"],
        equip: [
          ["light crossbow + 20 bolts", "or 1 simple weapon"],
          ["component pouch", "or arcane focus"],
          ["scholar's pack", "or dungeoneer's pack"],
          ["leather armor"],
          ["1 simple weapon + 2 daggers"]
        ],
        special: [
          [
            "Otherworldly Patron",
            "1st lvl",
            "You have struck a bargain with an otherwordly being of your choice: the Archfey, the Fiend, the Great Old One, the Celestial, the Hexbalde are among some of them."
          ],
          [
            "Pact Magic",
            "1st lvl",
            "Gain magic bestowed on you by your chosen patron."
          ],
          [
            "Eldritch Invocations",
            "2nd lvl",
            "In your study of occult lore, you have unearthed fragments of forbidden knowledge and gained access to special magical traits."
          ]
        ],
        _spell: {
          ability: "cha",
          cantrips: 2,
          known: 2,
          slots: 1,
          ritual: false,
          focus: "arcane focus"
        }
      }
    ]
  ],
  [
    "Controllers",
    [
      {
        id: "druid",
        primary: "Wisdom",
        hp: 3,
        armor: 3,
        weapon: 2,
        magic: 4,
        versatile: 4,
        save: ["Intelligence", "Wisdom"],
        skill: [
          2,
          ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"]
        ],
        tool: ["Herbalism kit"],
        equip: [
          ["wooden mini-shield", "or 1 simple weapon"],
          ["scimitar", "or 1 simple weapon"],
          ["explorer's pack"],
          ["leather armor + druidic focus"]
        ],
        special: [
          [
            "Wild Shape",
            "2nd lvl",
            "Magically assume the shape of a beast that you have seen before to replace your statistics with that of the beast while retaining your mental faculties."
          ],
          [
            "Druidic Magic",
            "1st lvl",
            "Drawing on the essence of nature itself, you cast spells that shape that essence to your will."
          ],
          [
            "Druid Circles",
            "2nd lvl",
            "Identify with a circle of druids like, for example, the Circle of the Land, the Circle of the Moon, the Circle of Dreams and the Circle of the Shepherd are among them."
          ]
        ],
        _spell: {
          ability: "wis",
          cantrips: 2,
          known: 0,
          slots: 2,
          ritual: true,
          focus: "druidic focus"
        }
      },
      {
        id: "sorcerer",
        primary: "Charisma",
        hp: 2,
        armor: 1,
        weapon: 1,
        magic: 4,
        versatile: 4,
        save: ["Constitution", "Charisma"],
        skill: [
          2,
          ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"]
        ],
        tool: ["None"],
        equip: [
          ["light crossbow + 20 bolts", "or 1 simple weapon"],
          ["component pouch", "or arcane focus"],
          ["dungeoneer's pack", "or explorer's pack"],
          ["2 daggers"]
        ],
        special: [
          [
            "Sorcerous Origin",
            "1st lvl",
            "Choose a sorcerous origin that descries the source of your innate magical power: Draconic Bloodline, Wild Magic, Divine Soul, Shadow Magic and Storm Sorcery."
          ],
          [
            "Sorcery Points",
            "2nd lvl",
            "Tap into a deep wellspring of magic within yourself to create a variety of magical effects."
          ],
          [
            "Metamagic",
            "3rd lvl",
            "You gain the ability to twist and change your spells to suit your needs."
          ]
        ],
        _spell: {
          ability: "cha",
          cantrips: 4,
          known: 2,
          slots: 2,
          ritual: false,
          focus: "arcane focus"
        }
      },
      {
        id: "wizard",
        primary: "Intelligence",
        hp: 2,
        armor: 1,
        weapon: 1,
        magic: 5,
        versatile: 3,
        save: ["Intelligence", "Wisdom"],
        skill: [
          2,
          ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"]
        ],
        tool: ["None"],
        equip: [
          ["quarterstaff", "or 1 dagger"],
          ["component pouch", "or arcane focus"],
          ["scholar's pack", "or explorer's pack"],
          ["spellbook"]
        ],
        special: [
          [
            "Spellbook",
            "1st lvl",
            "Special tome that reflects the arcane research and spells you have learned, copied... maybe even created."
          ],
          [
            "Arcane Recovery",
            "1st lvl",
            "Study your spellbook for some time during a short rest and regain some of your magical energy."
          ],
          [
            "Arcane Tradition",
            "2nd lvl",
            "Choose an arcane tradition, shaping your practice of magic through one of the eight schools of magic: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion and Necromancy."
          ]
        ],
        _spell: {
          ability: "int",
          cantrips: 3,
          known: 6,
          slots: 2,
          ritual: true,
          focus: "arcane focus"
        }
      }
    ]
  ]
];

