import {createStore} from "redux"

// 管理员
const reducer = (state={price:15000},action)=>{
    switch(action.type) {
        case "borrow13000":
            return {price:state.price-13000}
        case "borrow15000":
            console.log('想得美')
            return state
        default:
        // 不能预测到的结果就不管
            return state
    }
    
}

// 创建仓库
const store = createStore(reducer)
console.log(store.getState())

let xiaoxin = {
    sub(){
        // 订阅
        store.subscribe(function() {
            // 如果钱有变动，就会触发
            console.log('短信通知',store.getState())
        })
    }
}
xiaoxin.sub()

// 行为：借13000
const action = {type:'borrow15000'}

// 发起请求
setTimeout(function() {
    store.dispatch(action)
},2000)

setTimeout(function() {
    store.dispatch({type:'borrow13000'})
},4000)

// 再看看有多少
console.log('再看看有多少',store.getState())