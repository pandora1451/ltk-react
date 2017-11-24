import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Message extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <span>MessagePage</span>
        )
    }
}

export default Message