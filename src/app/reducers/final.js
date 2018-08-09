const defaultFinalDisplay = {
  main: true,
  equip: false,
  spell: false,
  trait: false,
  body: false,
  past: false,
};

const selectedState = {
  main: false,
  equip: false,
  spell: false,
  trait: false,
  body: false,
  past: false,
};

const finalDisplayReducer = (state = defaultFinalDisplay, action) => {
  switch (action.type) {
  case 'SHOW_MAIN_ELEMENTS':
    return Object.assign({}, state, selectedState, {main: true});

  case 'SHOW_EQUIP_ELEMENTS':
    return Object.assign({}, state, selectedState, {equip: true});

  case 'SHOW_SPELL_ELEMENTS':
    return Object.assign({}, state, selectedState, {spell: true});

  case 'SHOW_TRAIT_ELEMENTS':
    return Object.assign({}, state, selectedState, {trait: true});

  case 'SHOW_BODY_ELEMENTS':
    return Object.assign({}, state, selectedState, {body: true});

  case 'SHOW_PAST_ELEMENTS':
    return Object.assign({}, state, selectedState, {past: true});

  default:
    return state;
  }
};

export default finalDisplayReducer;
