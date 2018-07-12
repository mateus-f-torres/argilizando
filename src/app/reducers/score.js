import { DESCRIPTION } from '../logic/data.js';

// constants for ability score functions
const MAX_TOTAL = 55;
const MAX_SOLD = 10;
const MAX_SCORE = 20;
const MIN_SCORE =  1;

// constants for default state
const DEFAULT_STARTER = 45;
const DEFAULT_SCORE =  8;
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
  cha: [DEFAULT_SCORE, DEFAULT_MOD, DEFAULT_COST, DEFAULT_SHOW]
};

const scoreReducer = (state = defaultScores, action) => {

  let ability = action.ability;
  let score, mod, cost, show;

  switch(action.type) {

    case 'INCREMENT_SCORE':
      [score, mod, cost, show] = state[ability];
      // overflow MAX_TOTAL control
      if(countPoints(score + 1, state.total) < 0) {
        return state;
      }
      // overflow MAX_SCORE control
      else if(score + 1 > MAX_SCORE) {
        return state;
      }
      // setup new score, modifier, cost, description and total
      else {
        score++;
        mod = getModifier(score);
        cost = score > 11 ? mod + 1 : 1;
        // when next point buy will cost more because of modifier increase
        switch(score) {case 11: case 13: case 15: case 17: case 19: cost++;}
        show = show != false
          ? getDescription(ability, mod)
          : false;
        let newTotal = countPoints(score, state.total)
        return Object.assign({}, state, {
          [ability]: [score, mod, cost, show]
        }, {
          total: newTotal
        })
      }

    case 'DECREMENT_SCORE':
      [score, mod, cost, show] = state[ability];
      // overflow MAX_SOLD control
      if(soldOut(state, state.total, ability, score - 1)) {
        return state;
      }
      // underflow MIN_SCORE control
      else if(score - 1 < MIN_SCORE) {
        return state;
      }
      // setup new score, modifier, cost, description and total
      else {
        score--;
        mod = getModifier(score);
        cost = score > 11 ? mod + 1 : 1;
        switch(score) {case 11: case 13: case 15: case 17: case 19: cost++;}
        show = show != false
          ? getDescription(ability, mod)
          : false;
        let newTotal = countPoints(score, state.total, true);
        return Object.assign({}, state, {
          [ability]: [score, mod, cost, show]
        }, {
          total: newTotal
        })
      }

    case 'TOGGLE_DESCRIPTION':
      [score, mod, cost, show] = state[ability];
      // will return modifier description string when called while false
      show = show == false
        ? getDescription(ability, mod)
        : false;
      return Object.assign({}, state, {
        [ability]: [score, mod, cost, show]
      })

    case 'RESET_SCORE':
      return Object.assign({}, state, defaultScores) 

    default: 
      return state;
  }
}


// HELPERS

// tally points left, with selling flag case
function countPoints(score, points, selling) {
  let step = score > 11 ? getModifier(score) + 1 : 1;
  // adjust when selling points where modifier changes
  if(selling && score >= 11) {
    switch(score){case 11:case 13:case 15:case 17:case 19:step++;break;}
  }
  return selling ? points + step : points - step;
}

// control overselling when ability score < 8
function soldOut(state, points, ability, value) {
  let sold = 0;
  for(let key in state){
    let score = key == ability ? value : state[key][0];
    if(score && score < 8) sold = sold + 8 - score;
  }
  // control getting points > MAX_TOTAL
  if(countPoints(value, points, true) > MAX_TOTAL) return true;
  return sold > MAX_SOLD;
}

function getDescription(ability, mod) {
  for(let key in DESCRIPTION) {
    if(key == ability) {
      for(let desc of DESCRIPTION[ability]) {
        if(desc[0] == mod) return desc[1];
      }
    }
  }
}

function getModifier(num) {
  switch(num){
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

