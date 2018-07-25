import * as React from 'react';

import 'Styles/CreateCharacter.scss';

class CreateCharacter extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
  
    const btn = "btn waves-effect waves-light";

    return (
      <section id="CREATE">
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

        <table>
          <thead>
            <tr>
              <th>Hit Points</th>
              <th>Armor Class</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
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

      </section>
    )
  }
}


export default CreateCharacter;
