<template>
    <div class="min-h-screen border-y-[1rem] bg-emerald-400 border-emerald-950 font-baloobhai text-white">
        <div class="container mx-auto flex items-start justify-center h-fit py-36 gap-4 flex-wrap">
            <!-- free plan start -->
            <div class="flex text-xl items-center justify-start flex-row flex-wrap  border-2 border-emerald-950 w-96 px-5 shrink-0  bg-emerald-300 text-emerald-950 rounded-lg py-10">
                <p class="text-3xl text-center w-full">Payment Information</p>
                <span class="w-10/12 mx-auto h-1 my-2 bg-gradient-to-r from-transparent via-emerald-950 to-transparent"></span>
                <label for="cardno" class=" my-3 relative flex items-center justify-start h-10 ">
                    <input v-model="card.no" @keydown.e.prevent  class="px-3 bg-white h-12 pl-32 w-full rounded-lg peer focus:outline-2 leading-10 outline-cyan-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="number" id="cardno" placeholder="5510 **** **** **** " maxlength="16">
                    <p  class="absolute leading-10  w-28   h-full px-2 top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950 transition-all select-none">Card No </p>
                </label>
                <label for="carddate" class=" my-3 relative flex items-center justify-start h-10 ">
                    <input v-model="card.date" @keydown.e.prevent  class="px-3 bg-white h-12 pl-32 w-1/2 md:w-48 rounded-lg peer focus:outline-2 leading-10 outline-cyan-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="number" id="carddate" placeholder="00/55" maxlength="4">
                    <p  class="absolute leading-10  w-28   h-full px-2 top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950 transition-all select-none">Exp. Date </p>
                </label>
                <label for="cardcv" class=" my-3 ml-auto relative flex items-center justify-start h-10 ">
                    <input v-model="card.ccv" @keydown.e.prevent  class="px-3 bg-white h-12 pl-20 w-1/2 md:w-32 rounded-lg peer focus:outline-2 leading-10 outline-cyan-400 transition-all placeholder:text-zinc-500 text-zinc-950 focus:text-zinc-500" type="number" id="cardcv" placeholder="012" maxlength="3" >
                    <p  class="absolute leading-10  w-16   h-full px-2 top-1/2 -translate-y-1/2 left-2 peer-focus:text-zinc-500 text-zinc-950 transition-all select-none">Ccv </p>
                </label>
                <button class="px-5 py-1 ml-auto bg-emerald-950 text-white rounded-full">Pay</button>
            </div>
            <!-- free plan end -->
          
        </div>
    </div>
</template>

<script setup>
const card = reactive({
    no:0,
    date:0,
    ccv:0
})
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>