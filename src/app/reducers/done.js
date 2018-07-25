const defaultDoneList = {
  race: false,
  gameClass: false,
  score: false,
  background: false
}

const doneListReducer = (state = defaultDoneList, action) => {
  switch(action.type) {

    case 'LOCK_RACE':
      return Object.assign({}, state, { race: action.lock })

    case 'LOCK_CLASS':
      return Object.assign({}, state, { gameClass: action.lock })

    case 'LOCK_SCORE':
      return Object.assign({}, state, { score: action.lock })

    case 'LOCK_BACKGROUND':
      return Object.assign({}, state, { background: action.lock })

    default:
      return state
  }
};

export default doneListReducer;
