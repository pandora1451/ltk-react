import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class RegisterBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state ={
        	isgetcode:true
        }
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
            		{
            			this.props.time == 0
            			?<span className="get-code" onClick={this.props.getCode}>获取验证码</span>
            			:<span className="wait-code">重新获取({this.props.time}s)</span>
            		}
            	</div>
            	<div className="register-btn-box">
            		<div className="register-btn">注册</div>
            	</div>
            </div>
        )
    }
}

export default RegisterBox