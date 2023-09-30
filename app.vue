<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init()
}
);

</script>

<style>
*{
  scroll-behavior: smooth !important;
}


</style>
