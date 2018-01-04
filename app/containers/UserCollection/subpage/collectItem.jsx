import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CollectItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	selected:false
        }
    }
    render() {
        return (
            <div className="collection-goods-box">
            	{
            		this.props.popType == 'list'
            		?<div className="btn-left" onClick={this.clickHandler.bind(this)}>
	        			<div className={this.state.selected?'yuan active':'yuan'}></div>
	        		</div>
            		:''
            	}
        		<div className="right" style=
        			{
        				this.props.popType == 'list'
        				?{marginLeft:'1rem'}
        				:{marginLeft:'0rem'}
        			}>
        			<div className="goods-img-box">
        				<img src={require('../../../static/images/goods/357_G_1493767698760.png')} />
        			</div>
        			<div className="goods-info-box">
        				<div className="goods-name">韩国age20's爱敬气垫BB霜水光粉底膏遮瑕持久保湿水粉霜 (黄调)</div>
        				<div className="goods-price"><span>价格：</span><span className="price">¥ 326</span></div>
        			</div>
        		</div>
                {
                    this.props.popType == 'list'
                    ?''
                    :<span className="del"></span>
                }
        	</div>
        )
    }
    clickHandler(){
    	this.state.selected?this.setState({selected:false}):this.setState({selected:true})
    }
}

export default CollectItem