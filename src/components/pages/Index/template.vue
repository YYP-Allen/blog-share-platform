<template>
  <div id="index"> 
    <section class="blogs-post">
      <div v-for="blog in blogs">
        <router-link class="item" :to="`/detail/${blog.id}`">
          <figure class="avatar">
            <img :src="blog.user.avatar" :alt="blog.user.username">
            <figcaption>{{ blog.user.username }}</figcaption>
          </figure>
          <div class="content">
            <h3>{{ blog.title }}<span>{{ friendlyDate(blog.createdAt) }}</span></h3>
            <p>{{ blog.description }}</p>
          </div>
        </router-link>
      </div>
    </section>
    <!-- elementUI分页组件 -->
    <section class="pagination">
       <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="onPageChange">
       </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.css"></style>