let List = React.createClass({
    propTypes:{
        listData:React.PropTypes.array,
        tit:React.PropTypes.string.isRequired
    },
    render() {
        return (
            <div>
                <ul>
                    <p>{this.props.tit}</p>
                    {
                        this.props.listData.map((ele,index)=>{
                            return <li key={index}>{ele}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
})

ReactDOM.render(
    <List listData={[1,2,3]} tit={'list'}/>,
    document.getElementById('root')
)