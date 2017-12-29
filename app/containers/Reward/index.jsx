import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import './style.less'
class Reward extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	popShow:false
        }
    }
    render() {
        return (
        	<section className="reward-page-container">
        		<Header title="我的奖励" type="backAndPoints"/>
        		<div className="btn-box">
        			<div className="left">已分成</div>
        			<div className="right">待分成</div>
        		</div>
        		<div className="total-price-container">
        			<span className="tixian">提现 ></span>
        			<div>
        			<span>总额：</span><span>¥127443</span>
        			</div>
        		</div>
        		<div className="fans-box">
        			<div className="fans-item" onClick={this.orderClickHandel.bind(this)}>
        				<div className="right"><span>KFC1847124091824</span><i className="ico-right"></i></div>
        				<div className="left">
        					<img src={require("../../static/images/logo/ico_new_lipstick.png")}/><span className="level">1L</span>
        				</div>
        				<div className="middle">95.00</div>
        			</div>
        			<div className="fans-item" onClick={this.orderClickHandel.bind(this)}>
        				<div className="right"><span>KFC1847124091824</span><i className="ico-right"></i></div>
        				<div className="left">
        					<img src={require("../../static/images/logo/ico_new_lipstick.png")}/><span className="level">1L</span>
        				</div>
        				<div className="middle">95.00</div>
        			</div>
        			<div className="fans-item" onClick={this.orderClickHandel.bind(this)}>
        				<div className="right"><span>KFC1847124091824</span><i className="ico-right"></i></div>
        				<div className="left">
        					<img src={require("../../static/images/logo/ico_new_lipstick.png")}/><span className="level">1L</span>
        				</div>
        				<div className="middle">95.00</div>
        			</div>
        		</div>
        		{
        			this.state.popShow
        			?<div className="pop-container" onClick={this.closePopHandel.bind(this)}  ref="pop"  data-name="pop">
	        			<div className="pop-box">
	        				<div className="top">
	        					<img src={require("../../static/images/logo/ico_new_lipstick.png")}/><span className="userName">刘强东</span>
	        					<span className="userId">ID：11111421</span><span className="num">1</span>
	        				</div>
	        				<div className="middle">
	        					<img src={require("../../static/images/goods/357_G_1493767698760.png")}/>
	        					<div className="right">
	        						<div className="goods-name">韩国age20's爱敬气垫BB霜水光粉底膏遮瑕持久保...</div>
	        						<div className="price-box">
	        							<span className="title-price">价格：</span><span className="goods-price">¥ 326</span><span className="goods-num">x 2</span>
	        						</div>
	        					</div>
	        				</div>
	        				<div className="bottom">
	        					<span>订单号：KFC17361810</span>
	        				</div>
	        			</div>
        			</div>
        			:null
        		}
        		
        	</section>
        )
    }
    orderClickHandel(){
    	this.setState({'popShow':true})
    }
    closePopHandel(e){
    	if (e.target.dataset.name == "pop") {
    		this.setState({popShow:false})
    	}
    }
}

export default Reward