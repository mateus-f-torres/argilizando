import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';

import UpdateScores from 'Containers/UpdateScores.js';
import MenuScore from 'Components/MenuScore.jsx';

const mockState = {
  score: {
    total: 45,
    str: [8, -1, 1, false],
    dex: [8, -1, 1, false],
    con: [8, -1, 1, false],
    int: [8, -1, 1, false],
    wis: [8, -1, 1, false],
    cha: [8, -1, 1, false],
  },
};

const mockStore = configureStore();
const store = mockStore(mockState);

describe('UpdateScores', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const container = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[{pathname: '/score', key: 'testKey'}]}>
        <UpdateScores />
      </MemoryRouter>
    </Provider>
  );

  describe('Unit Test', () => {
    test('render MenuScore component', () => {
      expect(container.containsMatchingElement(<MenuScore />)).toBe(true);
    });

    test('receive all props from store.score', () => {
      const component = container.find('MenuScore');

      expect(component.prop('total')).toBe(mockState.score.total);
      expect(component.prop('str')).toEqual(mockState.score.str);
      expect(component.prop('dex')).toEqual(mockState.score.dex);
      expect(component.prop('con')).toEqual(mockState.score.con);
      expect(component.prop('int')).toEqual(mockState.score.int);
      expect(component.prop('wis')).toEqual(mockState.score.wis);
      expect(component.prop('cha')).toEqual(mockState.score.cha);
    });

    test('dispatch incrementScore', () => {
      const component = container.find('MenuScore');

      const strPlusBtn = component.find('CardScore').at(0)
        .find('button').filter('[name="+"]');

      const dexPlusBtn = component.find('CardScore').at(1)
        .find('button').filter('[name="+"]');

      const expectedActions = [
        {
          'type': 'INCREMENT_ABILITY_SCORE',
          'payload': 'str',
        },
        {
          'type': 'INCREMENT_ABILITY_SCORE',
          'payload': 'dex',
        },
      ];

      strPlusBtn.simulate('click');
      dexPlusBtn.simulate('click');
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch decrementScore', () => {
      const component = container.find('MenuScore');

      const conMinusBtn = component.find('CardScore').at(2)
        .find('button').filter('[name="-"]');

      const intMinusBtn = component.find('CardScore').at(3)
        .find('button').filter('[name="-"]');

      const expectedActions = [
        {
          'type': 'DECREMENT_ABILITY_SCORE',
          'payload': 'con',
        },
        {
          'type': 'DECREMENT_ABILITY_SCORE',
          'payload': 'int',
        },
      ];

      conMinusBtn.simulate('click');
      intMinusBtn.simulate('click');
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch toggleDescription', () => {
      const component = container.find('MenuScore');

      const wisToggleBtn = component.find('CardScore').at(4)
        .find('button').filter('[name="?"]');

      const chaToggleBtn = component.find('CardScore').at(5)
        .find('button').filter('[name="?"]');

      const expectedActions = [
        {
          'type': 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
          'payload': 'wis',
        },
        {
          'type': 'TOGGLE_ABILITY_SCORE_DESCRIPTION',
          'payload': 'cha',
        },
      ];

      wisToggleBtn.simulate('click');
      chaToggleBtn.simulate('click');
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch resetScore', () => {
      const component = container.find('MenuScore');

      const resetBtn = component.find('[data-test="score-reset"]');

      const expectedActions = [
        {
          'type': 'RESET_ALL_ABILITY_SCORES',
        },
      ];

      resetBtn.simulate('click');
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch lockScore', () => {
      const component = container.find('MenuScore');

      const lockBtn = component.find('[data-test="score-lock"]');

      const expectedActions = [
        {
          'type': 'LOCK_SCORE',
          'payload': {
            'str': [8, -1],
            'dex': [8, -1],
            'con': [8, -1],
            'int': [8, -1],
            'wis': [8, -1],
            'cha': [8, -1],
          },
        },
      ];

      lockBtn.simulate('click');
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Snapshot Test', () => {
    expect(container).toMatchSnapshot();
  });
});
