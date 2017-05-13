import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom'
// import * as jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import configureStore from './store/configureStore';
import AppRouter from './AppRouter';
// import 'bootstrap/dist/css/bootstrap.min.css'



var FastClick = require('fastclick');
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
      <HashRouter basename="/">
          <AppRouter />
      </HashRouter>
  </Provider>,
  // document.body
  document.getElementById('root')
);
