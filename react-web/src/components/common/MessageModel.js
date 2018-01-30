/**
 * 消息弹窗口组件
 */
import React from 'react';
import {Modal,Button } from 'react-bootstrap';
import {observer} from 'mobx-react';
import globalStore from '@/stores/common/globalStore'

@observer
export default class MessageModel extends React.Component{
    constructor(props) {
      super(props);
      this.close = this.close.bind(this)
      this.cancelFn = this.cancelFn.bind(this)
      this.sureFn = this.sureFn.bind(this)
    }

    close() {
      globalStore.modelMsg = Object.assign(globalStore.modelMsg, {message: '', modelVisible: false});
    }
    cancelFn () {
      if (typeof (globalStore.modelMsg.cancelFn) === "function") {
        globalStore.modelMsg.cancelFn();
      }
      this.close();
    }

    sureFn(){
      if (typeof (globalStore.modelMsg.sureFn) === "function") {
        globalStore.modelMsg.sureFn();
      }
      this.close();
    }

    render () {
      return (
        <Modal show ={globalStore.modelMsg.modelVisible} onHide={this.close} bsSize={globalStore.modelMsg.bsSize }
                className ={( globalStore.modelMsg.bsSize &&globalStore.modelMsg.bsSize!="" )?"": "static-modal"}>
          <Modal.Header>
            <Modal.Title>提示</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {globalStore.modelMsg.message}
          </Modal.Body>
          <Modal.Footer>
            <Button  className={globalStore.modelMsg.hasCancel===true?"":"hidden"} onClick={this.cancelFn}>取消</Button>
            <Button bsStyle="primary" onClick={this.sureFn}>确定</Button>
          </Modal.Footer>
        </Modal>
      );
    }
}

