import React,{Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'

class List extends Component{
    render() {
        const {listData} = this.props
        return (
            <div id='list-page'>
                <NavBar>列表</NavBar>
                <div className='sub-header'>
                    <a href="javascript:;">综合</a>
                    <a href="javascript:;">销量</a>
                    <a href="javascript:;" className='price'>价格</a>
                    <a href="javascript:;">筛选</a>
                </div>
                <div className='content'>
                    <ul className='product-list'>
                        {
                            listData.map((ele,index)=>{
                                return <li key={ele.goodsId} className='product-item'>
                                    <Link to={'detail/'+ele.goodsId}>
                                        <img src={'http://image.loho88.com/'+ele.img} alt=""/>
                                        <p>{ele.title}</p>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {
        listData:state.productReducer.listData
    }
}

export default connect(mapStateToProps)(List)