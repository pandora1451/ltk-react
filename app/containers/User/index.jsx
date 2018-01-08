import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import PageFooter from '../../components/PageFooter'
import OrderList from './subpage/OrderList'
import UserHeader from './subpage/userHeader'
import UserBodyTop from './subpage/UserBodyTop'
import UserBodyMid from './subpage/UserBodyMid'
import UserBodyBottom from './subpage/UserBodyBottom'


import './style.less'
class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        return (
            <section className="user-page-container">
                <Header title="用户主页" backRouter="/" type = "setAndMessage"/>
                {/*<UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>*/}
                <UserBodyTop></UserBodyTop>
                <UserBodyMid></UserBodyMid>
                <UserBodyBottom></UserBodyBottom>
                <PageFooter/>
            </section>
        )
    }
    componentDidMount() {
        // 如果未登录，跳转到登录页面,If里面是否,改了记得改回来
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login')
        }
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
)(User)