//@flow
import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import CardBack from './CardBack.jsx';
import BACKGROUNDS from '../data/backgrounds.js';
import type {Background} from '../types/props.js';

import 'Styles/MenuBack.scss';

type Props = {
  getBack: (string) => void,
  lockBack: ({}) => void,
  back: Background,
  match: {
    url: string,
  },
};

class MenuBack extends React.Component<Props> {
  showBack = (e: SyntheticEvent<HTMLButtonElement>) => {
    this.props.getBack(e.currentTarget.name);
  }

  lockBack = () => {
    this.props.lockBack(this.props.back);
  }

  render() {
    return (
      <section id="BACK">
        <Switch>

          <Route exact path="/background" render={()=>
            <ul className="selection">
              <div id="title-box">
                <h2>Player Background</h2>
                <div className="horizontal-line no-bottom" />
              </div>
              {
                BACKGROUNDS.map((category, i) => {
                  let [type, options] = [...category];

                  return (
                    <div key={i}>
                      <h3>{type}</h3>
                      <div className="horizontal-line no-bottom" />
                      <ul>
                        {
                          options.map((back) => (
                            <li key={back.id}>
                              <Link to={this.props.match.url + '/' + back.id}>
                                <button name={back.id} onClick={this.showBack}
                                  id={
                                    back.id === 'polymorphed'
                                      ? 'long'
                                      : null
                                  }>
                                  {back.id}
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

          <Route path={this.props.match.url + '/:backgroundID'}
            render={()=>
              <CardBack lockBack={this.lockBack} {...this.props.back}/>
            }/>
        </Switch>
      </section>
    );
  }
}

export default MenuBack;
