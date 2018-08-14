//@flow
import {combineReducers} from 'redux';

import race from './races.js';
import _class from './classes.js';
import score from './score.js';
import background from './backgrounds.js';
import character from './character.js';
import done from './done.js';

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
