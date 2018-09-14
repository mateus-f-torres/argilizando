//@flow
import type {CharAction} from 'Types/actions.js';
import type {Race, _Class, ShortScore, Background} from 'Types/props.js';

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
