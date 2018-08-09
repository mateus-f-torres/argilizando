import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './app/reducers/index.js';

import {BrowserRouter} from 'react-router-dom';
import FullApp from './app/containers/FullApp.js';

// 1st stylesheet called, resets here
import './index.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FullApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
