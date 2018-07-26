import defaultCharacter from '../data/character.js';

const characterReducer = (state = defaultCharacter, action) => {
  switch(action.type) {

    case 'DISPLAY_CHARACTER':
      console.log("temp", action.char);
      return state;

    default:
      return state;
  }
}

export default characterReducer;
