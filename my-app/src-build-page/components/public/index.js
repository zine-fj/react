import React,{Component} from "react"
import "./public.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                <li className="header-btn">
                    <a href="javascript:window.history.go(-1);">{"<"}</a>
                </li>
                <li className="header-tit">{this.props.children}</li>
                <li className="header-btn">
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
                    <li><a href="#/">我的</a></li>
                    <li><a href="#/">更多</a></li>
                </ul>
            </div>
        )
    }
}

function Content(props) {
    return <div className="content">{props.children},{props.tit}</div>
}

export {Header,Content,Footer}