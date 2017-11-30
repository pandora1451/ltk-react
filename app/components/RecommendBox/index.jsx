import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getRecommendData } from '../../fetch/home/home'

import LoadMore from '../LoadMore'
import RecommendComponent from '../RecommendList'
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
        	<section className="recommend-box" data-id={this.state.data.length}>
				<div className="title"><span>为您推荐</span></div>
					{
	                    this.state.data.length
	                    ?<RecommendComponent data={this.state.data}/>
	                    :<div> 加载中... </div>
	                }
	                {
	                    this.state.hasMore
	                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
	                    : ''
	                }
        	</section>
        )
    }
    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageData()
    }
    // 获取首页数据
    loadFirstPageData() {
        const result = getRecommendData(0)
        this.resultHandle(result)
    }
    
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })

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
                // 注意，这里将最新获取的数据，拼接到原数据之后，使用 concat 函数
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