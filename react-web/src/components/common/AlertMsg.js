import React from 'react';
import {observer} from 'mobx-react';
import {Alert} from 'react-bootstrap';
import globalStore from '@/stores/common/globalStore'

@observer
export default class AlertMsg extends React.Component {
  constructor(props){
    super(props);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
  }
  handleAlertDismiss(){
    globalStore.alertMsg = Object.assign(globalStore.alertMsg, {message: '', alertVisible: false});
  }
  render() {
    if(!globalStore.alertMsg.alertVisible) {
      return null;
    }else{
      return (
        <Alert bsStyle={globalStore.alertMsg.type} onDismiss={this.handleAlertDismiss} className="ssc-alert">
          <p title={globalStore.alertMsg.message} className="alert-tip">{globalStore.alertMsg.message}</p>
        </Alert>
      )
    }
    
  }
}