//@flow
import type {BackAction} from 'Types/actions.js';

export const displayBackground = (choice: string): BackAction => ({
  type: 'DISPLAY_CHOSEN_BACKGROUND',
  payload: choice,
});
