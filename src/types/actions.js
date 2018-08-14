//@flow
import type {
  Race, _Class, ShortScore, Background, Character,
} from './props.js';

export type RaceAction = {
  type: 'DISPLAY_CHOSEN_RACE',
  payload: string,
};

export type ClassAction = {
  type: 'DISPLAY_CHOSEN_CLASS',
  payload: string,
};

type incrementScore = {
  type: 'INCREMENT_ABILITY_SCORE',
  payload: string,
};

type decrementScore = {
  type: 'DECREMENT_ABILITY_SCORE',
  payload: string,
};

type toggleDescription = {
  type: 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
  payload: string,
};

type resetScore = {
  type: 'RESET_ALL_ABILITY_SCORES',
};

export type ScoreAction =
  | incrementScore
  | decrementScore
  | toggleDescription
  | resetScore;

export type BackAction = {
  type: 'DISPLAY_CHOSEN_BACKGROUND',
  payload: string,
};

type getCharacter = {
  type: 'DISPLAY_CHARACTER',
  payload: {
    race: Race,
    _class: _Class,
    score: ShortScore,
    back: Background,
  },
};

type changeBody = {
  type: 'CHANGE_CHARACTER_BODY',
  payload: [string, string],
};

type changePast = {
  type: 'CHANGE_CHARACTER_PAST',
  payload: [string, string],
};

type changeSkill = {
  type: 'CHANGE_CHARACTER_SKILL',
  payload: [string, number],
};

type changeLang = {
  type: 'CHANGE_CHARACTER_LANG',
  payload: [string, number],
};

type changeTool = {
  type: 'CHANGE_CHARACTER_TOOL',
  payload: [string, string],
};

type changePack = {
  type: 'CHANGE_CHARACTER_PACK',
  payload: string,
};

type changeGear = {
  type: 'CHANGE_CHARACTER_GEAR',
  payload: [string, string],
};

type changeName = {
  type: 'CHANGE_CHARACTER_NAME',
  payload: string,
};

export type CharAction =
  | getCharacter
  | changeBody
  | changePast
  | changeSkill
  | changeLang
  | changeTool
  | changePack
  | changeGear
  | changeName;

type lockRace = {
  type: 'LOCK_RACE',
  payload: Race,
};

type lockClass = {
  type: 'LOCK_CLASS',
  payload: _Class,
}

type lockScore = {
  type: 'LOCK_SCORE',
  payload: ShortScore,
};

type lockBackground = {
  type: 'LOCK_BACKGROUND',
  payload: Background,
};

type lockCharacter = {
  type: 'LOCK_CHARACTER',
  payload: Character,
};

export type DoneAction =
  | lockRace
  | lockClass
  | lockScore
  | lockBackground
  | lockCharacter;

export type Action =
  | RaceAction
  | ClassAction
  | ScoreAction
  | BackAction
  | CharAction
  | DoneAction;

