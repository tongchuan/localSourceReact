import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames'
import * as actions1 from '../../actions/user'
import * as actions2 from '../../actions/user0'
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  OverlayTrigger,
  Tooltip
 } from 'react-bootstrap';
import "./less/home.less"
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
export default class HomeIndex extends React.Component {
  constructor(props) {
    super(props);
    // console.log("home");
    console.log(this.props);
    this.updatename = this.updatename.bind(this)
  }
  componentDidMount(){
    console.log(this.props.sss())
  }

  updatename(){
    this.props.sss()
  }

  render() {
    // const tooltip = (
    //   <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    // );
    return (
      <div>
       <p>我是更新后的数据{this.props.user.name}</p>
        HomeIndex
        <button onClick={this.updatename}>点击我试一试更新数据状态</button>
      </div>
    )
  }
}
