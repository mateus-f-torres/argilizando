const doneListReducer = (state = [], action) => {
  switch(action.type) {
    case 'DONE_RACE':
      return [...state, "race"]
    case 'DONE_SCORE':
      return [...state, "score"]
    case 'DONE_CLASS':
      return [...state, "gameClass"]
    default:
      return state
  }
};

export default doneListReducer;
