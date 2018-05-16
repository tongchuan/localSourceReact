/**
 * @file The file of action for dispatch
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */
import { GET_ABOUTINFO } from '../lib/const/actionType';

const about = {
    getAbout:() => (dispatch) => {
         let about = {
             title:"朝韩定于4月27日举行领导人会晤,中方回应sssddssdd",
             star:"4.5",
             author:"linkxiao"
         }
         dispatch({
             type: GET_ABOUTINFO,
             data: about
         })
     },
}

module.exports = about;
