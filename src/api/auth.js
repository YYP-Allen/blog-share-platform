// 注册、登录、注销登录、判断用户是否登录 的promise模块
import request from '@/helpers/request'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  GET_INFO: '/auth'
}
export default {
  register({username, password}) {
    return request(URL.REGISTER, 'POST', {username, password})
  },
  login({username, password}) {
    return request(URL.LOGIN, 'POST', {username, password})
  },
  // 用户注销登录
  logout() {
    localStorage.removeItem('token')
    return request(URL.LOGOUT)
  },
  // 获取当前登录的用户,判定当前的用户是否登录
  getInfo() {
    return request(URL.GET_INFO)
  }
}
