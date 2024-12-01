<script lang="ts" setup>
const { $getUser, $user } = useNuxtApp();

// console.log(auth);

await $getUser();

const userInfo: any = $user;
// console.log(userInfo.value);

</script>

<template>
    <div v-if="userInfo && userInfo.username">
        <h1>Thông tin: {{ userInfo.username }}</h1>
        <h2>First Name: {{ userInfo.firstName }}</h2>
        <h2>Last Name: {{ userInfo.lastName }}</h2>
        <h2>Maiden Name: {{ userInfo.maidenName }}</h2>
        <h2>Age: {{ userInfo.age }}</h2>
    </div>
    <div v-else>
        <p>Loading user data...</p>
    </div>
</template>
