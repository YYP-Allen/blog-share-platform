<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components: {
    // 对引入的组件注册,ES6对象的简写形式
    Header,
    Footer
  }
}
</script>

<style>
@import url("./assets/common.css");
/* 在线引入icontfont 项目 */
@import url("//at.alicdn.com/t/font_1798569_jvkv5u64bka.css");

html, body, #app {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
#main {
  position: relative;
  flex-grow: 1;
}
</style>
