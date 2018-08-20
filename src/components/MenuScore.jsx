//@flow
import * as React from 'react';
import {Link} from 'react-router-dom';
import CardScore from './CardScore.jsx';
import ABILITIES from '../data/scores.js';
import type {LongScore, ShortScore} from '../types/props.js';

import 'Styles/MenuScore.scss';

type Props = {
  total: number,
  str: LongScore,
  dex: LongScore,
  con: LongScore,
  int: LongScore,
  wis: LongScore,
  cha: LongScore,
  scorePlus: (string) => void,
  scoreMinus: (string) => void,
  toggleText: (string) => void,
  resetBtn: () => void,
  lockScore: (score: ShortScore) => void
};

class MenuScore extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).handleClick = this.handleClick.bind(this);
    (this: any).resetBtn = this.resetBtn.bind(this);
    (this: any).lockScore = this.lockScore.bind(this);
  }

  handleClick(e: SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    let type = e.currentTarget.name;
    if (e.currentTarget.parentNode && e.currentTarget.parentNode.childNodes) {
      let h5 = e.currentTarget.parentNode.childNodes[1];
      // $FlowFixMe
      let ability = h5.attributes.name.value;
      switch (type) {
      case '+':
        this.props.scorePlus(ability);
        break;
      case '-':
        this.props.scoreMinus(ability);
        break;
      case '?':
        this.props.toggleText(ability);
        break;
      }
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
      cha: [this.props.cha[0], this.props.cha[1]],
    };
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
              let [score, mod, cost, show] = [...this.props[name[0]]];

              return (<CardScore
                key={name[0]}
                short={name[0]}
                long={name[1]}
                score={score}
                mod={mod}
                cost={cost}
                show={show}
                handleClick={this.handleClick}
              />);
            })
          }
        </ul>
        <div className="horizontal-line no-bottom" />
        <div className="lock-box">
          <button
            data-test="score-reset"
            onClick={this.resetBtn}>Reset</button>
          <Link to="/">
            <button
              data-test="score-lock"
              onClick={this.lockScore}>Lock</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default MenuScore;
