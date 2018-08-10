/*

1. Player Race actions
2. Player Class actions
3. Ability Score actions
4. Player Background actions
5. Character Create actions

*/
// RACE

export const displayRace = (choice) => ({
  type: 'DISPLAY_CHOSEN_RACE',
  choice,
});

export const lockRace = (lock) => ({
  type: 'LOCK_RACE',
  lock,
});

// CLASS

export const displayClass = (choice) => ({
  type: 'DISPLAY_CHOSEN_CLASS',
  choice,
});

export const lockClass = (lock) => ({
  type: 'LOCK_CLASS',
  lock,
});

// ABILITY SCORE

export const incrementScore = (ability) => ({
  type: 'INCREMENT_ABILITY_SCORE',
  ability,
});

export const decrementScore = (ability) => ({
  type: 'DECREMENT_ABILITY_SCORE',
  ability,
});

export const toggleDescription = (ability) => ({
  type: 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
  ability,
});

export const resetScore = () => ({
  type: 'RESET_ALL_ABILITY_SCORES',
});

export const lockScore = (lock) => ({
  type: 'LOCK_SCORE',
  lock,
});

// BACKGROUND

export const displayBackground = (choice) => ({
  type: 'DISPLAY_CHOSEN_BACKGROUND',
  choice,
});

export const lockBackground = (lock) => ({
  type: 'LOCK_BACKGROUND',
  lock,
});

// CHARACTER

export const getCharacter = (char) => ({
  type: 'DISPLAY_CHARACTER',
  char,
});

export const changeBody = (pair) => ({
  type: 'CHANGE_CHARACTER_BODY',
  pair,
});

export const changePast = (pair) => ({
  type: 'CHANGE_CHARACTER_PAST',
  pair,
});

export const changeSkill = (pair) => ({
  type: 'CHANGE_CHARACTER_SKILL',
  pair,
});

export const changeLang = (pair) => ({
  type: 'CHANGE_CHARACTER_LANG',
  pair,
});

export const changeTool = (pair) => ({
  type: 'CHANGE_CHARACTER_TOOL',
  pair,
});

export const changePack = (pack) => ({
  type: 'CHANGE_CHARACTER_PACK',
  pack,
});

export const changeGear = (gear) => ({
  type: 'CHANGE_CHARACTER_GEAR',
  gear,
});

export const changeName = (name) => ({
  type: 'CHANGE_CHARACTER_NAME',
  name,
});

export const lockCharacter = (lock) => ({
  type: 'LOCK_CHARACTER',
  lock,
});
