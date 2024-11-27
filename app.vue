<template>
    <div>
        <Suspense>
            <template #default>
                <component :is="Welcome" />
            </template>
            <template #fallback>
                <div>Loading...</div>
            </template>
        </Suspense>
        <Welcome />
        <div style="height: 10000px"></div>
        <NuxtImg
            src="/image/deblured-cutty-fox.jpg"
            width="600"
            height="400"
            loading="lazy"
        />
    </div>
</template>
<script setup lang="ts">
const Welcome = defineAsyncComponent(() => import("~/components/Welcome.vue"));
</script>
