import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames'
import * as auth from '../../utils/auth'
import Header from '../../components/common/Header'
import createHistory from 'history/createHashHistory'
const history = createHistory({queryKey: false})

import * as actions1 from '../../actions/user'
import * as actions2 from '../../actions/user0'
/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state） 或者 state => state.home（传递指定的state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

@connect(
    state => state,
    dispatch => bindActionCreators({...actions2, ...actions1}, dispatch)
)
export default class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList:[],
      email:'tongchuanxing@163.com',
      pwd:'123456',
      log:true
    }
    console.log(this);
    // Redirect.to='/sdfgsdf'

    this.checkClick = this.checkClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.submitData = this.submitData.bind(this);
  }
  inputChange(event){
    let name = event.target.name
    let st = {}
    st[name]=event.target.value;
    this.setState(st);
  }
  checkClick(){
    this.setState({
      log:!this.state.log
    })
  }
  updateAuth(loggedIn){
    console.log(loggedIn);
  }
  componentWillMount(){
    auth.onChange=this.updateAuth;
  }
  submitData(event){
    event.preventDefault();
    let param = {
      email:this.state.email,
      pwd:this.state.pwd
    }

    // console.log(this.props);
    this.props.userloginin(param,(err,data)=>{
      if(data.data){
        auth.login(data.data)
        history.push('/');
      }else{
        console.log('登录失败');
      }

    })
  }

  render() {
    return (
      <div className="container login">
      <Header />
      <div className="form-horizontal">
        <div className="form-group">
          <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" name="email" onChange={this.inputChange} value={this.state.email} className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" name="pwd" onChange={this.inputChange} value={this.state.pwd} className="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox" onClick={this.checkClick} defaultChecked={this.state.log} /> Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="button" onClick={this.submitData} className="btn btn-default">Sign in</button>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
