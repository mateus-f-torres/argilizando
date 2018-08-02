export default [
  [
    "Literate",
    [
      {
        id: "acolyte",
        name: "Acolyte",
        pitch: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.",
        skill: ["Insight", "Religion"],
        lang: [2, "Two of your choice"],
        equip: [
          ["holy symbol"],
          ["prayer book", "or prayer wheel"],
          ["5 sticks of incense"],
          ["vestments"],
          ["set of common clothes"],
          ["belt pouch containing 15gp"]
        ]
      },
      {
        id: "heretic",
        name: "Heretic",
        pitch: "You believe in a doctrine outlawed by your faith, taught to you in secret by other heretics.",
        skill: ["Deception", "Religion"],
        lang: [2, "Two of your choice"],
        equip: [
          ["modified holy symbol"],
          ["prayer book", "or prayer wheel"],
          ["vestments"],
          ["bottle of invisible ink"],
          ["quill"],
          ["set of common clothes"],
          ["pouch containing 10gp"]
        ]
      },
      {
        id: "noble",
        name: "Noble",
        pitch: "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.",
        skill: ["History", "Persuasion"],
        tool: ["One gaming set"],
        lang: [1, "One of your choice"],
        equip: [
          ["set of fine clothes"],
          ["signet ring"],
          ["scroll of pedigree"],
          ["purse containing 25gp"]
        ]
      },
      {
        id: "sage",
        name: "Sage",
        pitch: "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
        skill: ["Arcana", "History"],
        lang: [2, "Two of your choice"],
        equip: [
          ["bottle of black ink"],
          ["quill"],
          ["small knife"],
          ["letter from a dead colleague posing a question you have not yet been able to answer"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ]
      }
    ]
  ],
  [
    "Worker",
    [
      {
        id: "charlatan",
        name: "Charlatan",
        pitch: "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books.",
        skill: ["Deception", "Sleight of Hand"],
        tool: ["Disguise kit", "Forgery kit"],
        equip: [
          ["set of fine clothes"],
          ["diguise kit"],
          ["10 bottles with colored liquid", "or set of weighted dice", "or deck of marked cards", "or ring of an imaginary duke"],
          ["belt pouch containing 15g"]
        ]
      },
      {
        id: "criminal",
        name: "Criminal",
        pitch: "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld.",
        skill: ["Deception", "Stealth"],
        tool: ["One type of gaming set", "Thieves' tools"],
        equip: [
          ["crowbar"],
          ["set of dark common clothes including a hood"],
          ["belt pouch containing 15gp"]
        ]
      },
      {
        id: "entertainer",
        name: "Entertainer",
        pitch: "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them.",
        skill: ["Acrobatics", "Performance"],
        tool: ["Disguise kit", "One musical instrument"],
        equip: [
          ["musical instrument"],
          ["favor of an admirer (love letter, lock of hair or trinket)"],
          ["costume"],
          ["belt pouch containing 15gp"]
        ]
      },
      {
        id: "guild",
        name: "Guild Artisan",
        pitch: "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order.",
        skill: ["Insight", "Persuasion"],
        tool: ["One artisan's tools"],
        lang: [1, "One of your choice"],
        equip: [
          ["set of artisan's tools"],
          ["letter of introduction from your guild"],
          ["set of traveler's clothes"],
          ["belt pouch containing 15gp"]
        ]
      },
      {
        id: "sailor",
        name: "Sailor",
        pitch: "You sailed on a seagoing vessel for years. In that time, you faced clown mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths.",
        skill: ["Athletics", "Perception"],
        tool: ["Navigator's tools", "Vehicles (water)"],
        equip: [
          ["belaying pin (club)"],
          ["50ft (15m) of silk rope"],
          ["lucky charm"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ]
      },
      {
        id: "soldier",
        name: "Soldier",
        pitch: "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield.",
        skill: ["Athletics", "Intimidation"],
        tool: ["One gaming set", "Vehicles (land)"],
        equip: [
          ["insignia of rank"],
          ["trophy from a fallen enemy"],
          ["set of bone dice", "or deck of cards"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ]
      },

    ]
  ],
  [
    "Stranger",
    [
      {
        id: "dead",
        name: "Dead",
        pitch: "You died and came back.",
        skill: ["History", "Intimidation"],
        lang: [2, "Two of your choice"],
        equip: [
          ["50ft (15m) of rope"],
          ["dirt from your grave in a vial"],
          ["set of common clothes"],
          ["two rare coins with which you were buried"],
          ["belt pouch with 5gp"]
        ]
      },
      {
        id: "polymorphed",
        name: "Polymorphed",
        pitch: "You were transformed into an animal or monster and lived that way for years.",
        skill: ["Survival", "Animal Handling"],
        lang: [2, "Two of your choice"],
        equip: [
          ["bag of caltrops"],
          ["realistic ink drawing of your polymorphed form"],
          ["set of common clothes"],
          ["belt pouch with 5gp"]
        ]
      },
      {
        id: "hermit",
        name: "Hermit",
        pitch: "You lived in seclusion—either in a sheltered community such as a monastery, or entirely alone—for a formative part of your life.",
        skill: ["Medicine", "Religion"],
        tool: ["Herbalism kit"],
        lang: [1, "One of your choice"],
        equip: [
          ["scroll case stuffed full of notes from you studies or prayers"],
          ["winter blanket"],
          ["set of common clothes"],
          ["herbalism kit"],
          ["5gp"]
        ]
      },
      {
        id: "outlander",
        name: "Outlander",
        pitch: "You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction.",
        skill: ["Athletics", "Survival"],
        tool: ["One musical instrument"],
        lang: [1, "One of your choice"],
        equip: [
          ["staff"],
          ["hunting trap"],
          ["animal trophy"],
          ["set of traveler's clothes"],
          ["belt pouch containing 10gp"]
        ]
      },
    ]
  ],
  [
    "Remarkable",
    [
      {
        id: "folk",
        name: "Folk Hero",
        pitch: "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
        skill: ["Animal Handling", "Survival"],
        tool: ["One artisan's tools", "Vehicles (land)"],
        equip: [
          ["set of artisan's tools"],
          ["shovel"],
          ["iron pot"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ]
      },
      {
        id: "legendary",
        name: "Legendary Lineage",
        pitch: "You have heroes in your family background and the story of your ancestors is known far and wide.",
        skill: ["Athletics", "History"],
        tool: ["Vehicles (land)"],
        lang: [1, "One of your choice"],
        equip: [
          ["set of traveler's clothes"],
          ["wood figure of an ancestor"],
          ["signet ring"],
          ["one gaming set"],
          ["belt pouch containing 15gp"]
        ]
      },
      {
        id: "retired",
        name: "Retired Adventurer",
        pitch: "You have lived a life of adventure already and retired to something quieter. You thought you were done and to that end may have given away all your old gear and spent all your treasure. Little did you know something would pull you back into your old life.",
        skill: ["History", "Insight"],
        tool: ["One gaming set"],
        lang: [1, "One of your choice"],
        equip: [
          ["old map to a secret dungeon you never got around to visiting"],
          ["set of common clothes"],
          ["set of bone dice", "or deck of cards"],
          ["purse containing 25gp"]
        ]
      },
      {
        id: "urchin",
        name: "Urchin",
        pitch: "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself.",
        skill: ["Sleight of Hand", "Stealth"],
        tool: ["Disguise kit", "Thieves' tools"],
        equip: [
          ["small knife (d2)"],
          ["map of the city you grew up in"],
          ["pet mouse"],
          ["token to remember your parents"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ]
      }
    ]
  ]
]

