const reducer = (state={listData:[{title:"商品1"},{title:"商品2"}]},action) => {
    switch(action.type) {
        case 'ss':
            return state
        default:
            return state
    }
}

export default reducer