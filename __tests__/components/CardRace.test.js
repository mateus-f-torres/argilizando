import React from 'react';
import {shallow} from 'enzyme';
import CardRace from '../../src/components/CardRace.jsx';
import RACES from '../../src/data/races.js';

describe('<CardRace />', () => {
  let race;
  // helper for user interaction mocking
  function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  let randomCategory = randomRange(0, RACES.length - 1);

  for (let i = 0; i < RACES.length; i++) {
    if (i != randomCategory) continue;
    let options = RACES[i][1];
    let randomRace = randomRange(0, options.length - 1);
    race = options[randomRace];
  }

  it('displays correct race name', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-name"]')
      .text()).toEqual(race.name);
  });

  it('displays correct race height', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-height"]')
      .text()).toEqual(`Height:${race.height}.`);
  });
  it('displays correct race weight', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-weight"]')
      .text()).toEqual(`Weight:${race.weight}.`);
  });

  it('displays correct race adulthood', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-adulthood"]')
      .text()).toEqual(`Adulthood:${race.age[0]} years.`);
  });

  it('displays correct race lifespan', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-lifespan"]')
      .text()).toEqual(`Lifespan:${race.age[1]} years.`);
  });

  it('displays correct race size', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-size"]')
      .text()).toEqual(`Size:${race.size}.`);
  });

  it('displays correct race speed', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-speed"]')
      .text()).toEqual(`Speed:${race.speed}ft.`);
  });

  it('displays correct race langs', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('[data-test="race-langs"]')
      .text()).toEqual(`Speaks:${race.lang[0]} & ${race.lang[1]}.`);
  });

  it('displays correct race traits', () => {
    const wrapper = shallow(<CardRace {...race}/>);
    expect(wrapper.find('[data-test="race-traits"]')
      // add 1 to account for the h3 tag inside the ul
      .children().length).toEqual(race.special.length + 1);
  });
});
