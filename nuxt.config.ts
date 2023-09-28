// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@formkit/auto-animate/nuxt'
    ],
    pinia:{
      autoImports:['defineStore']
    },
    imports:{
      dirs:['./stores']
    },
    app:{
      head:{
      title:"LinqrBell",
      meta:[{name:'description',content:'Linqrbell is a website that gathers all the links together and makes your work easier.'}],
      link:[{rel:'icon',href:'/logo.png'}]
    }
    }

})
