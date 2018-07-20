import CLASSES from '../data/classes.js';

const defaultClass = {
  show: false,
  chosen: "none"
};

const classReducer = (state = defaultClass, action) => {
  switch(action.type) {
    case 'DISPLAY_CLASS':
      for(let category of CLASSES) {
        let options = category[2];
        for(let item of options) {
          if(item.id == action.choice) {
            return Object.assign({}, state, {
              show: true,
              chosen: item
            })
          }
        }
      }
      break;

    case 'SHOW_CLASS_SELECTION':
      return Object.assign({}, state, defaultClass)

    default:
      return state;
  }
}

export default classReducer;
