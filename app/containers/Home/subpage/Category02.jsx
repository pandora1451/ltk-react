import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Category01 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="category01 ">
            	<div className="category01-top clear-fix">
                    <div>
                        <div className="title"><span>母婴</span></div>
                        <div className="info"><span>母婴产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/2917.png')}/>
                            <img src={require('../../../static/images/goods/3451.png')}/>
                        </div>
                    </div>
                    <div>
                        <div className="title"><span>生活</span></div>
                        <div className="info"><span>生活产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/512_G_1495493604567.png')}/>
                            <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        </div>
                    </div>   
                </div>
                <div className="category01-bottom clear-fix">
                    <div>
                        <div className="title"><span>套装</span></div>
                        <div className="info"><span>套装产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/358_G_1493768502611.png')}/>
                        </div>
                    </div>
                    <div>
                        <div className="title"><span>饮品</span></div>
                        <div className="info"><span>饮品产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/4896.png')}/>
                        </div>
                    </div>
                    <div>
                        <div className="title"><span>爱宠</span></div>
                        <div className="info"><span>爱宠产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/3451.png')}/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Category01