<template>
<div class="rounded-lg overflow-hidden"  v-if="showQr">

        <QRCodeVue3
          :width="300" 
          :height="300" 
          :value="props.userlink" 
          :margin="8"
          :qrOptions="{typeNumber:0,errorCorrectionLevel:'Q'}"
          :imageOptions="{hideBackgroundDots:true,imageSize:0.6,margin:5}"
          :dotsOptions="{type:'rounded',color:qr.dotColor}"
          :backgroundOptions="{color:qr.bgColor}"
          :cornersSquareOptions="{type:'extra-rounded',color: qr.rctColor,gradient:false}"
          :cornersDotOptions="{type:'',color:qr.rctDotColor,gradient:false}"
          :image="qr.isDark ? '../logo.png' : '../logo-white.png'" 
          :download="false"
          :image-options="{ hideBackgroundDots: true, imageSize: 0.4, margin: 10 }" 
          
          />
        </div>
      </template>

<script setup>
import QRCodeVue3 from 'qrcode-vue3'
const qr = useUserStore().getUser.qr
const showQr = ref(false)
const props = defineProps({
    userlink:String
})

onMounted(()=>{
  setTimeout(() => {
  showQr.value=true
}, 300);
})
</script>
