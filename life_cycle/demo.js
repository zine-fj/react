let Header = React.createClass({
    // 创建时候就会设置默认的数据
    getDefaultProps() {
        console.log('getDefaultProprs')
        return {
            tit: "首页"
        }
    },
    // 状态在组件运行的时候才会有
    getInitialState() {
        console.log('getInitialState')
        return {
            fixed: false
        }
    },
    render() {
        return (
            <div className="header">
                <p>{this.props.tit}</p>
            </div>
        )
    }
})
let Content = React.createClass({
    render() {
        return <div className="content">
            {this.props.children}
        </div>
    }
})
let Floor = React.createClass({
    render() {
        // const {data} = this.props;
        const data = this.props.data;
        return (
            <div>
                <h3>{data.title}</h3>
                <ul>
                    {
                        data.proData.map((ele,index)=>{
                            return <li>
                                <p>{ele.name}</p>
                                <p>{ele.price}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
})
let IndexPage = React.createClass({
    getInitialState() {
        // 先设置一个空的初始数据
        return {
            floorData:[]
        }
    },
    render() {
        // 获取保存在state里面的楼层数据
        const floorData = this.state.floorData;
        console.log('render,floorData:',floorData)
        return (
            <div>
                <Header />
                <Content>
                    <div>轮播图</div>
                    <div>
                        {
                            floorData.map((ele,index)=>{
                                return <Floor data={ele}/>
                            })
                        }
                    </div>
                </Content>
            </div>
        )
    },
    componentDidMount() {
        // 组件渲染完成 获取数据
        fetch("floor-data.json").then(res=>res.json()).then(data=>{
            console.log(data);
            // 获取到数据后，改变state
            this.setState({
                floorData:data
            })
        })
    }
})


ReactDOM.render(
    <IndexPage />,
    document.getElementById('root')
)