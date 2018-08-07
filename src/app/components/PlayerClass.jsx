//@flow
import * as React from 'react';
import GameClass from './GameClass.jsx';
import CLASSES from '../data/classes.js';

import 'Styles/PlayerClass.scss';

type Props = {};

class PlayerClass extends React.Component {
  constructor(props: Props) {
    super(props);
    this.getClass = this.getClass.bind(this);
    this.hideClass = this.hideClass.bind(this);
    this.lockClass = this.lockClass.bind(this);
  }

  getClass(e) {
    let choice = e.target.name;
    this.props.getClass(choice);
  }

  hideClass() {
    this.props.noClass();
  }

  lockClass() {
    this.props.lockClass(this.props.chosen);
  }

  render() {
    return (
      <section id="CLASS">
        {
          this.props.selected == true

            ? <GameClass 
                hideClass={this.hideClass} 
                lockClass={this.lockClass} 
                {...this.props.chosen}
              />

          : <ul className="selection">
            <div id="title-box">
              <h2>Player Class</h2>
              <div className="horizontal-line no-bottom" />
            </div>
              {
                CLASSES.map((category, i) => {
                  let [type, options] = [...category];

                  let odd = type === "Defenders" || type === "Controllers"
                  let two = type === "Leaders";

                  return (
                    <div key={i}>
                      <h3>{type}</h3>
                      <div className="horizontal-line no-bottom"/>
                      <ul id={two ? "two-cell" : null} className={odd ? "odd-number" : null}>
                      {
                        options.map((item) => (
                        <li key={item.id}>
                          <button 
                            className={
                              item.id === "wizard"
                              || item.id === "paladin"
                                ? "double-size-btn"
                                : ""
                            }
                            name={item.id}
                            onClick={this.getClass}
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
};

export default PlayerClass;

