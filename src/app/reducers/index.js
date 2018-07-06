import { combineReducers } from 'redux';

import score from './score.js';
import race from './races.js';

export default combineReducers({
  score,
  race
});
