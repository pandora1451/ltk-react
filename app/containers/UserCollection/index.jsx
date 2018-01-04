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
        	showType:'list',
            rightText:'编辑'
        }
    }
    render() {
        return (
        	<section className="user-collection-container">
        	<Header title="心愿单" type="backAndEdit" rightText={this.state.rightText} editClick={this.clickHandler.bind(this)}/>
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
        ?this.setState({showType:'edit'})
        :this.setState({showType:'list'})

        this.state.rightText == "编辑"
        ?this.setState({rightText:'完成'})
        :this.setState({rightText:'编辑'})
    }
}

export default UserCollection