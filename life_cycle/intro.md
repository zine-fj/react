## 生命周期
含义：在正确的时候干正确的事。  
一个组件就是一个状态机：对于特定的输入，它总会返回一致的输出。  
React为每个组件提供了生命周期钩子函数去响应不同的时刻，  
组件的生命周期分为三个部分：  
1. 实例化
``` shell
    # 调用组件
    1、getDefaultProps 设置默认props(创建时候就会设置默认的数据)
    2、getInitialState 设置默认state,获取初始状态(状态在组件运行的时候才会有)
    3、componentWillMount 组件(第一次)即将调用render
    4、render 渲染
    5、componentDidMount 完成render,可以在这里获取到真实的dom
```
2. 存在期
``` shell
    # 组件props改变或调用setState，初期不需要掌握
    1、componentWillReceiveProps 当组件接收到新的props
    2、shouldComponentUpdate 判断是否需要重新渲染(可以实现组件更新的控制)
    3、componentWillUpdate 组件(重新渲染)即将调用render
    4、render 渲染
    5、componentDidUpdate 组件重新渲染完成
```
3. 销毁&清理期
``` shell
    1、componentWillUnmount 组件将被销毁的时候
```
钩子函数(Hook Function):  
钩子函数类似回调函数，可理解为钩子函数在事件执行前调用，而回调函数在事件执行后调用。

## 重要知识点
1. 默认的props
2. 楼层组件的抽离
3. fetch的用法
4. react里面获取服务器端的数据，怎么使用？
    1、先设置默认的空数据floorData    
    2、数据请求   
    3、完成后，改变floorData    
    4、floorData改变，视图会自动更新    
注意：react不在一个文件中书写时要在服务器环境中运行(因为babel的解析，ajax的调用，都需要在服务器环境中才能运行)
