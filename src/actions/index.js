// RACE

export const displayRace = (race) => ({
  type: 'DISPLAY_CHOSEN_RACE',
  payload: race,
});

// CLASS

export const displayClass = (_class) => ({
  type: 'DISPLAY_CHOSEN_CLASS',
  payload: _class,
});

// SCORE

export const incrementScore = (ability) => ({
  type: 'INCREMENT_ABILITY_SCORE',
  payload: ability,
});

export const decrementScore = (ability) => ({
  type: 'DECREMENT_ABILITY_SCORE',
  payload: ability,
});

export const toggleDescription = (ability) => ({
  type: 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
  payload: ability,
});

export const resetScore = () => ({
  type: 'RESET_ALL_ABILITY_SCORES',
});

// BACKGROUND

export const displayBackground = (choice) => ({
  type: 'DISPLAY_CHOSEN_BACKGROUND',
  payload: choice,
});

// CHARACTER

export const getCharacter = (char) => ({
  type: 'DISPLAY_CHARACTER',
  payload: char,
});

export const changeBody = (pair) => ({
  type: 'CHANGE_CHARACTER_BODY',
  payload: pair,
});

export const changePast = (pair) => ({
  type: 'CHANGE_CHARACTER_PAST',
  payload: pair,
});

export const changeSkill = (pair) => ({
  type: 'CHANGE_CHARACTER_SKILL',
  payload: pair,
});

export const changeLang = (pair) => ({
  type: 'CHANGE_CHARACTER_LANG',
  payload: pair,
});

export const changeTool = (pair) => ({
  type: 'CHANGE_CHARACTER_TOOL',
  payload: pair,
});

export const changePack = (pack) => ({
  type: 'CHANGE_CHARACTER_PACK',
  payload: pack,
});

export const changeGear = (gear) => ({
  type: 'CHANGE_CHARACTER_GEAR',
  payload: gear,
});

export const changeName = (name) => ({
  type: 'CHANGE_CHARACTER_NAME',
  payload: name,
});

// DONE

export const lockRace = (race) => ({
  type: 'LOCK_RACE',
  payload: race,
});

export const lockClass = (_class) => ({
  type: 'LOCK_CLASS',
  payload: _class,
});

export const lockScore = (lock) => ({
  type: 'LOCK_SCORE',
  payload: lock,
});

export const lockBackground = (lock) => ({
  type: 'LOCK_BACKGROUND',
  payload: lock,
});

export const lockCharacter = (lock) => ({
  type: 'LOCK_CHARACTER',
  payload: lock,
});
