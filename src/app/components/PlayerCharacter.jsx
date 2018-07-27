import * as React from 'react';

import 'Styles/PlayerCharacter.scss';

class PlayerCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.backBtn = this.backBtn.bind(this);
    this.lockChar = this.lockChar.bind(this);
  }

  componentDidMount() {
    let character = {
      race: this.props.race,
      gameClass: this.props.gameClass,
      score: this.props.score,
      background: this.props.background
    }
    this.props.getCharacter(character);
  }

  backBtn(e) {
    e.preventDefault();
    this.props.backBtn();
  }

  lockChar(e) {
    e.preventDefault();
    let char = this.props.char;
    this.props.lockCharacter(char);
  }

  render() {
  
    const btn = "btn waves-effect waves-light";

    return (
      <section id="CHARACTER">
        <h2>Your Character</h2>
        <div className="horizontal-line" />
        <table>
          <thead>
            <tr>
              <th>Past</th>
              <th>Race</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr className="main">
              <td>{this.props.background}</td>
              <td>{this.props.race}</td>
              <td>{this.props.gameClass}</td>
            </tr>
          </tbody>
        </table>

        <h4>Ability Scores</h4>
        <table>
          <thead>
            <tr>
              <th>Str</th>
              <th>Dex</th>
              <th>Con</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {
                  this.props.score.str[1] > 0
                    ? "+" + this.props.score.str[1]
                    : this.props.score.str[1]
                }
              </td>
              <td>
                {
                  this.props.score.dex[1] > 0
                    ? "+" + this.props.score.dex[1]
                    : this.props.score.dex[1]
                }
              </td>
              <td>
                {
                  this.props.score.con[1] > 0
                    ? "+" + this.props.score.con[1]
                    : this.props.score.con[1]
                }
              </td>
            </tr>
            <tr>
              <td>{this.props.score.str[0]}</td>
              <td>{this.props.score.dex[0]}</td>
              <td>{this.props.score.con[0]}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Int</th>
              <th>Wis</th>
              <th>Cha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {
                  this.props.score.int[1] > 0
                    ? "+" + this.props.score.int[1]
                    : this.props.score.int[1]
                }
              </td>
              <td>
                {
                  this.props.score.wis[1] > 0
                    ? "+" + this.props.score.wis[1]
                    : this.props.score.wis[1]
                }
              </td>
              <td>
                {
                  this.props.score.cha[1] > 0
                    ? "+" + this.props.score.cha[1]
                    : this.props.score.cha[1]
                }
              </td>
            </tr>
            <tr>
              <td>{this.props.score.int[0]}</td>
              <td>{this.props.score.wis[0]}</td>
              <td>{this.props.score.cha[0]}</td>
            </tr>
          </tbody>
        </table>
        <div className="horizontal-line" />
        <div>
          <button onClick={this.backBtn} className={btn}>Back</button>
          <button onClick={this.lockChar} className={btn}>Lock</button>
        </div>

      </section>
    )
  }
}


export default PlayerCharacter;
