//@flow
import type {
  Race, _Class, ShortScore, Background, Character,
} from '../types/props.js';
import type {
  RaceAction, ClassAction, ScoreAction,
  BackAction, CharAction, DoneAction,
} from '../types/actions.js';

// RACE

export const displayRace = (race: string): RaceAction => ({
  type: 'DISPLAY_CHOSEN_RACE',
  payload: race,
});

// CLASS

export const displayClass = (_class: string): ClassAction => ({
  type: 'DISPLAY_CHOSEN_CLASS',
  payload: _class,
});

// SCORE

export const incrementScore = (ability: string): ScoreAction => ({
  type: 'INCREMENT_ABILITY_SCORE',
  payload: ability,
});

export const decrementScore = (ability: string): ScoreAction => ({
  type: 'DECREMENT_ABILITY_SCORE',
  payload: ability,
});

export const toggleDescription = (ability: string): ScoreAction => ({
  type: 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
  payload: ability,
});

export const resetScore = (): ScoreAction=> ({
  type: 'RESET_ALL_ABILITY_SCORES',
});

// BACKGROUND

export const displayBackground = (choice: string): BackAction => ({
  type: 'DISPLAY_CHOSEN_BACKGROUND',
  payload: choice,
});

// CHARACTER

type halfChar = {
  race: Race,
  _class: _Class,
  score: ShortScore,
  back: Background
};

export const getCharacter = (char: halfChar): CharAction => ({
  type: 'DISPLAY_CHARACTER',
  payload: char,
});

export const changeBody = (pair: [string, string]): CharAction => ({
  type: 'CHANGE_CHARACTER_BODY',
  payload: pair,
});

export const changePast = (pair: [string, string]): CharAction => ({
  type: 'CHANGE_CHARACTER_PAST',
  payload: pair,
});

export const changeSkill = (pair: [string, number]): CharAction => ({
  type: 'CHANGE_CHARACTER_SKILL',
  payload: pair,
});

export const changeLang = (pair: [string, number]): CharAction => ({
  type: 'CHANGE_CHARACTER_LANG',
  payload: pair,
});

export const changeTool = (pair: [string, string]): CharAction => ({
  type: 'CHANGE_CHARACTER_TOOL',
  payload: pair,
});

export const changePack = (pack: string): CharAction => ({
  type: 'CHANGE_CHARACTER_PACK',
  payload: pack,
});

export const changeGear = (gear: [string, string]): CharAction => ({
  type: 'CHANGE_CHARACTER_GEAR',
  payload: gear,
});

export const changeName = (name: string): CharAction => ({
  type: 'CHANGE_CHARACTER_NAME',
  payload: name,
});

// DONE

export const lockRace = (race: Race): DoneAction => ({
  type: 'LOCK_RACE',
  payload: race,
});

export const lockClass = (_class: _Class): DoneAction => ({
  type: 'LOCK_CLASS',
  payload: _class,
});

export const lockScore = (lock: ShortScore): DoneAction => ({
  type: 'LOCK_SCORE',
  payload: lock,
});

export const lockBackground = (lock: Background): DoneAction => ({
  type: 'LOCK_BACKGROUND',
  payload: lock,
});

export const lockCharacter = (lock: Character): DoneAction => ({
  type: 'LOCK_CHARACTER',
  payload: lock,
});
