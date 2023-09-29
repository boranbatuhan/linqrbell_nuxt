<template>
    <div class="min-h-screen border-y-[1rem] bg-fuchsia-400 border-fuchsia-950 flex items-end justify-start flex-col text-white">
        <p class="mr-2 text-6xl ml-2 md:ml-0 font-baloobhai "> {{ user.isPremium ? `${user.links.length} / 99` : `${user.links.length} / 10` }} <strong class="font-glassAntiqua"> {{ user.name }}</strong></p>
        <strong  class="mr-2  mb-7 text-outline-white-thin text-fuchsia-400 tracking-wider">{{ user.uid }}</strong>


        <!-- buttons start -->
        <div class="flex items-center justify-start flex-col mx-auto container">
            
            <ul class="flex flex-col items-center justify-center gap-4 my-7 w-full px-2" v-auto-animate>
                <li class="flex items-center justify-between w-full md:w-fit">
                    <button @click="goBack" class="px-3 w-full md:w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all">Back</button>
                    <button @click="goPage('/profile')" class="px-3 w-full md:w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all">Save</button>
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



const {user} = useUserStore()
const userr = useUserStore()
const router = useRouter()

const goPage = page =>{
    userr.addYoutube()
    router.push(`${page}`)
}
const goBack = () =>{
    router.back()
}

</script>

<style scoped>

</style>