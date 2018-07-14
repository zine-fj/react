import React,{Component} from 'react'
import { NavBar, List, Stepper } from 'antd-mobile';
import {Link} from 'react-router'
import {connect} from "react-redux"
import cartStyle from './cart.css'

class Cart extends Component {
    state = {
        
    }
    componentDidMount() {
        fetch('loho88/cart/list/all',{
            credentials: 'include'
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            // 判断有数据的时候再派发，把数据保存到 store
            if(data.cart.gcpList) {
                this.props.dispatch({
                    type: 'CART_DATA',
                    payload:{
                        cartData: data.cart.gcpList
                    }
                })
            }
           
        })
    }
    render() {
        const {cartData} = this.props
        if(!cartData.length) {
            return <div>
                <NavBar mode="dark">购物车</NavBar>
                购物车空空如也，
                去<Link to='/'>首页</Link>挑选
                </div>
        }
        return (
            <div id="cart-page">
                 <NavBar mode="dark">购物车</NavBar>
                 <div className={cartStyle.content}>
                    <ul className={cartStyle["cart-list"]}>
                        {
                            cartData.map((ele,index)=>{
                                return <li key={index}>
                                            <div>
                                                <input type="checkbox"/>
                                                <em>$999</em>
                                            </div>
                                            <ul>
                                                {
                                                    ele.itemList[0].goodsList.map((pro,proIndex)=>{
                                                        return <li className={cartStyle['pro-item']}>
                                                            {/* http://image.loho88.com/images/201804/G_1523926905128850364.jpg
                                                                                        images/201804/G_1523926905128850364.jpg */}
                                                            <img className={cartStyle['item-pic']} src={'http://image.loho88.com/'+JSON.parse(pro.goodsAttr).goodsThumb} alt=""/>
                                                            <div className={cartStyle['item-info']}>
                                                                <p>{pro.goodsName}</p>
                                                                {pro.goodsColor?<p>颜色：{pro.goodsColor}</p>:''}
                                                                {pro.goodsType==30211?<p>验光单</p>:''}
                                                                <p>{pro.salesPrice}</p>
                                                            </div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                            <div className={cartStyle['item-ctrl']}>
                                                <a href="javascript:;">删除</a>
                                                <div>加减</div>
                                            </div>
                                        </li>
                            })
                        }
                    </ul>

                    <div className={cartStyle['cart-ctrl']}>
                        <label>
                            <input type="checkbox"/>全选
                        </label>
                        <span>清空购物车</span>
                    </div>
                </div>
                <div className={cartStyle.footer}>
                    <span>合计金额<em>$333</em></span>
                    <button className={cartStyle['cart-btn']}>结算</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        cartData:state.cartReducer.cartData
    }
}

export default connect(mapStateToProps)(Cart)