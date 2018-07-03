import React,{Component} from "react"
import {Header,Content,Footer} from '../../components/public'
import ProList from '../../components/ProList'
import fetchJsonp from 'fetch-jsonp'
import './list-page.css'
import {connect} from 'react-redux'


class ListPage extends Component {
    render() {
        const {listData} = this.props
        console.log(this.props)
        return (
            <div>
                <Header>商品</Header>
                <Content>
                    <ProList listData={listData} />
                </Content>
                <Footer />
            </div>
        )
    }
}

// 需求：把store里面的state传递给组件，而且要监听store里面的state 

// 传递store的state给组件的props
function mapStateToProps(state) {
    // state：store中的state
    return {
        listData:state.listData
    }
}
// 通过connect使用 mapStateToProps 把数据传递给组件的props
export default connect(mapStateToProps)(ListPage)