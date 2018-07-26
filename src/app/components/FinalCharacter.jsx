import * as React from 'react';
import FinalMain from './FinalMain.jsx';
import FinalVisual from './FinalVisual.jsx';
import FinalRP from './FinalRP.jsx';

import 'Styles/PlayerCharacter.scss';

class FinalCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.showMain = this.showMain.bind(this);
    this.showVisual = this.showVisual.bind(this);
    this.showRP = this.showRP.bind(this);
  }

  showMain() {
    this.props.showMain();
  }

  showVisual() {
    this.props.showVisual();
  }

  showRP() {
    this.props.showRP();
  }

  render () {

    const btn = "btn waves-effect waves-light";

    return (
      <section id="CHARACTER">
        <h2>{this.props.char.name}</h2>
        <ul id="selection">
          <button onClick={this.showMain} className={btn}>main</button>
          <button onClick={this.showVisual} className={btn}>visual</button>
          <button onClick={this.showRP} className={btn}>rp</button>
        </ul>
        <div className="horizontal-line" />

        {this.props.show.main && <FinalMain {...this.props.char.main}/>}
        {this.props.show.visual && <FinalVisual {...this.props.char.body}/>}
        {this.props.show.rp && <FinalRP {...this.props.char.past}/>}

      </section>
    )
  }
}

export default FinalCharacter;
