import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import './style.less'
class Reward extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="reward-page-container">
        		<Header title="我的奖励" type="backAndPoints"/>
        		<div className="btn-box">
        			<div className="left">已分成</div>
        			<div className="right">待分成</div>
        		</div>
        		<div className="total-price-container">
        			<span className="tixian">提现 ></span>
        			<div>
        			<span>总额：</span><span>¥127443</span>
        			</div>
        		</div>

        	</section>
        )
    }
}

export default Reward