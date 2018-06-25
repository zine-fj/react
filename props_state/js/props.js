let Button = React.createClass({
    render() {
        return (
            <div>
                <a 
                style={{padding:"10px",border:"1px solid #ccc"}} 
                href="javascript:;"
                onClick={this.props.changeNumber}
                >{this.props.children}</a>
            </div> 
        )
    }
})

let Box = React.createClass({
    getInitialState() {
        return {
            number:1
        }
    },
    increment() {
        this.setState({
            number:this.state.number+1
        })
    },
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <Button changeNumber={this.increment}>按钮</Button>
            </div>
        )
    }
})

// Button组件想要改变Box组件的number
// Box组件 有一个increment方法
// 把increment方法绑定到Button的 changeNumber 属性上
// 在Button里面 调用 changeNumber 属性
ReactDOM.render(
    <Box />,
    document.getElementById('root')
)