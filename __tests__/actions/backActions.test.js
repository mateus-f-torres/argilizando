import configureStore from 'redux-mock-store';

import {displayBackground} from 'Actions/index.js';

const mockStore = configureStore();
const store = mockStore();

describe('Test Background Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('displayBackground, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'DISPLAY_CHOSEN_BACKGROUND',
        'payload': 'acolyte',
      },
    ];

    store.dispatch(displayBackground('acolyte'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('3 actions dispatch, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'DISPLAY_CHOSEN_BACKGROUND',
        'payload': 'sage',
      },
      {
        'type': 'DISPLAY_CHOSEN_BACKGROUND',
        'payload': 'soldier',
      },
      {
        'type': 'DISPLAY_CHOSEN_BACKGROUND',
        'payload': 'folk',
      },
    ];

    store.dispatch(displayBackground('sage'));
    store.dispatch(displayBackground('soldier'));
    store.dispatch(displayBackground('folk'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
