import { get } from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}

export function getRecommendData(page) {
    const result = get('/api/recommend/' + page)
    return result
}

export function getNoticeList(page) {
    const result = get('/api/notice')
    return result
}