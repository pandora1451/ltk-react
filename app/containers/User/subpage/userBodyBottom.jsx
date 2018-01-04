import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import MenuItem from '../../../components/MenuItem'


import './style.less'
class UserBodyBottom extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="user-bottom-container">
				<div className="list-top">
					<MenuItem name="新人专享" ico="ico_mine_new" num=""/>
					<MenuItem name="我的奖励" ico="ico_mine_reward" num="" link="/reward"/>
					<MenuItem name="伙伴列表" ico="ico_mine_friends" num="10" link="/friends"/>
				</div>
				<div className="list-bottom">
					<MenuItem name="签到好礼" ico="ico_mine_sign" num=""/>
					<MenuItem name="我的积分" ico="ico_mine_score" num="1234"/>
					<MenuItem name="优惠券" ico="ico_mine_coupon" num=""/>
					<MenuItem name="心愿单" ico="ico_mine_collection" num="" link="/user/collection"/>
				</div>
				<div className="btn-box">
					<div>联系客服</div>
				</div>
        	</div>
        )
    }
}

export default UserBodyBottom