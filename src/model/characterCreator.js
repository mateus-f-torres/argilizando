function characterCreator() {
  const state = {
    name: '', // last big choice
    characterRace: {}, // first big choice
    characterClass: {}, // second big choice
    abilityScores: {}, // third big choice
    characterBackground: {}, // fourth big choice

    level: 1, // default starter level
    hitPoints: 0, // from class hitDice and Constitution score bonus
    hitDice: '', // from class
    armorClass: 0, // from equip or class feature
    speed: 0, // from race
    initiative: 0, // from Dexterity score bonus
    proficiency: 2, // default starter proficiency
    savingThrows: [], // ability scores bonus + proficiency
    skills: [], // ability scores bonus + proficiency
    passivePerception: 0, // Wisdom score bonus + some default value
    languages: [], // background and race feature
    tools: [], // background and class feature

    traits: [], // race, class and background features
    features: [], // race, class and background features
    equipment: {}, // class and background features (gear, backpack, money)
    spellcasting: {}, // class and ability scores
    roleplaying: {} // player flavor
  }
}

export default characterCreator;
