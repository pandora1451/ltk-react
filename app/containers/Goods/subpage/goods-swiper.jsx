import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'
class GoodsSwiper extends React.Component {
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
           <section className="goods-swiper-container" >
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                       <div>
                            <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                       </div>
                    </div>
                    <div className="carousel-item">
                        <div>
                            <img src={require('../../../static/images/goods/358_G_1493768502611.png')}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div>
                            <img src={require('../../../static/images/goods/512_G_1495493604567.png')}/>
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

export default GoodsSwiper