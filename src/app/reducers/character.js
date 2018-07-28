import { protoCharacter } from '../data/character.js';
import { blankCharacter } from '../data/character.js';

const characterReducer = (state = protoCharacter, action) => {
  switch(action.type) {

    case 'DISPLAY_CHARACTER':
      let char = action.char;
      console.log("temp", char);
      console.log(getCharSpells(char.gameClass, char.score, 2))
      return state;

    default:
      return state;
  }
}

const getCharSpells = (charClass, charScore, charProf) => {
  let blank = {
    spellClass: "",
    ability: "", // based on gameClass
    save: 0, // 8 + prof bonus + ability modifier
    toHit: 0, // prof bonus + ability modifier
    cantrips: 0, // based on gameClass
    known: 0, // based on gameClass
    prepared: 0, //  ability modifier + lvl
    slots: 0 // based on gameClass
  };

  blank.spellClass = charClass;

  switch(charClass) {
    case 'bard':
      blank.ability = "cha";
      blank.cantrips = 2;
      blank.known = 4;
      blank.slots = 2;
      break;

    case 'cleric':
      blank.ability = "wis";
      blank.cantrips = 3;
      blank.known = 0;
      blank.slots = 2;
      break;

    case 'druid':
      blank.ability = "wis";
      blank.cantrips = 2;
      blank.known = 0;
      blank.slots = 2;
      break;

    case 'paladin':
      blank.notYet = true;
      blank.ability = "cha";
      blank.cantrips = 0;
      blank.known = 0;
      blank.slots = 2;
      break;

    case 'ranger':
      blank.notYet = true;
      blank.ability = "wis";
      blank.cantrips = 0;
      blank.known = 2;
      blank.slots = 2;
      break;

    case 'sorcerer':
      blank.ability = "cha";
      blank.cantrips = 4;
      blank.known = 2;
      blank.slots = 2;
      break;

    case 'warlock':
      blank.ability = "cha";
      blank.cantrips = 2;
      blank.known = 2;
      blank.slots = 1;
      break;

    case 'wizard':
      blank.ability = "int";
      blank.cantrips = 3;
      blank.known = 6;
      blank.slots = 2;
      break;

    default:
      break;
  }

  if(blank.ability !== "") {
    blank.save = 8 + charProf + charScore[blank.ability][1];
    blank.toHit = charProf + charScore[blank.ability][1];

    switch(blank.spellClass) {
      case 'cleric':
      case 'druid':
      case 'paladin':
      case 'wizard':
        blank.prepared = charScore[blank.ability][1] + 1;
        break;

      default:
        break;
    }
  }

  return blank.ability !== "" ? blank : false;
}


export default characterReducer;
