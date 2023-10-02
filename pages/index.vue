<template>
    <div>
        <!-- section1 + btn start-->
        <div    class="section-container pt-16 md:pt-0 bg-fuchsia-400 text-fuchsia-950 border-y-[1rem] border-y-fuchsia-950 ">
            <div  class="sub-container">
                <h1 class="text-5xl w-full text-right font-extrabold px-5 drop-shadow-md">Combine all links under one link.</h1>
                <p class="text-md w-full text-right font-normal px-3 drop-shadow-md">Templates of almost all popular platforms. Youtube, TikTok, Instagram, X, Github, Linkedin...</p>
                <div class="w-full flex my-4 items-center justify-center flex-col md:flex-row gap-4">
                    <label for="section-get" class="relative  ">
                        <input v-model="userid" class="px-3 py-2 pl-28 w-full md:w-56 rounded-lg peer focus:outline-2 outline-fuchsia-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="text" id="section-get" placeholder="yourname">
                        <p :class="{'!text-zinc-500':userid=='',}" class="absolute top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950">linqrbell.com/</p>
                    </label>
                    <nuxt-link to="/signup">
                        <button class="px-3 py-2 rounded-lg bg-fuchsia-950 text-fuchsia-300 mx-4 border hover:border-fuchsia-500 border-transparent transition-all">Collect Your Own</button>
                    </nuxt-link>
                </div>
            </div>
            <animFirst  data-aos="fade-right" class="img-container"/>
        </div>
        <!-- section1 + btn end -->

        
        <!-- section2 start -->
        <div    class="section-container bg-lime-400 text-lime-950 border-y-[1rem] border-y-lime-950">
            <div data-aos="fade-right"  class="sub-container">

                <h1 class="text-5xl w-full text-right font-extrabold px-5 drop-shadow-md">View all links on a single page with a beautiful interface.</h1>
                <p class="text-md w-full text-right font-normal px-3 drop-shadow-md">Custom unique designs for each platform.</p>
            </div>
            <animSecond data-aos="fade-right" class="img-container"/>

        </div>
        <!-- section2 end -->

        <!-- section3 start -->
        <div    class="section-container bg-cyan-400 text-cyan-950 border-y-[1rem] border-y-cyan-950">
            <div data-aos="fade-right" class="sub-container">

                <h1 class="text-5xl w-full text-right font-extrabold px-5 drop-shadow-md">Share your single linqrbell link.</h1>
                <p class="text-md w-full text-right font-normal px-3 drop-shadow-md">Show everyone your unique linqrbell showcase.</p>
            </div>
            <animThird data-aos="fade-right" class="img-container"/>
        </div>
        <!-- section3 end -->

        <!-- section3 start -->
<div   class="section-container bg-rose-400 text-rose-950 border-y-[1rem] border-y-rose-950">
            <div data-aos="fade-right" class="sub-container">

                <h1 class="text-5xl w-full text-right font-extrabold px-5 drop-shadow-md">Create QrCode, make sticker or business cards.</h1>
                <p class="text-md w-full text-right font-normal px-3 drop-shadow-md">Square, square, rectangle, square, rectangle, line, rectangle, dot, square...</p>
            </div>
            <animFourth data-aos="fade-right" class="img-container"/>
        </div>
        <!-- section3 end -->
        <!-- section3 start -->
        <div   class="section-container !items-start !justify-start !py-10 text-center bg-violet-500 text-violet-950 border-y-[1rem] border-y-violet-950">
            <div data-aos="fade-right" class=" w-full h-full py-5 px-2 md:px-10 bg-reds-500 flex items-center justify-center flex-col text-center gap-4">
                <p class="font-bold text-5xl break-words drop-shadow-md">Any questions?</p>
                <details class="w-full md:w-8/12 md:min-w-[600px] cursor-default bg-cyan-500 drop-shadow-lg rounded-lg break-words ">
                    <summary class="bg-cyan-500 text-4xl px-3 py-2 md:py-6 w-full cursor-pointer  rounded-lg drop-shadow-md">What is Linqrbell?</summary>
                    <p class="p-4  w-11/12 mx-auto">Linkerbell is a platform where you can easily share your collective links that you have customized in a beautiful interface in a single link to eliminate link confusion.</p>
                </details>
                <details class="w-full md:w-8/12 md:min-w-[600px] cursor-default bg-cyan-500 drop-shadow-lg rounded-lg break-words ">
                    <summary class="bg-cyan-500 text-4xl px-3 py-2 md:py-6 w-full cursor-pointer  rounded-lg drop-shadow-md">Why should I use it?</summary>
                    <p class="p-4  w-11/12 mx-auto">If you have more than one link on the same or many platforms, you can use it if you have difficulty sharing it. Even if you don't have any difficulties, this singularity will give you a lot of convenience.</p>
                </details>
                <details class="w-full md:w-8/12 md:min-w-[600px] cursor-default bg-cyan-500 drop-shadow-lg rounded-lg break-words ">
                    <summary class="bg-cyan-500 text-4xl px-3 py-2 md:py-6 w-full cursor-pointer  rounded-lg drop-shadow-md">Do I have a reason to use?</summary>
                    <p class="p-4  w-11/12 mx-auto">You can do link management through a single link. You can then use this link for your CV, add it to your social media bio, create a shopping collection, create music-movie lists, customize it for your business or event's necessity... You just have to think about more.</p>
                </details>
                <details class="w-full md:w-8/12 md:min-w-[600px] cursor-default bg-cyan-500 drop-shadow-lg rounded-lg break-words ">
                    <summary class="bg-cyan-500 text-4xl px-3 py-2 md:py-6 w-full cursor-pointer  rounded-lg drop-shadow-md">Why should I choose Linqrbell?</summary>
                    <p class="p-4  w-11/12 mx-auto">Most importantly, it's free. Unique designs, eye-catching templates, customizable and ready-made templates for any platform you can think of. We are shortening your work even more and with a QR code you will no longer need to share a link if you wish.</p>
                </details>

            </div>

        </div>
        <!-- section3 end -->

        <!-- section4 + btn start -->
        <div class="w-full pb-32 bg-orange-400 flex flex-col items-center justify-center gap-2 font-baloobhai border-y-[1rem] border-y-orange-950">
                <div class="flex items-center justify-center pb-16 py-8 gap-4 select-none w-full">
                    <img draggable="false" src="~~/assets/imgs/logo.png" class="w-8 h-8">
                    <p class="text-3xl font-glassAntiqua">Linqrbell</p>
                </div>
                <p class="text-5xl w-full text-center text-black/90 drop-shadow-md font-extrabold">Let <strong class="relative w-fit h-fit select-none font-glassAntiqua"> Linqrbell</strong> 's magic wand touch</p>
                <p class="text-4xl w-full text-center text-black/80 drop-shadow-md">Fix the complexity.</p>
                <div class="w-full flex my-4 items-center justify-center flex-col md:flex-row gap-4">
                    <label for="footer-get" class="relative  ">
                        <input v-model="userid" class="px-3 py-2 pl-28 w-full md:w-56 rounded-lg peer focus:outline-2 outline-orange-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="text" id="footer-get" placeholder="yourname">
                        <p :class="{'!text-zinc-500':userid=='',}" class="absolute top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950">linqrbell.com/</p>
                    </label>
                    <nuxt-link to="/signup">
                    <button class="px-3 py-2 rounded-lg bg-orange-500 mx-4 border hover:border-orange-950 border-transparent transition-all">Collect Your Own Linqrbell</button>
                    </nuxt-link>
                 </div>
            </div>
        <!-- section4 + btn end -->

        <!-- section5 + btn start -->
     
            <div class="w-full p-10  h-fit bg-teal-400 flex flex-col items-center justify-center gap-2 font-baloobhai border-y-[1rem] border-y-teal-950">
                <div class="md:w-fit w-full p-10 px-0 md:px-20 my-10 rounded-3xl bg-grad bg-hue-anim flex items-center justify-center  gap-4 select-none  ">
                    <img src="~~/assets/imgs/logo.png" class="w-16 md:w-40 h-16 md:h-40">
                    <p class="text-4xl md:text-9xl font-glassAntiqua drop-shadow-md">Linqrbell</p>
                </div>

                
                <p class="text-4xl w-full text-center text-black/90 drop-shadow-md">You Have Reached the End</p>
                <p class="text-3xl w-full text-center text-black/90 drop-shadow-md">What will you do now ?</p>
                <div class="w-full flex my-4 items-center justify-center flex-col md:flex-row gap-10 md:gap-4">
                    <nuxt-link to="/login">
                        <button class="px-3 py-1 text-xl rounded-lg  text-black bg-teal-300 drop-shadow-lg mx-4 border hover:border-teal-950 border-transparent transition-all flex items-center justify-center gap-2 h-12"><Icon class="h-full w-fit"  icon="typcn:key"/>I'm already unique</button>
                    </nuxt-link>
                    <nuxt-link to="/signup">
                        <button class="px-3 py-1 text-xl rounded-lg  text-black bg-teal-300 drop-shadow-lg mx-4 border hover:border-teal-950 border-transparent transition-all flex items-center justify-center gap-2 h-12"><Icon class="h-full w-fit"  icon="typcn:lock-open"/>I want to be unique</button>
                    </nuxt-link>

                </div>
            </div>
        <!-- section5 + btn end -->
        
        <!-- footer start -->
        <myfooter/>
        <!-- footer end -->


    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const userid = ref("")
</script>

<style scoped>

.bg-hue-anim{
    -webkit-animation: filter-animation 8s infinite;
  animation: filter-animation 8s infinite;
}
.bg-grad{
    background-image: linear-gradient(30deg, #FF0071 17%, #ffffff 46%, #00D6FF 73%);

box-shadow:  -8px 8px 40px #FF0071,
             8px -8px 40px #00D6FF;

}


@-webkit-keyframes filter-animation {
  0% {
    -webkit-filter: hue-rotate(0deg);
  }
  
  50% {
    -webkit-filter: hue-rotate(100deg);
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
    filter: hue-rotate(100deg);

  }
  

}



.section-container{
    @apply
    z-50 
    w-full min-h-[100dvh] shrink-0 
    flex items-center justify-center
    gap-10 md:gap-2
    flex-col md:flex-row
    even:flex-col-reverse even:md:flex-row-reverse
    pt-4 md:pt-0
    font-baloobhai
    
}
.sub-container{
    @apply
    flex items-center justify-center flex-col
    basis-full md:basis-1/2 h-64 w-full
}

.img-container{
    @apply
    basis-full md:basis-1/2 
    w-full md:h-64 h-full
    !scale-75 md:!scale-100
    
}


/* the rest is just for esthetics */

summary {
  display: block;
}
@media (min-width: 768px) {
    summary::after {
        float: right;        
      margin-left: auto;
      content: '▶️';
      transition: 0.2s;
    }
    
    details[open] summary::after {
      transform: rotate(90deg);
    }
    summary::after {
      margin-left: 1ch;
      display: inline-block;
      content: '▶️';
      transition: 0.2s;
    }
    
    details[open] summary::after {
      transform: rotate(90deg);
    }


}
</style>