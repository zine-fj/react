import {createStore} from 'redux'

const reducer = (state={listData:[{goodsName:'商品1111'},{goodsName:'商品2222'}]},action)=>{
    switch(action.type) {

        default:
            return state
    }
}
const store = createStore(reducer)

export default store