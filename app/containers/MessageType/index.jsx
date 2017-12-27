import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'

import './style.less'
class MessageType extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	let url = this.props.params.name;
    	var t = null;
    	switch(url){
    		case 'sys':
    		t = "系统消息";
    		break;
    		case 'shipping':
    		t = "物流消息";
    		break;
    		case 'friends':
    		t = "伙伴消息";
    		break;
    		case 'reward':
    		t = "奖励消息";
    		break;
    		case 'bonus':
    		t = "优惠券消息";
    		break;
    		case 'rankpoints':
    		t = "积分消息";
    		break;
    		case 'favorite':
    		t = "心愿单消息";
    		break;
    		default:
    		t = "消息";
    	}
        return (
        	<section>
	        	<Header title={t}></Header>
	            <div className="message-list-container">
	            	<ul>
	            		<li>
	            			<div className="time"><span>13:17</span></div>
	            			<div className="message-box">
	            				<i className="has-read"></i>
	            				<div className="title"><span>口红效应系统升级</span></div>
	            				<div className="info"><span>口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。</span></div>
	            			</div>
	            		</li>
	            		<li>
	            			<div className="time"><span>13:17</span></div>
	            			<div className="message-box">
	            				<i className="has-read"></i>
	            				<div className="title"><span>口红效应系统升级</span></div>
	            				<div className="info"><span>口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。</span></div>
	            			</div>
	            		</li>
	            		<li>
	            			<div className="time"><span>13:17</span></div>
	            			<div className="message-box">
	            				<i className="has-read"></i>
	            				<div className="title"><span>口红效应系统升级</span></div>
	            				<div className="info"><span>口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。</span></div>
	            			</div>
	            		</li>
	            		<li>
	            			<div className="time"><span>13:17</span></div>
	            			<div className="message-box">
	            				<i className="has-read"></i>
	            				<div className="title"><span>口红效应系统升级</span></div>
	            				<div className="info"><span>口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。</span></div>
	            			</div>
	            		</li>
	            		<li>
	            			<div className="time"><span>13:17</span></div>
	            			<div className="message-box">
	            				<i className="has-read"></i>
	            				<div className="title"><span>口红效应系统升级</span></div>
	            				<div className="info"><span>口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。口红效应已在在3号更新版本。</span></div>
	            			</div>
	            		</li>
	            	</ul>
	            </div>
        	</section>
        )
    }
}

export default MessageType