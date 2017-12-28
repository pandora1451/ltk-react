import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'
class MenuItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	hasparname : this.props.parname, //是否有上级
        	infoshow: false //是否展示上级信息
        }
    }
    render() {
        return (
            <div className="menu-item-box" style={this.state.infoshow?{height:'3.25rem'}:{height:''}} 
            	onClick={this.clickHandel.bind(this)}>
				{	
					this.props.ico
					?<div className="icon-box">
						<img src={require('../../static/images/icon/'+this.props.ico+'.png')} />
					</div>
					:''
				}
				<div className="right-box">
					<span className="num" style={this.props.fontColor?{color: this.props.fontColor}:null}>{this.props.num?this.props.num:''}</span>
				{	
					!this.state.infoshow
					?<i className="ico-right"></i>
					:<i className="ico-right rotate"></i>
				}
					
				</div>
				<div className="name" style={this.props.ico?{marginLeft: '1.4rem'}:{marginLeft: '0'}}>{this.props.name}</div>
				{	
					this.state.hasparname && this.state.infoshow
					?<div className="par-box">
						<span className="left">姓名：{this.props.parname}</span><span className="right">ID：{this.props.parid}</span>
					</div>
					:''
				}
			</div>
        )
    }

    clickHandel(){
    	if (this.state.hasparname && !this.state.infoshow) {
    		this.setState({infoshow: true})
    	}else if( this.state.hasparname && this.state.infoshow ){
    		this.setState({infoshow: false})
    	}
    	if(this.props.link){
    		hashHistory.push(this.props.link)
    	}
    }
}

export default MenuItem