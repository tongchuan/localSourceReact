import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.less'
import { HashRouter as Router, Route } from 'react-router-dom'
import HomeIndex from './containers/Home/HomeIndex';

// 导入search组件，需要在路径前面加上 bundle-loader?lazy!
import UserIndex from 'bundle-loader?lazy!./containers/User/UserIndex';
// import UserIndex from './containers/User/UserIndex';


@connect (state => state)
export default class AppContainer extends React.Component {
  render() {
      return (
          <div>
              <Router>
                  <div>
                      <Route exact path="/" component={HomeIndex} />
                      <Route path="/user" component={UserIndex} />
                  </div>
              </Router>
          </div>
    );
  }
}
