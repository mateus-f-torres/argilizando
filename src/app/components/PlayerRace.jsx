//@flow
import * as React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import Race from './Race.jsx';
import RACES from '../data/races.js';

import 'Styles/PlayerRace.scss';

type Props = {};

class PlayerRace extends React.Component {
  constructor(props: Props) {
    super(props);
    this.showRace = this.showRace.bind(this);
    this.lockRace = this.lockRace.bind(this);
  }

  showRace(e) {
    this.props.getRace(e.target.name);
  }

  lockRace() {
    this.props.lockRace(this.props.race);
  }

  render() {
    return (
      <section id="RACE">
        <Switch>

          <Route exact path="/race" render={()=>
            <ul className="selection">
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
                        <Link to={this.props.match.url + "/" + item.id}>
                          <button name={item.id} onClick={this.showRace}>
                            {item.id}
                          </button>
                        </Link>
                      </li>
                      ))
                    }
                    </ul>
                  </div>
                )
              })
            }
            </ul>
          }/>

        <Route path={this.props.match.url + "/"} 
          render={()=>
            <Race lockRace={this.lockRace} {...this.props.race} />
          }/>
        </Switch>
      </section>
    )
  }
}

export default PlayerRace;
