import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class RegisterBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="register-box-container">
            	<div className="phone">
            		<i className="ico-phone"></i><input placeholder="请输入手机号码"/>
            	</div>
            	<div className="code">
            		<i className="ico-code"></i><input placeholder="请输入密码(6-20位数字、英文组成)" />
            	</div>
            	<div className="code2">
            		<i className="ico-again"></i><input placeholder="请再次输入密码" />
            	</div>
            	<div className="code3">
            		<i className="ico-yanzheng"></i><input placeholder="请输入验证码" />
            		<span className="get-code">获取验证码</span>
            	</div>
            </div>
        )
    }
}

export default RegisterBox