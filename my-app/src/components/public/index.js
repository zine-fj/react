import React,{Component} from "react"
import "./public.css"

class Header extends Component {
    // 需要设置默认数据
    static defaultProps = { // es7 静态属性
        hasBack:true // 默认有返回按钮
    }
    render() {
        // 接收参数
        const {hasBack,rightCont} = this.props
        return (
            <div className="header">
                <ul>
                    <li className="header-btn">
                        {hasBack?<a href="javascript:window.history.go(-1);">{"<"}</a>:''}
                    </li>
                    <li className="header-tit">{this.props.children}</li>
                    <li className="header-btn">
                        {rightCont}
                    </li>
                </ul>
            </div>
        )
    }
}
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li><a href="#/">首页</a></li>
                    <li><a href="#/list">商品</a></li>
                    <li><a href="#/cart">购物车</a></li>
                    <li><a href="#/detail">详情</a></li>
                    <li><a href="#/login">登录</a></li>
                </ul>
            </div>
        )
    }
}

function Content(props) {
    return <div className="content">{props.children},{props.tit}</div>
}

export {Header,Content,Footer}