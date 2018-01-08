import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import './style.less'
class UserBonus extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="user-bonus-page">
        		<Header title="优惠券" type="backAndHome" />
            	<div className="efbonus-list-container">
            		<div className="title">可用优惠券</div>
            		<div className="bonus-box">
            			<div className="bonus-item">
            				<div className="left">
            					<div className="bonus-price">¥20</div>
            					<div className="bonus-info">满50可用</div>
            				</div>
            				<div className="right">
            					<div className="bonus-detail">仅可购买YSL官方旗舰店相关产品</div>
            					<div className="bonus-time">2017.07.01-2017.07.31</div>
            					<div className="btn-use">点击使用</div>
            				</div>
            			</div>
            			<div className="bonus-item">
            				<div className="left">
            					<div className="bonus-price">¥20</div>
            					<div className="bonus-info">满50可用</div>
            				</div>
            				<div className="right">
            					<div className="bonus-detail">仅可购买YSL官方旗舰店相关产品</div>
            					<div className="bonus-time">2017.07.01-2017.07.31</div>
            					<div className="btn-use">点击使用</div>
            				</div>
            			</div>
            		</div>
            	</div>
            	<div className="unefbonus-list-container">
            		<div className="title">过期优惠券</div>
            		<div className="bonus-box">
            			<div className="bonus-item">
            				<div className="left">
            					<div className="bonus-price">¥20</div>
            					<div className="bonus-info">满50可用</div>
            				</div>
            				<div className="right">
            					<div className="bonus-detail">仅可购买YSL官方旗舰店相关产品</div>
            					<div className="bonus-time">2017.07.01-2017.07.31</div>
            					<div className="btn-use">不能使用</div>
            				</div>
            			</div>
            		</div>
            	</div>
            	<div className="guize">
            		<div className="title">规则：</div>
            		<p className="info">购物券仅限于日期之内使用，如超出使用日期则不能用，点击删除可将其去除。</p>
            	</div>
            	<div className="btn-clear">
            		清除过期优惠券
            	</div>
        	</div>
        )
    }
}

export default UserBonus