import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Sepecial extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="sepecial">
            	<div className="banner">
                    <img src={require('../../static/images/banner/1499300209828302315.png')}/> 
                </div>
                <div className="logo">
                    <img src={require('../../static/images/icon/ico_pink_arrow.png')}/> 
                </div>
                <div className="goods-grid">
                    <div className="goods">
                        <img src={require('../../static/images/goods/357_G_1493767698760.png')}/> 
                    </div>
                    <div className="goods-middle">
                        <img src={require('../../static/images/goods/512_G_1495493604567.png')}/> 
                    </div>
                    <div className="goods">
                        <img src={require('../../static/images/goods/358_G_1493768502611.png')}/> 
                    </div>
                </div>
            </section>
        )
    }
}

export default Sepecial