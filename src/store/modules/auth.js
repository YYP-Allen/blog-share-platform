import auth from "@/api/auth"

// 用户登录、注册相关 Vuex模块
const state = {
  // 包括 id username avatar updateAt createAt
  user: null,
  isLogin: false
}
const getters = {
  // 方便在组件中直接拿到 state 的数据
  user: state => state.user,
  isLogin: state => state.isLogin
}
const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}
const actions = {
  login({ commit }, {username, password}) {
    // 返回一个promise对象
    return auth.login({username, password})
      .then(res => {
        commit('setUser', {user: res.data})
        // 能正常接收数据，肯定是正常的登录状态
        commit('setLogin', {isLogin: true})
      })
  },
  // 异步函数
  async register({ commit }, { username, password}) {
    // res 就是一个promise对象
    // await 必须等到promise执行之后，在把结果赋值给res
    let res = await auth.register({username, password})
    commit('setUser', {user: res.data})
    commit('setLogin', {isLogin: true})
    return res.data
  },
  // 用户是否退出登录
  async logout({ commit }) {
    await auth.logout()
    commit('setUser', {user: null})
    commit('setLogin', {isLogin: false})
  },
  // 检查当前用户是否登录
  async checkLogin({commit, state}) {
    // res异步会得到 isLogin
    if (state.isLogin) return true
    let res = await auth.getInfo()
    // 没有登录
    commit('setLogin', { isLogin: res.isLogin})
    if (!res.isLogin) return false
    // 已经登录
    commit('setUser', { user: res.data })
    return true
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}