import {createStore,combineReducers} from 'redux'
import * as reducers from './reducers'

const myReducer = combineReducers(reducers); // 合并 reducer
const store = createStore(myReducer)

export default store