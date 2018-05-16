import { GET_LXINFO, FETCH_LOADING } from '../lib/const/actionType';

// const initState = {
//     loading: true,
//     user: null,
//     initData: {
//           "name":"elieen",
//           "phone": "18618405059",
//           "email": "elieen@163.com"
//     }
// }

export const contact = {
    init: function(data) {
      return {
           loading: false,
           mark: "1",
           contact: {
             name:  data.contactData.name,
             phone: data.contactData.phone,
             email: data.contactData.email
           }
       }
    },

    reducer:  (state = {}, action) => {
        //alert("reducer:action"+JSON.stringify(action));
        action.data = action.data ? action.data : {}
        switch (action.type) {
            case FETCH_LOADING:
            state = Object.assign({
              loading: true,
              mark:'2'
            });

            case GET_LXINFO:
            state = Object.assign({
            loading: false,
            mark:'3'
            },
            state,
            action.data);

            default:
            state = Object.assign({
            loading: true,
            mark:'4'
            },
            state,
            action.data);
                // alert("contact:noCase");
                // return {
                //     loading: false,
                //     contact: "state.initData"
                // }
        }
        return state;
    }
}
//module.exports = aboutReducer;
