<template>
    <div class="min-h-screen border-y-[1rem] bg-fuchsia-400 border-fuchsia-950 flex items-center justify-center flex-col text-white">
        <div class="container flex items-center justify-center flex-col mx-auto">
            <div class="flex gap-2 md:flex-row flex-col w-full items-center justify-center">
                <p class="text-6xl ml-2 md:ml-0 font-baloobhai mb-7 w-full text-end "> Welcome </p>
                <p class="font-glassAntiqua text-6xl text-start ml-2 md:ml-0 mb-7 w-full truncate">{{ user.name }}</p>
            </div>
        <p class="text-3xl ml-2 md:ml-0 font-baloobhai mb-7"> You have {{ user.links.length }} links in <strong @click="user.isPremium = !user.isPremium" class="text-outline-white-thin text-fuchsia-400 tracking-wider">{{ user.uid }}</strong></p>
        <!-- buttons start -->
        <div class="flex md:items-center md:justify-center  flex-row  items-start justify-start w-full md:gap-7 gap-1">
            <div>
                <nuxt-link to="/pricing">
                    <button class="px-3 h-8 md:w-44 w-full py-1 rounded-lg font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:arrow-up-thick"/>{{ user.isPremium ? 'Set Premium*' : 'Be a Premium*' }}</button>
                </nuxt-link>
                <p class="text-end md:mr-7 mr-auto text-xs">*See pricing page for more</p>
            </div>
            <div>
                <nuxt-link to="/profile/edit">
                    <button class="px-3 h-8 md:w-44 w-full py-1 rounded-lg font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:link"/>Edit Links</button>
                </nuxt-link>
                <p class="text-end md:mr-7 mr-auto text-xs">*Your limit {{ user.isPremium ? `${user.links.length} / 99` : `${user.links.length} / 10` }}</p>
            </div>
            
        </div>
        <div class="my-7 flex md:items-center md:justify-center items-start justify-center w-full md:gap-7 gap-4 flex-col md:flex-row">
            <nuxt-link :to="`/${user.uid}`">
                <button class="px-3 h-8  py-1 rounded-lg font-bold bg-fuchsia-950  md:w-52 w-11/12 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:user"/> Show Profile</button>
            </nuxt-link>
            <nuxt-link to="/profile/me">
                <button class="px-3 h-8  py-1 rounded-lg font-bold bg-fuchsia-950  md:w-52 w-11/12 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:edit"/> Edit Profile</button>
            </nuxt-link>
        </div>
        <div class="mb-7 flex md:items-center md:justify-center items-start justify-center w-full md:gap-7 gap-4 flex-col md:flex-row">
            <nuxt-link to="/profile/qrcode">
                <button  class="px-3 h-8  py-1 rounded-lg font-bold bg-fuchsia-950  md:w-52 w-11/12 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="gg:square"/> QR Code</button>
            </nuxt-link>
        </div>
        <!-- buttons end -->
        </div>
        
        
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const {user} = useUserStore()

</script>

<style scoped>

</style>