<script lang="ts" setup>
await $fetch("http://localhost:2000/posts", {
    method: "POST",
    body: { id: 3, title: "This is the title of posts 4", views: 1000 },
});
</script>

<template>
    <div class="">
        <nuxt-link to="/">Quay lai</nuxt-link>
    </div>
</template>

<style lang="scss" scoped></style>
