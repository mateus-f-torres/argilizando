// action vai criar keys com os nomes dos params
export const incrementScore = (ability) => ({
  type: 'INCREMENT_SCORE',
  ability
})

export const decrementScore = (ability) => ({
  type: 'DECREMENT_SCORE',
  ability
})

export const toggleDescription = (ability) => ({
  type: 'TOGGLE_DESCRIPTION',
  ability
})

export const displayRace = (race) => ({
  type: 'DISPLAY_RACE',
  race
})

export const showRaceSelection = () => ({
  type: 'SHOW_RACE_SELECTION'
})

export const showMenu = () => ({
  type: 'SHOW_MENU_SCREEN'
})

export const showRace = () => ({
  type: 'SHOW_RACE_SCREEN'
})

export const showScore = () => ({
  type: 'SHOW_SCORE_SCREEN'
})
