import RACES from '../data/races.js';

/*

show key
  switch for rendering either races options or chosen race

chosen key
  key for accessing chosen race data

*/

const defaultRace = {
  show: false,
  chosen: "none"
};

const raceReducer = (state = defaultRace, action) => {
  switch(action.type) {

    case 'DISPLAY_CHOSEN_RACE':

      // loop through each category inside races data

      for(let category of RACES) {
        let options = category[1];

        // loop through each item inside said category options

        for(let item of options) {

          // find the one that matches user choice

          if(item.id == action.choice) {

            // return new copy of race state
            // with the chosen race data

            return Object.assign({}, state, {
              show: true,
              chosen: item
            })
          }
        }
      }
      break;

    case 'DISPLAY_RACE_OPTIONS':
      return Object.assign({}, state, defaultRace)

    default:
      return state;
  }
}

export default raceReducer;
