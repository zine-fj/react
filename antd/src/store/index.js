import {createStore} from 'redux'

const reducer = (state={},action) => {
    switch(action.type) {
        case 'ss':
            return state
        default:
            return state
    }
}

const store = createStore(reducer)

export default store