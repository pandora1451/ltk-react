import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class UserSet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="user-set-page">
            <h1>404 not found page se1t</h1>
        	</section>
        )
    }
}

export default UserSet