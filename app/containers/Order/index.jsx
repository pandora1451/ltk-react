import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import {IndexLink, Link, hashHistory } from 'react-router'
import OrderListW from './subpage/orderListW'

import './style.less'
class Order extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	loading:false
        }
    }
    render() {
    	let type = this.props.params.type;
        return (
        	<section className="order-page-container">
        	<Header title="全部订单"></Header>
	            <div className="nav-box">
	            	<Link to='/order/dfk' activeClassName="active">
	            	<div className="items">待付款</div>
	            	</Link>
	            	<Link to='/order/dsh' activeClassName="active">
	            	<div className="items">待收货</div>
	            	</Link>
	            	<Link to='/order/swc' activeClassName="active">
	            	<div className="items">已完成</div>
	            	</Link>
	            	<Link to='/order/yqx' activeClassName="active">
	            	<div className="items">已取消</div>
	            	</Link>
	            	<Link to='/order/thh' activeClassName="active">
	            	<div className="items">退换货</div>
	            	</Link>
	            </div>
	            <div className="theGrayDiv"></div>
            	{
            		this.state.loading
            		?<h1 style={{textAlign: 'center',color:'#cccccc'}}>Loading</h1>
            		:<OrderListW></OrderListW>
            	}
        	</section>
        )
    }
}

export default Order