//@flow
import * as React from 'react';
import Race from './Race.jsx';
import { RACES } from '../logic/data.js';

import 'Styles/PlayerRace.scss';

type Props = {};

const btnClass = "race-btn waves-effect waves-light";

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
  }

  render() {
    return (
      <section id="RACE">
        <h2>Player Race</h2>
        <hr />
        {
          // if race has been selected render it
          // else render race selection buttons list 
          this.props.selected == true

          ? <Race hideRace={this.hideRace} lockRace={this.lockRace} {...this.props.race}/>

          : <ul id="selection">
              {
                RACES.map((category, i) => {
                  let caption;
                  switch(i) {
                    case 0:
                      caption = "Usual Races";
                      break;
                    case 1:
                      caption = "Unusual Races";
                      break;
                    case 2:
                      caption = "Monstrous Races";
                      break;
                  }
                  return (
                    <div key={i}>
                      <h3 id={i == 0 ? "first" : ''} className="category">{caption}</h3>
                      <hr />
                      {
                        category.map((race) => (
                        <li key={race.id}>
                          <button 
                            className={btnClass} 
                            name={race.id}
                            onClick={this.showRace}
                          >
                            {race.id}
                          </button>
                          <input type="radio" name="race" value={race.id} />
                        </li>
                        ))
                      }
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
