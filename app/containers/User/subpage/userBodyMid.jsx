import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class UserBodyMid extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="user-body-mid">
	            <div className="user-banner-box">
	            	<img src={require('../../../static/images/banner/user-banner.png')}/>
	            </div>
	            <div className="items-box">
	            	<div className="item item1">
	            		<div className="img-box">
	            		<img src={require('../../../static/images/icon/ico_mine_all_orders.png')} />
	            		</div>
	            		<div>全部订单</div>
	            	</div>
	            	<div className="item item2">
	            		<div className="img-box">
	            		<img src={require('../../../static/images/icon/ico_mine_sending.png')} />
	            		</div>
	            		<div>已完成</div>
	            	</div>
	            	<div className="item item3">
	            		<div className="img-box">
	            		<img src={require('../../../static/images/icon/ico_mine_receiving.png')} />
	            		</div>
	            		<div>待收货</div>
	            	</div>
	            	<div className="item item4">
	            		<div className="img-box">
	            		<img src={require('../../../static/images/icon/ico_mine_paying.png')} />
	            		</div>
	            		<div>待付款</div>
	            	</div>
	            	<div className="item item5">
	            		<div className="img-box">
	            		<img src={require('../../../static/images/icon/ico_mine_rechanging.png')} />
	            		</div>
	            		<div>退换货</div>
	            	</div>
	            </div>
        	</div>
        )
    }
}

export default UserBodyMid