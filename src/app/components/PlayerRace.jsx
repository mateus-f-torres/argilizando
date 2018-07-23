//@flow
import * as React from 'react';
import Race from './Race.jsx';
import RACES from '../data/races.js';

import 'Styles/PlayerRace.scss';

type Props = {};

const btn = "race-btn waves-effect waves-light";

class PlayerRace extends React.Component {
  constructor(props: Props) {
    super(props);
    this.showRace = this.showRace.bind(this);
    this.hideRace = this.hideRace.bind(this);
    this.lockRace = this.lockRace.bind(this);
  }

  showRace(e) {
    e.preventDefault();
    let race = e.target.name;
    this.props.getRace(race);
  }

  hideRace(e) {
    e.preventDefault();
    this.props.noRace();
  }

  lockRace(e) {
    e.preventDefault();
    this.props.lockRace();
  }

  render() {
    return (
      <section id="RACE">
        {
          // if race has been selected render it
          // else render race selection buttons list 
          this.props.selected == true

            ? <Race 
                hideRace={this.hideRace} 
                lockRace={this.lockRace} 
                {...this.props.race}
              />

          : <ul id="selection">
            <h2>Player Race</h2>
            <div className="horizontal-line" />
              {
                RACES.map((category, i) => {
                  let [type, options] = [...category];

                  return (
                    <div key={i}>
                      <h3 id={i == 0 ? "first" : ''} className="category">{type}</h3>
                      <div className="horizontal-line no-bottom" />
                      <ul>
                      {
                        options.map((item) => (
                        <li key={item.id}>
                          <button 
                            className={btn} 
                            name={item.id}
                            onClick={this.showRace}
                          >
                            {item.id}
                          </button>
                        </li>
                        ))
                      }
                      </ul>
                    </div>
                  )
                })
              }
            </ul>
        }
      </section>
    )
  }
}

export default PlayerRace;
