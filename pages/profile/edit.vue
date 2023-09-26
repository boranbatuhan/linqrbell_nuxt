<template>
    <div class="min-h-screen border-y-[1rem] bg-fuchsia-400 border-fuchsia-950 flex items-end justify-start flex-col text-white">
        <p class="text-6xl ml-2 md:ml-0 font-baloobhai mb-7"> {{ user.isPremium ? `${user.links.length} / 99` : `${user.links.length} / 10` }} <strong class="font-glassAntiqua"> {{ user.name }}</strong></p>

        <!-- buttons start -->
        <div class="flex items-center justify-start flex-col mx-auto ">
            <button @click="goPage('/profile')" class="px-3 w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all">Save</button>
            <ul class="flex flex-col items-center justify-center gap-4 mt-7">
                <li v-for="(l,index) in user.links" :key="index" >
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
    // router.push(`${page}`)
}

</script>

<style scoped>

</style>