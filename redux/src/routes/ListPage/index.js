import React,{Component} from "react"
import {Header,Content,Footer} from '../../components/public'
import ProList from '../../components/ProList'
import fetchJsonp from 'fetch-jsonp'
import './list-page.css'
import {connect} from 'react-redux'

class ClassList extends Component {
    changeNum(id) {
        console.log(id)
        this.props.dispatch({
            type:"CHANGE_CLASS_ID",
            payload:{
                classID:id
            }
        })
    }
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
        const {listData,classData,dispatch} = this.props
        return (
            <div>
                <Header>商品</Header>
                <ClassList classData={classData} dispatch={dispatch}></ClassList>
                <Content>
                    <ProList listData={listData} />
                </Content>
                <Footer />
            </div>
        )
    }
    getProData(id) {
        // 获取商品数据 (需要使用jsonp，可以用fetch-jsonp插件) http://datainfo.duapp.com/shopdata/getGoods.php?classID=2
        fetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php?classID='+id).then(res=>res.json()).then(data=>{
            // 把数据给store进行管理
            // store里面的数据改变，connect自动把新数据再传递给组件
            this.props.dispatch({
                type:"PRO_LIST_DATA",
                payload:{
                    listData:data
                }
            })
        })
    }
    componentDidMount() {
        // 判断store里面与没有数据，没有的话再获取，有的话就不用
        if(this.props.listData.length) {
            return 
        }
        // 获取商品数据
        this.getProData(this.props.classID)
        //获取分类数据
        fetch("http://datainfo.duapp.com/shopdata/getclass.php").then(res=>res.json()).then(data=>{
            this.props.dispatch({
            type:"PRO_CLASS_DATA",
            payload:{
                classData:data
                }
            })
        })
    }
    // 当组件收到新的props的时候触发
    componentWillReceiveProps(newProps) {
        if(newProps.classID != this.props.classID) {
            // classID 改变了
            // 获取数据
            this.getProData(newProps.classID)
        }
    }
}

// 需求：把store里面的state传递给组件，而且要监听store里面的state 

// 传递store的state给组件的props
function mapStateToProps(state) {
    // state：store中的state
    return {
        listData:state.listData,
        classID:state.classID,
        classData:state.classData
    }
}

// 通过connect使用 mapStateToProps 把数据传递给组件的props
export default connect(mapStateToProps)(ListPage)