//@flow
import DESCRIPTION from 'DATA/modifiers.js';
import type {ScoreAction} from 'Types/actions.js';

// constants for ability score functions
const MAX_TOTAL = 55;
const MAX_SOLD = 10;
const MAX_SCORE = 20;
const MIN_SCORE = 1;

// constants for default state
const DEFAULT_STARTER = 45;
const DEFAULT_SCORE = 8;
const DEFAULT_MOD = -1;
const DEFAULT_COST = 1;
const DEFAULT_SHOW = false;

// str: [8, -1, 1, false]
const defaultScores = {
  total: DEFAULT_STARTER,
  str: [DEFAULT_SCORE, DEFAULT_MOD, DEFAULT_COST, DEFAULT_SHOW],
  dex: [DEFAULT_SCORE, DEFAULT_MOD, DEFAULT_COST, DEFAULT_SHOW],
  con: [DEFAULT_SCORE, DEFAULT_MOD, DEFAULT_COST, DEFAULT_SHOW],
  int: [DEFAULT_SCORE, DEFAULT_MOD, DEFAULT_COST, DEFAULT_SHOW],
  wis: [DEFAULT_SCORE, DEFAULT_MOD, DEFAULT_COST, DEFAULT_SHOW],
  cha: [DEFAULT_SCORE, DEFAULT_MOD, DEFAULT_COST, DEFAULT_SHOW],
};

type State = {
  total: number,
  str: [number, number, number, boolean | string],
  dex: [number, number, number, boolean | string],
  con: [number, number, number, boolean | string],
  int: [number, number, number, boolean | string],
  wis: [number, number, number, boolean | string],
  cha: [number, number, number, boolean | string],
};

const scoreReducer = (state: State = defaultScores, action: ScoreAction) => {
  // $FlowFixMe, 'maybe there' since reset has no payload
  let ability = action.payload;
  let score; let mod; let cost; let show;

  switch (action.type) {
  case 'INCREMENT_ABILITY_SCORE':
    // array destruct variable assignment
    [score, mod, cost, show] = state[ability];

    // overflow MAX_TOTAL control
    // move would result in negative points in spending pool
    if (countPoints(score + 1, state.total) < 0) {
      // invalid move dont modify state
      return state;

      // overflow MAX_SCORE control
      // move would result in score above max
    } else if (score + 1 > MAX_SCORE) {
      // invalid move dont modify state
      return state;

      // setup new score , modifier, cost, description and total
    } else {
      // increment score
      score++;
      // get new modifier
      mod = getModifier(score);
      // change next point buy cost
      cost = score > 11 ? mod + 1 : 1;
      switch (score) {
      // breakpoints where next point buy will cost more
      // since next point will increase current modifier
      // e.g. from 12(+1) to 13(+1), will cost 2 CORRECT
      //      from 11(+0) to 12(+1), will cost 1 WRONG
      case 11: case 13: case 15: case 17: case 19: cost++;
      }
      // ternary assignment
      // will change description if user had it on
      show = show != false
        ? getDescription(ability, mod)
        : false;
      // get number of points in the spending pool
      let newTotal = countPoints(score, state.total);
      // return new copy of state
      // only changing ability user interacted with
      // and changing total points left in spending pool
      return Object.assign({}, state, {
        [ability]: [score, mod, cost, show],
      }, {
        total: newTotal,
      });
    }

  case 'DECREMENT_ABILITY_SCORE':
    // array destruct variable assignment
    [score, mod, cost, show] = state[ability];

    // overflow MAX_SOLD control
    // move would result in too many points in spending pool
    if (soldOut(state, state.total, ability, score - 1)) {
      // invalid move dont modify state
      return state;

      // underflow MIN_SCORE control
      // move would result in score below min
    } else if (score - 1 < MIN_SCORE) {
      // invalid move dont modify state
      return state;

      // setup new score, modifier, cost, description and total
    } else {
      // decrement score
      score--;
      // get new modifier
      mod = getModifier(score);
      // change next point buy cost
      cost = score > 11 ? mod + 1 : 1;
      switch (score) {
      // breakpoints where next point buy will cost more
      // since next point will increase current modifier
      // e.g. from 12(+1) to 13(+1), will cost 2 CORRECT
      //      from 11(+0) to 12(+1), will cost 1 WRONG
      case 11: case 13: case 15: case 17: case 19: cost++;
      }
      // ternary assignment
      // will change description if user had it on
      show = show != false
        ? getDescription(ability, mod)
        : false;
      // get number of points in the spending pool
      let newTotal = countPoints(score, state.total, true);
      // return new copy of state
      // only changing ability user interacted with
      // and changing total points left in spending pool
      return Object.assign({}, state, {
        [ability]: [score, mod, cost, show],
      }, {
        total: newTotal,
      });
    }

  case 'TOGGLE_ABILITY_SCORE_DESCRIPTION':
    // array destruct variable assignment
    [score, mod, cost, show] = state[ability];
    // ternary assignment
    //   current value of show is falsy ?
    //     true  -> insert text description
    //     false -> remove text description
    show = show == false
      ? getDescription(ability, mod)
      : false;
    // return new copy of state
    // only changing ability user interacted with
    return Object.assign({}, state, {
      [ability]: [score, mod, cost, show],
    });

  case 'RESET_ALL_ABILITY_SCORES':
    // reset all abilities
    // return default state
    return Object.assign({}, defaultScores);

  default:
    return state;
  }
};


// HELPERS

/* Count how many points are left on the spending pool
 * Params:
 *  score: number, value user is trying to change
 *  points: number, points available at spending pool before change
 *  selling: boolean, optional flag that inverts behavior
 * Returns:
 *  total: number, points available at spending pool after change
 */
function countPoints(score, points, selling) {
  // ternary assignment
  //   score user wants is above 11 ?
  //     true ->  cost = 1 + that score's modifier
  //     false -> cost = 1
  let cost = score > 11 ? getModifier(score) + 1 : 1;
  // adjust when selling points with modifiers
  if (selling && score >= 11) {
    switch (score) {
    // breakpoints where modifier changes value
    // must refund correct value to user
    // e.g. from 13 to 12 (+1), refund 2 CORRECT
    //      from 12 to 11 (+0), refund 1 WRONG
    case 11: case 13: case 15: case 17: case 19: cost++; break;
    }
  }
  // switch from decrementing to incrementing if selling flag present
  return selling ? points + cost : points - cost;
}

/* Control function to stop overselling when ability score < 8
 * Params:
 *  state: object, all six ability scores each -> [value, mod, cost, text]
 *  points: number, points left on the spending pool
 *  ability: string, ability score user wants to sell points from
 *  value: mockup of ability score value -1 to check possibility
 * Returns:
 *  answer: boolean, whether or not sold points > MAX_SOLD
 */
function soldOut(state, points, ability, value) {
  let sold = 0;
  for (let key in state) {
    // sanity check that we are not following the __proto__ link
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      // ternary assignment
      //  state[key] == ability we are checking
      //    true  -> use mockup value provided
      //    false -> use real value inside key
      let score = key == ability ? value : state[key][0];
      // tally up score values below 8
      // e.g. str 6 and dex 7 == 3 points sold
      if (score && score < 8) sold = sold + 8 - score;
    }
  }
  // control getting points above MAX_TOTAL constant
  if (countPoints(value, points, true) > MAX_TOTAL) return true;
  // control selling points above MAX_SOLD constant
  return sold > MAX_SOLD;
}

/* Get text description of ability score value
 * Params:
 *  ability: string, short version of ability score name
 *  mod: number, modifier value used to find description
 * Returns:
 *  desc[1]: string, description matching given ability modifier
 */
function getDescription(ability, mod) {
  // find what ability score should we retrive text
  // i.e. str, dex, con, int, wis or cha
  for (let key in DESCRIPTION) {
    if (key == ability) {
      // items inside ability key is an array of pairs
      // i.e. str: [[2, 'text'], [3, 'text'], [4, 'text']]
      for (let desc of DESCRIPTION[ability]) {
        // find number that matches given modifier
        // and return that number's description
        if (desc[0] == mod) return desc[1];
      }
    }
  }
}

/* Get abiliy score modifier matching ability score value
 * Params:
 *  num: number, current ability score value
 * Returns:
 *  number, equivalent ability score modifier
 */
function getModifier(num) {
  // modifiers change at odd score numbers
  switch (num) {
  case 1: return -5;
  case 2: case 3: return -4;
  case 4: case 5: return -3;
  case 6: case 7: return -2;
  case 8: case 9: return -1;
  case 10: case 11: return 0;
  case 12: case 13: return 1;
  case 14: case 15: return 2;
  case 16: case 17: return 3;
  case 18: case 19: return 4;
  case 20: case 21: return 5;
  case 22: case 23: return 6;
  case 24: case 25: return 7;
  case 26: case 27: return 8;
  case 28: case 29: return 9;
  case 30: return 10;
  }
}

export default scoreReducer;

