import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/user">用户</Link></li>
          <li><Link to="/list/3434">用户</Link></li>
        </ul>
      </div>
    )
  }
}
