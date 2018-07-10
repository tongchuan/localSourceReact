import React from "react";
import PropTypes from 'prop-types'
import {observer} from 'mobx-react';

@observer
export default class Input extends React.Component {
  constructor(props){
    super(props)
    this.onChang = this.onChang.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.checkValue = this.checkValue.bind(this)
    this.checkError = this.checkError.bind(this)
    this.formatCurrencyShow = this.formatCurrencyShow.bind(this)
    this.formatDataCurrency = this.formatDataCurrency.bind(this)
    this.unmakeFormatCurrecy = this.unmakeFormatCurrecy.bind(this)
    this.state = {
      value: this.props.value
    }
  }
  unmakeFormatCurrecy(num){
    if(num===undefined||num===null||num===''){
      return ''
    }
    if (typeof(num) !== "string")
      num = num.toString();
    if (num.indexOf(",") > 0) {
      return parseFloat(num.replace(/[^\d\.-]/g, ""));
    } else {
      return num;
    }
  }
  formatDataCurrency(val,value){
    let moneydigit = this.props.digit
    let minOrmax = {
      min: this.props.min,
      minOpt: true,
      max: this.props.max,
      maxOpt: true
    }
    if(val.indexOf(',')){
      val = val.toString().replace(/\,/ig,'')
    }
    if(val===undefined||val ===null||val===''){
      return ''
    }
    // if(val==='-'){
    //   return val
    // }
    if(!Number.isSafeInteger(parseInt(val))){
      return value
    }
    if(parseFloat(val)!=Number(val) || isNaN(Number(val))){
      return value
    }else{
      if(typeof minOrmax === 'object'){
        if(minOrmax.min !==undefined && minOrmax.min !=null && minOrmax.min !== ''){
          if(minOrmax.minOpt){
            if( Number(minOrmax.min)> Number(val)){
              return value
            }
          }else{
            if(Number(minOrmax.min) >= Number(val)){
              return value
            }
          }
        }
        if(minOrmax.max !==undefined && minOrmax.max !==null && minOrmax.max !== ''){
          if(minOrmax.maxOpt){
            if(Number(minOrmax.max) < Number(val)){
              return value
            }
          }else{
            if(Number(minOrmax.max) <= Number(val)){
              return value
            }
          }
        }
      }

      let arr = val.split('.')
      if(arr.length>1){
        val = arr[0]+'.'+arr[1].substr(0,moneydigit)
      }
    }
    if(!val){
      return ''
    }
    return Number.isSafeInteger(parseInt(val)) ?  val : Number.MAX_SAFE_INTEGER
  }
  formatCurrencyShow(val){
    let moneydigit = this.props.digit
    let moneyrount = this.props.rount
    let moneymillion = this.props.million
    if(typeof val==='string' && val===''){
      return ''
    }
    if(!val){
      if(moneydigit>0){
        return '0' + '.'.padEnd(1+moneydigit,'0')
      }else{
        return '0'
      }
    }
    val = val+''
    if(val.indexOf(',')){
      val = val.toString().replace(/\,/ig,'')
    }
    let sign = (val == (val = Math.abs(val)));
    val = val+''
    let value = ''
    let arr = val.toString().split('.')
    if(moneyrount=='5'){ // 四舍五入
      if(arr.length>1){
        if(arr[1].length>moneydigit){
          value= Number(val).toFixed(moneydigit)
        }else{
          value= arr[0] + '.' + arr[1].padEnd(moneydigit,'0')
        }
      }else{
        value= arr[0] + '.'.padEnd(1+moneydigit,'0')
      }
      // value = Number(val).toFixed(moneydigit)
    }else if(moneyrount=='0'){//全舍
      if(arr.length>1){
        if(arr[1].length>moneydigit){
          value= arr[0] + '.' + arr[1].substring(0,moneydigit)
        }else{
          value= arr[0] + '.' + arr[1].padEnd(moneydigit,'0')
        }
      }else{
        value= arr[0] + '.'.padEnd(1+moneydigit,'0')
      }
    }else if(moneyrount=='1'){//全进
      val = Math.ceil(Number(val)*Math.pow(10,moneydigit))*1.0/Math.pow(10,moneydigit)
      arr = val.toString().split('.')
      if(arr.length>1){
        if(arr[1].length>moneydigit){
          value= arr[0] + '.' + arr[1].substring(0,moneydigit)
        }else{
          value= arr[0] + '.' + arr[1].padEnd(moneydigit,'0')
        }
      }else{
        value= arr[0] + '.'.padEnd(1+moneydigit,'0')
      }
    }else{ // 四舍五入
      if(arr.length>1){
        if(arr[1].length>moneydigit){
          value= Number(val).toFixed(moneydigit)
        }else{
          value= arr[0] + '.' + arr[1].padEnd(moneydigit,'0')
        }
      }else{
        value= arr[0] + '.'.padEnd(1+moneydigit,'0')
      }
      // value = Number(val).toFixed(moneydigit)
    }
    if(!moneymillion){
      return value
    }
    let arrval = value.split('.')
    let digit = 3 // 几位添加逗号
    if(arrval[0].length>digit){
      let mod = arrval[0].length%digit
      let str = []
      let index = 0
      while(true){
        if(index>=arrval[0].length){
          break
        }
        if(index===0){
          if(mod==0){
            str.push(arrval[0].substr(index,digit))
            index+=digit
          }else{
            str.push(arrval[0].substr(index,mod))
            index+=mod
          }
        }else{
          str.push(arrval[0].substr(index,digit))
          index+=digit
        }
      }
      value = str.join(',')+ (arrval.length > 1 ? '.'+arrval[1] : '')
    }
    return (sign ? '' : '-') + value
  }
  checkValue(newValue){
    let oldValue = this.state.value
    if(oldValue==newValue){
      return false;
    }
    if(this.props.type==='number'){
      if(this.props.digit===0){
        oldValue = Number(this.unmakeFormatCurrecy(oldValue))
        if(oldValue==newValue){
          return false;
        }
      }
      if(!newValue){
        newValue=''
      }else{
        if(isNaN(Number(newValue)) || typeof Number(newValue)!='number'){
          return false;
        }else{
          newValue = this.formatDataCurrency(newValue,oldValue)
          if(oldValue==newValue){
            return false;
          }
        }
      }
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
    if(this.props.type==='number'){
      this.setState({
        value: this.formatCurrencyShow(this.state.value)
      })
    }
  }
  onFocus(){
    if(this.props.type==='number'){
      let value = this.state.value
      if(value){
        value = Number(this.unmakeFormatCurrecy(this.state.value))
      }
      this.setState({
        value
      })
    }
  }
  checkRquired(value){
    if(!value){
      if(this.props.required){
        return 'required'
      }
    }
    return ''
  }
  checkRegExp(value, key){
    let data = {
      'number': /^[0-9]*$/ig,
      'email': /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/ig,
      'mobile': /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/ig,
      'tel': /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/ig,
      'mobiletel': /^(0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8})|(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})(-| )?)?([0-9]{7,8})((-| |转)*([0-9]{1,4}))?$/ig,
      'url': /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/ig,
      'card': /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/ig
    }
    if(!data[key].test(value)){
      return key
    }
    return ''
  }
  
  checkError(){
    let value = this.state.value
    let error = ''
    switch (this.props.type) {
      case 'text':
        error = this.checkRquired(value)
        break;
      case 'textarea':
        error = this.checkRquired(value)
        break;
      case 'number':
        error = this.checkRquired(value)
        if(!error){
          error = this.checkRegExp(value,'number')
        }
        break;
      case 'email':
        error = this.checkRquired(value)
        if(!error){
          error = this.checkRegExp(value,'email')
        }
        break;
      case 'mobiletel':
        error = this.checkRquired(value)
        if(!error){
          error = this.checkRegExp(value,'mobiletel')
        }
        break;
      case 'mobile':
        error = this.checkRquired(value)
        if(!error){
          error = this.checkRegExp(value,'mobile')
        }
        break;
      case 'tel':
        error = this.checkRquired(value)
        if(!error){
          error = this.checkRegExp(value,'tel')
        }
        break;
      case 'url':
        error = this.checkRquired(value)
        if(!error){
          error = this.checkRegExp(value,'url')
        }
        break;
      case 'card':
        error = this.checkRquired(value)
        if(!error){
          error = this.checkRegExp(value,'card')
        }
        break;
      default:
        break;
    }
    // 'text','password','number','hidden','email','search','tel','url','textarea'
    console.log('checkError')

    this.props.checkError(error)
  }
  onKeyUp(event){
    // console.log(0)
    // console.log(event.target.value)
  }
  componentWillMount(){
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
    
    if(this.props.type==='textarea'){
      return (
        <textarea
          disabled={this.props.disabled}
          readOnly={this.props.readonly}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxlength}
          value={this.state.value}
          onChange={this.onChang}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeyUp={this.onKeyUp}
          className={this.props.className} />
      )
    }
    return (
      <span>
        <input 
          type={this.props.type ==='password' ? 'password' : 'text'}
          // type="text"
          disabled={this.props.disabled}
          readOnly={this.props.readonly}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxlength}
          value={this.state.value}
          onChange={this.onChang}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeyUp={this.onKeyUp}
          className={this.props.className} />
      </span>
    )
  }
}
Input.defaultProps = {
  hidden: false,
  required:false,
  disabled:false,
  readonly:false,
  type: 'text',
  maxlength: 99999,
  placeholder: '',
  className:'',
  value: '',
  digit: 2,
  rount: '5',
  million: true,
  data:{},
  checkError:()=>{}
}
Input.PropTypes = {
  hidden:PropTypes.bool,
  disabled:PropTypes.bool,
  required:PropTypes.bool,
  readonly:PropTypes.bool,
  value:PropTypes.string,
  width:PropTypes.string,
  maxlength:PropTypes.number,
  placeholder:PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  type:PropTypes.oneOf(['text','password','number','hidden','email','search','tel','url','textarea']),
  onChang: PropTypes.func,
  onChang: PropTypes.func.isRequired,
  checkError: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  digit: PropTypes.number,
  rount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  million: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  data: PropTypes.object
}