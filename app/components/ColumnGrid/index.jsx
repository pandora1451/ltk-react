import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import './style.less'
class ColumnGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="column-grid">
            	<div>
                    <Link to="/column/new">
                        <img src={require('../../static/images/icon/ico_home_fuc1.png')}/>
                		<div><span>新品首发</span></div>
                    </Link>
            	</div>
                <div>
                    <Link to="/recommend">
                	    <img src={require('../../static/images/icon/ico_home_fuc2.png')}/>
                		<div><span>活动专场</span></div>
                    </Link>
            	</div>
            	<div>
                    <Link to="/recommend">
                        <img src={require('../../static/images/icon/ico_home_fuc3.png')}/>
                		<div><span>口红推荐</span></div>
                    </Link>
            	</div>
            	<div>
                    <Link to="/column/hot">
                        <img src={require('../../static/images/icon/ico_home_fuc4.png')}/>
                		<div><span>人气最高</span></div>
                    </Link>
            	</div>
            	<div>
                    <Link to="/column/best">
                        <img src={require('../../static/images/icon/ico_home_fuc5.png')}/>
                		<div><span>精品好货</span></div>
                    </Link>
            	</div>
            </section>
        )
    }
}

export default ColumnGrid