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

    case 'CHANGE_CHARACTER_SKILL':
      let [skill, max] = [...action.pair];
      return Object.assign({},
        state,
        { main: toggleSkill(state.main, skill, max) }
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

const toggleSkill = (main, change, max) => {
  // control for overflowing max skill proficiency count
  let num = 0;
  for(const item of main.skills) {
    item[3] && num++;
  }

  main.skills = main.skills.map(item => {
    if(item[1] !== change) return item;

    // e.g ["dex", "Acrobatics", 2, true] 
    let [ability, skill, mod, prof] = [...item];

    return prof

      // if skill had prof (was checked), just uncheck it
      ? [ability, skill, mod - main.prof]

      // else check if we reached max number of checked skills
      // add 2 to account for initial background proficient skills
      : num >= max + 2

        // if we reached max number return unmodified item
        ? item

        // else check skill
        : [ability, skill, mod + main.prof, true]
  })

  // change Passive Perception if needed
  if(change === "Perception") {
    for(const item of main.skills) {
      if(item[1] === "Perception") main.pp = 10 + item[2];
    }
  }

  return main;
}

export default characterReducer;

