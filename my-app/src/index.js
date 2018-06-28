import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from "react-router"
// hashHistory 锚点历史记录

// 索引的文件不用加文件名
// import Header from "./components/public"
// import Content from "./components/public"
import {Header,Content,Footer} from "./components/public"

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header> 首页 </Header>
                <Content tit='22'>
                    首页内容
                </Content>
                <Footer></Footer>
            </div> 
        )
    }
}

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

const App = () =>{
    return <Router history={hashHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/list" component={ListPage} />
        <Route path="/cart" component={CartPage} />
    </Router>
}

// 单页面应用(SPA)，无刷新页面跳转
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

window.onhashchange = function() {
    console.log(window.loacation.hash)
}