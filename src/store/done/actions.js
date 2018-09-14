//@flow
import type {DoneAction} from 'Types/actions.js';
import type {
  Race, _Class, ShortScore, Background, Character,
} from 'Types/props.js';

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
