import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from "react-router"
// hashHistory 锚点历史记录

// 索引的文件不用加文件名
// import Header from "./components/public"
// import Content from "./components/public"

import HomePage from "./routes/HomePage"
import ListPage from "./routes/ListPage"
import CartPage from "./routes/CartPage"

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

// 路由原理：通过 onhashchange 事件去监听 hash 值("#/list")改变，然后渲染hash值对应的组件(ListPage)
window.onhashchange = function() {
    console.log(window.location.hash)
}