import React,{Component} from "react"
import {Header,Content,Footer} from "../components/public"

class ListPage extends Component {
    render() {
        return (
            <div>
                <Header> 商品列表 </Header>
                <Content tit='22'>
                    商品列表内容
                </Content>
                <Footer></Footer>
            </div> 
        )
    }
}

export default ListPage