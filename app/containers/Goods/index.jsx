import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import GoodsHeader from './subpage/goods-header'
import GoodsSwiper from './subpage/goods-swiper'
import GoodsFooter from './subpage/goods-footer'
import './style.less'
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
            	<div className="goods-info-container">
            		<div className="right">
            			<div className="time-container">
            				<span>00</span>
            				:
            				<span>00</span>
            				:
            				<span>00</span>
            			</div>
            		</div>
            		<div className="left">
            			<div className="goods-name"><span>BeoPlay H5 bo 蓝牙耳机入耳式B&O</span></div>
            			<div className="goods-brief"><span>无线蓝牙 HiFi音质 时尚三色可选</span></div>
            			<div className="goods-price">
            				<span>¥</span><span className="price-now">1998.00</span><del>¥2100</del>
            			</div>
            		</div>
            	</div>
            	<div className="chengnuo">
            		<img src={require('../../static/images/icon/ico_goods_intro.png')} />
            	</div>
        		<div className="comment-container">
            		<div className="title">
            			<span className="sign">买手推荐</span>
            			<span>查看</span><span className="num">18</span><span>条评论></span>
            		</div>
	        		<div className="big-box">
	            		<div className="comment-list">
	            			<div className="comment">
	            				<div className="content">
	            					<span>如果你无法简洁的表达你的想法，那只能说明你不够了解它。那只说明你还不够...</span>
	            				</div>
	            				<div className="user">
	            					<img className="avatar-box" src={require('../../static/images/icon/ico_goods_kefu.png')} />
	            					<span>菲菲</span>
	            				</div>
	            			</div>
	            			<div className="comment">
	            				<div className="content">
	            					<span>如果你无法简洁的表达你的想法，那只能说明你不够了解它。那只说明你还不够...</span>
	            				</div>
	            				<div className="user">
	            					<img className="avatar-box" src={require('../../static/images/icon/ico_goods_kefu.png')} />
	            					<span>菲菲</span>
	            				</div>
	            			</div>
	            			<div className="comment">
	            				<div className="content">
	            					<span>如果你无法简洁的表达你的想法，那只能说明你不够了解它。那只说明你还不够...</span>
	            				</div>
	            				<div className="user">
	            					<img className="avatar-box" src={require('../../static/images/icon/ico_goods_kefu.png')} />
	            					<span>菲菲</span>
	            				</div>
	            			</div>
	            		</div>
	            	</div>
        		</div>
            	<GoodsFooter></GoodsFooter>
        	</section>
        )
    }
}

export default Goods