import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import './style.less'
class Friends extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="friends-page-container">
				<Header title="伙伴列表" type="backAndRule"/>
        	</section>
        )
    }
}

export default Friends