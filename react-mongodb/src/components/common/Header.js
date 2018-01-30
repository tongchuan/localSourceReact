import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./less/common.less"
import * as auth from '../../utils/auth'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: auth.loggedIn(),
      loginUser: auth.loggedName()
    }
    console.log(this);
    this.loginOut = this.loginOut.bind(this);
    this.authChange = this.authChange.bind(this);
  }
  authChange(){
    this.setState({
      loggedIn:auth.loggedIn()
    })
  }
  componentDidMount(){
    auth.onChange=this.authChange
  }
  loginOut(){
    auth.logout();
  }
  render(){
    let that = this;
    return (
      <div className="header">
        <div className="container">
          <nav className="navbar nav-pills">
            <div className="navbar-header">
              <span className="glyphicon glyphicon-certificate">T-C</span>
            </div>
            <div className="navbar-collapse collapse navbar-left">

                {
                    that.state.loggedIn ? (
                      <ul className="nav navbar-nav">
                      <li>您好，{that.state.loginUser}</li>
                      <li><a onClick={that.loginOut} href="javascript:void(0)">Log out</a></li>
                      </ul>
                    ):(
                      <ul className="nav navbar-nav">
                      <li><Link to="/user/login">log In</Link></li>
                      <li> or </li>
                      <li><Link to="/user/regist">log up</Link></li>
                      </ul>
                    )
                }

            </div>
            <div className="navbar-collapse collapse navbar-right">
              <ul className="nav navbar-nav">
                <li><a href="/user/list">首页</a></li>
                <li><a href="#">新闻</a></li>
                <li><a href="#">产品</a></li>
                <li></li>
                <li>33</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
