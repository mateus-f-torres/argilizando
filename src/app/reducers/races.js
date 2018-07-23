import RACES from '../data/races.js';

const defaultRace = {
  show: false,
  chosen: "none"
};

const raceReducer = (state = defaultRace, action) => {
  switch(action.type) {
    case 'DISPLAY_RACE':
      for(let category of RACES) {
        let options = category[1];
        for(let race of options) {
          if(race.id == action.race) {
            return Object.assign({}, state, {
              show: true,
              chosen: race
            })
          }
        }
      }
      break;

    case 'SHOW_RACE_SELECTION':
      return Object.assign({}, state, defaultRace)

    default:
      return state;
  }
}

export default raceReducer;
