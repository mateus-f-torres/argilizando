import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';

import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';

import UpdateRace from 'Containers/UpdateRace.js';
import MenuRace from 'Components/MenuRace.jsx';

const mockState = {
  race: {},
};

const mockStore = configureStore();
const store = mockStore(mockState);

describe('UpdateRace', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const container = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[{pathname: '/race', key: 'testKey'}]}>
        <UpdateRace />
      </MemoryRouter>
    </Provider>
  );

  const component = container.find('MenuRace');

  // TODO check lockRace dispatch

  describe('Unit Test', () => {
    test('render MenuRace component', () => {
      expect(container.containsMatchingElement(<MenuRace />)).toBe(true);
    });

    test('receive store.race', () => {
      expect(component.prop('race')).toEqual(mockState.race);
    });

    test('dispatch getRace', () => {
      const humanBtn = component.find('button').filter('[name="human"]');

      const expectedActions = [
        {
          'type': 'DISPLAY_CHOSEN_RACE',
          'payload': 'human',
        },
      ];

      humanBtn.simulate('click');
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('dispatch lockRace', () => {});
  });

  describe('Snapshot Test', () => {
    expect(container).toMatchSnapshot();
  });
});
