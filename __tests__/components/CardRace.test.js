import React from 'react';
import {shallow} from 'enzyme';
import CardRace from '../../src/components/CardRace.jsx';

describe('<CardRace />', () => {
  const race = {
    name: 'Human',
    id: 'human',
    age: [20, 80],
    size: 'Medium',
    height: '6ft (1,7m)',
    weight: '180lb (80kg)',
    eyes: 'All human variations',
    skin: 'All human variations',
    hair: 'All human variations',
    _placeholder: 'Salazar Marivaldi',
    speed: 30,
    lang: ['Common', '..'],
    special: [
      [
        'Bonus Skill',
        `You gain proficiency in one additional skill 
        from your class skill list.`,
      ],
      [
        'Magical Affinity',
        `Whenever you are 5ft from a magical item you can sense 
        its magic through one of your senses. 
        Once per short rest you can increase the range of this feature 
        to 30ft for 1min, after that you lose this feature and 
        must finish a short rest to regain its passive effect. 
        Using this feature only tells you if something is magical or not, 
        nothing more than that.`,
      ],
      [
        'Grit',
        `You can use your reaction to gain advantage on a 
        saving throw against a spell. 
        You must roll a 5 or 6 on a d6 to use this feature again.`,
      ],
    ],
  };


  it('displays race name', () => {
    const wrapper = shallow(<CardRace {...race}/>);

    expect(wrapper.find('h2').text()).toEqual('Human');
  });
});
