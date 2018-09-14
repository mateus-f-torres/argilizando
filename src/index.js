//@flow
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store/configureStore.js';

import {BrowserRouter} from 'react-router-dom';
import FullApp from 'Components/FullApp.js';

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
      <FullApp />
    </BrowserRouter>
  </Provider>,
  // $FlowFixMe
  document.getElementById('root')
);
