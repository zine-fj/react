let Header = React.createClass({
  render() {
      return (
          <div className="header">
              <ul>
                  <li className="header-btn">
                      <a href="javascript:window.history.go(-1);">{"<"}</a>
                  </li>
                  <li className="header-tit">{this.props.children}</li>
                  <li className="header-btn">

                  </li>
              </ul>
          </div>
      )
  }
})

let Content = React.createClass({
  render() {
      return <div className="content">{this.props.children}</div>
  }
})

// 分类组件
let ClassList = React.createClass({
  changeClass(id) {
    console.log(id)
  },
  render() {
    return (
      <ul className="class-list">
        {
          this.props.classData.map((ele,index)=>{
            return <li onClicd={this.changeClass.bind(this,ele.classID)} key={index}>{ele.className}</li>
          })
        }
      </ul>
    )
  }
})

// 商品组件
let ProList = React.createClass({
  render() {
    return (
      <ul className="pro-list">
        {
          this.props.listData.map((ele,index)=>{
            return (
              <li key={index}>
                <img src={ele.goodsListImg} alt=""/>
                <p>{ele.goodsName}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
})

// 页面 顶层组件(管理数据)
var ListPage = React.createClass({
    getInitialState() {
      return {
        classData:[{className:"衬衫"}],
        listData:[{goodsName:"休闲衬衫"}]
      }
    },
    render(){
      const {listData,classData} = this.state;
      return (
        <div>
          <Header>商品列表</Header>
          {/* 把自己的数据传递给子组件 */}
          <ClassList classData={classData}/>
          <Content >
            <ProList listData={listData}/>
          </Content>
        </div>
      )
    },
    componentDidMount() {
      // 获取分类数据
      fetch('http://datainfo.duapp.com/shopdata/getclass.php').then(res=>res.json()).then(data=>{
        this.setState({
          classData:data
        })
      })

      // 获取商品数据 (需要使用jsonp，可以用fetch-jsonp插件)
      fetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php?classID=2').then(res=>res.json()).then(data=>{
        this.setState({
          listData:data
        })
      })

    }
})
  
  ReactDOM.render(<ListPage  />,document.getElementById("root"))