import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class ListItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
			<div className="goods">
				<img src={data.img} />
				<div className="goods-title"><span>{data.title}</span></div>
			</div>
        )
    }
}

export default ListItem



