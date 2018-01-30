import {observable, computed, action} from 'mobx';

class globalStore {
  cache = {}
  //设置缓存
  setCache = (key, value) => {
    this.cache[key] = value;
  }
  //获取缓存
  getCache = (key) => {
    return this.cache[key];
  }
  //判断缓存是否存在
  isCache = (key) => {
    return this.cache[key] != undefined;
  }
  @observable showWaiting = {
    show: false
  }
  @action showWait() {
    this.showWaiting = Object.assign(this.showWaiting, {show: true});
  }
  //隐藏等待遮罩
  @action hideWait() {
      this.showWaiting = Object.assign(this.showWaiting, {show: false});
  }
  //提示信息
  @observable alertMsg = {
    message: '',
    alertVisible: false,
    type: "danger",//"success", "warning", "danger", "info"
    autoClose: false,
  };
  //显示错误提示信息
  @action showError(msg, isShow) {
    let autoClose = true
    if (!isShow) {
        autoClose = false;
    }
    this.alertMsg = Object.assign(this.alertMsg, {
        message: msg,
        type: 'danger',
        autoClose: autoClose,
        alertVisible: true
    });
    if (this.alertMsg.autoClose) {
        setTimeout(() => {
            this.alertMsg = Object.assign(this.alertMsg, {message: '', alertVisible: false});
        }, 3000);
    }
  }
  //显示普通提示信息
  @action showInfo(msg, isShow) {
    let autoClose = true
    if (!isShow) {
        autoClose = false;
    }
    this.alertMsg = Object.assign(this.alertMsg, {
        message: msg,
        type: 'success',
        autoClose: autoClose,
        alertVisible: true
    });
    if (this.alertMsg.autoClose) {
        setTimeout(() => {
            this.alertMsg = Object.assign(this.alertMsg, {message: '', alertVisible: false});
        }, 3000);
    }
  }
  //提示信息
  @observable modelMsg = {
    message: '',
    bsSize: 'lg',
    modelVisible: false,
    hasCancel: false,
    cancelFn: null,
    sureFn: null
  };
  //用弹窗的方式显示提示信息
  @action showModel(msg) {
    this.modelMsg = Object.assign(this.modelMsg, {
        message: msg,
        modelVisible: true,
        hasCancel: false,
        cancelFn: null,
        sureFn: null
    });
  }
  //用弹窗的方式显示提示信息
  @action showCancelModel(msg, cancelFn, sureFn) {
    this.modelMsg = Object.assign(this.modelMsg, {
        message: msg,
        modelVisible: true,
        hasCancel: true,
        cancelFn: cancelFn,
        sureFn: sureFn
    });
  }
}
export default new globalStore