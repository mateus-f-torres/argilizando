import configureStore from 'redux-mock-store';

import {
  incrementScore, decrementScore, toggleDescription, resetScore,
} from 'Store/score/actions.js';

const mockStore = configureStore();
const store = mockStore();

describe('Test Score Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('incrementScore, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'INCREMENT_ABILITY_SCORE',
        'payload': 'cha',
      },
    ];

    store.dispatch(incrementScore('cha'));
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('decrementScore, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'DECREMENT_ABILITY_SCORE',
        'payload': 'str',
      },
    ];

    store.dispatch(decrementScore('str'));
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('toggleDescription, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
        'payload': 'con',
      },
    ];

    store.dispatch(toggleDescription('con'));
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('resetScore, correct action and no payload', () => {
    const expectedActions = [
      {
        'type': 'RESET_ALL_ABILITY_SCORES',
      },
    ];

    store.dispatch(resetScore());
    expect(store.getActions()).toEqual(expectedActions);
  });
  test('6 actions dispatch, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
        'payload': 'con',
      },
      {
        'type': 'INCREMENT_ABILITY_SCORE',
        'payload': 'wis',
      },
      {
        'type': 'INCREMENT_ABILITY_SCORE',
        'payload': 'wis',
      },
      {
        'type': 'DECREMENT_ABILITY_SCORE',
        'payload': 'cha',
      },
      {
        'type': 'RESET_ALL_ABILITY_SCORES',
      },
      {
        'type': 'DECREMENT_ABILITY_SCORE',
        'payload': 'dex',
      },
    ];

    store.dispatch(toggleDescription('con'));
    store.dispatch(incrementScore('wis'));
    store.dispatch(incrementScore('wis'));
    store.dispatch(decrementScore('cha'));
    store.dispatch(resetScore());
    store.dispatch(decrementScore('dex'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
