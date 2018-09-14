import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

import CardRace from 'Components/UpdateRace/CardRace.js';
import RACES from 'DATA/races.js';
import {getAsset} from 'Helpers';

describe('<CardRace />', () => {
  test('call lockRace when lock button clicked', () => {
    const mockOnClick = jest.fn();

    const mockRace = getAsset('human', RACES);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/race/human', key: 'testKey'}]}>
        <CardRace lockRace={mockOnClick} {...mockRace} />
      </MemoryRouter>
    );

    wrapper.find('[data-test="race-lock"]').simulate('click');
    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  test('match current production CardRace', () => {
    const mockRace = getAsset('human', RACES);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/race/human', key: 'testKey'}]}>
        <CardRace {...mockRace} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
