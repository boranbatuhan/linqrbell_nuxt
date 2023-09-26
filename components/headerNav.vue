<script setup>

const { x, y } = useWindowScroll()
const showHeader=ref(true)
const route =useRoute().name
const router =useRouter()
console.log('route :>> ', route);

router.beforeResolve((to, from, next) => {
    if(to.name =='profile-edit')
    {
        showHeader.value=false
    }
    else{
        showHeader.value=true
    }
    next()
})

const scrollTop=()=>{
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>

<template>
    <div>
        <div @click="scrollTop" class="w-8 h-8 border border-black select-none cursor-pointer bg-white rounded-full fixed -bottom-20 right-2 transition-all flex items-center justify-center" :class="{'bottom-6':y>=500}">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 448 512"><path fill="currentColor" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3L86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>    
        </div>

        <div v-if="showHeader" :class="{'!py-0 !px-0 !rounded-none !opacity-70':y>=300}" class=" headerContainer hover:!opacity-100  h-fit !pb-10 opacity-100 w-full   fixed top-0 z-[999] group px-16 py-10 mx-auto ">
            <div class="header-long transition-all group-hover:!mt-0" :class="{'!rounded-none ':y>=300, '-mt-32':y>=500}">
                <!-- home btn start-->
                <nuxt-link to="/">
                    <img class="w-8 h-8" src="~/assets/imgs/logo.png" draggable="false" loading="eager" alt="logo">
                </nuxt-link>
                <!-- home btn end-->

                <!-- labels btn start -->
                <nuxt-link to="labels"  activeClass="!border-black" class="border-y duration-500 hover:border-b-black border-transparent transition-all"  >

                    <p>Labels</p>
                </nuxt-link>
                <!-- labels btn end -->

                <!-- pricing btn start -->
                <nuxt-link to="/pricing" activeClass="!border-black" class="border-y duration-500 hover:border-b-black border-transparent transition-all" >
                    <p>Pricing</p>
                </nuxt-link>
                <!-- pricing btn end -->

                <!-- learn btn start -->
                <nuxt-link to="/learn" activeClass="!border-black" class="border-y duration-500 hover:border-b-black border-transparent transition-all" >
                    <p>Learn</p>
                </nuxt-link>
                <!-- learn btn end -->

                <!-- profile btn start -->
                <nuxt-link to="/profile" activeClass="!border-black" class="border-y duration-500 hover:border-b-black border-transparent transition-all ml-auto"  >
                    <p >Profile</p>
                </nuxt-link>
                <!-- profile btn end -->
                
                <!-- login btn start -->
                <nuxt-link to="/login" activeClass="!border-black" class="border-y duration-500 hover:border-b-black border-transparent transition-all ml-auto"  >
                    <button >Log in</button>
                </nuxt-link>
                <!-- login btn end -->
                
                <!-- signup btn start -->
                <nuxt-link to="/signup" activeClass="!border-black" class="border-y duration-500 hover:border-b-black border-transparent transition-all" >
                    <button class="relative">Sign up <strong class="font-bold text-xs absolute uppercase -top-2 -right-2 !opacity-100 text-outline-black-thin text-cyan-500 hue-anim">free</strong></button>
                </nuxt-link>
                <!-- signup btn end -->
            </div>
            <div class="header-dot group">
                <div class="w-8 h-8 shrink-0 ">
                        <img class="w-full h-full rotate-90" src="~/assets/imgs/logo.png" draggable="false" loading="eager" alt="logo">
                </div>
               <div class="header-dot-menu no-scrollbar">
                 <!-- home btn start-->
                 <nuxt-link to="/" class="mb-10 sticky top-0 bg-zinc-400 z-50  border-y-8 border-zinc-950" >
                    <div class="w-full h-full shrink-0">
                        <img class="w-full h-full rotate-90" src="~/assets/imgs/logo.png" draggable="false" loading="eager" alt="logo">
                    </div>
                </nuxt-link>
                <!-- home btn end-->

                <!-- labels btn start -->
                <nuxt-link class="flex items-center justify-center flex-col group/link relative border-y-8 w-full py-2 border-transparent hover:bg-zinc-700 hover:border-zinc-950 transition-all" to="labels">
                    <svg class="group-hover/link:text-cyan-400 transition-all relative" xmlns="http://www.w3.org/2000/svg" width="62" height="50" viewBox="0 0 576 512"><path fill="currentColor" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l218.6-101zm212.4 204.4l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l53.2-24.6l152 70.2a88.1 88.1 0 0 0 73.8 0l152-70.2zm-152 198.2l152-70.2l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0l-218.6-101c-8.5-4-13.9-12.5-13.9-21.8s5.4-17.9 13.9-21.8l53.2-24.6l152 70.2a88.1 88.1 0 0 0 73.8 0z"/></svg>
                    <p class="group-hover/link:text-pink-400 transition-all relative">Labels</p>
                </nuxt-link>
                <!-- labels btn end -->

                <!-- pricing btn start -->
                <nuxt-link class="flex items-center justify-center flex-col group/link relative border-y-8 w-full py-2 border-transparent hover:bg-zinc-700 hover:border-zinc-950 transition-all" to="/pricing">
                    <svg class="group-hover/link:text-cyan-400 transition-all relative" xmlns="http://www.w3.org/2000/svg" width="56" height="50" viewBox="0 0 576 512"><path fill="currentColor" d="M64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64v-64c35.3 0 64 28.7 64 64zM64 192v-64h64c0 35.3-28.7 64-64 64zm384 192c0-35.3 28.7-64 64-64v64h-64zm64-192c-35.3 0-64-28.7-64-64h64v64zm-224-32a96 96 0 1 1 0 192a96 96 0 1 1 0-192z"/></svg>
                    <p class="group-hover/link:text-pink-400 transition-all relative">Pricing</p>
                </nuxt-link>
                <!-- pricing btn end -->

                <!-- learn btn start -->
                <nuxt-link class="flex items-center justify-center flex-col group/link relative border-y-8 w-full py-2 border-transparent hover:bg-zinc-700 hover:border-zinc-950 transition-all" to="/learn">
                    <svg class="group-hover/link:text-cyan-400 transition-all relative" xmlns="http://www.w3.org/2000/svg" width="62" height="50" viewBox="0 0 640 512"><path fill="currentColor" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6c-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7c-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1zM128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4L128 408z"/></svg>
                    <p class="group-hover/link:text-pink-400 transition-all relative">Learn</p>
                </nuxt-link>
                <!-- learn btn end -->

                <!-- profile btn start -->
                <nuxt-link class="flex items-center justify-center flex-col group/link relative border-y-8 w-full py-2 border-transparent hover:bg-zinc-700 hover:border-zinc-950 transition-all" to="/profile">
                    <svg class="group-hover/link:text-cyan-400 transition-all relative" xmlns="http://www.w3.org/2000/svg" width="62" height="50" viewBox="0 0 576 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0a64 64 0 1 1-128 0zm256-32h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                    <p class="group-hover/link:text-pink-400 transition-all relative" >Profile</p>
                </nuxt-link>
                <!-- profile btn end -->
                
                <!-- login btn start -->
                <nuxt-link class="flex items-center justify-center flex-col group/link relative border-y-8 w-full py-2 border-transparent hover:bg-zinc-700 hover:border-zinc-950 transition-all" to="/login">
                    <svg class="group-hover/link:text-cyan-400 transition-all relative" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-40h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zm40-256a40 40 0 1 1 0 80a40 40 0 1 1 0-80z"/></svg>
                    <p class="group-hover/link:text-pink-400 transition-all relative" >Log in</p>
                </nuxt-link>
                <!-- login btn end -->
                
                <!-- signup btn start -->
                <nuxt-link class="flex items-center justify-center flex-col mb-32 group/link relative border-y-8 w-full py-2 border-transparent hover:bg-zinc-700 hover:border-zinc-950 transition-all" to="/signup">
                    <svg class="group-hover/link:text-cyan-400 transition-all relative" xmlns="http://www.w3.org/2000/svg" width="42" height="50" viewBox="0 0 448 512"><path fill="currentColor" d="M224 64c-44.2 0-80 35.8-80 80v48h240c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h16v-48C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1.8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64z"/></svg>
                    <p class="group-hover/link:text-pink-400 transition-all relative" >Sign up free</p>
                </nuxt-link>
                <!-- signup btn end -->
               </div>
            </div>
        </div>
    </div>
</template>

<style >
.headerContainer{
    @apply
    w-full h-fit fixed top-0 z-[999]  
    md:px-16 md:py-10 mx-auto
    px-0 py-4
    transition-all
}
.header-long{
    @apply
    bg-zinc-100
    border border-zinc-900 rounded-full
    px-8 py-4
    text-xl
    hidden md:flex  flex-row items-center justify-start
    gap-4
    font-baloobhai
    font-thin
    shrink-0
    
}
.header-dot{
    @apply
    bg-zinc-100
    border border-zinc-900 rounded-r-sm
    text-base
    font-baloobhai font-thin
    shrink-0
    h-fit w-fit p-1
    md:hidden block
    
}
.header-dot-menu{
    @apply
    bg-zinc-400 border-zinc-950 border-x-8 box-content
    h-screen w-32 overflow-y-auto
    fixed top-0 left-0
    flex items-center justify-start  flex-col gap-4  
    -translate-x-36 group-hover:translate-x-0 transition-all  
}


.hue-anim{
    -webkit-animation: filter-animation 3s ease-in-out alternate infinite;
  animation: filter-animation 3s ease-in-out alternate infinite;
}

@-webkit-keyframes filter-animation {
  0% {
    -webkit-filter: hue-rotate(0deg);
  }
  
  50% {
    -webkit-filter: hue-rotate(360deg);
  }
  
  100% {
    -webkit-filter: hue-rotate(0deg);
  }
}

@keyframes filter-animation {
  0%,100% {
    filter: hue-rotate(0deg);

  }
  
  50% {
    filter: hue-rotate(360deg);

  }
  

}


</style>