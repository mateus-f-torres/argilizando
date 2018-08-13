import CLASSES from '../data/classes.js';

const defaultClass = {
  chosen: 'none',
};

const classReducer = (state = defaultClass, action) => {
  switch (action.type) {
  case 'DISPLAY_CHOSEN_CLASS':

    // loop through each category inside classes data

    for (let category of CLASSES) {
      let options = category[1];

      // loop through each item inside said category options

      for (let item of options) {
        // find the one that matches user choice

        if (item.id == action.choice) {
          // return new copy of gameClass state
          // with the chosen class data

          return Object.assign({}, state, {chosen: item});
        }
      }
    }
    break;

  default:
    return state;
  }
};

export default classReducer;
