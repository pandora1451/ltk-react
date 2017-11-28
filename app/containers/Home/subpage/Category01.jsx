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
                        <div className="title"><span>个护</span></div>
                        <div className="info"><span>个护产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/2917.png')}/>
                            <img src={require('../../../static/images/goods/3451.png')}/>
                        </div>
                    </div>
                    <div>
                        <div className="title"><span>配饰</span></div>
                        <div className="info"><span>配饰产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/512_G_1495493604567.png')}/>
                            <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        </div>
                    </div>   
                </div>
                <div className="category01-bottom clear-fix">
                    <div>
                        <div className="title"><span>护肤</span></div>
                        <div className="info"><span>护肤产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/358_G_1493768502611.png')}/>
                        </div>
                    </div>
                    <div>
                        <div className="title"><span>美食</span></div>
                        <div className="info"><span>美食产品</span></div>
                        <div className="img-grid">
                            <img src={require('../../../static/images/goods/4896.png')}/>
                        </div>
                    </div>
                    <div>
                        <div className="title"><span>美妆</span></div>
                        <div className="info"><span>美妆产品</span></div>
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