import { FETCH_USER, FETCH_USERFILLED } from '../lib/const/actionType';

// const initState = {
//     loading: true,
//     user: "0"
// }


export const profile = {
    init: function() {
        return {
             loading: true,
             user: "1"
        }
    },
    reducer:  (state = profile.init(), action) => {
        action.data = action.data ? action.data : {}
        switch (action.type) {
          case FETCH_USER:
              return {
                  loading: true,
                  user: "2"
              }
          case FETCH_USERFILLED:
              return {
                  loading: false,
                  user: action.data
              }
          default:
              return state;
          }
    }

// export const profileReducer = (state = initState, action) => {
    // switch (action.type) {
    //     case FETCH_USER:
    //         return {
    //             loading: true,
    //             user: null
    //         }
    //     case FETCH_USERFILLED:
    //         return {
    //             loading: false,
    //             user: action.data
    //         }
    //     default:
    //         return state;
    // }
}

//module.exports = profileReducer;
