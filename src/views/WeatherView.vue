<script setup>
import axios from 'axios'
import { ref, onMounted } from "vue";


const items = ref({});
const lat =ref("18.898717557848094");
const long =ref("99.01328945051456");
const apikey =ref("6fa40b3083d5909e56cfd230f54817a5");

const url = ref(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat.value}&lon=${long.value}&appid=${apikey.value}&units=metric`);




function fetchPosts(){
    axios
    .get(url.value)
    .then((response) => {
        items.value = response.data;
        console.log(items.value)
    })
    .catch((err) => {
        console.log(err);
    });
}

onMounted(fetchPosts);
</script>
<template>
    <div>
        <h1> ข้อมูล 5 วัน</h1>
        <div v-for="(i,index) in items.list" :key="index">
        {{ index+1 }}
        dt = {{ i.dt }}
        temp = {{ i.main.temp }}
        "main" : {{ i.weather[0].main }}
        "description" : {{ i.weather[0].description }}
        "icon" : {{ i.weather[0].icon }}
        
        </div>
    </div>
</template>

<style scoped>
</style>