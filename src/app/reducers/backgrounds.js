import BACKGROUNDS from '../data/backgrounds.js';

const defaultBack = {
  chosen: 'none',
};

const backgroundReducer = (state = defaultBack, action) => {
  switch (action.type) {
  case 'DISPLAY_CHOSEN_BACKGROUND':

    // loop through each category inside backgrounds data

    for (let category of BACKGROUNDS) {
      let options = category[1];

      // loop through each item inside said category options

      for (let item of options) {
        // find the one that matches user choice

        if (item.id == action.choice) {
          // return new copy of background state
          // with the chosen background data

          return Object.assign({}, state, {chosen: item});
        }
      }
    }
    break;

  default:
    return state;
  }
};

export default backgroundReducer;
