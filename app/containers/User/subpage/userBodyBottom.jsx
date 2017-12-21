import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

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
					<div className="item-box">
						<div className="icon-box">
							<img src={require('../../../static/images/icon/ico_mine_new.png')} />
						</div>
						<div className="name">新人专享</div>
						<div className="right-box">
							<span className="num">123</span>
							<i className="ico-right"></i>
						</div>
					</div>
				</div>        		
				<div className="list-bottom"></div>
				<div className="btn-box"></div>
        	</div>
        )
    }
}

export default UserBodyBottom