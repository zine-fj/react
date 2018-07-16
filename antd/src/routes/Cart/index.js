import React,{Component} from 'react'
import { NavBar, List, Stepper } from 'antd-mobile';
import {Link} from 'react-router'
import {connect} from "react-redux"
import cartStyle from './cart.css'

class Cart extends Component {
    state = {
        
    }
    getCartData() {
        fetch('loho88/cart/list/all',{
            credentials: 'include'
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            // 判断有数据的时候再派发，把数据保存到 store
            this.props.dispatch({
                type: 'CART_DATA',
                payload:{
                    cartData: data.cart.gcpList || []
                }
            })
        })
    }
    componentDidMount() {
        this.getCartData()
    }
    render() {
        const {cartData,allSelected} = this.props
        if(!cartData.length) {
            return <div>
                <NavBar mode="dark">购物车</NavBar>
                购物车空空如也，
                去<Link to='/'>首页</Link>挑选
                </div>
        }
        var totalPrice = 0;
        cartData.forEach((ele,index)=>{
            if(ele.isSelected) {
                // 如果当前商品被选中，再计算金额
                totalPrice += ele.itemList[0].subtotal
            }
        })
        return (
            <div id="cart-page">
                 <NavBar mode="dark">购物车</NavBar>
                 <div className='content'>
                    <ul className="cart-list">
                        {
                            cartData.map((ele,index)=>{
                                let id = ele.itemList[0].id;
                                return <li key={index} className='cart-item'>
                                            <div>
                                                <input type="checkbox" checked={ele.isSelected} onChange={(ev)=>this.ItemChange(ev,id)}/>
                                                <em>$999</em>
                                            </div>
                                            <ul>
                                                {
                                                    ele.itemList[0].goodsList.map((pro,proIndex)=>{
                                                        return <li className='pro-item' key={proIndex}>
                                                            {/* http://image.loho88.com/images/201804/G_1523926905128850364.jpg
                                                                                        images/201804/G_1523926905128850364.jpg */}
                                                            <img className='item-pic' src={'http://image.loho88.com/'+JSON.parse(pro.goodsAttr).goodsThumb} alt=""/>
                                                            <div className='item-info'>
                                                                <p>{pro.goodsName}</p>
                                                                {pro.goodsColor?<p>颜色：{pro.goodsColor}</p>:''}
                                                                {pro.goodsType==30211?<p>验光单</p>:''}
                                                                <p>{pro.salesPrice}</p>
                                                            </div>
                                                        </li>
                                                    })
                                                }
                                            </ul>
                                            <div className='item-ctrl'>
                                                <a href="javascript:;" onClick={()=>this.itemDel(id)}>删除</a>
                                                <div>
                                                    <Stepper
                                                    style={{ width: '40%', minWidth: '100px' }}
                                                    showNumber
                                                    max={10}
                                                    min={1}
                                                    value={ele.itemList[0].number}
                                                    onChange={(number)=>this.changeNum(id,number)}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                            })
                        }
                    </ul>

                    <div className='cart-ctrl'>
                        <label>
                            <input type="checkbox" checked={allSelected} onChange={(ev)=>this.allChange(ev)}/>全选
                        </label>
                        <span>清空购物车</span>
                    </div>
                </div>
                <div className='footer'>
                    <span>合计金额<em>${totalPrice}</em></span>
                    <button className='cart-btn'>结算</button>
                </div>
            </div>
        )
    }

    // 单选
    ItemChange(ev,id) {
        // 发起数据请求，修改 选中状态
        console.log(ev.target.checked);
        if(ev.target.checked) {
            console.log(id,"选中")
            var status = 'selectedOne'
        } else {
            var status = 'unSelectedOne'
            console.log(id,"不选中")
        }
        let url = `loho88/cart/${status}/${id}`
        fetch(url,{
            method:'put',
            credentials: 'include'
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            if(data.status == 1) {
                this.getCartData()
            }
        })
    }
    // 全选
    allChange(ev) {
        // 全选和反选
        if(ev.target.checked) {
            var status = 'SelectedAll'
        } else {
            var status = 'unSelectedAll'
            
        }
        let url = `loho88/cart/${status}/`
        fetch(url,{
            method:'put',
            credentials: 'include'
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            if(data.status == 1) {
                this.getCartData()
            }
        })
    }
    // 删除
    itemDel(id) {
        let url = `loho88/cart/item/${id}`
        fetch(url,{
            method:'delete',
            credentials: 'include'
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            if(data.status == 1) {
                this.getCartData()
            }
        })
    }
    // 按钮添加减少
    changeNum(id,number) {
        let url = `loho88/m-loho88/cart/item/${id}/${number}`
        fetch(url,{
            method:'put',
            credentials: 'include'
        }).then(res=>res.json()).then(data=>{
            console.log(data)
            if(data.status == 1) {
                this.getCartData()
            }
        })
    }
}

const mapStateToProps = (state)=>{
    return {
        allSelected:state.cartReducer.allSelected,
        cartData:state.cartReducer.cartData
    }
}

export default connect(mapStateToProps)(Cart)