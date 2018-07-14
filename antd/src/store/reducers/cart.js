
const reducer = (state={cartData:[]},action) => {
    switch(action.type) {
        case 'CART_DATA':
            let newState = {cartData:action.payload.cartData}
            return newState
        default:
            return state
    }
}

export default reducer