import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class PageFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="pagefooter">
            	<div className="tabContainer active">
            		<img src={require('../../static/images/tab/12x.png')}/>
            		<div><span>首页</span></div>
            	</div>
            	<div className="tabContainer">
            		<img src={require('../../static/images/tab/22@2x.png')}/>
            		<div><span>分类</span></div>
            	</div>
            	<div className="tabContainer">
            		<img src={require('../../static/images/tab/33@2x.png')}/>
            		<div><span>购物车</span></div>
            	</div>
            	<div className="tabContainer">
            		<img src={require('../../static/images/tab/44@2x.png')}/>
            		<div><span>我的</span></div>
            	</div>
            </section>
        )
    }
}

export default PageFooter