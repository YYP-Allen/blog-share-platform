<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
       <h1>知识分享</h1>
       <p>众分享博客社区</p>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div>
    </template>
    <template v-if="isLogin">
      <h1><router-link to="/">Just share</router-link></h1>
      <router-link to="/create"><i class="edit iconfont icon-edit"></i></router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="/my">我的信息</router-link></li>
          <!-- on开头的方法可以避免与vuex定义的方法重名 -->
          <li><a href="#" @click="onLogout">注销账号</a></li>
        </ul>
      </div>
    </template>
  </header>
</template>

<script>
// import auth from '@/api/auth'
// window.auth = auth

import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    // 用户信息，以及用户是否登录
    ...mapGetters(['isLogin', 'user'])
  },
  // 数据已经好了，但是还没有挂载和渲染
  created() {
    // 判断用户是否登录，返回一个promise对象
    this.checkLogin()
  },
  methods: {
    ...mapActions([
      'checkLogin',
      'logout'
    ]),
    onLogout() {
      this.logout()
    }
  }
}
</script>
  
<style scoped>
  @import url("../assets/common.css");

  .edit {
    font-size: 30px;
    color: #fff;
  }
  header {
    display: flex;
    padding-bottom: 20px;
  }
  /* 未登录状态header的样子 */
  header.no-login {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 200px;
    background-color:rgba(0, 0, 0, .3);
    background-image: url(http://ww1.sinaimg.cn/large/787b15a7gy1gf89dh2pf8j20sf0iy77m.jpg);
    background-size: cover;
    opacity: 0.85;
    color: #fff;
  }
  .no-login h1 {
    color: #fff;
    font-size: 35px;
    margin: 50px 0 0 0;
  }
  .no-login p {
    color: #fff;
    margin: 15px 0 0 0;
  }
  /* 登录状态header的样子 */
  header.login {
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: rgba(0, 153, 51, 1);
    background-color:#EB5424;
    color: #fff;
  }
  header.login h1 {
    margin: 0;
    padding: 0;
    font-size: 40px;
    flex: 1;
  }
  header.login h1 a {
    color: #fff;
  }
  header.login img.avatar {
    border: 1px solid #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;
  }
  header.login.edit {
    color: #333;
    font-size: 30px;
  }
  .btns {
    margin-top: 15px;
  }
  header .user {
    position: relative;
  }
  header .user > ul {
    position: absolute;
    background-color: #fff;
    display: none;
    left: 0;
    margin: 0;
    padding: 0;
    border: 1px solid #eaeaea;
  }

  header .user:hover ul {
    display: block;
    background-color: #999;
  } 
  header .user a {
    padding: 5px;
    display: block;
  }
  header .user  a:hover {
    /* display: block; */
    color: #fff;
  }
  /* 响应式 */
  @media (min-width: 750px) {
    /* header.no-login h1, */
    header.login h1
     {
     margin-left: 8%;
   }
   /* header.login .uesr {
     margin-right: 10%;
   } */
}
  @media (min-width: 850px) {
    /* header.no-login h1, */
    header.login h1
     {
     margin-left: 8%;
   }
   /* header.login .user {
     margin-right:12%; 
   } */
  }
</style>


   
