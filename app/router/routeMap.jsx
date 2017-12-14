import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Login from '../containers/Login'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Message from '../containers/Message'
import MessageType from '../containers/MessageType'
import Cart from '../containers/Cart'
import Category from '../containers/Category'
import Recommend from '../containers/Recommend'
import NotFound from '../containers/404'
import Column from '../containers/Column'
import Brand from '../containers/Brand'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/Login(/:router)' component={Login}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/brand/:id' component={Brand}/>
                    <Route path='/message/main' component={Message}/>
                    <Route path='/message/main/:name' component={MessageType}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/recommend' component={Recommend}/>
                    <Route path='/category' component={Category}/>
                    <Route path='/column/:name' component={Column}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
