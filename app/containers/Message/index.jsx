import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'
class Message extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="message-container">
	        	<div className="header">
	                <span className="back-icon-container " onClick={this.clickHandle.bind(this)}>
	                    <i className="back-icon" ></i>
	                </span>
	                <span className="share-icon-container">
	                    标为已读
	                </span>
	                <div className="title">消息</div>
	                <div className="gray-line"></div>
	            </div>
	            <div className="body-top">
	            	<div>
	            		<i className="ico-sts"></i><span>系统消息</span><i className="ico-right"></i><span className="num">20</span>
	            	</div>
	            	<div className="gray-line"></div>
	            	<div>
	            		<i className="ico-wl"></i><span>物流消息</span><i className="ico-right"></i><span className="num">20</span>
	            	</div>
	            </div>
	            <div className="body-bottom">
	            	<div>
	            		<i className="ico-hb"></i><span>伙伴消息</span><i className="ico-right"></i><span className="num">20</span>
	            	</div>
	            	<div className="gray-line"></div>
	            	<div>
	            		<i className="ico-jl"></i><span>奖励消息</span><i className="ico-right"></i><span className="num">20</span>
	            	</div>
	            	<div className="gray-line"></div>
	            	<div>
	            		<i className="ico-yhq"></i><span>优惠券信息</span><i className="ico-right"></i><span className="num">20</span>
	            	</div>
	            	<div className="gray-line"></div>
	            	<div>
	            		<i className="ico-jf"></i><span>积分消息</span><i className="ico-right"></i><span className="num">20</span>
	            	</div>
	            	<div className="gray-line"></div>
	            	<div>
	            		<i className="ico-xy"></i><span>心愿单消息</span><i className="ico-right"></i><span className="num">20</span>
	            	</div>
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