# react
react学习


### 组件之间传值
- 父组件控制子组件
通过props传递数据
- 子组件改变父组件的state              
调用父组件的方法 `this.props.changeNumber` (需要父组件给子组件传递方法)
- 兄弟组件通信                        
中间人模式（子组件1 改 父组件，父组件 改 子组件2）
- 无关系组件                          
触发 `emit("changeNumber",100)`   
监听 `on("changeNumber",function(newNum){})`