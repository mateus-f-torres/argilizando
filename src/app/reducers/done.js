const defaultDoneList = {
  race: false,
  _class: false,
  score: false,
  back: false,
  char: false
}

const doneListReducer = (state = defaultDoneList, action) => {
  switch(action.type) {

    case 'LOCK_RACE':
      return Object.assign({}, state, { race: action.lock })

    case 'LOCK_CLASS':
      return Object.assign({}, state, { _class: action.lock })

    case 'LOCK_SCORE':
      return Object.assign({}, state, { score: action.lock })

    case 'LOCK_BACKGROUND':
      return Object.assign({}, state, { back: action.lock })

    case 'LOCK_CHARACTER':
      return Object.assign({}, state, { char: action.lock })

    default:
      return state
  }
};

export default doneListReducer;
