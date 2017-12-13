import { get } from '../get'


export function getRecommendPageGoods(page){
	const result = get('/api/recommend-goods-list/' + page)
    return result
}