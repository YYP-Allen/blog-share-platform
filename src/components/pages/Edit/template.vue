<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="limit_info">限30个字</p>
    <h3>博客简介</h3>
    <el-input v-model="description "type="textarea" :autosize="{ minRows: 2, maxRows: 5}"></el-input>
    <p class="limit_info">限100个字</p>
    <h3>博客详情</h3>
    <el-input v-model="content" type="textarea" :autosize="{ minRows: 3, maxRows: 35}"></el-input>
    <p class="limit_info">限500个字</p>
    <p class="showAtIndex">
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <button @click="onEdit" type="button">确定</button>

  </div>
</template>
<script src="./template.js"></script>
<style src="./template.css"></style>