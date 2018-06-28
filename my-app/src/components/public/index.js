import React,{Component} from 'react';
import "./public.css"
import {Link } from "react-router"

class Header extends Component {
    render() {
        return (
            <div className="header">
              <ul>
                  <li className="header-btn">
                      <a href="javascript:window.history.go(-1);">{"<"}</a>
                  </li>
                  <li className="header-tit">{this.props.children}</li>
                  <li className="header-btn"></li>
              </ul>
          </div>
        )
    }
}

// 普通的构造函数  (纯组件，视图组件 ：只管渲染页面，没办法接受数据，例如不能放置state)
function Content(props) { 
    return <div className='content'>{props.children},{props.tit}</div>
}

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <ul>
                    <li><a href="#/">首页</a></li>
                    <li><a href="#/list">列表</a></li>
                    <li><Link to="/cart" activeClassName="active">购物车</Link></li>
                    <li><a href="">我的</a></li>
                    <li><a href="">更多</a></li>
                </ul>
            </div>
        )
    }
}

// module.exports = Header
// export default Header // 默认暴露一个

export {Header,Content,Footer}