<template>
  <div id="user">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username">
      <h3>{{user.username }}</h3>  
    </section>
    <section>
      <router-link v-for="blog in blogs" :key="blog.id" class="item" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">{{ splitDate(blog.createdAt).date }}</span>
          <span class="month">{{ splitDate(blog.createdAt).month }}月</span>
          <span class="year">{{ splitDate(blog.createdAt).year }}</span>
        </div>
        <div class="content-more">
          <h3>{{ blog.title }}</h3>
          <p>{{ blog.description }}</p>
        </div>
      </router-link>
    </section>
     <!-- elementUI分页组件 -->
    <section class="pagination">
       <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          current-page = page
          @current-change="onPageChange">
       </el-pagination>
    </section>
  </div>
</template>
<script src="./template.js"></script>
<style src="./template.css"></style>
