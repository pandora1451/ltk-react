import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class MenuItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="menu-item-box">
				{this.props.ico
					?<div className="icon-box">
						<img src={require('../../static/images/icon/'+this.props.ico+'.png')} />
					</div>
					:''
				}
				<div className="right-box">
					<span className="num">{this.props.num?this.props.num:''}</span>
					<i className="ico-right"></i>
				</div>
				<div className="name" style={this.props.ico?{marginLeft: '1.4rem'}:{marginLeft: '0'}}>{this.props.name}</div>
			</div>
        )
    }
}

export default MenuItem