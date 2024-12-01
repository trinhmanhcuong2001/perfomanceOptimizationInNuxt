<script lang="ts" setup>
const { $login } = useNuxtApp();
const credentials = reactive({
    username: "",
    password: "",
});

const handleLogin = () => {
    $login(credentials);
};
</script>

<template>
    <div class="">
        <h1>Login</h1>
        <h2>User: emilys</h2>
        <h2>Password: emilyspass</h2>
        <input type="text" v-model="credentials.username" />
        <input type="text" v-model="credentials.password" />

        <button @click="handleLogin">Login</button>
    </div>
</template>
