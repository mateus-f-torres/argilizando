const defaultMenu = {
  menu: true,
  race: false,
  score: false,
  gameClass: false,
  background: false
};

const selectedMenu = {
  menu: false,
  race: false,
  score: false,
  gameClass: false,
  background: false
};

const menuReducer = (state = defaultMenu, action) => {
  switch(action.type) {
    case 'SHOW_MENU_SCREEN':
      return Object.assign({}, state, defaultMenu)
    case 'SHOW_RACE_SCREEN':
      return Object.assign({}, state, selectedMenu, { race: true })
    case 'SHOW_SCORE_SCREEN':  
      return Object.assign({}, state, selectedMenu, { score: true })
    case 'SHOW_CLASS_SCREEN':
      return Object.assign({}, state, selectedMenu, { gameClass: true })
    case 'SHOW_BACKGROUND_SCREEN':
      return Object.assign({}, state, selectedMenu, { background: true })
    default:
      return state;
  }
}

export default menuReducer;
