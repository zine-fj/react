// 坑     自定义函数的 this 会发生改变
import React, { Component } from "react";
import { Header, Content } from "../components/public";
import { InputItem } from "../components/Form";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  filterUser(ev) {
    this.setState({
      username: ev.target.value,
    });
  }
  filterPWD(ev) {
    this.setState({
      password: ev.target.value,
    });
  }
  render() {
    const { username, password } = this.state;
    return (
      <div id="login-page">
        <Header>登录</Header>
        <Content>
          <ul className="form-list">
            <li className="form-item">
              <input
                type="text"
                placeholder="用户名"
                value={username}
                onChange={(ev) => this.filterUser(ev)}
              />
            </li>
            <li className="form-item">
              <input
                type="password"
                placeholder="密码"
                value={password}
                onChange={(ev) => this.filterPWD(ev)}
              />
            </li>
          </ul>
          <div>
            <InputItem
              pattern={/^1\d{10}$/}
              value={username}
              onChange={(val) => this.setState({ username: val })}
              tit="手机号"
            ></InputItem>

            <InputItem
              pattern={/^\d{8,}$/}
              value={password}
              onChange={(val) => this.setState({ password: val })}
              tit="密码"
            ></InputItem>
          </div>
        </Content>
      </div>
    );
  }
}

export default LoginPage;
