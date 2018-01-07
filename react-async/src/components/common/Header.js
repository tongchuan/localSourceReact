import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./less/common.less"
// import * as auth from '../../utils/auth'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
  }

  render(){
    let that = this;
    return (
      <div className="header">
      <p>我是更新后的数据，和下面的没有在一个组件{this.props.user.name}</p>
          <ul>
          <li><Link to="/">index</Link></li>
          <li><Link to="/list">list</Link></li>
          <li><Link to="/user">user</Link></li>
          
          </ul>
      </div>
    )
  }
}
