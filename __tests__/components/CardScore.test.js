import React from 'react';
import {shallow} from 'enzyme';
import CardScore from '../../src/components/CardScore.jsx';

describe('<CardScore />', () => {
  describe('No text and negative modifier (default)', () => {
    let score = {
      long: 'Strength',
      score: 8,
      mod: -1,
      cost: 1,
      show: false,
    };

    it('displays correct score name', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-name"]')
        .text()).toMatch(/Strength/);
    });

    it('displays correct score number', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-number"]')
        .text()).toMatch(/8/);
    });

    it('displays correct score modifier, when negative', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-mod"]')
        .text()).toMatch(/-1/);
    });

    it('displays correct score cost', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-cost"]')
        .text()).toMatch(/1/);
    });

    it('score description not shown', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-text"]')
        .exists()).toBe(false);
    });
  });

  describe('With text and positive modifier', () => {
    let score = {
      long: 'Constitution',
      score: 20,
      mod: 5,
      cost: 6,
      show: 'score description',
    };

    it('displays correct score name', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-name"]')
        .text()).toMatch(/Constitution/);
    });

    it('displays correct score number', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-number"]')
        .text()).toMatch(/20/);
    });

    it('displays correct score modifier, when positive', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-mod"]')
        .text()).toMatch(/\+5/);
    });

    it('displays correct score cost', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-cost"]')
        .text()).toMatch(/6/);
    });

    it('score description shown', () => {
      const wrapper = shallow(<CardScore {...score}/>);

      expect(wrapper.find('[data-test="score-text"]')
        .exists()).toBe(true);
      expect(wrapper.find('[data-test="score-text"]')
        .text()).toMatch(/score\sdescription/);
    });
  });
});
