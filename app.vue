<template>
    <Suspense>
        <component :is="MyComponent" />
    </Suspense>
    <Suspense>
        <component :is="MyComponent1" v-if="false" />
    </Suspense>
    <MyComponent2 v-if="false"/>
</template>

<script setup>
const MyComponent = defineAsyncComponent(() =>
    import("@/components/MyComponent.vue")
);
const MyComponent1 = defineAsyncComponent(() =>
    import("@/components/MyComponent1.vue")
);

</script>
