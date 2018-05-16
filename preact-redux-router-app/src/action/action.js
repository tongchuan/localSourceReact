/**
 * @file The file of action for dispatch(所有actions合集，枚举所有actions，备用)
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */



import { FETCH_USER, FETCH_USERFILLED, GET_ABOUTINFO, GET_LXINFO} from '../lib/const/actionType';

const action = {
     fetchUser: (accountId) => (dispatch) => {
        dispatch({ type: FETCH_USER });
        fetch(`https://api.github.com/users/${accountId}`)
            .then(response => response.json())
            .then((user) => {
                dispatch({
                    type: FETCH_USERFILLED,
                    data: user
                })
            })
            .catch(error => console.log(error));
     },

     getAbout:() => (dispatch) => {
          let about = {
              title:"朝韩定于4月27日举行领导人会晤,中方回应",
              star:"4.5",
              author:"linkxiao222"
          }
          dispatch({
              type: GET_ABOUTINFO,
              data: about
          })
      },

      // getLx: function(data) {
      //        return function(dispatch) {
      //            console.log("getLx:action:dispatch",dispatch);
      //            let preData = {
      //                 loading: false,
      //                 user: null,
      //                 contact: {
      //                    "name":"opopop",
      //                    "phone": "17701321596",
      //                    "email": "elieen@163.com"
      //                 }
      //            }
      //            data = data ? data:preData;
      //            dispatch({
      //                type: GET_LXINFO,
      //                data: preData
      //            });
      //       }
      // }

      //getLx: (dispatch) => (data) => {//另一种写法:小彤的写法
      getLx:(data) => (dispatch) => {
           console.log("action:data",JSON.stringify(data));
           let dafaultData = {
               loading: false,
               user: null,
               contact: {
                  "name":"chenyang",
                  "phone": "17701321596",
                  "email": "chenyang@163.com"
               }
           }
           alert(JSON.stringify(Object.keys(data)));
           data = Object.keys(data).length ? data : dafaultData;
           dispatch({
              type: GET_LXINFO,
              data: data
           });
      }
}

module.exports = action;
