<template>
    <div class="min-h-screen border-y-[1rem] bg-fuchsia-400 border-fuchsia-950 flex items-end justify-start flex-col text-white">
        <!-- delete modal start  -->
        <div v-if="deleteModal" class="w-screen h-screen backdrop-blur-sm flex items-center font-baloobhai justify-center fixed z-[999999]">
            <div class="w-80 h-32 flex items-center justify-center flex-col bg-white rounded-lg text-black border border-black drop-shadow-lg">
                <p class="text-xl">Do you want realy delete all ?</p>
                <p class="text-sm"> You have <strong class="underline text-base">{{ user.links.length }}</strong> saved links.</p>
                <div class="flex justify-between w-full px-6 gap-2 text-center mt-3">
                    <div @click="deleteModal = false" class="w-full px-2 py-1 rounded-lg bg-red-700 cursor-pointer hover:bg-red-500 transition-all text-white">no</div>
                    <div @click="deleteAll()" class="w-full px-2 py-1 rounded-lg bg-green-700 cursor-pointer hover:bg-green-500 transition-all text-white">yes</div>
                </div>
            </div>
        </div>
        <!-- delete modal end -->
        
        <p class="mr-2 text-6xl ml-2 md:ml-0 font-baloobhai "> {{ user.isPremium ? `${user.links.length} / 99` : `${user.links.length} / 10` }} <strong class="font-glassAntiqua"> {{ user.name }}</strong></p>
        <strong  class="mr-2  mb-7 text-outline-white-thin text-fuchsia-400 tracking-wider">{{ user.uid }}</strong>


        <!-- buttons start -->
        <div class="flex items-center justify-start flex-col mx-auto container">
            
            <ul class="flex flex-col items-center justify-center gap-4 my-7 w-full px-2" v-auto-animate>
                <li class="flex items-center justify-between w-full md:w-fit">
                    <button @click="goBack" class="px-3 h-8 w-full md:w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:arrow-back"/>Back</button>
                    <button @click="deleteModal=true" class="px-3 h-8 w-full md:w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:delete"/>Delete All</button>
                </li>
                <!-- ADD NEW START -->
                <li class="w-full ">
                   <linknew/>
                </li>
                <!-- ADD NEW END -->
                <li v-for="(l,index) in user.links" :key="index" class="w-full flex items-center justify-center     scale-100 hover:scale-105 transition-all" >
                    <linkedit :value="l"/> 
                </li>
            </ul>
        </div>
        <!-- buttons end -->
        
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';


const user = useUserStore().getUser
const userr = useUserStore()
const router = useRouter()
const deleteModal = ref(false)
const goPage = page =>{
    router.push(`${page}`)
}
const goBack = () =>{
    router.back()
}

const deleteAll=()=>{
    useUserStore().deleteAll()
    deleteModal.value=false
}


</script>

<style scoped>

</style>