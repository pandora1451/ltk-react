import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { getRecommendPageGoods } from '../../fetch/column/column'

import Header from '../../components/Header'
import LoadMore from '../../components/LoadMore'
import GoodsBox from '../../components/GoodsBox'
import './style.less'

class Recommend extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0,//轮播图的

            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    render() {
    	const opt = {
            auto: 5000,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
        	<section className="recommend-page" >
        		<Header title="口红推荐"/>
            	<section className="notice-container">
            		<span className="notice-icon"></span>
            		<span className="notice-content">推荐商品每天10点更新</span>
            	</section>
            	<section className="recommend-banner clear-fix">
            		<div className="recommend-banner-left">
            			<div className="goods-title"><span>日本手造眼镜</span></div>
            			<div className="goods-brand"><span>品牌：</span><span>Yohji Yamamoto</span></div>
            			<div className="goods-info"><span>本产品平镜面树脂加工而成，精美而优雅。</span></div>
            		</div>
            		<div className="recommend-banner-right">
            		<ReactSwipe swipeOptions={opt}>
	            		<div className="carousel-item">
	                       <div>
	                       		<img src={require('../../static/images/goods/357_G_1493767698760.png')}/>
	                       </div>
	                    </div>
	                    <div className="carousel-item">
	                        <div>
	                        	<img src={require('../../static/images/goods/2917.png')}/>
	                        </div>
	                    </div>
	                    <div className="carousel-item">
	                        <div>
	                        	<img src={require('../../static/images/goods/4896.png')}/>
	                        </div>
	                    </div>
		            </ReactSwipe>
	            	<div className="index-container">
	                    <ul>
	                        <li className={this.state.index === 0 ? "selected" : ''}></li>
	                        <li className={this.state.index === 1 ? "selected" : ''}></li>
	                        <li className={this.state.index === 2 ? "selected" : ''}></li>
	                    </ul>
	                </div>
            		</div>
            	</section>
            	<section className="recommend-goods-grid clear-fix">
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
            	</section>
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

export default Recommend