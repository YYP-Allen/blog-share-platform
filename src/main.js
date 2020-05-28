// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 一下两个为引入elementUI组件
import ElemmentUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'
// 事件格式的插件
import Util from '@/helpers/util'

Vue.config.productionTip = false

Vue.use(ElemmentUI)
Vue.use(Util)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 路由注册
  router,
  // vuex注册
  store,
  components: { App },
  template: '<App/>'
})
