## Redux
#### 背景：单纯使用react可能会遇到以下问题：  
* 列表到详情，列表组件销毁，数据丢失。(想要数据不丢失)
* 当页面逻辑变复杂的时候，组件会变得很臃肿难以维护
所以 Redux 出现了  
Redux是JavaScript状态容器，提供可预测化的状态管理(帮你管理数据)  
#### 需要事先了解的概念
1. Redux.createStore => store 可以创建store(仓库)
2. Dispatch 派发，发出
3. Subscribe 订阅，监听
4. getState 获取state
5. Action 事件行为
6. Reducer 处理action，返回新的state

