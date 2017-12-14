import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getRecommendPageGoods } from '../../fetch/column/column'

import HeaderShare from '../../components/HeaderShare'
import LoadMore from '../../components/LoadMore'
import GoodsBox from '../../components/GoodsBox'
import './style.less'

class Column extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    render() {
    	let url = this.props.params.name;
    	var t = null;
    	switch(url){
    		case 'new':
    		t = "新品首发";
    		break;
    		case 'hot':
    		t = "人气最高";
    		break;
    		case 'best':
    		t = "精品好货";
    		break;
    		default:
    		t = "消息";
    	}
        return (
        	<section className="column-container">
        		<HeaderShare title={t}></HeaderShare>
        		<div className="banner-box">
        			<img src={require('../../static/images/banner/banner-xinpin.png')}/>
        		</div>
        		<div className="info-box">
        			<div className="left">
        				<div className="img-box">
        					<img src={require('../../static/images/logo/ico_new_lipstick.png')}/>
        				</div>
        			</div>
        			<div className="right">
        				<span>
        					我们从经济现象中获得灵感，创造了口红效应平台，致力于为顾客提供极具性价比，而又在非凡意义的商品。你会在平台上获得除了产品本身之外，更有意义的购物体验。口红效应的初衷是让每一位顾客都变得深入骨髓的精致。
        				</span>
        			</div>
        		</div>
        		<div className="goods-box-container">
        			{
                        this.state.data.length
                        ? <GoodsBox data={this.state.data}/>
                        : <div>加载中...</div>
                    }
                    {
                        this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : null
                    }
        		</div>
        	</section>
        )
    }

    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageData()
    }
    // 获取首页数据
    loadFirstPageData() {
        const result = getRecommendPageGoods(0)
        this.resultHandle(result)
    }
    
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

        const page = this.state.page
        const result = getRecommendPageGoods(page) 
        this.resultHandle(result)

        // 增加 page 技术
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }
    // 处理数据
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            this.setState({
                hasMore: hasMore,
                // 注意，这里将最新获取的数据，拼接到原数据之后，使用 concat 函数
                data: this.state.data.concat(data)
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('口红推荐页获取数据报错, ', ex.message)
            }
        })
    }
}

export default Column