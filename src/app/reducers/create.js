const defaultCharacter = {
  final: false,
  char: {}
};

const characterReducer = (state = defaultCharacter, action) => {
  switch(action.type) {

    case 'DISPLAY_CHARACTER':
      console.log("temp", action.char);
      return state;

    case 'LOCK_CHARACTER':
      console.log("final", action.char)
      console.log("set final to true")
      return state;

    default:
      return state;
  }
}

export default characterReducer;
