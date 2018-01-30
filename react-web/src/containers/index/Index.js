import React from 'react';
import { Link } from 'react-router'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {

  }
  componentDidMount(){
  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState){

  }
  componentWillUpdate(nextProps, nextState){

  }
  componentDidUpdate(){

  }
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/metadb">基础数据映射管理</Link></li>
        </ul>
      </div>
    )
  }
}
