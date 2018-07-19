import React from "react";
import PropTypes from 'prop-types'
import {observer, propTypes} from 'mobx-react';
import FileUpload from 'react-fileupload'


@observer
export default class Upfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataList: this.props.dataList
    }
    this.readFile = this.readFile.bind(this)
    this.delImage = this.delImage.bind(this)
    this.dataList = []
  }
  readFile(file){
    console.log(file)
    let reader2  = new FileReader();
    reader2.addEventListener("load", ()=>{
      let data = {
        name: file.name,
        icon: reader2.result
      }
      this.dataList.push(data)
      this.setState({
        dataList: this.dataList
      })
    }, false);
    reader2.readAsDataURL(file);
  }
  delImage(item,index){
    let dataList = JSON.parse(JSON.stringify(this.state.dataList))
    dataList.splice(index,1)
    this.setState({
      dataList
    })
  }
  componentDidMount(){
    // this.refs['File-Upload'].filesToUpload([this.state.file]);
    // setTimeout(()=>{
    //   this.refs.uploadBtn.click()
    //   console.log(this.refs.uploadBtn)
    // },3000)
  }
  render() {
    return (
      <div className={this.props.className}>
        <ul>
        {this.state.dataList.map((item,index)=>{
          return (
            <li key={index}>
              <img src={item.icon} />
              <label onClick={this.delImage.bind(this,item,index)} className="remove glyphicon glyphicon-remove"></label>
              <p>{item.name}</p>
            </li>
          )
        })}
        <FileUpload options={{
          baseUrl:this.props.baseUrl,
          param:this.props.param,
          multiple: this.props.multiple,
          numberLimit: this.props.numberLimit,
          dataType: this.props.dataType,
          chooseAndUpload: this.props.chooseAndUpload,
          wrapperDisplay: this.props.wrapperDisplay,
          timeout: this.props.timeout,
          paramAddToField: this.props.paramAddToField,
          accept: this.props.accept,
          fileFieldName: this.props.fileFieldName,
          withCredentials: this.props.withCredentials,
          requestHeaders: this.props.requestHeaders,
          userAgent: this.props.userAgent,
          beforeChoose: ()=>{ // 在用户点击选择按钮后，进行选择文件之前执行，返回true继续，false阻止用户选择
            return true
          },
          chooseFile: (files) =>{ // 用户选择文件后的触发的回调函数
            // console.log(Array.from(files))
            // console.log(Array.of(files))
            Array.from(files).forEach((file)=>{
              this.readFile(file)
            })
          },
          beforeUpload:(files,mill)=>{ // 进行上传动作之前执行，返回true继续，false阻止文件上传
            // files {array[File] | string} 现代浏览器返回包含File对象的数组(File API返回的方式)，IE返回文件名
            // mill {long} 上传动作执行时的时间(毫秒)，如果File对象已有mill属性则返回一样的
            return true;
          },
          doUpload:(files,mill,xhrID)=>{ // 上传动作(xhr send | form submit)执行后(请求发送后)调用
            // @param file {array[File] | string} 现代浏览器返回包含File对象的数组(File API返回的方式)，IE返回文件名
            // @param mill {long} 上传动作执行时的时间(毫秒)，如果File对象已有mill属性则返回一样的
            // @param xhrID {int} 这次上传所属的xhr的id。在 abort 的组件方法中会用到。
            // @return
          },
          onabort:(mill,id)=>{ // 在你主动取消一个xhr后触发。
            // @param mill {long} 你所取消的上传动作执行时的时间(毫秒)
            // @param xhrID {int} 你所取消的xhr所属id。
          },
          uploading: (progress)=>{ // 在文件上传中的时候，浏览器会不断触发此函数，IE9-为虚拟的进度
            // @param progress {Progress} progress对象，里面存有例如上传进度loaded和文件大小total等属性，IE9-只有loaded和total属性，且loaded为100
            // @return
          },
          uploadSuccess: ()=>{ // 上传成功后执行的回调（针对AJAX而言）
            // @param resp {json | string} 根据options.dataType指定返回数据的格式
          },
          uploadError: (err)=>{ // 上传错误后执行的回调（针对AJAX而言）
            // @param err {Error | object} 如果返回的是catch到的error，则其为object，具有type和message属性
          },
          uploadFail:(resp)=>{ // 上传失败后执行的回调（针对AJAX而言）
            // @param resp {string} 失败信息
          }
        }}>
          {this.props.chooseAndUpload ? (
            <li ref="chooseAndUpload"><span className="glyphicon glyphicon-plus"></span></li>
          ) : (
            [
              <li key="0" ref="chooseBtn"><span className="glyphicon glyphicon-picture"> </span></li>,
              <li key="1" ref="uploadBtn"><span className="glyphicon glyphicon-open-file"></span></li>
            ]
          )}
        </FileUpload>
        </ul>
      </div>
    )
  }
}

Upfile.defaultProps = {
  baseUrl: '',
  param: {
    name:'zhang',
    id: '22222222222',
    del: ['ddd','ssss']
  },
  dataList:  [],
  multiple: true,
  numberLimit: 9,
  dataType: 'json',
  chooseAndUpload: true,
  wrapperDisplay:'inline-block',
  timeout:0,
  paramAddToField:{},
  accept:'image/*',
  fileFieldName:(file)=>file.name,
  withCredentials: false,
  requestHeaders: {},
  userAgent: '',
  className: 'up-file-class-name'
}
Upfile.PropTypes = {
  baseUrl: PropTypes.string.isRequired,
  param: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  dataList: PropTypes.array,
  multiple: PropTypes.bool,
  numberLimit: PropTypes.number,
  dataType: PropTypes.oneOf(['json','text']),
  chooseAndUpload: PropTypes.bool,
  wrapperDisplay: PropTypes.string,
  timeout: PropTypes.number,
  paramAddToField: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  accept: PropTypes.string,
  fileFieldName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  withCredentials: PropTypes.bool,
  requestHeaders: PropTypes.object,
  userAgent: PropTypes.string,
  className: PropTypes.string,
}