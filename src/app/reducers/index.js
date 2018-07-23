import { combineReducers } from 'redux';

import menu from './menu.js';
import race from './races.js';
import gameClass from './classes.js';
import score from './score.js';
import background from './backgrounds.js';
import done from './done.js';

export default combineReducers({
  menu,
  race,
  gameClass,
  background,
  score,
  done
});
