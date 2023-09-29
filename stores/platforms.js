export const usePlatforms = defineStore({
  id: 'platforms',
  state: () => ({ 
    supportedPlatforms:[
      "custom",
        "github",
        "youtube",
        "linkedin"
      ],
  }),
  getters: {
    getPlatforms:(state)=>{
     return state.supportedPlatforms
    }
},
  actions: {},
});