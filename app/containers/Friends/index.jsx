import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link, hashHistory } from 'react-router'

import Header from '../../components/Header'
import './style.less'
class Friends extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	showType:'default'
        }
    }
    render() {
        return (
        	<section className="friends-page-container">
				<Header title="伙伴列表" type="backAndRule"/>
				<div className="header-box">
					<div><span>累计收取: </span><span className="leiji">¥14098</span></div>
					<div><span>待收取: </span><span className="dai">¥5325</span></div>
				</div>
				<div className="nav-box">
					<div>
						<span className={this.state.showType=='default'?'active':''} onClick={this.clickHandler.bind(this,'default')}>默认排序</span>
					</div>
					<div>
						<span className={this.state.showType=='buy'?'active':'' } onClick={this.clickHandler.bind(this,'buy')}>消费最高</span>
					</div>
					<div>
						<span className={this.state.showType=='time'?'active':''} onClick={this.clickHandler.bind(this,'time')}>加入时间</span>
					</div>
				</div>
				<div className="friends-list-container">
					<div className="friend-box">
						<img className="user-avatar" src={require('../../static/images/logo/ico_new_lipstick.png')}/>
						<span className="user-name">昵称</span>
						<span className="show-info">累计消费：¥14262</span>
					</div>
					<div className="friend-box">
						<img className="user-avatar" src={require('../../static/images/logo/ico_new_lipstick.png')}/>
						<span className="user-name">昵称</span>
						<span className="show-info">累计消费：¥14262</span>
					</div>
					<div className="friend-box">
						<img className="user-avatar" src={require('../../static/images/logo/ico_new_lipstick.png')}/>
						<span className="user-name">昵称</span>
						<span className="show-info">累计消费：¥14262</span>
					</div>
				</div>
        	</section>
        )
    }
    clickHandler(text){
    	this.setState({showType:text})
    }
}

export default Friends