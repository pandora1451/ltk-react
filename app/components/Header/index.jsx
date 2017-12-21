import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from 'react-router'

import './style.less'

class HeaderShare extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            showtype:this.props.ricon
        }
    }
    render() {
        return (
            <div className="header-container">
                <span className="back-icon-container clear-fix" onClick={this.clickHandle.bind(this)}>
                    <i className="back-icon" ></i>
                </span>
                <div className="title">{this.props.title}</div>
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

export default HeaderShare