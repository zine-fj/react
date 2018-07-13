import React,{Component} from 'react'
import { Carousel, NavBar } from 'antd-mobile';

class Home extends Component {
    state = {
        focus: [{},{},{}],
        datas:{},
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        fetch('loho88/index').then(res=>res.json()).then(data=>{
            console.log(data)
            this.setState({
                focus:data.result.focus,
                datas:{
                    floorData:[
                        {
                            tit:"热卖",
                            pros:[
                                {name:"商品1",price:200},{name:"商品2",price:300}
                            ]
                        },
                        {
                            tit:"团购",
                            pros:[
                                {name:"商品1",price:200},{name:"商品2",price:300}
                            ]
                        },
                        {
                            tit:"其他",
                            pros:[
                                {name:"商品1",price:200},{name:"商品2",price:300}
                            ]
                        }
                    ]
                }
            })
        })
    }
    render() {
        const {floorData} = this.state.datas
        return (
            <div className="home-page">
                 <NavBar mode="dark">NavBar</NavBar>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.focus.map(val => (
                        <a
                        key={val}
                        href={val.url}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.pic}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                    <img style={{width:'100%',height:'auto'}} src={require('../../assets/1.jpg')} alt=""/>
                    
                    {/* 图标 */}
                    <p>
                        <span className='iconfont icon-rectangle390'></span>
                        我是图标
                    </p>

                    {/* 楼层 */}
                    <div>
                        {
                            // 默认数据里面如果没有floorData，不执行循环
                            floorData && floorData.map((ele,index)=>(
                                <div key={index}>
                                    <h3>{ele.tit}</h3>
                                    <ul>
                                        {
                                            ele.pros.map((pro,i)=>(
                                                <li key={i}>
                                                    <p>{pro.name}</p>
                                                    <p>{pro.price}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
            </div>
        )
    }
}

export default Home