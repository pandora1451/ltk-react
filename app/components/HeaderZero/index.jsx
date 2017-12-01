import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class HeaderZero extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="headerZero"></div>
        )
    }
}

export default HeaderZero