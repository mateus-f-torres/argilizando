import packs from '../data/packs.js';
import { blankCharacter } from '../data/character.js';
import { getChar } from '../data/character.js';

const characterReducer = (state = blankCharacter, action) => {
  let key, value;
  let change, max;

  switch(action.type) {

    case 'DISPLAY_CHARACTER':
      return Object.assign({}, state, getChar(action.char));

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
      [change, max] = [...action.pair];
      return Object.assign({},
        state,
        { main: toggleSkill(state.main, change, max) }
      );

    case 'CHANGE_CHARACTER_LANG':
      [change, max] = [...action.pair];
      return Object.assign({},
        state,
        { main: toggleLang(state.main, change, max) }
      );

    case 'CHANGE_CHARACTER_TOOL':
      [key, value] = [...action.pair];
      return Object.assign({},
        state,
        { main: toggleTool(state.main, key, value) }
      );

    case 'CHANGE_CHARACTER_PACK':
      return Object.assign({},
        state,
        { equip: changePack(state.equip, action.pack) }
      );

    case 'CHANGE_CHARACTER_GEAR':
      return Object.assign({},
        state,
        { equip: changeGear(state.equip, [...action.gear]) }
      );

    case 'CHANGE_CHARACTER_NAME':
      return Object.assign({}, state, { name: action.name });

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

const toggleLang = (main, change, max) => {
  // control for overflowing max known languages count
  let num = 0;
  for(const item of main.langs) {
    // control for special druidic and thieves's cant languages
    if(item[3] !== undefined) continue;
    item[2] && num++;
  }

  main.langs = main.langs.map(item => {

    let [selectable, lang, known] = [...item];

    // no selectable or different languages from the one clicked
    // e.g [true, "Elvish", true] 
    if(selectable === false || lang !== change) return item;

    return known

      // if language was known (was checked), just uncheck it
      ? [selectable, lang, false]

      // else check if we reached max number of checked languages
      : num >= max

        // if we reached max number return unmodified item
        ? item

        // else check lang
        : [selectable, lang, true]
  })

  return main;
}

const toggleTool = (main, key, value) => {

  // 1st loop, check if something was selected
  for(let item of main.tools.all[key]) {
    // if yes, remove it from .prof and unselect
    if(item[1]) {
      main.tools.prof.pop();
      item.pop();
    }
  }

  // 2nd loop, find selected tool
  for(let item of main.tools.all[key]) {
    // add to .prof and add true for 1st loop control
    if(item[0] === value) {
      main.tools.prof.push(item[0]);
      item.push(true);
    }
  }

  return main;
}

const changePack = (equip, name) => {
  equip.pack.fromPack = [...packs[name]];
  return equip;
}

const changeGear = (equip, choice) => {

  let [num, name] = [...choice];

  if(equip.gear[num]) {
    equip.gear = equip.gear.map(item => {
      return item[0] === num
        ? [num, name]
        : item;
    });
  }

  else {
    equip.gear[num] = [num, name];
  }

  return equip;
}

export default characterReducer;

