import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {userStore} from './userStore'
import newsStore from './newsStore'
const rootReducer = combineReducers({
  routing: routerReducer,
  userStore,
  newsStore
})
console.log(userStore)
export default rootReducer