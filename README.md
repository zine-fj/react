# react学习总结
各文件夹下所包含的react内容：  
1. js: react所需js
2. basic: react的简介及基本案例
3. life_cycle： react的生命周期及调用外部数据如何操作
4. login: react的使用小技巧，表单页面(以登录为例)
5. props_state： props、state、不同组件之间通信
6. my-app：通过 ``create-react-app`` 搭建的脚手架，里面有基础页面src-basic、路由页面src-router、具体案例页面src(包括列表页、详情页、轮播图)。  
注意：文件名为 src 时，执行 ``yarn start``，项目才会开启  
7. redux： redux含义及简单应用，react-redux简单应用及具体案例
8. antd：antd-mobile引用


# 目前安装的模块依赖
```shell
react-router@3  # 路由  
import {Router,Route,hashHistory} from "react-router"

fetch-jsonp     # jsonp
import fetchJson from "fetch-jsonp"

redux           # 数据管理
import {createStore} from "redux"

react-redux     # react数据管理
import {Provider} from "react-redux"

redux-promise 

babel-plugin-import  # 按需加载样式

antd-mobile     # 支付宝控件
import { 按需引入 } from "antd-mobile"

qs              # 对象转换为字符串
import qs from "qs"

rc-form         # 列表页面

node-sass       # sass编译
sass-loader     # webpack中sass
node-less       # less编译
less-loader     # webpack中less
```
# Method 有四种方式
1. post：增，提交数据
2. delete：删，删除数据
3. put：改，修改数据
4. get：查，获取数据
