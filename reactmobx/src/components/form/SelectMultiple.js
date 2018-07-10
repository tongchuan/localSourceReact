import React from "react";
import PropTypes from 'prop-types'
import {observer} from 'mobx-react';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css'
@observer
export default class SelectMultiple extends React.Component {
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
    if(newValue.length===0 && oldValue.length===0){
      return false;
    }
    let oldV = []
    let newV = []
    oldValue.forEach((item)=>{
      if(item[this.props.valueKey]){
        oldV.push(item[this.props.valueKey])
      }
    })
    newValue.forEach((item)=>{
      if(item[this.props.valueKey]){
        newV.push(item[this.props.valueKey])
      }
    })
    oldV.sort()
    newV.sort()
    
    if(oldV.length===0 && newV.length===0){
      return false;
    }
    if(JSON.stringify(oldV)===JSON.stringify(newV)){
      return false;
    }
    let value = []
    this.props.enumData.forEach((data)=>{
      newValue.forEach((item)=>{
        if(item[this.props.valueKey] === data[this.props.valueKey]){
          value.push(data)
        }
      })
    })
    this.setState({
      value
    },()=>{
      // console.log(JSON.stringify(newValue))
      // console.log('====')
      this.props.onChang(value)
      this.checkError()
    })
    
  }
  onChang(value,event){
    let data = []
    // if(this.props.multiple){
    //   this.props.enumData.forEach((item)=>{
    //     value.forEach((v)=>{
    //       if(item[this.props.valueKey] === v.value){
    //         data.push(item)
    //       }
    //     })
    //   })
    // }else{
    //   this.props.enumData.forEach((item)=>{
    //     if(item[this.props.valueKey] === value.value){
    //       data.push(item)
    //     }
    //   })
    // }
    
    if(this.props.multiple){
      data = value
      // this.props.enumData.forEach((item)=>{
      //   value.forEach((v)=>{
      //     if(item[this.props.valueKey] === v.value){
      //       data.push(item)
      //     }
      //   })
      // })
    }else{
      data.push(value)
      // this.props.enumData.forEach((item)=>{
      //   if(item[this.props.valueKey] === value.value){
      //     data.push(item)
      //   }
      // })
    }
    
    // console.log(JSON.stringify(data))
    this.checkValue(data)

    // this.checkValue(event.target.value,this.props.data)
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
  
  }
  componentWillMount(){
    // if(!this.props.value && this.props.enumData.length>0){
    //   this.checkValue(this.props.enumData[0])
    // }
    // console.log(this.props.required)
    // console.log(this.props.value)
  }
  componentDidMount(){
    this.checkError()
  }
  componentWillReceiveProps(newProps){
   
    this.checkValue(newProps.value)
    // console.log(JSON.stringify(data))
    // this.checkValue(newProps.value)
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
    let value = this.state.value
    value = this.props.multiple ? value : value.length > 0 ? value[0] : null
    console.log(JSON.stringify(value))
    
    return (
      
      <span>
        <Select
          placeholder={this.props.placeholder}
          onChange={this.onChang}
          options={this.props.enumData}
          valueKey={this.props.valueKey}
          labelKey={this.props.labelKey}
          multi={this.props.multiple}
          autoBlur={this.props.autoBlur}
          disabled={this.props.disabled}
          value={value}
          className={this.props.className}

        />
      </span>
    )
  }
}
SelectMultiple.defaultProps = {
  hidden: false,
  required:false,
  disabled:false,
  readonly:false,
  multiple: false,
  valueKey:'code',
  labelKey:'name',
  className: '',
  enumData: [],
  value:[],
  checkError:()=>{},
  autoBlur: true
}
SelectMultiple.PropTypes = {
  hidden:PropTypes.bool,
  disabled:PropTypes.bool,
  required:PropTypes.bool,
  readonly:PropTypes.bool,
  multiple: PropTypes.bool,
  autoBlur: PropTypes.bool,
  valueKey:PropTypes.string,
  labelKey: PropTypes.string,
  placeholder:PropTypes.string,
  className: PropTypes.string,
  onChang: PropTypes.func,
  onChang: PropTypes.func.isRequired,
  checkError: PropTypes.func,
  enumData: PropTypes.array,
  value:PropTypes.array
}