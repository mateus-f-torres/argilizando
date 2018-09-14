import raceReducer from 'Store/races/reducer.js';
import {getAsset} from 'Helpers';
import RACES from 'DATA/races.js';

describe('Races Reducer', () => {
  const defaultState = {};

  describe('DEFAULT_STATE', () => {
    test('is correct', () => {
      const action = {type: 'dummy_action'};

      expect(raceReducer(undefined, action)).toEqual(defaultState);
    });
  });

  describe('DISPLAY_CHOSEN_RACE', () => {
    test('return correct race object', () => {
      const action = {
        type: 'DISPLAY_CHOSEN_RACE',
        payload: 'human',
      };

      const mockRace = getAsset('human', RACES);

      expect(raceReducer(undefined, action)).toEqual(mockRace);
    });

    test('overwrite previous race object when called again', () => {
      const actionA = {
        type: 'DISPLAY_CHOSEN_RACE',
        payload: 'gnome',
      };

      const gnomeState = raceReducer(undefined, actionA);

      const mockGnome = getAsset('gnome', RACES);

      const actionB = {
        type: 'DISPLAY_CHOSEN_RACE',
        payload: 'human',
      };

      const humanState = raceReducer(gnomeState, actionB);

      const mockHuman = getAsset('human', RACES);

      expect(humanState).not.toEqual(mockGnome);
      expect(humanState).toEqual(mockHuman);
    });

    test('keep current race object when called with dummy', () => {
      const actionA = {
        type: 'DISPLAY_CHOSEN_RACE',
        payload: 'human',
      };

      const humanState = raceReducer(undefined, actionA);

      const actionB = {
        type: 'DISPLAY_CHOSEN_RACE',
        payload: 'dummy_race',
      };

      const dummyState = raceReducer(humanState, actionB);

      expect(dummyState).not.toEqual({});
      expect(dummyState).toEqual(humanState);
    });
  });
});
