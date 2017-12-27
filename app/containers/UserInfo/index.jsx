import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import MenuItem from '../../components/MenuItem'
import './style.less'
class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="user-info-container">
	            <MenuItem name="头像" ico="" num=""/>
                <MenuItem name="昵称" ico="" num="昵称"/>
                <MenuItem name="账户ID" ico="" num="123123"/>
                <MenuItem name="绑定手机号" ico="" num="未绑定"/>
                <MenuItem name="修改密码" ico="" num=""/>
                <MenuItem name="绑定微信号" ico="" num="已绑定"/>
                <MenuItem name="绑定QQ" ico="" num="已绑定"/>
                <MenuItem name="绑定支付宝" ico="" num="已绑定"/>
        	</section>
        )
    }
}

export default UserInfo