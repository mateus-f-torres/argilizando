//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import Score from './Score.jsx';
import ABILITIES from '../data/scores.js';

import 'Styles/AbilityScores.scss';

type Props = {};

class AbilityScores extends React.Component {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.resetBtn = this.resetBtn.bind(this);
    this.lockScore = this.lockScore.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let type = e.target.name; 
    let h5 = e.target.parentNode.childNodes[1];
    let ability = h5.attributes.name.value;
    switch(type) {
      case "+":
        this.props.scorePlus(ability);
        break;
      case "-":
        this.props.scoreMinus(ability);
        break;
      case "?":
        this.props.toggleText(ability);
        break;
    }
  }

  resetBtn() {
    this.props.resetBtn();
  }

  lockScore() {
    let score = {
    str: [this.props.str[0], this.props.str[1]],
    dex: [this.props.dex[0], this.props.dex[1]],
    con: [this.props.con[0], this.props.con[1]],
    int: [this.props.int[0], this.props.int[1]],
    wis: [this.props.wis[0], this.props.wis[1]],
    cha: [this.props.cha[0], this.props.cha[1]]
    }
    this.props.lockScore(score);
  }

  render() {

    return (
      <section id="SCORE">
        <h2>Ability Scores</h2>
        <h3>{this.props.total} points left to spend</h3>
        <div className="horizontal-line" />
        <ul id="score-list">
          {
            // store unloads all six ABILITIES as props
            // e.g. props.str, props.dex, props.con
            // create a single score component for each
            // getting the correct score and modifier
            ABILITIES.map((name) => {
              let arr = this.props[name[0]];
              let [score, mod, cost, show] = arr;

              return (<Score
                key={name[0]}
                short={name[0]}
                long={name[1]}
                score={score}
                mod={mod}
                cost={cost}
                show={show}
                handleClick={this.handleClick}
              />)

            })
          }
        </ul>
        <div className="horizontal-line no-bottom" />
        <div className="lock-box">
          <button onClick={this.resetBtn}>Reset</button>
          <Link to="/">
            <button onClick={this.lockScore}>Lock</button>
          </Link>
        </div>
    </section>
    );
  }
};

export default AbilityScores;
