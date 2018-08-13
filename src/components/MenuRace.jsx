//@flow
import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import CardRace from './CardRace.jsx';
import RACES from '../data/races.js';
import type {Race} from '../types/index.js';

import 'Styles/MenuRace.scss';

type Props = {
  getRace: (string) => void,
  lockRace: ({}) => void,
  race: Race,
  match: {
    url: string,
  },
};

class MenuRace extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).showRace = this.showRace.bind(this);
    (this: any).lockRace = this.lockRace.bind(this);
  }

  showRace(e: SyntheticEvent<HTMLButtonElement>) {
    this.props.getRace(e.currentTarget.name);
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
                              <Link to={this.props.match.url + '/' + item.id}>
                                <button name={item.id} onClick={this.showRace}>
                                  {item.id}
                                </button>
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  );
                })
              }
            </ul>
          }/>

          <Route path={this.props.match.url + '/'}
            render={()=>
              <CardRace lockRace={this.lockRace} {...this.props.race} />
            }/>
        </Switch>
      </section>
    );
  }
}

export default MenuRace;
