import React,{Component} from "react"
import "./public.css"

class Header extends Component {
  render(){
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
  render(){
    return (
      <div className="footer">
        <ul>
          <li><a>首页</a></li>
          <li><a>列表</a></li>
          <li><a>购物车</a></li>
          <li><a>我的</a></li>
          <li><a>更多</a></li>
        </ul>
      </div>
    )
  }
}

// class Content extends Component {
//   render () {
//     return <div className="content">{this.props.children}</div>
//   }
// }
// const Content = props=><div className="content">{props.children}</div>

function Content(props){//普通的构造函数  (纯组件，视图组件)
  return <div className="content">{props.children} ,{props.tit}</div>
}





// module.exports = Header
export { Header, Content,Footer }
