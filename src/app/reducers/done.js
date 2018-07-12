const doneListReducer = (state = [], action) => {
  switch(action.type) {
    case 'DONE_RACE':
      return [...state, "race"]
    case 'DONE_SCORE':
      return [...state, "score"]
    default:
      return state
  }
};

export default doneListReducer;
