export default [
  [
    "Literate",
    [
      {
        id: "acolyte",
        name: "Acolyte",
        pitch: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.",
        personality: "I quote sacred texts",
        ideals: "I always try to help those in need",
        bonds: "I will protect my faiths' temples",
        flaws: "I am inflexible in my thinking",
        skill: ["Insight", "Religion"],
        lang: [2, "Two of your choice"],
        equip: [
          ["holy symbol"],
          ["prayer book", "or prayer wheel"],
          ["5 sticks of incense"],
          ["vestments"],
          ["set of common clothes"],
          ["belt pouch containing 15gp"]
        ],
        _gold : 15
      },
      {
        id: "heretic",
        name: "Heretic",
        pitch: "You believe in a doctrine outlawed by your faith, taught to you in secret by other heretics.",
        personality: "The end of the world is nigh",
        ideals: "I must teach others my forbidden doctrine",
        bonds: "I used to be friends with a cleric",
        flaws: "I'm deeply superstitious",
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
        ],
        _gold: 10
      },
      {
        id: "noble",
        name: "Noble",
        pitch: "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.",
        personality: "My favor, once lost, is lost forever",
        ideals: "Blood runs thicker than water",
        bonds: "My loyalty to my familty is unwavering",
        flaws: "I know how to ruin my family forever",
        skill: ["History", "Persuasion"],
        tool: ["One gaming set"],
        lang: [1, "One of your choice"],
        equip: [
          ["set of fine clothes"],
          ["signet ring"],
          ["scroll of pedigree"],
          ["purse containing 25gp"]
        ],
        _gold: 25,
        _tools: {
          gaming: true
        }
      },
      {
        id: "sage",
        name: "Sage",
        pitch: "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
        personality: "I'm horribly awkward in social situations",
        ideals: "Emotions must not cloud logic",
        bonds: "My duty is to protect my students",
        flaws: "I speak without thinking",
        skill: ["Arcana", "History"],
        lang: [2, "Two of your choice"],
        equip: [
          ["bottle of black ink"],
          ["quill"],
          ["small knife"],
          ["letter from a dead colleague posing a question you have not yet been able to answer"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ],
        _gold: 10
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
        personality: "I pocket anything of value",
        ideals: "I never run the same con twice",
        bonds: "I have a child who doesn't know me",
        flaws: "I can't resist a pretty face",
        skill: ["Deception", "Sleight of Hand"],
        tool: ["Disguise kit", "Forgery kit"],
        equip: [
          ["set of fine clothes"],
          ["diguise kit"],
          ["10 bottles with colored liquid", "or set of weighted dice", "or deck of marked cards", "or ring of an imaginary duke"],
          ["belt pouch containing 15g"]
        ],
        _gold: 15,
        _tools: {
          unique: ["Disguise kit", "Forgery kit"]
        }
      },
      {
        id: "criminal",
        name: "Criminal",
        pitch: "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld.",
        personality: "I blow up quite easily",
        ideals: "Honour among thieves",
        bonds: "My gains go to support my family",
        flaws: "I have a 'tell' when I lie",
        skill: ["Deception", "Stealth"],
        tool: ["One type of gaming set", "Thieves' tools"],
        equip: [
          ["crowbar"],
          ["set of dark common clothes including a hood"],
          ["belt pouch containing 15gp"]
        ],
        _gold: 15,
        _tools: {
          gaming: true,
          unique: ["Thieves' tools"]
        }
      },
      {
        id: "entertainer",
        name: "Entertainer",
        pitch: "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them.",
        personality: "I know a story for every situation",
        ideals: "I'm only in it for the money and fame",
        bonds: "I want to be famous, whatever it takes",
        flaws: "I'll do anything to win fame and fortune",
        skill: ["Acrobatics", "Performance"],
        tool: ["Disguise kit", "One musical instrument"],
        equip: [
          ["musical instrument"],
          ["favor of an admirer (love letter, lock of hair or trinket)"],
          ["costume"],
          ["belt pouch containing 15gp"]
        ],
        _gold: 15,
        _tools: {
          musical: true,
          unique: ["Disguise kit"]
        }
      },
      {
        id: "guild",
        name: "Guild Artisan",
        pitch: "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order.",
        personality: "I like to talk at length about my profession",
        ideals: "I work hard to be the best at my art",
        bonds: "One day I will prove my greatness to my guild",
        flaws: "I'm horribly insecure about my art",
        skill: ["Insight", "Persuasion"],
        tool: ["One artisan's tools"],
        lang: [1, "One of your choice"],
        equip: [
          ["set of artisan's tools"],
          ["letter of introduction from your guild"],
          ["set of traveler's clothes"],
          ["belt pouch containing 15gp"]
        ],
        _gold: 15,
        _tools: {
          artisan: true
        }
      },
      {
        id: "sailor",
        name: "Sailor",
        pitch: "You sailed on a seagoing vessel for years. In that time, you faced clown mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths.",
        personality: "My language is as foul as an otyugh nest",
        ideals: "We all do the work, we all share the rewards",
        bonds: "I'll always remember my first ship",
        flaws: "Once I start drinking, it's hard to stop",
        skill: ["Athletics", "Perception"],
        tool: ["Navigator's tools", "Vehicles (water)"],
        equip: [
          ["belaying pin (club)"],
          ["50ft (15m) of silk rope"],
          ["lucky charm"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ],
        _gold: 10,
        _tools: {
          unique: ["Navigator's tools", "Vehicles (water)"]
        }
      },
      {
        id: "soldier",
        name: "Soldier",
        pitch: "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield.",
        personality: "I can stare down a hell hound without flinching",
        ideals: "We lay down our lives in defense of others",
        bonds: "My honor is my life",
        flaws: "There is an enemy that I fear",
        skill: ["Athletics", "Intimidation"],
        tool: ["One gaming set", "Vehicles (land)"],
        equip: [
          ["insignia of rank"],
          ["trophy from a fallen enemy"],
          ["set of bone dice", "or deck of cards"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ],
        _gold: 10,
        _tools: {
          gaming: true,
          unique: ["Vehicles (land)"]
        }
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
        personality: "I don't excite easily",
        ideals: "Life is short so live how you want",
        bonds: "I fear that which killed me",
        flaws: "Everything was better when I was dead",
        skill: ["History", "Intimidation"],
        lang: [2, "Two of your choice"],
        equip: [
          ["50ft (15m) of rope"],
          ["dirt from your grave in a vial"],
          ["set of common clothes"],
          ["two rare coins with which you were buried"],
          ["belt pouch with 5gp"]
        ],
        _gold: 5
      },
      {
        id: "polymorphed",
        name: "Polymorphed",
        pitch: "You were transformed into an animal or monster and lived that way for years.",
        personality: "I often speak in my head by accident",
        ideals: "To survive you must be the smartest or strongest",
        bonds: "I carry a piece of my old body",
        flaws: "I want to be back in my polymorphed form",
        skill: ["Survival", "Animal Handling"],
        lang: [2, "Two of your choice"],
        equip: [
          ["bag of caltrops"],
          ["realistic ink drawing of your polymorphed form"],
          ["set of common clothes"],
          ["belt pouch with 5gp"]
        ],
        _gold: 5
      },
      {
        id: "hermit",
        name: "Hermit",
        pitch: "You lived in seclusion—either in a sheltered community such as a monastery, or entirely alone—for a formative part of your life.",
        personality: "I'm oblivious to etiquette or social expectations",
        ideals: "Inquiry and curiosity are pillars of progress",
        bonds: "I'm still seeking enlightenment",
        flaws: "I'm dogmatic in my thoughts and philosophy",
        skill: ["Medicine", "Religion"],
        tool: ["Herbalism kit"],
        lang: [1, "One of your choice"],
        equip: [
          ["scroll case stuffed full of notes from you studies or prayers"],
          ["winter blanket"],
          ["set of common clothes"],
          ["herbalism kit"],
          ["5gp"]
        ],
        _gold: 5,
        _tools: {
          unique: ["Herbalism kit"]
        }
      },
      {
        id: "outlander",
        name: "Outlander",
        pitch: "You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction.",
        personality: "I was, in fact, raised by wolves",
        ideals: "The strongest are meant to rule",
        bonds: "I am the last of my tribe",
        flaws: "Violence is my answer to challenge",
        skill: ["Athletics", "Survival"],
        tool: ["One musical instrument"],
        lang: [1, "One of your choice"],
        equip: [
          ["staff"],
          ["hunting trap"],
          ["animal trophy"],
          ["set of traveler's clothes"],
          ["belt pouch containing 10gp"]
        ],
        _gold: 10,
        _tools: {
          musical: true
        }
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
        personality: "I judge people by their actions",
        ideals: "People deserve dignity and respect",
        bonds: "I protect those who cannot protect themselves",
        flaws: "I'm weak against the vices of the city",
        skill: ["Animal Handling", "Survival"],
        tool: ["One artisan's tools", "Vehicles (land)"],
        equip: [
          ["set of artisan's tools"],
          ["shovel"],
          ["iron pot"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ],
        _gold: 10,
        _tools: {
          artisan: true,
          unique: ["Vehicles (land)"]
        }
      },
      {
        id: "legendary",
        name: "Legendary Lineage",
        pitch: "You have heroes in your family background and the story of your ancestors is known far and wide.",
        personality: "I like those that fawn over me",
        ideals: "I will uphold my family name",
        bonds: "I wield my ancestor's weapon",
        flaws: "I put down others to boost my own confidence",
        skill: ["Athletics", "History"],
        tool: ["Vehicles (land)"],
        lang: [1, "One of your choice"],
        equip: [
          ["set of traveler's clothes"],
          ["wood figure of an ancestor"],
          ["signet ring"],
          ["one gaming set"],
          ["belt pouch containing 15gp"]
        ],
        _gold: 15,
        _tools: {
          unique: ["Vehicles (land)"]
        }
      },
      {
        id: "retired",
        name: "Retired Adventurer",
        pitch: "You have lived a life of adventure already and retired to something quieter. You thought you were done and to that end may have given away all your old gear and spent all your treasure. Little did you know something would pull you back into your old life.",
        personality: "Younger ones need my advice",
        ideals: "We don't need to kill each other",
        bonds: "I never found that item that I wanted",
        flaws: "Ale is my very, very best friend",
        skill: ["History", "Insight"],
        tool: ["One gaming set"],
        lang: [1, "One of your choice"],
        equip: [
          ["old map to a secret dungeon you never got around to visiting"],
          ["set of common clothes"],
          ["set of bone dice", "or deck of cards"],
          ["purse containing 25gp"]
        ],
        _gold: 25,
        _tools: {
          gaming: true
        }
      },
      {
        id: "urchin",
        name: "Urchin",
        pitch: "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself.",
        personality: "I hide scraps of food in my pockets",
        ideals: "The rich need to suffer",
        bonds: "I sponsor an orphanage that helped me",
        flaws: "I will never fully trust anyone",
        skill: ["Sleight of Hand", "Stealth"],
        tool: ["Disguise kit", "Thieves' tools"],
        equip: [
          ["small knife (d2)"],
          ["map of the city you grew up in"],
          ["pet mouse"],
          ["token to remember your parents"],
          ["set of common clothes"],
          ["belt pouch containing 10gp"]
        ],
        _gold: 10,
        _tools: {
          unique: ["Disguise kit", "Thieves' tools"]
        }
      }
    ]
  ]
]

