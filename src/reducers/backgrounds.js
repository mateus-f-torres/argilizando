import BACKGROUNDS from '../data/backgrounds.js';

const backgroundReducer = (state = {}, action) => {
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
          // ! MUST DISCARD STATE !
          // or risk merging 'maybe-there' props

          return Object.assign({}, item);
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
