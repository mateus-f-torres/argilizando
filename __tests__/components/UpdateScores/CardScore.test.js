import React from 'react';
import {shallow} from 'enzyme';
import CardScore from 'Components/UpdateScores/CardScore.js';

describe('<CardScore />', () => {
  describe('test handleClick', () => {
    const mockScore = {
      long: 'Strength',
      score: 8,
      mod: -1,
      cost: 1,
      show: false,
    };

    test('call handleClick with "+"', () => {
      const mockHandleClick = jest.fn();

      const wrapper = shallow(
        <CardScore handleClick={mockHandleClick} {...mockScore}/>);

      wrapper.find('[data-test="score-plus"]').simulate('click');
      expect(mockHandleClick.mock.calls.length).toBe(1);
    });

    test('call handleClick with "-"', () => {
      const mockHandleClick = jest.fn();

      const wrapper = shallow(
        <CardScore handleClick={mockHandleClick} {...mockScore}/>);

      wrapper.find('[data-test="score-minus"]').simulate('click');
      expect(mockHandleClick.mock.calls.length).toBe(1);
    });

    test('call handleClick with "?"', () => {
      const mockHandleClick = jest.fn();

      const wrapper = shallow(
        <CardScore handleClick={mockHandleClick} {...mockScore}/>);

      wrapper.find('[data-test="score-show"]').simulate('click');
      expect(mockHandleClick.mock.calls.length).toBe(1);
    });
  });

  describe('"maybe-there" props tests', () => {
    const mockScoreA = {
      long: 'Dexterity',
      score: 12,
      mod: 1,
      cost: 2,
      show: false,
    };
    const mockScoreB = {
      long: 'Charisma',
      score: 6,
      mod: -2,
      cost: 1,
      show: 'mock text',
    };

    test('concat "+" with above than 0 scores', () => {
      const wrapper = shallow(<CardScore {...mockScoreA}/>);

      expect(wrapper.find('.mod').text()).toMatch(/^\+1$/);
    });

    test('dont concat "+" with 0 or lower scores', () => {
      const wrapper = shallow(<CardScore {...mockScoreB}/>);

      expect(wrapper.find('.mod').text()).toMatch(/^-2$/);
    });

    test('if (props.show) render text', () => {
      const wrapper = shallow(<CardScore {...mockScoreB}/>);

      expect(wrapper.find('[data-test="score-text"]')
        .exists()).toBe(true);
    });
    test('if (!props.show) dont render text', () => {
      const wrapper = shallow(<CardScore {...mockScoreA}/>);

      expect(wrapper.find('[data-test="score-text"]')
        .exists()).toBe(false);
    });
  });

  describe('Snapshot test', () => {
    const mockScore = {
      long: 'Wisdom',
      short: 'wis',
      score: 10,
      mod: 0,
      cost: 1,
      show: 'mock text',
    };

    const wrapper = shallow(<CardScore {...mockScore} />);

    expect(wrapper).toMatchSnapshot();
  });
});
