<template>
    <div :class="user.theme" class="min-h-screen border-y-[1rem] font-baloobhai">


    <div class="container mx-auto flex flex-col items-center justify-start my-7 p-2 font-baloobhai">
        <div @click="goHome()" class="w-6 h-6 absolute top-6 left-2 hover:w-10 hover:h-10 select-none cursor-pointer hover:rotate-45 transition-all">
            <img draggable="false" src="~~/assets/imgs/star.png" alt="starlogo" class="w-full h-full ">
       </div> 
        <ul class="py-10 flex justify-start flex-col items-center ">
            <!-- photo start -->
            <li class="flex items-center justify-center w-full flex-col text-center gap-4 my-3 relative">
                <nuxt-link to="/profile">
                    <div class="h-6 w-6 absolute top-0 right-0 hover:text-white group">
                        <Icon icon="typcn:cog" class="w-full h-full scale-100 group-hover:scale-150 transition-all"/>
                    </div>
                </nuxt-link>
                <div class="rounded-full border border-black bg-white  w-20 h-20 p-2 overflow-hidden">
                    <img draggable="false" src="~~/assets/imgs/logo_big.png" alt="starlogo" class="w-full h-full ">
                    
                </div>
                <p class="text-5xl text-outline-black-thin  tracking-wider">{{ route.params.user }}</p>
            </li>
            <!-- photo end -->
            <li>
                <p class="text-sm tracking-wider">{{ user.name }}</p>
            </li>
            <!-- bio start -->
            <li class="w-80 text-sm text-center my-3">
                <p>{{ user.bio }}</p>
            </li>
            <!-- bio end -->

            <!-- links start -->
            <li>
                <ul>
                    <li v-for="(l,index) in user.links" :key="index" class="w-full flex items-center justify-center scale-100 hover:scale-105 transition-all my-1" >
                    <LinkTemplate :value="l"/> 
                </li>
                </ul>
            </li>
            <!-- links end -->
        </ul>
    </div>
</div>

</template>

<script setup>
import { Icon } from '@iconify/vue';

const route = useRoute()
const router = useRouter()
const user = useUserStore().getUser

const goHome=()=>{
    router.push("/")
}
</script>

<style scoped>

</style>