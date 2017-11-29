import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class RefreshAndSearchBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="rAndsBar">
				<i className="ico-up"></i><span className="more">上拉获取更多/</span>
				<span className="search">点击搜索商品</span>     		
        	</section>
        )
    }
}

export default RefreshAndSearchBar