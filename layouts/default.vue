<template>
    <nav>
        <button v-if="!$user" @click="navigateTo('/login')">Đăng nhập</button>
        <button v-if="$user" @click="$logout">Đăng xuất</button>
    </nav>
    <slot />
</template>

<script setup>
const { $logout, $user } = useNuxtApp();

</script>
