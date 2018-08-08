import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Menu from './Menu.jsx'
import UpdateRace from '../containers/UpdateRace.js';
import UpdateScores from '../containers/UpdateScores.js';
import UpdateClass from '../containers/UpdateClass.js';
import UpdateBackground from '../containers/UpdateBackground.js';
import UpdateCharacter from '../containers/UpdateCharacter.js';
import UpdateFinalCharacter from '../containers/UpdateFinalCharacter.js';

import 'Styles/App.scss';  // last stylesheet called, main layout
import logo from 'Images/logo.svg'; // import using webpack resolve.alias

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch(e.target.name) {

      case "create":
        if(this.props.done.race && this.props.done._class 
        && this.props.done.score && this.props.done.back) return;
        e.preventDefault();
        break;

      case "final":
        if(this.props.done.char) return;
        e.preventDefault();
        break;
    }
  }

  render() {
    return (
        <div>
          <header>
            <Link to="/">
              <img src={logo} />
              MENU
            </Link>
          </header>  
          <main>
          <Switch>
            <Route exact path="/" render={()=><Menu done={this.props.done} handleClick={this.handleClick}/>}/>
            <Route path="/race" component={UpdateRace} />
            <Route path="/score" component={UpdateScores} />
            <Route path="/class" component={UpdateClass} />
            <Route path="/background" component={UpdateBackground} />
            <Route path="/create" component={UpdateCharacter} />
            <Route path="/play" component={UpdateFinalCharacter} />
          </Switch>
          </main>
        </div>
    )
  }
}


export default App;
