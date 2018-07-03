import React,{Component} from 'react'
import {render} from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'

import HomePage from './routes/HomePage'
import ListPage from './routes/ListPage'
import DetailPage from './routes/DetailPage'
// 全局导入store
import store from './store'
import {Provider} from 'react-redux'

const App = () => {
    // 通过provider给每个页面都提供store
    return <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={HomePage} />
            <Route path='/list' component={ListPage} />
            <Route path='/detail/:goodsID' component={DetailPage} />
        </Router>
    </Provider>
}

render(
    <App />,
    document.getElementById('root')
)