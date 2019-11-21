import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {BrowserRouter} from 'react-router-dom';

import './i18n'
import './index.scss'

// import store from './store/configureStore.js';
// import FullApp from './containers/FullApp.js';
import App from "./App";

const root = document.getElementById('app');

if (root !== null) {
  ReactDOM.render(
    <App />,
    root
  );
}
