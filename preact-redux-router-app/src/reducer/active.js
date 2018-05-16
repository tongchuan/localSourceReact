import { FETCH_USER, FETCH_USERFILLED, GET_ABOUTINFO, GET_LXINFO } from '../lib/const/actionType';

//export default function aboutReducer(state = initState, action) {
export const active = {
  init: function(data)  {
    alert("data:active:"+JSON.stringify(data));
    return {
        loading: true,
        user: null,
        active: {
            "name": data.active.name,
            "phone": data.active.name,
            "email": data.active.email
        }
    }
  },

  reducer: (state = {}, action) => {
      switch (action.type) {
          case GET_LXINFO:
              alert("contact:yes");
              return {
                  loading: false,
                  contact: action.data
              }
          default:
              alert("contact:noCase");
              return {
                  loading: false,
                  contact: state.initData
              }
      }
  }

}
//module.exports = aboutReducer;
