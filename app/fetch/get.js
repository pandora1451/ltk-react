import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
  var result = fetch(url, {
      credentials: 'include',
      mode: "no-cors",
      headers: {
      	'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json, text/plain, */*'
      }
  })
  return result;
}
