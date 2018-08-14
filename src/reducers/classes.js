//@flow
import CLASSES from '../data/classes.js';
import type {_Class} from '../types/props.js';
import type {ClassAction} from '../types/actions.js';

type State = {} | _Class;

const classReducer = (state: State = {}, action: ClassAction) => {
  switch (action.type) {
  case 'DISPLAY_CHOSEN_CLASS':

    // loop through each category inside classes data

    for (let category of CLASSES) {
      let options = category[1];

      // loop through each item inside said category options

      for (let item of options) {
        // find the one that matches user choice

        if (item.id == action.payload) {
          // return new copy of gameClass state
          // with the chosen class data

          return Object.assign({}, state, item);
        }
      }
    }
    break;

  default:
    return state;
  }
};

export default classReducer;
