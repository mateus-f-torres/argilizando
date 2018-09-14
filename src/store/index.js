//@flow
import {combineReducers} from 'redux';

import race from './races/reducer.js';
import _class from './classes/reducer.js';
import score from './score/reducer.js';
import background from './backgrounds/reducer.js';
import character from './character/reducer.js';
import done from './done/reducer.js';

const reducers = {
  race,
  _class,
  score,
  background,
  character,
  done,
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
