//@flow
/*
import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from 'Routes/index.js';
import type {Done} from 'Types/props.js';

type Props = {
  done: Done,
};

export default class Main extends React.Component<Props> {
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
      <main>
        <Switch>
          {
            routes.map(({C, path, exact}) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={
                  () => exact
                    ? <C done={this.props.done} handleClick={this.handleClick}/>
                    : <C />
                }/>
            ))
          }
        </Switch>
      </main>
    );
  }
}
*/
