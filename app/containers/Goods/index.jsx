import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import GoodsHeader from './subpage/goods-header'
import GoodsSwiper from './subpage/goods-swiper'
class Goods extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="goods-page-container">
            	<GoodsHeader></GoodsHeader>
            	<GoodsSwiper></GoodsSwiper>
        	</section>
        )
    }
}

export default Goods