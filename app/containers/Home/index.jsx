import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import PageFooter from '../../components/PageFooter'
import HomeTop from '../../components/HomeTop'
import NoticeBar from '../../components/NoticeBar'
import Ad from './subpage/Ad'
import AdSwiper from './subpage/AdSwiper'
import List from './subpage/List'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="app">
                <HomeTop/>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <AdSwiper/>
                <NoticeBar/>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
                <PageFooter/>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
