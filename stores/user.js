
export const useUserStore = defineStore('user', {
    state: () => ({
        user:{
            name:"batuhan",
            surname:"boran",
            uid:"6atuhan",
            links:[
                {id:1696175409049 ,name:"github", url:"https://github.com/boranbatuhan", label:"Projectsss",index:1},
                {id:1696175416377 ,name:"linkedin", url:"https://linkedin.com/in/batuhanboran", label:"Linkedin",index:3},
                {id:1696175459965 ,name:"portfolio", url:"https://batuhanboran.com/", label:"Personal Site",index:2}
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
      deleteLink(link){
        this.user.links = this.user.links.filter(i => i!=link)
        for (let i = 0; i < this.user.links.length; i++) {
          this.user.links[i].index=i+1
        }
      },
      deleteAll(){
        this.user.links=[]
      },
      moveUp(link){
        const ind = this.user.links.indexOf(link)
        this.user.links[ind - 1].index +=1 
        this.user.links[ind].index -=1 
      },
      moveDown(link){
        const ind = this.user.links.indexOf(link)
        this.user.links[ind].index +=1 
        this.user.links[ind + 1].index -=1 
      }
    },
  })
