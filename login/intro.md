## react的小技巧
1. 样式设置
```shell
let styleObj = {color:'red'}

oDiv.style = styleObj
<div className="" style={styleObj}></div>
```
2. 逻辑判断语句：? :
3. 循环嵌套，this的传递(包括传参)
```shell
# ES5语法
fetch('').then(res=>res.json()).then(function(data){

}.bind(this))

# ES6语法
fetch('').then(res=>res.json()).then(data=>{

})
```
4. 最好问数组中的元素提供唯一的 key 属性
5. 通过 this.refs 获取设置了 ref 属性的真实 DOM 节点(componentDidMount)
```shell
<div ref="banner" id="banner">轮播图</div>

# 效果是一样的，但前者是获取dom节点，后者是通过组件属性使用dom节点，所以后者的性能更好
document.getElementById("banner").style.height = "200px"
this.refs["banner"].style.height = "200px"
```
6. 通过改变组件的状态，来改变组件的形态，不要去改变组件的props
7. 设置state，this.setState({stateName:stateVal})

注意：数据流是从大组件向小组件流通的

## react表单
1. 表单元素交换规则
```shell
# 受限组件(如果用之前的value=""，则会输入不进去)
render:() {
    return <input type="text" value="" />
}

# 不受限组件(当username是state时，可以动态的改变value值)
render:() {
    return <input type="text" value={username}/>
}

# 默认属性支持
defaultChecked，defaultValue
render:() {
    return (
        <div>
            <input type="checkbox" defaultChecked={true} />;
            <input type="text" defaultValue="请输入..." />;
        </div>
    )
}
```
2. value，用于<input>、<textarea>、<select>组件
3. checked，用于类型为checkbox或者radio的<input>组件
4. selected，用于<option>组件
注意：都可通过 onChange 回调函数来监听组件变化
5. 通过 event.target 获取目标元素 event.target.value 是目标元素的 value 值
6. 中文正则：[\u4e00-\u9fa5]
```shell
# 过滤
let val = ev.target.value.replace(/[\u4e00-\u9fa5]/g,""); 
# 给密码赋值为 过滤后的内容
ev.target.value = val 
```
注意：   
1、react是尽量避免进行DOM操作的，主要操作数据、状态...，状态改变，视图自动更新   
2、通过state保存数据，通过props传递数据  
