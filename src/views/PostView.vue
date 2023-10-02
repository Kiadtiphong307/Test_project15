<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const items = ref([])
const url = ref('https://jsonplaceholder.typicode.com/posts')

function fetchPosts() {
  axios
    .get(url.value)
    .then((response) => {
      items.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(fetchPosts)
</script>

<template>
  <div>
    <h1>Post page</h1>
    <div>
      <input type="text" class="input_value" />
      <button @click="fetchPosts()">แสดงผลข้อมล</button>
      <ul v-for="(post, index) in items" :key="index">
        <li>UserId = {{ post.userId }}</li>
        <li>ID = {{ post.id }}</li>
        <li>Title = {{ post.title }}</li>
        <!-- <li>Body = {{ post.body }}</li> -->
        <li>
          <RouterLink :to="`/post/${post.id}`" target="_blank">อ่านต่อ</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
