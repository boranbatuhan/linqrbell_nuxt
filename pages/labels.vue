<template>
    <div class="min-h-screen border-y-[1rem] bg-amber-400 border-amber-950 font-baloobhai text-white">
        <div class="container mx-auto mt-32 flex items-center justify-start flex-col gap-7">
            <p class="text-5xl">Supported Platforms</p>
            <ul class="flex flex-wrap gap-4 p-4 items-start justify-start">
                <li v-for="(p,index) in platforms.getPlatforms" :key="index" class="w-10 h-10 group relative hover:mx-4 mx-0 transition-all">
                    <img draggable="false" v-if="p=='custom'" src="~~/assets/imgs/starwht.png" alt="customlogo" class="w-10 h-10 select-none transition-all group-hover:-translate-y-5">
                    <Icon :icon="`simple-icons:${p}`" class="w-full h-full transition-all group-hover:-translate-y-5" />
                    <span class="absolute px-3 py-1 bg-amber-950 rounded-full opacity-0 group-hover:opacity-100 transition-all -bottom-4 left-1/2 -translate-x-1/2">{{ p }}</span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const platforms = usePlatforms()

</script>

<style scoped>

</style>