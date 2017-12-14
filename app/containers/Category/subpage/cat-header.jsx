import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import './style.less'
class CatHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="cat-header-container">
	        	<div className="right">
	            	<Link to='/message/main'>
		            	<div className="message-box">
		            		<img src={require('../../../static/images/icon/message01.png')}/>
		            	</div>
	                </Link>
	            </div>
	            <div className="left">
	            	<i className="icon-search" ref="icon"></i>
		            <div className="input-box">
		            	<input type="text" placeholder="品牌搜索" onChange={this.ChangeHandle.bind(this)}/>	
		            </div>
	            </div>
        	</div>
        )
    }
    ChangeHandle (e){
    	this.searchIconShow(e.target.value)
    }
    searchIconShow(a){
    	if (a) {
    		this.refs.icon.style.display="none";
    	}else{
    		this.refs.icon.style.display="inline-block";
    	}
    }
}

export default CatHeader