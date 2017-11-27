import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeTop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="home-top-container clear-fix">
            	<div className="home-top-left ">
            		<img src={require('../../static/images/icon/search01.png')}/>
            	</div>
            	<div className="home-top-right">
            		<img src={require('../../static/images/icon/message01.png')}/>
            	</div>
            	<div className="home-top-middle">
            		<img src={require('../../static/images/icon/index-title.png')}/>
            	</div>
            </section>
        )
    }
}

export default HomeTop