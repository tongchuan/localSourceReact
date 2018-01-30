import React from 'react'
import { Link } from 'react-router-dom'
export default class Header extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render(){
    return (
      <ul>
        <li><Link to="/">index</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/detail">Detail</Link></li>
      </ul>
    )
  }
}