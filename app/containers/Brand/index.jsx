import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderShare from '../../components/HeaderShare'

import './style.less'
class Brand extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="brand-page">
				<HeaderShare title="品牌名"></HeaderShare>
				<div className="banner-box">
        			<img src={require('../../static/images/banner/brand-banner.png')}/>
        		</div>
        		<div className="info-box">
        			<div className="left">
        				<div className="img-box">
        					<img src={require('../../static/images/logo/ico_new_lipstick.png')}/>
        				</div>
        			</div>
        			<div className="right">
        				<span>
        					我们从经济现象中获得灵感，创造了口红效应平台，致力于为顾客提供极具性价比，而又在非凡意义的商品。你会在平台上获得除了产品本身之外，更有意义的购物体验。口红效应的初衷是让每一位顾客都变得深入骨髓的精致。
        				</span>
        			</div>
        		</div>				        		
        	</section>
        )
    }
}

export default Brand