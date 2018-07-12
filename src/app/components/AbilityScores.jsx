//@flow
import * as React from 'react';
import Score from './Score.jsx';
import { ABILITIES } from '../logic/data.js';

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

  resetBtn(e) {
    e.preventDefault();
    this.props.resetBtn();
  }

  lockScore(e) {
    e.preventDefault();
    this.props.lockScore();
  }

  render() {

    const btnClass = "lock-btn waves-effect waves-light";

    return (
      <section id="SCORE">
        <h2>Ability Scores</h2>
        {
          this.props.total !== 0
            ? <h3>{this.props.total} points left to spend</h3>
            : <div>
                <button onClick={this.resetBtn} className={btnClass}>Reset</button>
                <button onClick={this.lockScore} className={btnClass}>Lock</button>
              </div>
        }
        <hr />
        <ul>
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
    </section>
    );
  }
};

export default AbilityScores;
