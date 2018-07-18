
const initState = {listData:[],activeIndex:0,sortKey:''}
const reducer = (state=initState,action) => {
    switch(action.type) {
        case 'PRO_LIST_DATA':
            var newState = JSON.parse(JSON.stringify(state)) // 拷贝state
            newState.listData = action.payload.listData
            return newState
        case 'PRO_CHANGE_SORT':
            var newState = Object.assign({},state) // 改变简单类型，浅拷贝也可以
            const index = action.payload.index
            var sortKey = state.sortKey // sortKey初始值

            // 通过index判断，生成新的 sortKey
            if(index === 1) {
                sortKey = 'o1'
            } else if (index === 0) {
                sortKey = ''
            } else if (index === 2) {
                if(state.activeIndex === 2) { //切换升序降序
                    sortKey = sortKey === 'o5' ? 'o3' : 'o5'
                } else {
                    sortKey = 'o5'
                }
                console.log(sortKey)
            }
            // 赋值给newState
            newState.activeIndex = index
            newState.sortKey = sortKey
            return newState
        default:
            return state
    }
}

export default reducer