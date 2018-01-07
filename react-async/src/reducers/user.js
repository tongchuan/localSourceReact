const initData = {
  name:'uise'
}

export function user(state = initData, action) {
    console.log('state',state)
    console.log('action',action)
    switch (action.type) {
        case 'RECEIVE_HOT_SEARCH':
            return {...Object.assign(state, action.data)}
        default:
            return {...state};
    }
}
