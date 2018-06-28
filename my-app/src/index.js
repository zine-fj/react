import React,{Component} from "react"
import ReactDOM from "react-dom"
//const {Component}  = React
//commonjs(同步)   //AMD（异步）
import {Header,Content,Footer} from "./components/public"

class HomePage extends Component {
  render(){
    return (
      <div>
        <Header>首页</Header>
        <Content tit="22">
          首页内容
        </Content>
        <Footer></Footer>
      </div>
    )
  }
}

class ListPage extends Component {
  render(){
    return (
      <div>
        <Header>商品列表</Header>
        <Content tit="22">
          商品列表的内容
        </Content>
        <Footer></Footer>
      </div>
    )
  }
}

class CartPage extends Component {
  render(){
    return (
      <div>
        <Header>购物车</Header>
        <Content tit="22">
          购物车的内容
        </Content>
        <Footer></Footer>
      </div>
    )
  }
}


ReactDOM.render(<CartPage />, document.getElementById('root'));
