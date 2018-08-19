//@flow
import RACES from '../data/races.js';
import type {Race} from '../types/props.js';
import type {RaceAction} from '../types/actions.js';

type State = {} | Race;

const raceReducer = (state: State = {}, action: RaceAction) => {
  switch (action.type) {
  case 'DISPLAY_CHOSEN_RACE':

    // loop through each category inside races data

    for (let category of RACES) {
      let options = category[1];

      // loop through each item inside said category options

      for (let item of options) {
        // find the one that matches user choice

        if (item.id === action.payload) {
          // return new copy of race state
          // with the chosen race data
          // ! MUST DISCARD STATE !
          // or risk merging 'maybe-there' props

          return Object.assign({}, item);
        }
      }
    }
    // unknown race id
    return state;

  default:
    return state;
  }
};

export default raceReducer;
