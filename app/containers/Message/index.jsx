import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link,hashHistory } from 'react-router'

import Header from '../../components/Header'
import './style.less'
class Message extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="message-container">
	        	{/*<div className="header">
	                <span className="back-icon-container " onClick={this.clickHandle.bind(this)}>
	                    <i className="back-icon" ></i>
	                </span>
	                <span className="share-icon-container">
	                    标为已读
	                </span>
	                <div className="title">消息</div>
	                <div className="gray-line"></div>
	            </div>*/}
	            <Header title = "消息" type = "msgHeader"></Header>
	            <div className="body-top">
	            	<Link to="/message/main/sys">
		            	<div>
		            		<i className="ico-sts"></i><span>系统消息</span><i className="ico-right"></i><span className="num">20</span>
		            	</div>
	            	</Link>
	            	<div className="gray-line"></div>
	            	<Link to="/message/main/shipping">
		            	<div>
		            		<i className="ico-wl"></i><span>物流消息</span><i className="ico-right"></i><span className="num">20</span>
		            	</div>
	            	</Link>
	            </div>
	            <div className="body-bottom">
	            	<Link to="/message/main/friends">
		            	<div>
		            		<i className="ico-hb"></i><span>伙伴消息</span><i className="ico-right"></i><span className="num">20</span>
		            	</div>
	            	</Link>
	            	<div className="gray-line"></div>
	            	<Link to="/message/main/reward">
		            	<div>
		            		<i className="ico-jl"></i><span>奖励消息</span><i className="ico-right"></i><span className="num">20</span>
		            	</div>
	            	</Link>
	            	<div className="gray-line"></div>
	            	<Link to="/message/main/bonus">
		            	<div>
		            		<i className="ico-yhq"></i><span>优惠券信息</span><i className="ico-right"></i><span className="num">20</span>
		            	</div>
	            	</Link>
	            	<div className="gray-line"></div>
	            	<Link to="/message/main/rankpoints">
		            	<div>
		            		<i className="ico-jf"></i><span>积分消息</span><i className="ico-right"></i><span className="num">20</span>
		            	</div>
	            	</Link>
	            	<div className="gray-line"></div>
	            	<Link to="/message/main/favorite">
		            	<div>
		            		<i className="ico-xy"></i><span>心愿单消息</span><i className="ico-right"></i><span className="num">20</span>
		            	</div>
	            	</Link>
	            </div>
        	</section>
        )
    }
    clickHandle() {
        const backRouter = this.props.backRouter
        if (backRouter) {
            hashHistory.push(backRouter)
        } else {
            window.history.back()
        }
    }
}

export default Message