import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class UserBodyTop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="user-body-top">
         	   <div className="invit-code">
         	   		<img src={require('../../../static/images/icon/ico_invite_code.png')} />
         	   		<div>邀请码</div>
         	   </div>
         	   <div className="user-info-box">
         	   		<div className="user-avatar-box">
         	   			<img src={require('../../../static/images/logo/ico_new_lipstick.png')} />
         	   		</div>
         	   		<div className="user-info">
         	   			<div className="user-name">昵称</div>
         	   			<div className="user-price">
         	   				<span className="left">累计消费: </span><span className="right">¥14098</span>
         	   			</div>
         	   		</div>

         	   </div>
        	</div>
        )
    }
}

export default UserBodyTop