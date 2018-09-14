//@flow
import * as React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import styled, {injectGlobal} from 'styled-components';
import styledNormalize from 'styled-normalize';

import MenuMain from './MenuMain.js';
import UpdateRace from 'Components/UpdateRace.js';
import UpdateScores from 'Components/UpdateScores.js';
import UpdateClass from 'Components/UpdateClass.js';
import UpdateBackground from 'Components/UpdateBackground.js';
import UpdateProto from 'Components/UpdateProto.js';
import UpdateFinal from 'Components/UpdateFinal.js';

import type {Done} from 'Types/props.js';

import {
  COLOR_BACK, COLOR_TEXT, COLOR_NAV, COLOR_MAIN,
  LINK_DEFAULT, LINK_ACTIVE, NAV_FONT, MAIN_FONT,
} from 'Components/common/styles';

// import logo from 'Images/logo.svg'; // import using webpack resolve.alias
// import developer from 'Images/mateus-f-torres.svg';

type Props = {
  done: Done,
};

injectGlobal`
  ${styledNormalize}

  body {
    background-color: ${COLOR_BACK};
    color: ${COLOR_TEXT};
  }
`;

const Header = styled.header`
  width: 100%;
  height: 11vh;
  background-color: ${COLOR_NAV};
  border-bottom: 1px solid rgba(0,0,0,0.75);
  display: flex;
  justify-content: space-between;
`;

const OuterLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration-line: none;
  color: ${LINK_DEFAULT};
  font-family: ${NAV_FONT};
  &:focus {
    outline: none;
  }
  &:active {
    color: ${LINK_ACTIVE};
  }
  span {
    align-self: flex-end;
    margin-bottom: 3px;
  }
`;

const Logo = styled.img`
  height: 8.9vh;
  text-align: center;
  padding: 0.5em 0 0.5em 0.5em 0.5em;
  &:hover {
    cursor: pointer;
  }
`;

const Main = styled.main`
  font-family: ${MAIN_FONT};
  margin-top: 5vh;
  margin-bottom: 8vh;
  section {
    max-width: 80vw;
    margin: 0 auto;
    background-color: ${COLOR_MAIN};
    border: 2px solid rgba(17,12,22,0.8);
    border-radius: 4px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 0 auto;
      }
    }
  }
`;

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
        <Header>
          <Link to="/">
            <img src='#' />
              MENU
          </Link>
          <OuterLink href="https://github.com/mateus-f-torres/argilizando">
            <Logo src="https://cdn.glitch.com/e2166fef-0318-4438-b68d-0cdc888287cd%2Fmateus-f-torres.svg?1536704739056"/>
            <span>&copy;</span>
          </OuterLink>
        </Header>
        <Main>
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
        </Main>
      </div>
    );
  }
}


export default App;
