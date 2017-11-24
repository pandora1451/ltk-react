import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PageFooter from '../../components/PageFooter'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
            	<h1>Category</h1>
                <PageFooter/>
            </div>
        )
    }
}

export default Category