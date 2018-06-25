var Events = {
    fn:{},
    //Events.on("changeNumber",cb)
    on:function(eventName,cb){
      console.log("事件监听")
      this.fn[eventName] = cb //this.fn.changeNumber = cb
      
    },
    //Events.emit("changeNumber",100)
    emit:function(eventName,params){
      console.log("事件触发")
      this.fn[eventName](params) //this.fn.changeNumber(100)   => cb(100)
    }
  }
  
  
  
  var Button =  React.createClass({
    changeNum(){
      //触发事件
      Events.emit("changeNumber",100)
    },
    render(){
      return (
        <div>
          <a 
           style={{ padding:"10px", border:"1px solid #ccc"}}
           href="javascript:;"
           onClick={this.changeNum}
           >{this.props.children}</a>
        </div>
      )
    }
  }) 
  var Cont =  React.createClass({
    getInitialState(){
      return {
        number:10000
      }
    },
    componentWillMount(){
      //监听事件
      Events.on("changeNumber",function(newNum){
        //改变自己的 number
        this.setState({
          number:newNum
        })
      }.bind(this))
    },
    render(){
      return <p>{this.state.number}</p>
    }
  })
  var Box = React.createClass({
  
    render(){
      console.log("render")
      return (
        <div>
          <Cont />
          <Button >按钮</Button>
        </div>
      )
    }
  })
  
  ReactDOM.render(<Box  />,document.getElementById("root"))