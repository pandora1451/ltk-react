import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class ArticleGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
    	const opt = {
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
            <section className="article-swiper-container" >
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
                        	<img src={require('../../../static/images/banner/1499300209828302315.png')}/>
                        </div>
                    </div>
            	</ReactSwipe>
            </section>
        )
    }
}

export default ArticleGrid