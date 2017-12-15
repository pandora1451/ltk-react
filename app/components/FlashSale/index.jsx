import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import './style.less'
class FlashSale extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="flash-sale">
            	<div className="flash-sale-top clear-fix">
            		<div>
            			<div className="left"><i className="ico-clock"></i><span>商城秒杀</span></div>
            			<div className="right">
            				<div className="times">
            					<span>00</span>
            				</div>
            				<div><span>:</span></div>
            				<div className="times">
            					<span>00</span>
            				</div>
            				<div><span>:</span></div>
            				<div className="times">
            					<span>00</span>
            				</div>

            			</div>
            		</div>
            		<div className="more"><span>更多</span><i className="ico-more"></i></div>
            	</div>
            	<div className="gray-line"></div>
            	<div className="flash-sale-content">
            		<div className="goods">
                        <Link to='/goods/001'>
            			<img src={require('../../static/images/goods/2917.png')}/>
            			<div className="goods-name-container">
            				<span className="goods-name">法国xx牌洁面乳</span>
            			</div>
            			<div className="sign-container">
            				<span className="sign">限时价</span><span className="goods-price">¥46.0</span>
            			</div>
                        </Link>
            		</div>
            		<div className="goods">
                        <Link to='/goods/002'>
            			<img src={require('../../static/images/goods/3451.png')}/>
            			<div className="goods-name-container">
            				<span className="goods-name">超水润却超防水</span>
            			</div>
            			<div className="sign-container">
            				<span className="sign">限时价</span><span className="goods-price">¥146.0</span>
            			</div>
                        </Link>
            		</div>
            		<div className="goods">
                        <Link to='/goods/002'>
            			<img src={require('../../static/images/goods/4896.png')}/>
            			<div className="goods-name-container">
            				<span className="goods-name">陈伟霆同款</span>
            			</div>
            			<div className="sign-container">
            				<span className="sign">限时价</span><span className="goods-price">¥189.0</span>
            			</div>
                        </Link>
            		</div>
            	</div>
            </section>
        )
    }
}

export default FlashSale