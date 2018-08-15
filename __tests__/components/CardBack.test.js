import React from 'react';
import {shallow} from 'enzyme';
import CardBack from '../../src/components/CardBack.jsx';
import BACKGROUNDS from '../../src/data/backgrounds.js';

describe('<CardBack />', () => {
  describe('Unit Tests', () => {
    describe('Background with Tools and Languages', () => {
      let back = {
        name: 'Noble',
        pitch: `You understand wealth, power, and privilege.`,
        skill: ['History', 'Persuasion'],
        tool: ['One gaming set'],
        lang: [1, 'One of your choice'],
        equip: [
          ['set of fine clothes'],
          ['signet ring'],
          ['scroll of pedigree'],
          ['purse containing 25gp'],
        ],
      };

      it('displays correct background name', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-name"]')
          .text()).toMatch(/Noble/);
      });

      it('displays correct background pitch', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-pitch"]')
          .text()).toMatch(new RegExp(back.pitch));
      });

      it('displays correct background skills list', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-skill"]')
          // 2 skills (li tags) + 1 header (h4 tag)
          .children().length).toBe(3);
      });

      it('displays correct background tools list', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-tool"]')
          // 1 tool (li tag) + 1 header (h4 tag)
          .children().length).toBe(2);
      });

      it('displays correct background extra language text', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-lang"]')
          // how many langs text (li tag) + 1 header (h4 tag)
          .children().length).toBe(2);

        expect(wrapper.find('[data-test="back-lang"]')
          .childAt(1).text()).toMatch(/One/);
      });

      it('displays correct equipment list', () => {
        const wrapper = shallow(<CardBack {...back}/>);
        expect(wrapper.find('[data-test="back-equip"]')
          // 3 traits (li tags) + 1 header (h3 tag)
          .children().length).toEqual(5);
      });
    });

    describe('Background without Tools', () => {
      let back = {
        name: 'Acolyte',
        pitch: `You understand wealth, power, and privilege.`,
        skill: ['History', 'Persuasion'],
        lang: [2, 'Two of your choice'],
        equip: [
          ['holy symbol'],
          ['prayer book', 'or prayer wheel'],
          ['5 sticks of incense'],
          ['vestments'],
          ['set of common clothes'],
          ['belt pouch containing 15gp'],
        ],
      };

      it('displays correct background name', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-name"]')
          .text()).toMatch(/Acolyte/);
      });

      it('tools list not shown', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-tool"]')
          .exists()).toBe(false);
      });

      it('displays correct background extra language text', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-lang"]')
          // how many langs text (li tag) + 1 header (h4 tag)
          .children().length).toBe(2);

        expect(wrapper.find('[data-test="back-lang"]')
          .childAt(1).text()).toMatch(/Two/);
      });
    });

    describe('Background without Languages', () => {
      let back = {
        name: 'Charlatan',
        pitch: `You have always had a way with people.`,
        skill: ['Deception', 'Sleight of Hand'],
        tool: ['Disguise kit', 'Forgery kit'],
        equip: [
          ['set of fine clothes'],
          ['diguise kit'],
          ['10 bottles with colored liquid',
            'or set of weighted dice',
            'or deck of marked cards',
            'or ring of an imaginary duke'],
          ['belt pouch containing 15g'],
        ],
      };

      it('displays correct background name', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-name"]')
          .text()).toMatch(/Charlatan/);
      });

      it('language text not shown', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-lang"]')
          .exists()).toBe(false);
      });

      it('displays correct background tools list', () => {
        const wrapper = shallow(<CardBack {...back}/>);

        expect(wrapper.find('[data-test="back-tool"]')
          // 2 tools (li tags) + 1 header (h4 tag)
          .children().length).toBe(3);
      });
    });
  });

  describe('Snapshot Test', () => {
    it('displays correct noble background card', () => {
      // 1st category -> options -> noble
      let back = BACKGROUNDS[0][1][2];

      const wrapper = shallow(<CardBack {...back}/>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
