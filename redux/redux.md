## Redux
#### 背景：单纯使用react可能会遇到以下问题：  
* 列表到详情，列表组件销毁，数据丢失。(想要数据不丢失)
* 当页面逻辑变复杂的时候，组件会变得很臃肿难以维护
所以 Redux 出现了  
Redux是JavaScript状态容器，提供可预测化的状态管理(帮你管理数据)  
Redux 的设计思想很简单，就两句话。
* Web 应用是一个状态机，视图与状态是一一对应的。
* 所有的状态，保存在一个对象里面。  
参考链接：[阮一峰redux](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
#### 需要事先了解的概念
1. Store 保存数据的地方，可看成一个仓库，整个应用只能有一个Store
```shell
import { createStore } from 'redux';
const store = createStore(fn);
```
2. Dispatch 派发，发出
```shell
store.dispatch({
  type: 'ADD_TODO',
  payload: 'Learn Redux'
});
```
3. Subscribe 订阅，监听
4. getState 获取state
5. Action 事件行为
```shell
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};
```
6. Reducer 处理action，返回新的state
#### 安装使用
```shell
yarn add redux

# 在react项目中需要安装 react-redux
yarn add react-redux
```

## React-redux
#### 背景
redux是一个核心的库，提供了数据管理。  
但是在react中用redux比较麻烦，所以引用了 react-redux，让它更方便的操作数据  
#### 流程
1. 因为在全局页面都会用到 store，所以把 store全局放到 provider里面
2. 因为现在已经把数据放到store里面管理了，所以用 connect 链接组件和store
3. 可以写一个辅助函数把store里面的state 传递给组件的props，这样在组件里就可以使用this.props去传递属性，也可以使用this.props.dispathc({}) 派发了
#### 安装使用
```shell
yarn add react-redux

# 在index中
import {Provider} from 'react-redux'
<Provider store={store}>
  <Router>...</Router>
</Provider>

# 在单独页面index中
import {connect} from 'react-redux'
```

## 其他
1. 纯函数
```shell
function fn(a) {
    # return a+20  纯函数，因为输出都一样
    # return a+20*Math.random()  不是纯函数，因为输出都不一样
}
console.log(fn(10))
console.log(fn(10))
console.log(fn(10))
console.log(fn(10))
```
2. 在谷歌商店安装redux插件后，查看redux
```shell
# 需要在定义的库里面添加window...
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```


