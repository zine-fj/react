import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory,Router,Route} from "react-router"
import {Provider} from "react-redux"
import store from './store'

// routes
import Home from './routes/Home'
import Reg from './routes/User/Reg'

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path='/' component={Home}></Route>  
                    <Route path='/list' component={()=>'list'}></Route>  
                    <Route path='/reg' component={Reg}></Route>  
                </Router>
                
            </Provider>        
        </div>
    )
}
            

ReactDOM.render(
   <App />,
    document.getElementById('root')
);
