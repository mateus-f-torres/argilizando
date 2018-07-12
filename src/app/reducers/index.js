import { combineReducers } from 'redux';

import menu from './menu.js';
import score from './score.js';
import race from './races.js';

export default combineReducers({
  menu,
  score,
  race
});
