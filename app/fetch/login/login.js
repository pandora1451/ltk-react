import { get } from '../get'
import { post } from '../post'

export function getlogin(username) {
    const result = get('/api/orderlist/' + username)
    return result
}

export function login(username,password) {
    const result = post('http://localhost//mobile/app/user_register.php?act=act_login', {
        username: username,
        password: password
    })
    return result
}
