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

const UserIndex = () => (
    <Bundle load={UserIndexContainer}>
        { (UserIndex) => <UserIndex />}
    </Bundle>
)
const UserAdd = () => (
    <Bundle load={UserAddContainer}>
        { (UserAdd) => <UserAdd />}
    </Bundle>
)
const UserLogin = () => (
    <Bundle load={UserLoginContainer}>
        { (UserLogin) => <UserLogin />}
    </Bundle>
)
const ListIndex = () => (
    <Bundle load={ListIndexContainer}>
        { (ListIndex) => <ListIndex />}
    </Bundle>
)

import Header from './components/common/Header'
import createHistory from 'history/createHashHistory'
const history = createHistory({queryKey: false})

@connect (state => state)
export default class appRouter extends React.Component {
  render() {
      return (
          <div>
            <Header />
            <Router history={history}>
                <div>
                    <Route exact path="/" component={HomeIndex} />
                    <Route path="/user" component={UserIndex} />
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/login" component={UserLogin} />
                    <Route path="/list/:id" component={ListIndex} />
                </div>
            </Router>
          </div>
    );
  }
}
