export const usePlatforms = defineStore({
  id: 'platforms',
  state: () => ({ 
    supportedPlatforms:[
        "github",
        "custom",
        "youtube",
        "linkedin",
      ],
  }),
  getters: {
    getPlatforms:(state)=>{
     return state.supportedPlatforms
    }
},
  actions: {},
});