<template>
  <div id="login">
    <div class="login_winodw">
      <h3>登录</h3>
      <div class="input_ct">
        <i class="iconfont icon-user"></i>
        <input v-model="username" type="text" placeholder="用户名">
      </div>
      <div class="input_ct">
        <i class="iconfont icon-password"></i>
        <input v-model="password" type="password" placeholder="密码" @keyup.enter="onLogin">
      </div>
      <div><input type="submit" value="登录" @click="onLogin"></div>
    </div>
    <div class="notice">没有账号?<router-link to="/register">注册新用户</router-link></div>
  </div>
</template>
<script src="./template.js"></script>
<style src="./template.css"></style>
