export const resetScore = () => ({
  type: 'RESET_SCORE'
}) 

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

export const displayClass = (choice) => ({
  type: 'DISPLAY_CLASS',
  choice
})

export const showClassSelection = () => ({
  type: 'SHOW_CLASS_SELECTION'
})

export const doneClass = () => ({
  type: 'DONE_CLASS'
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

export const showClass = () => ({
  type: 'SHOW_CLASS_SCREEN'
})

export const doneRace = () => ({
  type: 'DONE_RACE'
})

export const doneScore = () => ({
  type: 'DONE_SCORE'
})
