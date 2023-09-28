<template>
    <div class="min-h-screen border-y-[1rem] bg-cyan-400 border-cyan-950 font-baloobhai text-white ">
        <div class="container mx-auto pt-32 flex items-center justify-start flex-col gap-7 w-fit">
            <p class="text-6xl">Log in </p>
            <label for="loginemail" class="relative flex items-center justify-start h-10 ">
                <input v-model="loginForm.mail" class="px-3 bg-white h-12 pl-32 w-full md:w-96 rounded-lg peer focus:outline-2 leading-10 outline-cyan-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="email" id="loginemail" placeholder="your@mail.you">
                <p  class="absolute leading-10  w-28   h-full px-2 top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950 transition-all select-none">Email : </p>
            </label>
            <label for="loginpassword" class="relative flex items-center justify-start h-10 ">
                <input v-model="loginForm.password" class="px-3 bg-white h-12 pl-32 w-full md:w-96 rounded-lg peer focus:outline-2 leading-10 outline-cyan-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="password" id="loginpassword" placeholder="p4s5w0***">
                <p  class="absolute leading-10  w-28   h-full px-2 top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950 transition-all select-none">Password : </p>
            </label>
            <NuxtLink to="/signup" class="ml-auto cursor-pointer hover:underline hover:text-cyan-100 text-sm -mt-5 ">Dont you have linqrbell ? get quick...</NuxtLink>
            <button class="ml-auto bg-cyan-600 hover:bg-cyan-950 text-white px-4 py-1 rounded-full -mt-4">Log in</button>
        </div>
    </div>
</template>

<script setup>
const loginForm = reactive({
    mail:"",
    password:"",
})
</script>

<style scoped>

</style>