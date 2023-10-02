<template>
    <div class="min-h-screen border-y-[1rem] bg-fuchsia-400 border-fuchsia-950 flex items-center justify-center flex-col text-white">
        <div class="container flex items-center justify-center flex-col mx-auto">
            <p class="text-6xl ml-2 md:ml-0 font-baloobhai mb-7"> Welcome <strong class="font-glassAntiqua">{{ user.name }}</strong></p>
        <p class="text-3xl ml-2 md:ml-0 font-baloobhai mb-7"> You have {{ user.links.length }} links in <strong @click="user.isPremium = !user.isPremium" class="text-outline-white-thin text-fuchsia-400 tracking-wider">{{ user.uid }}</strong></p>
        <!-- buttons start -->
        <div class="flex md:items-center md:justify-center  flex-row  items-start justify-start w-full md:gap-7 gap-1">
            <div>
                <button @click="goPage('/pricing')" class="px-3 h-8 md:w-44 w-full py-1 rounded-lg font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:arrow-up-thick"/>{{ user.isPremium ? 'Set Premium*' : 'Be a Premium*' }}</button>
                <p class="text-end md:mr-7 mr-auto text-xs">*See pricing page for more</p>
            </div>
            <div>
                <button @click="goPage('/profile/edit')" class="px-3 h-8 md:w-44 w-full py-1 rounded-lg font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:link"/>Edit Links</button>
                <p class="text-end md:mr-7 mr-auto text-xs">*Your limit {{ user.isPremium ? `${user.links.length} / 99` : `${user.links.length} / 10` }}</p>
            </div>
            
        </div>
        <div class="my-7 flex md:items-center md:justify-center items-start justify-center w-full md:gap-7 gap-4 flex-col md:flex-row">
            <button @click="goPage(`/${user.uid}`)" class="px-3 h-8  py-1 rounded-lg font-bold bg-fuchsia-950  md:w-52 w-11/12 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:user"/> Show Profile</button>
            <button @click="goPage(`/profile/me`)" class="px-3 h-8  py-1 rounded-lg font-bold bg-fuchsia-950  md:w-52 w-11/12 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:edit"/> Edit Profile</button>
        </div>
        <!-- buttons end -->
        </div>
        
        
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const {user} = useUserStore()

const router = useRouter()

const goPage = page =>{
    
    router.push(`${page}`)
}

</script>

<style scoped>

</style>