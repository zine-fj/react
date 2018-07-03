import {createStore} from "redux"
import React,{Component} from "react"
import {render} from "react-dom"

// 管理员
const reducer = function(state={price:20000},action) {
    switch(action.type) {
        case "borrow":
            console.log('borrow')
            // 想要借钱的金额
            let price = action.payload.price
            if(price <= 3000) {
                return {price:state.price-price} // 不要直接修改state
            } else {
                return state
            }
        default:
            return state
    }
}
// 创建store
const store = createStore(reducer)

class Cont extends Component {
    state={
        price:store.getState().price // 从store里面获取初始的 price
    }
    render() {
        return (
            <p>{this.state.price}</p>
        )
    }
    componentDidMount() {
        // 对store里面的钱进行监控
        store.subscribe(()=>{
            // 如果金额发生变化，就会自动调用 subscribe
            // 重新获取 store 里面的price
            this.setState({
                price:store.getState().price
            })
        })
    }
}

class Button extends Component {
    fnBorrow() {
        // 借钱，派发请求
        store.dispatch({type:'borrow',payload:{price:2000}})
    }
    render() {
        return (
            <a onClick={this.fnBorrow} href="javascript:;">{this.props.children}</a>
        )
    }
}

class Box extends Component {
    render() {
        return (
            <div>
                <Cont></Cont>
                <Button>借钱</Button>
            </div>
        )
    }
}



render(
    <Box />,
    document.getElementById('root')
)