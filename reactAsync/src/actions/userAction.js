import axios from './axios'
import type from '../store/actions'
export default {
  user(data){
    return (dispatch, getState) => {
      axios.get('/static/db/user.json', {params: {
        userid:88,
        pwd:'123456'
      }}).then((data) => {
        dispatch({type:type.GET_USER_ITEM, data:data.data})
      }).catch((error) => {
        console.log(error)
      })
      // axios.post('/static/db/user.json', {
      //   userid:88,
      //   pwd:'123456'
      // }).then((data) => {
      //   dispatch({type:type.GET_USER_ITEM, data:data.data})
      // }).catch((error) => {
      //   console.log(error)
      // })
    }
  }
}
