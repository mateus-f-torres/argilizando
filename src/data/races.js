export default [
  [
    'Common Races',
    [
      {
        name: 'Human',
        id: 'human',
        age: [20, 80],
        size: 'Medium',
        height: '6ft (1,7m)',
        weight: '180lb (80kg)',
        eyes: 'All human variations',
        skin: 'All human variations',
        hair: 'All human variations',
        _placeholder: 'Salazar Marivaldi',
        speed: 30,
        lang: ['Common', '..'],
        special: [
          [
            'Bonus Skill',
            `You gain proficiency in one additional skill 
            from your class skill list.`,
          ],
          [
            'Magical Affinity',
            `Whenever you are 5ft from a magical item you can sense 
            its magic through one of your senses. 
            Once per short rest you can increase the range of this feature 
            to 30ft for 1min, after that you lose this feature and 
            must finish a short rest to regain its passive effect. 
            Using this feature only tells you if something is magical or not, 
            nothing more than that.`,
          ],
          [
            'Grit',
            `You can use your reaction to gain advantage on a 
            saving throw against a spell. 
            You must roll a 5 or 6 on a d6 to use this feature again.`,
          ],
        ],
      },
      {
        name: 'Halfling',
        id: 'halfling',
        age: [20, 150],
        size: 'Medium',
        height: '3ft (1m)',
        weight: '40lb (20kg)',
        eyes: 'Brown or hazel eyes',
        skin: 'Tan to pale',
        hair: 'Usually brown and wavy',
        _placeholder: 'Merla Greenbottle',
        speed: 25,
        lang: ['Common', 'Halfling'],
        special: [
          [
            'Lucky',
            `When you roll a 1 on an attack roll, ability check 
            or saving throw, you can reroll the die and must use the new roll. 
            Once you use this feature you can't use it again until 
            you finish a short rest.`,
          ],
          [
            'Brave',
            `You have advantage on saving throws against being frightened.`,
          ],
          [
            'Second Chance',
            `When a creature you can see hits you with an attack roll, 
            you can use your reaction to force that creature to reroll. 
            You can only use this feature once per combat.`,
          ],
        ],
      },
      {
        name: 'Dwarf',
        id: 'dwarf',
        age: [50, 350],
        size: 'Medium',
        height: '4ft (1,3m)',
        weight: '150lb (70kg)',
        eyes: 'Solid and enduring eyes',
        skin: 'Tones of earth to paler hues',
        hair: 'Worn long but simple',
        _placeholder: 'Helja Fireforge',
        speed: 25,
        lang: ['Common', 'Dwarvish'],
        special: [
          [
            'Dwarven Toughness',
            `Your hit point maximum increases by 1, 
            and it increases by 1 every time you gain a level.`,
          ],
          [
            'Dwarven Fortitude',
            `Whenever you take the Dodge action in combat, 
            you can spend one Hit Die to heal yourself. 
            You must roll a 5 or 6 on d6 to use this feature again.`,
          ],
          [
            'Steadfast',
            `When an effect forces you to move, through a pull, push 
            or a slide, you move 5ft less than the effect specifies. 
            In addition, when a attack would knock you prone, 
            you can immediately make a saving throw to avoid falling prone.`,
          ],
        ],
      },
      {
        name: 'Elf',
        id: 'elf',
        age: [100, 750],
        size: 'Medium',
        height: '6ft (1,8m)',
        weight: '140lb (65kg)',
        eyes: 'Hauntigly beautiful',
        skin: 'Little to no body hair',
        hair: 'As varied as spring flowers',
        _placeholder: 'Galinndan Ilphelkiir',
        speed: 35,
        lang: ['Common', 'Elvish'],
        special: [
          [
            'Fey Ancestry',
            `You have advantage on saving throws against being charmed.`,
          ],
          [
            'Elven Accuracy',
            `Whenever you have advantage on an attack roll, 
            you can reroll one of the attack dice.`,
          ],
          [
            'Elf Magic',
            `You know one cantrip of your choice from the druid spell list. 
            Wisdom is your spellcasting ability for this spell.`,
          ],
        ],
      },
      {
        name: 'Aasimar',
        id: 'aasimar',
        age: [20, 160],
        size: 'Medium',
        height: '6ft (1,7m)',
        weight: '180lb (80kg)',
        eyes: 'Pupiless solid white',
        skin: 'Topaz like skin',
        hair: 'Uncommonly beautiful',
        _placeholder: 'Leora',
        speed: 30,
        lang: ['Common', 'Celestial'],
        special: [
          [
            'False Appearance',
            `While you aren't using any of your other race traits 
            you can contain your celestial heritage to appear 
            indistinguishable from a normal human.`,
          ],
          [
            'Healing Hands',
            `As an action, you can touch a creature and 
            cause it to regain hit points equal to 
            your two times your lvl + Constitution modifier. 
            Once you use this trait, you can't use it again until 
            you finish a short rest.`,
          ],
          [
            'Celestial Resistance',
            `You have resistance to radiant damage.`,
          ],
          [
            'Radiant Soul',
            `Starting at 3rd lvl, you can use your action 
            to unleash the divine energy within yourself, 
            causing two luminous, incorporeal wings to sprout from your back. 
            This transformation last for 1min or until you end it 
            as a bonus action. During it, you have a flying speed of 30ft 
            and once on each of your turns, you can deal extra 
            radiant damage to one target. 
            The extra damage is equal to 1d4 + your lvl. 
            You can use this trait once per day.`,
          ],
        ],
      },
      {
        name: 'Tiefling',
        id: 'tiefling',
        age: [20, 160],
        size: 'Medium',
        height: '6ft (1,7m)',
        weight: '180lb (80kg)',
        eyes: 'Lightless void',
        skin: 'Reddish skin',
        hair: 'Behind their horns',
        _placeholder: 'Damakos',
        speed: 30,
        lang: ['Common', 'Infernal'],
        special: [
          [
            'False Appearance',
            `While you aren't using any of your other race traits 
            you can contain your fiendish heritage to appear 
            indistinguishable from a normal human.`,
          ],
          [
            'Cursed Hands',
            `As an action, you can make an attack roll to touch a creature 
            and drain from it hit points equal to 
            three times your lvl + Constitution modifier. 
            Once you use this trait, you can't use it again until 
            you finish a short rest.`,
          ],
          [
            'Hellish Resistance',
            `You have resistance to fire damage.`,
          ],
          [
            'Infernal Soul',
            `Starting at 3rd lvl, you can use your action to 
            unleash the infernal energy within yourself, 
            causing two dark, leathery wings to sprout from your back. 
            This transformation last for 1min or until you end it 
            as a bonus action. During it, you have a flying speed of 30ft 
            and once on each of your turns, you can deal extra fire damage 
            to one target. The extra damage is equal to 1d4 + your lvl. 
            You can use this trait once per day.`,
          ],
        ],
      },
    ],
  ],
  [
    'Uncommon Races',
    [
      {
        name: 'Dragonborn',
        id: 'dragonborn',
        age: [15, 80],
        size: 'Medium',
        height: '7ft (2m)',
        weight: '250lb (120kg)',
        eyes: 'Reptilian eyes',
        skin: 'Small, fine scales',
        hair: 'Crest of hornlike scales',
        _placeholder: 'Balasar Kepeshk',
        speed: 30,
        lang: ['Draconic', 'Common'],
        special: [
          [
            'Dragon Hide',
            `Your natural scales are as hard as armor. 
            When you aren't wearing armor, 
            your AC is equal to 13 + Dexterity modifier.`,
          ],
          [
            'Draconic Ancestry',
            `Choose one type of dragon to be your ancestor. 
            You have resistance to the damage type 
            associated with your ancestor and 
            your Breath Weapon deals that type of damage.`,
          ],
          [
            'Breath Weapon',
            `As a bonus action you can exhale destructive energy 
            in a 15ft cone. Every creature inside the area takes 2d6 damage. 
            Once you use this feature you can't use it again until 
            you finish a short rest.`,
          ],
        ],
      },
      {
        name: 'Goliath',
        id: 'goliath',
        age: [20, 70],
        size: 'Medium',
        height: '8ft (2,3m)',
        weight: '300lb (140kg)',
        eyes: 'Competitive eyes',
        skin: 'Gray with darker patches',
        hair: 'Hairless males',
        _placeholder: 'Lo-Kag Ogalakanu',
        speed: 30,
        lang: ['Giant', 'Common'],
        special: [
          [
            'Stone\'s Endurance',
            `When you take damage, you can use your reaction 
            to roll a d12 + Constitution modifier 
            and reduce the damage by that total. 
            After you use this trait, you can't use it again until 
            you finish a short rest.`,
          ],
          [
            'Mountain Born',
            `You're acclimated to the high altitudes 
            and cold climates of mountains. 
            You have resistance to cold damage 
            and are naturally adapted to cold climates.`,
          ],
        ],
      },
      {
        name: 'Gnome',
        id: 'gnome',
        age: [40, 400],
        size: 'Small',
        height: '3ft (0,7m)',
        weight: '40lb (18kg)',
        eyes: 'Shine with excitement',
        skin: 'Tan or brown faces',
        hair: 'Tendency to stick out',
        _placeholder: '\'Doublelock\' Tana',
        speed: 25,
        lang: ['Gnomish', 'Common'],
        special: [
          [
            'Fade Away',
            `Immediately after you take damage, you can use a reaction 
            to magically become invisible until the end of your next turn 
            or until you attack, deal damage 
            or force someone to make a saving throw. 
            Once you use this feature you can't do so again until 
            you finish a long rest.`,
          ],
          [
            'Natural Illusionist',
            `You know the minor illusion cantrip. 
            Intelligence is your spellcasting ability for it.`,
          ],
          [
            'Tinker',
            `You have proficiency with tinker's tools. 
            Using those tools, you can spend time and materials 
            working on projects to create clockwork mechanisms. 
            The time spend and material cost is always proportional 
            to the scope of the project.`,
          ],
        ],
      },
      {
        name: 'Kenku',
        id: 'kenku',
        age: [12, 60],
        size: 'Medium',
        height: '5ft (1,5m)',
        weight: '105lb (50kg)',
        eyes: 'Crow like eyes',
        skin: 'Bare scaled limbs',
        hair: 'Covered in feathers',
        _placeholder: 'Dragon Swoop',
        speed: 30,
        lang: ['Common', 'Auran'],
        special: [
          [
            'Ambusher',
            `You gain advantage on any attacks against 
            opponent that have not acted yet.`,
          ],
          [
            'Mimicry',
            `You can mimic sounds you have heard, including voices. 
            A creature that hears the sounds you make can tell 
            they are imitations with a successful Wisdom (Insight) check 
            VS your Charisma (Deception) check.`,
          ],
        ],
      },
      {
        name: 'Lizardfolk',
        id: 'lizardfolk',
        age: [14, 60],
        size: 'Medium',
        height: '6ft (1,8m)',
        weight: '180lb (90kg)',
        eyes: 'Reptilian eyes',
        skin: 'Varied colors of scales',
        hair: 'Reptilian crest',
        _placeholder: 'Othokent',
        speed: 30,
        lang: ['Draconic', 'Common'],
        special: [
          [
            'Hungry Jaws',
            `As an action you use your fanged maw to make a unarmed attack. 
            If you hit with it, you deal 1d4 + Strength modifier 
            piercing damage and gain temporary hit points equal 
            to the damage dealt. 
            To use this trait again you must get a 5 or 6 on the d6.`,
          ],
          [
            'Hold Breath',
            `You can hold your breath for up to 15 minutes`,
          ],
          [
            'Natural Armor',
            `You have tough, scaly skin. When you aren't wearing armor, 
            your AC is 12 + Dexterity modifier.`,
          ],
        ],
      },
      {
        name: 'Tabaxi',
        id: 'tabaxi',
        age: [18, 70],
        size: 'Medium',
        height: '6ft (1,8m)',
        weight: '130lb (60kg)',
        eyes: 'Feline eyes',
        skin: 'Covered in fur',
        hair: 'Spotted or striped fur',
        _placeholder: 'Night of Dreams',
        speed: 30,
        lang: ['Common', '..'],
        special: [
          [
            'Feline Agility',
            `With a burst of speed you move double you speed until 
            the end of the turn. 
            Once you use this trait, you can't use it again until 
            you move 0 feet in one of your turns.`,
          ],
          [
            'Cat\'s Grip',
            `Because of your claws, you have a climbing speed 
            of 20 feet on irregular surfaces.`,
          ],
          [
            'Cat\'s Claws',
            `You can use your claws to make unarmed strikes. 
            If you hit, you deal 1d6 + Strength modifier slashing damage.`,
          ],
        ],
      },
    ],
  ],
  [
    'Monstrous Races',
    [
      {
        name: 'Goblin',
        id: 'goblin',
        age: [8, 60],
        size: 'Small',
        height: '3ft (0,8m)',
        weight: '60lb (30kg)',
        eyes: 'Light red or dark yellow',
        skin: 'Shades of orange, red or yellow',
        hair: 'Dark hair',
        _placeholder: 'Tryx',
        speed: 30,
        lang: ['Goblin', 'Common'],
        special: [
          [
            'Fury of the Small',
            `When you damage a creature and the creature's size is 
            larger than yours, you can cause the attack or spell to 
            deal extra damage equal to your lvl + 1d6. 
            To use this trait again you must get 5 or 6 on the d6.`,
          ],
          [
            'Redirect Attack',
            `When a creature you can see targets you with an attack, 
            you can use your reaction to chose an ally within 5ft 
            to change places with you. 
            Your chosen ally becomes the target of that attack. 
            You can only use this trait once per combat.`,
          ],
        ],
      },
      {
        name: 'Orc',
        id: 'orc',
        age: [12, 50],
        size: 'Medium',
        height: '6ft (1,8m)',
        weight: '250lb (120kg)',
        eyes: 'Light red or dark yellow',
        skin: 'Grayish skin tones',
        hair: 'Dark hair',
        _placeholder: 'Dholvang',
        speed: 30,
        lang: ['Orc', 'Common'],
        special: [
          [
            'Aggressive',
            `As a bonus action, you can move up to your speed toward an 
            enemy that you can see or hear. 
            You must end this move closer to the enemy.`,
          ],
          [
            'Relentless Endurance',
            `When you are reduced to 0 hit points but not killed outright, 
            you can drop to 1 hit point instead. 
            You can't use this feature again until you finish a long rest.`,
          ],
        ],
      },
      {
        name: 'Bugbear',
        id: 'bugbear',
        age: [16, 80],
        size: 'Medium',
        height: '7ft (2m)',
        weight: '300lb (140kg)',
        eyes: 'Light red or dark yellow',
        skin: 'Yellow to reddish fur',
        hair: 'Different colored fur',
        _placeholder: 'Malka\'vec',
        speed: 30,
        lang: ['Goblin', 'Common'],
        special: [
          [
            'Long-Limbed',
            `You reach is 5 feet greater than normal with melee attacks.`,
          ],
          [
            'Surprise Attack',
            `If you surprise a creature and hit it with an attack 
            on you first turn in combat, the attack deals an extra 2d6 damage. 
            You can use this trait once for combat.`,
          ],
        ],
      },
      {
        name: 'Hobgoblin',
        id: 'hobgoblin',
        age: [16, 70],
        size: 'Medium',
        height: '6ft (1,7m)',
        weight: '180lb (80kg)',
        eyes: 'Light red or dark yellow',
        skin: 'Orange to reddish-brown',
        hair: 'Dark hair',
        _placeholder: 'Wera',
        speed: 30,
        lang: ['Goblin', 'Common'],
        special: [
          [
            'Saving Face',
            `If you miss an attack roll, fail an ability check or 
            lose a saving throw, you can gain a bonus to the roll equal 
            to the number of allies that you can see within 30ft (max +5). 
            You must take a short rest to use this trait again.`,
          ],
          [
            'Martial Advantage',
            `If an ally of yours, that isn't incapacitated, 
            is within 5ft of the same enemy you are attacking, 
            you can deal an extra 2d6 damage to the enemy. 
            You can use this trait once per combat.`,
          ],
        ],
      },
      {
        name: 'Kobold',
        id: 'kobold',
        age: [6, 120],
        size: 'Small',
        height: '3ft (0,7m)',
        weight: '30lb (15kg)',
        eyes: 'Burnt orange reptilian eyes',
        skin: 'Scaled skin',
        hair: 'Might have small horns',
        _placeholder: 'Ritra',
        speed: 35,
        lang: ['Draconic', 'Common'],
        special: [
          [
            'Grovel, Cower, and Beg',
            `As an action you can cower pathetically to distract nearby foes. 
            Until the end of your next turn, your allies gain advantage 
            on attack rolls against enemies within 10ft of you 
            that can see you. You can use this trait once per combat.`,
          ],
          [
            'Pack Tactics',
            `You have advantage on an attack roll against a creature 
            if at least one of your allies is within 5 ft of it 
            and the ally isn't incapacitated.`,
          ],
        ],
      },
      {
        name: 'Yuan-ti Pureblood',
        id: 'yuanti',
        age: [16, 70],
        size: 'Medium',
        height: '5ft (1,6m)',
        weight: '120lb (55kg)',
        eyes: 'Might have snake like eyes',
        skin: 'Might have scaly skin',
        hair: 'Tends to slick or straight hair',
        _placeholder: 'Nihlahash',
        speed: 30,
        lang: ['Draconic', 'Common'],
        special: [
          [
            'Shapechanger',
            `You can use your action to Wild Shape into a poisonous snake. 
            This tranformation can last up to 1 hour. 
            You can only use this trait once per day.`,
          ],
          [
            'Poison Immunity',
            `You are immune to poison damage and the poisoned condition.`,
          ],
          [
            'Snake Charmer',
            `You can cast animal friendship an unlimited number of times 
            but only on snakes. 
            Charisma is your spellcasting ability for these spells.`,
          ],
        ],
      },
    ],
  ],
];

