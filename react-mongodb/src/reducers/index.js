import { combineReducers } from 'redux';
// import { routeReducer } from 'redux-simple-router';
import { routerReducer } from 'react-router-redux'

import { user } from './user'
//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
  routing: routerReducer,
  /* your reducers */
  user,

});

export default rootReducer;
