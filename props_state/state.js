let Box = React.createClass({
    getInitialState() {
        return {
            number:1
        }
    },
    increment() {
        console.log('increment')
        this.setState({
            number:this.state.number+1
        })
        
    },
    change() {
        this.setState({})
        // this.setState 无论数据是否改变，都会尝试调用render
    },
    render() {
        console.log('render')
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.increment}>按钮</button>
                <button onClick={this.change}>变</button>
            </div>
        )
    }
})

ReactDOM.render(
    <Box />,
    document.getElementById('root')
)