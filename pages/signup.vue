<template>
    <div class="min-h-screen border-y-[1rem] bg-lime-400 border-lime-950 font-baloobhai text-white">
        <div class="container mx-auto flex items-center justify-start flex-col pt-32">
            <p class="text-6xl">Sign up to Linqrbell</p>
            <p class="text-base tracking-widest">fill the blank</p>
            <div class=" flex my-4 items-center justify-center flex-col gap-4 w-fit">
                <!-- username input start -->
                <label for="userid" class="relative flex items-center justify-start h-10 ">
                    <input v-model="userForm.uid" class="px-3 bg-white h-12 pl-32 w-full md:w-96 rounded-lg peer focus:outline-2 leading-10 outline-lime-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="text" id="userid" placeholder="yourname">
                    <p :class="{'!text-zinc-500':userForm.uid=='', '!bg-white   ':userForm.uid !='',}" class="absolute leading-10  w-28 bg-lime-400  h-full px-2 top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950 transition-all select-none">linqrbell.com/</p>
                </label>
                <!-- username input end -->
                <!-- password input start -->
                <label for="userpassword" class="relative  flex items-center justify-start h-10 ">
                    <input v-model="userForm.password" class="px-3 bg-white h-12 pl-32 w-full md:w-96 rounded-lg peer focus:outline-2 outline-lime-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="text" id="userpassword" placeholder="******">
                    <p :class="{'!text-zinc-500':userForm.password=='', '!bg-white   ':userForm.password !='',}" class="absolute leading-10  w-28 bg-lime-400  h-full px-2 top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950 transition-all select-none">password : </p>
                </label>
                <!-- password input end -->
                <label for="usermail" class="relative  flex items-center justify-start h-10  " >
                    <input v-model="userForm.mail"   class="px-3 bg-white h-12 pl-32 w-full md:w-96 rounded-lg peer  focus:outline-2 outline-lime-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="text" id="usermail" placeholder="your@mail.you">
                    <p :class="{'!text-zinc-500':userForm.mail=='', '!bg-white   ':userForm.mail !='',}" class="absolute leading-10  w-28 bg-lime-400  h-full px-2 top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950 transition-all select-none">e-mail : </p>
                </label>
                <div class="h-10 w-full">

                    <label v-show=" userForm.uid.length>3 && userForm.mail.length>10 && userForm.password.length>8" for="useraccept" class="relative  flex items-center justify-start gap-4 w-full h-10 ">
                        <p>Accept all right</p>
                        <input v-model="userForm.accept" type="checkbox" id="useraccept">
                    </label>
                </div>
            </div>
            <button @click="signUp" :disabled="!userForm.accept" :class="{'text-xl !px-16':userForm.accept}" class="px-4 py-2 rounded-lg disabled:pointer-events-none disabled:saturate-0 bg-lime-950 scale-100 hover:scale-110 transition-all text-white">sign up</button>
        </div>

    </div>
</template>

<script setup>

const userForm = reactive({
    uid:"",
    password:"",
    mail:"",
    accept:false
})

const signUp =()=>{

}
</script>

<style scoped>

</style>