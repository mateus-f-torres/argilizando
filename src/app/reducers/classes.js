import CLASSES from '../data/classes.js';

/*

show key
  switch for rendering either classes options or chosen class

chosen key
  key for accessing chosen class data

*/

const defaultClass = {
  show: false,
  chosen: "none"
};

const classReducer = (state = defaultClass, action) => {
  switch(action.type) {

    case 'DISPLAY_CHOSEN_CLASS':

      // loop through each category inside classes data 

      for(let category of CLASSES) {
        let options = category[1];

        // loop through each item inside said category options

        for(let item of options) {

          // find the one that matches user choice

          if(item.id == action.choice) {

            // return new copy of gameClass state
            // with the chosen class data
            
            return Object.assign({}, state, {
              show: true,
              chosen: item
            })
          }
        }
      }
      break;

    case 'DISPLAY_CLASS_OPTIONS':
      return Object.assign({}, state, defaultClass)

    default:
      return state;
  }
}

export default classReducer;
