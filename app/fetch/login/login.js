import { get } from '../get'
import { post } from '../post'

export function getlogin() {
    const result = get('https://api.douban.com/v2/book/1220562')
    return result
}

export function login(username,password) {
    const result = post('http://192.168.0.13//mobile/app/user_register.php?act=act_login', {
        username: username,
        password: password
    })
    return result
}
