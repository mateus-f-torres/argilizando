//@flow
import * as React from 'react';
import Background from './Background.jsx';
import BACKGROUNDS from '../data/backgrounds.js';

import 'Styles/PlayerBackground.scss';

type Props = {};

class PlayerBackground extends React.Component {
  constructor(props: Props) {
    super(props);
    this.showBack = this.showBack.bind(this);
    this.hideBack = this.hideBack.bind(this);
    this.lockBack = this.lockBack.bind(this);
  }

  showBack(e) {
    let background = e.target.name;
    this.props.getBack(background);
  }

  hideBack() {
    this.props.noBack();
  }

  lockBack() {
    this.props.lockBack(this.props.chosen);
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

          : <ul className="selection">
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
                              <button 
                                id={
                                  back.id === "polymorphed"
                                    ? "long"
                                    : ""
                                }
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
