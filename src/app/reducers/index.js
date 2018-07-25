import { combineReducers } from 'redux';

import menu from './menu.js';
import race from './races.js';
import gameClass from './classes.js';
import score from './score.js';
import background from './backgrounds.js';
import create from './create.js';
import done from './done.js';

export default combineReducers({
  menu,
  race,
  gameClass,
  score,
  background,
  create,
  done
});
