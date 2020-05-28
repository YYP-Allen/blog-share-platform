<template>
  <div id="detail">
    <section class="user-info">
      <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
      <div class="detail-more">
        <h3>{{ title }}</h3>  
        <p><router-link :to="`/user/${user.id}`">{{ user.username }}</router-link>发布于{{ friendlyDate(createdAt) }}</p>
      </div>
    </section>
    <section class="article" v-html="markdown">
      {{ markdown }}
    </section>
  </div>
</template>
<script src="./template.js"></script>
<style src="./template.css"></style>