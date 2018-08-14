//@flow

export type Race = {
  id: string,
  name: string,
  age: [number, number],
  size: string,
  height: string,
  weight: string,
  eyes: string,
  skin: string,
  hair: string,
  _placeholder: string,
  speed: number,
  lang: [string, string],
  special: Array<[string, string]>,
};

export type _Class = {
  id: string,
  primary: string,
  hp: number,
  armor: number,
  weapon: number,
  magic: number,
  versatile: number,
  save: [string, string],
  skill: [number, Array<string>],
  tool?: Array<string>,
  equip: Array<Array<string>>,
  _equip: Array<Array<string>>,
  _pack: Array<string>,
  special: Array<[string, string, string]>,
  _spell: boolean | {
    ability: string,
    cantrips: number,
    known: number,
    slots: number,
    ritual: boolean,
    focus: string | boolean,
    notYet?: boolean,
  },
};

export type LongScore = {
  short: string,
  long: string,
  score: number,
  mod: number,
  cost: number,
  show: boolean | string,
};

export type ShortScore = {
  str: [number, number],
  dex: [number, number],
  con: [number, number],
  int: [number, number],
  wis: [number, number],
  cha: [number, number],
};

export type Background = {
  id: string,
  name: string,
  pitch: string,
  personality: string,
  ideals: string,
  bonds: string,
  flaws: string,
  skill: [string, string],
  tool?: Array<string>,
  lang?: [number, string],
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
  score: ShortScore,
  saves: Array<[string, string, number, ?boolean]>,
  skills: Array<[string, string, number, ?boolean]>,
  pp: number,
  langs: Array<[boolean, string, boolean, ?boolean]>,
  tools: {
    prof: Array<string>,
    all: {
      artisan: Array<[string, ?boolean]>,
      gaming: Array<[string, ?boolean]>,
      musical: Array<[string, ?boolean]>,
      unique: Array<[string, ?boolean]>,
    },
  },
};

export type CharTraits = Array<Array<string>>;

export type CharEquip = {
  gear: Array<[string, string]>,
  pack: {
    fromClass: Array<string>,
    fromPack: Array<string>,
    fromBack: Array<Array<string>>,
  },
  money: {
    cp: number,
    sp: number,
    gp: number,
    pp: number,
  },
};

export type CharSpell = {
  _class: string,
  ability: string,
  save: number,
  toHit: number,
  cantrips: number,
  known: number,
  prepared: number,
  slots: number,
  ritual: boolean,
  focus: boolean | string,
  notYet?: boolean,
};

export type CharBody = {
  race: string,
  size: string,
  gender: string,
  age: string,
  height: string,
  weight: string,
  eyes: string,
  skin: string,
  hair: string,
  extra?: Array<string>,
};

export type CharPast = {
  background: string,
  personality: string,
  ideals: string,
  bonds: string,
  flaws: string,
  extra?: Array<string>,
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

