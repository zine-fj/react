import React,{Component} from "react"
import {Header,Content,Footer} from '../../components/public'
import ProList from '../../components/ProList'
import fetchJsonp from 'fetch-jsonp'
import './list-page.css'
import {connect} from 'react-redux'

class ClassList extends Component {
    render() {
        return (
            <ul className="class-list">
                {
                    this.props.classData.map((ele,index)=>(
                        <li key={index} onClick={()=>this.changeNum(ele.classID)}>{ele.className}</li>
                    ))
                }
            </ul>
        )
    }
}

class ListPage extends Component {
    render() {
        const {listData,classData} = this.props
        console.log(this.props)
        return (
            <div>
                <Header>商品</Header>
                <ClassList classData={classData}></ClassList>
                <Content>
                    <ProList listData={listData} />
                </Content>
                <Footer />
            </div>
        )
    }
    componentDidMount() {
      // 获取商品数据 (需要使用jsonp，可以用fetch-jsonp插件) http://datainfo.duapp.com/shopdata/getGoods.php?classID=2
      fetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php?classID=1').then(res=>res.json()).then(data=>{
        // 把数据给store进行管理
        // store里面的数据改变，connect自动把新数据再传递给组件
        this.props.dispatch({
            type:"PRO_LIST_DATA",
            payload:{
                listData:data
            }
        })
      })

      // 可以根据classID获取对应分类数据
        fetchJsonp("http://datainfo.duapp.com/shopdata/getGoods.php?classID="+classID).then(res=>res.json()).then(data=>{
            this.props.dispatch({
                type:"PRO_CLASS_DATA",
                payload:{
                    classData:data
                }
            })
        })
    }
}

// 需求：把store里面的state传递给组件，而且要监听store里面的state 

// 传递store的state给组件的props
function mapStateToProps(state) {
    // state：store中的state
    return {
        listData:state.listData,
        classData:state.classData,
        classID:state.classID
    }
}
// 通过connect使用 mapStateToProps 把数据传递给组件的props
export default connect(mapStateToProps)(ListPage)