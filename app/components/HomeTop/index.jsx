import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import './style.less'

class HomeTop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    clickHandel(){
        this.props.searchClick(true);
    }
    render() {
        return (
            <section className="home-top-container clear-fix" data={this.props.searchShowState}>
            	<div className="home-top-left " onClick={this.clickHandel.bind(this)} >
            		<img src={require('../../static/images/icon/search01.png')}/>
            	</div>
                <Link to='/message/main'>
            	<div className="home-top-right">
            		<img src={require('../../static/images/icon/message01.png')}/>
            	</div>
                </Link>
                <div className="home-top-middle">
                    <img src={require('../../static/images/icon/index-title.png')}/>
                </div>
            </section>
        )
    }
}

export default HomeTop