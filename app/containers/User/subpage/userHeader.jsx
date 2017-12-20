import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class UserHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="user-header-container">
            	<span className="icon-setthing-container clear-fix" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-setthing" ></i>
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

export default UserHeader