import React from 'react';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

import CardBack from 'Components/UpdateBackground/CardBack.js';
import BACKGROUNDS from 'DATA/backgrounds.js';
import {getAsset} from 'Helpers';

describe('<CardBack />', () => {
  test('call lockBack when lock button clicked', () => {
    const mockOnClick = jest.fn();

    const mockBack = getAsset('acolyte', BACKGROUNDS);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/background/acolyte', key: 'testKey'}]}>
        <CardBack lockBack={mockOnClick} {...mockBack} />
      </MemoryRouter>
    );

    wrapper.find('[data-test="back-lock"]').simulate('click');
    expect(mockOnClick.mock.calls.length).toBe(1);
  });

  test('if (props.tool) render tools', () => {
    const mockBack = getAsset('charlatan', BACKGROUNDS);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/background/charlatan', key: 'testKey'}]}>
        <CardBack {...mockBack} />
      </MemoryRouter>
    );

    expect(wrapper.find('[data-test="back-tools"]').exists()).toBe(true);
  });

  test('if (!props.tool) dont render tools', () => {
    const mockBack = getAsset('heretic', BACKGROUNDS);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/background/heretic', key: 'testKey'}]}>
        <CardBack {...mockBack} />
      </MemoryRouter>
    );

    expect(wrapper.find('[data-test="back-tools"]').exists()).toBe(false);
  });

  test('if (props.lang) render langs', () => {
    const mockBack = getAsset('acolyte', BACKGROUNDS);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/background/acolyte', key: 'testKey'}]}>
        <CardBack {...mockBack} />
      </MemoryRouter>
    );

    expect(wrapper.find('[data-test="back-langs"]').exists()).toBe(true);
  });

  test('if (!props.tool) dont render langs', () => {
    const mockBack = getAsset('sailor', BACKGROUNDS);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/background/sailor', key: 'testKey'}]}>
        <CardBack {...mockBack} />
      </MemoryRouter>
    );

    expect(wrapper.find('[data-test="back-langs"]').exists()).toBe(false);
  });

  test('if (props.tool && props.lang) render both', () => {
    const mockBack = getAsset('noble', BACKGROUNDS);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/background/noble', key: 'testKey'}]}>
        <CardBack {...mockBack} />
      </MemoryRouter>
    );

    expect(wrapper.find('[data-test="back-tools"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="back-langs"]').exists()).toBe(true);
  });

  test('match current production CardBack', () => {
    const mockBack = getAsset('acolyte', BACKGROUNDS);

    const wrapper = mount(
      <MemoryRouter initialEntries={
        [{pathname: '/background/acolyte', key: 'testKey'}]}>
        <CardBack {...mockBack} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
