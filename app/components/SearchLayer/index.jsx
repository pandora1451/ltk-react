import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class SearchLayer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
        	this.props.searchShowState
            ?<section className="searchLayer">
            	<div className="search-header">
            		<div className="search-header-left">
            			<div className="input-box">
	            			<i className="icon-search"></i><input type="text" placeholder="搜索"/>
            			</div>
            		</div>
            		<div className="search-header-right" onClick={this.clickHandle.bind(this)}><span>取消</span></div>
            	</div>
            	<div className="search-hotSearch">
            		<div className="title">热搜</div>
            		<div className="list">
            			<span>美白液</span><span>美白液</span><span>护肤防晒</span><span>美白液</span><span>护肤防晒</span><span>美白液</span><span>护肤防晒</span>
            		</div>
            	</div>
            	<div className="search-history">
            		<div className="title">
            			<span className="left">搜索历史</span>
            			<span className="right">清空搜索历史</span>
            		</div>
            		<div className="list-box">
            			<div><span>美白液</span></div>
            			<div><span>护肤防晒</span></div>
            			<div><span>面膜</span></div>
            		</div>
            	</div>
            </section>
            :<h1>SearchLayerHide</h1>
        )
    }
    clickHandle(){
    	this.props.searchClick(false)
    }
}

export default SearchLayer