import BACKGROUNDS from '../data/backgrounds.js';

/*

show key
  switch for rendering either background options or chosen background

chosen key
  key for accessing chosen background data

*/

const defaultBack = {
  show: false,
  chosen: "none"
};

const backgroundReducer = (state = defaultBack, action) => {
  switch(action.type) {

    case 'DISPLAY_CHOSEN_BACKGROUND':

      // loop through each category inside backgrounds data

      for(let category of BACKGROUNDS) {
        let options = category[1];

        // loop through each item inside said category options

        for(let item of options) {

          // find the one that matches user choice

          if(item.id == action.choice) {

            // return new copy of background state
            // with the chosen background data

            return Object.assign({}, state, {
              show: true,
              chosen: item
            })
          }
        }
      }
      break;

    case 'DISPLAY_BACKGROUND_OPTIONS':
      return Object.assign({}, state, defaultBack)

    default:
      return state;
  }
}

export default backgroundReducer;
