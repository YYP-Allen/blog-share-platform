// 发送接口的底层的API
// 封装一个功能更加完备的ajax
import axios from 'axios'
import { Message } from 'element-ui'

// Config Default
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 接口的路径，后面获取数据只需要传递相对路径，而不是把整个路径都传进去
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'

// 跨域请求的同时，发送cookie
axios.defaults.withCredentials = true

export default function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    // 查看axios文档，发送GET与发送POST请求所配置参数的情况
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    if (localStorage.token()) {
      axios.defaults.headers.common['Authorization'] = localStorage.token
    }
    // axios本身也支持Promise API
    axios(option).then(res => {
      console.log(res.data)
      // 登录成功
      if (res.data.status === 'ok') {
        if (res.data.token) {
          localStorage.token = res.data.token
        }
        resolve(res.data)
      } else {
        // this.$message.error('...')，elementUI 只在vue实例引入中使用，当前环境并没有引入
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({msg: '网络异常'})
    })
  })
}


