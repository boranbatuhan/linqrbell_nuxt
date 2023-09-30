<template>
 <div class="link bg-fuchsia-900 mx-auto" :class="[{'border-dashed opacity-60 !border-4':openAdd==false,'border-solid opacity-100 !border':openAdd==true },selectedPlatform]">
    <div  v-if="isAdd" class="bg-inherit  w-full h-full absolute top-0 left-0 z-50 flex items-center justify-center flex-wrap gap-x-4 ">
            <div class="action text-lime-500" >
                <Icon  icon="typcn:tick" class="w-full h-full" />
            </div>
            <p class="w-full text-center ">Do you want to add</p>
            <button @click="acceptAdd" class="rounded-full w-1/3 border border-black h-fit py-1 text-white scale-100 hover:scale-110 transition-all shrink-0 bg-green-500">Yes</button>
            <button @click="isAdd=false" class="rounded-full w-1/3 border border-black h-fit py-1 text-white scale-100 hover:scale-110 transition-all shrink-0 bg-red-500">No</button>
        </div>
    <!--  logo start -->
    <div class="logo ">
        <Icon :icon=" selectedPlatform=='custom' ? 'typcn:star-full-outline' :`simple-icons:${selectedPlatform}`" class="w-full h-full" />
    </div>
    <!--  logo end -->

    <!-- info start -->
    <div class="flex items-start justify-center flex-col transition-all" >
        <p class="h-8 mt-2 text-center w-full">{{addForm.label.length>0 ? addForm.label : 'Add New'}}</p>
        <!-- add start -->
        <div v-if="openAdd" class="flex items-start justify-center flex-col gap-2 text-black">
            <input v-model="addForm.label" autocomplete="off" class="px-3 py-1 ring-0 border rounded-full outline-transparent focus:outline-fuchsia-950 outline-2" type="text" name="label" placeholder="new label" id="label">
            <input v-model="addForm.link" autocomplete="off" class="px-3 py-1 ring-0 border rounded-full outline-transparent focus:outline-fuchsia-950 outline-2" type="text" name="link" placeholder="new link" id="link" :class="{'border-red-600 bg-red-200 ':linkError==true,'border-white bg-white ':linkError==false}">
            <div class="flex gap-4 w-full justify-between text-white">
                <div class=" select-none w-8 group" @click="backTemplate">
                    <Icon icon="typcn:arrow-left-thick" class="transition-all scale-100 group-hover:scale-110 w-full h-full"/>
                </div>
                <p>{{ selectedPlatform }}</p>
                <div class=" select-none w-8 group" @click="forwTemplate">
                    <Icon icon="typcn:arrow-right-thick" class="transition-all scale-100 group-hover:scale-110 w-full h-full"/>
                </div>
            </div>
        </div>
        <!-- add end -->
    </div>
    <!-- info end -->

    <!-- buttons start -->
    <div class="flex items-center justify-evenly flex-col">
        <!-- open  -->
        <div @click="openAdd=true" v-if="!openAdd" class="action " >
            <Icon  icon="typcn:plus" class="w-full h-full" />
        </div>
        <!-- save  -->
        <div @click="saveLink" v-if="openAdd" class="action " >
            <Icon  icon="typcn:tick" class="w-full h-full" />
        </div>
        <!-- delete inputs  -->
        <div @click="clearInputs" v-if="openAdd" class="action pointer-events-none" :class="{'!pointer-events-auto':addForm.label.length>0 || addForm.link.length>0 }">
            <Icon v-show="addForm.label.length>0 || addForm.link.length>0 " icon="typcn:backspace" class="w-full h-full" />
        </div>
        <!-- close  -->
        <div @click="cancelAdd" v-if="openAdd"  class="action" >
            <Icon icon="typcn:times" class="w-full h-full" />
        </div>
    
    </div>
    <!-- buttons end -->
</div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const openAdd = ref(false)
const isAdd = ref(false)
const linkError = ref(false)
const addForm = reactive({
    label:"",
    link:""
})
const platforms = usePlatforms().getPlatforms
const selectedPlatform = ref("custom")
const counter = ref(0)



const backTemplate = ()=>{
    counter.value -=1
    if(counter.value <=-1)
    {
        counter.value=(platforms.length-1)
    }
    selectedPlatform.value = platforms[counter.value]
    console.log('selectedPlatform.value :>> ', selectedPlatform.value);
}
const forwTemplate = ()=>{
    counter.value +=1
    if(counter.value >= platforms.length)
    {
        counter.value=0
    }
    selectedPlatform.value = platforms[counter.value]
    console.log('selectedPlatform.value :>> ', selectedPlatform.value);
}

const saveLink =()=>{
    if(selectedPlatform.value != 'custom'){
    if(addForm.link.includes(selectedPlatform.value))
    {
        console.log("link doğru")
        isAdd.value=true
    }else
    {
        console.log("link yanlıs")
        isAdd.value=false
        linkError.value=true
        setTimeout(() => {
            linkError.value=false
        }, 1000);
    }
    }
    else{
        isAdd.value=true
    }

}
const acceptAdd = ()=>{
    isAdd.value=false
    openAdd.value=false
    clearInputs()
}
const cancelAdd = ()=>{
    isAdd.value=false
    openAdd.value=false
    clearInputs()
}
const clearInputs = ()=>{
    addForm.link=""
    addForm.label=""
    selectedPlatform.value="custom"
    counter.value=0
    linkError.value=false
}
</script>

<style scoped>

</style>