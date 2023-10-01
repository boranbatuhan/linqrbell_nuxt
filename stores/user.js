
export const useUserStore = defineStore('user', {
    state: () => ({
        user:{
            name:"batuhan",
            surname:"boran",
            uid:"6atuhan",
            links:[
                {id:1696175409049 ,name:"github", url:"https://github.com/boranbatuhan", label:"Projectsss",index:1},
                {id:1696175416377 ,name:"linkedin", url:"https://linkedin.com/in/batuhanboran", label:"Linkedin",index:2},
                {id:1696175459965 ,name:"portfolio", url:"https://batuhanboran.com/", label:"Personal Site",index:3}
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
      addLink(linkValue) {
        this.user.links.push(linkValue)
      },
      setColorTheme(colorValue){
        this.user.theme = colorValue
      },
      setBio(bioValue){
        this.user.bio = bioValue
      },
      deleteAll(){
        this.user.links=[]
      }
    },
  })
