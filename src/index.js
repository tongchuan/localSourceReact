import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import configureStore from './store/configureStore';
import AppRouter from './appRouter';
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './less/app.less'
const history = createHistory({queryKey: false})
var FastClick = require('fastclick');
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
      <HashRouter basename="/">
          <AppRouter />
      </HashRouter>
  </Provider>,
  document.getElementById('root')
);
