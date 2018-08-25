//@flow
import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import type {Done} from '../types/props.js';

import MenuMain from './MenuMain.jsx';
import UpdateRace from '../containers/UpdateRace.js';
import UpdateScores from '../containers/UpdateScores.js';
import UpdateClass from '../containers/UpdateClass.js';
import UpdateBackground from '../containers/UpdateBackground.js';
import UpdateProto from '../containers/UpdateProto.js';
import UpdateFinal from '../containers/UpdateFinal.js';

import 'Styles/App.scss'; // last stylesheet called, main layout
import logo from 'Images/logo.svg'; // import using webpack resolve.alias
import developer from 'Images/mateus-f-torres.svg';

type Props = {
  done: Done,
};


class App extends React.Component<Props> {
  handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.name) {
    case 'create':
      // control if user should be able view creator page
      if (this.props.done.race && this.props.done._class
        && this.props.done.score && this.props.done.back) return;
      e.preventDefault();
      break;

    case 'final':
      // control if user should be able to view complete char page
      if (this.props.done.char) return;
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
          <div id="outside-links">
            <a href="https://github.com/mateus-f-torres/argilizando">SOURCE</a>
            <a href="https://github.com/mateus-f-torres/argilizando">
              <img id="dev-logo" src={developer} />
              <span id="copyright">&copy;</span>
            </a>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={()=>
              <MenuMain done={this.props.done} handleClick={this.handleClick}/>
            }/>
            <Route path="/race" component={UpdateRace} />
            <Route path="/score" component={UpdateScores} />
            <Route path="/class" component={UpdateClass} />
            <Route path="/background" component={UpdateBackground} />
            <Route path="/create" component={UpdateProto} />
            <Route path="/play" component={UpdateFinal} />
          </Switch>
        </main>
      </div>
    );
  }
}


export default App;
