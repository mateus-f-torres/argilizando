import { blankCharacter } from '../data/character.js';
import { getChar } from '../data/character.js';

const characterReducer = (state = blankCharacter, action) => {
  let key, value, char;

  switch(action.type) {

    case 'DISPLAY_CHARACTER':
      char = action.char;
      return Object.assign({},
        state,
        getChar(char)
      );

    case 'CHANGE_CHARACTER_BODY':
      [key, value] = [...action.pair];
      return Object.assign({},
        state,
        { body: changeBody(state.body, key, value) }
      );

    case 'CHANGE_CHARACTER_PAST':
      [key, value] = [...action.pair];
      return Object.assign({},
        state,
        { past: changePast(state.past, key, value) }
      );


    default:
      return state;
  }
}

const changeBody = (body, key, value) => {
  body[key] = value;
  return body;
};

const changePast = (past, key, value) => {
  past[key] = value;
  return past;
};

export default characterReducer;

