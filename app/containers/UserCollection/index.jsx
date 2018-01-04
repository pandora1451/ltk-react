import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import CollectItem from './subpage/collectItem'

import './style.less'

class UserCollection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	showType:'list',//页面展示类型，是否是编辑
            rightText:'编辑',//头部右侧按钮
            titleShow:'心愿单',//页面标题
            currentGood:null
        }
    }
    render() {
        return (
        	<section className="user-collection-container">
        	<Header title={this.state.titleShow} type="backAndEdit" rightText={this.state.rightText} editClick={this.clickHandler.bind(this)}/>
        	<CollectItem popType={this.state.showType}/>
        	<CollectItem popType={this.state.showType}/>
            {
                this.state.showType == 'list'
                ?<div className="footer">
                    <div className="left">
                        <div>
                            <span className="yuan"></span>
                            <span>全选</span>
                        </div>
                    </div>
                    <div className="right">
                        <div>加入购物车</div>
                    </div>
                </div>
                :''
            }
            
        	</section>
        )
    }
    clickHandler(){
        this.state.showType=='list'
        ?this.setState({showType:'edit',titleShow:'编辑'})
        :this.setState({showType:'list',titleShow:'心愿单'})

        this.state.rightText == "编辑"
        ?this.setState({rightText:'完成'})
        :this.setState({rightText:'编辑'})

    }
}

export default UserCollection