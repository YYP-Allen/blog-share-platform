<template>
  <div id="my">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username">
      <h3>{{user.username }}</h3>  
    </section>
    <section>
      <!-- router-link -->
      <router-link class="item" v-for="blog in blogs" :key="blog.id"  :to="`/detail/${blog.id}`">
        <!-- <div class="item"> -->
          <div class="date">
            <span class="day">{{ splitDate(blog.createdAt).date }}</span>
            <span class="month">{{ splitDate(blog.createdAt).month }}月</span>
            <span class="year">{{ splitDate(blog.createdAt).year }}</span>
          </div>
          <div class="content-more">
            <h3>{{ blog.title }}</h3>
            <p>{{ blog.description }}</p>
            <div class="edit-dele">
              <router-link :to="`/edit/${blog.id}`">编辑</router-link>
              <!-- .prevent 阻止默认事件，不会让页面回到顶部 -->
              <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
            </div>
          </div>
        <!-- </div> -->
      </router-link>
    </section>
    <section class="pagination">
       <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :current-page = "page"
          @current-change="onPageChange">
       </el-pagination>
    </section>
  </div>
</template>
<script src="./template.js"></script>
<style src="./template.css"></style> 
