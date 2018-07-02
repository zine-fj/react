## 搭建react脚手架
```shell
cnpm i -g create-react-app
create-react-app my-app

cd my-app
npm start
```

## 过程
1. 在 ``src/index.js`` 中导入依赖，需要什么导入什么
(导入的 {Component}属于 react的属性，可以通过{}导入)
2. 可在 ``src`` 中创建组件，然后可以集体导入
* 创建的组件可以引入自身样式，这样在被调用时就不用担心样式问题
* 组件比较简单的时候可以写成一个函数
* 组件写好之后可以集体暴露出来
``` shell
# 导入写法
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

# 导入css (现在所有资源都可以像 模块 一样被导入，参照 webpack)
import "./public.css"

#  索引的文件不用加文件名
import {Header,Content,Footer} from "./components/public"

# 暴露写法
#   默认暴露一个
    module.exports = Header
    export default Header
# 暴露多个
export {Header,Content,Footer}
```
3. 引用公共组件后可以写不同的组件，然后需要谁就渲染谁
4. 注意写法为 ES6 写法
``` shell
class Content extends Component {
    render() {
        return <div className='content'>{this.props.children}</div>
    }
}

# 所以现在是：写一个函数，就相当于之前的组件功能了(react提供的一种快捷模式)

# 创建一个常量，首字母大写，也就是创建了一个类，而类就是一个函数
const Content = (props)=>{
    return <div className='content'>{props.children}</div>
}
# 简洁写法
const Content = props=><div className='content'>{props.children}</div>


# 普通的构造函数  (纯组件，视图组件 ：只管渲染页面，没办法接受数据，例如不能放置state)
function Content(props) { 
    return <div className='content'>{props.children},{props.tit}</div>
}
```

## 路由
1. 路由原理：通过 onhashchange 事件去监听 hash 值("#/list")改变，然后渲染hash值对应的组件(ListPage)  
```shell
window.onhashchange = function() {
    console.log(window.location.hash)
}
```
2. 安装
```shell
yarn add react-router@3
```
3. 代码
``` shell
import {Router,Route,hashHistory} from "react-router"

const App = () =>{
    return <Router history={hashHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/list" component={ListPage} />
        <Route path="/cart" component={CartPage} />
    </Router>
}
```
4. 解析
* Router 是路由的壳子，所有要用的路由管理页面都需要放在Router里面(Router里面只能放Route)。
* history 是对历史进行管理，一般使用 hashHistory
* Route 是路由要管理的页面；path 是路径 '/' 是默认路径；component 是当前路径使用的组件
* Link 跳转(activeClassName 设置选中样式)，实际上就是被封装的a标签
```shell
<Link to="/list" activeClassName="active">Link to list</link>
```

## 引入插件
就像之前说的，想引用谁，通过 包管理工具 ``npm``安装，然后引用就行了，比如引用 swiper  
1. 安装
```shell
# 注意：yarn 不行的话用 cnpm 试试
yarn add swiper
```
2. 引用
```shell
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
```
3. 根据api书写页面