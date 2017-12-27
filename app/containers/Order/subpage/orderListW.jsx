import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class OrderListW extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="order-list-container">
                <div className="order-list-box">
                    <div className="top">
                        <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        <div className="goods-name">韩国age20's爱敬气垫BB霜水光粉底膏遮瑕持久保湿水粉霜 (黄调)</div>
                    </div>
                    <div className="gray-line"></div>
                    <div className="bottom">
                        <span className="btn-dfk">待付款</span>
                    </div>
                </div>
                <div className="order-list-box">
                    <div className="top">
                        <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        <div className="goods-name">韩国age20's爱敬气垫BB霜水光粉底膏遮瑕持久保湿水粉霜 (黄调)</div>
                    </div>
                    <div className="gray-line"></div>
                    <div className="bottom">
                        <span className="btn-yqx">已取消</span>
                    </div>
                </div>
                <div className="order-list-box">
                    <div className="top">
                        <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        <div className="goods-name">韩国age20's爱敬气垫BB霜水光粉底膏遮瑕持久保湿水粉霜 (黄调)</div>
                    </div>
                    <div className="gray-line"></div>
                    <div className="bottom">
                        <span className="btn-ckwl">查看物流</span><span className="btn-dsh">待收货</span>
                    </div>
                </div>
                <div className="order-list-box">
                    <div className="top">
                        <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        <div className="goods-name">韩国age20's爱敬气垫BB霜水光粉底膏遮瑕持久保湿水粉霜 (黄调)</div>
                    </div>
                    <div className="gray-line"></div>
                    <div className="bottom">
                        <span className="btn-zcgm">再次购买</span><span className="btn-ywc">已完成</span>
                    </div>
                </div>
                <div className="order-list-box">
                    <div className="top">
                        <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        <div className="goods-name">韩国age20's爱敬气垫BB霜水光粉底膏遮瑕持久保湿水粉霜 (黄调)</div>
                    </div>
                    <div className="gray-line"></div>
                    <div className="bottom">
                       <span className="btn-thz">退货中</span>
                    </div>
                </div>
                <div className="order-list-box">
                    <div className="top">
                        <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        <img src={require('../../../static/images/goods/357_G_1493767698760.png')}/>
                        <div className="goods-num">共2件</div>
                    </div>
                    <div className="gray-line"></div>
                    <div className="bottom">
                       <span className="btn-thz">退货中</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderListW