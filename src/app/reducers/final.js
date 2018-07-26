const defaultFinalDisplay = {
  main: true,
  visual: false,
  rp: false
};

const selectedState = {
  main: false,
  visual: false,
  rp: false
};

const finalDisplayReducer = (state = defaultFinalDisplay, action) => {
  switch(action.type) {
    case 'SHOW_MAIN_ELEMENTS':
      return Object.assign({}, state, selectedState, { main: true });

    case 'SHOW_VISUAL_ELEMENTS':
      return Object.assign({}, state, selectedState, { visual: true });

    case 'SHOW_RP_ELEMENTS':
      return Object.assign({}, state, selectedState, { rp: true });

    default:
      return state;
  }
}

export default finalDisplayReducer;
