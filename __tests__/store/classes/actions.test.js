import configureStore from 'redux-mock-store';

import {displayClass} from 'Store/classes/actions.js';

const mockStore = configureStore();
const store = mockStore();

describe('Test _Class Actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('displayClass, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'DISPLAY_CHOSEN_CLASS',
        'payload': 'barbarian',
      },
    ];

    store.dispatch(displayClass('barbarian'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('3 actions dispatch, correct action and payload', () => {
    const expectedActions = [
      {
        'type': 'DISPLAY_CHOSEN_CLASS',
        'payload': 'paladin',
      },
      {
        'type': 'DISPLAY_CHOSEN_CLASS',
        'payload': 'bard',
      },
      {
        'type': 'DISPLAY_CHOSEN_CLASS',
        'payload': 'druid',
      },
    ];

    store.dispatch(displayClass('paladin'));
    store.dispatch(displayClass('bard'));
    store.dispatch(displayClass('druid'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
