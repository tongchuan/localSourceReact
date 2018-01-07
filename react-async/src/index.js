import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom'

import configureStore from './store/configureStore';
import IndexRouter from './IndexRouter';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import './less/app.less'

var FastClick = require('fastclick');
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
      <HashRouter basename="/">
          <IndexRouter />
      </HashRouter>
  </Provider>,
  document.getElementById('root')
);


// console.log('dddd')