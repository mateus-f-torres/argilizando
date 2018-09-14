//@flow
import type {RaceAction} from 'Types/actions.js';

export const displayRace = (race: string): RaceAction => ({
  type: 'DISPLAY_CHOSEN_RACE',
  payload: race,
});
