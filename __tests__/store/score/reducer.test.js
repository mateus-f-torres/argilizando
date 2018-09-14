import scoreReducer from 'Store/score/reducer.js';
import {actionCreator, actionRepeater} from 'Helpers';

describe('Score Reducer', () => {
  const defaultState = {
    total: 45,
    str: [8, -1, 1, false],
    dex: [8, -1, 1, false],
    con: [8, -1, 1, false],
    int: [8, -1, 1, false],
    wis: [8, -1, 1, false],
    cha: [8, -1, 1, false],
  };

  const buy = actionCreator('INCREMENT_ABILITY_SCORE');
  const sell = actionCreator('DECREMENT_ABILITY_SCORE');
  const toggle = actionCreator('TOGGLE_ABILITY_SCORE_DESCRIPTION');
  const reset = actionCreator('RESET_ALL_ABILITY_SCORES');

  describe('DEFAULT_STATE', () => {
    test('is correct', () => {
      const action = {type: 'dummy-type'};

      expect(scoreReducer(undefined, action)).toEqual(defaultState);
    });
  });

  describe('INCREMENT_ABILITY_SCORE', () => {
    test('buy 1 score point', () => {
      const expectedState = {
        total: 44,
        str: [9, -1, 1, false],
        dex: [8, -1, 1, false],
        con: [8, -1, 1, false],
        int: [8, -1, 1, false],
        wis: [8, -1, 1, false],
        cha: [8, -1, 1, false],
      };

      const modifiedState = scoreReducer(undefined, buy('str'));

      expect(modifiedState).toEqual(expectedState);
    });

    test('cost increase when with modifier', () => {
      const expectedState = {
        total: 40,
        str: [12, 1, 2, false],
        dex: [8, -1, 1, false],
        con: [8, -1, 1, false],
        int: [8, -1, 1, false],
        wis: [8, -1, 1, false],
        cha: [8, -1, 1, false],
      };

      const modifiedState = actionRepeater(buy('str'), 4, scoreReducer);

      expect(modifiedState).toEqual(expectedState);
    });

    test('dont overflow MAX_SCORE', () => {
      const expectedState = {
        total: 8,
        str: [20, 5, 6, false],
        dex: [8, -1, 1, false],
        con: [8, -1, 1, false],
        int: [8, -1, 1, false],
        wis: [8, -1, 1, false],
        cha: [8, -1, 1, false],
      };

      // 12 runs will hit MAX_SCORE, test with 15
      const modifiedState = actionRepeater(buy('str'), 15, scoreReducer);

      expect(modifiedState).toEqual(expectedState);
    });

    test('dont overflow MAX_TOTAL', () => {
      const expectedState = {
        total: 0,
        str: [20, 5, 6, false],
        dex: [13, 1, 3, false],
        con: [9, -1, 1, false],
        int: [8, -1, 1, false],
        wis: [8, -1, 1, false],
        cha: [8, -1, 1, false],
      };

      // 12 runs hits MAX_SCORE, cant buy more in str
      let modState = actionRepeater(buy('str'), 15, scoreReducer);

      // 5 runs hits cost of 3 with 1 point to spend left, cant buy more
      modState = actionRepeater(buy('dex'), 7, scoreReducer, modState);

      // 1 run hits 0 points to spend left, cant buy more
      modState = actionRepeater(buy('con'), 3, scoreReducer, modState);

      expect(modState).toEqual(expectedState);
    });
  });

  describe('DECREMENT_ABILITY_SCORE', () => {
    test('sell 1 score point', () => {
      const expectedState = {
        total: 46,
        str: [7, -2, 1, false],
        dex: [8, -1, 1, false],
        con: [8, -1, 1, false],
        int: [8, -1, 1, false],
        wis: [8, -1, 1, false],
        cha: [8, -1, 1, false],
      };

      const modifiedState = scoreReducer(undefined, sell('str'));
      expect(modifiedState).toEqual(expectedState);
    });

    test('refund correct amount when with modifier', () => {
      const expectedState = {
        total: 42,
        str: [11, 0, 2, false],
        dex: [8, -1, 1, false],
        con: [8, -1, 1, false],
        int: [8, -1, 1, false],
        wis: [8, -1, 1, false],
        cha: [8, -1, 1, false],
      };

      // get a modifier buy
      let modifiedState = actionRepeater(buy('str'), 4, scoreReducer);
      // then sell it
      modifiedState = scoreReducer(modifiedState, sell('str'));

      expect(modifiedState).toEqual(expectedState);
    });

    test('dont underflow MIN_SCORE', () => {
      const expectedState = {
        total: 52,
        str: [1, -5, 1, false],
        dex: [8, -1, 1, false],
        con: [8, -1, 1, false],
        int: [8, -1, 1, false],
        wis: [8, -1, 1, false],
        cha: [8, -1, 1, false],
      };

      // 7 runs will hit str score of 1, cant go lower
      const modifiedState = actionRepeater(sell('str'), 10, scoreReducer);

      expect(modifiedState).toEqual(expectedState);
    });

    test('dont overflow MAX_SOLD', () => {
      const expectedState = {
        total: 55,
        str: [1, -5, 1, false],
        dex: [5, -3, 1, false],
        con: [8, -1, 1, false],
        int: [8, -1, 1, false],
        wis: [8, -1, 1, false],
        cha: [8, -1, 1, false],
      };

      // 7 runs hits MIN_SCORE, cant sell more
      let modState = actionRepeater(sell('str'), 9, scoreReducer);
      // 3 runs hits MAX_SOLD, cant sell more
      modState = actionRepeater(sell('dex'), 5, scoreReducer, modState);

      expect(modState).toEqual(expectedState);
    });
  });

  describe('TOGGLE_ABILITY_SCORE_DESCRIPTION', () => {
    test('toggle On', () => {
      const modifiedState = scoreReducer(undefined, toggle('str'));

      expect(typeof modifiedState.str[3]).toBe('string');
    });

    test('toggle Off', () => {
      const stateA = scoreReducer(undefined, toggle('str'));
      const stateB = scoreReducer(stateA, toggle('str'));

      expect(stateB.str[3]).toBe(false);
    });

    test('change when incrementing based on modifier', () => {
      const stateA = scoreReducer(undefined, toggle('str'));
      const textA = stateA.str[3].slice();

      const stateB = scoreReducer(stateA, buy('str'));
      const textB = stateB.str[3].slice();

      const stateC = scoreReducer(stateB, buy('str'));
      const textC = stateC.str[3].slice();

      // modifier on 8 and 9 is -1, no change in description
      expect(textA).toMatch(new RegExp(textB));
      // modifier on 9 is -1 and on 10 is +0, change in description
      expect(textB).not.toMatch(new RegExp(textC));
    });

    test('change when decrementing based on modifier', () => {
      const stateA = scoreReducer(undefined, toggle('str'));
      const textA = stateA.str[3].slice();

      const stateB = scoreReducer(stateA, sell('str'));
      const textB = stateB.str[3].slice();

      const stateC = scoreReducer(stateB, sell('str'));
      const textC = stateC.str[3].slice();

      // modifier on 8 is -1 and on 7 is -2, change in description
      expect(textA).not.toMatch(new RegExp(textB));
      // modifier on 7 and on 6 is -2, no change in description
      expect(textB).toMatch(new RegExp(textC));
    });
  });

  describe('RESET_ALL_ABILITY_SCORES', () => {
    test('is equal to default state', () => {
      const modifiedState = scoreReducer(undefined, reset());

      expect(modifiedState).toEqual(defaultState);
    });

    test('reset after increment', () => {
      let modifiedState = scoreReducer(undefined, buy('str'));
      modifiedState = scoreReducer(modifiedState, reset());

      expect(modifiedState).toEqual(defaultState);
    });

    test('reset after decrement', () => {
      let modifiedState = scoreReducer(undefined, sell('str'));
      modifiedState = scoreReducer(modifiedState, reset());

      expect(modifiedState).toEqual(defaultState);
    });

    test('reset after toggle description', () => {
      let modifiedState = scoreReducer(undefined, toggle('str'));
      modifiedState = scoreReducer(modifiedState, reset());

      expect(modifiedState).toEqual(defaultState);
    });
  });
});
