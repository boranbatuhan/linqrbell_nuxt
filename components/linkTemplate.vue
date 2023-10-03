<template>
    <a :href="value.url" target="_blank">
    <div class="link md:!w-80 !text-white my-px" :class="value.name">
        <!--  logo start -->
        <div class="logo ">
            
            <Icon :icon="value.name=='custom' ? 'typcn:star-full-outline' : (value.name == 'portfolio' ? 'typcn:user' : `simple-icons:${value.name}`)" class="w-full h-full" />
        </div>
        <!--  logo end -->
        <!-- info start -->
        <div class="flex items-start justify-center flex-col transition-all" >
            <p class="h-8 mt-2 text-center w-full">{{ value.label }}</p>
    
        </div>
        <!-- info end -->
    </div>
</a>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
    value:Object
})

</script>
