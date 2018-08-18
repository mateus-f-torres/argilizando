//@flow
import BACKGROUNDS from '../data/backgrounds.js';
import type {Background} from '../types/props.js';
import type {BackAction} from '../types/actions.js';

type State = {} | Background;

const backgroundReducer = (state: State = {}, action: BackAction) => {
  switch (action.type) {
  case 'DISPLAY_CHOSEN_BACKGROUND':

    // loop through each category inside backgrounds data

    for (let category of BACKGROUNDS) {
      let options = category[1];

      // loop through each item inside said category options

      for (let item of options) {
        // find the one that matches user choice

        if (item.id == action.payload) {
          // return new copy of background state
          // with the chosen background data

          return Object.assign({}, state, item);
        }
      }
    }
    // unknown background id
    return state;

  default:
    return state;
  }
};

export default backgroundReducer;
