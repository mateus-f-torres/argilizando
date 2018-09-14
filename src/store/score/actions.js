//@flow
import type {ScoreAction} from 'Types/actions.js';

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
