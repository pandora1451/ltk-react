import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 

import Header from '../../components/Header'
import HeaderZero from '../../components/HeaderZero'
import LoginComponent from '../../components/Login'
import RegisterBox from './subpage/register-box'
import LoginBox from './subpage/login-box'
import './style.less'
class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true,
            todo:'register'
        }
    }
    render() {
        return (
            <section className="login-page-container">
                <HeaderZero title="登录/注册"></HeaderZero>
                {/*<Header title="登录"/>*/}
                <div className="change-nav">
                    <span className="login-btn" onClick={this.whattodo.bind(this,'login')}>登录</span>
                    <span className="register-btn" onClick={this.whattodo.bind(this,'register')}>注册</span>
                </div>
                {
                    this.state.todo == 'login'
                    ?<LoginBox></LoginBox>
                    :<RegisterBox></RegisterBox>

                }
                <div className="wx-login">
                    <div className="title"><span className="gray-line"></span><span>第三方验证方式</span><span className="gray-line"></span></div>
                    <div className="btn-box">
                        <div className="btn-login">微信</div>
                    </div>
                </div>
                <div className="xieyi">
                        <span className="left">验证并登录及同意</span><span className="right">《口红效应用户协议》</span>
                </div>
                {
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                    ? <div>{/* 等待中 */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </section>
        )
    }

    //wangw
    //切换页面状态
    whattodo(num){
        this.setState({
            todo:num
        })
    }

    //下面是imooc
    componentDidMount() {
        // 判断是否已经登录
        this.doCheck()

    }
    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }
    // 处理登录之后的事情
    loginHandle(username) {
        // 保存用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        const params = this.props.params
        const router = params.router
        if (router) {
            // 跳转到指定的页面
            hashHistory.push(router)
        } else {
            // 跳转到用户主页
            this.goUserPage()
        }
    }
    goUserPage() {
        hashHistory.push('/User')
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)