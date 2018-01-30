import React from 'react'
import ReactDom from 'react-dom'
// IndexRoute Route,Router,  BrowserRouter
import { Provider } from 'react-redux'
import { Router, Route, HashRouter } from 'react-router-dom'
// console.log(React)
import configureStore from './store'
import MainRouter from './MainRouter'
import './less/main.less'
// console.log(new App())

const store = configureStore()
// console.log(store)
ReactDom.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <MainRouter />
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
)
// console.log('ddddddd')