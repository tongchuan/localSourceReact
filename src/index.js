import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom'

import configureStore from './store/configureStore';
import AppContainer from './appContainer';

var FastClick = require('fastclick');
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
      <HashRouter basename="/">
          <AppContainer />
      </HashRouter>
  </Provider>,
  document.getElementById('root')
);
