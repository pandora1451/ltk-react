import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            stored : this.props.data
        }
    }
    render() {
        return (
        	<div>
    			{
    				this.state.stored
    				?<span className="ico-collection active"  onClick={this.unstore.bind(this)}></span>
    				:<span className="ico-collection" onClick={this.store.bind(this)}></span>
    			}
        	</div>
        )
    }
    store(){
        this.setState({stored:true})
    }
    unstore(){
        this.setState({stored:false})
    }

}

export default Item