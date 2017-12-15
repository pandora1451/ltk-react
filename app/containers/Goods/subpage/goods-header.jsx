import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import ShareIcon from '../../../components/ShareIcon'
import StoreIcon from '../../../components/StoreIcon'
import './style.less'

class GoodsHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div className="goods-header-container">
            	<span className="back-icon-container clear-fix" onClick={this.clickHandle.bind(this)}>
                    <i className="back-icon" ></i>
                </span>
                <ShareIcon></ShareIcon>
                <StoreIcon></StoreIcon>
                <div>{this.props.title}</div>
                <div className="gray-line"></div>
        	</div>
        )
    }
    clickHandle() {
        const backRouter = this.props.backRouter
        if (backRouter) {
            hashHistory.push(backRouter)
        } else {
            window.history.back()
        }
    }
}

export default GoodsHeader