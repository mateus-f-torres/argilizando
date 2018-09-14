import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

import CardClass from 'Components/UpdateClass/CardClass.js';
import CLASSES from 'DATA/classes.js';
import {getAsset} from 'Helpers';

describe('<CardClass />', () => {
  test('call lockClass when lock button clicked', () => {
    const mockOnClick = jest.fn();

    const mockClass = getAsset('barbarian', CLASSES);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/class/barbarian', key: 'testKey'}]}>
        <CardClass lockClass={mockOnClick} {...mockClass} />
      </MemoryRouter>
    );

    wrapper.find('[data-test="class-lock"]').simulate('click');
    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  test('if (props.tool) render tools', () => {
    const mockClass = getAsset('rogue', CLASSES);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/class/rogue', key: 'testKey'}]}>
        <CardClass {...mockClass} />
      </MemoryRouter>
    );

    expect(wrapper.find('[data-test="class-tools"]').exists()).toBe(true);
  });

  test('if (!props.tool) dont render tools', () => {
    const mockClass = getAsset('paladin', CLASSES);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/class/paladin', key: 'testKey'}]}>
        <CardClass {...mockClass} />
      </MemoryRouter>
    );

    expect(wrapper.find('[data-test="class-tools"]').exists()).toBe(false);
  });

  test('match current production CardClass', () => {
    const mockClass = getAsset('barbarian', CLASSES);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/class/barbarian', key: 'testKey'}]}>
        <CardClass {...mockClass} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
