//@flow
import * as React from 'react';
import {Link} from 'react-router-dom';
import type {Race, _Class, Background, Character} from '../types/index.js';


import AbilityTable from './AbilityTable.jsx';
import OptionSkill from './OptionSkill.jsx';
import OptionLang from './OptionLang.jsx';
import OptionTool from './OptionTool.jsx';
import OptionEquip from './OptionEquip.jsx';
import OptionBody from './OptionBody.jsx';
import OptionPast from './OptionPast.jsx';

import 'Styles/ProtoCharacter.scss';

type Props = {
  race: Race,
  _class: _Class,
  score: {
    str: [number, number],
    dex: [number, number],
    con: [number, number],
    int: [number, number],
    wis: [number, number],
    cha: [number, number],
  },
  back: Background,
  char: Character,
  getCharacter: ({}) => void,
  changeName: (string) => void,
  changeBody: ([string, string]) => void,
  changePast: ([string, string]) => void,
  changeSkill: ([string, number]) => void,
  changeLang: ([string, number]) => void,
  changeTool: ([string, string]) => void,
  changeGear: ([string, string]) => void,
  changePack: (string) => void,
  lockCharacter: ({}) => void,
};

class ProtoCharacter extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    (this: any).handleChangeName = this.handleChangeName.bind(this);
    (this: any).handleChangeSkill = this.handleChangeSkill.bind(this);
    (this: any).handleChangeLang = this.handleChangeLang.bind(this);
    (this: any).handleChangeTool = this.handleChangeTool.bind(this);
    (this: any).handleChangePack = this.handleChangePack.bind(this);
    (this: any).handleChangeGear = this.handleChangeGear.bind(this);
    (this: any).handleChangeBody = this.handleChangeBody.bind(this);
    (this: any).handleChangePast = this.handleChangePast.bind(this);
    (this: any).lockChar = this.lockChar.bind(this);
  }

  componentDidMount() {
    let character = {
      race: this.props.race,
      _class: this.props._class,
      score: this.props.score,
      back: this.props.back,
    };
    this.props.getCharacter(character);
  }

  handleChangeBody(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.changeBody([e.currentTarget.name, e.currentTarget.value]);
  }

  handleChangePast(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.changePast([e.currentTarget.name, e.currentTarget.value]);
  }

  handleChangeSkill(e: SyntheticEvent<HTMLInputElement>) {
    let max = this.props._class.skill[0];
    if (this.props.race.id === 'human' && typeof max === 'number') max++;
    this.props.changeSkill([e.currentTarget.name, max]);
  }

  handleChangeLang(e: SyntheticEvent<HTMLInputElement>) {
    let max = this.props.back.lang
      ? this.props.back.lang[0]
      : 0;
    max += this.props.race.lang.length;
    this.props.changeLang([e.currentTarget.name, max]);
  }

  handleChangeTool(e: SyntheticEvent<HTMLInputElement>) {
    this.props.changeTool([e.currentTarget.name, e.currentTarget.value]);
  }

  handleChangePack(e: SyntheticEvent<HTMLInputElement>) {
    this.props.changePack(e.currentTarget.value);
  }

  handleChangeGear(e: SyntheticEvent<HTMLInputElement>) {
    this.props.changeGear([e.currentTarget.name, e.currentTarget.value]);
  }

  handleChangeName(e: SyntheticEvent<HTMLInputElement>) {
    e.preventDefault();
    this.props.changeName(e.currentTarget.value);
  }

  lockChar(e: SyntheticEvent<HTMLButtonElement>) {
    // char must at least have a name to play
    if (!this.props.char.name.trim()) {
      e.preventDefault();
      return;
    }
    this.props.lockCharacter(this.props.char);
  }

  render() {
    // display correct number of Skills user can chose
    // with extra 1 for human and adding 2 from background
    let maxSkills = this.props.race.id === 'human'
      ? this.props._class.skill[0] + 1 + 2
      : this.props._class.skill[0] + 2;

    // display correct number of Languages user can chose
    // from background, race and _class if rogue or druid
    let maxLangs = this.props.back.lang
      ? this.props.back.lang[0]
      : 0;
    maxLangs += this.props.race.lang.length;
    if (this.props._class.id === 'rogue'
    || this.props._class.id === 'druid') {
      maxLangs++;
    }

    // only show language selection if char has choice
    let langChoice = false;
    if (this.props.back.lang
    || this.props.race.id === 'human'
    || this.props.race.id === 'tabaxi') {
      langChoice = true;
    }

    // only show tool selection if char has choice
    let toolChoice = false;
    if (this.props.back._tools) {
      if (this.props.back._tools.artisan
      || this.props.back._tools.musical
      || this.props.back._tools.gaming) {
        toolChoice = true;
      }
    }

    return (
      <section id="CHARACTER">
        <h2>
          <label className="text-label">
            <input
              className="text-input"
              name="name"
              value={this.props.char.name}
              placeholder={this.props.race._placeholder}
              onChange={this.handleChangeName}>
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
              <td>{this.props.back.id}</td>
              <td>{this.props.race.id}</td>
              <td>{this.props._class.id}</td>
            </tr>
          </tbody>
        </table>

        <AbilityTable {...this.props.score} />

        <div className="horizontal-line no-bottom" />

        <form onSubmit={this.lockChar}>

          <OptionSkill
            max={maxSkills}
            skills={this.props.char.main.skills}
            toggleSkill={this.handleChangeSkill}
            classSkills={this.props._class.skill[1]}
            backSkills={this.props.back.skill}
            classID={this.props._class.id}/>

          <OptionEquip
            classOptions={this.props._class._equip}
            toggleGear={this.handleChangeGear}
            classPack={this.props._class._pack}
            showPack={this.props.char.equip.pack.fromPack}
            togglePack={this.handleChangePack}/>

          {
            langChoice &&
            <OptionLang
              max={maxLangs}
              allLangs={this.props.char.main.langs}
              toggleLang={this.handleChangeLang}
              raceLangs={this.props.race.lang}/>
          }

          {
            toolChoice &&
            <OptionTool
              raceID={this.props.race.id}
              allTools={this.props.char.main.tools.all}
              toggleTool={this.handleChangeTool}
              backTools={this.props.back._tools}/>
          }

          <OptionBody
            body={this.props.char.body}
            race={this.props.race}
            change={this.handleChangeBody}/>

          <OptionPast
            back={this.props.back}
            past={this.props.char.past}
            change={this.handleChangePast}/>

          <div className="horizontal-line no-bottom" />
        </form>
        <div className="lock-box">
          <Link to="/">
            <button>Back</button>
          </Link>
          <Link to="/">
            <button onClick={this.lockChar}>Lock</button>
          </Link>
        </div>

      </section>
    );
  }
}


export default ProtoCharacter;
