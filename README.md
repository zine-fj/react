# react
该项目为学习react的项目。
分为两个文件夹，一个是 demo 基础，一个是 my-react 通过脚手架生成的。

## demo
### 目录结构
```js
.
├── build // 存放 react所用的js
│   ├── babel.min.js // 转义
│   ├── jquery.min.js // jq
│   ├── prop-types.js // 父子传值所用的prop
│   ├── react-dom.development.js // 提供与 DOM 相关的功能
│   ├── react.development.js
│   ├── react.js // React 的核心库
├── fatherSon // 组件间传值
│   ├── brother.html // 兄弟间
│   ├── noMatter-EventBus.html // 没有关系的组件，EventBus高级用法
│   ├── noMatter.html // 没有关系的组件，EventBus简单用法
│   ├── son.html // 子组件改变父组件
├── listDemo
│   ├── home.html // 首页
│   ├── listPage.html // 列表，实现tab点击
├── login // 登录相关
│   ├── login.html
│   ├── ...
├── mock
│   ├── classList.json // 分类列表
│   ├── floor-data.json // 楼层数据
│   ├── proList.json // 商品列表
├── 1-map.html // react 案例
├── ...
├── 10-ajax.html
```

### 组件之间传值
#### 父组件控制子组件
通过props传递数据
#### 子组件改变父组件的state              
调用父组件的方法 `this.props.changeNumber` (需要父组件给子组件传递方法)
#### 兄弟组件通信                        
中间人模式（子组件1 改 父组件，父组件 改 子组件2）
#### 无关系组件                          
触发 `emit("changeNumber",100)`   
监听 `on("changeNumber",function(newNum){})`

## my-react
详见 my-react 中的 README.md

## 注意
1. 最好使用函数式編程。