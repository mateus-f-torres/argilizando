//@flow
// Centralized Flow Type definitions

export type Race = {
  id: string,
  name: string,
  age: Array<number>,
  size: string,
  height: string,
  weight: string,
  eyes: string,
  skin: string,
  hair: string,
  _placeholder: string,
  speed: number,
  lang: Array<string>,
  special: Array<Array<string>>,
};

export type _Class = {
  id: string,
  primary: string,
  hp: number,
  armor: number,
  weapon: number,
  magic: number,
  versatile: number,
  save: Array<string>,
  skill: Array<number | Array<string>>,
  tool?: Array<string>,
  equip: Array<Array<string>>,
  _equip: Array<Array<string>>,
  _pack: Array<string>,
  special: Array<Array<string>>,
  _speall: boolean | {
    ability: string,
    cantrips: number,
    known: number,
    slots: number,
    ritual: boolean,
    focus: string | boolean,
    notYet?: boolean,
  },
};

export type Score = {
  short: string,
  long: string,
  score: number,
  mod: number,
  cost: number,
  show: boolean | string,
};

export type Background = {
  id: string,
  name: string,
  pitch: string,
  personality: string,
  ideals: string,
  bonds: string,
  flaws: string,
  skill: Array<string>,
  tool?: Array<string>,
  lang?: Array<number | string>,
  equip: Array<Array<string>>,
  _gold: number,
  _tools?: {
    artisan?: boolean,
    gaming?: boolean,
    musical?: boolean,
    unique?: Array<string>,
  },
};

export type CharMain = {
  _class: string,
  level: number,
  hitPoints: number,
  hitDice: string,
  armorClass: number,
  speed: number,
  init: number,
  prof: number,
  score: {
    str: Array<number>,
    dex: Array<number>,
    con: Array<number>,
    int: Array<number>,
    wis: Array<number>,
    cha: Array<number>,
  },
  saves: Array<Array<string | number>>,
  skills: Array<Array<string | number>>,
  pp: number,
  langs: Array<Array<boolean | string>>,
  tools: {
    prof: Array<string>,
    all: {
      artisan: Array<string | ?boolean>,
      gaming: Array<string | ?boolean>,
      musical: Array<string | ?boolean>,
      unique: Array<string | ?boolean>,
    },
  },
};

export type CharTraits = {

};

export type CharEquip = {

};

export type CharSpell = {

};

export type CharBody = {

};

export type CharPast = {

};

export type Character = {
  name: string,
  main: CharMain,
  traits: CharTraits,
  equip: CharEquip,
  spell: CharSpell,
  body: CharBody,
  past: CharPast,
};

export type Done = {
  race: boolean | Race,
  _class: boolean | _Class,
  score: boolean | {
    str: Array<number>,
    dex: Array<number>,
    con: Array<number>,
    int: Array<number>,
    wis: Array<number>,
    cha: Array<number>,
  },
  back: boolean | Background,
  char: boolean | Character,
};
