<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const { data, refresh } = await useFetch<any>("http://localhost:2000/posts", {
    headers: {
        Accept: "applicaiton/json",
    },
    getCachedData(key) {
        return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    },
});
// const data = await $fetch<any>("http://localhost:2000/posts");
</script>

<template>
    <div class="">
        <nuxt-link to="/">Return</nuxt-link>
        <h1>This is page to call API</h1>
        <ul v-for="post in data">
            <li>{{ post.id }}</li>
            <li>{{ post.title }}</li>
        </ul>
    </div>
</template>
