import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createHashHistory'
import { Router,Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// import reducers from './reducers' // Or wherever you keep your reducers
import App from './containers/App';
// import { Router } from 'react-router';
import { Link } from 'react-router-dom'
import User from './containers/User';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory({queryKey: false})

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// console.log(routerReducer);
const store = createStore(
  combineReducers({
    // ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
// console.log(store);
// console.log(history);
// console.log(Router);
// console.log(ConnectedRouter);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
      <div>
        <ul>
          <li><Link to="/">关于</Link></li>
          <li><Link to="/app">关于</Link></li>
          <li><Link to="/user">关于</Link></li>
        </ul>
      </div>
      <Route exact path="/" component={App}></Route>
      <Route path="/app" component={Home}></Route>
      <Route path="/user" component={User}></Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes';
import configure from './store/configureStore';
import myhistory from './history'


import { Route, DefaultRoute } from 'react-router'

import App from './containers/App';
import User from './containers/User';

import { createStore } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { Link } from 'react-router'


// const store = configure({ config: global.$GLOBALCONFIG })
// const history = syncHistoryWithStore(myhistory, store)
// history.listen(function (location) { return location })

const store = createStore(function(state={d:'111'},action){
  return state;
},{name:'zhangtongchuan'})
const history = createBrowserHistory();
console.log(store.getState());
console.log(DefaultRoute);
console.log(Route);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <div>
          <ul>
            <li><Link to="/user">关于</Link></li>
          </ul>
        </div>
      <Route exact path="/" component={App}></Route>
      <Route path="/user" component={User}></Route>
      </div>

    </Router>
  </Provider>,
  document.getElementById('root')
);


// import "./less/css.css";
// import "./less/index.less";
// ReactDom.render(
//   <div style={{color:"#ff0000"}}>
//     kaishi
//   </div>,
//   document.getElementById('app')
// );

*/
