import { combineReducers } from 'redux';

import race from './races.js';
import gameClass from './classes.js';
import score from './score.js';
import background from './backgrounds.js';
import character from './character.js';
import done from './done.js';
import final from './final.js';

export default combineReducers({
  race,
  gameClass,
  score,
  background,
  character,
  done,
  final
});
