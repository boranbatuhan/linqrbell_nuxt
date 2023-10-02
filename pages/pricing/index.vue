<template>
    <div class="min-h-screen flex items-center justify-center border-y-[1rem] bg-emerald-400 border-emerald-950 font-baloobhai text-white ">
        <div class="container mx-auto flex items-center justify-center h-full  gap-4 flex-wrap">
            <!-- free plan start -->
            <div class="flex text-xl items-center justify-start flex-col border-2 border-emerald-950 w-80 shrink-0 hover:bg-emerald-500 bg-emerald-300 text-emerald-950 hover:text-white rounded-lg py-10">
                <p class="text-4xl">Free Plan</p>
                <span class="w-10/12 h-1 bg-gradient-to-r from-transparent via-emerald-950 to-transparent"></span>
                <p>0$ - Free</p>
                <p>QR shortcut</p>
                <p>10 links</p>
                <p>10 labels</p>
                <p>No validate</p>
            </div>
            <!-- free plan end -->
            <!-- premium plan start -->
            <nuxt-link to="/pricing/upgrade" class="flex text-xl items-center justify-start flex-col border-2 border-emerald-950 w-80 shrink-0 hover:bg-emerald-500 bg-emerald-300 text-emerald-950 hover:text-white group rounded-lg py-10 relative">
                
                <span class="absolute -top-8 -right-8 w-20 h-20">
                    <div class="w-full h-full relative flex items-center justify-center">
                        <Icon icon="typcn:starburst"  class="w-20 h-20 absolute"/>
                        <p class="text-white rotate-12 group-hover:!text-emerald-950 relative">Best</p>
                    </div>
                </span>
                
                <p class="text-4xl">Premium Plan</p>
                <span class="w-10/12 h-1 bg-gradient-to-r from-transparent via-emerald-950 to-transparent"></span>
                <p>10$ - Once</p>
                <p>QR shortcut</p>
                <p>99 links</p>
                <p>30+ labels</p>
                <p>Valid account</p>
                
            </nuxt-link>
            <!-- premium plan end -->
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>

<style scoped>

</style>