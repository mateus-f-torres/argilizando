import configureStore from 'redux-mock-store';

import {displayRace} from 'Actions/index.js';

const mockStore = configureStore();
const store = mockStore();

describe('Test Race Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('displayRace, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'DISPLAY_CHOSEN_RACE',
        'payload': 'human',
      },
    ];

    store.dispatch(displayRace('human'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('3 actions dispatch, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'DISPLAY_CHOSEN_RACE',
        'payload': 'elf',
      },
      {
        'type': 'DISPLAY_CHOSEN_RACE',
        'payload': 'goliath',
      },
      {
        'type': 'DISPLAY_CHOSEN_RACE',
        'payload': 'goblin',
      },
    ];

    store.dispatch(displayRace('elf'));
    store.dispatch(displayRace('goliath'));
    store.dispatch(displayRace('goblin'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
