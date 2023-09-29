<template>
    <div class="min-h-screen border-y-[1rem] bg-blue-400 border-blue-950 font-baloobhai  text-blue-600">


    <div class="container mx-auto flex flex-col items-center justify-start my-7 p-2 font-baloobhai">
        <div @click="goHome()" class="w-6 h-6 absolute top-6 left-2 hover:w-10 hover:h-10 select-none cursor-pointer hover:rotate-45 transition-all">
            <img draggable="false" src="~~/assets/imgs/star.png" alt="starlogo" class="w-full h-full ">
       </div> 
        <ul class="py-10 flex justify-start gap-7 flex-col items-center">
            <!-- photo start -->
            <li class="flex items-center justify-center flex-col text-center gap-4">
                <div class="rounded-full border border-black bg-white  w-20 h-20"></div>
                <p class="text-5xl text-outline-black-thin  tracking-wider">{{ route.params.user }}</p>
            </li>
            <!-- photo end -->

            <!-- bio start -->
            <li class="w-80 text-sm text-center">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est quibusdam rerum ut impedit veritatis.</p>
            </li>
            <!-- bio end -->

            <!-- links start -->
            <li>
                <ul>
                    <li v-for="(link,index) in user.links" :key="index">{{ link.name }}</li>
                </ul>
            </li>
            <!-- links end -->
        </ul>
    </div>
</div>

</template>

<script setup>
const route = useRoute()
const router = useRouter()
const user = useUserStore().getUser

const goHome=()=>{
    router.push("/")
}
</script>

<style scoped>

</style>