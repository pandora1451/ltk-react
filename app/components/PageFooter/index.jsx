import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {IndexLink, Link, hashHistory } from 'react-router'

import './style.less'

class PageFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="pagefooter">
            	<div className="tabContainer">
                    <IndexLink to="/" activeClassName="active">
                        <span className="img-box home"></span>
                        <div><span>首页</span></div>
                    </IndexLink>
            	</div>
            	<div className="tabContainer">
            		<Link to="/category" activeClassName="active">
                        <span className="img-box category"></span>
	            		<div><span>分类</span></div>
            		</Link>
            	</div>
            	<div className="tabContainer">
	            	<Link to="/cart" activeClassName="active">
                        <span className="img-box cart"></span>
	            		<div><span>购物车</span></div>
	            	</Link>
	            </div>
            	<div className="tabContainer">
            		<Link to="/user" activeClassName="active">
                        <span className="img-box user"></span>
	            		<div><span>我的</span></div>
                    </Link>
            	</div>
            </section>
        )
    }
}

export default PageFooter