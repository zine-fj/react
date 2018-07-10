import React,{Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

class Home extends Component {
    state = {
        focus: [{},{},{}],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading

        fetch('loho88/index').then(res=>res.json()).then(data=>{
            console.log(data)
            this.setState({
                focus:data.result.focus
            })
        })
    }
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default Home