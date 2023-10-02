<template>
    <div class="min-h-screen border-y-[1rem] bg-indigo-400 border-indigo-950 font-baloobhai text-white">
        <div class="container mx-auto mt-32 flex items-center justify-start flex-col gap-7">
          <div id="mover" class="move  h-fit flex items-center justify-center">
               <div id="shaker" class=" p-2 text-black shake transition-all">{{ message }}</div>
          </div>
          <input v-model="pass" type="text" class="mt-2 p-2 md:w-96 w-11/12 text-black  focus:outline-indigo-900 rounded-lg">
          <button class="flex items-center justify-center gap-4 h-8 bg-indigo-700 hover:bg-indigo-950 transition-all px-6 py-1 rounded-lg"> <Icon icon="fa6-solid:paper-plane"/> Send</button>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const pass = ref("")
const message = ref("What happened ?")

// warning shake anim 
watch(pass,(newV,oldV)=>{
    
    if(newV.length<=20)
    {
        document.getElementById("shaker").style.animationDuration = "0s";
        document.getElementById("mover").style.animationDuration = "0s";
        document.getElementById("shaker").classList.remove("blur-[1px]")
        document.getElementById("shaker").classList.remove("text-xl")
        document.getElementById("shaker").classList.remove("text-red-700")
        message.value="What happened ?"


    }else if(newV.length > 20)
    {
        document.getElementById("shaker").style.animationDuration = ".1s";
        document.getElementById("mover").style.animationDuration = ".1s";
        document.getElementById("shaker").classList.add("blur-[1px]")
        document.getElementById("shaker").classList.add("text-xl")
        document.getElementById("shaker").classList.add("text-red-700")
        message.value="Your message so long"
    }
})
</script>

<style >

.shake {
  animation: tilt-shaking infinite;
  animation-duration: 0s;
}
.move {
  animation: tilt-moving infinite alternate;
  animation-duration: 0s;
}
@keyframes tilt-shaking {
  0% { transform: rotate(0deg);  }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg);  }
}
@keyframes tilt-moving {
  0% { transform: translate(0 0);  }
  25% { transform: translate(-3px, 5px ); }
  50% { transform: translate(0 0); }
  75% { transform: translate(3px, -5px); }
  100% { transform: translate(0 0);  }
}
</style>