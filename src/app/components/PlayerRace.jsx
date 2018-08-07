//@flow
import * as React from 'react';
import Race from './Race.jsx';
import RACES from '../data/races.js';

import 'Styles/PlayerRace.scss';

type Props = {};

class PlayerRace extends React.Component {
  constructor(props: Props) {
    super(props);
    this.showRace = this.showRace.bind(this);
    this.hideRace = this.hideRace.bind(this);
    this.lockRace = this.lockRace.bind(this);
  }

  showRace(e) {
    let race = e.target.name;
    this.props.getRace(race);
  }

  hideRace() {
    this.props.noRace();
  }

  lockRace() {
    this.props.lockRace(this.props.race);
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

          : <ul className="selection">
            <div id="title-box">
              <h2>Player Race</h2>
              <div className="horizontal-line no-bottom" />
            </div>
              {
                RACES.map((category, i) => {
                  let [type, options] = [...category];

                  return (
                    <div key={i}>
                      <h3>{type}</h3>
                      <div className="horizontal-line no-bottom" />
                      <ul>
                      {
                        options.map((item) => (
                        <li key={item.id}>
                          <button 
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
