<template>
    <div class="link" :class="value.name">
        <!-- modal delete link  start -->
        <div v-if="isDelete" class="bg-inherit w-full h-full absolute top-0 left-0 z-50 flex items-center justify-center flex-wrap gap-x-4 ">
            <p class="w-full text-center mt-7">Do you want to delete</p>
            <button class="rounded-full w-1/3 border border-black h-fit py-1 text-white scale-100 hover:scale-110 transition-all shrink-0 bg-green-500">Yes</button>
            <button @click="isDelete=false" class="rounded-full w-1/3 border border-black h-fit py-1 text-white scale-100 hover:scale-110 transition-all shrink-0 bg-red-500">No</button>
        </div>
        <!-- modal delete link  end -->
        <!--  logo start -->
        <div class="logo ">
            <Icon :icon="value.name !='portfolio' ? `simple-icons:${value.name}` :'fa6-solid:id-card-clip'" class="w-full h-full" />
        </div>
        <!--  logo end -->
        <!-- info start -->
        <div class="flex items-start justify-center flex-col transition-all" >
            <p class="h-8 mt-2 text-center w-full">{{ value.label }}</p>
            <!-- edit start -->
            <div v-if="isEditting" class="flex items-start justify-center flex-col gap-2 text-black">
                <input class="px-3 py-1 ring-0 border rounded-full outline-transparent focus:outline-fuchsia-950 outline-2" type="text" name="link" placeholder="new link" id="link">
                <input class="px-3 py-1 ring-0 border rounded-full outline-transparent focus:outline-fuchsia-950 outline-2" type="text" name="label" placeholder="new label" id="label">
            </div>
            <!-- edit end -->
        </div>
        <!-- info end -->

        <!-- buttons start -->
        <div class="flex items-center justify-evenly flex-col">
            <!-- accept edit -->
            <div @click="isEditting = !isEditting" class="action hover:text-lime-500" >
            <Icon  :icon="isEditting ? 'typcn:tick' :'typcn:cog'" class="w-full h-full" />
            </div>
            <!-- discard edit -->
            <div  @click="isEditting = !isEditting" v-if="isEditting" class="action hover:text-rose-500" >
                <Icon icon="typcn:times" class="w-full h-full" />
            </div>

            <!-- delete -->
            <div @click="isDelete = !isDelete" v-if="isEditting" class="action hover:text-stone-200" >
                <Icon icon="typcn:trash" class="w-full h-full" />
            </div>
        </div>
        <!-- buttons end -->
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const isEditting = ref(false)
const isDelete = ref(false)
const editValues= reactive({
    link:"",
    label:""
})
defineProps({
    value:Object
})
</script>

<style>


/* BASE LINK */
.link{
    @apply
    border border-black rounded-full
    px-10 py-2
    flex items-center justify-between 
    md:min-w-[24rem] md:w-fit w-screen h-fit 
    scale-100 hover:scale-105 transition-all
    gap-4
    font-baloobhai 
    relative overflow-hidden
}

.logo{
    @apply
    hover:scale-125 scale-100 transition-all  h-8 aspect-square 
}
.action{
    @apply
    hover:scale-125 scale-100 transition-all  h-8 aspect-square
    flex items-center justify-center gap-2
}


/* ---------------LABELS------------------ */
/* GITHUB */
.github{
    @apply
    bg-zinc-900
}
/* LINKEDIN */
.linkedin{
    @apply
    bg-blue-900
}
/* youtube */
.youtube{
    @apply
    bg-red-900
}
/* PORTFOLIO */
.portfolio{
    @apply
    bg-amber-900
}
</style>