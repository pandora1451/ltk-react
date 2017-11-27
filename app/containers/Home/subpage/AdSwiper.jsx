import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class AdSwiper extends React.Component {
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
            <section className="ad-swiper-container" >
            	<ReactSwipe swipeOptions={opt}>
            		<div className="carousel-item">
                       <div>
                       		<img src={require('../../../static/images/banner/1499300209828302315.png')}/>
                       </div>
                    </div>
                    <div className="carousel-item">
                        <div>
                        	<img src={require('../../../static/images/banner/1499300209828302315.png')}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div>
                        	<img src={require('../../../static/images/banner/1482349378904871371.png')}/>
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
            </section>
        )
    }
}

export default AdSwiper