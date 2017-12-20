import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import PageFooter from '../../components/PageFooter'
import OrderList from './subpage/OrderList'
import UserHeader from './subpage/userHeader'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        return (
            <div>
                {/*<Header title="用户主页" backRouter="/"/>*/}
                <UserHeader title="个人中心" backRouter="/"></UserHeader>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
                <PageFooter/>
            </div>
        )
    }
    componentDidMount() {
        // 如果未登录，跳转到登录页面,If里面是否,改了记得改回来
        if (this.props.userinfo.username) {
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