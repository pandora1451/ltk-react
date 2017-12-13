import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class ShareIcon extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <span className="share-icon-container">
                    <i className="share-icon"></i>
            </span>
        )
    }
}

export default ShareIcon