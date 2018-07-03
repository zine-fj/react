import React,{Component} from "react"
import {Header,Content,Footer} from '../components/public'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header hasBack={false} rightCont={<a>消息</a>}>首页</Header>
                <Content>
                    首页内容
                </Content>
                <Footer />
            </div>
        )
    }
}

export default HomePage