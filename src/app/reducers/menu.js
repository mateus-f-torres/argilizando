
// each key inside menu state is a show/hide switch for the view

const defaultMenu = {
  menu: true,
  race: false,
  score: false,
  gameClass: false,
  background: false,
  create: false
};

// hide all screeens so you can then override selected screen key

const selectedMenu = {
  menu: false,
  race: false,
  score: false,
  gameClass: false,
  background: false,
  create: false
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

    case 'SHOW_CREATE_SCREEN':
      return Object.assign({}, state, selectedMenu, { create: true })

    default:
      return state;
  }
}

export default menuReducer;
