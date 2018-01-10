import { get } from '../get'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    /*const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr)*/
    
    const result = get('https://api.douban.com/v2/book/1220562')
    return result
}