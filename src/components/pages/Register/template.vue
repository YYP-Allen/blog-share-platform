<template>
  <div id="register">
    <div class="register_winodw">
      <h3>注册</h3>
      <div class="input_ct">
        <i class="iconfont icon-user"></i>
        <input v-model="username" type="text" placeholder="用户名">
      </div>
      <div class="input_ct">
        <i class="iconfont icon-password"></i>
        <input v-model="password" type="password" placeholder="密码" @keyup.enter="onRegister">
      </div>
      <div><input type="submit" value="立即注册" @click="onRegister"></div>
    </div>
    <div class="notice">已有账号?<router-link to="/login">立即登录</router-link></div>
  </div>
</template>
<script src="./template.js"></script>
<style src="./template.css"></style>