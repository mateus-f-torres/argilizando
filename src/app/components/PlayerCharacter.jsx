import * as React from 'react';
import OptionProf from './OptionProf.jsx';
import OptionBody from './OptionBody.jsx';
import OptionPast from './OptionPast.jsx';

import 'Styles/PlayerCharacter.scss';

class PlayerCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange_Name = this.handleChange_Name.bind(this);
    this.handleChange_Skill = this.handleChange_Skill.bind(this);
      this.handleChange_Lang = this.handleChange_Lang.bind(this);
      this.handleChange_Body = this.handleChange_Body.bind(this);
      this.handleChange_Past = this.handleChange_Past.bind(this);
      this.backBtn = this.backBtn.bind(this);
      this.lockChar = this.lockChar.bind(this);
    }

    componentDidMount() {
      let character = {
        race: this.props.race,
        _class: this.props.gameClass,
        score: this.props.score,
        back: this.props.background
      }
      this.props.getCharacter(character);
    }

    handleChange_Body(e) {
      e.preventDefault();
      this.props.changeBody([e.target.name, e.target.value])
    }

    handleChange_Past(e) {
      e.preventDefault();
      this.props.changePast([e.target.name, e.target.value])
    }

    handleChange_Skill(e){
      let max = this.props.gameClass.skill[0];
      if(this.props.race.id === "human") max++;
      this.props.changeSkill([e.target.name, max])
    }

    handleChange_Lang(e){
      let max = this.props.background.lang
        ? this.props.background.lang[0]
        : 0;
      max += this.props.race.lang.length;
      this.props.changeLang([e.target.name, max]);
    }

    handleChange_Name(e) {
      e.preventDefault();
      this.props.changeName(e.target.value);
    }

    backBtn(e) {
      e.preventDefault();
      this.props.backBtn();
    }

    lockChar(e) {
      e.preventDefault();
      this.props.lockCharacter(this.props.char);
    }

    render() {

      let maxSkills = this.props.race.id === "human"
        ? this.props.gameClass.skill[0] + 1 + 2
        : this.props.gameClass.skill[0] + 2;

      let maxLangs = this.props.background.lang
        ? this.props.background.lang[0]
        : 0;
      maxLangs += this.props.race.lang.length;


  
    return (
      <section id="CHARACTER">
        <h2>
          <label className="text-label">
            <input 
              className="text-input"
              name="name" 
              value={this.props.char.name}
              placeholder="Character Name"
              onChange={this.handleChange_Name}>
            </input>
          </label>
        </h2>
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
              <td>{this.props.background.id}</td>
              <td>{this.props.race.id}</td>
              <td>{this.props.gameClass.id}</td>
            </tr>
          </tbody>
        </table>

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
        </table>
        <table>
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

        <div className="horizontal-line no-bottom" />
        <form onSubmit={this.lockChar}>
          <OptionProf 
            maxSkills={maxSkills}
            skills={this.props.char.main.skills} 
            toggleSkill={this.handleChange_Skill}
            maxLangs={maxLangs}
            langs={this.props.char.main.langs}
            toggleLang={this.handleChange_Lang}
            race={this.props.race}
            _class={this.props.gameClass}
            back={this.props.background} />

          <OptionBody 
            body={this.props.char.body} 
            race={this.props.race}
            change={this.handleChange_Body}/>
          
          <OptionPast 
            past={this.props.char.past} 
            change={this.handleChange_Past}/>

          <div className="horizontal-line no-bottom" />
        </form>
        <div className="lock-box">
          <button onClick={this.backBtn}>Back</button>
          <button onClick={this.lockChar}>Lock</button>
        </div>

      </section>
    )
  }
}


export default PlayerCharacter;
