import React from 'react';
import {shallow} from 'enzyme';
import CardRace from '../../src/components/CardRace.jsx';

describe('<CardRace />', () => {
  let race = {
    name: 'Human',
    age: [20, 80],
    size: 'Medium',
    height: '6ft (1,7m)',
    weight: '180lb (80kg)',
    speed: 30,
    lang: ['Common', '..'],
    special: [
      [
        'trait title',
        'trait description',
      ],
      [
        'trait title',
        'trait description',
      ],
      [
        'trait title',
        'trait description',
      ],
    ],
  };

  it('displays correct race name', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-name"]')
      .text()).toMatch(/Human/);
  });

  it('displays correct race height', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-height"]')
      .text()).toMatch(/6ft\s\(1,7m\)/);
  });

  it('displays correct race weight', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-weight"]')
      .text()).toMatch(/180lb\s\(80kg\)/);
  });

  it('displays correct race adulthood', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-adulthood"]')
      .text()).toMatch(/20\syears/);
  });

  it('displays correct race lifespan', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-lifespan"]')
      .text()).toMatch(/80\syears/);
  });

  it('displays correct race size', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-size"]')
      .text()).toMatch(/Medium/);
  });

  it('displays correct race speed', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-speed"]')
      .text()).toMatch(/30ft/);
  });

  it('displays correct race langs', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-langs"]')
      .text()).toMatch(/Common\s&\s\.\.\./);
  });

  it('displays correct race traits', () => {
    const wrapper = shallow(<CardRace {...race}/>);
    expect(wrapper.find('[data-test="race-traits"]')
      // 3 traits (li tags) + 1 header (h3 tag)
      .children().length).toEqual(4);
  });
});
