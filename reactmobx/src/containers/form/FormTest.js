import React from "react";
import {observer} from 'mobx-react';

import Store from '@/stores/news/NewsListStore'
import Input from '@/components/form/Input'
import Select from '@/components/form/Select'
import SelectMultiple from '@/components/form/SelectMultiple'
import SelectRefer from '@/components/form/SelectRefer'
import CheckBoolean from '@/components/form/CheckBoolean'
import DateTime from '@/components/form/DateTime'
import DateTimeBetween from '@/components/form/DateTimeBetween'
import RcTree from '@/components/form/RcTree'
@observer
export default class FormTest extends React.Component {
  constructor(props){
    super(props)
    this.store = new Store();
    this.state = {
      formError: {},
      textareavalue:'',
      numbervalue:'',
      textvalue: '',
      Select: '',
      SelectMultiple: [{value:'fasdfadfasdfasdfa2',name:'2'}],
      SelectRefer:[],
      enumDataRefer:[],
      checkValue:false,
      va: null,
      dateValue:['',''],
      dateValue2: ['','']
    }
    this.checkError = this.checkError.bind(this)
    this.onChang = this.onChang.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.loadOptions = this.loadOptions.bind(this)
  }
  componentWillMount(){
    setTimeout(()=>{
      this.store.getNewsList({name:'kaishi',age:'张'})
    },3000)
    // this.store.getNewsList({name:'kaishi',age:'张'})
    console.log('componentWillMount')
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        textvalue:Math.random()
      })
    },3000)
    
  }
  checkError(key,flag){
    let formError = this.state.formError
    // console.log(formError)
    formError[key] = flag
    this.setState({formError})
    console.log(formError)
  }
  onChang(data,textvalue){
    console.log(data,textvalue)
    this.setState({
      textvalue
    })
  }
  onFocus(){
    console.log('onFocus')
    setTimeout(()=>{
      let enumDataRefer = [
        {value:'11111111111',name:'43早点发的说法'},
        {value:'22222222222',name:'合法的'},
        {value:'34444444444444',name:'俺的沙发'},
        {value:'4555555555',name:'电风扇vas'},
        {value:'fasdfadfasdfasdfa2',name:'阿发'}
      ]
      this.setState({enumDataRefer})
    },5000)
  }
  loadOptions(value,input,callback){
    console.log([value,input,callback])
    console.log('loadOptions')
    setTimeout(()=>{
      let enumDataRefer = [
        {value:'11111111111',name:'43早点发的说法'},
        {value:'22222222222',name:'合法的'},
        {value:'34444444444444',name:'俺的沙发'},
        {value:'4555555555',name:'电风扇vas'},
        {value:'11111111111',name:'43早点发的说法'},
        {value:'22222222222',name:'合法的'},
        {value:'34444444444444',name:'俺的沙发'},
        {value:'4555555555',name:'电风扇vas'},
        {value:'fasdfadfasdfasdfa2',name:'阿发'}
      ]
      callback(null, {options: enumDataRefer })
      // this.setState({enumDataRefer})
    },5000)
  }
  render(){
    return (
      <div>
        <form>
        <h1>FormTest</h1>
        <RcTree />
        {/* <DateTimeBetween
          wrapClassName={'warpclass'}
          startClassName=""
          endClassName=""
          required={true}
          value={this.state.dateValue}
          onChang={(dateValue)=>{this.setState({dateValue})}}
          checkError={this.checkError.bind('DateTimeBetween')}
        />
        <DateTimeBetween
          wrapClassName={'warpclass'}
          startClassName=""
          endClassName=""
          required={true}
          value={this.state.dateValue2}
          onChang={(dateValue2)=>{this.setState({dateValue2})}}
          checkError={this.checkError.bind('DateTimeBetween')}
        /> */}

        {/* <DateTime
          value={this.state.va}
          required={true}
          checkError={this.checkError.bind(this,'dddd')}
          onChang={(va)=>{this.setState({va})}}
        /> */}
        {/* <SelectRefer 
          placeholder="请选择"
          valueKey="code"
          labelKey='name'
          multiple={false}
          data={{"refCode":"cashFlowType","refType":"table","displayFields":["code","name"]}}
          onChang={(SelectRefer)=>{this.setState({SelectRefer})}}
          value={this.state.SelectRefer}
          // valueRenderer={(item)=>(<span>{item.id}==={item.id}</span>)}
        />
        <SelectMultiple
          placeholder="请选择"
          valueKey="value"
          labelKey='name'
          multiple={false}
          onChang={(SelectMultiple)=>{this.setState({SelectMultiple})}}
          value={this.state.SelectMultiple}
          enumData={[{value:'fasdfadfasdfasdfa2',name:'2',age:2},{value:'adhstrrwe433434adsfasd3',name:'3', kaishi:3},{value:'asdfasdfasdfasdjyh',name:'4',end:4}]}
        /> */}
        {/* <CheckBoolean value={this.state.checkValue} onChang={(checkValue)=>{this.setState({checkValue})}} /> */}
          {/* <Input type="textarea"
            value={this.state.textareavalue}
            placeholder="kl;asdfa;jlsdfkjas;"
            onChang={(textareavalue)=>{this.setState({textareavalue})}}
            className="form-control"
          /> */}
          {/* <Select 
            className="form-control"
            idkey='value'
            showkey='name'
            readonly={false}
            disabled={false}
            value={this.state.selectEnum}
            enumData={[{value:'2',name:'2'},{value:'3',name:'3'},{value:'4',name:'4'}]}
            onChang={(selectEnum)=>{console.log(selectEnum);this.setState({selectEnum})}}
          /> */}
          {/* <Input type="email" digit={0}
            min={0}
            max={100}
            maxlength={10}
            readonly={false}
            required={true}
            checkError={this.checkError.bind(this,'errorKey')}
            className="form-control"
            value={this.state.textvalue} onChang={this.onChang.bind(this,{type:'1111'})} /> */}
          {/* <Input type="number"
            digit={2}
            rount="5"
            min={0}
            max={100}
            disabled={true}
            maxlength={10}
            className="form-control"
            value={this.state.numbervalue} onChang={(numbervalue)=>{this.setState({numbervalue})}} />
          <Input type="password" 
            maxlength={10}
            className="form-control"
            onChang={()=>{}} /> */}
        <input type="submit" onClick={this.onSubmitForm} value="tijiao" />
        </form>
      </div>
    )
  }
  onSubmitForm(){

  }
}