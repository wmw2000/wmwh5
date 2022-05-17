import axios from 'axios'
// import {Toast} from 'vant';
const request = axios.create({
  baseURL: 'https://test.cn',
  timeout: 60000, //设置超时一分钟
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 统一设置用户身份 token
  // Toast.loading({
  //   duration: 0,
  //   message: '加载中...',
  //   forbidClick: true,
  // });
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 相应拦截器
request.interceptors.response.use(function (response) {
  // 统一设置接口相应错误, 比如 token 过期失效, 服务端异常
  return response
}, function (error) {
  // Do something with response error
  // Toast('服务器开小差了~');
  return Promise.reject(error)
})

export default request