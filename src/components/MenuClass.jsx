//@flow
import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import CardClass from './CardClass.jsx';
import CLASSES from '../data/classes.js';

import 'Styles/MenuClass.scss';

type Props = {
  getClass: (string) => void,
  lockClass: ({}) => void,
  chosen: {},
  match: {
    url: string,
  },
};

class MenuClass extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.getClass = this.getClass.bind(this);
    this.lockClass = this.lockClass.bind(this);
  }

  getClass(e) {
    this.props.getClass(e.target.name);
  }

  lockClass() {
    this.props.lockClass(this.props.chosen);
  }

  render() {
    return (
      <section id="CLASS">
        <Switch>

          <Route exact path="/class" render={()=>
            <ul className="selection">
              <div id="title-box">
                <h2>Player Class</h2>
                <div className="horizontal-line no-bottom" />
              </div>
              {
                CLASSES.map((category, i) => {
                  let [type, options] = [...category];

                  let odd = type === 'Defenders' || type === 'Controllers';
                  let two = type === 'Leaders';

                  return (
                    <div key={i}>
                      <h3>{type}</h3>
                      <div className="horizontal-line no-bottom"/>
                      <ul
                        id={two ? 'two-cell' : null}
                        className={odd ? 'odd-number' : null}>
                        {
                          options.map((item) => (
                            <li key={item.id}>
                              <Link to={this.props.match.url + '/' + item.id}>
                                <button name={item.id} onClick={this.getClass}
                                  className={
                                    item.id === 'wizard'
                                    || item.id === 'paladin'
                                      ? 'double-size-btn'
                                      : null}>
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
              <CardClass lockClass={this.lockClass} {...this.props.chosen}/>
            }/>
        </Switch>
      </section>
    );
  }
}

export default MenuClass;

