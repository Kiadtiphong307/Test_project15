<script setup>
import axios from 'axios'
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';

const route = useRoute();
const id = parseInt(route.params.id);

const items = ref({});

const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

function fetchPosts(){
    axios
    .get(url)
    .then((response) => {
        items.value = response.data;
    })
    .catch((err) => {
        console.log(err);
    });
}

onMounted(fetchPosts);
</script>

<template>
    <div>
        <h1> A_Post page </h1>
        <div>
            <ul>
                <li>UserId = {{ items.userId }}</li>
                <li>ID = {{ items.id }}</li>
                <li>Title = {{ items.title }}</li>
                <li>Body = {{ items.body }}</li>
            </ul>
        </div>
    </div>
</template>
