import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'
import './style.less'
class GoodsBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div>
        		{this.props.data.map((item, index) => {
	             return <div key={index} className="goods-box">
			    			<div className="goods-img-box">
			    				<img src={item.img} />
			    			</div>
			    			<div className="goods-title">{item.title}</div>
			    			<div className="goods-price-box">
			    				<span className="goods-price">¥ {item.price}</span>
			    				<span className="ico-cart"></span>
			    			</div>
			    			<Item data={item.collected}></Item>
			    		</div>
	    		})}
        	</div>
            
        )
    }
}

export default GoodsBox