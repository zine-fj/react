import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import HomePage from "./routes/HomePage"
import ListPage from "./routes/ListPage"
import CartPage from "./routes/CartPage"

const App = ()=>{
    return <Router history={hashHistory}>
        <Route path="/" component={HomePage}></Route>
        <Route path="/list" component={ListPage}></Route>
        <Route path="/cart" component={CartPage}></Route>
    </Router>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

window.onhashchange = function() {
    console.log(window.location.hash)
}