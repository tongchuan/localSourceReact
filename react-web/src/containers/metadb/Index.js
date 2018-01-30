/**
 * api: http://git.yonyou.com/sscplatform/fc_doc/blob/master/exchanger/entity.md
 * api: http://git.yonyou.com/sscplatform/fc_doc/blob/master/%E5%9F%BA%E7%A1%80%E6%A1%A3%E6%A1%88.md
 * author: zhangtongchuan
 * Date: 2018-1-16
 */

import React from 'react';
import {observer} from 'mobx-react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap'
import { Refers } from 'ssc-refer'
import globalStore from '@/stores/common/globalStore'
import Tree from '@/components/metadb/Tree'
import FromeItem from '@/components/metadb/FromeItem'
import Store from '@/stores/metadb/indexStore'
import { setInterval, clearInterval } from 'timers';

@observer
export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.store = new Store();
    this.state = {
      isEdit: 0, //是否编辑 0 浏览状态 1 编辑状态
      isAdd: 0, //是否显示父类编码 父类名称 0 不显示 1 显示 1代表添加
      propertyName:'', //父级编码
      displayName:'', //父级名称
      searchText: ''
    }
    this.onTreeSelected = this.onTreeSelected.bind(this)
    this.onEditItem = this.onEditItem.bind(this)
    this.onChangeData = this.onChangeData.bind(this)
    this.onDeleteItem = this.onDeleteItem.bind(this)
    this.onSaveData = this.onSaveData.bind(this)
    this.onAddItem = this.onAddItem.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.onDeleteListData = this.onDeleteListData.bind(this)
    this.onAddListData = this.onAddListData.bind(this)
    this.setIntervalid = null
  }

  componentWillUnmount(){
    clearInterval(this.setIntervalid)
  }
  componentWillMount() {}
  componentDidMount(){
    //获取左侧树
    this.store.getTreeData()
    // this.store.getDataList({name:111,age:222})
    // 获取表头的结构信息
    this.store.getInitgrid({doctype: 'entity'})
    // 获取表体的结构信息
    this.store.getInitgrid({doctype: 'attribute'})
    // this.setIntervalid = setInterval(()=>{

    // },1000)
  }
  onTreeSelected(data){
    this.setState({
      isEdit:0
    })
    this.store.treeSelected = data.id
  }
  onEditItem(isEdit){
    this.setState({
      isEdit,
      isAdd:0
    },()=>{
      if(isEdit===0){
        this.store.cancelData()
      }
    })
  }
  onChangeData(type,data,temp,row,col){
    if(row===-1 || col===-1){
      this.store[type] = Object.assign({},data)
    }else{
      this.store[type][row] =  Object.assign(this.store[type][row],data)
      this.store[type] = JSON.parse(JSON.stringify(this.store[type]))
    }
  }
  onDeleteItem(){
    globalStore.showCancelModel('您确定要删除吗？',()=>{
      // console.log('1')
    },()=>{
      this.store.metaDelete({id:this.store.dataItem.id})
    })
    
  }
  onSaveData(){
    let flag = false
    let data = JSON.parse(JSON.stringify(this.store.dataItem))
    let dataItem = JSON.parse(JSON.stringify(this.store.dataItem))
    let attributes = []
    let dataListItem = []
    JSON.parse(JSON.stringify(this.store.dataListItem)).forEach((item)=>{
      // console.log(item)
      this.store.bodyerEntity.forEach((temp)=>{
        if(!item[temp.id]){
          delete item[temp.id]
          delete item[temp.id+'__required']
        }
      })
      if(JSON.stringify(item)!="{}"){
        attributes.push(item)
        dataListItem.push(JSON.parse(JSON.stringify(item)))
      }
    })
    
    this.store.headerEntity.forEach((temp)=>{
      let value = data[temp.id] ? data[temp.id] : temp.defaultvalue ? temp.defaultvalue : ''
      // 
      delete data[temp.id+'__required']
      // delete dataItem[temp.id+'__required']
      dataItem[temp.id+'__required'] = false
      if(temp.datatype==4){
        if(value){
          value = true
        }else{
          value = false
        }
      }else if(temp.datatype==5){
        if(value && typeof(value)==='object'){
          value = value
        }else{
          value = {name:'',id:'',code:''}
          if(temp.required && !temp.hidden){
            flag = true
            if(!temp.hidden){
              dataItem[temp.id+'__required'] = true
            }
            
          }
        }
      }
      if(temp.required && !value && !flag && !temp.hidden){
        flag = true
      }
      data[temp.id] = value
      if(temp.required && !value && !temp.hidden){
        dataItem[temp.id+'__required'] = true
      }
    })
    
    attributes.forEach((data,row)=>{
      this.store.bodyerEntity.map((temp,col) => {
        let value = data[temp.id] ? data[temp.id] : temp.defaultvalue ? temp.defaultvalue : ''
        delete data[temp.id+'__required']
        dataListItem[row][temp.id+'__required'] = false
        if(temp.datatype==4){
          if(value){
            value = true
          }else{
            value = false
          }
        }else if(temp.datatype==5){
          if(value && typeof(value)==='object'){
            value = value
          }else{
            value = {name:'',id:'',code:''}
            if(temp.required && !temp.hidden){
              flag = true
              if(!temp.hidden){
                dataListItem[row][temp.id+'__required'] = true
              }
              
            }
          }
        }
        if(temp.required && !value && !flag && !temp.hidden){
          flag = true
        }
        data[temp.id] = value
        if(temp.required && !value && !temp.hidden){
          dataListItem[row][temp.id+'__required'] = true
        }
      })
    })
    
    
    // let value = this.props.data[this.props.temp.id] ? this.props.data[this.props.temp.id] : this.props.temp.defaultvalue ? this.props.temp.defaultvalue : ''
    // if(this.props.temp.datatype==4){
    //   if(value){
    //     value = true
    //   }else{
    //     value = false
    //   }
    // }else if(this.props.temp.datatype==5){
    //   if(value && typeof(value)==='object'){
    //     value = value
    //   }else{
    //     value = {name:'',id:'',code:''}
    //   }
    // }else if(this.props.temp.datatype==6){
    //   this.props.temp.enumdata.forEach((enu)=>{
    //     let [key,val] = Object.entries(enu)[0]
    //     if(value==key){
    //       value = val
    //     }
    //   })
    // }

    let data2 = {
      propertyName:this.state.propertyName,
      displayName:this.state.displayName
    }
    if(this.state.isAdd===1 && (!data2.propertyName || !data2.displayName)){
      globalStore.showModel('父级编码或父级名称不能为空！',()=>{

      })
      return
    }
    // console.log(flag)
    if(flag){
      this.store.dataItem = Object.assign({}, dataItem)
      // console.log(dataListItem)
      this.store.dataListItem = Object.assign([], dataListItem)
      return false
    }
    // console.log('-----------')
    data.attributes = attributes
    this.store.saveEntityData(data,data2,()=>{
      this.setState({
        isEdit:0,
        isAdd:0,
        propertyName:'',
        displayName:''
      })
    })
    
  }
  onAddItem(){
    this.setState({isEdit:1,isAdd:1})
    this.store.dataItem = Object.assign({})
    this.store.dataListItem = Object.assign([{},{},{},{}])
  }
  onInputChange(type,event){
    let value = event.target.value
    if(type=='propertyName' && value != ''){
      let reg = new RegExp('^([a-zA-Z]+)([0-9a-zA-Z]*)$')
      if(!reg.test(value)){
        return
      }
    }
    this.setState({
      [type]:value
    })
  }
  onSearchChange(event){
    let value = event.target.value
    this.setState({
      searchText:value
    })
    this.store.searchValue = value
  }
  render(){
    let liCount = 0
    let checkWidth = this.state.isEdit==1 ?  80 : 0
    let liWidth = 200
    this.store.bodyerEntity.forEach((item)=>{
      if(item.hidden){}else{
        liCount++
      }
    })
    let width = checkWidth + liWidth*liCount
    return (
      <div className="metadb">
        <div className="header">
          <div className="header-title">元数据模型</div>
        </div>
        <div className="metadb-left">
          <div className="metadb-left2">
            <div className="input-group">
                <input type="text" value={this.state.searchText} onChange={this.onSearchChange} placeholder="请输入名称查询" className="form-control input-lg" /><span className="input-group-addon glyphicon glyphicon-search"></span>
            </div>
            <Tree 
              selectedkeys={this.store.treeSelected}
              expandedKeys={this.store.treeSelected} 
              onTreeSelected={this.onTreeSelected}
              data={this.store.gettreeDataList} />
          </div>
        </div>
        <div className="metadb-right">
          <div className="metadb-title">
            <span>详细信息</span>
            {this.state.isEdit==1 && (
              <span>
                <button className="btn btn-default" onClick={this.onEditItem.bind(this,0)}>取消</button>
                <button className="btn btn-default" onClick={this.onSaveData}>保存</button>
              </span>
            )}
            {this.state.isEdit==0 && (
              <span>
                <button className="btn btn-default" onClick={this.onDeleteItem}>删除</button>
                <button className="btn btn-default" onClick={this.onEditItem.bind(this,1)}>编辑</button>
                <button className="btn btn-default" onClick={this.onAddItem}>新增</button>
              </span>
            )}
            
          </div>
          <div className="metadb-header">
            <Row className="form-horizontal">
              {this.state.isAdd==1 && (
                <Col md={6} className="form-group">
                  <label className="col-sm-4 control-label">父级编码</label>
                  <div className="col-sm-8">
                    <input type="text" onChange={this.onInputChange.bind(this,'propertyName')} value={this.state.propertyName} className={"form-control"} placeholder='在父级中的编码' />
                  </div>
                </Col>
              )}
              {this.state.isAdd===1 && (
                <Col md={6} className="form-group">
                  <label className="col-sm-4 control-label">父级名称</label>
                  <div className="col-sm-8">
                    <input type="text" onChange={this.onInputChange.bind(this,'displayName')} value={this.state.displayName} className="form-control" placeholder='在父级中的名称' />
                  </div>
                </Col>
              )}
              
              {this.store.headerEntity.map((temp)=>{
                if(temp.hidden){
                  return undefined;
                }
                return (
                  <Col md={6} className="form-group">
                    <label className="col-sm-4 control-label">{temp.lable}</label>
                    <div className="col-sm-8">
                      <FromeItem 
                        refUrl={this.store.refUrl} 
                        onChangeData={this.onChangeData}
                        isEdit={this.state.isEdit} 
                        row={-1} 
                        col={-1} 
                        type="dataItem" 
                        data={this.store.dataItem} 
                        temp={temp} />
                    {/*this.store.dataItem[temp.id]}<input type="email" className="form-control" placeholder="" />*/}
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
          <div className="metadb-title btop">详情</div>
          <div className="metadb-header overflowX">
          <div className="meta-table" style={{width:width}}>
            <div className="meta-table-thead">
              <ul>
                {this.state.isEdit==1 && (<li style={{width:checkWidth}}><span onClick={this.onAddListData} className="glyphicon glyphicon-plus"></span></li>)}
                {this.store.bodyerEntity.map((temp) => {
                  if(temp.hidden){
                    return undefined;
                  }
                  return (<li style={{width:liWidth}}>{temp.lable}</li>)
                })}
              </ul>
            </div>
            <div className="meta-table-tbody"  style={{width:width+20}}>
            {this.store.dataListItem.map((item,row)=>{
              return (
                <ul>
                  {this.state.isEdit==1 && (<li style={{width:checkWidth}}><span onClick={this.onDeleteListData.bind(this,row)} className="glyphicon glyphicon-remove"></span></li>)}
                  {this.store.bodyerEntity.map((temp,col) => {
                    if(temp.hidden){
                      return undefined;
                    }
                    return (<li style={{width:liWidth}}>
                      <FromeItem 
                        refUrl={this.store.refUrl} 
                        onChangeData={this.onChangeData}
                        type="dataListItem" 
                        row={row} 
                        col={col} 
                        isEdit={this.state.isEdit} 
                        data={item} 
                        temp={temp} />
                      </li>)
                  })}
                </ul>
              )
            })}
            </div>
          </div>
          </div>
          {/*
          <div className="metadb-header overflowX" style={{overflow:'auto','height':'350px',position: 'relative'}}>
            <table className="table table-striped">
              <thead>
                <tr>
                {this.state.isEdit==1 && (<th><span onClick={this.onAddListData} className="glyphicon glyphicon-plus"></span></th>)}
                {this.store.bodyerEntity.map((temp) => {
                  if(temp.hidden){
                    return undefined;
                  }
                  return (<th title={temp.lable}><span style={{display:'block',textOverflow: 'ellipsis',whiteSpace: 'nowrap',overflow: 'hidden','width':'200px'}}>{temp.lable}</span></th>)
                })}
                  
                </tr>
              </thead>

              <tbody className="scrolltable">
                {this.store.dataListItem.map((item,row)=>{
                    return (
                      <tr>
                      {this.state.isEdit==1 && (<td><span onClick={this.onDeleteListData.bind(this,row)} className="glyphicon glyphicon-remove"></span></td>)}
                        {this.store.bodyerEntity.map((temp,col) => {
                          if(temp.hidden){
                            return undefined;
                          }
                          return (<td>
                            <span style={{display:'block',textSverflow: 'ellipsis',whiteSpace: 'nowrap',overflow: 'hidden','width':'200px'}}>
                            <FromeItem 
                              refUrl={this.store.refUrl} 
                              onChangeData={this.onChangeData}
                              type="dataListItem" 
                              row={row} 
                              col={col} 
                              isEdit={this.state.isEdit} 
                              data={item} 
                              temp={temp} />
                              </span>
                            </td>)
                        })}
                      </tr>
                    )
                })}
              </tbody>
            </table>
          </div>*/}
        </div>
      </div>
    )
  }
  // style={{display:'block',overflowY: 'scroll',borderBottom:'1px solid #eee'}}
  //  style={{display:'block',maxWidth:'500px', maxHeight:'300px',overflow: 'scroll'}}
  onDeleteListData(index){
    globalStore.showCancelModel('您确定要删除吗？',()=>{

    },()=>{
      let data = JSON.parse(JSON.stringify(this.store.dataListItem))
      data.splice(index,1)
      this.store.dataListItem = data
    })
  }
  onAddListData(){
    let data = JSON.parse(JSON.stringify(this.store.dataListItem))
    data.push({})
    this.store.dataListItem = data
  }
  
}
