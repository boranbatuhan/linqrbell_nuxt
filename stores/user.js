
export const useUserStore = defineStore('user', {
    state: () => ({
        user:{
            name:"batuhan",
            surname:"boran",
            uid:"6atuhan",
            links:[
                {name:"github", url:"https://github.com/boranbatuhan", label:"Projectsss"},
                {name:"linkedin", url:"https://linkedin.com/in/batuhanboran", label:"Linkedin"},
                {name:"portfolio", url:"https://batuhanboran.com/", label:"Personal Site"}
            ],
            bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque est quibusdam rerum ut impedit veritatis.",
            isPremium:false,
            theme:"blue"
            
            }

        }
    ),
    getters: {
     getUser:(state)=>{
        return state.user
     }
    },
    actions: {
      addYoutube() {
        this.user.links.push({name:"youtube", url:"https://youtube.com/", label:"Hi youtuuuuppp"})
      },
      setColorTheme(colorValue){
        this.user.theme = colorValue
      },
      setBio(bioValue){
        this.user.bio = bioValue
      }
    },
  })
