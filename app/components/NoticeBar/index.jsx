import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class NoticeBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="notice-bar">
            	<div className="notice-sign">
            		<span>NOTICE</span>
            		<span>通知</span>
            	</div>
            	<div className="notice-title"><span>“2017年金砖国家峰会”期间平台服务调整通知</span></div>
            </section>
        )
    }
}

export default NoticeBar