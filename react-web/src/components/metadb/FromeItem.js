import React from 'react'
import DatePicker from 'react-datepicker'
import { Refers } from 'ssc-refer'
import dateUtils from '@/utils/dateUtils'
import { log } from 'util';
export default class FromeItem extends React.Component {
  constructor(props){
    super(props)
    this.onChangeData = this.onChangeData.bind(this)
  }
  render(){

// 0, 7, 16, 17 文本类型
// 1 整数类型
// 2 数量(double)类型
// 3, 20 日期类型，不带带具体时分秒
// 8 时间类型
// 15 时间戳类型
// 4 逻辑类型
// 5 参照类型
// 6 下拉类型
// 9 文本区域类型
// 10 图片类型
// 11 对象类型
// 12 占位块类型
// 14 email类型
// 18 money类型
    let error = ''
    let value = this.props.data[this.props.temp.id] ? this.props.data[this.props.temp.id] : this.props.temp.defaultvalue ? this.props.temp.defaultvalue : ''
    if(this.props.temp.datatype==4){
      if(value){
        value = true
      }else{
        value = false
      }
    }else if(this.props.temp.datatype==5){
      // console.log('-----')
      // console.log(JSON.stringify(value))
      // console.log(JSON.stringify(this.props.data[this.props.temp.id]))
      // console.log('==========')
      if(value && typeof(value)==='object'){
        value = value
      }else{
        value = undefined//{name:'',id:'',code:''}
      }
    }else if(this.props.temp.datatype==6){
      this.props.temp.enumdata.forEach((enu)=>{
        let [key,val] = Object.entries(enu)[0]
        if(value==key){
          value = val
        }
      })
    }
    if(this.props.data[this.props.temp.id+'__required']){
      error = ' required-error'
    }
    if(this.props.isEdit === 0){
      if(this.props.temp.datatype==0 
        || this.props.temp.datatype==7 
        || this.props.temp.datatype==16
        || this.props.temp.datatype==17
        || this.props.temp.datatype==1
        || this.props.temp.datatype==2
        || this.props.temp.datatype==14
        || this.props.temp.datatype==18){
          // console.log(this.props.data)
          // console.log(this.props.temp.id)
        return (<span>{JSON.stringify(value)}</span>)
      }else if(this.props.temp.datatype==3 || this.props.temp.datatype==20){
        return (<span>{dateUtils.getDay(value)}</span>)
      }else if(this.props.temp.datatype==4){
        if(value){
          return (<span>是</span>)
        }else{
          return (<span>否</span>)
        }
      }else if(this.props.temp.datatype==5){ // 参照
        return (<span>{value ? value.name:''}</span>)
        // if(this.props.data[this.props.temp.id]){
        //   return (<span>{this.props.data[this.props.temp.id].name}</span>)
        // }else{
        //   return null
        // }
      }else if(this.props.temp.datatype==6){ // 枚举
        return (<span>{value}</span>)
        // let valdata = ""
        // this.props.temp.enumdata.forEach((enu)=>{
        //   let [key,val] = Object.entries(enu)[0]
        //   if(this.props.data[this.props.temp.id]==key){
        //     valdata = val
        //   }
        // })
        // return (<span>{valdata}</span>)
      }else if(this.props.temp.datatype==8){ // 时间类型
        return (<span>{dateUtils.getDate(value)}</span>)
        // return (<span>{dateUtils.getDate(this.props.data[this.props.temp.id])}</span>)
      }else{
        return (<span>{value}</span>)
        // return (<span>{this.props.data[this.props.temp.id]}</span>)
      }
    }else{
      if(this.props.temp.datatype==1){
        return (<input 
          maxLength={this.props.temp.length ? this.props.temp.length : 9999 } 
          type="Number" 
          onChange={this.onChangeData.bind(this,'int')} 
          value={value} 
          className={"form-control" + error} 
          placeholder={'请输入'+this.props.temp.lable} />)
      }else if(this.props.temp.datatype==2
        || this.props.temp.datatype==18){
        return (<input 
          type="Number" 
          maxLength={this.props.temp.length ? this.props.temp.length : 9999 } 
          onChange={this.onChangeData.bind(this,'double')} 
          value={value} 
          className={"form-control" + error} 
          placeholder={'请输入'+this.props.temp.lable} />)
      }else if(this.props.temp.datatype==3 || this.props.temp.datatype==20){
        return (<DatePicker  onChange={this.onChangeData.bind(this,'date')} selected={dateUtils.getDay(value,true)} />)
      }else if(this.props.temp.datatype==8){
        return (<DatePicker  onChange={this.onChangeData.bind(this,'date')} selected={dateUtils.getDate(value,true)} />)
      }else if(this.props.temp.datatype==4){
        return (<span>
          <input type="checkbox" onChange={this.onChangeData.bind(this,'check')} checked={value} />是
          </span>)
      }else if(this.props.temp.datatype==5){
        // let selectedData = this.props.data[this.props.temp.id] ? this.props.data[this.props.temp.id] : {name:'',id:'',code:''}
        // selectedData = JSON.parse(JSON.stringify(selectedData))
{/*this.props.refUrl*/}
// console.log(JSON.stringify(value))
        return (<Refers
          key={'key'+Math.random()+this.props.row+this.props.col}
          className={error}
          labelKey="name"
          emptyLabel='暂无数据'
          filterBy={["name","code","id"]}
          onChange={this.onChangeData.bind(this,'refer')}
          placeholder="请选择..."
          referConditions={{"refCode":this.props.temp.refinfocode,"refType":"tree","rootName":this.props.temp.lable,"convertcol":"{name:displayName}"}}
          referDataUrl={this.props.refUrl}
          referType="list"
          selected={value ? [value] : []}
          multiple={false}
        />)
        // referConditions={{refCode: this.props.temp.refinfocode, refType: "list", displayFields: ["code", "name"]}}
      }else if(this.props.temp.datatype==6){
        return (<select className={"form-control" + error} onChange={this.onChangeData.bind(this,'select')}>
          {this.props.temp.enumdata.map((enu)=>{
            // let selectedVal = this.props.data[this.props.temp.id] ? this.props.data[this.props.temp.id] : this.props.temp.defaultvalue
            let [key,val] = Object.entries(enu)[0]
            return (<option selected={val==value} value={key}>{val}</option>)
            // return (<option selected={key==selectedVal} value={key}>{val}</option>)
          })}
          </select>)
      }else{
        return (<input 
          maxLength={this.props.temp.length ? this.props.temp.length : 9999 } 
          type="text" 
          onChange={this.onChangeData.bind(this,'txt')} 
          value={value} 
          className={"form-control" + error} 
          placeholder={'请输入'+this.props.temp.lable} />)
      }
      return null
    }
    return null
    // return (
    //   <div style={{paddingTop:'7px'}}>
    //     {this.props.isEdit == 0 && (
    //       <span>
    //         [{this.props.temp.datatype}][{this.props.temp.id}]
    //         {this.props.temp.datatype==0 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==1 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==2 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==3 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==4 && this.props.data[this.props.temp.id]==true && '是'}
    //         {this.props.temp.datatype==4 && this.props.data[this.props.temp.id]==false && '否'}
    //         {this.props.temp.datatype==5 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==6 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==9 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==10 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==11 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==12 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==14 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==18 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==15 && (this.props.data[this.props.temp.id])}
    //         {this.props.temp.datatype==20 && (this.props.data[this.props.temp.id])}
    //       </span>
    //     )}
    //     {this.props.isEdit == 1 && (
    //       <span>
    //         {this.props.temp.datatype==0 && (
    //           <input type="text" onChange={this.onChangeData} value={this.props.data[this.props.temp.id]} className="form-control" placeholder="" />
    //         )}
          
    //       </span>
    //     )}
    //   {/*JSON.stringify(this.props.temp)*/}
    //   </div>
    // )
  }
  onChangeData(type,event){
    let flag = false
    let val = ""
    let tdata = JSON.parse(JSON.stringify(this.props.data))
    if(type==='int'){
      val = parseInt(event.target.value)
      if(isNaN(val)){
        flag=true
      }
    }else if(type==='double'){
      val = event.target.value
      if(isNaN(Number(val))){
        flag=true
      }
      if(this.props.temp.digit>0){
        let arr = val.split('.')
        if(arr.length>1 && arr[1].length>this.props.temp.digit){
          flag=true
        }
      }
    }else if(type==="txt"){
      val = event.target.value
    }else if(type==='date'){
      val = event.target.value
    }else if(type==='refer'){
      // console.log(event)
      if(event.length>0){
        val = event[0]
      }else{
        // flag=true
        val = undefined
      }
      // val =  ?  : {name:'',id:'',code:''}
    }else if(type==='select'){
      val = event.target.value
      // this.props.temp.enumdata.forEach((enu)=>{
      //   let [k,v] = Object.entries(enu)[0]
      //   if(k===val){
      //     val = {id:k, name:v}
      //   }
      // })
    }else if(type==='check'){
      val = !!!this.props.data[this.props.temp.id]
    }
    if(!flag){
      let setData = {[this.props.temp.id]:val}
      if(this.props.data[this.props.temp.id+'__required']){
        setData[this.props.temp.id+'__required'] = false
      }
      
      // console.log(['setData',setData])
      let data = Object.assign(tdata, setData)
      this.props.onChangeData(this.props.type,data,this.props.temp,this.props.row,this.props.col)
    }
    
    // this.props.data = 
    // console.log(Object.assign(d,{[this.props.temp.id]:val}))
  }
}