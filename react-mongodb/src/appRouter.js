import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/common/Header'
import HomeIndex from './containers/Home/HomeIndex';
import Bundle from './bundle.js';
import UserLoginContainer from 'bundle-loader?lazy&name=app-[name]!./containers/User/UserLogin';
import UserLogoutContainer from 'bundle-loader?lazy&name=app-[name]!./containers/User/UserLogout';
import UserRegistContainer from 'bundle-loader?lazy&name=app-[name]!./containers/User/UserRegist';
// // 导入search组件，需要在路径前面加上 bundle-loader?lazy!
// // import UserIndex from 'bundle-loader?lazy!./containers/User/UserIndex';
// import UserIndexContainer from 'bundle-loader?lazy&name=app-[name]!./containers/User/UserIndex';
// import UserAddContainer from 'bundle-loader?lazy&name=app-[name]!./containers/User/UserAdd';

// import ListIndexContainer from 'bundle-loader?lazy&name=app-[name]!./containers/list/ListIndex';
//
// const UserIndex = () => (
//     <Bundle load={UserIndexContainer}>
//         { (UserIndex) => <UserIndex />}
//     </Bundle>
// )
// const UserAdd = () => (
//     <Bundle load={UserAddContainer}>
//         { (UserAdd) => <UserAdd />}
//     </Bundle>
// )
const UserLogin = () => (
    <Bundle load={UserLoginContainer}>
        { (UserLogin) => <UserLogin />}
    </Bundle>
)
const UserLogout = () => (
    <Bundle load={UserLogoutContainer}>
        { (UserLogout) => <UserLogout />}
    </Bundle>
)
const UserRegist = () => (
    <Bundle load={UserRegistContainer}>
        { (UserRegist) => <UserRegist />}
    </Bundle>
)


// import createHistory from 'history/createHashHistory'
// const history = createHistory({queryKey: false})
import './less/AppBase.less'
@connect (state => state)
export default class AppRouter extends React.Component {
  constructor(props){
    super(props);
    this.onChange= this.onChange.bind(this);
  }
  onChange(){

  }
  render() {
      return (
          <div id="warp">
            {/*<Header /> */}
            <Router history={history}>
                <div className="container">
                    <Route exact path="/" component={HomeIndex} />
                    <Route path="/user/login" component={UserLogin} />
                    <Route path="/user/logout" component={UserLogout} />
                    <Route path="/user/regist" component={UserRegist} />
                    {/*<Route path="/user" component={UserIndex} />
                    <Route path="/user/add" component={UserAdd} />

                    <Route path="/list/:id" component={ListIndex} />*/}
                </div>
            </Router>
          </div>
    );
  }
}
