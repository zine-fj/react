// 管理多个reducer，并暴露
// 如果说reducer是管理员，则这个页面就是 大总管

import cartReducer from './cart'
import productReducer from './product'

export {productReducer,cartReducer}