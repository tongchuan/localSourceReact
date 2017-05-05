const initData = {
  name:'uise'
}

export function user(state = initData, action) {
    switch (action.type) {
        case 'RECEIVE_HOT_SEARCH':
            return {
                ...state
            }

        default:
            return {...state};
    }
}
