import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PageFooter from '../../components/PageFooter'

import CatHeader from './subpage/cat-header'

import'./style.less'
class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <section className="category-page">
                <CatHeader></CatHeader>
                <div className="banner-box">
                    <img src={require('../../static/images/banner/banner-pinpai.png')}/>
                </div>
                <div className="hot-brand">
                    <div className="title">
                        <span>热门品牌</span>
                    </div>
                    <div className="list-box">
                        <div className="img-box">
                            <img src={require('../../static/images/logo/hot-pinpai01.png')} />
                        </div>
                        <div className="img-box">
                            <img src={require('../../static/images/logo/hot-pinpai02.png')} />
                        </div>
                        <div className="img-box">
                            <img src={require('../../static/images/logo/hot-pinpai03.png')} />
                        </div>
                        <div className="img-box">
                            <img src={require('../../static/images/logo/hot-pinpai01.png')} />
                        </div>
                        <div className="img-box">
                            <img src={require('../../static/images/logo/hot-pinpai02.png')} />
                        </div>
                        <div className="img-box">
                            <img src={require('../../static/images/logo/hot-pinpai03.png')} />
                        </div>
                    </div>
                </div>
                <PageFooter></PageFooter>
            </section>
        )
    }
}

export default Category