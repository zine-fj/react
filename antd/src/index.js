import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory,Router,Route} from "react-router"
import {Provider} from "react-redux"
import store from './store'

// routes
import Home from './routes/Home'
import Reg from './routes/User/Reg'
import Cart from './routes/Cart'
import ProuctList from './routes/Product/List'

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={Home}></Route>  
                    <Route path='/reg' component={Reg}></Route>  
                    <Route path='/Cart' component={Cart}></Route>  
                    <Route path='/prouctlist' component={ProuctList}></Route>  
                </Router>
                
            </Provider>        
        </div>
    )
}
            

ReactDOM.render(
   <App />,
    document.getElementById('root')
);
