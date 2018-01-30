import {observable,action,computed,observe} from 'mobx';
import globalStore from '@/stores/common/globalStore'
import axios from '@/utils/axios'
import Config from '@/stores/config'
export default class NewsListStore {
  refUrl = Config.baseURL+Config.refers.refersUrl
  // @observable refUrl = Config.baseURL+Config.refers.refersUrl
  /**
   * 获取表头和标体的结构信息
   * @param {doctype: 'entity'} 表头
   * @param {doctype: 'attribute'} 标体
   * 需要数据处理，所以用了callback
   * */ 
  @observable headerEntity = []
  @observable bodyerEntity = []
  @action getInitgrid(param){
    let url = Config.metadb.initgrid
    if(!Config.env && param.doctype=='attribute'){
      url = Config.metadb.initgrid2
    }
    axios({
      method: 'post',
      url: url,
      data: param,
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((data)=>{
      if(data.success){
        if(param.doctype=='entity'){
          this.headerEntity = Object.assign([], data.data)
        }else if(param.doctype=='attribute'){
          this.bodyerEntity = Object.assign([], data.data)
        }
      }else{
        // 错误信息提示
        globalStore.showError('数据请求失败,'+data.message)
      }
    })
  }

  /**
   * 获取树的数据
   * @param {"condition":"","paras":[],"fields":[],"begin":0} data 
   */
  @observable treeParam={"condition":"","paras":[],"fields":[],"begin":0}
  @observable treeDataList = []
  @observable treeSelectedKey = ''
  @action getTreeData(){
    axios({
      method: 'post',
      url: Config.metadb.qrymdtree,
      data: this.treeParam,
    }).then((data)=>{
      if(data.success){
        // console.log(data.data)
        this.treeDataList = Object.assign([],data.data)
        if(this.treeSelectedKey==''){
          this.treeSelected = this.treeDataList.length > 0 ? this.treeDataList[0].key : '' // = Object.assign([], this.treeDataList.length > 0 ? [this.treeDataList[0].key] : [])
        }
      }else{
        globalStore.showError('数据请求失败,'+data.message)
      }
      // console.log(data)
    })
  }
  computedTreeData(data,txt){
    let rest = []
    data.forEach((item)=>{
      if(item.title.toString().match(txt)){
        item.children= []
        rest.push(item)
      }
      if(item.children && item.children.length > 0){
        let arr = this.computedTreeData(item.children,txt)
        rest.push(...arr)
      }
    })
    return rest
  }
  @observable searchValue = ''
  @computed get gettreeDataList(){
    let data = []
    if(this.searchValue!=''){
      let d = JSON.parse(JSON.stringify(this.treeDataList))
      data = this.computedTreeData(d,this.searchValue)
    }else{
      data = this.treeDataList
    }
    return data
  }
  @computed get treeSelected(){
    return [this.treeSelectedKey]
  }
  set treeSelected(value){
    this.treeSelectedKey = value
    if(this.treeSelectedKey!=''){
      let data = this.treeSelectedKey.toString().split('@')[0]
      this.getDataItemById({condition:"id='"+data+"'"})
    }
  }


  /**
   * 获取实体的数据
   * @param {id:asdfa} param 
   */
  @observable dataItem = {}
  @observable dataListItem = []
  @observable defaultDataItem = {}
  @observable defaultDataListItem = []
  @action getDataItemById(param){
    axios({
      method: 'post',
      url: Config.metadb.getByid,
      data: param,
    }).then((data)=>{
      if(data.success){
        data.data =data.data.length>0 ? data.data[0] : {}
        this.dataItem = Object.assign({},data.data)
        this.defaultDataItem = Object.assign({},JSON.parse(JSON.stringify(data.data)))
        if('attributes' in data.data && data.data.attributes && data.data.attributes.length>0){
          let num = 4-data.data.attributes.length
          if(num > 0){
            for(let i=0;i<num;i++){
              data.data.attributes.push({})
            }
          }
          this.dataListItem = Object.assign([],data.data.attributes)
          this.defaultDataListItem = Object.assign([],JSON.parse(JSON.stringify(data.data.attributes)))
        }else{
          this.dataListItem = Object.assign([{},{},{},{}])
          this.defaultDataListItem = Object.assign([{},{},{},{}])
        }
        
      }else{
        globalStore.showError('数据请求失败,'+data.message)
      }
      // console.log(data)
    })
  }

  /**
   * 取消事件，把原先请求的值在赋值到当前对象
   */
  @action cancelData(){
    this.dataItem = Object.assign({},JSON.parse(JSON.stringify(this.defaultDataItem)))
    this.dataListItem = Object.assign([],JSON.parse(JSON.stringify(this.defaultDataListItem)))
  }

  /**
   * 添加或修改
   * @param {*修改的数据} param 
   * @param {*如果添加，修改父级数据的attributes} param2 
   */
  @action saveEntityData(param,param2,callback){
    axios({
      method: 'post',
      url: Config.metadb.saveEntity,
      data: param,
    }).then((data)=>{
      if(data.success){
        // console.log(JSON.stringify(param))
        // console.log(JSON.stringify(this.defaultDataItem))
        if(!param.id || param.id==''){ //添加数据
          // 修改父级数据
          let fatherData = JSON.parse(JSON.stringify(this.defaultDataItem))
          fatherData.attributes = JSON.parse(JSON.stringify(this.defaultDataListItem))
          fatherData.attributes.push(Object.assign({
            "id":"",
            "tableName":"",
            "propertyName":"",
            "displayName":"",
            "columnName":"",
            "maxLength":0,
            "numberDigit":null,
            "isExtend":false,
            "isSyncDB":true,
            "assemblyType":40,
            "dataType":11,
            "dataTypeInfo":null,
            "refEntity":data.data.id,
            "refEntityCode":data.data.entityName,
            "nullable":true,
            "defaultvalue":"",
            "hidden":null,
            "enumCode":null,
            "rowno":null,
            "unionKey":null
          },param2))
          this.saveEntityData(fatherData,{propertyName:'',displayName:''})
          
        }
        if(typeof callback === 'function'){
          callback()
        }
        this.dataItem = Object.assign({},data.data)
        this.defaultDataItem = Object.assign({},JSON.parse(JSON.stringify(data.data)))
        if('attributes' in data.data && data.data.attributes && data.data.attributes.length>0){
          let num = 4-data.data.attributes.length
          if(num > 0){
            for(let i=0;i<num;i++){
              data.data.attributes.push({})
            }
          }
          this.dataListItem = Object.assign([],data.data.attributes)
          this.defaultDataListItem = Object.assign([],JSON.parse(JSON.stringify(data.data.attributes)))
        }else{
          this.dataListItem = Object.assign([{},{},{},{}])
          this.defaultDataListItem = Object.assign([{},{},{},{}])
        }
        // 获取树结构
        this.getTreeData()
        // 选中当前树
        this.treeSelectedKey = data.data.id
      }else{
        globalStore.showError('数据请求失败,'+data.message)
      }
      // console.log(data)
    })
  }

  @action metaDelete(param){
    axios({
      method: 'post',
      url: Config.metadb.metaDelete,
      data: param,
    }).then((data)=>{
      if(data.success){
        this.treeSelectedKey==''
        this.getTreeData()
      }else{
        globalStore.showError('数据请求失败,'+data.message)
      }
      // console.log(data)
    })
  }
  // @computed get getCount(){
  //   return this.newslist.length * 10
  // }
 

  // @observable datalist = [];
  // @action getDataList(data){
  //   axios({
  //     method:'post',
  //     url: Config.metadb.getData,
  //     // url: 'http://127.0.0.1/keep/mdTplView',
  //     data: data
  //   }).then((data)=>{
  //     // console.log(data.success)
  //     if(!data.success){
  //       console.log(data)
  //       globalStore.showError('数据请求失败,'+data.msg)
  //     }
      
  //   }).catch((error)=>{
  //     //已经处理错误信息显示
  //     console.log(error)
  //   })

  //   axios({
  //     method:'get',
  //     url: Config.metadb.getData,
  //     // url: 'http://127.0.0.1/keep/mdTplView',
  //     data: JSON.stringify(data)
  //   }).then((data)=>{
  //     // console.log(data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // }
}