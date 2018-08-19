import backgroundReducer from 'Reducers/backgrounds.js';
import {getAsset} from '../setup/helpers.js';
import BACKGROUNDS from 'DATA/backgrounds.js';

describe('Background Reducer', () => {
  const defaultState = {};

  describe('DEFAULT_STATE', () => {
    test('is correct', () => {
      const action = {type: 'dummy_action'};

      expect(backgroundReducer(undefined, action)).toEqual(defaultState);
    });
  });

  describe('DISPLAY_CHOSEN_BACKGROUND', () => {
    test('return correct background object', () => {
      const action = {
        type: 'DISPLAY_CHOSEN_BACKGROUND',
        payload: 'acolyte',
      };

      const mockBack = getAsset('acolyte', BACKGROUNDS);

      expect(backgroundReducer(undefined, action)).toEqual(mockBack);
    });

    test('overwrite previous background object when called again', () => {
      const actionA = {
        type: 'DISPLAY_CHOSEN_BACKGROUND',
        payload: 'acolyte',
      };

      const acolyteState = backgroundReducer(undefined, actionA);

      const mockAcolyte = getAsset('acolyte', BACKGROUNDS);

      const actionB = {
        type: 'DISPLAY_CHOSEN_BACKGROUND',
        payload: 'charlatan',
      };

      const charlatanState = backgroundReducer(acolyteState, actionB);

      const mockCharlatan = getAsset('charlatan', BACKGROUNDS);

      expect(charlatanState).not.toEqual(mockAcolyte);
      expect(charlatanState).toEqual(mockCharlatan);
    });

    test('keep current background object when called with dummy', () => {
      const actionA = {
        type: 'DISPLAY_CHOSEN_BACKGROUND',
        payload: 'noble',
      };

      const nobleState = backgroundReducer(undefined, actionA);

      const actionB = {
        type: 'DISPLAY_CHOSEN_BACKGROUND',
        payload: 'dummy_background',
      };

      const dummyState = backgroundReducer(nobleState, actionB);

      expect(dummyState).not.toEqual({});
      expect(dummyState).toEqual(nobleState);
    });
  });
});
