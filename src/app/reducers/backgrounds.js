import BACKGROUNDS from '../data/backgrounds.js';

const defaultBack = {
  show: false,
  chosen: "none"
};

const backgroundReducer = (state = defaultBack, action) => {
  switch(action.type) {
    case 'DISPLAY_BACKGROUND':
      for(let category of BACKGROUNDS) {
        let options = category[1];
        for(let item of options) {
          if(item.id == action.choice) {
            return Object.assign({}, state, {
              show: true,
              chosen: item
            })
          }
        }
      }
      break;

    case 'SHOW_BACKGROUND_SELECTION':
      return Object.assign({}, state, defaultBack)

    default:
      return state;
  }
}

export default backgroundReducer;
