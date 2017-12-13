import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import Header01 from '../../components/Header01'
import HeaderZero from '../../components/HeaderZero'
import './style.less'

class Recommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
    	const opt = {
            auto: 5000,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
        	<section className="recommend-page" >
        		<Header01 title="口红推荐"/>
            	<section className="notice-container">
            		<span className="notice-icon"></span>
            		<span className="notice-content">推荐商品每天10点更新</span>
            	</section>
            	<section className="recommend-banner clear-fix">
            		<div className="recommend-banner-left">
            			<div className="goods-title"><span>日本手造眼镜</span></div>
            			<div className="goods-brand"><span>品牌：</span><span>Yohji Yamamoto</span></div>
            			<div className="goods-info"><span>本产品平镜面树脂加工而成，精美而优雅。</span></div>
            		</div>
            		<div className="recommend-banner-right">
            		<ReactSwipe swipeOptions={opt}>
		            		<div className="carousel-item">
		                       <div>
		                       		<img src={require('../../static/images/goods/357_G_1493767698760.png')}/>
		                       </div>
		                    </div>
		                    <div className="carousel-item">
		                        <div>
		                        	<img src={require('../../static/images/goods/2917.png')}/>
		                        </div>
		                    </div>
		                    <div className="carousel-item">
		                        <div>
		                        	<img src={require('../../static/images/goods/4896.png')}/>
		                        </div>
		                    </div>
		            	</ReactSwipe>
		            	<div className="index-container">
		                    <ul>
		                        <li className={this.state.index === 0 ? "selected" : ''}></li>
		                        <li className={this.state.index === 1 ? "selected" : ''}></li>
		                        <li className={this.state.index === 2 ? "selected" : ''}></li>
		                    </ul>
		                </div>
            		</div>
            	</section>
            	<section className="recommend-goods-grid clear-fix">
            		<div className="goods-box">
            			<div className="goods-img-box">
            				<img src={require('../../static/images/goods/4896.png')}/>
            			</div>
            			<div className="goods-title">男士T恤上衣</div>
            			<div className="goods-price-box">
            				<span className="goods-price">¥ 3290.00</span>
            				<span className="ico-cart"></span>
            			</div>
            			<span className="ico-collection"></span>
            		</div>
            		<div className="goods-box">
            			<div className="goods-img-box">
            				<img src={require('../../static/images/goods/512_G_1495493604567.png')}/>
            			</div>
            			<div className="goods-title">男士T恤上衣</div>
            			<div className="goods-price-box">
            				<span className="goods-price">¥ 3290.00</span>
            				<span className="ico-cart"></span>
            			</div>
            			<span className="ico-collection"></span>
            		</div>
            		<div className="goods-box">
            			<div className="goods-img-box">
            				<img src={require('../../static/images/goods/4896.png')}/>
            			</div>
            			<div className="goods-title">男士T恤上衣</div>
            			<div className="goods-price-box">
            				<span className="goods-price">¥ 3290.00</span>
            				<span className="ico-cart"></span>
            			</div>
            			<span className="ico-collection"></span>
            		</div>
            		<div className="goods-box">
            			<div className="goods-img-box">
            				<img src={require('../../static/images/goods/512_G_1495493604567.png')}/>
            			</div>
            			<div className="goods-title">男士T恤上衣</div>
            			<div className="goods-price-box">
            				<span className="goods-price">¥ 3290.00</span>
            				<span className="ico-cart"></span>
            			</div>
            			<span className="ico-collection"></span>
            		</div>
            		<div className="goods-box">
            			<div className="goods-img-box">
            				<img src={require('../../static/images/goods/4896.png')}/>
            			</div>
            			<div className="goods-title">男士T恤上衣</div>
            			<div className="goods-price-box">
            				<span className="goods-price">¥ 3290.00</span>
            				<span className="ico-cart"></span>
            			</div>
            			<span className="ico-collection"></span>
            		</div>
            		<div className="goods-box">
            			<div className="goods-img-box">
            				<img src={require('../../static/images/goods/512_G_1495493604567.png')}/>
            			</div>
            			<div className="goods-title">男士T恤上衣</div>
            			<div className="goods-price-box">
            				<span className="goods-price">¥ 3290.00</span>
            				<span className="ico-cart"></span>
            			</div>
            			<span className="ico-collection"></span>
            		</div>
            	</section>
        	</section>
        )
    }
}

export default Recommend