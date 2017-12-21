import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class UserInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="user-info-container">
	            <h1>404 not found page info</h1>
        	</section>
        )
    }
}

export default UserInfo