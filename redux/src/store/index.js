import {createStore} from 'redux'

let initState = {
    listData:[],
    classData:[],
    classID:0
}
const reducer = (state=initState,action)=>{
    switch(action.type) {
        case 'PRO_LIST_DATA':
            // action.payload.listData 获取到的商品数据
            let newState = JSON.parse(JSON.stringify(state)) // newState = 拷贝的state
            newState.listData = action.payload.listData
            return newState
        case 'PRO_CLASS_DATA':
        // 先 拷贝state(因为不能对形参进行修改)
            let newStateClass = JSON.parse(JSON.stringify(state))
            newStateClass.classData = action.payload.classData // 让classData = 获取到的服务器端的classData
            return newStateClass
        case 'CHANGE_CLASS_ID':
            // action.payload.listData 获取到的商品数据
            let newStateId = JSON.parse(JSON.stringify(state)) // newState = 拷贝的state
            newStateId.listData = action.payload.classID
            return newStateId
        default:
            return state
    }
}
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store