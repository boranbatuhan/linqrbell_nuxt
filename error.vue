<template>
    <div class="flex items-center font-baloobhai justify-start flex-col container mx-auto my-7">
        <img src="~~/assets/imgs/logo_big.png" alt="logobig" class="rotate-45 z-0">
        <div class="border-y-[1rem] bg-white border-red-950 h-96 w-full -mt-32 z-10 flex items-center justify-center flex-col gap-7 py-7">
            <p class="uppercase text-8xl text-red-950">error</p>
            <button @click="goHome" class="rounded-full bg-red-950 text-white uppercase px-4 py-2 relative group">
            <span class="absolute opacity-0 group-hover:opacity-100 duration-500 transition-all blur-2xl w-32 h-32 bg-red-950 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                <p class="relative">go back</p>
            </button>
        </div>
    </div>
</template>

<script setup>

const router = useRouter()

const goHome =()=>{

    router.push("/")
}
</script>

<style lang="scss" scoped>

</style>