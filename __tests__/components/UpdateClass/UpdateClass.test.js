import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';

import UpdateClass from 'Components/UpdateClass.js';
import MenuClass from 'Components/UpdateClass/MenuClass.js';

const mockState = {
  _class: {},
};

const mockStore = configureStore();
const store = mockStore(mockState);

describe('UpdateClass', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const container = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[{pathname: '/class', key: 'testKey'}]}>
        <UpdateClass />
      </MemoryRouter>
    </Provider>
  );

  // TODO check lockClass dispatch

  describe('Unit Test', () => {
    test('render MenuClass component', () => {
      expect(container.containsMatchingElement(<MenuClass />)).toBe(true);
    });

    test('receive store._class', () => {
      const component = container.find('MenuClass');

      expect(component.prop('_class')).toEqual(mockState._class);
    });

    test('dispatch getClass', () => {
      const component = container.find('MenuClass');

      const barbarianBtn =
        component.find('button').filter('[name="barbarian"]');

      const expectedActions = [
        {
          'type': 'DISPLAY_CHOSEN_CLASS',
          'payload': 'barbarian',
        },
      ];

      barbarianBtn.simulate('click');
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch lockClass', () => {});
  });

  describe('Snapshot Test', () => {
    expect(container).toMatchSnapshot();
  });
});
