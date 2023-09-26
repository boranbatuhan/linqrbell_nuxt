<template>
    <div class="min-h-screen border-y-[1rem] bg-fuchsia-400 border-fuchsia-950 flex items-center justify-center flex-col text-white">
        <p class="text-6xl ml-2 md:ml-0 font-baloobhai mb-7"> Welcome <strong class="font-glassAntiqua">{{ user.name }}</strong></p>
        <p class="text-3xl ml-2 md:ml-0 font-baloobhai mb-7"> You have {{ user.links.length }} links in <strong @click="user.isPremium = !user.isPremium" class="text-outline-white-thin text-fuchsia-400 tracking-wider">{{ user.uid }}</strong></p>
        <!-- buttons start -->
        <div class="flex md:items-center md:justify-center  md:flex-row flex-col  items-start justify-start w-full gap-7 ">
            <div>
                <button @click="goPage('/pricing')" class="px-3 w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all">{{ user.isPremium ? 'Set Premium Plan*' : 'Be a Premium*' }}</button>
                <p class="text-end mr-7 text-xs">*See pricing page for more</p>
            </div>
            <div>
                <button @click="goPage('/profile/edit')" class="px-3 w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all">Edit Links</button>
                <p class="text-end mr-7 text-xs">*Your limit {{ user.isPremium ? `${user.links.length} / 99` : `${user.links.length} / 10` }}</p>
            </div>
            
        </div>
        <!-- buttons end -->
        
    </div>
</template>

<script setup>
const {user} = useUserStore()

const router = useRouter()

const goPage = page =>{
    
    router.push(`${page}`)
}

</script>

<style scoped>

</style>