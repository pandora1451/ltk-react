import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import ShareIcon from '../../../components/ShareIcon'
import './style.less'
class UserHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="user-header-container">
                <div className="right">
	            	<Link to='/message/main'>
		            	<div className="message-box">
		            		<img src={require('../../../static/images/icon/message01.png')}/>
		            	</div>
	                </Link>
	            </div>
	            <span className="icon-setthing-container clear-fix" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-setthing" ></i>
                </span>
                <div className="title">{this.props.title}</div>
                <div className="gray-line"></div>
            </div>
        )
    }
     clickHandle() {
            hashHistory.push('/user/set')
    }
}

export default UserHeader