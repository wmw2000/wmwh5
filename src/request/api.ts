import Axios from './axios'

const api:any = {
    login: '/login/info'
}
export function postItem(datas: any, url: string) {
    return Axios({
        url: api[url] || url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: datas,
    });
}
export function getItem(datas: any, url: string) {
    return Axios({
        url: api[url] || url,
        params: datas,
        method: 'GET',
    });
}
//上传文件
export function postForm(datas: any, url: string) {
    return Axios({
        url: api[url] || url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded', //设置请求头请求格式form
        },
        data: datas,
    });
}