<template>
    <div class="link" :class="value.name">

        <!-- modal save link  start -->
        <div v-if="isSave" class="bg-inherit  w-full h-full absolute top-0 left-0 z-50 flex items-center justify-center flex-wrap gap-x-4 ">
            <div  class="action text-lime-500" >
                <Icon  icon="typcn:tick" class="w-full h-full" />
            </div>
            <p class="w-full text-center ">Do you want to save new values</p>
            <button @click="acceptSave" class="rounded-full w-1/3 border border-black h-fit py-1 text-white scale-100 hover:scale-110 transition-all shrink-0 bg-green-500">Yes</button>
            <button @click="isSave=false" class="rounded-full w-1/3 border border-black h-fit py-1 text-white scale-100 hover:scale-110 transition-all shrink-0 bg-red-500">No</button>
        </div>
        <!-- modal save link  end -->
        <!-- modal discard link  start -->
        <div v-if="isDiscard" class="bg-inherit  w-full h-full absolute top-0 left-0 z-50 flex items-center justify-center flex-wrap gap-x-4 ">
            <div class="action text-rose-500" >
                <Icon icon="typcn:times" class="w-full h-full" />
            </div>
            <p class="w-full text-center ">Do you want to discard changes</p>
            <button @click="acceptDiscard" class="rounded-full w-1/3 border border-black h-fit py-1 text-white scale-100 hover:scale-110 transition-all shrink-0 bg-green-500">Yes</button>
            <button @click="isDiscard=false" class="rounded-full w-1/3 border border-black h-fit py-1 text-white scale-100 hover:scale-110 transition-all shrink-0 bg-red-500">No</button>
        </div>
        <!-- modal discard link  end -->

        <!--  logo start -->
        <div class="logo ">
            
            <Icon :icon="value.name=='custom' ? 'typcn:star-full-outline' : (value.name == 'portfolio' ? 'typcn:user' : `simple-icons:${value.name}`)" class="w-full h-full" />
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
            <!-- open edit -->
            <div @click="isEditting = !isEditting" v-if="!isEditting" :class="{'hover:text-lime-500':isEditting}" class="action " >
                <Icon  icon="typcn:cog" class="w-full h-full" />
            </div>
            <!-- save edit -->
            <div @click="saveEdit" v-if="isEditting" :class="{'hover:text-lime-500':isEditting}" class="action " >
                <Icon  icon="typcn:tick" class="w-full h-full" />
            </div>
            <!-- discard edit -->
            <div  @click="discardEdit" v-if="isEditting" class="action hover:text-rose-500" >
                <Icon icon="typcn:times" class="w-full h-full" />
            </div>

        </div>
        <!-- buttons end -->
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const isEditting = ref(false)
const isSave = ref(false)
const isDiscard = ref(false)
const editValues= reactive({
    link:"",
    label:""
})
defineProps({
    value:Object
})


// save edit
const saveEdit=()=>{
    isSave.value=true
}
// discard edit
const discardEdit=()=>{
    isDiscard.value=true
}




// accept save edit
const acceptSave =()=>{
    isSave.value=false
    isEditting.value=false

}
// accept discard edit
const acceptDiscard =()=>{
    isDiscard.value=false
    isEditting.value=false

}

</script>

<style>


/* BASE LINK */
.link{
    @apply
    border border-black md:rounded-full rounded-md
    md:px-10 md:py-2 px-1 py-2
    flex items-center justify-between gap-4 
    max-w-[25rem]  h-fit  w-full

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


</style>