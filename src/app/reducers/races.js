import { RACES } from '../logic/data.js';

const defaultPlayerRace = {
  show: false,
  chosen: "human"
};

const raceReducer = (state = defaultPlayerRace, action) => {
  switch(action.type) {
    case 'DISPLAY_RACE':
      for(let category of RACES) {
        for(let race of category) {
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
      return Object.assign({}, state, {
        show: false,
        chosen: "human"
      })
    default:
      return state;
  }
}

export default raceReducer;
