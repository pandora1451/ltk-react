import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PageFooter from '../../components/PageFooter'
import Header from '../../components/Header'

import CartGoodsItem from './subpage/cartGoodsItem'
import './style.less'
class Cart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hadGoodsIn:true,
            showType:'list',//页面展示类型，是否是编辑
            rightText:'编辑',//头部右侧按钮
            titleShow:'购物车',//页面标题
            currentGood:null
        }
    }
    render() {
        return (
            <section className="cart-page-container">
                <Header title={this.state.titleShow} type="backAndEdit" rightText={this.state.rightText} editClick={this.clickHandler.bind(this)}/>
                {
                    this.state.hadGoodsIn
                    ?<div className="cart-goods-container">
                        <CartGoodsItem popType={this.state.showType}/>
                        <CartGoodsItem popType={this.state.showType}/>
                        <CartGoodsItem popType={this.state.showType}/>
                    </div>
                    :<div className="nogoods-container">
                        <img src={require('../../static/images/icon/cart-empty-back.png')}/>
                        <div className="title1">购物车竟然是空的</div>
                        <div className="title2">“赶紧，为自己添点什么吧～”</div>
                        <div className="cainixihuan-box">
                            <img src={require('../../static/images/icon/ico_shopyou_like.png')} />
                        </div>
                    </div>
                }
                <PageFooter/>
            </section>
        )
    }
    clickHandler(){
        this.state.showType=='list'
        ?this.setState({showType:'edit',titleShow:'管理购物车'})
        :this.setState({showType:'list',titleShow:'购物车'})

        this.state.rightText == "编辑"
        ?this.setState({rightText:'完成'})
        :this.setState({rightText:'编辑'})

    }
}

export default Cart