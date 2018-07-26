import * as React from 'react';

import Menu from './Menu.jsx'
import UpdateScores from '../containers/UpdateScores.js';
import UpdateRace from '../containers/UpdateRace.js';
import UpdateClass from '../containers/UpdateClass.js';
import UpdateBackground from '../containers/UpdateBackground.js';
import UpdateCharacter from '../containers/UpdateCharacter.js';
import UpdateFinalCharacter from '../containers/UpdateFinalCharacter.js';

import 'Styles/App.scss';  // last stylesheet called, main layout
import logo from 'Images/logo.svg'; // import using webpack resolve.alias

class App extends React.Component {
  constructor(props) {
    super(props);
    this.menuScreen = this.menuScreen.bind(this);
    this.raceScreen = this.raceScreen.bind(this);
    this.scoreScreen = this.scoreScreen.bind(this);
    this.classScreen = this.classScreen.bind(this);
    this.backgroundScreen = this.backgroundScreen.bind(this);
    this.characterScreen = this.characterScreen.bind(this);
    this.finalScreen = this.finalScreen.bind(this);
  }

  menuScreen() {
    this.props.showMenu();
  }

  raceScreen() {
    this.props.showRace();
  }

  scoreScreen() {
    this.props.showScore();
  }

  classScreen() {
    this.props.showClass();
  }

  backgroundScreen() {
    this.props.showBackground();
  }

  characterScreen() {
    this.props.showCharacter();
  }

  finalScreen() {
    this.props.showFinal();
  }

  render() {
    return (
        <div>
          <header>
            <img onClick={this.menuScreen} src={logo} />
          </header>  
          {
            this.props.menu.menu
              ? ( 
                <Menu 
                  done={this.props.done}
                  race={this.raceScreen}
                  score={this.scoreScreen}
                  gameClass={this.classScreen}
                  background={this.backgroundScreen}
                  character={this.characterScreen}
                  final={this.finalScreen}
                />
                )
              : ( 
                <main>
                  {this.props.menu.race && <UpdateRace />}
                  {this.props.menu.score && <UpdateScores />}
                  {this.props.menu.gameClass && <UpdateClass />}
                  {this.props.menu.background && <UpdateBackground />}
                  {this.props.menu.character && <UpdateCharacter />}
                  {this.props.menu.final && <UpdateFinalCharacter />}
                </main>
              )  
          }
        </div>
    )
  }
}


export default App;
