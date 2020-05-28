import Vue from 'vue'
import Router from 'vue-router'
// import Create from '@/components/pages/Create/template.vue'
// import Detail from '@/components/pages/Detail/template.vue'
// import Edit from '@/components/pages/Edit/template.vue'
// import Index from '@/components/pages/Index/template.vue'
// import Login from '@/components/pages/Login/template.vue'
// import My from '@/components/pages/My/template.vue'
// import Register from '@/components/pages/Register/template.vue'
// import User from '@/components/pages/User/template.vue'
import auth from '../store/modules/auth';
import store from '../store'

// window.store = store
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      // component: Index
      // 路由的懒加载
      component: () => import('@/components/pages/Index/template.vue')

    },
    {
      path: '/register',   
      // component: Register
      component: () => import('@/components/pages/Register/template.vue')
    },
    {
      path: '/create',
       // 用户必须是登录状态才能创建博客, meta为添加路由的元信息
      meta: {requiresAuth: true},
      // component: Create
      component: () => import('@/components/pages/Create/template.vue')
    },
    {
      path: '/detail/:blogId',
      // component: Detail
      component: () => import('@/components/pages/Detail/template.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/components/pages/Edit/template.vue'),
      // component: Edit
      // 用户必须是登录状态才能编辑，meta为添加路由的元信息
      meta: {requiresAuth: true}
    },
    {
      path: '/login',
      // component: Login
      component: () => import('@/components/pages/Login/template.vue')
    },
    {
      path: '/my',
      // 用户必须是登录状态才能创建查看我的详情信息，meta为添加路由的元信息
      meta: {requiresAuth: true},
      // component: My
      component: () => import('@/components/pages/My/template.vue')
    },
    {
      path: '/user/:userId',
      // component: User
      component: () => import('@/components/pages/User/template.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // some用于 to.matched匹配的数组含有meta.requiresAuth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
       // 不能用 store.getters.isLogin， 代替上面promise返回的 isLogin 
       //  getters中isLogin的值是true是默认的状态，而不是真实的登录状态
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router

