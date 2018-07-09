import {createStore} from 'redux'

var initState = {
    listData:[],
    classData:[],
    classID:0
}
const reducer = (state=initState,action)=>{
    switch(action.type) {
        case "PRO_LIST_DATA":
            // action.payload.listData 获取到的商品数据
            var newState = JSON.parse(JSON.stringify(state)) // newState = 拷贝的state
            newState.listData = action.payload.listData
            return newState
        case "PRO_CLASS_DATA":
            // 先 拷贝state (因为不能对形参进行修改)
            var newState = JSON.parse(JSON.stringify(state)) 
            newState.classData = action.payload.classData // 让classData = 获取到的服务器端的classData
            return newState
        default:
            return state
    }
}
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store