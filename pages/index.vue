<script lang="ts" setup>
definePageMeta({
    middleware: "auth",
});
const Component = defineAsyncComponent(
    () => import("@/components/GetUser.vue")
);
</script>

<template>
    <div class="">
        <Suspense>
            <component :is="Component" />
        </Suspense>
    </div>
</template>
