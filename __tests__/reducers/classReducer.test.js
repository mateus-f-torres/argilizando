import classReducer from 'Reducers/classes.js';
import {getAsset} from '../setup/helpers.js';
import CLASSES from 'DATA/classes.js';

describe('_Class Reducer', () => {
  const defaultState = {};

  describe('DEFAULT_STATE', () => {
    test('is correct', () => {
      const action = {type: 'dummy_action'};

      expect(classReducer(undefined, action)).toEqual(defaultState);
    });
  });

  describe('DISPLAY_CHOSEN_CLASS', () => {
    test('return correct _class object', () => {
      const action = {
        type: 'DISPLAY_CHOSEN_CLASS',
        payload: 'barbarian',
      };

      const mockClass = getAsset('barbarian', CLASSES);

      expect(classReducer(undefined, action)).toEqual(mockClass);
    });

    test('overwrite previous _class object when called again', () => {
      const actionA = {
        type: 'DISPLAY_CHOSEN_CLASS',
        payload: 'rogue',
      };

      const rogueState = classReducer(undefined, actionA);

      const mockRogue = getAsset('rogue', CLASSES);

      const actionB = {
        type: 'DISPLAY_CHOSEN_CLASS',
        payload: 'barbarian',
      };

      const barbarianState = classReducer(rogueState, actionB);

      const mockBarbarian = getAsset('barbarian', CLASSES);

      expect(barbarianState).not.toEqual(mockRogue);
      expect(barbarianState).toEqual(mockBarbarian);
    });

    test('keep current _class object when called with dummy', () => {
      const actionA = {
        type: 'DISPLAY_CHOSEN_CLASS',
        payload: 'rogue',
      };

      const rogueState = classReducer(undefined, actionA);

      const actionB = {
        type: 'DISPLAY_CHOSEN_CLASS',
        payload: 'dummy_class',
      };

      const dummyState = classReducer(rogueState, actionB);

      expect(dummyState).not.toEqual({});
      expect(dummyState).toEqual(rogueState);
    });
  });
});
