const defaultFinalDisplay = {
  main: true,
  body: false,
  past: false
};

const selectedState = {
  main: false,
  body: false,
  past: false
};

const finalDisplayReducer = (state = defaultFinalDisplay, action) => {
  switch(action.type) {
    case 'SHOW_MAIN_ELEMENTS':
      return Object.assign({}, state, selectedState, { main: true });

    case 'SHOW_VISUAL_ELEMENTS':
      return Object.assign({}, state, selectedState, { body: true });

    case 'SHOW_RP_ELEMENTS':
      return Object.assign({}, state, selectedState, { past: true });

    default:
      return state;
  }
}

export default finalDisplayReducer;
