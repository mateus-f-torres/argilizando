//@flow
import * as React from 'react';
import Background from './Background.jsx';
import BACKGROUNDS from '../data/backgrounds.js';

import 'Styles/PlayerBackground.scss';

type Props = {};

const btn = "background-btn waves-effect waves-light";

class PlayerBackground extends React.Component {
  constructor(props: Props) {
    super(props);
    this.showBack = this.showBack.bind(this);
    this.hideBack = this.hideBack.bind(this);
    this.lockBack = this.lockBack.bind(this);
  }

  showBack(e) {
    e.preventDefault();
    let background = e.target.name;
    this.props.getBack(background);
  }

  hideBack(e) {
    e.preventDefault();
    this.props.noBack();
  }

  lockBack(e) {
    e.preventDefault();
    this.props.lockBack();
  }

  render() {
    return (
      <section id="BACK">
        {
          this.props.selected == true

            ? <Background 
                hideBack={this.hideBack} 
                lockBack={this.lockBack} 
                {...this.props.chosen}
              />

          : <ul id="selection">
            <h2>Player Background</h2>
            <div className="horizontal-line no-bottom" />
              {
                BACKGROUNDS.map((category, i) => {
                  let [type, options] = [...category];

                  return (
                    <div key={i}>
                      <h3 className="category">{type}</h3>
                      <div className="horizontal-line no-bottom" />
                      <ul>
                        {
                          options.map((back) => (
                            <li key={back.id}>
                              <button 
                                id={
                                  back.id === "polymorphed"
                                    ? "long"
                                    : ""
                                }
                                className={btn} 
                                name={back.id}
                                onClick={this.showBack}
                              >
                                {back.id}
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

export default PlayerBackground;
