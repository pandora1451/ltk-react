import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getRecommendData } from '../../fetch/home/home'

import LoadMore from '../LoadMore'

import './style.less'

class RecommendBox extends React.Component {
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
        return (
        	<section className="recommend-box">
				<div className="title"><span>为您推荐</span></div>
				<div className="goods-grid clear-fix">
					<div className="goods">
						<img src={require('../../static/images/goods/357_G_1493767698760.png')}/>
						<div className="goods-title"><span>日本城野医生收缩毛孔爽肤化妆水</span></div>
					</div>
					<div className="goods">
						<img src={require('../../static/images/goods/358_G_1493768502611.png')}/>
						<div className="goods-title"><span>日本城野医生收缩毛孔爽肤化妆水</span></div>
					</div>
					<div className="goods">
						<img src={require('../../static/images/goods/512_G_1495493604567.png')}/>
						<div className="goods-title"><span>日本城野医生收缩毛孔爽肤化妆水</span></div>
					</div>
					<div className="goods">
						<img src={require('../../static/images/goods/4896.png')}/>
						<div className="goods-title"><span>日本城野医生收缩毛孔爽肤化妆水</span></div>
					</div>

					{
	                    this.state.data.length
	                    ? <ListCompoent data={this.state.data}/>
	                    : <div>{/* 加载中... */}</div>
	                }
	                {
	                    this.state.hasMore
	                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
	                    : ''
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
        const cityName = this.props.cityName
        const result = getRecommendData(0)
        this.resultHandle(result)
    }
    
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName
        const page = this.state.page
        const result = getRecommendData(page)
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
                // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
                data: this.state.data.concat(data)
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('首页推荐获取数据报错, ', ex.message)
            }
        })
    }
}

export default RecommendBox