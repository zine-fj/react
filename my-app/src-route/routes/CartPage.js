import React,{Component} from "react"
import {Header,Content,Footer} from "../components/public"

class CartPage extends Component {
    render() {
        return (
            <div>
                <Header> 购物车 </Header>
                <Content tit='22'>
                    购物车内容
                </Content>
                <Footer></Footer>
            </div> 
        )
    }
}

export default CartPage