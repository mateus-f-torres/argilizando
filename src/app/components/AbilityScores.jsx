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

  render() {
    return (
      <section id="SCORE">
        <h2>Ability Scores</h2>
        <h3>{this.props.total} points left to spend</h3>
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
