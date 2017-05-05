import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HashRouter as Router, Route } from 'react-router-dom'
import HomeIndex from './containers/Home/HomeIndex';

// 导入search组件，需要在路径前面加上 bundle-loader?lazy!
// import UserIndex from 'bundle-loader?lazy!./containers/User/UserIndex';
import UserIndex from './containers/User/UserIndex';
import UserAdd from './containers/User/UserAdd';

import ListIndex from './containers/list/ListIndex';

import Header from './components/common/Header'

@connect (state => state)
export default class appRouter extends React.Component {
  render() {
      return (
          <div>
            <Header />
              <Router>
                  <div>
                      <Route exact path="/" component={HomeIndex} />
                      <Route path="/user" component={UserIndex}></Route>
                      <Route path="/user/add" component={UserAdd} />
                      <Route path="/list/:id" component={ListIndex}></Route>
                  </div>
              </Router>
          </div>
    );
  }
}
