import React from 'react';
import Spinner from '@/components/common/Spinner'
import AlertMsg from '@/components/common/AlertMsg'
import MessageModel from '@/components/common/MessageModel'
export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <Spinner />
        <AlertMsg />
        {this.props.children}
        <MessageModel />
      </div>
    )
  }
}