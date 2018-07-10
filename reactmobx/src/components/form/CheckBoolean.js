import React from "react";
import PropTypes from 'prop-types'
import {observer} from 'mobx-react';

@observer
export default class CheckBoolean extends React.Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      value: this.props.value
    }
  }
  onChange(event){
    this.checkValue(event.target.checked)
  }
  checkValue(newValue){
    let oldValue = this.state.value
    console.log(newValue,oldValue)
    if(oldValue==newValue){
      return false;
    }
    
    this.setState({
      value: newValue
    },()=>{
      this.props.onChang(newValue)
    })
  }
  componentWillReceiveProps(newProps){
    this.checkValue(newProps.value)
  }
  render() {
    return (
      <input type="checkbox" onClick={this.onChange} checked={this.state.value} />
    )
  }
}

CheckBoolean.defaultProps = {
  value: false,
  hidden:false,
  disabled: false
}
CheckBoolean.PropTypes = {
  hidden:PropTypes.bool,
  disabled:PropTypes.bool,
  value: PropTypes.bool,
  onChang: PropTypes.func,
}