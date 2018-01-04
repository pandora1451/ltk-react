import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'

import './style.less'

class UserCollection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="user-collection-container">
        	<Header title="心愿单" type="backAndEdit"/>
        	<div></div>
        	<div className="collection-goods-box">
        		<div className="btn-left"></div>
        		<div className="right">
        			<div className="goods-img-box">
        				<img src={require('../../static/images/goods/357_G_1493767698760.png')} />
        			</div>
        			<div className="goods-info-box">
        				<div className="goods-name">韩国age20's爱敬气垫BB霜水光粉底膏遮瑕持久保湿水粉霜 (黄调)</div>
        				<div className="goods-price"><span>价格：</span><span className="price">¥ 326</span></div>
        			</div>
        		</div>
        	</div>
        	</section>
        )
    }
}

export default UserCollection