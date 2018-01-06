import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link, hashHistory } from 'react-router'

import ShareIcon from '../ShareIcon'
import HomeIcon from '../HomeIcon'
import './style.less'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }
    headerContent(){
        let type = this.props.type;
        let showtype = "";
        switch(type){
            case 'backAndShare'://后退分享
            return(
                <div>
                    <span className="back-icon-container clear-fix" onClick={this.clickHandle.bind(this)}>
                        <i className="back-icon" ></i>
                    </span>
                    <ShareIcon></ShareIcon>
                    <div className="title">{this.props.title}</div>
                    <div className="gray-line"></div>
                </div>
            );
            case 'backAndPoints'://后退三个点
            return(
                <div>
                    <span className="back-icon-container clear-fix" onClick={this.clickHandle.bind(this)}>
                        <i className="back-icon" ></i>
                    </span>
                    <span className="ico-points-container">
                        <i className="ico-points"></i>
                    </span>
                    <div className="title">{this.props.title}</div>
                    <div className="gray-line"></div>
                </div>
            );
            case 'msgHeader'://消息页面头部
            return(
                <div>
                     <span className="back-icon-container " onClick={this.clickHandle.bind(this)}>
                        <i className="back-icon" ></i>
                    </span>
                    <span className="share-icon-container">
                        标为已读
                    </span>
                    <div className="title">消息</div>
                    <div className="gray-line"></div>
                </div>
            );
            case 'backAndEdit'://返回和编辑
            return(
                <div>
                     <span className="back-icon-container " onClick={this.clickHandle.bind(this)}>
                        <i className="back-icon" ></i>
                    </span>
                    <span className="edit-text-container" onClick={this.editClickHandle.bind(this)}>
                        {this.props.rightText}
                    </span>
                    <div className="title">{this.props.title}</div>
                    <div className="gray-line"></div>
                </div>
            );
            case 'backAndRule'://返回和规则
            return(
                <div>
                     <span className="back-icon-container " onClick={this.clickHandle.bind(this)}>
                        <i className="back-icon" ></i>
                    </span>
                    <span className="edit-text-container">
                        规则
                    </span>
                    <div className="title">{this.props.title}</div>
                    <div className="gray-line"></div>
                </div>
            );
            case 'setAndMessage'://个人中心头部，设置和消息
            return(
                <div className="">
                    <div className="right">
                        <Link to='/message/main'>
                            <div className="message-box">
                                <img src={require('../../static/images/icon/message01.png')}/>
                            </div>
                        </Link>
                    </div>
                    <span className="icon-setthing-container clear-fix" onClick={this.clickSetHandle.bind(this)}>
                        <i className="icon-setthing" ></i>
                    </span>
                    <div className="title">{this.props.title}</div>
                    <div className="gray-line"></div>
                </div>
            );
            case 'msgAndEdit'://购物车，消息和编辑
            return(
                <div className="">
                    <div className="right">
                        <span className="edit-text">
                            编辑
                        </span>
                    </div>
                    <div className="left">
                        <Link to='/message/main'>
                            <div className="message-box">
                                <img src={require('../../static/images/icon/message01.png')}/>
                            </div>
                        </Link>
                    </div>
                    <div className="title">{this.props.title}</div>
                    <div className="gray-line"></div>
                </div>
            );
            case 'backAndHome'://设置头部，返回和回首页
            return(
                <div className="user-header-container">
                    <div className="right">
                    <HomeIcon></HomeIcon>
                    </div>
                    <span className="back-icon-container clear-fix" onClick={this.clickHandle.bind(this)}>
                        <i className="back-icon" ></i>
                    </span>
                    <div className="title">{this.props.title}</div>
                    <div className="gray-line"></div>
                </div>
            );
            default ://只有后退
            return(
                <div>
                    <span className="back-icon-container clear-fix" onClick={this.clickHandle.bind(this)}>
                        <i className="back-icon" ></i>
                    </span>
                    <div className="title">{this.props.title}</div>
                    <div className="gray-line"></div>
                </div>
            )
        };
        
    }
    render() {
        return (
            <div className="header-container">
            {
                this.headerContent()
            }
            </div>
        )
    }
    clickHandle() {
        const backRouter = this.props.backRouter
        if (backRouter) {
            hashHistory.push(backRouter)
        } else {
            window.history.back()
        }
    }
    clickSetHandle(){
         hashHistory.push('/user/set');
    }
    editClickHandle(){//收藏页点击编辑
        this.props.editClick();
    }
}

export default Header