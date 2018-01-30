import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames'

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
export default class UserRegist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList:[],
      email:'',
      pwd:'',
      log:true
    }
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
  submitData(event){
    event.preventDefault();
    let data = {
      name:'name_'+this.state.email,
      pwd:this.state.pwd,
      age:parseInt(Math.random()*100),
      email:this.state.email,
      date:new Date(),
      hidden:this.state.log
    }

    // console.log(this.props);
    this.props.regist(data,(err,data)=>{
      console.log(data);
    })
  }
  componentWillMount(){

  }
  componentDidMount(){
    let that = this;
    that.props.userlist({},(err,data)=>{
      console.log(data);
      that.setState({
        userList:data.data
      })
    })
  }
  render() {
    let that = this;
    return (
      <div className="container login">
        <form className="form-horizontal">
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
          </form>
          <table className="table table-bordered">
          <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>pwd</td>
            <td>date</td>
            <td>age</td>
            <td>hidden</td>
            <td>操作</td>
          </tr>
          </thead>
          <tbody>
          {that.state.userList.map((item)=>{
            return (
              <tr>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.pwd}</td>
                <td>{item.date}</td>
                <td>{item.age}</td>
                <td>{item.hidden ? 'true':'false'}</td>
                <td></td>
              </tr>
            )
          })}
          </tbody>
          </table>
      </div>
    )
  }
}
