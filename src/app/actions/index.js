/*

1. Menu actions
2. Player Race actions
3. Player Class actions
4. Ability Score actions
5. Player Background actions
6. Character Create actions
7. Final Character screen actions

*/

// MENU

export const showMenu = () => ({
  type: 'SHOW_MENU_SCREEN'
})

export const showRace = () => ({
  type: 'SHOW_RACE_SCREEN'
})

export const showScore = () => ({
  type: 'SHOW_SCORE_SCREEN'
})

export const showClass = () => ({
  type: 'SHOW_CLASS_SCREEN'
})

export const showBackground = () => ({
  type: 'SHOW_BACKGROUND_SCREEN'
})

export const showCharacter = () => ({
  type: 'SHOW_CHARACTER_SCREEN'
})

export const showFinal = () => ({
  type: 'SHOW_FINAL_SCREEN'
})

// RACE

export const displayRace = (choice) => ({
  type: 'DISPLAY_CHOSEN_RACE',
  choice
})

export const showRaceSelection = () => ({
  type: 'DISPLAY_RACE_OPTIONS'
})

export const lockRace = (lock) => ({
  type: 'LOCK_RACE',
  lock
})

// CLASS

export const displayClass = (choice) => ({
  type: 'DISPLAY_CHOSEN_CLASS',
  choice
})

export const showClassSelection = () => ({
  type: 'DISPLAY_CLASS_OPTIONS'
})

export const lockClass = (lock) => ({
  type: 'LOCK_CLASS',
  lock
})

// ABILITY SCORE

export const incrementScore = (ability) => ({
  type: 'INCREMENT_ABILITY_SCORE',
  ability
})

export const decrementScore = (ability) => ({
  type: 'DECREMENT_ABILITY_SCORE',
  ability
})

export const toggleDescription = (ability) => ({
  type: 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
  ability
})

export const resetScore = () => ({
  type: 'RESET_ALL_ABILITY_SCORES'
}) 

export const lockScore = (lock) => ({
  type: 'LOCK_SCORE',
  lock
})

// BACKGROUND

export const displayBackground = (choice) => ({
  type: 'DISPLAY_CHOSEN_BACKGROUND',
  choice
})

export const showBackgroundSelection = () => ({
  type: 'DISPLAY_BACKGROUND_OPTIONS'
})

export const lockBackground = (lock) => ({
  type: 'LOCK_BACKGROUND',
  lock
})

// CHARACTER

export const getCharacter = (char) => ({
  type: 'DISPLAY_CHARACTER',
  char
})

export const lockCharacter = (lock) => ({
  type: 'LOCK_CHARACTER',
  lock
})

// FINAL

export const showMain = () => ({
  type: 'SHOW_MAIN_ELEMENTS'
})

export const showEquip = () => ({
  type: 'SHOW_EQUIP_ELEMENTS'
})

export const showSpell = () => ({
  type: 'SHOW_SPELL_ELEMENTS'
})

export const showTrait = () => ({
  type: 'SHOW_TRAIT_ELEMENTS'
})

export const showBody = () => ({
  type: 'SHOW_BODY_ELEMENTS'
})

export const showPast = () => ({
  type: 'SHOW_PAST_ELEMENTS'
})
