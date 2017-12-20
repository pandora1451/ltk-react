import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoginBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="login-box-container">
            	<div className="phone">
            		<i className="ico-phone"></i><input placeholder="请输入手机号码"/>
            	</div>
            	<div className="code">
            		<i className="ico-code"></i><input placeholder="请输入密码(6-20位数字、英文组成)" />
            	</div>
            </div>
        )
    }
}

export default LoginBox