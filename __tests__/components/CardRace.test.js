import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import CardRace from 'Components/CardRace.jsx';
import {mockHuman} from 'Mock/race.js';

describe('<CardRace />', () => {
  test('call lockRace when lock button clicked', () => {
    const mockOnClick = jest.fn();
    const wrapper = mount(
      <MemoryRouter initialEntries={
        [
          {pathname: '/race/human', key: 'testKey'},
        ]
      }>
        <CardRace lockRace={mockOnClick} {...mockHuman} />
      </MemoryRouter>
    );

    wrapper.find('[data-test="race-lock"]').simulate('click');

    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  test('CardRace snapshot matches current production CardRace', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={
        [
          {pathname: '/race/human', key: 'testKey'},
        ]
      }>
        <CardRace {...mockHuman} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
