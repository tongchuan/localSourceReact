import React from "react";
import PropTypes from 'prop-types'
import {observer} from 'mobx-react';

@observer
export default class Select extends React.Component {
  constructor(props){
    super(props)
    this.onChang = this.onChang.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.checkValue = this.checkValue.bind(this)
    this.checkError = this.checkError.bind(this)
    this.state = {
      value: this.props.value
    }
  }
  
  checkValue(newValue){
    let oldValue = this.state.value
    if(typeof newValue === 'string' || typeof oldValue==='string'){
      this.props.enumData.forEach((item)=>{
        if(typeof newValue === 'string' && newValue === item[this.props.idkey]){
          newValue=item
        }
        if(typeof oldValue === 'string' && oldValue === item[this.props.idkey]){
          oldValue=item
        }
      })
    }
    
    if(oldValue === newValue || newValue[this.props.idkey]===oldValue[this.props.idkey]){
      return false;
    }
    this.setState({
      value: newValue
    },()=>{
      this.props.onChang(newValue)
      this.checkError()
    })
    
  }
  onChang(event){
    this.checkValue(event.target.value,this.props.data)
  }
  onBlur(){

  }
  onFocus(){

  }
  checkRquired(value){
    if(!value){
      if(this.props.required){
        return 'required'
      }
    }
    return ''
  }

  checkError(){
    let value = this.state.value
    let error = this.checkRquired(value)
    console.log('checkError')

    this.props.checkError(error)
  }
  onKeyUp(event){
    // console.log(0)
    // console.log(event.target.value)
  }
  componentWillMount(){
    if(!this.props.value && this.props.enumData.length>0){
      this.checkValue(this.props.enumData[0])
    }
    // console.log(this.props.required)
    // console.log(this.props.value)
  }
  componentDidMount(){
    this.checkError()
  }
  componentWillReceiveProps(newProps){
    
    this.checkValue(newProps.value)
  }
  shouldComponentUpdate(newProps, newState){
    return true
  }
  componentWillUpdate(nextProps, nextState){
    
  }
  componentDidUpdate(prevProps, prevState){
    
    // console.log(this.props.required)
  }
  componentWillUnmount(){

  }
  render(){
    if(this.props.hidden){
      return null;
    }
    let selectedValue = this.props.value
    if(typeof selectedValue === 'object'){
      selectedValue = selectedValue[this.props.idkey]
    }
    return (
      <span>
        <select 
          disabled={this.props.disabled}
          readOnly={this.props.readonly}
          placeholder={this.props.placeholder}
          multiple={this.props.multiple}
          onChange={this.onChang}
          value={selectedValue}
          className={this.props.className}>
          {this.props.enumData.map((item, index)=>{
            return (<option key={index}  value={item[this.props.idkey]}>{item[this.props.showkey]}</option>)
          })}
          </select>
      </span>
    )
  }
}
Select.defaultProps = {
  hidden: false,
  required:false,
  disabled:false,
  readonly:false,
  multiple: false,
  idkey:'value',
  showkey:'name',
  className: '',
  enumData: [],
  checkError:()=>{}
}
Select.PropTypes = {
  hidden:PropTypes.bool,
  disabled:PropTypes.bool,
  required:PropTypes.bool,
  readonly:PropTypes.bool,
  multiple: PropTypes.bool,
  idkey:PropTypes.string,
  showkey: PropTypes.string,
  placeholder:PropTypes.string,
  className: PropTypes.string,
  onChang: PropTypes.func,
  onChang: PropTypes.func.isRequired,
  checkError: PropTypes.func,
  enumData: PropTypes.array,
  value:PropTypes.any
}