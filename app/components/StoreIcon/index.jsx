import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class StoreIcon extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <span className="store-icon-container">
                    <i className="store-icon"></i>
            </span>
        )
    }
}

export default StoreIcon