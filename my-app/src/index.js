import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import HomePage from "./routes/HomePage"
import ListPage from "./routes/ListPage"
import CartPage from "./routes/CartPage"
import LoginPage from "./routes/LoginPage"
import DetailPage from "./routes/DetailPage"

const App = ()=>{
    return <Router history={hashHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/list" component={ListPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/detail/:goodsID" component={DetailPage} />
    </Router>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

window.onhashchange = function() {
    console.log(window.location.hash)
}