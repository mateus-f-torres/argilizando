import * as React from 'react';
import CharacterMain from './CharacterMain.jsx';
import CharacterEquip from './CharacterEquip.jsx';
import CharacterSpell from './CharacterSpell.jsx';
import CharacterTrait from './CharacterTrait.jsx';
import CharacterBody from './CharacterBody.jsx';
import CharacterPast from './CharacterPast.jsx';

import 'Styles/FinalCharacter.scss';

class FinalCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.showMain = this.showMain.bind(this);
    this.showEquip = this.showEquip.bind(this);
    this.showSpell = this.showSpell.bind(this);
    this.showTrait = this.showTrait.bind(this);
    this.showBody = this.showBody.bind(this);
    this.showPast = this.showPast.bind(this);
  }

  showMain() {
    this.props.showMain();
  }

  showEquip() {
    this.props.showEquip();
  }

  showSpell() {
    this.props.showSpell();
  }

  showTrait() {
    this.props.showTrait();
  }

  showBody() {
    this.props.showBody();
  }

  showPast() {
    this.props.showPast();
  }

  render () {

    const btn = "btn waves-effect waves-light";

    return (
      <section id="FINAL">
        <h2>{this.props.char.name}</h2>
        <ul id="change-view">
          <button onClick={this.showMain} className={btn}>Main</button>
          <button onClick={this.showEquip} className={btn}>Equips</button>
          <button onClick={this.showSpell} className={btn}>Spells</button>
          <button onClick={this.showTrait} className={btn}>Traits</button>
          <button onClick={this.showBody} className={btn}>Visual</button>
          <button onClick={this.showPast} className={btn}>Behavior</button>
        </ul>
        <div className="horizontal-line no-bottom" />

        {
          this.props.show.main && 
          <CharacterMain {...this.props.char.main}/>
        }
        {
          this.props.show.equip && 
            <CharacterEquip 
              prof={this.props.char.main.prof}
              score={this.props.char.main.score}
              {...this.props.char.equip}/>
        }
        {
          this.props.show.spell && 
          <CharacterSpell {...this.props.char.spell}/>
        }
        {
          this.props.show.trait && 
          <CharacterTrait traits={this.props.char.traits}/>
        }
        {
          this.props.show.body && 
          <CharacterBody {...this.props.char.body}/>
        }
        {
          this.props.show.past && 
          <CharacterPast {...this.props.char.past}/>
        }

      </section>
    )
  }
}

export default FinalCharacter;
