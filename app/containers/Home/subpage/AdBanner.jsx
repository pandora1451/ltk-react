import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class AdBanner extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="ad-bannner">
            	<img src={require('../../../static/images/banner/yanwoxilie.png')}/>
            </section>
        )
    }
}

export default AdBanner