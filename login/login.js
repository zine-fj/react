let Header = React.createClass({
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
})

let Content = React.createClass({
    render() {
        return <div className="content">{this.props.children}</div>
    }
})

let LoginPage = React.createClass({
    getInitialState() {
        return {
            showPassword:false,
            password:"",
            username:""
        }
    },
    changeShowPWD() {
        this.setState({
            showPassword:!this.state.showPassword
        })
    },
    filterPWD(ev) {
        // 过滤密码里面的中文
        // console.log(ev.target.value); // 通过事件对象获取密码 (refs也可以)
        let val = ev.target.value.replace(/[\u4e00-\u9fa5]/g,""); // 过滤
        // 把密码保存在状态里面
        this.setState({
            password:val
        })
        // ev.target.value = val // 给密码赋值为 过滤后的内容
    },
    filterUser(ev) {
        // 当用户名发生改变的时候，需要对用户名进行过滤，然后把用户名保存在state里面
        // state改变 => 视图自动更新
        let val = ev.target.value.replace(/sb/g,"");
        this.setState({
            username:val
        })
        // ev.target.value = val
    },
    login() {
        // 需要用户名和密码
        // 1、通过dom获取 或者 refs获取
        // 2、const{username,password} = this.state
        const{username,password} = this.state
        console.log(username,password)
    },
    render() {
        const {showPassword,username,password} = this.state
        return (
            <div id="login-pae">
                <Header>登录</Header>
                <Content>
                    <ul className="form-list">
                        <li className="form-item">
                            <input type="" id="login-mobile" value={username} onChange={this.filterUser} defaultValue="111111" placeholder="11位手机号"/>
                        </li>
                        <li className="form-item">
                            <input type={showPassword?'text':'password'} id="login-password" value={password} onChange={this.filterPWD} placeholder="6-12位密码"/>
                        </li>
                        <li className="form-item show-password">
                            <label>
                                <input type="checkbox" onChange={this.changeShowPWD}/>
                                <span>显示密码</span>
                            </label>
                        </li>
                        <div className="login-reg">
                           
                            <li className="form-item">
                                <input onClick={this.login} type="button" id="login-btn" value="登录" />
                            </li>
                            <li className="form-item">
                                <a href="login.html">注册</a>
                            </li>
                        </div>
                        
                    </ul>
                </Content>
            </div>
        )
    }
})

// js的change事件是 当input失去焦点，且内容改变的时候触发
ReactDOM.render(
    <LoginPage />,
    document.getElementById('root')
)