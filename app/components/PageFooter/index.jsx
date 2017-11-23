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
            	<div>
            		<img src={require('../../static/images/tab/12x.png')}/>
            		<div><span>首页</span></div>
            	</div>
            	<div>
            		<img src={require('../../static/images/tab/12x.png')}/>
            		<div><span>首页</span></div>
            	</div>
            	<div>
            		<img src={require('../../static/images/tab/12x.png')}/>
            		<div><span>首页</span></div>
            	</div>
            	<div>
            		<img src={require('../../static/images/tab/12x.png')}/>
            		<div><span>首页</span></div>
            	</div>
            </section>
        )
    }
}

export default PageFooter