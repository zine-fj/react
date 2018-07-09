// 轮播图，获取详细数据
import React, { Component } from "react"
import { Header, Content, Footer } from "../../components/public"
import fetchJsonp from 'fetch-jsonp'

// 依赖引入
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

import {connect} from "react-redux"

class DetailPage extends Component {
    render() {
        const { detailData } = this.props
        let goodsBenUrl = JSON.parse(detailData.goodsBenUrl || "[]")
        return (
            <div className="detail">
                <Header rightCont={<a>分享</a>}>详情页</Header>
                <Content>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                goodsBenUrl.map((ele, index) => {
                                    return <div key={index} className="swiper-slide">
                                        <img style={{width:"100%"}} src={ele}/>
                                    </div>
                                })
                            }
                           
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    {detailData.detail}
                </Content>
                <Footer />
            </div>
        )
    }
    componentDidMount() {
        // console.log(window.location.hash)
        console.log(this.props.params.goodsID)
        // console.log(this.props.location.query) // 获取(search)?传递的参数
        var id = this.props.params.goodsID
        this.props.getDetailData(id)
    }   
    componentDidUpdate() {
        if(!this.swiper && this.props.detailData.goodsBenUrl) {
            this.swiper = new Swiper(".swiper-container",{
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
        
    }
}

function mapStateToProps(state) {
    // 把store里面的state.detailData获取过来
    return {
        detailData:state.detailData
    }
}

// 想要修改 store 数据的方法 传递 到组件的props
function mapDispatchToProps(dispatch) {
    return {
        getDetailData(id) {
            fetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=' + id).then
            (res => res.json()).then(data => {
                console.log(data)
                dispatch({
                    type:"PRO_DETAIL_DATA",
                    payload:{
                        detailData:data[0]
                    }
                })
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailPage)