import React from "react";
import { Link } from 'react-router'
export default class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/news">Index</Link></li>
          <li><Link to="/test">Index</Link></li>
          <li><Link to="/user">Index</Link></li>
        </ul>
      </div>
    )
  }
}