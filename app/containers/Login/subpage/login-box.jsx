import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getlogin,login } from '../../../fetch/login/login'

import './style.less'

class LoginBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            username: 'lipstick13214',
            password: 'iceman',
            data:[]
        }
    }
    render() {
        return (
            <div className="login-box-container">
            	<div className="phone">
            		<i className="ico-phone"></i>
                    <input placeholder="请输入手机号码"
                        onChange={this.changeHandle.bind(this)} 
                        value={this.state.username}
                    />
            	</div>
            	<div className="code">
            		<i className="ico-code"></i><input placeholder="请输入密码(6-20位数字、英文组成)" />
            	</div>
                <div className="login-btn-box">
                    <div className="login-btn" onClick={this.clickHandle1.bind(this)}>登录</div>
                    <div className="login-bottom">
                        <span className="left">忘记手机号?</span>
                        <span className="right">忘记密码?</span>
                    </div>
                </div>
            </div>
        )
    }
    changeHandle(e) {
        this.setState({
            username: e.target.value
        })
    }
    clickHandle() {
        const username = this.state.username
        const loginHandle = this.props.loginHandle
        loginHandle(username);
    }

    clickHandle1(){
        var username = this.state.username;
        var password = this.state.password;
        var result = login(username,password);
    //处理登陆响应数据
        result.then(res => {
            return res.json()
        }).then(json => {
            // 获取数据
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        })
    }
}
export default LoginBox