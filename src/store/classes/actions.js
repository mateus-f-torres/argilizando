//@flow
import type {ClassAction} from 'Types/actions.js';

export const displayClass = (_class: string): ClassAction => ({
  type: 'DISPLAY_CHOSEN_CLASS',
  payload: _class,
});
