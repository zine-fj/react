## Ant Design
#### 背景
Ant Design of React(antd)是 Ant Design 的 React 实现，开发和服务于企业级后台产品。 
浏览器支持：  现代浏览器和 IE9 及以上（ie8需要插件）  
antd-mobile (AlipayUI) 是蚂蚁金服针对 mobile 研发推出的一套基于 React 实现的 H5 组件库，是对外开放的一套支付宝 APP 开发标准，旨在帮助用户快速完成 H5 页面开发（前身是 AntUI ）。  
antd-mobile 支持h5和react-native两种模式，我们使用的是h5  

#### 安装使用
以antd-mobile为例
```shell
npm i antd-mobile --save

import {Button} from 'antd-mobile';
ReactDOM.render(<Button>按钮</Button>, mountNode);
```
无需单独引入样式，使用 babel-plugin-import 按需加载  
```shell
yarn add babel-plugin-import
```
然后在开发环境下的 ``webpack.config.dev.js`` 中，找到 ``cacheDirectory``，并在下面添加：
```shell
plugins:[['import', { libraryName: 'antd-mobile', style: 'css' }]]
```
#### 其他
1. 图片加载问题
```shell
# 在js文件中通过require引用(require(./1.png))
<img style={{width:'100%',height:'auto'}} src={require('../../assets/1.jpg')} alt=""/>
```
2. sass安装使用
```shell
yarn add node-sass
yarn add sass-loader

在webpack.config.dev.js中添加
{
    test: /\.scss$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        },
      },
      { loader: require.resolve('sass-loader') }
    ],
},
```

#### 开发环境(暴露配置项)
由于 create-react-app 为了“优雅”... ...隐藏了所有的webpack相关的配置文件，需要执行：
```shell
yarn run eject
```
**注意:**   
在 ``git`` 环境下，执行之前要确定你的代码已经提交(commit)了；否则会报错   
在非 ``git`` 环境下，执行 ``yarn start`` 后可能会报错：缺少模块 ``babel-loader``，此时安装该模块就好了

然后查看项目结构多了scripts和config目录，package.json也会有变化  

* config：项目配置文件：包含环境、路径、补丁、webpack的配置文件。主要维护webpack的两个配置文件
* scripts：npm的指令文件，可以在start.js里面设置 “数据代理”

## 跨域问题
在 ``package.json`` 最后一段中加入：
```shell
"proxy":{
  "/loho88": { # fetch 所请求的地址
    "target": "http://m.loho88.com",  # 会跨域的数据
    "changeOrigin": true,
    "pathRewrite": {"^/loho88" : ""}  # 没用之后置空
  }
}
```



## reducers
(详见 store 文件夹)  
1. 创建各个页面所用到的reducer，放在reducers里，同时存放一个index.js文件用来管理其reducer，以cart.js为例
```shell
const reducer = (state={cartData:[1]},action) => {
    switch(action.type) {
        case 'ss':
            return state
        default:
            return state
    }
}

export default reducer
```
2. 在index.js文件(reducers文件中)中 管理所有reducer
```shell
import cartReducer from './cart'
import listReducer from './product'

export {listReducer,cartReducer}
```
3. 在reducers文件夹外还有一个index.js用来合并、暴露reducers
```shell
import {createStore,combineReducers} from 'redux'
import * as reducers from './reducers'

const myReducer = combineReducers(reducers); // 合并 reducer
const store = createStore(myReducer)

export default store
```
4. 在所用页面引入
```shell
import {connect} from "react-redux"

const mapStateToProps = (state)=>{
    return {
        cartData:state.cartReducer.cartData
    }
}

export default connect(mapStateToProps)(Cart)
```

## 注意   
1. 当所存储的为一对象时
```shell
this.setState({
  datas:{
    floorData:[{},{},{}]
    }
})
```

```shell
const {floorData} = this.state.datas

# 默认数据里面如果没有floorData，不执行循环(以下代码判断是否为真)
floorData && floorData.map((ele,index)=>())
```

2. 让页面携带 cookie
```shell
fetch('',{
  method:'post',
  credentials: 'include'
})
```
3. 设置自身cookie为别人网站cookie
* 在他人网站调试页面打印 ``document.cookie``，将内容复制
* 在自己网站调试页面执行
```shell
function setCookie(str) {
	var arr = str.split("; ");
	arr.forEach(function(element) {
		document.cookie = element
	});
}

setCookie(复制的内容)
```
* 在自己网站调试页面就能看到和他人网站一样的 cookie信息

4. css模块化(css私有化)
因为已经把css变成编码了，变成了唯一的一份样式
* 在 ``webpack.config.dev.js`` .css 中，添加：
```shell
options: {
    #  开启css模块化
    modules:true,

    importLoaders: 1,
},
```
* 在所要使用的页面添加：
```shell
import oStyle from './floor.css'

className={oStyle.tit}
```
建议：用 ``sass`` 写主要的全部的样式，部分页面尝试用 ``css模块化`` 构建。  
注：目前有一个问题是 引入css模块化后，antd-mobile的样式就失效了，还不知道怎么解决？！！！



