<template>
    <div class="min-h-screen border-y-[1rem] bg-amber-400 border-amber-950 font-baloobhai text-white flex items-center justify-start">
        <div class="container mx-auto flex items-center justify-start flex-col gap-7">
            <p class="text-5xl">Supported Platforms</p>
            <!-- platform logos start -->
            <ul class="flex flex-wrap gap-4 p-4 items-start justify-start">
                <li v-for="(p,index) in platforms" :key="index" class="w-10 !cursor-default h-10 group relative hover:mx-4 mx-0 transition-all">
                    <Icon :icon="p=='custom' ? 'typcn:star-full-outline' : (p == 'portfolio' ? 'typcn:user' : `simple-icons:${p}`)"  class="w-full h-full transition-all group-hover:-translate-y-5" />
                    <span class="absolute px-3 py-1 bg-amber-950 rounded-lg opacity-0 group-hover:opacity-100 transition-all -bottom-4 left-1/2 -translate-x-1/2">{{ p }}</span>
                </li>
            </ul>
            <!-- platform logos end -->

            <nuxt-link to="/learn">
                <button class="px-6 py-1 h-8 bg-amber-800 hover:bg-amber-950 transition-all rounded-lg flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:message"/>Suggest a site</button>
            </nuxt-link>
        </div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const platforms = usePlatforms().getPlatforms

</script>

<style scoped>

</style>