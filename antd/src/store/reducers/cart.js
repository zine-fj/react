
const reducer = (state={cartData:[],allSelected:true},action) => {
    switch(action.type) {
        case 'CART_DATA':
            let newState = {cartData:action.payload.cartData,allSelected:true}
            newState.cartData.forEach(ele=>{
                if(!ele.isSelected) { // 如果某个商品没有被选中
                    newState.allSelected = false
                }
                
            })
            return newState
        default:
            return state
    }
}

export default reducer