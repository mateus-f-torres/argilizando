import RACES from '../data/races.js';

const raceReducer = (state = {}, action) => {
  switch (action.type) {
  case 'DISPLAY_CHOSEN_RACE':
    return findChosenRace(state, action.payload);

  default:
    return state;
  }
};

// TODO: make race data memoized ???
function findChosenRace(oldState, raceId) {
  for (let category of RACES) {
    let [, options] = category;

    const choice = options.find(({id}) => id == raceId);

    if (choice) return Object.assign({}, choice);
  }
}
export default raceReducer;
