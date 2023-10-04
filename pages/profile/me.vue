<template>
    <div :class="aClass" class="min-h-screen border-y-[1rem]  font-baloobhai  ">
        <div class="container mx-auto flex items-center justify-center flex-col mt-32 py-10 ">
            <label for="username" class="relative text-4xl w-80 ">
                <p class="text-center  w-12  absolute top-1/2 -translate-y-1/2 left-0">Hi</p>
                <input id="username"  v-model="tempName" type="text" class=" pl-16  p-2 truncate text-start  focus:text-center w-full h-full focus:outline-inherit !bg-inherit  focus:!bg-white hover:!bg-white/20 rounded-lg transition-all" spellcheck="false">
            </label>
            <p class="text-outline-white-thin tracking-widest text-xl">{{ user.uid }}</p>
            
            <div class="relative">
                <div v-if="user.bio != tempBio" class="absolute w-4 h-4 left-0 top-4 text-4xl">*</div>
                <textarea name="bio" id="bio" @keydown.enter.prevent v-model="tempBio" class="my-4 p-2 text-inherit w-80 text-center resize-none focus:outline-inherit !bg-inherit  focus:!bg-white hover:!bg-white/20 rounded-lg no-scrollbar h-32" spellcheck="false"></textarea>
            </div>
            <div class="flex items-center justify-center gap-3 w-80">
                <nuxt-link :to="`/${user.uid}`" class="w-full basis-1/2">
                    <button  class="flex items-center justify-center w-full gap-2 h-8 bg-white rounded-lg border border-black text-black px-3 py-1 scale-100 hover:scale-105 transition-all">
                        <Icon icon="typcn:user" class="h-full w-fit"/>
                        Show me
                    </button>
                </nuxt-link>
                <button :disabled="saveDisable" @click="saveChanges" class="flex items-center w-full basis-1/2 justify-center gap-2 h-8 disabled:opacity-25 disabled:pointer-events-none bg-white rounded-lg border border-black text-black px-3 py-1 scale-100 hover:scale-105 transition-all">
                    <Icon icon="typcn:tick" class="h-full w-fit"/>
                    {{ saveText }}
                </button>
            </div>
            <div class="w-80 py-4 flex justify-between text-white flex-wrap gap-5">
                <button @click="setTheme('red')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='red'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-red-500">red</button>
                <button @click="setTheme('amber')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='amber'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-amber-500">amber</button>
                <button @click="setTheme('blue')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='blue'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-blue-500">blue</button>
                <button @click="setTheme('green')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='green'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-green-500">green</button>
                <button @click="setTheme('fuchsia')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='fuchsia'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-fuchsia-500">fuchsia</button>
                <button @click="setTheme('neutral')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='neutral'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-neutral-500">neutral</button>
                <button @click="setTheme('cyan')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='cyan'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-cyan-500">cyan</button>
                <button @click="setTheme('lime')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='lime'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-lime-500">lime</button>
                <button @click="setTheme('teal')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='teal'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-teal-500">teal</button>
                <button @click="setTheme('emerald')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='emerald'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-emerald-500">emerald</button>
                <button @click="setTheme('indigo')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='indigo'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-indigo-500">indigo</button>
                <button @click="setTheme('rose')" :class="{'!border-black !rounded-full -translate-y-1':aClass=='rose'}" class=" transition-all border border-white px-2 rounded-lg py-1 w-20 bg-rose-500">rose</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
const user = useUserStore().getUser
const aClass= ref(user.theme)
const tempBio= ref(user.bio)
const tempName= ref(user.name)
const saveText= ref("Save")
const saveDisable= ref(true)
const setTheme = setCls => {
      aClass.value=setCls
}
const saveChanges = ()=> {
    saveText.value="Saved !"
        setTimeout(() => {
            saveText.value="Save"
            saveDisable.value = true

        }, 1000);
    useUserStore().setColorTheme(aClass.value)  
    useUserStore().setBio(tempBio.value)  
    useUserStore().setName(tempName.value)  
}
watchEffect(()=>{
    if(tempBio.value != user.bio || aClass.value != user.theme || tempName.value != user.name){
        saveText.value="Save*"
        saveDisable.value = false
    }
})
</script>

<style>


</style>