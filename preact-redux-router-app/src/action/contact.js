/**
 * @file The file of action for dispatch
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */
import { GET_LXINFO, FETCH_LOADING } from '../lib/const/actionType';

//export default {
const contact = {
      //getLx: (dispatch) => (data) => {//另一种写法:小彤的写法
      getLx: (data) => (dispatch) => {
           //console.log("action:data",JSON.stringify(data));

           dispatch({ type: FETCH_LOADING });

           let dafaultData = {
               loading: false,
               user: null,
               contact: {
                  "name":"chenyangdddd233",
                  "phone": "17701321596",
                  "email": "chenyang@163.com"
               }
           }

           //alert(JSON.stringify(Object.keys(data)));

           setTimeout(function(){
               //该处data即为页面中透传的参数，拿到该参数后可以在该页面进行fetch请求
               data = Object.keys(data).length ? data : dafaultData;
               dispatch({
                  type: GET_LXINFO,
                  data: data
               });
           },2000)

      }
}

module.exports = contact;
