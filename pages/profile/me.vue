<template>
    <div :class="aClass" class="min-h-screen border-y-[1rem]  font-baloobhai  ">
        <div class="container mx-auto flex items-center justify-center flex-col mt-32 py-10">
            <p class="text-4xl my-4 underline underline-offset-8"> hi {{ user.name }} !</p>
            <p class="text-outline-white-thin tracking-widest text-xl">{{ user.uid }}</p>
            
            <div class="relative">
                <div v-if="user.bio != tempBio" class="absolute w-4 h-4 left-0 top-4 text-4xl">*</div>
                <textarea name="bio" id="bio" @keydown.enter.prevent v-model="tempBio" class="my-4 p-2 text-inherit w-80 text-center resize-none focus:outline-inherit !bg-inherit  focus:!bg-white hover:!bg-white/20 rounded-lg no-scrollbar h-32" spellcheck="false"></textarea>
            </div>
            <div class="flex items-center justify-center gap-3 w-80">
                <nuxt-link :to="`/show/${user.uid}`" class="w-full basis-1/2">
                    <button  class="flex items-center justify-center w-full gap-2 h-8 bg-white rounded-lg border border-black text-black px-3 py-1 scale-100 hover:scale-105 transition-all">
                        <Icon icon="typcn:user" class="h-full w-fit"/>
                        Show me
                    </button>
                </nuxt-link>
                <button @click="saveTheme" class="flex items-center w-full basis-1/2 justify-center gap-2 h-8 bg-white rounded-lg border border-black text-black px-3 py-1 scale-100 hover:scale-105 transition-all">
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
const saveText= ref("Save")
const setTheme = setCls => {
      aClass.value=setCls
}
const saveTheme = ()=> {
    saveText.value="Saved !"
        setTimeout(() => {
            saveText.value="Save"
        }, 1000);
    useUserStore().setColorTheme(aClass.value)  
    useUserStore().setBio(tempBio.value)  
}
</script>

<style>
.red{
    @apply
    !text-red-600 !bg-red-500 !border-red-950
}
.amber{
    @apply
    !text-amber-700 !bg-amber-500 !border-amber-950
}
.blue{
    @apply
    !text-blue-700 !bg-blue-500 !border-blue-950
}
.green{
    @apply
    !text-green-700 !bg-green-500 !border-green-950
}
.fuchsia{
    @apply
    !text-fuchsia-700 !bg-fuchsia-500 !border-fuchsia-950
}

.cyan{
    @apply
    !text-cyan-700 !bg-cyan-500 !border-cyan-950
}
.neutral{
    @apply
    !text-neutral-700 !bg-neutral-500 !border-neutral-950
}
.lime{
    @apply
    !text-lime-700 !bg-lime-500 !border-lime-950
}
.teal{
    @apply
    !text-teal-700 !bg-teal-500 !border-teal-950
}
.emerald{
    @apply
    !text-emerald-700 !bg-emerald-500 !border-emerald-950
}
.indigo{
    @apply
    !text-indigo-700 !bg-indigo-500 !border-indigo-950
}
.rose{
    @apply
    !text-rose-700 !bg-rose-500 !border-rose-950
}

</style>