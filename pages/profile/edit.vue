<template>
    <div class="min-h-screen border-y-[1rem] bg-fuchsia-400 border-fuchsia-950 flex items-end justify-start flex-col text-white">
        <!-- delete all modal start  -->
        <div v-if="deleteAllModal" class="w-screen h-screen backdrop-blur-sm flex items-center font-baloobhai justify-center fixed z-[999999]">
            <div class="w-80 h-32 flex items-center justify-center flex-col bg-white rounded-lg text-black border border-black drop-shadow-lg">
                <p class="text-xl">Do you want realy delete all ?</p>
                <p class="text-sm"> You have <strong class="underline text-base">{{ user.links.length }}</strong> saved links.</p>
                <div class="flex justify-between w-full px-6 gap-2 text-center mt-3">
                    <div @click="deleteAllModal = false" class="w-full px-2 py-1 rounded-lg bg-red-700 cursor-pointer hover:bg-red-500 transition-all text-white">no</div>
                    <div @click="deleteAll()" class="w-full px-2 py-1 rounded-lg bg-green-700 cursor-pointer hover:bg-green-500 transition-all text-white">yes</div>
                </div>
            </div>
        </div>
        <!-- delete all modal end -->
        <!-- delete link modal start  -->
        <div v-if="deleteLinkModal" class="w-screen h-screen backdrop-blur-sm flex items-center font-baloobhai justify-center fixed z-[999999]">
            <div class="w-fit p-4 flex items-center justify-center flex-col bg-white rounded-lg text-black border border-black drop-shadow-lg">
                <p class="text-xl">Do you want realy delete ?</p>
                <LinkTemplate v-if="selectDeleteLink !=null" :value="selectDeleteLink"/>
                <div class="flex justify-between w-full px-6 gap-2 text-center mt-3">
                    <div @click="deleteLinkModal = false" class="w-full px-2 py-1 rounded-lg bg-red-700 cursor-pointer hover:bg-red-500 transition-all text-white">no</div>
                    <div @click="deleteLink()" class="w-full px-2 py-1 rounded-lg bg-green-700 cursor-pointer hover:bg-green-500 transition-all text-white">yes</div>
                </div>
            </div>
        </div>
        <!-- delete link modal end -->
        
        <p class="mr-2 text-6xl ml-2 md:ml-0 font-baloobhai "> {{ user.isPremium ? `${user.links.length} / 99` : `${user.links.length} / 10` }} <strong class="font-glassAntiqua"> {{ user.name }}</strong></p>
        <strong  class="mr-2  mb-7 text-outline-white-thin text-fuchsia-400 tracking-wider">{{ user.uid }}</strong>


        <!-- buttons start -->
        <div class="flex items-center justify-start flex-col mx-auto container">
            
            <ul v-auto-animate class="flex flex-col items-center justify-center gap-4 my-7 w-full px-2" >
                <li class="flex items-center justify-between w-full md:w-fit ml-8 mr-10">
                    <button @click="goBack" class="px-3 h-8 w-full md:w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:arrow-back"/>Back</button>
                    <button @click="deleteAllModal=true" class="px-3 h-8 w-full md:w-44 py-1 rounded-2xl font-bold bg-fuchsia-950 text-fuchsia-300 mx-4 border-2 hover:border-fuchsia-950 hover:bg-fuchsia-500 border-transparent transition-all flex items-center justify-center gap-2"><Icon class="h-full w-fit"  icon="typcn:delete"/>Delete All</button>
                </li>
                <!-- ADD NEW START -->
                <li class="w-full ml-8 mr-10">
                   <linknew/>
                </li>
                <!-- ADD NEW END -->
                <li  v-for="l in sortedLinks" :key="l" class="w-full flex items-center justify-center gap-2  h-fit  scale-100 hover:scale-105 transition-all " >
                    <!-- move index start -->
                    <div  class="flex items-center justify-center flex-col w-6">
                        <div v-if="l.index>1"  @click="moveUp(l)" class="relative group flex items-center justify-center ">
                            <span class="absolute h-6 w-6  rounded-lg scale-0 bg-fuchsia-950 group-hover:scale-100 transition-all origin-center"></span>
                            <Icon icon="typcn:arrow-sorted-up" class=" relative h-6 w-6 text-fuchsia-950  group-hover:text-fuchsia-400 cursor-pointer"/>
                        </div>
                        
                        <div v-if="l.index < sortedLinks.length"  @click="moveDown(l)" class="relative group flex items-center justify-center ">
                            <span class="absolute h-6 w-6  rounded-lg scale-0 bg-fuchsia-950 group-hover:scale-100 transition-all origin-center"></span>
                            <Icon icon="typcn:arrow-sorted-down"  class=" relative h-6 w-6 text-fuchsia-950  group-hover:text-fuchsia-400 cursor-pointer"/>
                        </div>
                    </div>
                    <!-- move index end -->
                    <linkedit :value="l" v-auto-animate />

                    <!-- delete start -->
                    <div @click="openDeleteLinkModal(l)" class="relative group flex items-center justify-center w-10 ">
                        <span class="absolute w-10 h-10 rounded-lg scale-0 bg-fuchsia-950 group-hover:scale-100 transition-all origin-center"></span>
                        <Icon icon="typcn:trash" class=" relative h-10 w-10 text-fuchsia-950  group-hover:text-fuchsia-400 cursor-pointer"/>
                    </div>
                    <!-- delete end -->
                </li>
            </ul>
        </div>
        <!-- buttons end -->
        
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const user = useUserStore().getUser
const router = useRouter()
const deleteAllModal = ref(false)
const deleteLinkModal = ref(false)
const selectDeleteLink = ref(null)


// links sort 
const sortedLinks = computed (()=>{
    const linksTemp = ref(user.links)
    return linksTemp.value.sort((a,b)=>a.index-b.index)
})

// back button
const goBack = () =>{
    router.back()
}
// delete all links
const deleteAll=()=>{
    useUserStore().deleteAll()
    deleteAllModal.value=false
}

// link to move up
const moveUp=(link)=>{
useUserStore().moveUp(link)
}

// link to move down
const moveDown=(link)=>{
    useUserStore().moveDown(link)
}

// open link delete modal
const openDeleteLinkModal=(link)=>{
    selectDeleteLink.value=link
    deleteLinkModal.value= true
}


// link delete func
const deleteLink=()=>{
    useUserStore().deleteLink(selectDeleteLink.value)
    selectDeleteLink.value=null
    deleteLinkModal.value= false

}


</script>

<style scoped>

</style>