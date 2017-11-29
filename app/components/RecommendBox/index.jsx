import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class RecommendBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="recommend-box">
				<div className="title"><span>为您推荐</span></div>
				<div className="goods-grid clear-fix">
					<div className="goods">
						<img src={require('../../static/images/goods/357_G_1493767698760.png')}/>
						<div className="goods-title"><span>日本城野医生收缩毛孔爽肤化妆水</span></div>
					</div>
					<div className="goods">
						<img src={require('../../static/images/goods/358_G_1493768502611.png')}/>
						<div className="goods-title"><span>日本城野医生收缩毛孔爽肤化妆水</span></div>
					</div>
					<div className="goods">
						<img src={require('../../static/images/goods/512_G_1495493604567.png')}/>
						<div className="goods-title"><span>日本城野医生收缩毛孔爽肤化妆水</span></div>
					</div>
					<div className="goods">
						<img src={require('../../static/images/goods/4896.png')}/>
						<div className="goods-title"><span>日本城野医生收缩毛孔爽肤化妆水</span></div>
					</div>
				</div>
        	</section>
        )
    }
}

export default RecommendBox