// 轮播图，获取详细数据
import React, { Component } from "react"
import { Header, Content, Footer } from "../../components/public"
import fetchJsonp from 'fetch-jsonp'

// 依赖引入
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

class DetailPage extends Component {
    state = {
        detailData: {}
    }
    render() {
        const { detailData } = this.state
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
                        {/* 如果需要滚动条 */}
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

        fetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=' + id).then
        (res => res.json()).then(data => {
            console.log(data)
            this.setState({
                detailData: data[0]
            })
        })
    }
    componentDidUpdate() {
        // 等获取到数据，组件更新完成后，创建swiper
        // 页面加载完成，需要创建swiper
        // 因为更新可能会多次触发，所以要判断，如果swiper已经存在，就不需要再创建
        if(!this.swiper) {
            this.swiper = new Swiper(".swiper-container",{
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        }
        
    }
}

export default DetailPage