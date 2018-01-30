import type from '../actions'
const initData = {
  list:[
    {name:1, age:12},
    {name:1, age:12},
    {name:1, age:12},
  ]
}
export default function newsStore(state = initData, action) {
  // console.log('state', state)
  console.log('action', action)
  switch (action.type) {
      case type.GET_NEW_LIST:
        state.list = action.data
        return {...state}
      default:
          return {...state};
  }
}