import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class GoodsProperty extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	this.props.propsShow2
        	?<div className="goods-property-container">
	            <div className="container">
		            <div className="img-container">
		            	<img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
		            </div>
		            <div className="price-container">
		            	<span className="sign">¥</span>
		            	<span className="price">1998.00</span>
		            	<del className="market-price">¥ 2100</del>
		            </div>
		            <div className="property-container">
		            	<div className="left">规格</div>
		            	<div className="right">
		            		<ul>
		            			<li>红色</li>
		            			<li>红色</li>
		            			<li>红色</li>
		            			<li>红色</li>
		            		</ul>
		            	</div>
		            </div>
		            <div className="num-container">
		            	<div className="left">数量</div>
		            	<div className="right">
		            		<span className="square">-</span>
		            		<span>2</span>
		            		<span className="square">+</span>
		            	</div>
		            </div>
		            <div className="btn-box">
		            	<div className="button" onClick={this.clickHandle.bind(this)}>加入购物车</div>
		            </div>
	            </div>
        	</div>
        	:null
        )
    }
    clickHandle(){
    	this.props.hideP();
    	console.log(3);
    }
}

export default GoodsProperty