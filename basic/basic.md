## react
React是一个用于构建用户界面的JavaScript库。  

React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。    

由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。  
这个项目本身也越滚越大，从最早的UI引擎变成了一整套前后端通吃的 Web App 解决方案。衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一次 UI ，就能同时运行在服务器、浏览器和手机。
##### 特点
1. 虚拟dom  
开发时不需要在页面中写任何dom元素，    
缺陷：首次渲染大量DOM时因为多了一层虚拟DOM的计算，会比innerHTML插入方式慢，所以使用时尽量不要一次性渲染大量DOM。
2. jsx语法  
写页面时使用JavaScript xml格式的语法，  
必须有根节点；单标签必须闭合；class => className。
3. 组件化开发  
组成页面结构的部件，react最核心的思想是将页面中任何一个区域或者元素都看成是一个组件Component，      
组件和模块区别：组件要有页面结构；模块不一定需要，模块主要强调功能。  
##### 组件化实例
``` shell
    let Header = React.createClass({
        render() {
            return (
                <div></div>
            )
        }
    })
    let Content = React.createClass({
        render() {
            return (
                <div className='content'>
                    <span>{this.props.tit}</span>
                    {this.props.children}
                </div>
            )
        }
    })
    ...

    ReactDOM.render(
        <Header />
        <content tit='内容'>
            <div></div>
            <list />
        </content>
        <Footer />
    )
```
##### 注意：
1. 需要引入三个js文件
``` shell
    react.js 是 React 的核心库，
    react-dom.js 是提供与 DOM 相关的功能，
    Browser.js 的作用是将 JSX 语法转为 JavaScript，es6转换成es5语法
```
2. 类名应该使用className(react中命名规范都是驼峰)
3. 遇到 HTML 标签(以 < 开头)，就用 HTML 规则解析；遇到代码块(以 { 开头)，就用 JavaScript 规则解析
4. 数据流(props、state)，一旦发生改变，组件就会重新渲染
5. props: 可以给组件传递数据 
调用时被调用者设置，值设置一次，一般没额外变化；可以把任意类型的数据传递给组件，尽可能把props当数据源，不要在组件内部设置props
``` shell
    this.props.children 是组件的子节点属性
    this.props.xxx 是组件标签添加的自定义属性 
```
5. state: 用来确定组件的状态，不同状态代表不同视图
可以通过状态控制组件内容隐藏显示，可以通过事件去修改状态，状态改变=>视图自动更新
6. 注意下面写法通用
``` shell
    handleClick:function() {}

    ===>

    # es6写法
    handleClick() {}
```
7. 注意下面写法不能更改
1、getInitialState：设置初始状态  
2、setState：设置状态  
3、handleClick：点击  