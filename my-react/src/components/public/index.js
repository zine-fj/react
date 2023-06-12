import React, { Component } from "react";
import "./public.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  const clickRight = () => {
    navigate(props.rightUrl)
  };

  const clickBack = () => {
    navigate(-1)
  }

  const { hasBack, rightCont } = props;
  return (
    <div className="header">
      <ul>
        <li className="header-btn">
          {hasBack ? <span onClick={clickBack.bind(this)}>{"<"}</span> : ""}
        </li>
        <li className="header-tit">{props.children}</li>
        <li className="header-btn" onClick={() => clickRight()}>
          {rightCont}
        </li>
      </ul>
    </div>
  );
}

// 设置默认值
Header.defaultProps = {
  hasBack: true,
};

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              首页
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              商品
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              购物车
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mine"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              我的
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

// class Content extends Component {
//   render () {
//     return <div className="content">{this.props.children}</div>
//   }
// }
// const Content = props=><div className="content">{props.children}</div>

function Content(props) {
  //普通的构造函数  (纯组件，视图组件)
  return <div className="content">{props.children}</div>;
}

export { Header, Content, Footer };
