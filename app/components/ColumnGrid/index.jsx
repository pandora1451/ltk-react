import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class ColumnGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="column-grid">
            	<div><img src={require('../../static/images/icon/ico_home_fuc1.png')}/>
            		<div><span>新品首发</span></div>
            	</div>
            	<div><img src={require('../../static/images/icon/ico_home_fuc2.png')}/>
            		<div><span>活动专场</span></div>
            	</div>
            	<div><img src={require('../../static/images/icon/ico_home_fuc3.png')}/>
            		<div><span>口红推荐</span></div>
            	</div>
            	<div><img src={require('../../static/images/icon/ico_home_fuc4.png')}/>
            		<div><span>人气最高</span></div>
            	</div>
            	<div><img src={require('../../static/images/icon/ico_home_fuc5.png')}/>
            		<div><span>精品好货</span></div>
            	</div>
            </section>
        )
    }
}

export default ColumnGrid