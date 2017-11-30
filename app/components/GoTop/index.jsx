import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class GoTop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	isShow:false
        }
    }
    render() {
        return (
        	<div ref="myRef">
        	{	
        		this.state.isShow
	            ?<div className="go-top"  onClick={this.click.bind(this)}></div>
	            :<div></div>
        	}
        	</div>
        )
    }
    click(e){
    		document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    componentDidMount() {
        // 使用滚动时自动加载更多
        let timeoutId
        function callback() {
        	var top = document.documentElement.scrollTop;
            if (this.refs.myRef) {
        		if (top > 500) {
            		this.setState({isShow: true});
	            }else{
	            	this.setState({isShow:false});
	            }
        	}
        }
        window.addEventListener('scroll', function () {
        	if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback.bind(this), 50)
        }.bind(this), false);
    }

}

export default GoTop