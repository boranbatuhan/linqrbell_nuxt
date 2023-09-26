<template>
    <div  class=" w-full h-fit font-baloobhai ">
    <div class="link" :class="value.name">
        <div class="logo">
            <Icon :icon="value.name !='portfolio' ? `simple-icons:${value.name}` :'fa6-solid:id-card-clip'" class="w-full h-full" />
        </div>
        <div class="flex items-start justify-center flex-col transition-all">
            <p>{{ value.label }}</p>
            <div v-if="isEditting" class="flex items-start justify-center flex-col gap-2 text-black">
                <input class="px-3 py-1 ring-0 border rounded-full outline-transparent focus:outline-red-500" type="text" name="link" placeholder="new link" id="link">
                <input class="px-3 py-1 ring-0 border rounded-full outline-transparent focus:outline-red-500" type="text" name="label" placeholder="new label" id="label">
            </div>
        </div>

        <div class="action" >
            <Icon @click="isEditting = !isEditting" :icon="isEditting ? 'mdi:tick-outline' :'heroicons-outline:cog'" class="w-full h-full" />
        </div>
    </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const isEditting = ref(false)
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
    md:w-96 w-screen h-fit 
    scale-100 hover:scale-105 transition-all
}

.logo{
    @apply
    hover:scale-125 scale-100 transition-all  h-full aspect-square
}
.action{
    @apply
    hover:scale-125 scale-100 transition-all  h-full aspect-square
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