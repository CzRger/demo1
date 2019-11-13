import axios from 'axios'
import Qs from 'qs'
// 本工程中axios使用，均通过其API构建请求，可参考https://www.kancloud.cn/yunye/axios/234845
// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 20000 // request timeout
})
service.defaults.withCredentials = true

export default function ({ url, method = 'get', data = null }) {
  // 解决axios post请求Request Payload问题
  if (data && method.toLowerCase() === 'post') {
    // 对 data 进行任意转换处理
    const isDeep = Object.keys(data).findIndex(prop => {
      const type = Object.prototype.toString.call(data[prop])
      return type === '[object Object]' || type === '[object Array]' || type === '[object JSON]'
    }) !== -1

    if (isDeep) {
      // 嵌套data,对层JSON对象,提交时采用 Request Payload 方案
      // data 原样输出
    } else {
      // 非嵌套data，提交时采用Request FormData方案
      // data需要进行转换
      data = Qs.stringify(data)
    }
  }
  if (method.toLowerCase() === 'post') {
    return service({
      url,
      method,
      data
    })
  } else if(method.toLowerCase() === 'get') {
    return service({
      url,
      method,
      params: data
    })
  } else {
    throw "目前仅仅支持get/post方法"
  }
}
