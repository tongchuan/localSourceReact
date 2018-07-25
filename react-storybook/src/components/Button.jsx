import React from 'react';

export default class Button extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
      
    )
  }
}