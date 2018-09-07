/* eslint-disable */
// 该模块用来请求API网关
import axios from 'axios'
import { Message } from 'iview'


// create an axios instance
const service = axios.create({
  baseURL: process.env.API_ADDR, // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  }, 
  error => {
    // Do something with request error
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    // 1054表示需要重新登陆
    if (response.data.err_code == 1054) {
      Message.error({
        content: response.data.message,
        duration: 5 * 1000
      })
      setTimeout(function() {
        window.location.href = "/login"
      },600)
      return response
    }

    // 错误码不为0，代表发生了错误1
    if (response.data.err_code != 0) {
      Message.error({
        content: response.data.message+' : '+ response.data.err_code,
        duration: 3 * 1000
      })
      return response
    }
    return response
  },
  error => {
    Message.error({
      content: error.message,
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
