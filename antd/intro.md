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
**注意：**    
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




