import React,{Component} from "react"
import {Header,Content,Footer} from '../../components/public'
import ProList from '../../components/ProList'
import fetchJsonp from 'fetch-jsonp'
import './list-page.css'

class ClassList extends Component {
    changeNum(id) {
        console.log(id)
        this.props.getProData(id)
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
    state = {
        classData:[],
        listData:[]
    }
    constructor() {
        super()
        // 问题：this.setState not a function => es6里面，自定义函数的this可能会发生改变

        // 方案一 在constructor 提前把this绑定好
        // this.getProData = this.getProData.bind(this)
    }
    render() {
        const {classData,listData} = this.state
        return (
            <div>
                <Header>商品</Header>
                {/* 方案二 在给子组件传递的时候，绑定this */}
                <ClassList classData={classData} getProData={this.getProData.bind(this)}></ClassList>
                {/* 箭头函数的解决办法
                <ClassList classData={classData} getProData={(id)=>this.getProData(id)}></ClassList>
                 */}
                <Content tit="小尾巴">
                <ProList listData={listData} />
                </Content>
                <Footer />
            </div>
        )
    }
    getProData(classID) {
    // 可以根据classID获取对应分类数据
    fetchJsonp("http://datainfo.duapp.com/shopdata/getGoods.php?classID="+classID).then(res=>res.json()).then(data=>{
        this.setState({
            listData:data
            })
        })
    }
    componentDidMount() {
        // 获取分类数据 http://datainfo.duapp.com/shopdata/getclass.php
      fetch('http://datainfo.duapp.com/shopdata/getclass.php').then(res=>res.json()).then(data=>{
        this.setState({
          classData:data
        })
      })

      // 获取商品数据 (需要使用jsonp，可以用fetch-jsonp插件) http://datainfo.duapp.com/shopdata/getGoods.php?classID=2
      fetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php?classID=1').then(res=>res.json()).then(data=>{
        this.setState({
          listData:data
        })
      })
    }
}

export default ListPage