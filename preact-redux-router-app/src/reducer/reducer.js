/**
 * @file The file of reducer
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */

export * from './profile';
export * from './about';
import { FETCH_USER, FETCH_USERFILLED, GET_ABOUTINFO } from '../lib/const/actionType';

// export const initStore = (res, info) => {
//     const {aboutData, headerData} = res.data;
//     alert("aboutData:"+aboutData);
//     const store = {
//         data: res.data.aboutData,
//         env:"production"
//     };
//     return {
//         store: store,
//         reducers: combineReducers({profileReducer,aboutReducer})
//     };
// };

// export default combineReducers({
//   profileReducer,
//   aboutReducer
// });



const initState = {
    loading: true,
    user: null,
    jsonData:window.jsonData
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                loading: true,
                user: null
            }
        case FETCH_USERFILLED:
            return {
                loading: false,
                user: action.data
            }
        case GET_ABOUTINFO:
           alert("GET_ABOUTINFO:action.type:"+action.type);
            return {
                loading: false,
                about: state.jsonData.data.aboutData
            }
        default:
            return state;
  }
}

module.exports = reducer;
