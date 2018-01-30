// import axios from 'axios'
import type from '../store/actions'
import axios from './axios'
export default {
  news(data){
    return (dispatch, getState) => {
      axios.get('/static/db/list.json', {
        params:{age:111}
      }).then(function(data){
        dispatch({type:type.GET_NEW_LIST, data:data.data.data})
      }).catch((e)=>{
        console.log(e)
      })
    }
  }
}