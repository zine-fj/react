## props (传递数据)
1. 简介
props(properties特性)：在调用时候被调用者设置的，只设置一次，一般没有额外变化，**在组件内部把props当做只读的**  
可以把任意类型的数据传递给组件，尽可能的把props当做数据源，不要再组件内部设置props，0.15.x版本已经废弃了setProps的方法  

2. PropTypes
组件的属性类型需要进行声明和验证，否则会有很多问题，React已经提供了一套简单好用的属性校验机制：  
``PropTypes``：属性校验工具，当使用者传入参数不满足校验规则时，React会给出详细的警告。  
注：需要引入 react-with-addons.js

3. PropTypes用法
校验类型包括基本类型、数组、对象、实例、枚举。如果属性是必须的，在类型后面加上 ``isRequired``  
作用：使用组件的时候可以明确需要传入的数据
```shell
let Test = React.createClass({
    propTypes:{
        num:React.PropTypes.number,
        str:React.PropTypes.string.isRequired
    },
    render() {
        return <div>{this.props.num}asdasds{this.props.str}</div>
    }
});
ReactDOM.render(
    <Test num="1" />,
    document.body
)
```

## state (保存数据)
state(状态)：在组件内部可以重复设置其值，可以随意改变  
state 用来确定组件的状态，不同状态可以展示不同视图  
```shell
# 状态初始化
getInitialState() {
    return {
        checked:false
    }
},

# 通过setState方法设置state
this.setState({
    checked:!this.state.checked
})

```
注：**只要调用 ``setState`` 视图就能 更新**

## 组件之间特殊通信
在React中，UI以组件的形式来搭建，组件之间可以嵌套组合。另：React中组件间通信的 **数据流是单向** 的，  
顶层组件可以通过 props 属性向下层组件传递数据，  
下层组件不能向上层组件传递数据，兄弟组件之间同样不能。  
这样简单的 **单向数据流** 支撑起了React中的数据可控性。  

但是在开发中可能会有一些特殊需求，需要子组件控制父组件的状态，或者无关系组件之间的通信。那么，更全面的组件间通信形式该如何实现？  
(子父组件，兄弟组件，无关系组件)

1. 子父组件(代码查看props.js)
思路：    
1、子组件Button想要改变 父组件Box的number  
2、父组件Box 有一个increment方法  
3、把increment方法绑定到 子组件的 changeNumber(名字可随意) 属性上  
4、在子组件Button里面 调用子组件的 changeNumber 属性  

2. 兄弟组件(代码查看props1.js)
思路：  
和子父组件差不多，只不过把父组件当做一个 '中间人'，  
所以又叫做：**中间人模式**

3. 无关系组件 
思路：  
方法一：  
**观察者模式**，观察 即 监听    
global event bus：全局事件总线  
方法二：  
通过其他框架实现，  
Flux : Fackbook 提出的管理React数据流的框架。Flux 不像一个框架，更像是一种组织代码的推荐思想。就像 "引导数据流流向的导流管"。其他的"导流管"：ReFlux，Redux等。