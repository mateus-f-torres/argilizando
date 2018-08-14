//@flow
import type {
  Race, _Class, ShortScore, Background, Character,
} from '../types/props.js';
import type {DoneAction} from '../types/actions.js';

type State = {
  race: false | Race,
  _class: false | _Class,
  score: false | ShortScore,
  back: false | Background,
  char: false | Character,
};

const defaultState = {
  race: false,
  _class: false,
  score: false,
  back: false,
  char: false,
};

const doneListReducer = (state: State = defaultState, action: DoneAction) => {
  switch (action.type) {
  case 'LOCK_RACE':
    return Object.assign({}, state, {race: action.payload});

  case 'LOCK_CLASS':
    return Object.assign({}, state, {_class: action.payload});

  case 'LOCK_SCORE':
    return Object.assign({}, state, {score: action.payload});

  case 'LOCK_BACKGROUND':
    return Object.assign({}, state, {back: action.payload});

  case 'LOCK_CHARACTER':
    return Object.assign({}, state, {char: action.payload});

  default:
    return state;
  }
};

export default doneListReducer;
