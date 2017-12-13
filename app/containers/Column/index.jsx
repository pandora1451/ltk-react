import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HeaderShare from '../../components/HeaderShare'

import './style.less'
class Column extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	let url = this.props.params.name;
    	var t = null;
    	switch(url){
    		case 'new':
    		t = "新品首发";
    		break;
    		case 'hot':
    		t = "人气最高";
    		break;
    		case 'best':
    		t = "精品好货";
    		break;
    		default:
    		t = "消息";
    	}
        return (
        	<section className="column-container">
        		<HeaderShare title={t}></HeaderShare>
        		<div className="banner-box">
        			<img src={require('../../static/images/banner/banner-xinpin.png')}/>
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

export default Column