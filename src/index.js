import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from './store/configureStore.js';
import FullApp from './containers/FullApp.js';

// 1st stylesheet called, resets here
import './index.scss';

const root = document.getElementById('app');

if (root !== null) {
  ReactDOM.render(
    <Provider store={store()}>
      <BrowserRouter>
        <FullApp />
      </BrowserRouter>
    </Provider>,
    root
  );
}
