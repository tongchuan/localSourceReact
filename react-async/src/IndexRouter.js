import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HashRouter as Router, Route } from 'react-router-dom'
import HomeIndex from './containers/Home/HomeIndex';

import Bundle from './bundle.js';
// 导入search组件，需要在路径前面加上 bundle-loader?lazy!
// import UserIndex from 'bundle-loader?lazy!./containers/User/UserIndex';
import UserIndexContainer from 'bundle-loader?lazy&name=app-[name]!./containers/User/UserIndex';
import UserAddContainer from 'bundle-loader?lazy&name=app-[name]!./containers/User/UserAdd';
import UserLoginContainer from 'bundle-loader?lazy&name=app-[name]!./containers/User/UserLogin';
import ListIndexContainer from 'bundle-loader?lazy&name=app-[name]!./containers/list/ListIndex';

const UserIndex = (props) => (
    <Bundle load={UserIndexContainer}>
        { (UserIndex) => <UserIndex {...props} />}
    </Bundle>
)
const UserAdd = (props) => (
    <Bundle load={UserAddContainer}>
        { (UserAdd) => <UserAdd {...props} />}
    </Bundle>
)
const UserLogin = (props) => (
    <Bundle load={UserLoginContainer}>
        { (UserLogin) => <UserLogin {...props} />}
    </Bundle>
)
const ListIndex = (props) => (
    <Bundle load={ListIndexContainer}>
        { (ListIndex) => <ListIndex  {...props}/>}
    </Bundle>
)

import Header from './components/common/Header'
import { log } from '.0.10.3@util';
// import createHistory from 'history/createHashHistory'
// const history = createHistory({queryKey: false})

@connect (state => state)
export default class IndexRouter extends React.Component {
  render() {
      return (
          <div>
            <Header {...this.props} />
            <Router>
                <div>
                    <Route exact path="/" component={HomeIndex} />
                    <Route path="/user" component={UserIndex} />
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/login" component={UserLogin} />
                    <Route path="/list" component={ListIndex} />
                </div>
            </Router>
          </div>
    );
  }
}
