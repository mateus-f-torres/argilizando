//@flow
import * as React from 'react';
import GameClass from './GameClass.jsx';
import CLASSES from '../data/classes.js';

import 'Styles/PlayerClass.scss';

type Props = {};

const btn = "class-btn waves-effect waves-light";

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
    this.props.lockClass(this.props.chosen.id);
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

          : <ul id="selection">
            <h2>Player Class</h2>
            <div className="horizontal-line" />
              {
                CLASSES.map((category, i) => {
                 let [type, options] = [...category];

                  return (
                    <div key={i}>
                      <h3 className="category">{type}</h3>
                      <div className="horizontal-line no-bottom"/>
                      <ul>
                      {
                        options.map((item) => (
                        <li key={item.id}>
                          <button 
                            id={
                              item.id === "wizard"
                              || item.id === "paladin"
                                ? "double-btn-size"
                                : ""
                            }
                            className={btn} 
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

