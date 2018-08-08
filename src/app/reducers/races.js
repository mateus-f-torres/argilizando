import RACES from '../data/races.js';

const defaultRace = {
  chosen: "none"
};

const raceReducer = (state = defaultRace, action) => {
  switch (action.type) {
  case 'DISPLAY_CHOSEN_RACE':

    // loop through each category inside races data

    for (let category of RACES) {
      let options = category[1];

      // loop through each item inside said category options

      for (let item of options) {
        // find the one that matches user choice

        if (item.id == action.choice) {
          // return new copy of race state
          // with the chosen race data

          return Object.assign({}, state, { chosen: item });
        }
      }
    }
    break;

  default:
    return state;
  }
};

export default raceReducer;
