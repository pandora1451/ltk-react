import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class CartFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="cart-footer">
                <div className="left">
                    <div>
                        <span className="yuan"></span>
                        <span>全选</span>
                    </div>
                </div>
                <div className="right">
                    <div>去结算</div>
                </div>
                <div className="mid">
                	<span>总计：</span>
                	<span className="price">¥326</span>
                </div>
            </div>
        )
    }
}

export default CartFooter