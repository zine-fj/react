import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import qs from 'qs'
import './reg.css'

class Reg extends Component {
    state = {
        mobile: '17610769863',
        mobileCode:'',
        imgCode:'',
        password:'',
        imgCodeParams:Math.random()
    }
    sendCode() {
        // 发送验证码
        let {mobile,imgCode} = this.state
        mobile = mobile.replace(/\s/g,'')
        console.log('验证码',mobile,imgCode)
        fetch(`/loho88/uc/mobile/register/code?captcha=${imgCode}&mobile=${mobile}`,{
            method:'post',
            credentials: 'include',
        }).then(res=>res.json()).then(data=>{
            console.log(data)
        })
    }
    reg() {
        let {mobile,password,mobileCode,imgCode} = this.state
        mobile = mobile.replace(/\s/g,'')
        let params = {
            agreement:true,
            captcha:mobileCode,
            inputCaptcha:imgCode,
            password:password,
            repassword:password,
            username:mobile
        }
        fetch(`/loho88/uc/mobile/register`,{
            method:'post',
            credentials: 'include',
            headers:{
                // 模拟form表单 键值对的方式提交数据
                "Content-Type":"application/x-www-form-urlencoded"
            },
            // qs.stringify：将对象转换成字符串
            body: qs.stringify(params)
        }).then(res=>res.json()).then(data=>{
            console.log(data)
        })
    }
    render() {
        const {mobile,password,mobileCode,imgCode,imgCodeParams} = this.state
        return (
            <div id='reg-page'>
                <NavBar>注册</NavBar>
                <div>
                <List renderHeader={() => 'Format'}>
                    <InputItem
                        type="phone"
                        clear={true}
                        value={mobile}
                        onChange={(val)=>{this.setState({mobile:val})}}
                        placeholder="186 1234 1234"
                        extra={<span></span>}
                    >手机号码</InputItem>

                    <InputItem
                        type="number"
                        clear={true}
                        value={imgCode}
                        onChange={(val)=>{this.setState({imgCode:val})}}
                        extra={<img 
                            onClick={()=>this.setState({imgCodeParams:Math.random()})} 
                            src={`http://m.loho88.com/code/mobile/getCaptchaCode?${imgCodeParams}`} />
                        }
                    >图形验证码</InputItem>

                    <InputItem
                        type="number"
                        clear={true}
                        value={mobileCode}
                        onChange={(val)=>{this.setState({mobileCode:val})}}
                        onExtraClick = {()=>this.sendCode()}
                        extra={<span>发送验证码</span>}
                    >验证码</InputItem>
                    <InputItem
                        type="password"
                        placeholder="****"
                        value={password}
                        onChange={(val)=>{this.setState({password:val})}}
                    >密码</InputItem>
                    </List>
                    <button onClick={()=>this.reg()}>注册</button>
                </div>
            </div>
        )
    }
}

export default Reg


// {...getFieldProps('phone')}

// var obj1 = {a:1,b:2}
// function fn1() {
//     return {a:1,b:2}
// }
// var obj2 = {...fn1()}
