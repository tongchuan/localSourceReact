import React from 'react';
import Header from '@/components/common/Header';// '../components/components/Header'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <div><Header /></div>
        {this.props.children}
      </div>
    )
  }
}