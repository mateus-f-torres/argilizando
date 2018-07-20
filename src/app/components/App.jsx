import * as React from 'react';

import Menu from './Menu.jsx'
import UpdateScores from '../containers/UpdateScores.js';
import UpdateRace from '../containers/UpdateRace.js';
import UpdateClass from '../containers/UpdateClass.js';

import 'Styles/App.scss';  // last stylesheet called, main layout
import logo from 'Images/logo.svg'; // import using webpack resolve.alias

class App extends React.Component {
  constructor(props) {
    super(props);
    this.menuScreen = this.menuScreen.bind(this);
    this.raceScreen = this.raceScreen.bind(this);
    this.scoreScreen = this.scoreScreen.bind(this);
    this.classScreen = this.classScreen.bind(this);
  }

  menuScreen() {
    this.props.showMenu();
  }

  raceScreen(e) {
    e.preventDefault();
    this.props.showRace();
  }

  scoreScreen(e) {
    e.preventDefault();
    this.props.showScore();
  }

  classScreen(e) {
    e.preventDefault();
    this.props.showClass();
  }

  render() {
    return (
        <div>
          <header>
            <img onClick={this.menuScreen} src={logo} />
          </header>  
          {
            this.props.menu
              ? ( 
                <Menu 
                  done={this.props.done}
                  race={this.raceScreen}
                  score={this.scoreScreen}
                  gameClass={this.classScreen}
                />
                )
              : ( 
                <main>
                  {this.props.race && <UpdateRace />}
                  {this.props.score && <UpdateScores />}
                  {this.props.gameClass && <UpdateClass />}
                </main>
              )  
          }
        </div>
    )
  }
}


export default App;
