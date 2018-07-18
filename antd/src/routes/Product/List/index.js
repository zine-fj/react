import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import './list.scss'

class List extends Component{
    render() {
        const {listData,activeIndex} = this.props
        return (
            <div id='list-page'>
                <NavBar>列表</NavBar>
                <div className='sub-header'>
                    <a href="javascript:;" 
                    onClick={()=>this.changeSort(0)} 
                    className={activeIndex==0?'active':''}
                    >综合</a>
                    <a href="javascript:;" 
                    onClick={()=>this.changeSort(1)} 
                    className={activeIndex==1?'active':''}
                    >销量</a>
                    <a href="javascript:;" 
                    onClick={()=>this.changeSort(2)}  
                    className={activeIndex==2?'selected price':'price'}
                    >价格</a>
                    {/* <a href="javascript:;">筛选</a> */}
                </div>
                <div className='content'>
                    <ul className='product-list'>
                        {
                            listData.map((ele,index)=>{
                                return <li key={ele.goodsId} className='product-item'>
                                    <Link to={'detail/'+ele.goodsId}>
                                        <img src={'http://image.loho88.com/'+ele.img} alt=""/>
                                        <p>{ele.title}</p>
                                        <p>销量：{ele.salesNum}</p>
                                        <p>价格：{ele.price}</p>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    getListData(sortKey) {
        fetch('loho88/search/?e=222&page=1&sort='+sortKey).then(res=>res.json()).then(data=>{
            console.log(data)
            this.props.dispatch({
                type: "PRO_LIST_DATA",
                payload: {
                    listData: data.result.data
                }
            })
        })
    }
    changeSort(index) {
        this.props.dispatch({
            type: "PRO_CHANGE_SORT",
            payload: {
                index
            }
        })
    }
    componentDidMount() {
        // 获取初始数据
        this.getListData(this.props.sortKey)
    }
    componentWillReceiveProps(newProps) {
        if(newProps.sortKey != this.props.sortKey) {
            // sortKey 改变
            this.getListData(newProps.sortKey)
        }
    }
}

const mapStateToProps = state=>{
    return {
        listData:state.productReducer.listData,
        activeIndex : state.productReducer.activeIndex,
        sortKey : state.productReducer.sortKey
    }
}

export default connect(mapStateToProps)(List)