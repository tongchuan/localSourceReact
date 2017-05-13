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
    console.log("Header");
    console.log(this.props);
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
                      <li>您好，fas<Link to="/user/logout">Log out</Link></li>
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
                <li><a href="#">首页</a></li>
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
