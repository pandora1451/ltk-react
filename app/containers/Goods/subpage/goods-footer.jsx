import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class GoodsFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
           <div className="goods-footer-container">
                <div className="left"></div>
                <div className="right"></div>
           </div>
        )
    }
}

export default GoodsFooter