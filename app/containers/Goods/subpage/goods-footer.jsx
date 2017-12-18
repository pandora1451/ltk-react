import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class GoodsFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
           <div className="goods-footer-container">
                <div className="right">
                    <div className="jiaru">加入购物车</div>
                    <div className="buynow">立即购买</div>
                </div>
                <div className="left">
                    <div className="kefu" onClick={this.props.showP}><img src={require('../../../static/images/icon/ico_goods_kefu.png')}/></div>
                    <div className="shuxian"></div>
                    <div className="gouwuche"><img src={require('../../../static/images/icon/ico_goods_cart.png')}/></div> 
                </div>
           </div>
        )
    }
}

export default GoodsFooter