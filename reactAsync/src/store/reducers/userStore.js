import type from '../actions'

const initData = {
  userItem:{}
}
export function userStore(state = initData, action) {
  // console.log('state', state)
  // console.log('action', action)
  switch (action.type) {
      case type.GET_USER_ITEM:
        state.userItem = action.data
        return {...state};
      default:
          return {...state};
  }
}