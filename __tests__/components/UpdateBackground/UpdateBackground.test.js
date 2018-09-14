import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';

import UpdateBackground from 'Components/UpdateBackground.js';
import MenuBack from 'Components/UpdateBackground/MenuBack.js';

const mockState = {
  background: {},
};

const mockStore = configureStore();
const store = mockStore(mockState);

describe('UpdateBackground', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const container = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={
        [{pathname: '/background', key: 'testKey'}]}>
        <UpdateBackground />
      </MemoryRouter>
    </Provider>
  );

  // TODO check lockBackground dispatch

  describe('Unit Test', () => {
    test('render MenuBack component', () => {
      expect(container.containsMatchingElement(<MenuBack />)).toBe(true);
    });

    test('receive store.back', () => {
      const component = container.find('MenuBack');

      expect(component.prop('back')).toEqual(mockState.background);
    });

    test('dispatch getBack', () => {
      const component = container.find('MenuBack');

      const acolyteBtn =
        component.find('button').filter('[name="acolyte"]');

      const expectedActions = [
        {
          'type': 'DISPLAY_CHOSEN_BACKGROUND',
          'payload': 'acolyte',
        },
      ];

      acolyteBtn.simulate('click');
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch lockClass', () => {});
  });

  describe('Snapshot Test', () => {
    expect(container).toMatchSnapshot();
  });
});
