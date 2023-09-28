<template>
    <div>
        <p class="mt-32 text-5xl">{{ route.params.user }}</p>
    </div>
</template>

<script setup>
const route = useRoute()
console.log('user :>> ', route.params.user);
</script>

<style scoped>

</style>