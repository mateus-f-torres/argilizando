import RACES from '../src/data/races.js';

const getRace = (raceID) => {
  for (const category of RACES) {
    for (const item of category[1]) {
      if (item.id === raceID) return item;
    }
  }
};

export const mockHuman = Object.assign({}, getRace('human'));

export const mockOrc = Object.assign({}, getRace('orc'));
