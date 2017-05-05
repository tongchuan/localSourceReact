import React,{ Component } from 'react'

export default class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   console.log(props);
  // }
  render() {
    // const { children } = this.props
    console.log(this.props)
    // console.log('children');
    // console.log(children);
    // {this.props.children}
    return (
      <div>
        <div>1</div>
        <div>{/*location*/}</div>
      </div>
    )
  }
}
