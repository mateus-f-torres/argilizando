import { RACES } from '../logic/data.js';

const defaultPlayerRace = {
  show: false,
  chosen: "human"
};

const raceReducer = (state = defaultPlayerRace, action) => {
  switch(action.type) {
    case 'DISPLAY_RACE':
      for(let item of RACES) {
        if(item.id == action.race) {
          return Object.assign({}, state, {
            show: true,
            chosen: item
          })
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
