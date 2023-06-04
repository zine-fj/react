class Header extends React.Component {
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
    );
  }
}

class Content extends React.Component {
  render() {
    return <div className="content">{this.props.children}</div>;
  }
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false,
    };
    this.filterUser = this.filterUser.bind(this);
    this.filterPWD = this.filterPWD.bind(this);
    this.changeShowPWD = this.changeShowPWD.bind(this);
    this.login = this.login.bind(this);
  }
  filterUser(ev) {
    //当用户名发生改变的时候，需要对用户名进行过滤，然后把用户名保存在state里面
    //state改变 =》视图会自动更新
    this.setState({
      username: ev.target.value.replace(/sb/g, ""),
    });
  }

  filterPWD(ev) {
    // 过滤密码里面的中文
    var val = ev.target.value.replace(/[\u4e00-\u9fa5]/g, "");
    console.log(val);
    this.setState({
      password: val,
    });
  }
  changeShowPWD() {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }

  login() {
    //需要用户名和密码
    //1、通过dom获取/refs获取
    //2、const {username,password} = this.state
    const { username, password } = this.state;
    console.log(username, password);
  }
  render() {
    const { showPassword, username, password } = this.state;
    return (
      <div id="login-page">
        <Header>登录</Header>
        <Content>
          <ul className="form-list">
            <li className="form-item">
              <input
                type=""
                id="login-mobile"
                placeholder="11位手机号"
                onChange={this.filterUser}
                value={username}
              />
            </li>
            <li className="form-item">
              <input
                type={showPassword ? "text" : "password"}
                onChange={this.filterPWD}
                id="login-password"
                placeholder="6-12位密码"
                value={password}
              />
            </li>
            <li className="form-item">
              <label className="ovfl">
                <input
                  className="show-password"
                  onChange={this.changeShowPWD}
                  type="checkbox"
                />
                <span className="fl"> 显示密码</span>
              </label>
            </li>
            <li className="form-item">
              <button id="login-btn" onClick={this.login}>
                登录
              </button>
            </li>
            <li className="form-item">
              <a href="login.html">注册</a>
            </li>
          </ul>
        </Content>
      </div>
    );
  }
}
//js 的change事件是   当input失去焦点，且内容改变的时候触发
ReactDOM.render(<LoginPage />, document.getElementById("root"));
