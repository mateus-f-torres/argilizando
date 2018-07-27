import * as React from 'react';
import CharacterMain from './CharacterMain.jsx';
import CharacterBody from './CharacterBody.jsx';
import CharacterPast from './CharacterPast.jsx';

import 'Styles/FinalCharacter.scss';

class FinalCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.showMain = this.showMain.bind(this);
    this.showBody = this.showBody.bind(this);
    this.showPast = this.showPast.bind(this);
  }

  showMain() {
    this.props.showMain();
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
          <button onClick={this.showMain} className={btn}>X</button>
          <button onClick={this.showBody} className={btn}>Y</button>
          <button onClick={this.showPast} className={btn}>Z</button>
        </ul>
        <div className="horizontal-line" />

        {this.props.show.main && <CharacterMain {...this.props.char.main}/>}
        {this.props.show.body && <CharacterBody {...this.props.char.body}/>}
        {this.props.show.past && <CharacterPast {...this.props.char.past}/>}

      </section>
    )
  }
}

export default FinalCharacter;
