export const URL = 'http://150.95.108.49/api'
export const userInfo = JSON.parse(sessionStorage.getItem('userInfo')) || {}
console.log(userInfo, 'userInfo')
export const headers = { headers: {
    'Authorization': userInfo.token
   }
}
