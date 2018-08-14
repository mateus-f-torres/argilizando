//@flow
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store/configureStore.js';

import {BrowserRouter} from 'react-router-dom';
import FullApp from './containers/FullApp.js';

// 1st stylesheet called, resets here
import './index.scss';

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
      <FullApp />
    </BrowserRouter>
  </Provider>,
  // $FlowFixMe
  document.getElementById('root')
);
