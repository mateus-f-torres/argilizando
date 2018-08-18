import raceReducer from 'Reducers/races.js';
import {mockHuman, mockOrc} from 'Mock/race.js';

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

      expect(raceReducer(undefined, action)).toEqual(mockHuman);
    });

    test('overwrite previous race object when called again', () => {
      const actionA = {
        type: 'DISPLAY_CHOSEN_RACE',
        payload: 'human',
      };

      const humanState = raceReducer(undefined, actionA);

      const actionB = {
        type: 'DISPLAY_CHOSEN_RACE',
        payload: 'orc',
      };

      const orcState = raceReducer(humanState, actionB);

      expect(orcState).not.toEqual(mockHuman);
      expect(orcState).toEqual(mockOrc);
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
