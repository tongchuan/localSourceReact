//import {profileReducer} from './profile';
import { GET_ABOUTINFO } from '../lib/const/actionType';
// export const initStore = function(res) {
//   alert("res.data.contentData:" + JSON.stringify(res.data.contentData));
//   return {
//       headerData: res.data.headerData,
//       sideData: res.data.sideData,
//       contentData: res.data.contentData,
//       profileReducer:{
//         name:"linkxiao",
//         url:"http://baidu.com",
//         title:"sksjdjdjddjdjj",
//         star:"4.6",
//         author:"linkxiao"
//       }
//   }
// }
// export default combineReducers({
//     headerData,
//     sideData,
//     contentData,
//     profileReducer
// })




const initState = {
    loading: true,
    user: null,
    //aboutData: window.jsonData.data.aboutData
}

//export default function aboutReducer(state = initState, action) {
export const about = (state = initState, action) => {
    switch (action.type) {
        case GET_ABOUTINFO:
            return {
                loading: false,
                about: action.data
            }
        default:
            //alert("state:"+JSON.stringify(state));
            return state;
  }
}
//module.exports = aboutReducer;
