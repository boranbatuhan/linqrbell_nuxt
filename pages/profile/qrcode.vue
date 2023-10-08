<template>
    <div class="min-h-screen border-y-[1rem] bg-fuchsia-400 border-fuchsia-950 flex items-center justify-start flex-col text-white">
        <div class="container flex items-center justify-start flex-col mx-auto border p-4 gap-4 ">
            <nuxt-link to="/profile" class="mr-auto">
                <button  class="px-3 h-8  py-1 rounded-lg font-bold bg-fuchsia-950  w-fit text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:arrow-back"/> Back </button>
            </nuxt-link>
            <!-- QR's area start -->
            <div v-auto-animate class="min-w-[330px] min-h-[330px] flex items-center justify-center">
            <qrcode :userlink="userlink" v-if="showing" />
            <!-- colors temp start -->
            <div v-if="!showing"  class="w-64 h-64  rounded-lg overflow-hidden p-2 flex items-center justify-center relative" :style="`background:${qrTemp.bgColor}`">
                <div class=" rounded-3xl w-16 h-16 absolute bottom-2 left-2 flex border-8 items-center justify-center" :style="{borderColor: qrTemp.rctColor}">
                    <div class="w-8 h-8 rounded-lg" :style="`background:${qrTemp.rctDotColor}`"></div>
                </div>
                <div class=" rounded-3xl w-16 h-16 absolute top-2 right-2 flex border-8 items-center justify-center" :style="{borderColor: qrTemp.rctColor}">
                    <div class="w-8 h-8 rounded-lg" :style="`background:${qrTemp.rctDotColor}`"></div>
                </div>
                <div class=" rounded-3xl w-16 h-16 absolute top-2 left-2 flex border-8 items-center justify-center" :style="{borderColor: qrTemp.rctColor}">
                    <div class="w-8 h-8 rounded-lg" :style="`background:${qrTemp.rctDotColor}`"></div>
                </div>

                <div class="w-full h-40 absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center gap-2 flex-wrap py-2" >
                    <div class="rounded-full w-3 h-3 m-4 " :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-5 m-4 " :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-3 m-4 opacity-0" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-3 m-4 " ></div>
                    <div class="rounded-full w-3 h-10 m-4" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-3 m-4" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-8 h-3 m-4" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-3 m-4" :style="`background:${qrTemp.dotColor}`"></div>
                </div>
                <div class="w-full h-40 absolute bottom-0 right-0 flex -rotate-180 items-center justify-center gap-2 flex-wrap py-2" >
                    <div class="rounded-full w-3 h-3 m-4 " :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-5 m-4" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-3 m-4 opacity-0" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-3 m-4 " ></div>
                    <div class="rounded-full w-3 h-10 m-4 opacity-0" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-3 m-4" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-8 h-3 m-4 opacity-0" :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-3 m-4" :style="`background:${qrTemp.dotColor}`"></div>
                </div>
                <div class="w-full h-20 absolute top-0 right-1/2 translate-x-1/2 flex  items-center justify-center gap-2 flex-wrap py-2" >
                    <div class="rounded-full w-3 h-3 m-4 " :style="`background:${qrTemp.dotColor}`"></div>
                    <div class="rounded-full w-3 h-5 m-4" :style="`background:${qrTemp.dotColor}`"></div>
                </div>

                <img draggable="false" src="../../logo.png" class="w-16 h-16 relative select-none" alt="dark" v-if="qrTemp.isDark" >
                <img draggable="false" src="../../logo-white.png" class="w-16 h-16 relative select-none" alt="dark" v-if="!qrTemp.isDark" >

            </div>
            <!-- colors temp end -->
            </div>
            <!-- QR's area end -->
            <button v-if="!showing"  @click="saveNewQR" class="px-3 h-8  py-1 rounded-lg font-bold bg-fuchsia-950  w-fit text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2">
                <Icon class="h-full w-fit"  icon="typcn:arrow-back"/> 
                <p>Save color</p> 
            </button>
            <!-- qr edit form start -->
            <div class="w-full flex items-center justify-center flex-row gap-6 font-baloobhai flex-wrap">
                <label class=" w-fit shrink-0 flex">Icon Color: 
                <label for="dark">
                    <img draggable="false" src="../../logo.png" class="w-8 h-8 transition-all select-none cursor-pointer" alt="dark" :class="{'-translate-y-2 opacity-100' : qrTemp.isDark==true,'-translate-y-0 opacity-40' : qrTemp.isDark==false}">
                    <input type="radio" name="isDark" v-model="qrTemp.isDark" class="hidden" :value="true" id="dark">
                </label>
                <label for="light">
                    <img draggable="false" src="../../logo-white.png" class="w-8 h-8 transition-all select-none cursor-pointer" alt="light" :class="{'-translate-y-2 opacity-100' : qrTemp.isDark==false,'-translate-y-0 opacity-40' : qrTemp.isDark==true}">
                    <input type="radio" name="isDark" v-model="qrTemp.isDark" class="hidden" :value="false" id="light">
                </label>
            </label>
                <label for="bgColor" class=" w-fit shrink-0">Background Color: 
                <input type="color" id="bgColor" class="" v-model="qrTemp.bgColor" >
            </label>
            <label for="dotColor" class=" w-fit shrink-0">Dot Color: 
                <input type="color" id="dotColor" v-model="qrTemp.dotColor" >
            </label>
            <label for="rctColor" class=" w-fit shrink-0">Rectangle Color: 
                <input type="color" id="rctColor" v-model="qrTemp.rctColor" >
            </label>
            <label for="rctDotColor" class=" w-fit shrink-0">Rectangle Dot Color: 
                <input type="color" id="rctDotColor" v-model="qrTemp.rctDotColor" >
            </label>

            </div>
            <!-- qr edit form end -->
        </div>

    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const user = useUserStore().getUser 
const userlink =ref(`https://linqrbell.com/qr/${user.uid}`)
const showing = ref (true)
const qrTemp = reactive({
    isDark:true,
    bgColor:"#ffffff",
    dotColor:"#b50084",
    rctColor:"#00bbc7",
    rctDotColor:"#b50084",
})

watch(qrTemp,()=>{
    showing.value=false
})

const saveNewQR=()=>{
    useUserStore().updateQr(qrTemp)
    showing.value = false
    setTimeout(() => {
    showing.value = true
    }, 300);

}

</script>

<style scoped>

</style>