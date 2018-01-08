import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import MenuItem from '../../components/MenuItem'

import Header from '../../components/Header'
import './style.less'
class UserSet extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<section className="user-set-page">
        	<Header title="设置" type="backAndHome">
        	</Header>
        	<div className="set-list-box">
        		<div className="list1">
        			<MenuItem name="个人资料" ico="" num="" link="/user/info"/>
        			<MenuItem name="清关文件" ico="" num=""/>
        		</div>
        		<div className="list2">
        			<MenuItem name="推荐人信息" ico="" num="" parname="张三" parid="192726981"/>
        			<MenuItem name="管理退款账号" ico="" num="支付宝"/>
        		</div>
        		<div className="list3">
        			<MenuItem name="关于口红效应" ico="" num=""/>
        		</div>
        		<div className="logout-box">
        			<div className="btn-logout">退出账号</div>
        		</div>
        	</div>
        	</section>
        )
    }
}

export default UserSet